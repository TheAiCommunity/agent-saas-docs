---
title: 认证
description: 登录、令牌刷新、认证错误码与会话请求头。
---

内容 API 使用登录接口签发的 Bearer 令牌。一个令牌标识一个租户中的一个成员：每次调用时租户都来自令牌，因此无法通过传入租户 ID 读取其他租户的数据。

## 登录

```http
POST /v1/auth/login
Content-Type: application/json
```

```json
{
  "tenant_code": "你的租户编码",
  "login_identifier": "user@example.com",
  "password": "secret"
}
```

`login_identifier` 支持用户名、邮箱或手机号。

成功响应返回令牌对：

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "tenant_id": "9f1c...",
    "user_id": "84a2...",
    "access_token": "eyJ...",
    "refresh_token": "eyJ...",
    "token_type": "Bearer",
    "expires_in": 3600,
    "requires_mfa": false,
    "must_change_password": false
  }
}
```

如果 `must_change_password` 为 `true`，先调用 `POST /v1/auth/change-password`，再调用其他接口；在修改密码之前，API 会拒绝业务接口。

## 调用需要认证的接口

每次调用都带上访问令牌：

```http
Authorization: Bearer <access_token>
```

## 刷新令牌

```http
POST /v1/auth/refresh
Content-Type: application/json
```

刷新令牌是一次性的，每次刷新都会轮换：响应返回新的访问令牌和新的刷新令牌，旧的刷新令牌作废。客户端应串行刷新（一次只进行一个刷新），并保存最新值。

如果刷新令牌被重放，API 会检测到并强制该会话下线，返回 `AUTH_ROTATED`——这是安全机制，不是可重试的错误。401 加 `AUTH_EXPIRED` 只是访问令牌到期；刷新后继续即可。

## 认证错误码

| 错误码 | 含义 |
| --- | --- |
| `AUTH_INVALID` | 凭证错误、账号不存在或账号被锁定 |
| `AUTH_EXPIRED` | 访问令牌已过期——刷新 |
| `AUTH_REVOKED` | 会话已被撤销——重新登录 |
| `AUTH_ROTATED` | 检测到刷新令牌重放——会话被强制下线 |
| `AUTH_LOW_VERSION` | 账号或成员信息已变更——重新登录 |
| `PASSWORD_CHANGE_REQUIRED` | 首次登录——先修改密码 |

## 请求头

| 请求头 | 使用场景 | 作用 |
| --- | --- | --- |
| `Authorization` | 所有需要认证的调用 | Bearer 访问令牌 |
| `Content-Type: application/json` | 带请求体的调用 | JSON 编码 |
| `X-Request-ID` | 可选 | 你自己的请求 ID，会出现在日志与错误中 |
| `X-Trace-ID` | 可选 | 分布式链路追踪 |
| `X-Device-ID` / `X-Device-Name` | 需要认证的调用 | 设备标识；登录、刷新、改密时不需要 |

## 退出登录

```http
POST /v1/auth/logout
```

使当前会话失效。该令牌对之后不可再用。
