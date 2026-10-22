---
title: Authentication
description: Signing in, token refresh, auth error codes, and session headers.
---

The content API uses bearer tokens issued by the login endpoint. A token identifies one member in one tenant: the tenant comes from the token on every call, so you cannot pass a tenant ID to read another tenant's data.

## Sign in

```http
POST /v1/auth/login
Content-Type: application/json
```

```json
{
  "tenant_code": "your-tenant-code",
  "login_identifier": "user@example.com",
  "password": "secret"
}
```

`login_identifier` accepts a username, an email, or a phone number.

A successful response returns the token pair:

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

If `must_change_password` is `true`, call `POST /v1/auth/change-password` before making any other call; the API rejects business endpoints until the password is changed.

## Calling authenticated endpoints

Send the access token on every call:

```http
Authorization: Bearer <access_token>
```

## Refreshing tokens

```http
POST /v1/auth/refresh
Content-Type: application/json
```

Refresh tokens are single-use and rotate on every refresh: the response returns a new access token and a new refresh token, and the old refresh token is invalidated. Clients should refresh serially (one refresh at a time) and store the newest values.

If a refresh token is replayed, the API detects it, force-signs out the session, and returns `AUTH_ROTATED` — this is a security feature, not an error to retry. A 401 with `AUTH_EXPIRED` simply means the access token timed out; refresh and continue.

## Auth error codes

| Code | Meaning |
| --- | --- |
| `AUTH_INVALID` | Wrong credentials, unknown account, or locked account |
| `AUTH_EXPIRED` | Access token expired — refresh |
| `AUTH_REVOKED` | Session was revoked — sign in again |
| `AUTH_ROTATED` | Refresh token replay detected — session force-signed-out |
| `AUTH_LOW_VERSION` | Account or membership changed since sign-in — sign in again |
| `PASSWORD_CHANGE_REQUIRED` | First login — change password before anything else |

## Request headers

| Header | When | Purpose |
| --- | --- | --- |
| `Authorization` | Every authenticated call | Bearer access token |
| `Content-Type: application/json` | Calls with a body | JSON encoding |
| `X-Request-ID` | Optional | Your request ID, echoed in logs and errors |
| `X-Trace-ID` | Optional | Distributed trace correlation |
| `X-Device-ID` / `X-Device-Name` | Authenticated calls | Device identity; not required on login, refresh, or password change |

## Sign out

```http
POST /v1/auth/logout
```

Invalidates the current session. The token pair cannot be used afterwards.
