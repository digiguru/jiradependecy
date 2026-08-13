# Jira Dependency Visualizer

A browser-based prototype for visualising Jira issue dependencies as a Graphviz graph.

The application takes Jira issue data, extracts `blocks` / `is blocked by` relationships, maps workflow status information, converts the result to Graphviz DOT, and renders the graph in the browser with Viz.js.

## Project status

This is the **older browser UI prototype** of the Jira dependency-mapping idea.

Its original live Jira flow calls a separate Heroku API proxy that is no longer expected to be available, so the live-login path should be treated as historical until that integration is replaced. The repository still contains the browser rendering pipeline, bundled example Jira data, tests, and a small Express server for serving the UI and Viz.js assets.

For the newer scriptable implementation, see **[`digiguru/jira-dependency-map`](https://github.com/digiguru/jira-dependency-map)**. That repository queries Jira directly from a Node CLI, supports YAML-configured field mappings/remapping, and emits raw, transformed or Graphviz DOT output.

### Which repository should I use?

| Repository | Best for | Interface | Jira access |
| --- | --- | --- | --- |
| `jiradependecy` (this repo) | Exploring the original visual browser prototype | Web UI | Historical proxy-based integration |
| `jira-dependency-map` | Repeatable dependency queries, automation and configurable exports | Node CLI | Direct Jira Cloud REST API |

## Architecture

The browser pipeline is intentionally small:

1. `callApi.js` requests Jira issue data through the original proxy.
2. `parse.js` extracts blocking relationships and display information.
3. `statusMapper.js` maps Jira workflow states to graph styling.
4. `toDot.js` converts the dependency model to Graphviz DOT.
5. `renderGraph.js` renders DOT as SVG using `@viz-js/viz`.
6. The UI modules display the resulting graph and manage the prototype login/query controls.

`public/js/example.js` contains bundled Jira-shaped example data used to exercise the transformation logic without needing a current Jira response.

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

The Express server serves the browser application from `public/` and exposes the installed Viz.js distribution under `/vendor/viz`.

## Development

```bash
npm test
npm run lint
npm run build
```

The tests cover parsing, status mapping, Graphviz DOT generation and rendering-related behaviour.

## Live Jira integration caveat

The browser code still reflects the original architecture in which a separate service proxied Jira requests to work around browser/CORS constraints. That service was hosted on Heroku and should not be relied on now.

Do **not** enter real Jira credentials into a public deployment of this prototype unless the authentication architecture is replaced and reviewed. For current Jira querying, prefer `jira-dependency-map`.

## History

This project began as a test-driven browser experiment for turning Jira dependency data into a useful visual graph. The later `jira-dependency-map` project carries the same core dependency-graph idea forward as a more configurable command-line workflow.
