export function toDot(input){
    return toDotMultiple([input]);
}

export function toDotMultiple(inputItems){
    let text;
    const itemsWithEpics = inputItems.find(x => x.epic);
    let lines = [];
    if(itemsWithEpics) {
        lines = lines.concat(toDotLinesWithEpics(inputItems));
        const itemsWithBlocks = inputItems.find(x => x['is blocked by'] || x['blocks']);
        if(itemsWithBlocks) {
            lines = lines.concat(toDotLines(inputItems).sort((a,b) => {
                return a.localeCompare(b);
            }));
        }
    } else {
        lines = lines.concat(toDotLines(inputItems).sort((a,b) => {
            return a.localeCompare(b);
        }));
    }
    text = lines.join("");
    return `digraph graphname {\n${text}}`;
}

export function removeDashes(input) {
    if(input) {
        return input.replace('-','');
    } else {
        return '';
    }
    
}
class EpicNotation {
    constructor() {
        this.index = 0;
        this.orphandEpicName = "Others";
    }
    toDot(epicName, listItems) {
        const lines = toDotLinesNoDependencies(listItems);
        //console.log({name:"ToDOT", epicName: epicName, listItems: listItems, lines:lines});
    
        return `subgraph cluster_${this.index++} {
  style=filled;
  color=lightgrey;
  node [style=filled,color=white];
  label = "${epicName}";
${lines.join("")}}
`;
    }    
}

function toDotLinesWithEpics(inputItems) {
    let lines = [];
    let epicNotation = new EpicNotation();
    
    
    let blocksStories = inputItems
        .filter(x => x.blocks) // Only get things that are blocked 
        .map(x => x.blocks)
        .reduce((original,next) => [...original,...next], []);

    let blockedByStories =  inputItems
        .filter(x => x['is blocked by']) // Only get things that are blocked 
        .map(x => x['is blocked by'])
        .reduce((original,next) => [...original,...next], []);
    
    let linkedStories = [...blocksStories, ...blockedByStories];
    
    //[].splice()
    let nonEpicStories = [];
    
    let epics = inputItems.reduce(function (total, next) {
        let epicName = next.epic || epicNotation.orphandEpicName;
        let newItemIndex = total.findIndex(v => v.name === epicName);
        if(newItemIndex === -1) {
           total.push({name: epicName, items: [next]});
        } else {
           total[newItemIndex].items.push(next);
        }
        return total;
    }, []);
    //console.log({"name": "OUT EPIC", "epics":epics, "blocks":blocksStories});
    epics.forEach( epic => {
        let epicName = epic.name;
        let stories = epic.items;
        let storyKeys = stories.map(x => x.key);
        let notInEpic = linkedStories.filter(x => !storyKeys.includes(x)).map(x => { return {key:x}});
        lines.push(epicNotation.toDot(epicName, stories));
        
        nonEpicStories = [...nonEpicStories, ...notInEpic];
        /*console.log({
            "name": "IN EPIC",
            "epic": epicName,
            "stories":stories,
            "keys": storyKeys,
            "blocksStories": blocksStories,
            "notInEpic": notInEpic,
            "nonEpicStories": nonEpicStories
        });//, {"notInEpic": notInEpic});*/
        
        linkedStories = linkedStories.filter(v => linkedStories.includes(v.key))
    });
    if(nonEpicStories.length) {
        lines.push(epicNotation.toDot(epicNotation.orphandEpicName, nonEpicStories));
    }
    return [...new Set(lines)];
}

function toDotLines(inputItems) {
    let lines = [];
    inputItems
        .forEach(input => {
            lines.push(...toDotLine(input));
        });
    //Dedupe
    return [...new Set(lines)];
}
function toDotLinesNoDependencies(inputItems) {
    let lines = [];
    inputItems
        .sort((a,b) => {
            return a.key.localeCompare(b.key);
        })
        .forEach(input => {
            if(input) {
                lines.push(toDotLineNoDependencies(input));
            }
        });
    //Dedupe
    return [...new Set(lines)];
}
function toDotLineNoDependencies(input) {
    const text = removeDashes(input.key)
    return `  ${text};\n`;
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

