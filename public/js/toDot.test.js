
import {example} from './unitExample';
import {parseBlockers, parseMultipleBlockers} from './parse';
import {toDot, toDotMultiple, removeDashes} from './toDot';
function ignoreWhiteSpace(string) {
  let r = RegExp("(^[ \t]+|[ \t]+$)", 'gm');
  return  string.replace(r, '');
}
describe('Jira Parser', () => {
  it('Has data', () => {
    expect(example.total).toBe(1);
  });

  it('Can parse out the linked ticket info', () => {
    expect(parseBlockers(example, 'WED-5317')).toMatchObject({
      'key': 'WED-5317',
      'blocks': ['WED-7039'],
      'is blocked by': ['WED-6962', 'WED-6960'],
    });
    expect(parseBlockers(example, 'WED-7039')).toMatchObject({
      'key': 'WED-7039',
      'blocks': [],
      'is blocked by': ['WED-5317','WED-911'],
    });
    expect(parseBlockers(example, 'WED-3774')).toMatchObject({
      'key': 'WED-3774',
      'blocks': [],
      'is blocked by': [],
    });
  });

  it('Parses multiple objects', () => {
    expect(parseMultipleBlockers(example)).toMatchObject([
      {
        "key": "WED-5317",
        "blocks": ["WED-7039"],
        "is blocked by":  ["WED-6962","WED-6960"]
      },
      {
        "blocks": [],
        "is blocked by": ["WED-5317","WED-911"],
        "key": "WED-7039",
      }
      ,
      {
        "blocks": [],
        "is blocked by": [],
        "key": "WED-3774",
      }
    ]);

  });
  it('Removes dashes', () => {
    expect(removeDashes('WED-6789')).toBe('WED6789');
  });
});

describe('Dot notation generator', () => {

  it('Single Item', () => {
    const input = {
      'key': 'WED-3774',
      'blocks': []
    };
    
    expect(ignoreWhiteSpace(toDot(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
  WED3774;
}`
    ));
  });

  it('Dual items', () => {
    const input = [{
      'key': 'WED-1'
    },{
      'key': 'WED-2'
    }];
    
    expect(ignoreWhiteSpace(toDotMultiple(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
  WED1;
  WED2;
}`
    ));
  });

  it('Sorts dual items', () => {
    const input = [{
      'key': 'WED-2'
    },{
      'key': 'WED-1'
    }];
    
    expect(ignoreWhiteSpace(toDotMultiple(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
  WED1;
  WED2;
}`
    ));
  });

  it('Single blocks dependency', () => {
    const input = {
      'key': 'WED-5317',
      'blocks': ['WED-7039']
    };
    
    expect(ignoreWhiteSpace(toDot(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
  WED5317 -> WED7039;
}`
    ));

  })
 
  it('Multiple blocks dependencies, with sort order', () => {
    const input = {
      'key': 'WED-5317',
      'blocks': ['WED-7039', 'WED-6789']
    };
      
    expect(ignoreWhiteSpace(toDot(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
  WED5317 -> WED6789;
  WED5317 -> WED7039;
}`
    )); 
  })

  it('Blocked by dependency', () => {
    const input = {
      'key': 'WED-5317',
      'is blocked by': ['WED-6962', 'WED-6960'],
    };
    expect(ignoreWhiteSpace(toDot(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
  WED6960 -> WED5317;
  WED6962 -> WED5317;
}`
    ));  
  })

  it('Single item in an epic', () => {
    const input = {
      'key': 'WED-5317',
      'epic': 'WED-1212'
    };
    expect(ignoreWhiteSpace(toDot(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
subgraph cluster_0 {
  style=filled;
  color=lightgrey;
  node [style=filled,color=white];
  label = "WED-1212";
  WED5317;
}
}`
    ));
  })

  it('An empty epic (if another one already exists)', () => {
    const input = [{
      'key': 'WED-5317',
      'epic': 'WED-1212'
    },
    {
      'key': 'WED-5318'
    }];
    expect(ignoreWhiteSpace(toDotMultiple(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
subgraph cluster_0 {
  style=filled;
  color=lightgrey;
  node [style=filled,color=white];
  label = "WED-1212";
  WED5317;
}
subgraph cluster_1 {
  style=filled;
  color=lightgrey;
  node [style=filled,color=white];
  label = "Others";
  WED5318;
}
}`
  ));
  })

  it('Can generate Dot notation format with an empty epic', () => {
    const input = [{
      'key': 'WED-5317',
      'epic': 'WED-1212',
      'is blocked by': ['WED-5318','WED-5328'],
      'blocks': ['WED-5322','WED-5323']
    },
    {
      'key': 'WED-5319',
      'epic': 'WED-1212',
      'blocks': ['WED-5320','WED-5321']
    }
  ];
  expect(ignoreWhiteSpace(toDotMultiple(input))).toBe(ignoreWhiteSpace(
`digraph graphname {
subgraph cluster_0 {
  style=filled;
  color=lightgrey;
  node [style=filled,color=white];
  label = "WED-1212";
  WED5317;
  WED5319;
}
subgraph cluster_1 {
  style=filled;
  color=lightgrey;
  node [style=filled,color=white];
  label = "Others";
  WED5318;
  WED5320;
  WED5321;
  WED5322;
  WED5323;
  WED5328;
}
  WED5317 -> WED5322;
  WED5317 -> WED5323;
  WED5318 -> WED5317;
  WED5319 -> WED5320;
  WED5319 -> WED5321;
  WED5328 -> WED5317;
}`
  ));
  })

});

describe('Parse and Dot generator ** These do too much and should be deleted', () => {
  it('Can generate dot notation for entire object', () => {

  expect(ignoreWhiteSpace(toDot(parseBlockers(example, 'WED-5317')))).toBe(ignoreWhiteSpace(
`digraph graphname {
  WED5317 -> WED7039;
  WED6960 -> WED5317;
  WED6962 -> WED5317;
}`
  ));

  expect(ignoreWhiteSpace(toDot(parseBlockers(example, 'WED-7039')))).toBe(ignoreWhiteSpace(
`digraph graphname {
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

  expect(ignoreWhiteSpace(toDotMultiple(arr))).toBe(ignoreWhiteSpace(
`digraph graphname {
  WED3774;
  WED5317 -> WED7039;
  WED6960 -> WED5317;
  WED6962 -> WED5317;
  WED911 -> WED7039;
}`
));

});


it('Parses multiple objects', () => {
  expect(ignoreWhiteSpace(toDotMultiple(parseMultipleBlockers(example)))).toBe(ignoreWhiteSpace(
    `digraph graphname {
  WED3774;
  WED5317 -> WED7039;
  WED6960 -> WED5317;
  WED6962 -> WED5317;
  WED911 -> WED7039;
}`));

});

});

