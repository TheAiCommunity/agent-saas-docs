#!/usr/bin/env python3
"""Generate the content API reference page from the backend swagger spec.

Usage:
  python3 scripts/generate-api-reference.py path/to/frontend-swagger.json
      -> English page at docs/developer/api-reference.md
  python3 scripts/generate-api-reference.py path/to/frontend-swagger.json --zh
      -> Chinese page at i18n/zh/docusaurus-plugin-content-docs/current/developer/api-reference.md

Source of truth: agent-saas-service repo, docs/frontend-swagger.json.
English pages use the spec's summaries; the Chinese page uses the spec's
Chinese operation descriptions.
"""
import json
import os
import sys
from collections import OrderedDict

GROUPS = OrderedDict([
    ("Authentication", ["auth"]),
    ("Templates and content models", ["templates", "content-models"]),
    ("Skills", ["skills", "skill-installations"]),
    ("Social accounts and platform connections", ["social-accounts", "platforms"]),
    ("Automation tasks", ["automation-tasks", "automation-capabilities"]),
    ("Runs, reports and recommendations", [
        "automation-runs", "automation-dashboard", "reports", "recommendations", "operations",
    ]),
    ("Assets", ["assets"]),
    ("Drafts, reviews and publications", ["content-drafts", "content-reviews", "publications"]),
    ("Personal WeChat workspace", ["wechat-personal"]),
    ("OAuth and callbacks", ["douyin", "bilibili", "twitter", "integrations"]),
])

ZH_GROUP_NAMES = {
    "Authentication": "认证",
    "Templates and content models": "模板与文案模型",
    "Skills": "技能",
    "Social accounts and platform connections": "社媒账号与平台连接",
    "Automation tasks": "自动化任务",
    "Runs, reports and recommendations": "运行、报告与建议",
    "Assets": "素材",
    "Drafts, reviews and publications": "草稿、审核与发布",
    "Personal WeChat workspace": "微信个人号工作台",
    "OAuth and callbacks": "OAuth 与回调",
    "Other endpoints": "其他接口",
}

