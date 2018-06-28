import {remapTickets} from './statusMapper';


it('Renames card statuses based on their mappings', () => {

    const columnMappings = [
        {'input': ['Backlog', 'Ready For Shaping', 'Ready for Development'], 
            'output': 'Todo'},
        {'input': ['Doing', 'Review', 'Testing'], 
            'output': 'Doing'},
        {'input': ['Build', 'Released'], 
            'output': 'Done'}
    ];

    const tickets = [
        {
            "key": "WED-7453", 
            "status": "Ready for Development", 
            "summary": "Generate the regression test suite for the app"
        }, 
        {
            "key": "WED-1234", 
            "status": "Doing", 
            "summary": "Another example of a ticket"
        },
        {
            "key": "WED-7445", 
            "status": "Backlog", 
            "summary": "Add new date to training page"
        },
        {
            "key": "WED-1111", 
            "status": "Released", 
            "summary": "Another example of a ticket"
        }
    ];

    const output = remapTickets(columnMappings, tickets);
    
    expect(output).toMatchObject([
        {
            "key": "WED-7453", 
            "status": "Todo", 
            "summary": "Generate the regression test suite for the app"
        }, 
        {
            "key": "WED-1234", 
            "status": "Doing", 
            "summary": "Another example of a ticket"
        },
        {
            "key": "WED-7445", 
            "status": "Todo", 
            "summary": "Add new date to training page"
        },
        {
            "key": "WED-1111", 
            "status": "Done", 
            "summary": "Another example of a ticket"
        }
    ]);

});

it('Puts dynamic objects in based on mappings', () => {

    const columnMappings = [
        {'input': ['Backlog', 'Ready For Shaping', 'Ready for Development'], 
            'output': {'colour': '#0000ff'}},
        {'input': ['Doing', 'Review', 'Testing'], 
            'output': {'colour': '#FFFF00'}},
        {'input': ['Build', 'Released'], 
            'output': {'colour': '#00FF00'}}
    ];

    const tickets = [
        {
            "key": "WED-7453", 
            "status": "Ready for Development", 
            "summary": "Generate the regression test suite for the app"
        }, 
        {
            "key": "WED-1234", 
            "status": "Doing", 
            "summary": "Another example of a ticket"
        },
        {
            "key": "WED-7445", 
            "status": "Backlog", 
            "summary": "Add new date to training page"
        },
        {
            "key": "WED-1111", 
            "status": "Released", 
            "summary": "Another example of a ticket"
        }
    ];

    const output = remapTickets(columnMappings, tickets);
    
    expect(output).toMatchObject([
        {
            "key": "WED-7453", 
            'colour': '#0000ff', 
            "summary": "Generate the regression test suite for the app"
        }, 
        {
            "key": "WED-1234", 
            'colour': '#FFFF00', 
            "summary": "Another example of a ticket"
        },
        {
            "key": "WED-7445", 
            'colour': '#0000ff', 
            "summary": "Add new date to training page"
        },
        {
            "key": "WED-1111", 
            'colour': '#00FF00', 
            "summary": "Another example of a ticket"
        }
    ]);

});

