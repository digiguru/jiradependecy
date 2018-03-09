import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {example} from './JiraToDot/unitExample';
import {parseMultipleBlockers} from './JiraToDot/parse';
import {toDotMultiple} from './JiraToDot/toDot';
import Viz from 'viz.js';

class App extends Component {
  render() {
    var graph = toDotMultiple(parseMultipleBlockers(example));
    //var svg = {__html: Viz("digraph { a -> b; }")};
    var svg = {__html: Viz(graph)};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
        </p>
        <div dangerouslySetInnerHTML={svg} />
          <p>nice!</p>
      </div>
    );
  }
}

export default App;
