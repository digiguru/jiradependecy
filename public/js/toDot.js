export function toDot(input){
    return toDotMultiple([input]);
}

export function toDotMultiple(inputItems){
    let text;
    let itemsWithEpics = inputItems.find(x => x.epic);
    if(itemsWithEpics) {
        text = toDotLinesWithEpics(inputItems).join("");
    } else {
        text = toDotLines(inputItems).join("");
    }
    return `digraph graphname {\n${text}}`;
}

export function removeDashes(input) {
    return input.replace('-','');
}
class EpicNotation {
    constructor() {
        this.index = 0;
    }
    toDot(epicName, listItems) {
        return `subgraph cluster_${this.index++} {
  style=filled;
  color=lightgrey;
  node [style=filled,color=white];
${toDotLines(listItems)}
  label = "${epicName}";
}
`;
    }    
}

function toDotLinesWithEpics(inputItems) {
    let lines = [];
    let epicNotation = new EpicNotation();
    let epics = inputItems.reduce(function (r, a) {
        let epicName = a.epic || "Others";
        r[epicName] = r[epicName] || [];
        r[epicName].push(a);
        return r;
    }, Object.create(null));
    Object.keys( epics ).forEach( key => {
        lines.push(epicNotation.toDot(key, epics[key]));
    });
    return [...new Set(lines)];
}

function toDotLines(inputItems) {
    let lines = [];
    inputItems.forEach(input => {
        lines.push(...toDotLine(input));
    });
    //Dedupe
    return [...new Set(lines)];
}

function toDotLine(input) {
    let lines = [];
    if(input['is blocked by']) {
        input['is blocked by'].forEach( blocker => {
            lines.push(`  ${removeDashes(blocker)} -> ${removeDashes(input.key)};\n`);
        });
    }
    if(input.blocks) {
        input.blocks.forEach( blocker => {
            lines.push(`  ${removeDashes(input.key)} -> ${removeDashes(blocker)};\n`);
        });
    }
    if(!lines.length) {
        lines.push(`  ${removeDashes(input.key)};\n`);
    }
    return lines;
}

