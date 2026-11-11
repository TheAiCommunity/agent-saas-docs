---
title: Skills：安装与使用 17 项方法
description: 查看可追溯来源，安装固定版本，并选择本轮方法。
---

Skill 是一组可复用的工作方法。它帮助模型按特定步骤写作、整理、研究或策划；外部资料读取、账号访问和发布仍由独立插件及权限控制。

## 安装一项方法

1. 点击左侧“Skills”，按名称或用途查找。
2. 进入详情，查看方法说明、开源来源、许可、固定版本与鲸芽改编边界。
3. 点击“一键安装”。有安装和使用权限时，卡片会显示可使用状态。
4. 返回工作台，选择该方法，再提供自己的材料与目标。


![Skill 详情中的来源、版本和安装入口](/img/tutorials/20261023/12-skill-source-before-install.png)

*2026-10-23 本地界面：素材整理与引用的方法来源可追溯。*


![已安装方法显示可使用](/img/tutorials/20261023/13-installed-skills.png)

*2026-10-23 本地界面：安装完成后再到工作台选择。*


## 选择数量与权限

工作台每轮最多选择 **3 项** Skills。持续内容自动化任务的技能字段最多选择 **10 项**；不要把两个入口的上限混在一起。

安装会固定使用版本。方法不会替你运行任意本地脚本，也不会自动增加工具或账号权限。看不到已安装方法时，先检查当前员工的安装与使用权限。

## 一个可以照做的示例

选择“素材整理与引用”，输入：

> 请把下面材料整理为已知事实、待确认事项和两版文案，保留引用来源；没有提供的信息不要补造。

检查输出是否区分事实与推测，再决定是否导出文件或进入平台任务。当前已有内容精修、素材整理与引用、视频提示导演的真实文字模型结果；其他方法已集成，但未逐项验收模型输出质量。


![素材整理方法返回带待确认标记的草稿](/img/tutorials/20261023/16-skill-real-output.png)

*2026-10-23 本地真实文字模型结果：方法参与文字生成，不代表内容已经发布。*


## 当前 17 项 Skills

| 名称 | 代码 | 交付用途 |
| --- | --- | --- |
| 双语精译 | `jingya.studio.translation` | 忠实翻译、统一术语，让好内容跨越语言。 |
| 信息图创意工坊 | `jingya.studio.infographic` | 把复杂资料变成清晰版式、图上文字与生图提示。 |
| 知识漫画编剧 | `jingya.studio.knowledge-comic` | 用原创角色和四格故事，把知识讲得有画面。 |
| 视频提示导演 | `jingya.studio.video-director` | 把创意写成镜头、动作与光线明确的视频生成提示。 |
| 产品叙事工作室 | `jingya.studio.product-positioning` | 找准目标用户、差异和证据，写出产品定位底稿。 |
| 竞品研究员 | `jingya.studio.competitor-evidence` | 用可核验的证据比较产品，形成公平、清楚的比较稿。 |
| 传播创意实验室 | `jingya.studio.creative-lab` | 从真实用户反馈提炼传播角度、文案与实验方案。 |
| 品牌语气手册 | `jingya.content.brand-voice` | 从真实示例提炼可复用的品牌表达规则。 |
| 内容运营复盘 | `jingya.content.operations-review` | 用用户数据核对指标，形成有依据的改进建议。 |
| 小红书内容适配 | `jingya.content.xiaohongshu-adaptation` | 把现有素材改成自然笔记与图文结构。 |
| 素材整理与引用 | `jingya.content.material-organization` | 整理散落素材，区分事实、观点、重复与待核实内容。 |
| 标题与摘要 | `jingya.content.headlines-summary` | 生成有区分的标题、导语与摘要，避免夸大事实。 |
| 内容精修 | `jingya.content.copy-editing` | 保留原意与作者声音，给出成稿和关键修改理由。 |
| 短视频分镜脚本 | `jingya.content.short-video-script` | 把一个观点写成可拍摄的口播、画面与字幕。 |
| 选题研究规划 | `jingya.content.topic-research` | 围绕受众问题，产出有依据的选题与优先级。 |
| 内容日历 | `jingya.content.editorial-calendar` | 按内容支柱、渠道和资源安排可执行的排期。 |
| 公众号长文 | `jingya.content.wechat-article` | 把真实材料组织成完整长文，保留论据和来源。 |

信息图、漫画、短视频和视频提示方法当前交付策划、分镜或提示，不自动生成媒体文件。竞品研究与选题方法没有搜索工具时只能基于用户材料，不应声称完成实时调研。

可下载[公共 JSON 目录](/data/catalogs/skills.public.json)或 [CSV 目录](/data/catalogs/skills.public.csv)，查看每项示例、固定源版本、许可和改编说明。来源链接记录后端当前集成依据，不表示上游作者为鲸芽产品背书。
