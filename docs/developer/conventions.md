---
title: API conventions
description: Response envelope, error format, headers, and data types shared by every endpoint.
---

## Response envelope

Every JSON response uses the same envelope:

```json
{
  "code": 0,
  "message": "success",
  "data": {}
}
```

- Success: `code` is `0`, `message` is `success`, `data` holds the payload. Endpoints with nothing to return set `data` to `null`.
- Failure: `code` equals the actual HTTP status, `data` is `null`, and the object carries the error fields below.

## Errors

```json
{
  "code": 401,
  "message": "bearer authentication is required",
  "data": null,
  "error_code": "unauthorized",
  "request_id": "f9849e60-d774-4417-b26e-8fde664282c0"
}
```

| Field | Meaning |
| --- | --- |
| `error_code` | Machine-readable business error code, for example `AUTH_INVALID` or `invalid_json` |
| `fields` | Field name to validation message, for input errors |
| `details` | Extra error context, when available |
| `request_id` | Correlates the call with server logs; echo your `X-Request-ID` if you sent one |
| `retryable` | Whether the call can be retried as-is |
| `retry_after` | Seconds to wait after a rate limit (HTTP 429) |
| `operator_action` | Manual step an operator must take, for actionable failures |
| `permission` | The permission code that was missing, on 403 |

HTTP status is always the real status: 400 for bad input, 401 for auth, 403 for permissions, 404 for unknown resources, 409 for conflicts, 422 for validation, 429 for rate limits, 5xx for server faults.

## Status codes for writes

- `200` — read or update succeeded; business endpoints that used to return 204 now return 200 with `data: null`
- `201` — a resource was created
- `202` — an asynchronous operation was accepted

Non-JSON responses (HTML, file downloads, WebSocket messages) keep their own transport formats.

## Request rules

- Unknown fields in request bodies are rejected — the server validates strictly. Send only documented fields.
- Identifiers in paths are UUIDs unless noted otherwise (some resources use business keys, such as account keys).
- Timestamps are RFC 3339. The zero timestamp `0001-01-01T00:00:00Z` means "has not happened yet".
- Nested fields are documented as `a.b` for objects and `a[].b` for array elements.

## Lists and pagination

Simple list endpoints return a plain array. Endpoints that need filtering or paging have a `/search` variant with query parameters — for example `GET /v1/automation-tasks` returns all tasks, while `GET /v1/automation-tasks/search` pages and filters. Check each endpoint's entry in the [reference](/docs/developer/api-reference).

## CORS

The content API does not serve CORS headers. Browser applications should call it through a same-origin proxy (or a gateway on the same domain) rather than cross-origin. Server-to-server clients are unaffected.
