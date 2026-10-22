---
title: Examples
description: "End-to-end curl examples: sign in, list templates, create a task, check a run."
---

The examples below run end to end against the production API. Replace the placeholder values with your own. `jq` is optional and only used to pick fields out of responses.

## 1. Sign in

```bash
BASE="https://saas.theaicommunity.net"

curl -s -X POST "$BASE/v1/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_code": "your-workspace-code",
    "login_identifier": "user@example.com",
    "password": "secret"
  }' | jq '.data'
```

Save the tokens:

```bash
RESP=$(curl -s -X POST "$BASE/v1/auth/login" -H "Content-Type: application/json" \
  -d '{"tenant_code":"your-workspace-code","login_identifier":"user@example.com","password":"secret"}')
ACCESS=$(echo "$RESP" | jq -r '.data.access_token')
```

## 2. List templates

```bash
curl -s "$BASE/v1/templates" \
  -H "Authorization: Bearer $ACCESS" | jq '.data'
```

Pick a `template_id` from the result if you want the task to use one — otherwise omit it and describe the goal yourself.

## 3. Create a task

```bash
curl -s -X POST "$BASE/v1/automation-tasks" \
  -H "Authorization: Bearer $ACCESS" \
  -H "Content-Type: application/json" \
  -d '{
    "task_name": "morning xiaohongshu posts",
    "platform": "xiaohongshu",
    "account_id": "your-connected-account-key",
    "topic": "beginner tips for home espresso",
    "goal": "for coffee beginners, practical angle, short listicle",
    "schedule": { "type": "interval" },
    "frequency_seconds": 86400,
    "total_publish_target": 10,
    "approval_required": true
  }'
```

Notes on the body:

- `schedule.type` is `interval` or `daily`. With `daily`, set `"time": "09:00"` and drop `frequency_seconds`.
- `account_id` is the account key of a connected Xiaohongshu account, not a UUID.
- `approval_required: true` sends every draft to human review; omit it (or set `auto_publish`) to let the task publish on its own.
- WeChat tasks additionally set `delivery_mode` to `formal_publish` or `mass_send`.

Validate before creating if you are building a form — `POST /v1/automation-tasks/validate` returns the same checks without creating anything.

## 4. Check task status and runs

```bash
curl -s "$BASE/v1/automation-tasks" \
  -H "Authorization: Bearer $ACCESS" | jq '.data'

curl -s "$BASE/v1/automation-tasks/<task_id>/runs" \
  -H "Authorization: Bearer $ACCESS" | jq '.data'
```

## 5. Review a draft and publish

List drafts pending review, approve, and let the platform publish:

```bash
curl -s "$BASE/v1/content-reviews" \
  -H "Authorization: Bearer $ACCESS" | jq '.data'

curl -s -X POST "$BASE/v1/content-reviews/<review_id>/approve" \
  -H "Authorization: Bearer $ACCESS"
```

After approval the platform publishes to the connected account; publication status, metrics, and comments appear under `GET /v1/publications`.

Errors follow the [conventions](/docs/developer/conventions): a non-zero `code` with `error_code` means the call failed — check `fields` for validation problems and `retryable` before retrying.
