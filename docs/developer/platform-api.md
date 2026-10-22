---
title: Platform admin API
description: The API behind the platform operations console.
---

The platform admin API (`/api/platform/v1/*`) backs the platform operations console used by The AI Community staff. It covers workspace (tenant) management, operators and roles, packages and billing, the skill market catalog and reviews, MCP plugin catalog and versions, dictionaries, menus, settings, inbox announcements, audit and login logs, and content/social operations oversight.

It uses a separate platform identity: platform tokens are issued independently and carry no workspace ID, so a workspace token cannot call platform endpoints and vice versa. Access is restricted to platform operators.

- Interactive documentation: [https://saas.theaicommunity.net/swagger/platform/index.html](https://saas.theaicommunity.net/swagger/platform/index.html)
- Full OpenAPI specification: `services/platform/docs/swagger.json` in the `agent-saas-service` repository (private)
