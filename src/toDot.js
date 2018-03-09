export function toDot(input){
    let result = "digraph graphname {\n";
    if(input['is blocked by']) {
        input['is blocked by'].forEach( blocker => {
            result += `  ${removeDashes(blocker)} -> ${removeDashes(input.key)};\n`;
        });
    }
    if(input.blocks) {
        input.blocks.forEach( blocker => {
            result += `  ${removeDashes(input.key)} -> ${removeDashes(blocker)};\n`;
        });
    }
    result += '}';
    return result;
}

export function removeDashes(input) {
    return input.replace('-','');
} 