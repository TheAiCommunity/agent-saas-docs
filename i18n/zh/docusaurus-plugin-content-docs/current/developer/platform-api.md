---
title: 平台管理 API
description: 平台运营后台使用的 API。
---

平台管理 API（`/api/platform/v1/*`）支撑平台运营后台。覆盖租户管理、运营人员与角色、套餐与计费、技能市场目录与审核、MCP 插件目录与版本、字典、菜单、设置、站内信、审计与登录日志，以及内容/社媒运营监督。

它使用独立的平台身份：平台令牌单独发放，不携带租户 ID，因此租户令牌无法调用平台接口，反之亦然。访问仅限平台运营人员。

- 在线文档：[https://saas.theaicommunity.net/swagger/platform/index.html](https://saas.theaicommunity.net/swagger/platform/index.html)
- 完整 OpenAPI 规范：`agent-saas-service` 仓库（私有）中的 `services/platform/docs/swagger.json`
