---
title: Quickstart
description: The shortest path from sign-in to your first published post.
---

This page walks through the shortest path to a published post. The product team will add screenshots and final wording; every fact below is checked against the current product.

## What you need

- An account in a tenant. Sign-in needs the tenant code plus a username, email, or phone number.
- A social media account on at least one supported platform: Xiaohongshu, WeChat official account, Douyin, Bilibili, or Twitter.
- A template for the platform you want to publish to.

## 1. Sign in

Open the Agent SaaS app and sign in with your tenant code and credentials. On a first login the app requires a password change before anything else. Details in [Accounts and sign-in](/docs/getting-started/accounts).

## 2. Connect a social media account

Connection methods differ per platform — some use OAuth, Xiaohongshu uses a guided cookie login. See [Social platform connections](/docs/integrations/platforms), then come back.

## 3. Pick a template and skills

Templates define the shape and goal of the content. Skills are optional writing add-ons you can install from the skill market; a task can use up to ten. See [Skills](/docs/guides/skills).

## 4. Create an automation task

A task needs at least:

| Field | What it is |
| --- | --- |
| `task_name` | A name for the task |
| `platform` | Where to publish: `xiaohongshu`, `wechat`, or `douyin` |
| `account_id` | The connected account to publish as |
| `topic` | What to write about |
| `goal` | Audience, angle, and format (unless the template provides one) |
| `schedule` | How often to generate: on an interval, or daily at a fixed time |
| `total_publish_target` | How many posts should succeed in total |

Step-by-step instructions in [Create your first task](/docs/guides/first-task).

## 5. Review and publish

By default, generated content waits for your approval. You approve, request changes, or reject each draft; approved content is published to the connected account. Tasks can also be allowed to publish automatically. Details in [Review and publish](/docs/guides/review-and-publish).

## 6. Watch it run

Each task keeps a history of runs, reports, and recommendations on the task dashboard. See [Automation runs](/docs/guides/automation).
