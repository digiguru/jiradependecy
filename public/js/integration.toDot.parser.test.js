import {example} from './unitExample';
import {parseBlockers, parseMultipleBlockers} from './parse';
import {toDot} from './toDot';
import {remapTickets} from './statusMapper';

function ignoreWhiteSpace(string) {
  let r = RegExp("(^[ \t]+|[ \t]+$)", 'gm');
  return  string.replace(r, '');
}
describe('Parse and Dot generator ** These do too much and should be deleted', () => {

  it('Can generate dot notation for entire object', () => {

  expect(ignoreWhiteSpace(toDot(parseBlockers(example, 'WED-5317')))).toBe(ignoreWhiteSpace(
`digraph graphname {
  subgraph cluster_0 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
    label = "WED-7305";
    node [
      label=\"The first ticket\"
    ] WED5317;
  }
  subgraph cluster_1 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
    label = "Others";
    WED6960;
    WED6962;
    WED7039;
  }
  WED5317 -> WED7039;
  WED6960 -> WED5317;
  WED6962 -> WED5317;
}`
  ));

  expect(ignoreWhiteSpace(toDot(parseBlockers(example, 'WED-7039')))).toBe(ignoreWhiteSpace(
`digraph graphname {
    subgraph cluster_0 {
      style=filled;
      color=lightgrey;
      node [style=filled,color=white];
      label = \"WED-7305\";
      WED7039;
    }
    subgraph cluster_1 {
      style=filled;
      color=lightgrey;
      node [style=filled,color=white];
      label = \"Others\";
      WED5317;
      WED911;
    }
    WED5317 -> WED7039;
    WED911 -> WED7039;
  }`
  ));

  });

  it('Can generate dot notation for multiple objects', () => {
    var arr = [
      parseBlockers(example, 'WED-5317'),
      parseBlockers(example, 'WED-7039'),
      parseBlockers(example, 'WED-3774')
    ];

  expect(ignoreWhiteSpace(toDot(arr))).toBe(ignoreWhiteSpace(
`digraph graphname {
  subgraph cluster_0 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
    label = \"WED-7305\";
    node [
      label=\"The first ticket\"
    ] WED5317;
    WED7039;
  }
  subgraph cluster_1 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
    label = \"Others\";
    WED3774;
  }
  subgraph cluster_2 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
    label = \"Others\";
    WED6960;
    WED6962;
    WED911;
  }
  WED3774;
  WED5317 -> WED7039;
  WED6960 -> WED5317;
  WED6962 -> WED5317;
  WED911 -> WED7039;
}`
));

});


it('Parses multiple objects', () => {
  expect(ignoreWhiteSpace(toDot(parseMultipleBlockers(example)))).toBe(ignoreWhiteSpace(
    `digraph graphname {
      subgraph cluster_0 {
        style=filled;
        color=lightgrey;
        node [style=filled,color=white];
        label = \"WED-7305\";
        node [
          label=\"The first ticket\"
        ] WED5317;
        WED7039;
      }
      subgraph cluster_1 {
        style=filled;
        color=lightgrey;
        node [style=filled,color=white];
        label = \"Others\";
        WED3774;
      }
      subgraph cluster_2 {
        style=filled;
        color=lightgrey;
        node [style=filled,color=white];
        label = \"Others\";
        WED6960;
        WED6962;
        WED911;
      }
      WED3774;
      WED5317 -> WED7039;
      WED6960 -> WED5317;
      WED6962 -> WED5317;
      WED911 -> WED7039;
    }`));

});

it('Parses multiple objects', () => {

  const statusMappings = [
    {'input': ['Backlog', 'Ready For Shaping', 'Ready for Development'], 
        'output': {'colour': '#0000ff'}},
    {'input': ['Doing', 'Review', 'Testing'], 
        'output': {'colour': '#FFFF00'}},
    {'input': ['Build', 'Released', 'Ready For Release'], 
        'output': {'colour': '#00FF00'}}
  ];
  const tickets = parseMultipleBlockers(example);
  const remappedTickets = remapTickets(statusMappings, tickets);
  expect(ignoreWhiteSpace(toDot(remappedTickets))).toBe(ignoreWhiteSpace(
    `digraph graphname {
      subgraph cluster_0 {
        style=filled;
        color=lightgrey;
        node [style=filled,color=white];
        label = \"WED-7305\";
        node [
          label=\"The first ticket\"
          color=\"#00FF00\"
        ] WED5317;
        WED7039;
      }
      subgraph cluster_1 {
        style=filled;
        color=lightgrey;
        node [style=filled,color=white];
        label = \"Others\";
        WED3774;
      }
      subgraph cluster_2 {
        style=filled;
        color=lightgrey;
        node [style=filled,color=white];
        label = \"Others\";
        WED6960;
        WED6962;
        WED911;
      }
      WED3774;
      WED5317 -> WED7039;
      WED6960 -> WED5317;
      WED6962 -> WED5317;
      WED911 -> WED7039;
    }`));

});


});
