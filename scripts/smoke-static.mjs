import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const routes = new Map([
  ['/', 'index.html'],
  ['/js/index.js', 'js/index.js'],
  ['/js/spreadsheetParser.js', 'js/spreadsheetParser.js'],
  ['/mock-jira-data.tsv', 'mock-jira-data.tsv'],
  ['/vendor/viz/viz.js', 'vendor/viz/viz.js'],
]);

const contentTypes = new Map([
  ['index.html', 'text/html; charset=utf-8'],
  ['js/index.js', 'text/javascript; charset=utf-8'],
  ['js/spreadsheetParser.js', 'text/javascript; charset=utf-8'],
  ['mock-jira-data.tsv', 'text/tab-separated-values; charset=utf-8'],
  ['vendor/viz/viz.js', 'text/javascript; charset=utf-8'],
]);

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url ?? '/', 'http://localhost').pathname;
  const relativePath = routes.get(pathname);

  if (!relativePath) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  try {
    const body = await readFile(join(distDir, relativePath));
    response.writeHead(200, {
      'content-type': contentTypes.get(relativePath) ?? 'application/octet-stream',
    });
    response.end(body);
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    response.end('Unable to read built asset');
  }
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const address = server.address();

if (!address || typeof address === 'string') {
  server.close();
  throw new Error('Unable to determine smoke-test server address.');
}

const baseUrl = `http://127.0.0.1:${address.port}`;

try {
  for (const pathname of routes.keys()) {
    const response = await fetch(`${baseUrl}${pathname}`);
    const body = await response.text();

    if (!response.ok) {
      throw new Error(`${pathname} returned ${response.status}`);
    }

    if (body.length === 0) {
      throw new Error(`${pathname} returned an empty response`);
    }
  }

  const page = await (await fetch(`${baseUrl}/`)).text();
  if (!page.includes('id="jira-data"') || !page.includes('id="render-data"')) {
    throw new Error('Spreadsheet paste controls are missing from the built page.');
  }

  const mockRows = await (await fetch(`${baseUrl}/mock-jira-data.tsv`)).text();
  if (!mockRows.startsWith('Key\tSummary\tStatus') || !mockRows.includes('DEMO-100')) {
    throw new Error('Bundled mock Jira rows are missing or malformed.');
  }

  console.log('Static deployment smoke test passed.');
} finally {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
}
