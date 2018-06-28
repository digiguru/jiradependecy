# Jira Dependancy Graph

`npm install`

Due to me not understanding modules & node - I can't seem to automatically copy the Viz module into the application, so instead I have to manually copy it from node_modules into the 3rdParty Public folder.


`npm start`

https://im-jira-import.herokuapp.com/

This relies on a remote API proxy found here:

https://im-jira-api.herokuapp.com/

## Tasklist

- [x] Create a basic project
- [x] TDD data manipulation to visualization
- [x] Have a file (named ./src/example.js) that contains example raw data
- [x] Add epics
- [ ] Add ticket status (Backlog, In Progress, Done)
- [ ] Allow for different types of JQL queries
- [ ] Allow for different dynamic JQL queruies
- [ ] Make authentication mandatory
- [ ] Link to Jira API (currently CORS settings forbids this)
- [ ] Improve UI
- [ ] Save queries offline
- [ ] Fix the ability to copy 3rd party code into the application

