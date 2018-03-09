export function toDot(input){
    return toDotMultiple([input]);
}

export function toDotMultiple(inputItems){
    return `digraph graphname {\n${toDotLines(inputItems).join("")}}`;
}

export function removeDashes(input) {
    return input.replace('-','');
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
    return lines;
}

