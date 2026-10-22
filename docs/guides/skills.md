---
title: Skills
description: Installing writing skills and using them in tasks.
---

Skills are reusable writing add-ons. A skill carries instructions, and sometimes input fields, that shape how the content model writes: tone, structure, hooks, compliance rules, and so on.

## Getting skills

Skills come from the skill market, which is maintained on the platform side. Browsing and installing is done from the product UI; what you install becomes a **skill installation** owned by your tenant.

Installing a skill does not automatically make it usable by everyone: an admin controls who may use each installation. If a skill is missing from your task's skill list, ask your tenant admin.

## Using skills in a task

- A task can reference up to ten skill installations, listed in order — they are applied in that order.
- Some skills define input fields (defined by the skill's `input_schema`); you fill them in when attaching the skill.
- Tasks lock the installation version they were created with, so skill updates never silently change a running task's behavior. You can move an installation to a newer version explicitly.

## What skills can and cannot do today

Skills currently shape the writing itself (`prompt` and `builtin` types). Skills cannot yet perform web searches, call HTTP endpoints, run scripts, or invoke MCP tools from inside a content task.

<!-- TODO: final copy from the product team: skill market walkthrough, screenshots, and a catalog of recommended skills. -->
