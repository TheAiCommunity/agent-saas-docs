---
title: 租户管理 API
description: 租户管理后台使用的 API。
---

租户管理 API（`/api/admin/v1/*`）支撑租户管理后台。覆盖成员与用户管理、角色与权限、部门、会话与登录日志、API 密钥、LLM 配置与调用日志、MCP 插件安装与工具授权、技能市场与管理侧安装、导出以及计费。

它不属于本文档的公开集成范围：由后台应用调用，需要租户管理员访问令牌。后台与内容 API 使用同一租户身份，但管理端接口在认证之外还校验管理员权限。

- 在线文档：[https://saas.theaicommunity.net/swagger/index.html](https://saas.theaicommunity.net/swagger/index.html)
- 完整 OpenAPI 规范：`agent-saas-service` 仓库（私有）中的 `services/admin/docs/swagger.json`

如需对接管理端接口，联系平台团队。
