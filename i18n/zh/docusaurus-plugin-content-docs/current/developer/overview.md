---
title: 开发者概览
description: 鲸芽 Agent 背后的 API、基础地址与接入方式。
---

鲸芽 Agent 由一套 REST API 驱动。产品的全部能力——从认证到发布——都可以在它之上构建集成。

## 三套 API

| API | 前缀 | 调用者 | 令牌 |
| --- | --- | --- | --- |
| 内容 API | `/v1/*` | 代表租户成员操作的应用 | 租户访问令牌 |
| 租户管理 API | `/api/admin/v1/*` | 租户管理后台 | 租户管理员访问令牌 |
| 平台管理 API | `/api/platform/v1/*` | 平台运营后台 | 平台访问令牌 |

租户管理 API 和平台管理 API 服务于鲸芽 Agent 自己的后台；分别在[租户管理 API](admin-api.md) 和[平台管理 API](platform-api.md) 中概述。本指南聚焦内容 API——在产品之上构建集成所用的 API。

## 基础地址

生产部署中，三套 API 都由以下地址提供：

```
https://saas.theaicommunity.net
```

因此内容 API 调用形如 `https://saas.theaicommunity.net/v1/...`。

## 在线文档

线上服务为每套 API 提供Swagger UI。你可以使用 `Bearer <access_token>` 授权后直接在浏览器中调用接口。

- 内容 API：[https://saas.theaicommunity.net/swagger/content/index.html](https://saas.theaicommunity.net/swagger/content/index.html)（[JSON](https://saas.theaicommunity.net/swagger/content/doc.json)）
- 租户管理 API：[https://saas.theaicommunity.net/swagger/index.html](https://saas.theaicommunity.net/swagger/index.html)
- 平台管理 API：[https://saas.theaicommunity.net/swagger/platform/index.html](https://saas.theaicommunity.net/swagger/platform/index.html)

内容 API 的接口参考见[内容 API 参考](api-reference.md)。

## 如何接入

1. 由租户管理员为你开通账号。
2. 通过 `POST /v1/auth/login` 登录——见[认证](authentication.md)。
3. 使用返回的访问令牌调用接口——请求与响应格式见 [API 约定](conventions.md)。

如果需要超出你租户账号权限的能力，联系平台团队：管理端与平台端令牌单独发放，不能互相使用。
