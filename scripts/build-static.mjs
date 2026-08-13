import { cp, mkdir, rm } from 'node:fs/promises';

const publicDir = new URL('../public/', import.meta.url);
const distDir = new URL('../dist/', import.meta.url);
const vizSource = new URL('../node_modules/@viz-js/viz/dist/', import.meta.url);
const vizTarget = new URL('./vendor/viz/', distDir);

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(publicDir, distDir, { recursive: true });
await mkdir(vizTarget, { recursive: true });
await cp(vizSource, vizTarget, { recursive: true });

console.log('Built static demo in dist/');
