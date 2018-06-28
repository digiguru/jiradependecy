
import {toDot, removeDashes} from './toDot';
    
function ignoreWhiteSpace(string) {
  let r = RegExp("(^[ \t]+|[ \t]+$)", 'gm');
  return  string.replace(r, '');
}

describe('Dot notation generator', () => {
  
  it("Removes dashes", () => {
    expect(removeDashes("WED-6789")).toBe("WED6789");
  });

  it('Single Item', () => {
    const input = {
      'key': 'WED-3774',
      'blocks': []
    };
    
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
        `digraph graphname {
          WED3774;
        }`
      ));
  });

  it('Single Item With Status', () => {
    const input = {
      'key': 'WED1212',
      'colour': '#00ff00'
    };
    
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
        `digraph graphname {
          {
            node [
              color="#00ff00"
            ] WED1212;
          }
        }`
      ));
  });

  it('Single Item With Summary', () => {
    const input = {
      'key': 'WED-3774',
      'summary': "Example label"
    };
    
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
        `digraph graphname {
          {
            node [
              label="Example label"
            ] WED3774;
          }
        }`
      ));
  });


  it('Dual items', () => {
    const input = [{
      'key': 'WED-1'
    },{
      'key': 'WED-2'
    }];
    
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
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
    
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
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
    
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
        `digraph graphname {
          WED5317 -> WED7039;
        }`
    ));

  })
 
  it('Multiple blocks dependencies', () => {
    const input = {
      'key': 'WED-5317',
      'blocks': ['WED-7039', 'WED-6789']
    };
      
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
        `digraph graphname {
          WED5317 -> WED6789;
          WED5317 -> WED7039;
        }`
    )); 
  })

  it('Multiple blocked by dependency', () => {
    const input = {
      'key': 'WED-5317',
      'is blocked by': ['WED-6962', 'WED-6960'],
    };
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
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
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
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
    expect(ignoreWhiteSpace(toDot(input)))
      .toBe(ignoreWhiteSpace(
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
  expect(ignoreWhiteSpace(toDot(input)))
    .toBe(ignoreWhiteSpace(
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


