---
title: 'Plugins: install, configure and the real catalog'
description: What the 19 plugins do, their prerequisites, and how to use them in the workbench.
---

Plugins give the workbench tools for office files, web research, content platforms and enterprise apps. The current catalog contains built-in business tools and enterprise connectors; do not read it as arbitrary plugin packages or CLIs that can be imported and run directly.

## Install and enable for free

1. Click "Plugins" on the left and search for the capability you need.
2. Open the details and read the purpose, prerequisites and setup guide.
3. Click "enable for free". If it still says "company not configured" or "pending authorization", keep working through the preparation steps.
4. Return to the workbench and pick the tools for this round under "Apps and plugins".


![Feishu plugin step-by-step setup guide](/img/tutorials/20261023/04-feishu-guide.png)

*2026-10-23 local interface: handle admin preparation and employee connection in order.*


![Free-enable entrance before installing the Feishu plugin](/img/tutorials/20261023/02-feishu-before-install.png)

*2026-10-23 local interface: read the guide first, then install.*


![Installed, but the company is not configured yet](/img/tutorials/20261023/03-feishu-installed-pending-company.png)

*2026-10-23 local interface: installed and vendor-connected are judged separately.*


Installation is free; models, search, media generation and vendor services may bill by their own rules. Free installation does not pay third-party services for you.

## What the company admin and the employee each do

The company admin saves developer apps or search service configs under "Company integrations"; employees log in to their own vendor account through the connection entrance and confirm the required scopes. App-style connections like Feishu and DingTalk are also limited by the company app's permissions and visibility.


![Empty company admin app configuration form](/img/tutorials/20261023/06-company-config-fields.png)

*2026-10-23 local empty form: fields only, no real keys of any kind.*


After a configuration is saved, connection and per-action permissions still need checking. When a task creates files, saves drafts or writes outward, read the execution confirmation; do not treat "connected" as "written".

## Web reading and web search

- With a clear public web link, reading needs no search key, but it is still subject to the page's access conditions and the current network.
- For active search, the company admin configures a Tavily or Brave Search key; either one is enough.
- Source links in results are for verification; page extraction or search results are not verified facts by themselves.


![Different prerequisites for public web reading and web search](/img/tutorials/20261023/20-search-readiness.png)

*2026-10-23 local interface: reading needs no search key while web search waits for service configuration; this image is not proof of a real external search.*


## The current full catalog

The **19 items** below come from the local backend API on 2026-10-23. The descriptions state the current scope; whether a specific account can act still needs checking.

| Code | Name | Current scope and boundary |
| --- | --- | --- |
| `platform.bilibili` | Bilibili | Account query, task and draft preparation; delivery path decided by the chosen account's capability check |
| `integration.github` | GitHub | Public repo listing and search, README, open issue queries |
| `integration.gmail` | Gmail | Mail search, plain-text body reading, confirmed draft saving |
| `integration.gcalendar` | Google Calendar | Query authorized calendar events, default next 7 days, up to 93 |
| `integration.gdrive` | Google Drive | Find files by name; read Google Docs and UTF-8 TXT, Markdown, CSV |
| `integration.notion` | Notion | Find pages by title within the user's shared scope, page through direct child blocks' text |
| `integration.wps` | WPS 365 | List a specified space directory and query file metadata |
| `platform.twitter` | X / Twitter | Account query, task and draft preparation; delivery path decided by capability check |
| `platform.wechat` | WeChat Official Account | Account query, task and draft preparation; delivery path decided by capability check |
| `content.creator` | Content creation | Search, read, import, subscribe, monitor and organize knowledge from connected sources |
| `office.documents` | Office documents | Generate and read your own office files, list recent files; currently structured text export |
| `platform.xiaohongshu` | Xiaohongshu | Account query, task and draft preparation; delivery path decided by capability check |
| `platform.douyin` | Douyin | Account query, task and draft preparation; delivery path decided by capability check |
| `platform.wechat_moments` | WeChat Moments | Account query, task and draft preparation; delivery path decided by capability check |
| `research.web` | Web search and reading | Public HTML/plain-text reading; Tavily or Brave web search |
| `platform.wechat_finder` | WeChat Channels | Account query, task and draft preparation; delivery path decided by capability check |
| `integration.dingtalk` | DingTalk | App identity and next-level department queries within the authorized scope |
| `integration.feishu` | Feishu | App identity and visible-group listing for the bot |
| `integration.lark` | Feishu enterprise bot | Bot configuration for the content module, delivery records and retry of past deliveries |

Download the public [JSON catalog](/data/catalogs/plugins.public.json) or the [CSV catalog](/data/catalogs/plugins.public.csv). The catalog carries per-item prerequisites, responsible roles, official guide links and registered actions; accounts, install states and credentials are removed.

Word generation and download for office documents has real evidence. Enterprise apps still await real vendor authorization; social publishing is not tested in this batch of screenshots. See [Platform connections](/docs/integrations/platforms) for the remaining conditions.
