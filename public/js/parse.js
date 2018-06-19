export function parseBlockers(data, key) {
    const targetIssue = data.issues.find( issue => {
        return issue.key === key;
    });
    return parseBlocker(targetIssue);
}

function parseBlocker(targetIssue) {
    const keys = {
        'blocks': [],
        'is blocked by': [],
        "key": targetIssue.key
    };
    if(targetIssue && targetIssue.fields && targetIssue.fields.issuelinks) {
        targetIssue.fields.issuelinks.forEach( link => {
            if (link.outwardIssue && link.type && link.type.name === "Blocks") {
                keys['blocks'].push(link.outwardIssue.key);
            }
            if (link.inwardIssue && link.type && link.type.name === "Blocks") {
                keys['is blocked by'].push(link.inwardIssue.key);
            }
        });
    }
    return keys;
}
export function parseMultipleBlockers(data) {
    return data.issues.map(v => {
        return parseBlocker(v);
    });
}