import { renderGraph } from './renderGraph.js';

describe('Graph renderer', () => {
  it('renders DOT input as SVG using @viz-js/viz', async () => {
    const svg = await renderGraph('digraph { A -> B }');

    expect(svg).toContain('<svg');
    expect(svg).toContain('A');
    expect(svg).toContain('B');
  });
});
