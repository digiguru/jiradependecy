import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JiraToDotApp from './JiraToDot/JiraToDotApp';
class App extends Component {
  state = {
    response: 'waiting'
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  };
  callApi = async () => {
    console.log("pingging");
    const response = await fetch('/project/WED');
    console.log(response);
    const body = await response.json();

    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body.issues.length;
  };
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JiraToDotApp />
        <p>Done</p>
      </div>
    );
  }
}

export default App;
