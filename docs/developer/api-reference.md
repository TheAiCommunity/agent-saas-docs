---
title: Content API reference
description: Every endpoint of the Agent SaaS content API, grouped by area. Generated from the OpenAPI specification.
---

The content API is what tenant applications call to do work in Agent SaaS: sign in,
manage skills and templates, run automation tasks and publish to social platforms.

- Base URL: `https://saas.theaicommunity.net`
- Interactive docs: [https://saas.theaicommunity.net/swagger/content/index.html](https://saas.theaicommunity.net/swagger/content/index.html)
- OpenAPI JSON: [https://saas.theaicommunity.net/swagger/content/doc.json](https://saas.theaicommunity.net/swagger/content/doc.json)

Authentication, error formats and conventions are described in
[Developer overview](/docs/developer/overview) and
[API conventions](/docs/developer/conventions).

## Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/v1/auth/change-password` | Change own password |
| `POST` | `/v1/auth/login` | Tenant password login |
| `POST` | `/v1/auth/logout` | Log out current tenant session |
| `GET` | `/v1/auth/me` | Current tenant member |
| `GET` | `/v1/auth/permissions` | Current tenant permissions |
| `POST` | `/v1/auth/refresh` | Rotate tenant tokens |

## Templates and content models

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/v1/content-models` | List configured text models for content tasks |
| `GET` | `/v1/templates` | 查询当前租户可用内容模板 |
| `GET` | `/v1/templates/{template_id}` | 查看当前租户可用模板详情 |

## Skills

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/v1/skill-installations` | List tenant skill installations |
| `POST` | `/v1/skill-installations` | Install a skill |
| `GET` | `/v1/skill-installations/{installationId}` | Tenant installation details |
| `PUT` | `/v1/skill-installations/{installationId}` | Update installation settings |
| `DELETE` | `/v1/skill-installations/{installationId}` | Uninstall a skill |
| `PUT` | `/v1/skill-installations/{installationId}/scopes` | Confirm additional skill scopes |
| `PUT` | `/v1/skill-installations/{installationId}/version` | Upgrade pinned skill version |
| `GET` | `/v1/skills` | Browse available skills |
| `GET` | `/v1/skills/{skillId}` | Skill catalog details |

## Social accounts and platform connections

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/v1/platforms` | List platform capabilities |
| `DELETE` | `/v1/platforms/bilibili/accounts/{accountID}` | Disconnect a Bilibili account locally |
| `GET` | `/v1/platforms/douyin/h5-share-readiness` | Read Douyin H5 sharing readiness |
| `GET` | `/v1/platforms/wechat/accounts` | List configured WeChat Official Accounts |
| `POST` | `/v1/platforms/wechat/accounts` | Configure a tenant-owned WeChat Official Account |
| `GET` | `/v1/platforms/wechat/accounts/{accountID}` | Get safe WeChat account configuration |
| `PUT` | `/v1/platforms/wechat/accounts/{accountID}` | Update credentials, name or enabled state |
| `POST` | `/v1/platforms/wechat/accounts/{accountID}/check` | Check saved credentials against WeChat |
| `POST` | `/v1/platforms/xiaohongshu/accounts` | Register a Xiaohongshu account slot |
| `GET` | `/v1/platforms/xiaohongshu/accounts/{account_key}` | Get a Xiaohongshu account |
| `DELETE` | `/v1/platforms/xiaohongshu/accounts/{account_key}` | Remove a Xiaohongshu account connection |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/browser-identity/reset` | Explicitly reset a Xiaohongshu account browser identity |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/cookie-login` | Import and verify Xiaohongshu cookies |
| `GET` | `/v1/platforms/xiaohongshu/accounts/{account_key}/login-bootstrap` | Download metadata for a fresh local Xiaohongshu login |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/login-sessions` | Create a QR login session |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/login-sessions/refresh` | Refresh a QR login session |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/logout` | Log out a Xiaohongshu account connection |
| `GET` | `/v1/platforms/xiaohongshu/login-sessions/{session_id}` | Read persisted Xiaohongshu login state |
| `GET` | `/v1/platforms/xiaohongshu/login-sessions/{session_id}/events` | Subscribe to Xiaohongshu login events over WebSocket |
| `GET` | `/v1/platforms/{platform}/capabilities` | Get platform capability |
| `GET` | `/v1/platforms/{platform}/connection-readiness` | Inspect official platform connection readiness |
| `GET` | `/v1/social-accounts` | List social accounts |
| `GET` | `/v1/social-accounts/{accountID}/profile` | Read account workbench name and code |
| `PUT` | `/v1/social-accounts/{accountID}/profile` | Update account workbench name and code without changing login identity |

## Automation tasks

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/v1/automation-capabilities` | Get content automation capabilities |
| `GET` | `/v1/automation-tasks` | List automation tasks |
| `POST` | `/v1/automation-tasks` | Create an automation task |
| `GET` | `/v1/automation-tasks/search` | Search tenant automation tasks |
| `POST` | `/v1/automation-tasks/validate` | Validate an automation task |
| `GET` | `/v1/automation-tasks/{task_id}` | Get an automation task |
| `PUT` | `/v1/automation-tasks/{task_id}` | Fully replace a paused task using its current ETag |
| `POST` | `/v1/automation-tasks/{task_id}/analyses` | Queue a manual AI analysis |
| `POST` | `/v1/automation-tasks/{task_id}/cancel` | Cancel an automation task |
| `GET` | `/v1/automation-tasks/{task_id}/image-generations` | List persisted image generation jobs and output assets |
| `POST` | `/v1/automation-tasks/{task_id}/image-generations/{generation_id}/retry` | Retry incomplete images; unknown requires explicit allow_unknown |
| `GET` | `/v1/automation-tasks/{task_id}/metrics` | Get task metrics |
| `POST` | `/v1/automation-tasks/{task_id}/pause` | Pause an automation task |
| `GET` | `/v1/automation-tasks/{task_id}/progress` | Task publication progress, reconciliation result and next action |
| `GET` | `/v1/automation-tasks/{task_id}/recommendations` | List AI recommendations |
| `GET` | `/v1/automation-tasks/{task_id}/reports` | List AI analysis reports |
| `POST` | `/v1/automation-tasks/{task_id}/resume` | Resume an automation task |
| `POST` | `/v1/automation-tasks/{task_id}/retry` | Retry a failed or review-blocked task |
| `POST` | `/v1/automation-tasks/{task_id}/run-now` | Schedule a task to run now |
| `GET` | `/v1/automation-tasks/{task_id}/runs` | List latest 200 runs for a task |

## Runs, reports and recommendations

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/v1/automation-dashboard/summary` | Get content automation dashboard |
| `GET` | `/v1/automation-runs` | List latest 200 automation runs |
| `GET` | `/v1/automation-runs/search` | Search tenant automation runs |
| `GET` | `/v1/automation-runs/{run_id}` | Get an automation run |
| `GET` | `/v1/operations/{operation_id}` | Get asynchronous operation |
| `GET` | `/v1/recommendations/{recommendation_id}` | Get an AI recommendation |
| `POST` | `/v1/recommendations/{recommendation_id}/dismiss` | Dismiss an AI recommendation |
| `GET` | `/v1/reports/{report_id}` | Get an AI analysis report |

## Assets

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/v1/assets` | List tenant media assets |
| `POST` | `/v1/assets` | Upload a tenant media asset |
| `GET` | `/v1/assets/groups` | List tenant asset groups |
| `POST` | `/v1/assets/groups` | Create a tenant asset group |
| `PUT` | `/v1/assets/groups/{groupID}` | Rename a tenant asset group |
| `DELETE` | `/v1/assets/groups/{groupID}` | Remove a group and move its media to ungrouped |
| `GET` | `/v1/assets/search` | Search tenant media assets |
| `POST` | `/v1/assets/search` | Search media assets with JSON filters |
| `GET` | `/v1/assets/{asset_id}` | Read tenant asset metadata |
| `PUT` | `/v1/assets/{asset_id}` | Edit tenant media metadata |
| `DELETE` | `/v1/assets/{asset_id}` | Move a tenant asset to the recycle bin |
| `GET` | `/v1/assets/{asset_id}/content` | Download authenticated tenant asset bytes |
| `POST` | `/v1/assets/{asset_id}/restore` | Restore a recycled tenant asset |

## Drafts, reviews and publications

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/v1/content-drafts/{draftID}/douyin-h5-shares` | Prepare a current draft for user-confirmed Douyin H5 sharing |
| `GET` | `/v1/content-drafts/{draft_id}` | Get a content draft |
| `POST` | `/v1/content-drafts/{draft_id}/regenerate` | Regenerate a draft with AI |
| `POST` | `/v1/content-drafts/{draft_id}/revisions` | Create a new draft version |
| `GET` | `/v1/content-reviews` | List content reviews |
| `GET` | `/v1/content-reviews/search` | Search tenant content reviews |
| `GET` | `/v1/content-reviews/{review_id}` | Get a content review |
| `POST` | `/v1/content-reviews/{review_id}/approve` | Approve and submit the exact reviewed draft for publication |
| `POST` | `/v1/content-reviews/{review_id}/changes-requested` | Request changes to reviewed content |
| `POST` | `/v1/content-reviews/{review_id}/reject` | Reject a content review |
| `GET` | `/v1/content-reviews/{review_id}/replacement-options` | Get replacement generation choices for a pending draft |
| `GET` | `/v1/publications` | List publications |
| `GET` | `/v1/publications/{publication_id}` | Get a publication |
| `POST` | `/v1/publications/{publication_id}/collect-comments` | Request comment collection (currently unsupported) |
| `POST` | `/v1/publications/{publication_id}/collect-metrics` | Schedule metric collection now |
| `GET` | `/v1/publications/{publication_id}/comments` | List collected comments |
| `GET` | `/v1/publications/{publication_id}/metric-collection` | Get metric collection state |
| `GET` | `/v1/publications/{publication_id}/metrics` | Get publication metric snapshots |
| `POST` | `/v1/publications/{publication_id}/reconcile` | Reconcile an ambiguous publication |
| `POST` | `/v1/publications/{publication_id}/resolve` | Resolve an ambiguous publication manually |
| `POST` | `/v1/publications/{publication_id}/retry` | Retry an unambiguous failed publication |

## Personal WeChat workspace

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/v1/wechat-personal/accounts` | List personal WeChat accounts |
| `POST` | `/v1/wechat-personal/accounts` | Create an account or attach an existing GeWe node |
| `GET` | `/v1/wechat-personal/accounts/{accountID}` | Get a tenant-owned personal WeChat account |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/actions` | List manual actions and outcomes |
| `POST` | `/v1/wechat-personal/accounts/{accountID}/actions` | Queue one manual message or publication |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/capabilities` | Read channel readiness |
| `POST` | `/v1/wechat-personal/accounts/{accountID}/check` | Check the actual GeWe online state |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/contacts` | Read the GeWe contact and saved-group directory |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/finder` | Read video-account identity and home page |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/groups/{groupID}/members` | Read group members |
| `POST` | `/v1/wechat-personal/accounts/{accountID}/login-sessions` | Create a GeWe login QR session |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/login-sessions/{sessionID}` | Poll a saved GeWe login QR session |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/messages` | Read saved inbound and outbound messages |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/moments` | Read the account Moments list |
| `GET` | `/v1/wechat-personal/actions/{actionID}` | Read one tenant action |
| `POST` | `/v1/wechat-personal/actions/{actionID}/resolve` | Record an explicit manual verification result |
| `POST` | `/v1/wechat-personal/actions/{actionID}/verify` | Read remote publication evidence without resending |
| `GET` | `/v1/wechat-personal/connections` | List safe GeWe service connections |
| `POST` | `/v1/wechat-personal/connections` | Create an encrypted tenant GeWe connection |
| `POST` | `/v1/wechat-personal/connections/{connectionID}/callback` | Configure the server-owned GeWe callback URL |
| `GET` | `/v1/wechat-personal/workspace` | Open the personal WeChat workspace |
| `GET` | `/v1/wechat-personal/workspace/` | Open the personal WeChat workspace with a trailing slash |
| `GET` | `/v1/wechat-personal/workspace/app.js` | Read the personal WeChat workspace scripts |
| `GET` | `/v1/wechat-personal/workspace/automation-panel.js` | Read the personal WeChat workspace scripts |
| `GET` | `/v1/wechat-personal/workspace/style.css` | Read the personal WeChat workspace stylesheet |

## OAuth and callbacks

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/v1/bilibili/oauth/authorize` | Start tenant Bilibili official OAuth |
| `GET` | `/v1/bilibili/oauth/callback` | Public browser-bound Bilibili OAuth callback |
| `GET` | `/v1/douyin/h5/media/{token}/{filename}` | Read one short-lived Douyin H5 share image |
| `HEAD` | `/v1/douyin/h5/media/{token}/{filename}` | Read one short-lived Douyin H5 share image |
| `POST` | `/v1/douyin/oauth/authorize` | Start tenant Douyin OAuth |
| `GET` | `/v1/douyin/oauth/callback` | Public browser-bound Douyin OAuth callback |
| `GET` | `/v1/integrations/gewe/media/{leaseID}/{secret}` | Read an expiring capability-protected media object |
| `POST` | `/v1/integrations/gewe/webhooks/{connectionID}/{secret}` | Persist authenticated GeWe events without automatic replies |
| `POST` | `/v1/twitter/oauth/authorize` | Start browser-bound X/Twitter OAuth |
| `GET` | `/v1/twitter/oauth/callback` | Public browser-bound X/Twitter OAuth callback |

