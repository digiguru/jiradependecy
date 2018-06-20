//import {example} from './unitExample.js';
import {parseBlockers, parseMultipleBlockers} from './parse.js';
import {toDot, toDotMultiple, removeDashes} from './toDot.js';
import {callApi} from './callApi.js';
import LoginUI from './LoginUI.js';
import Storage from './Storage.js';

const loginUI = new LoginUI();
const storage = new Storage();

loginUI.login = storage.loadLogin();


function setLoadingState() {
    document.getElementById('root').innerHTML = "<p>... loading ...</p>";
}



function go() {
    setLoadingState();
    var login = savePageLogin();

    callApi(login).then((myData) => {
        const data = toDotMultiple(parseMultipleBlockers(myData));
        console.log(data);
        document.getElementById('root').innerHTML = Viz(data);
    });
}
go();


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

