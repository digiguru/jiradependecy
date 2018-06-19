//import {example} from './unitExample.js';
import {parseBlockers, parseMultipleBlockers} from './parse.js';
import {toDot, toDotMultiple, removeDashes} from './toDot.js';
import {callApi} from './callApi.js';

//const myData = example;

callApi().then((myData) => {
    const data = toDotMultiple(parseMultipleBlockers(myData));
    console.log(data);
    document.getElementById('root').innerHTML = Viz(data);
});



