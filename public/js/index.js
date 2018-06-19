import {example} from './unitExample.js';
import {parseBlockers, parseMultipleBlockers} from './parse.js';
import {toDot, toDotMultiple, removeDashes} from './toDot.js';

console.log(toDotMultiple(parseMultipleBlockers(example)));

