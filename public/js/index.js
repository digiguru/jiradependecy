//import {example} from './unitExample.js';
import {parseBlockers, parseMultipleBlockers} from './parse.js';
import {toDot, toDotMultiple, removeDashes} from './toDot.js';
import {callApi} from './callApi.js';

function setLoadingState() {
    document.getElementById('root').innerHTML = "<p>... loading ...</p>";
}

function go() {
    setLoadingState();
    callApi().then((myData) => {
        const data = toDotMultiple(parseMultipleBlockers(myData));
        console.log(data);
        document.getElementById('root').innerHTML = Viz(data);
    });
}

go();

document.getElementById('go').onclick = go;



