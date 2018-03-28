export default class TicketData {
    
    constructor(login) {
        this.jira = new JiraApi({
            ...login,
            protocol: 'https',
            host: "im-jira-import.herokuapp.com",
            apiVersion: '2',
            strictSSL: true
        });
    }


    loadExample () {
        return currentProject("WED");
        //return this.jira.findIssue("WED-5318");
        /*
            .then(issue => {
                console.log(`Status: ${issue.fields.status.name}`);
            })
            .catch(err => {
                console.error(err);
            });
            this.setState({graph: toDotMultiple(parseMultipleBlockers(example))});
        */
    }
    currentProject (project) {
        return search(`project = ${project} and Sprint in openSprints() and type in standardIssueTypes()`);
    }
    currentProject (version) {
        return search(`'fix versions' = ${version} and Sprint in openSprints() and type in standardIssueTypes()`);
    }
    search(jql) {
        return this.jira.searchJira(jql);
    }
}
