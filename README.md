# Jira Dependency Visualizer

A browser-based prototype for visualising Jira issue dependencies as a Graphviz graph.

The public demo accepts Jira-style rows copied from a spreadsheet, converts blocking relationships into Graphviz DOT, and renders the result in the browser with Viz.js.

## Project status

This is the **older browser UI prototype** of the Jira dependency-mapping idea, now preserved as a safe static demo.

The original live Jira flow used a separate Heroku API proxy that is no longer expected to be available. The public deployment does not request Jira credentials or call that proxy. Instead, it works from pasted spreadsheet rows and bundled synthetic mock data.

For the newer scriptable implementation, see **[`digiguru/jira-dependency-map`](https://github.com/digiguru/jira-dependency-map)**. That repository queries Jira directly from a Node CLI, supports YAML-configured field mappings/remapping, and emits raw, transformed or Graphviz DOT output.

### Which repository should I use?

| Repository | Best for | Interface | Jira access |
| --- | --- | --- | --- |
| `jiradependecy` (this repo) | Exploring or sharing dependency data visually | Static web UI with spreadsheet paste | Pasted/exported rows |
| `jira-dependency-map` | Repeatable dependency queries, automation and configurable exports | Node CLI | Direct Jira Cloud REST API |

## Spreadsheet paste workflow

The browser demo is designed to work with rows copied directly from Excel, Google Sheets or a Jira export opened in a spreadsheet.

1. Put the Jira-style data in a sheet with a header row.
2. Copy the cells, including the header row.
3. Paste them into the textarea in the demo.
4. Select **Render pasted rows**.

Spreadsheet copies are normally tab-separated, which is the preferred format. Quoted CSV is also accepted.

### Friendly column names

The demo understands these simple headers:

| Column | Purpose |
| --- | --- |
| `Key` | Jira issue key. Required. |
| `Summary` | Issue title shown in the graph. |
| `Status` | Jira workflow status used for graph colouring. |
| `Story Points` | Optional estimate appended to the graph label. |
| `Group` | Cluster/epic/parent grouping. |
| `Blocks` | Issue keys blocked by this row. |
| `Blocked By` | Issue keys that block this row. |

Multiple keys in `Blocks` or `Blocked By` may be separated with commas or semicolons.

The parser also recognises common Jira-export headers including `Issue key`, `Story point estimate`, `Parent`, `Outward issue link (Blocks)` and `Inward issue link (Blocks)`. Repeated Jira link columns are combined.

## Bundled mock data

[`public/mock-jira-data.tsv`](public/mock-jira-data.tsv) contains a small, entirely synthetic Jira-style dataset. It is intentionally stored as TSV so it can be:

- opened directly in a spreadsheet;
- copied from the repository;
- copied from the demo with **Copy rows**;
- pasted back into the demo and edited freely.

The browser loads this file automatically on startup and renders it as the initial graph.

`public/js/example.js` remains as historical Jira-shaped fixture data used by the original prototype, but the public demo no longer depends on it.

## Architecture

The static browser pipeline is intentionally small:

1. `mock-jira-data.tsv` provides safe synthetic starting data.
2. `spreadsheetParser.js` converts pasted TSV/CSV rows into the graph model.
3. `statusMapper.js` maps Jira workflow states to graph styling.
4. `toDot.js` converts the dependency model to Graphviz DOT.
5. `renderGraph.js` renders DOT as SVG using `@viz-js/viz`.
6. `index.js` coordinates loading, copying, parsing and rendering.

The historical proxy/query modules remain in the repository for reference but are not part of the deployed static demo flow.

## Run locally

Requires Node.js 24.x.

```bash
npm ci
npm start
```

Then open:

```text
http://localhost:4000
```

The Express server is retained as a convenient local static server and exposes the installed Viz.js distribution under `/vendor/viz`.

## Development

```bash
npm test
npm run lint
npm run build
npm run smoke
```

Tests cover Jira parsing, spreadsheet-row parsing, status mapping, Graphviz DOT generation and rendering-related behaviour. The smoke test builds the actual `dist/` output, serves it over HTTP, and verifies the page, spreadsheet parser, mock TSV and Viz.js runtime are all available.

## Live Jira integration caveat

The original browser code reflects an architecture in which a separate service proxied Jira requests to work around browser/CORS constraints. That service was hosted on Heroku and should not be relied on now.

The public demo intentionally avoids asking for Jira credentials. For current direct Jira querying, prefer `jira-dependency-map`.

## History

This project began as a test-driven browser experiment for turning Jira dependency data into a useful visual graph. The later `jira-dependency-map` project carries the same core dependency-graph idea forward as a more configurable command-line workflow.
