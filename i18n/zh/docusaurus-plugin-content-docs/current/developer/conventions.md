---
title: API 约定
description: 所有接口共用的响应格式、错误格式、请求头与数据类型。
---

## 响应格式

所有 JSON 响应使用同一格式：

```json
{
  "code": 0,
  "message": "success",
  "data": {}
}
```

- 成功：`code` 为 `0`，`message` 为 `success`，`data` 为业务数据。没有返回内容的接口 `data` 为 `null`。
- 失败：`code` 等于实际的 HTTP 状态码，`data` 为 `null`，对象中包含下列错误字段。

## 错误

```json
{
  "code": 401,
  "message": "bearer authentication is required",
  "data": null,
  "error_code": "unauthorized",
  "request_id": "f9849e60-d774-4417-b26e-8fde664282c0"
}
```

| 字段 | 含义 |
| --- | --- |
| `error_code` | 业务错误码，例如 `AUTH_INVALID` 或 `invalid_json` |
| `fields` | 字段名到校验错误说明，用于输入错误 |
| `details` | 额外的错误上下文（如有） |
| `request_id` | 用于与服务端日志对账；如果发送了 `X-Request-ID` 会回显 |
| `retryable` | 是否可以按原样重试 |
| `retry_after` | 限流（HTTP 429）后建议等待的秒数 |
| `operator_action` | 需要人工执行的步骤（针对可操作的失败） |
| `permission` | 403 时缺失的权限码 |

HTTP 状态码始终是真实状态：400 输入错误、401 认证、403 权限、404 资源不存在、409 冲突、422 校验失败、429 限流、5xx 服务端故障。

## 写操作的状态码

- `200` — 读取或更新成功；以前返回 204 的业务接口现在返回 200 加 `data: null`
- `201` — 资源已创建
- `202` — 异步操作已受理

非 JSON 响应（HTML、文件下载、WebSocket 消息）保持各自的传输格式。

## 请求规则

- 请求体中的未知字段会被拒绝——服务端严格校验。只发送文档中列出的字段。
- 路径中的标识符通常是 UUID，除非另有说明（部分资源使用业务键，例如账号键）。
- 时间戳为 RFC 3339 格式。零值时间 `0001-01-01T00:00:00Z` 表示"尚未发生"。
- 嵌套字段写作 `a.b`，数组元素写作 `a[].b`。

## 列表与分页

简单的列表接口直接返回数组。需要筛选或分页的接口提供 `/search` 变体和查询参数——例如 `GET /v1/automation-tasks` 返回全部任务，而 `GET /v1/automation-tasks/search` 分页并筛选。各接口的具体参数见[参考](api-reference.md)。

## 跨域

内容 API 不提供 CORS 响应头。浏览器应用应通过同源代理（或同域网关）调用，而不是跨域直连。服务端到服务端的客户端不受影响。
