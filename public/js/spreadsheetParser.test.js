import { describe, expect, it } from 'vitest';
import { parseSpreadsheetRows } from './spreadsheetParser.js';

describe('parseSpreadsheetRows', () => {
    it('parses tab-separated spreadsheet rows into graph items', () => {
        const input = [
            'Key\tSummary\tStatus\tStory Points\tGroup\tBlocks\tBlocked By',
            'DEMO-1\tFirst issue\tDoing\t5\tCheckout\tDEMO-2, DEMO-3\t',
            'DEMO-2\tSecond issue\tBacklog\t3\tCheckout\t\tDEMO-1'
        ].join('\n');

        expect(parseSpreadsheetRows(input)).toEqual([
            {
                key: 'DEMO-1',
                summary: 'First issue (5)',
                status: 'Doing',
                epic: 'Checkout',
                blocks: ['DEMO-2', 'DEMO-3'],
                'is blocked by': []
            },
            {
                key: 'DEMO-2',
                summary: 'Second issue (3)',
                status: 'Backlog',
                epic: 'Checkout',
                blocks: [],
                'is blocked by': ['DEMO-1']
            }
        ]);
    });

    it('accepts common Jira export column names and repeated link columns', () => {
        const input = [
            'Issue key\tSummary\tStatus\tStory point estimate\tParent\tOutward issue link (Blocks)\tOutward issue link (Blocks)\tInward issue link (Blocks)',
            'DEMO-10\tJira-shaped row\tTesting\t8\tEpic Alpha\tDEMO-11\tDEMO-12\tDEMO-9'
        ].join('\n');

        expect(parseSpreadsheetRows(input)[0]).toEqual({
            key: 'DEMO-10',
            summary: 'Jira-shaped row (8)',
            status: 'Testing',
            epic: 'Epic Alpha',
            blocks: ['DEMO-11', 'DEMO-12'],
            'is blocked by': ['DEMO-9']
        });
    });

    it('supports quoted CSV as a fallback when tabs are not present', () => {
        const input = [
            'Key,Summary,Status,Group,Blocks',
            'DEMO-20,"Summary, with comma",Released,Platform,DEMO-21'
        ].join('\n');

        expect(parseSpreadsheetRows(input)[0]).toMatchObject({
            key: 'DEMO-20',
            summary: 'Summary, with comma',
            status: 'Released',
            epic: 'Platform',
            blocks: ['DEMO-21']
        });
    });

    it('uses an Ungrouped cluster when no group-like column value is supplied', () => {
        const input = 'Key\tSummary\nDEMO-30\tStandalone';

        expect(parseSpreadsheetRows(input)[0].epic).toBe('Ungrouped');
    });

    it('requires an issue key column', () => {
        const input = 'Summary\tStatus\nMissing key header\tBacklog';

        expect(() => parseSpreadsheetRows(input)).toThrow('A Key or Issue key column is required.');
    });

    it('reports the spreadsheet row when an issue key is missing', () => {
        const input = 'Key\tSummary\n\tMissing key value';

        expect(() => parseSpreadsheetRows(input)).toThrow('Row 2 is missing an issue key.');
    });
});
