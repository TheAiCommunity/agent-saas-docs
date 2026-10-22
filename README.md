# agent-saas-docs

鲸芽 Agent Saas 的使用教程和开发者文档

Documentation website for Agent SaaS — user guides and developer documentation. Built with [Docusaurus](https://docusaurus.io/).

## Development

```bash
npm install
npm run start
```

`npm run start` serves the site locally with live reload. `npm run build` produces the static site in `build/` for all locales; `npm run serve` previews the production build.

The site has two locales: English (default) and Simplified Chinese. `npm run start -- --locale zh` serves the Chinese site during development.

## Structure

- `docs/` — English content, one Markdown/MDX file per page
  - `getting-started/`, `guides/`, `integrations/` — user-facing documentation; pages awaiting final copy are marked with TODO
  - `developer/` — API documentation for the content API (`https://saas.theaicommunity.net`)
  - `reference/` — FAQ, glossary, changelog
- `i18n/zh/` — Simplified Chinese translations mirroring `docs/`, plus translated homepage, navbar, footer and sidebar labels
- `src/` — homepage and styling
- `sidebars.ts` — sidebar structure; pages are listed explicitly in the order they should appear
- `docusaurus.config.ts` — site metadata, locales, search and navbar; `url` and `baseUrl` define where the site is deployed and need updating when the deployment target is decided

## API reference generation

`docs/developer/api-reference.md` is generated from the backend's OpenAPI specification. To regenerate it after API changes:

```bash
python3 scripts/generate-api-reference.py <path-to-frontend-swagger.json>
python3 scripts/generate-api-reference.py <path-to-frontend-swagger.json> --zh
```

The first command writes the English page, the second the Chinese page. The spec lives in the `agent-saas-service` repository at `docs/frontend-swagger.json`.
