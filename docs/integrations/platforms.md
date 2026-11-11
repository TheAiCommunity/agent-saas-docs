---
title: Connect content platforms and enterprise apps
description: The company prepares the app, users authorize as needed, then each action is checked.
---

Find the platform you need under "Plugins", read its setup guide, enable it for free, then complete that platform's account connection. Installing a plugin does not log you in, and it does not grant publishing rights by itself.

## Content platform preparation table

| Platform | Prepared by | Connection prerequisites |
| --- | --- | --- |
| Bilibili | Developer + account holder | Developer-configured app; account holder completes OAuth |
| X / Twitter | Developer + account holder | X developer app, a suitable API plan, and the account's OAuth |
| WeChat Official Account | Official account admin | AppID, matching AppSecret, API permissions and the server IP whitelist |
| Xiaohongshu | Account holder | The holder scans the QR code; no MCP Key needed from users |
| Douyin | Developer + account holder | App Client Key / Secret, callback, and the required scopes |
| WeChat Moments | Account holder | GeWe service token, WeChat node AppID, and the holder's own scan |
| WeChat Channels | Account holder | An authorized WeChat node with Channels capability enabled; Moments readiness does not imply Channels publishing |


![Content platform plugins and their entrances](/img/tutorials/20261023/07-content-plugins.png)

*2026-10-23 local plugin interface: the cards show the product entrance, not that every platform is connected.*


## Connect and check an account

1. Open the plugin's details and read "setup and usage guide" first.
2. Click "enable for free", then "connect / manage platform accounts".
3. Complete the configuration, personal QR scan or OAuth on the platform's page; enter keys only in the product's designated config entrance.
4. Back in the plugin, select the account you just connected and click "re-check account/capabilities".
5. Expand "available actions and authorization status" and check draft, share and server-side publish separately.


![Moments connection and account management entrance](/img/tutorials/20261023/08-moments-account.png)

*2026-10-23 local interface: the example shows the connection entrance only; specific account marks are removed.*


## Platform differences that matter

- **WeChat Official Account**: verify AppID, AppSecret, API permissions and the server egress whitelist first. Being able to deliver drafts does not mean full publishing rights.
- **Xiaohongshu**: the holder scans and completes security verification; the server-side runtime is prepared by operations and users provide no MCP Key. When the session expires, sign in again from the product entrance.
- **Bilibili**: account info permission and submission permission are checked separately; USER_INFO alone does not imply submission rights, video submission also needs ARC_BASE.
- **Douyin**: choose content preparation, platform sharing or an approved submission path based on what the page actually offers. After the holder confirms in Douyin, verify the final work.
- **Moments and Channels**: use a valid WeChat node; a WeChat ID or phone number cannot replace the node AppID. Channels is experimental; Moments readiness does not imply Channels publishing.
- **X**: the developer plan, API permissions and the account's OAuth must all be in place.

## Enterprise apps: one company config, employees connect individually

Feishu, DingTalk, Gmail, WPS, Notion, GitHub, Google Drive and Google Calendar are configured by the company admin first; employees then connect their own accounts or confirm the app scopes they allow.

Current query boundaries: Feishu groups visible to the bot, DingTalk authorized departments, GitHub public repos, Notion shared pages, WPS directories and metadata, Drive text files, Calendar events. Gmail has reading and confirmed draft-saving, but no send tool. The full list is in the [plugin catalog](/docs/integrations/mcp).

This batch of enterprise connectors has no verified real vendor connection yet; Google integration is postponed. A prepared GitHub company app is not the same as a configured product or an authorized employee.


![Per-action capability check showing pending items](/img/tutorials/20261023/21-operation-blockers.png)

*2026-10-23 local interface: when blockers appear, finish the configuration or authorization as prompted, then re-check.*
