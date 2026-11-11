---
title: Automation runs and schedules
description: Set a generation schedule, verify the next run, and read the results.
---

Content tasks generate on a schedule and move on to review and delivery. A generation schedule is not a platform's authorization to auto-publish.

## Choose a generation schedule

1. Open the task creation or edit form.
2. Under "generation schedule" pick **fixed interval** or **daily fixed time**.
3. Interval mode asks for seconds; daily mode asks for the generation start time.
4. Verify the timezone. For example a team working on Beijing time uses `Asia/Shanghai`.
5. For a new task that needs a specific first round, fill "first run time"; leave it empty and the scheduler starts the first round as soon as the schedule allows.
6. Keep manual review on for first use, and tick "generate only one topic batch" if that is what you want.


![Editing a task's generation schedule and review settings](/img/tutorials/20261023/24-schedule-editor.png)

*2026-10-17 historical local screenshot: shows the schedule fields; after the first execution the original first-run time is kept and the next run time is shown separately.*


## Change an existing schedule

The next run time is computed by the backend and shown read-only. Changing the interval or the daily time recomputes later rounds; editing only text and other fields keeps the existing schedule. The form also offers "reschedule on save" for fixing stale schedules.

A paused task stays paused after saving until you resume it as the page instructs. Before resuming, check drafts, accounts and delivery scope again.

## Read each round's results

Open the task detail and check:

| Where | What to check |
| --- | --- |
| Run records | When the round started and ended, whether it failed, and why |
| Content preview | Body, assets, review result |
| Image generation | Image status, existing results and error notes |
| Publish status / draft delivery and publish records | Actually delivered, pending, failed or verified success |

The task's total target counts what the form currently defines. Draft delivery totals, verified publish counts and pending-confirmation counts do not substitute for each other; a total target does not guarantee the platform accepts every piece.

## When a round did not run on time

Check whether the task is paused, whether the next run time and timezone look right, then whether accounts and model services are ready. On failures, fix what the record shows and retry with the actions the page allows; do not recreate the same task just because no new work appeared.

Whether real publishing and outbound delivery are enabled is decided by service configuration and permissions. The local screenshots in this material do not include continuous online runs or verified real publishing; the production environment should be confirmed separately by operations.
