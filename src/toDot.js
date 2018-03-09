export function toDot(input){
    return toDotMultiple([input]);
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
function toDotLines(inputItems) {
    let lines = [];
    inputItems.forEach(input => {
        lines.push(...toDotLine(input));
    });
    return [...new Set(lines)];
}

export function toDotMultiple(inputItems){
    let result = "digraph graphname {\n";
    result += toDotLines(inputItems).join("");
    result += '}';
    return result;
}

export function removeDashes(input) {
    return input.replace('-','');
} 