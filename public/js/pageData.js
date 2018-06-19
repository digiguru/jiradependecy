export function pageGetLogin() {
    const username = document.getElementById('username').value;    
    const password = document.getElementById('password').value;
    return {
        username,
        password
    }
}
export function pageSetLogin(login) {
    if(login) {
        document.getElementById('username').value = login.username;
        document.getElementById('password').value = login.password;    
    } else {
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";   
    }
}

export function removeSavedLogin() {
    localStorage.removeItem('login');
    pageSetLogin();
}

export function saveLogin(login) {
    localStorage.setItem('login', JSON.stringify(login));
}

export function loadLogin() {
    var retrievedObject = localStorage.getItem('login');
    return JSON.parse(retrievedObject);
}