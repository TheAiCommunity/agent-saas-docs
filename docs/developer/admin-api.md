---
title: Tenant admin API
description: The API behind the tenant management console.
---

The tenant admin API (`/api/admin/v1/*`) backs the tenant management console. It covers member and user management, roles and permissions, departments, sessions and login logs, API keys, LLM configuration and call logs, MCP plugin installations and tool grants, the skill market and installations on the admin side, exports, and billing.

It is not part of the public integration surface of this documentation: it is called by the console application and requires a tenant admin access token. The console and the content API use the same tenant identity, but admin endpoints check admin permissions on top of authentication.

- Interactive documentation: [https://saas.theaicommunity.net/swagger/index.html](https://saas.theaicommunity.net/swagger/index.html)
- Full OpenAPI specification: `services/admin/docs/swagger.json` in the `agent-saas-service` repository (private)

To build against admin endpoints, contact the platform team.
