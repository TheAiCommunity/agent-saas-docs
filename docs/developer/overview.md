---
title: Developer overview
description: The APIs behind Agent SaaS, base URLs, and how to get access.
---

Agent SaaS is driven by a REST API. Everything the product does, from authentication to publishing, is available to integrations built on top of it.

## The three API sets

| API | Prefix | Who calls it | Token |
| --- | --- | --- | --- |
| Content API | `/v1/*` | Applications acting for a tenant member | Tenant access token |
| Tenant admin API | `/api/admin/v1/*` | The tenant management console | Tenant admin access token |
| Platform admin API | `/api/platform/v1/*` | The platform operations console | Platform access token |

The tenant admin and platform admin APIs serve Agent SaaS's own consoles; they are summarized in [Tenant admin API](/docs/developer/admin-api) and [Platform admin API](/docs/developer/platform-api). This guide focuses on the content API, which is the API for building on the product.

## Base URL

In the production deployment, all three API sets are served from:

```
https://saas.theaicommunity.net
```

So a content API call goes to `https://saas.theaicommunity.net/v1/...`.

## Interactive documentation

The live service hosts Swagger UI for each API set. You can authorize with `Bearer <access_token>` and call endpoints directly from the browser.

- Content API: [https://saas.theaicommunity.net/swagger/content/index.html](https://saas.theaicommunity.net/swagger/content/index.html) ([JSON](https://saas.theaicommunity.net/swagger/content/doc.json))
- Tenant admin API: [https://saas.theaicommunity.net/swagger/index.html](https://saas.theaicommunity.net/swagger/index.html)
- Platform admin API: [https://saas.theaicommunity.net/swagger/platform/index.html](https://saas.theaicommunity.net/swagger/platform/index.html)

A generated endpoint reference for the content API is in [Content API reference](/docs/developer/api-reference).

## Getting access

1. Get an account in a tenant from its admin.
2. Sign in via `POST /v1/auth/login` — see [Authentication](/docs/developer/authentication).
3. Call endpoints with the returned access token — see [API conventions](/docs/developer/conventions) for the request/response format.

For anything beyond what your tenant account allows, ask the platform team: admin and platform tokens are issued separately and cannot be used interchangeably.
