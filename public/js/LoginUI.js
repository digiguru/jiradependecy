export default class LoginUI {
    constructor() {
        this.e_username = document.getElementById('username');
        this.e_password = document.getElementById('password');
    }
    set login(login) {
        if(login) {
            this.e_username.value = login.username;
            this.e_password.value = login.password;    
        } else {
            this.e_username.value = "";
            this.e_password.value = "";   
        }
    }
    get login() {
        return {
            username: this.e_username.value,
            password: this.e_password.value
        }
    }
}
