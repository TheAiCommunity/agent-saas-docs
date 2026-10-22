---
title: Automation runs
description: Schedules, run history, and the task dashboard.
---

## Schedules

A task generates content on one of two schedules:

- **Interval** — every `frequency_seconds` seconds. Use this for high-frequency accounts.
- **Daily** — once per day at a fixed local time (`schedule.time`), computed in the task's timezone. Missed days are skipped, not back-filled.

Either schedule can run once: setting the task to generate a single batch stops the schedule after the first run completes.

## Run lifecycle

Every time a schedule fires, the task produces a **run**: the generation work, the drafts it created, and the publishing that followed. From the task view you can:

- pause and resume the task
- cancel or retry a run
- trigger a run immediately, outside the schedule
- watch progress while a run is in flight

## The task dashboard

The dashboard summarizes a task over time: runs, publication results, image generations, and collected metrics. The platform also produces **reports** and **recommendations** per task — suggestions on what to adjust, which you can dismiss.

<!-- TODO: final copy from the product team: dashboard walkthrough with screenshots and advice on schedule settings. -->
