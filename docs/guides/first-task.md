---
title: Create your first task
description: What an automation task is made of and how to set one up.
---

An automation task is a standing instruction: on a schedule, generate content about a topic for a platform, and publish it through a connected account until a total target is reached. Tasks run in the background — you do not need to press a button each time.

## The parts of a task

| Part | What it does |
| --- | --- |
| Topic and goal | What to write about, for whom, and in what form |
| Platform and account | Where the content is published and as which account |
| Template | The content shape for the platform; provides a default goal when set |
| Skills | Up to ten installed writing skills that shape the output |
| Schedule | Generates on an interval, or once per day at a fixed time |
| Publish target | How many successful posts the task should produce in total |
| Images | Auto-generated images or images picked from your asset library |

## Required settings

- `task_name` — any non-empty name
- `platform` — `xiaohongshu`, `wechat`, or `douyin`
- `account_id` — a connected account on that platform
- `topic` — what to write about
- `goal` — required unless the template supplies a default goal
- `schedule` — interval mode needs `frequency_seconds`; daily mode needs `schedule.time` (00:00–23:59)
- `total_publish_target` — a number greater than zero

WeChat tasks also need a delivery mode: formal publish or mass send. Mass send always requires manual approval.

## Platform-specific behavior

- Xiaohongshu: titles are capped at 20 characters and content at 1000 characters by default; longer text is flagged in review.
- WeChat official account: can generate up to 8 articles per run; covers use the first generated image unless you set one.
- Douyin: images for Douyin tasks must come from the asset library, not from URLs.

## What happens next

Each time the schedule fires, the task generates a batch of drafts and images. Drafts land in review (or publish directly if the task is allowed to). Missed daily runs are skipped, not back-filled.

<!-- TODO: final copy from the product team: UI walkthrough with screenshots, example topics, and a worked example per platform. -->
