---
title: 示例
description: "端到端 curl 示例：登录、列出模板、创建任务、查看运行。"
---

以下示例可直接对生产环境 API 运行。请替换占位值为自己的信息。`jq` 可选，仅用于从响应中提取字段。

## 1. 登录

```bash
BASE="https://saas.theaicommunity.net"

curl -s -X POST "$BASE/v1/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_code": "你的租户编码",
    "login_identifier": "user@example.com",
    "password": "secret"
  }' | jq '.data'
```

保存令牌：

```bash
RESP=$(curl -s -X POST "$BASE/v1/auth/login" -H "Content-Type: application/json" \
  -d '{"tenant_code":"你的租户编码","login_identifier":"user@example.com","password":"secret"}')
ACCESS=$(echo "$RESP" | jq -r '.data.access_token')
```

## 2. 列出模板

```bash
curl -s "$BASE/v1/templates" \
  -H "Authorization: Bearer $ACCESS" | jq '.data'
```

从结果中选取一个 `template_id` 让任务使用；否则省略，自己描述目标。

## 3. 创建任务

```bash
curl -s -X POST "$BASE/v1/automation-tasks" \
  -H "Authorization: Bearer $ACCESS" \
  -H "Content-Type: application/json" \
  -d '{
    "task_name": "morning xiaohongshu posts",
    "platform": "xiaohongshu",
    "account_id": "你的已连接账号键",
    "topic": "家庭咖啡入门技巧",
    "goal": "面向咖啡新手，实用角度，短列表文",
    "schedule": { "type": "interval" },
    "frequency_seconds": 86400,
    "total_publish_target": 10,
    "approval_required": true
  }'
```

请求体说明：

- `schedule.type` 为 `interval` 或 `daily`。`daily` 时设置 `"time": "09:00"` 并去掉 `frequency_seconds`。
- `account_id` 是已连接小红书账号的账号键，不是 UUID。
- `approval_required: true` 将每篇草稿送人工审核；省略（或设置 `auto_publish`）则任务自行发布。
- 微信任务额外设置 `delivery_mode` 为 `formal_publish` 或 `mass_send`。

如果你在搭建表单，可先校验再创建——`POST /v1/automation-tasks/validate` 执行相同校验但不创建任务。

## 4. 查看任务状态与运行

```bash
curl -s "$BASE/v1/automation-tasks" \
  -H "Authorization: Bearer $ACCESS" | jq '.data'

curl -s "$BASE/v1/automation-tasks/<task_id>/runs" \
  -H "Authorization: Bearer $ACCESS" | jq '.data'
```

## 5. 审核草稿并发布

列出待审核的草稿，批准后由平台发布：

```bash
curl -s "$BASE/v1/content-reviews" \
  -H "Authorization: Bearer $ACCESS" | jq '.data'

curl -s -X POST "$BASE/v1/content-reviews/<review_id>/approve" \
  -H "Authorization: Bearer $ACCESS"
```

批准后平台会发布到已连接的账号；发布状态、指标和评论出现在 `GET /v1/publications` 下。

错误遵循[约定](conventions.md)：`code` 非 0 且带有 `error_code` 表示调用失败——校验问题查看 `fields`，重试前检查 `retryable`。
