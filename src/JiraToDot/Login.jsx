import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props, context) {
        super(props, context);
    
        //this.state = {date: new Date('2018-02-27T12:03:42.000Z')};
        this.prepareLogin = this.prepareLogin.bind(this);
        
    };
    prepareLogin(event) {
        console.log(event.target.parentNode);
        const login = {
            username: event.target.parentNode.getElementsByClassName("username")[0].value,
            password: event.target.parentNode.getElementsByClassName("password")[0].value   
        }
        this.props.handleLogin(login);
        console.log(login);
        //this.setState({date: event.target.value});
        
    }    
  render() {
    return (
        <div>
            <label htmlFor="username">Username</label><input id="username" className="username" type="text" defaultValue="adam@hitched.co.uk" />
            <label htmlFor="password">Password</label><input id="password" className="password" type="password" />
            <input type="button" value="login" onClick={this.prepareLogin}  />
        </div>
    );
  }
}

