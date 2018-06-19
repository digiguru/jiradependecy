//import {example} from './unitExample.js';
import {parseBlockers, parseMultipleBlockers} from './parse.js';
import {toDot, toDotMultiple, removeDashes} from './toDot.js';
import {callApi} from './callApi.js';
import {pageGetLogin, pageSetLogin, saveLogin, loadLogin, removeSavedLogin} from './pageData.js';



function setLoadingState() {
    document.getElementById('root').innerHTML = "<p>... loading ...</p>";
}

function savePageLogin() {
    var login = pageGetLogin();
    saveLogin(login);
    return login;
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
const login = loadLogin();
pageSetLogin(login);
go();

document.getElementById('go').onclick = go;
document.getElementById('save-login').onclick = savePageLogin;
document.getElementById('delete-login').onclick = removeSavedLogin;



