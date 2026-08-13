import { example } from './example.js';
import { parseMultipleBlockers } from './parse.js';
import { toDot } from './toDot.js';
import { remapTickets } from './statusMapper.js';
import { renderGraph } from './renderGraph.js';
import DataUI from './UI/DataUI.js';

const dataUI = new DataUI();

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

async function renderExample() {
    dataUI.LoadingState();

    try {
        const tickets = remapTickets(columnMappings, example.issues);
        const dot = toDot(parseMultipleBlockers(tickets));
        dataUI.Update(await renderGraph(dot));
    } catch (error) {
        console.error(error);
        dataUI.Update('<p role="alert">Unable to render the bundled example dependency graph.</p>');
    }
}

document.getElementById('load-example').onclick = renderExample;
renderExample();
