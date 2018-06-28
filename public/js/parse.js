export function parseBlockers(data, key) {
    const targetIssue = data.issues.find( issue => {
        return issue.key === key;
    });
    return parseBlocker(targetIssue);
}

export function parseBlocker(targetIssue) {
    const keys = {
        'blocks': [],
        'is blocked by': [],
        'key': targetIssue.key
    };
        
    if(targetIssue && targetIssue.fields) {
        if(targetIssue.fields.customfield_11100) {
            keys.epic = targetIssue.fields.customfield_11100;
        }
        if(targetIssue.fields.status && targetIssue.fields.status.name) {
            keys.status = targetIssue.fields.status.name;
        }
        if(targetIssue.fields.summary) {
            keys.summary = targetIssue.fields.summary;
        }
        if(targetIssue.fields.issuelinks) {
            targetIssue.fields.issuelinks.forEach( link => {
                if (link.outwardIssue && link.type && link.type.name === "Blocks") {
                    keys['blocks'].push(link.outwardIssue.key);
                }
                if (link.inwardIssue && link.type && link.type.name === "Blocks") {
                    keys['is blocked by'].push(link.inwardIssue.key);
                }
            });
        }

    }
    return keys;
}
export function parseMultipleBlockers(data) {
    return data.issues.map(v => {
        return parseBlocker(v);
    });
}