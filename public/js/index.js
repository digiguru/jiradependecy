//import {example} from './unitExample.js';
import {parseMultipleBlockers} from './parse.js';
import {toDot} from './toDot.js';
import {remapTickets} from './statusMapper.js';
import {callApi} from './callApi.js';
import LoginUI from './UI/LoginUI.js';
import DataUI from './UI/DataUI.js';
import Storage from './Storage.js';

const loginUI = new LoginUI();
const dataUI = new DataUI();
const storage = new Storage();

loginUI.login = storage.loadLogin();

document.getElementById('go').onclick = go;
document.getElementById('save-login').onclick = savePageLogin;
document.getElementById('delete-login').onclick = deletePageLogin;


function savePageLogin() {
    return storage.saveLogin(loginUI.login);
}
function deletePageLogin() {
    storage.deleteLogin()
    loginUI.login = {};
}
function go() {
    dataUI.LoadingState();
    var login = savePageLogin();

    callApi(login).then((myData) => {

        const columnMappings = [
            {'input': ['Backlog', 'Ready For Shaping', 'Ready for Development'], 
                'output': {'colour': '#0000ff'}},
            {'input': ['Doing', 'Review', 'Testing'], 
                'output': {'colour': '#FFFF00'}},
            {'input': ['Build', 'Released'], 
                'output': {'colour': '#00FF00'}}
        ];
        const tickets = myData.issues;
        const output = remapTickets(columnMappings, tickets);
        const data = toDot(parseMultipleBlockers(output));
        dataUI.Update(Viz(data));
    });
}
go();
