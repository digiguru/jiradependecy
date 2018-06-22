//import {example} from './unitExample.js';
import {parseBlockers, parseMultipleBlockers} from './parse.js';
import {toDot, toDotMultiple, removeDashes} from './toDot.js';
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
        const data = toDotMultiple(parseMultipleBlockers(myData));
        dataUI.Update(Viz(data));
    });
}
go();
