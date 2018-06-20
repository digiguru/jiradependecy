export default class Storage {
    constructor () {
        this.LOGIN = "login";
    }

    deleteLogin() {
        localStorage.removeItem(this.LOGIN);
    }
    
    saveLogin(login) {
        localStorage.setItem(this.LOGIN, JSON.stringify(login));
        return login;
    }
    
    loadLogin() {
        var retrievedObject = localStorage.getItem(this.LOGIN);
        return JSON.parse(retrievedObject);
    }
}

