
import {example} from './unitExample';
import {parseBlockers} from './parse';
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
});

it('Removes dashes', () => {
  expect(removeDashes('WED-6789')).toBe('WED6789');
});

it('Can generate Dot notation format', () => {
  const input = {
    'key': 'WED-5317',
    'blocks': ['WED-7039']
  };
  const output = 
`digraph graphname {
  WED5317 -> WED7039;
}`
expect(toDot(input)).toBe(output); 
})
 
it('Can generate Dot notation format with multiple blocks', () => {
  const input = {
    'key': 'WED-5317',
    'blocks': ['WED-7039', 'WED-6789']
  };
  const output = 
`digraph graphname {
  WED5317 -> WED7039;
  WED5317 -> WED6789;
}`
expect(toDot(input)).toBe(output); 
})

it('Can generate Dot notation format with is blocked by', () => {
  const input = {
    'key': 'WED-5317',
    'is blocked by': ['WED-6962', 'WED-6960'],
  };
  const output = 
`digraph graphname {
  WED6962 -> WED5317;
  WED6960 -> WED5317;
}`;
expect(toDot(input)).toBe(output);  
})

it('Can generate dot notation for entire object', () => {
  expect(toDot(parseBlockers(example, 'WED-5317'))).toBe(`digraph graphname {
  WED6962 -> WED5317;
  WED6960 -> WED5317;
  WED5317 -> WED7039;
}`);
  expect(toDot(parseBlockers(example, 'WED-7039'))).toBe(`digraph graphname {
  WED5317 -> WED7039;
  WED911 -> WED7039;
}`);
});

it('Can generate dot notation for multiple objects', () => {
  var arr = [
    parseBlockers(example, 'WED-5317'),
    parseBlockers(example, 'WED-7039')
  ]

  expect(toDotMultiple(arr)).toBe(`digraph graphname {
  WED6962 -> WED5317;
  WED6960 -> WED5317;
  WED5317 -> WED7039;
  WED911 -> WED7039;
}`);
});



