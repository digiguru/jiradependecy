import { instance } from '@viz-js/viz';

let vizPromise;

export async function renderGraph(dot) {
    vizPromise ??= instance();
    const viz = await vizPromise;
    return viz.renderString(dot, { format: 'svg' });
}
