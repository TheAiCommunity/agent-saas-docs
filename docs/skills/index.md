---
title: 'Skills: installing and using the 17 methods'
description: Check traceable sources, install pinned versions, and pick this round's methods.
---

A skill is a reusable working method. It helps the model write, organize, research or plan following specific steps; external reading, account access and publishing stay controlled by separate plugins and permissions.

## Install a method

1. Click "Skills" on the left and search by name or purpose.
2. Open the details and check the method description, open-source source, license, pinned version and the Jingya adaptation notes.
3. Click "Install". When you have install and usage permissions, the card shows the usable state.
4. Return to the workbench, select the method, then provide your own material and goal.


![Source, version and install entrance in a skill's details](/img/tutorials/20261023/12-skill-source-before-install.png)

*2026-10-23 local interface: Material organization and citation has a traceable source.*


![Installed methods shown as usable](/img/tutorials/20261023/13-installed-skills.png)

*2026-10-23 local interface: install first, then select in the workbench.*


## Selection limits and permissions

A workbench round selects at most **3 skills**. The continuous content automation task's skill field takes at most **10**; do not mix up the two limits.

Installation pins the version in use. A method does not run arbitrary local scripts for you, and it does not add tool or account permissions by itself. If installed methods are missing, check the current employee's install and usage permissions first.

## A worked example you can copy

Select "Material organization and citation" and enter:

> Organize the material below into known facts, items to confirm, and two copy versions, keeping the citation sources; do not invent information I did not provide.

Check whether the output separates facts from inference, then decide whether to export a file or move to a platform task. Content copy-editing, material organization and citation, and the video prompt director currently have real text-model results; the other methods are integrated but their output quality is not verified item by item.


![Material organization returns a draft with to-confirm marks](/img/tutorials/20261023/16-skill-real-output.png)

*2026-10-23 real local text-model result: the method shapes the writing; it does not mean the content was published.*


## The current 17 skills

| Name | Code | Delivered purpose |
| --- | --- | --- |
| Bilingual translation | `jingya.studio.translation` | Faithful translation with consistent terminology, so good content crosses languages. |
| Infographic studio | `jingya.studio.infographic` | Turn complex material into clear layouts, on-image text and image prompts. |
| Knowledge comic screenwriter | `jingya.studio.knowledge-comic` | Explain knowledge with original characters and four-panel stories. |
| Video prompt director | `jingya.studio.video-director` | Turn ideas into video prompts with explicit shots, actions and lighting. |
| Product narrative studio | `jingya.studio.product-positioning` | Pin down target users, differentiation and evidence, and draft product positioning. |
| Competitor researcher | `jingya.studio.competitor-evidence` | Compare products on verifiable evidence into fair, clear comparisons. |
| Creative communication lab | `jingya.studio.creative-lab` | Extract communication angles, copy and experiment plans from real user feedback. |
| Brand voice handbook | `jingya.content.brand-voice` | Distill reusable brand expression rules from real examples. |
| Content operations review | `jingya.content.operations-review` | Check metrics against user data and produce grounded improvement advice. |
| Xiaohongshu adaptation | `jingya.content.xiaohongshu-adaptation` | Adapt existing material into natural notes and image-text structure. |
| Material organization and citation | `jingya.content.material-organization` | Organize scattered material into facts, opinions, duplicates and to-verify items. |
| Headlines and summaries | `jingya.content.headlines-summary` | Produce distinct titles, leads and summaries without overstating facts. |
| Content copy-editing | `jingya.content.copy-editing` | Keep the original meaning and voice, deliver a final version with key change reasons. |
| Short video storyboard | `jingya.content.short-video-script` | Turn one idea into a shootable spoken script with shots and captions. |
| Topic research planning | `jingya.content.topic-research` | Produce evidence-based topics and priorities around audience questions. |
| Editorial calendar | `jingya.content.editorial-calendar` | Plan an executable schedule by content pillars, channels and resources. |
| WeChat long article | `jingya.content.wechat-article` | Organize real material into a complete long article, keeping evidence and sources. |

The infographic, comic, short-video and video-prompt methods currently deliver plans, storyboards or prompts, not media files. The competitor research and topic research methods work only from your material without a search tool; do not claim live research.

Download the public [JSON catalog](/data/catalogs/skills.public.json) or the [CSV catalog](/data/catalogs/skills.public.csv) to see each item's examples, pinned source version, license and adaptation notes. Source links record the backend's current integration basis, not an endorsement from upstream authors.
