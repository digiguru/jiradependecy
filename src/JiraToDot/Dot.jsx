import React, { Component } from 'react';
import Viz from 'viz.js';

export default class Dot extends Component {
  render() {
    
    //var svg = {__html: Viz("digraph { a -> b; }")};
    let svg;
    if(this.props.graph) {
        svg = {__html: Viz(this.props.graph)};
    }
    return (
        <div dangerouslySetInnerHTML={svg} />
    );
  }
}

