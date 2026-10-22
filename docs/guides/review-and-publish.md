---
title: Review and publish
description: What happens between a generated draft and a published post.
---

## The path of a draft

1. The task generates a draft and its images.
2. The draft enters review — unless the task is allowed to publish automatically.
3. A reviewer approves, requests changes, or rejects the draft.
4. Approved drafts are published to the connected account.
5. The platform collects publication status, metrics, and comments back into the task's reports.

## When review is required

By default every draft waits for review before publishing; a task only publishes on its own when `auto_publish` is enabled. Some situations force a review regardless:

- WeChat mass send always requires manual approval.
- Content that hits banned words, misses required disclosures, contains links to non-allowed domains, or exceeds length limits is flagged for review.
- Publishers can also re-route a publication for review when something looks wrong after the fact.

## After publishing

Publications are tracked per post: status, metrics (views, likes, and so on), and comments. Metrics and comments are collected on demand or automatically, and feed the task's reports. If a publication failed (for example, the platform rejected the post), you can retry it from the task view.

<!-- TODO: final copy from the product team: review UI walkthrough, approval workflows for teams, and examples of flagged content. -->