# Chinese translations of the spec's English operation summaries.
SUMMARY_ZH = {
    "List tenant media assets": "列出租户媒体素材",
    "Upload a tenant media asset": "上传租户媒体素材",
    "List tenant asset groups": "列出租户素材分组",
    "Create a tenant asset group": "创建租户素材分组",
    "Rename a tenant asset group": "重命名租户素材分组",
    "Remove a group and move its media to ungrouped": "删除分组，其媒体归入未分组",
    "Search tenant media assets": "检索租户媒体素材",
    "Search media assets with JSON filters": "用 JSON 条件检索媒体素材",
    "Read tenant asset metadata": "读取租户素材元数据",
    "Edit tenant media metadata": "编辑租户媒体元数据",
    "Move a tenant asset to the recycle bin": "将租户素材移入回收站",
    "Download authenticated tenant asset bytes": "下载经鉴权的租户素材内容",
    "Restore a recycled tenant asset": "恢复回收站中的租户素材",
    "Change own password": "修改本人密码",
    "Tenant password login": "租户密码登录",
    "Log out current tenant session": "登出当前租户会话",
    "Current tenant member": "当前租户成员",
    "Current tenant permissions": "当前租户权限",
    "Rotate tenant tokens": "轮换租户令牌",
    "Get content automation capabilities": "获取内容自动化能力",
    "Get content automation dashboard": "获取内容自动化仪表盘",
    "List latest 200 automation runs": "列出最近 200 条自动化运行",
    "Search tenant automation runs": "检索租户自动化运行",
    "Get an automation run": "获取一条自动化运行",
    "List automation tasks": "列出自动化任务",
    "Create an automation task": "创建自动化任务",
    "Search tenant automation tasks": "检索租户自动化任务",
    "Validate an automation task": "校验自动化任务",
    "Get an automation task": "获取一条自动化任务",
    "Fully replace a paused task using its current ETag": "用当前 ETag 整体替换暂停中的任务",
    "Queue a manual AI analysis": "排队一次手动 AI 分析",
    "Cancel an automation task": "取消自动化任务",
    "List persisted image generation jobs and output assets": "列出已保存的生图任务及其输出素材",
    "Retry incomplete images; unknown requires explicit allow_unknown": "重试未完成的生图；unknown 需显式 allow_unknown",
    "Get task metrics": "获取任务指标",
    "Pause an automation task": "暂停自动化任务",
    "Task publication progress, reconciliation result and next action": "任务发布进度、对账结果与下一步动作",
    "List AI recommendations": "列出 AI 建议",
    "List AI analysis reports": "列出 AI 分析报告",
    "Resume an automation task": "恢复自动化任务",
    "Retry a failed or review-blocked task": "重试失败或被审核阻塞的任务",
    "Schedule a task to run now": "安排任务立即运行",
    "List latest 200 runs for a task": "列出该任务最近 200 次运行",
    "Start tenant Bilibili official OAuth": "发起租户 Bilibili 官方 OAuth",
    "Public browser-bound Bilibili OAuth callback": "公开的浏览器侧 Bilibili OAuth 回调",
    "Prepare a current draft for user-confirmed Douyin H5 sharing": "为用户确认的抖音 H5 分享准备当前草稿",
    "Get a content draft": "获取一条内容草稿",
    "Regenerate a draft with AI": "用 AI 重新生成草稿",
    "Create a new draft version": "创建新的草稿版本",
    "List configured text models for content tasks": "列出内容任务可用的文案模型",
    "List content reviews": "列出内容审核",
    "Search tenant content reviews": "检索租户内容审核",
    "Get a content review": "获取一条内容审核",
    "Approve and submit the exact reviewed draft for publication": "通过审核并按原稿提交发布",
    "Request changes to reviewed content": "对审核内容提出修改请求",
    "Reject a content review": "驳回一条内容审核",
    "Get replacement generation choices for a pending draft": "获取待定草稿的重新生成选项",
    "Read one short-lived Douyin H5 share image": "读取一张短时效抖音 H5 分享图片",
    "Start tenant Douyin OAuth": "发起租户抖音 OAuth",
    "Public browser-bound Douyin OAuth callback": "公开的浏览器侧抖音 OAuth 回调",
    "Read an expiring capability-protected media object": "读取带时效和能力保护的媒体对象",
    "Persist authenticated GeWe events without automatic replies": "保存经鉴权的 GeWe 事件，不自动回复",
    "Get asynchronous operation": "获取一条异步操作",
    "List platform capabilities": "列出平台能力",
    "Disconnect a Bilibili account locally": "本地断开 Bilibili 账号",
    "Read Douyin H5 sharing readiness": "读取抖音 H5 分享就绪状态",
    "List configured WeChat Official Accounts": "列出已配置的微信公众号",
    "Configure a tenant-owned WeChat Official Account": "配置租户的微信公众号",
    "Get safe WeChat account configuration": "获取脱敏的微信账号配置",
    "Update credentials, name or enabled state": "更新凭证、名称或启用状态",
    "Check saved credentials against WeChat": "用已保存凭证对微信做连接检查",
    "Register a Xiaohongshu account slot": "注册一个小红书账号槽位",
    "Get a Xiaohongshu account": "获取一个小红书账号",
    "Remove a Xiaohongshu account connection": "移除小红书账号连接",
    "Explicitly reset a Xiaohongshu account browser identity": "显式重置小红书账号的浏览器身份",
    "Import and verify Xiaohongshu cookies": "导入并校验小红书 Cookie",
    "Download metadata for a fresh local Xiaohongshu login": "下载本地重新登录小红书所需的元数据",
    "Create a QR login session": "创建扫码登录会话",
    "Refresh a QR login session": "刷新扫码登录会话",
    "Log out a Xiaohongshu account connection": "登出小红书账号连接",
    "Read persisted Xiaohongshu login state": "读取已保存的小红书登录状态",
    "Subscribe to Xiaohongshu login events over WebSocket": "通过 WebSocket 订阅小红书登录事件",
    "Get platform capability": "获取平台能力",
    "Inspect official platform connection readiness": "检查官方平台连接就绪状态",
    "List publications": "列出发布记录",
    "Get a publication": "获取一条发布记录",
    "Request comment collection (currently unsupported)": "请求采集评论（暂不支持）",
    "Schedule metric collection now": "立即安排指标采集",
    "List collected comments": "列出已采集的评论",
    "Get metric collection state": "获取指标采集状态",
    "Get publication metric snapshots": "获取发布指标快照",
    "Reconcile an ambiguous publication": "对账一条状态不明的发布",
    "Resolve an ambiguous publication manually": "人工裁定一条状态不明的发布",
    "Retry an unambiguous failed publication": "重试一条明确失败的发布",
    "Get an AI recommendation": "获取一条 AI 建议",
    "Dismiss an AI recommendation": "忽略一条 AI 建议",
    "Get an AI analysis report": "获取一条 AI 分析报告",
    "List tenant skill installations": "列出租户技能安装",
    "Install a skill": "安装一个技能",
    "Tenant installation details": "租户技能安装详情",
    "Update installation settings": "更新安装设置",
    "Uninstall a skill": "卸载一个技能",
    "Confirm additional skill scopes": "确认额外的技能授权",
    "Upgrade pinned skill version": "升级锁定的技能版本",
    "Browse available skills": "浏览可用技能",
    "Skill catalog details": "技能目录详情",
    "List social accounts": "列出社媒账号",
    "Read account workbench name and code": "读取账号工作台名称与编码",
    "Update account workbench name and code without changing login identity": "更新账号工作台名称与编码，不改变登录身份",
    "Start browser-bound X/Twitter OAuth": "发起浏览器侧 X/Twitter OAuth",
    "Public browser-bound X/Twitter OAuth callback": "公开的浏览器侧 X/Twitter OAuth 回调",
    "List personal WeChat accounts": "列出微信个人号账号",
    "Create an account or attach an existing GeWe node": "创建账号或挂载已有的 GeWe 节点",
    "Get a tenant-owned personal WeChat account": "获取租户的微信个人号账号",
    "List manual actions and outcomes": "列出手动操作及其结果",
    "Queue one manual message or publication": "排队一条手动消息或发布",
    "Read channel readiness": "读取通道就绪状态",
    "Check the actual GeWe online state": "检查 GeWe 实际在线状态",
    "Read the GeWe contact and saved-group directory": "读取 GeWe 联系人与群目录",
    "Read video-account identity and home page": "读取视频号身份与主页",
    "Read group members": "读取群成员",
    "Create a GeWe login QR session": "创建 GeWe 扫码登录会话",
    "Poll a saved GeWe login QR session": "轮询已保存的 GeWe 扫码登录会话",
    "Read saved inbound and outbound messages": "读取已保存的收发消息",
    "Read the account Moments list": "读取账号朋友圈列表",
    "Read one tenant action": "获取一条租户操作",
    "Record an explicit manual verification result": "记录人工核验结果",
    "Read remote publication evidence without resending": "读取远端发布证据，不重发",
    "List safe GeWe service connections": "列出脱敏的 GeWe 服务连接",
    "Create an encrypted tenant GeWe connection": "创建加密的租户 GeWe 连接",
    "Configure the server-owned GeWe callback URL": "配置服务端持有的 GeWe 回调地址",
    "Open the personal WeChat workspace": "打开微信个人号工作台",
    "Open the personal WeChat workspace with a trailing slash": "打开微信个人号工作台（带尾斜杠）",
    "Read the personal WeChat workspace scripts": "读取微信个人号工作台脚本",
    "Read the personal WeChat workspace stylesheet": "读取微信个人号工作台样式表",
}

