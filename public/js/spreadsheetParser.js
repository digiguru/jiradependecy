const HEADER_ALIASES = {
    key: ['key', 'issuekey'],
    summary: ['summary'],
    status: ['status'],
    storyPoints: ['storypoints', 'storypointestimate', 'points'],
    epic: ['group', 'epic', 'epicname', 'parent', 'parentsummary'],
    blocks: ['blocks', 'outwardissuelinkblocks'],
    blockedBy: ['blockedby', 'isblockedby', 'inwardissuelinkblocks']
};

function normaliseHeader(value) {
    return String(value ?? '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
}

function parseCsvLine(line) {
    const cells = [];
    let current = '';
    let quoted = false;

    for (let index = 0; index < line.length; index += 1) {
        const character = line[index];

        if (character === '"') {
            if (quoted && line[index + 1] === '"') {
                current += '"';
                index += 1;
            } else {
                quoted = !quoted;
            }
        } else if (character === ',' && !quoted) {
            cells.push(current);
            current = '';
        } else {
            current += character;
        }
    }

    cells.push(current);
    return cells;
}

function splitLine(line, delimiter) {
    return delimiter === '\t' ? line.split('\t') : parseCsvLine(line);
}

function splitIssueKeys(values) {
    return [...new Set(values
        .flatMap(value => String(value ?? '').split(/[;,]/))
        .map(value => value.trim())
        .filter(Boolean))];
}

function findColumns(headers, aliases) {
    return headers
        .map((header, index) => ({ header: normaliseHeader(header), index }))
        .filter(({ header }) => aliases.includes(header))
        .map(({ index }) => index);
}

function valueAt(row, columns) {
    const column = columns[0];
    return column === undefined ? '' : String(row[column] ?? '').trim();
}

function valuesAt(row, columns) {
    return columns.map(column => String(row[column] ?? '').trim());
}

export function parseSpreadsheetRows(input) {
    const lines = String(input ?? '')
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .split('\n')
        .filter(line => line.trim().length > 0);

    if (lines.length < 2) {
        throw new Error('Paste a header row and at least one Jira issue row.');
    }

    const delimiter = lines[0].includes('\t') ? '\t' : ',';
    const headers = splitLine(lines[0], delimiter);
    const columns = Object.fromEntries(
        Object.entries(HEADER_ALIASES).map(([name, aliases]) => [name, findColumns(headers, aliases)])
    );

    if (!columns.key.length) {
        throw new Error('A Key or Issue key column is required.');
    }

    return lines.slice(1).map((line, index) => {
        const rowNumber = index + 2;
        const row = splitLine(line, delimiter);
        const key = valueAt(row, columns.key);

        if (!key) {
            throw new Error(`Row ${rowNumber} is missing an issue key.`);
        }

        const summary = valueAt(row, columns.summary) || key;
        const storyPoints = valueAt(row, columns.storyPoints);
        const displaySummary = storyPoints ? `${summary} (${storyPoints})` : summary;

        return {
            key,
            summary: displaySummary,
            status: valueAt(row, columns.status),
            epic: valueAt(row, columns.epic) || 'Ungrouped',
            blocks: splitIssueKeys(valuesAt(row, columns.blocks)),
            'is blocked by': splitIssueKeys(valuesAt(row, columns.blockedBy))
        };
    });
}
