---
title: Social platform connections
description: How each supported platform is connected to Agent SaaS.
---

Agent SaaS publishes through accounts you connect once, from the product UI. The connection method differs by platform because each platform has different rules.

| Platform | Connection method | Notes |
| --- | --- | --- |
| Xiaohongshu | Guided cookie login | Creates a login session per account; sessions can be refreshed or reset |
| WeChat official account | Account configuration | Verified with a check before use; supports formal publish and mass send |
| Douyin | OAuth authorization | Authorize in the Douyin open platform; an H5 share option exists as an alternative |
| Bilibili | OAuth authorization | Uses the official Bilibili publisher flow |
| Twitter | OAuth authorization | Standard OAuth flow |
| Personal WeChat | Managed connection | Connects a personal WeChat workspace with its own session handling |

## OAuth platforms

For Douyin, Bilibili, and Twitter, connecting an account opens the platform's authorization page. You approve access there, and the platform calls back to Agent SaaS to complete the connection. The callback address is registered with each platform, so authorization only works through the product UI — it cannot be done by hand-crafting the URL.

## Xiaohongshu cookie login

Xiaohongshu has no public publishing API, so the platform maintains a browser login session for each connected account. The login flow guides you through it; afterwards the session is kept alive and refreshed. If a session breaks (for example, after a password change on Xiaohongshu), re-login the account from the connections page. You can also reset the account's browser identity if the platform starts rejecting requests.

## WeChat official account

Add the official account's configuration, then run the connection check. WeChat distinguishes two delivery modes for tasks:

- **Formal publish** — posts go through WeChat's publish flow.
- **Mass send** — posts are sent to followers; this mode always requires manual approval in Agent SaaS.

## What a platform allows

Each platform exposes its own capabilities — what content types and actions are possible. The app reads them per platform (`GET /v1/platforms/{platform}/capabilities` in the API), so what you see in the UI already reflects what the platform allows.

<!-- TODO: final copy from the product team: screenshots per platform, rate limit expectations, and troubleshooting broken sessions. -->
