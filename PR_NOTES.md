# Vercel static demo deployment

This branch fixes the Vercel deployment by producing a real static build in `dist/`, explicitly configuring Vercel to publish that directory, and making the public demo use bundled sample Jira data rather than the retired Heroku proxy.

## Regression coverage

CI now verifies the expected deployment files exist and runs a smoke test that serves the built output over HTTP and checks the homepage, app entrypoint, and Viz.js runtime all return successful non-empty responses.
