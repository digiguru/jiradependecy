import { parseSpreadsheetRows } from './spreadsheetParser.js';
import { toDot } from './toDot.js';
import { remapTickets } from './statusMapper.js';
import { renderGraph } from './renderGraph.js';
import DataUI from './UI/DataUI.js';

const dataUI = new DataUI();
const dataInput = document.getElementById('jira-data');
const dataStatus = document.getElementById('data-status');

const columnMappings = [
    {
        input: ['Backlog', 'Ready For Shaping', 'Ready for Development'],
        output: { colour: '#0000ff' }
    },
    {
        input: ['Doing', 'Review', 'Testing'],
        output: { colour: '#FFFF00' }
    },
    {
        input: ['Build', 'Released'],
        output: { colour: '#00FF00' }
    }
];

function setStatus(message, isError = false) {
    dataStatus.textContent = message;
    dataStatus.setAttribute('data-error', String(isError));
}

async function renderRows(input) {
    dataUI.LoadingState();

    try {
        const parsedRows = parseSpreadsheetRows(input);
        const tickets = remapTickets(columnMappings, parsedRows);
        const dot = toDot(tickets);
        dataUI.Update(await renderGraph(dot));
        setStatus(`${tickets.length} Jira-style issues rendered.`);
    } catch (error) {
        console.error(error);
        dataUI.Update('<p role="alert">Unable to render the pasted Jira rows.</p>');
        setStatus(error.message, true);
    }
}

async function loadMockRows() {
    try {
        const response = await fetch('/mock-jira-data.tsv');
        if (!response.ok) {
            throw new Error(`Mock data returned ${response.status}.`);
        }

        dataInput.value = await response.text();
        await renderRows(dataInput.value);
    } catch (error) {
        console.error(error);
        setStatus('Unable to load the bundled mock Jira rows.', true);
    }
}

async function copyRows() {
    const text = dataInput.value;

    if (window.navigator.clipboard?.writeText) {
        await window.navigator.clipboard.writeText(text);
        setStatus('Rows copied to the clipboard. Paste them into a spreadsheet or back here.');
        return;
    }

    dataInput.focus();
    dataInput.select();
    setStatus('Rows selected. Press Ctrl+C or Cmd+C to copy them.');
}

document.getElementById('render-data').onclick = () => renderRows(dataInput.value);
document.getElementById('load-example').onclick = loadMockRows;
document.getElementById('copy-example').onclick = () => {
    copyRows().catch(error => {
        console.error(error);
        setStatus('Clipboard access was unavailable. Select the rows and copy them manually.', true);
    });
};

loadMockRows();
