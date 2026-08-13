# Deployment smoke test

The public Vercel demo is built into `dist/` by `npm run build`.

`npm run smoke` starts a temporary local HTTP server against that built output and verifies that the deployment-critical routes respond successfully with non-empty bodies:

- `/`
- `/js/index.js`
- `/vendor/viz/viz.js`

CI runs the smoke test after building and checking that those files exist. This is intended to catch regressions where a build command succeeds but produces an incomplete or unservable static deployment.