ZH_INTRO = """---
title: 内容 API 参考
description: 鲸芽 Agent 内容 API 的全部接口，按功能分组，由 OpenAPI 规范自动生成。
---

内容 API 是租户应用调用鲸芽 Agent 的入口：登录、管理技能与模板、执行自动化任务并发布到社媒平台。

- 接口根地址：`https://saas.theaicommunity.net`
- 在线调试：[https://saas.theaicommunity.net/swagger/content/index.html](https://saas.theaicommunity.net/swagger/content/index.html)
- OpenAPI JSON：[https://saas.theaicommunity.net/swagger/content/doc.json](https://saas.theaicommunity.net/swagger/content/doc.json)

认证方式、错误格式与通用约定见[开发者概览](overview.md)与[API 约定](conventions.md)。
"""

EN_INTRO = """---
title: Content API reference
description: Every endpoint of the Agent SaaS content API, grouped by area. Generated from the OpenAPI specification.
---

The content API is what tenant applications call to do work in Agent SaaS: sign in,
manage skills and templates, run automation tasks and publish to social platforms.

- Base URL: `https://saas.theaicommunity.net`
- Interactive docs: [https://saas.theaicommunity.net/swagger/content/index.html](https://saas.theaicommunity.net/swagger/content/index.html)
- OpenAPI JSON: [https://saas.theaicommunity.net/swagger/content/doc.json](https://saas.theaicommunity.net/swagger/content/doc.json)

Authentication, error formats and conventions are described in
[Developer overview](/docs/developer/overview) and
[API conventions](/docs/developer/conventions).
"""


