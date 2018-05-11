import React from 'react';
import ReactDOM from 'react-dom';
import Dot from './Dot';

it('renders DOT diagram without crashing', () => {
  const div = document.createElement('div');
  const graph = `digraph graphname {
    WED6962 -> WED5317;
    WED6960 -> WED5317;
    WED5317 -> WED7039;
    WED911 -> WED7039;
    WED3774;
  }`
  ReactDOM.render(<Dot graph={graph} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
