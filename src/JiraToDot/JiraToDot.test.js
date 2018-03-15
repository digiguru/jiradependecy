
import {example} from './unitExample';
import {parseBlockers, parseMultipleBlockers} from './parse';
import {toDot, toDotMultiple, removeDashes} from './toDot';

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


it('Can generate single in Dot notation format', () => {
  const input = {
    'key': 'WED-3774',
    'blocks': []
  };
  
expect(toDot(input)).toBe(
`digraph graphname {
  WED3774;
}`
);
});

it('Can generate Dot notation format', () => {
  const input = {
    'key': 'WED-5317',
    'blocks': ['WED-7039']
  };
  
expect(toDot(input)).toBe(
`digraph graphname {
  WED5317 -> WED7039;
}`
);

})
 
it('Can generate Dot notation format with multiple blocks', () => {
  const input = {
    'key': 'WED-5317',
    'blocks': ['WED-7039', 'WED-6789']
  };
  
expect(toDot(input)).toBe(
`digraph graphname {
  WED5317 -> WED7039;
  WED5317 -> WED6789;
}`); 
})

it('Can generate Dot notation format with is blocked by', () => {
  const input = {
    'key': 'WED-5317',
    'is blocked by': ['WED-6962', 'WED-6960'],
  };
expect(toDot(input)).toBe(
`digraph graphname {
  WED6962 -> WED5317;
  WED6960 -> WED5317;
}`);  
})

it('Can generate dot notation for entire object', () => {

expect(toDot(parseBlockers(example, 'WED-5317'))).toBe(
`digraph graphname {
  WED6962 -> WED5317;
  WED6960 -> WED5317;
  WED5317 -> WED7039;
}`);

expect(toDot(parseBlockers(example, 'WED-7039'))).toBe(
`digraph graphname {
  WED5317 -> WED7039;
  WED911 -> WED7039;
}`);

});

it('Can generate dot notation for multiple objects', () => {
  var arr = [
    parseBlockers(example, 'WED-5317'),
    parseBlockers(example, 'WED-7039'),
    parseBlockers(example, 'WED-3774')
  ];

expect(toDotMultiple(arr)).toBe(
`digraph graphname {
  WED6962 -> WED5317;
  WED6960 -> WED5317;
  WED5317 -> WED7039;
  WED911 -> WED7039;
  WED3774;
}`);

});


it('Parses multiple objects', () => {
  expect(toDotMultiple(parseMultipleBlockers(example))).toBe(`digraph graphname {
  WED6962 -> WED5317;
  WED6960 -> WED5317;
  WED5317 -> WED7039;
  WED911 -> WED7039;
  WED3774;
}`);

});