def group_for(path):
    parts = path.strip("/").split("/")
    for name, prefixes in GROUPS.items():
        for p in prefixes:
            if len(parts) > 1 and parts[1].startswith(p):
                return name
    return "Other endpoints"


def main():
    spec = json.load(open(sys.argv[1]))
    chinese = "--zh" in sys.argv
    rows = {}
    for path in sorted(spec["paths"]):
        if path.startswith("/api/"):
            continue
        for method, op in spec["paths"][path].items():
            if not isinstance(op, dict):
                continue
            if chinese:
                desc = SUMMARY_ZH.get(op.get("summary") or "")
                if not desc:
                    raw = (op.get("description") or "").splitlines()[0]
                    desc = raw if any("\u4e00" <= c <= "\u9fff" for c in raw) else (op.get("summary") or raw)
            else:
                desc = op.get("summary") or (op.get("description") or "").splitlines()[0]
            rows.setdefault(group_for(path), []).append(
                (method.upper(), path, desc.replace("|", "\\|"))
            )
    out = [ZH_INTRO if chinese else EN_INTRO]
    for name in list(GROUPS) + ["Other endpoints"]:
        if name not in rows:
            continue
        label = ZH_GROUP_NAMES.get(name, name) if chinese else name
        out.append(f"## {label}\n")
        out.append("| 方法 | 接口 | 说明 |" if chinese else "| Method | Endpoint | Description |")
        out.append("| --- | --- | --- |")
        for method, path, desc in rows[name]:
            out.append(f"| `{method}` | `{path}` | {desc} |")
        out.append("")
    text = "\n".join(out) + "\n"
    if chinese:
        target = os.path.join(
            "i18n/zh/docusaurus-plugin-content-docs/current/developer/api-reference.md"
        )
    else:
        target = "docs/developer/api-reference.md"
    os.makedirs(os.path.dirname(target), exist_ok=True)
    with open(target, "w") as f:
        f.write(text)
    groups_printed = ", ".join(f"{n}: {len(rows[n])}" for n in rows)
    print(f"{'zh' if chinese else 'en'} -> {target}")
    print("groups:", groups_printed)


if __name__ == "__main__":
    main()
