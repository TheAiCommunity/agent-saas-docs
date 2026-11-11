#!/usr/bin/env python3
"""Generate static/llms.txt from the docs frontmatter.

Usage: python3 scripts/generate-llms.py
Writes an llms.txt index (https://llmstxt.org) covering the English and
Chinese doc pages plus both homepages. Run after adding or renaming pages.
"""
import os
import re
import sys

BASE_URL = "https://docs.theaicommunity.net"

SECTIONS = [
    ("English documentation", "docs", ""),
    ("简体中文文档", "i18n/zh/docusaurus-plugin-content-docs/current", "/zh"),
]

SUMMARY_EN = (
    "User guides and API documentation for Jingya Agent: writing methods, "
    "office tools and content platforms in one workspace."
)
SUMMARY_ZH = "鲸芽 Agent 的使用指南与 API 文档：写作方法、办公工具和内容平台在同一个工作空间。"


def page_meta(path):
    text = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n(.*?)\n---", text, re.S)
    if not m:
        return None
    fm = m.group(1)
    title = re.search(r"^title:\s*['\"]?(.+?)['\"]?\s*$", fm, re.M)
    desc = re.search(r"^description:\s*['\"]?(.+?)['\"]?\s*$", fm, re.M)
    if not title or not desc:
        return None
    return title.group(1), desc.group(1)


def collect(root, prefix):
    pages = []
    for dirpath, _dirnames, filenames in os.walk(root):
        for name in sorted(filenames):
            if not name.endswith((".md", ".mdx")):
                continue
            full = os.path.join(dirpath, name)
            rel = os.path.relpath(full, root)
            meta = page_meta(full)
            if not meta:
                continue
            if rel == "intro.md":
                route = f"{prefix}/docs/"
            elif name in ("index.md", "index.mdx"):
                route = f"{prefix}/docs/{os.path.dirname(rel)}"
            else:
                route = f"{prefix}/docs/{rel.rsplit('.', 1)[0]}"
            pages.append((meta[0], route, meta[1]))
    pages.sort(key=lambda p: p[1])
    return pages


def main():
    out = ["# Jingya Agent docs", ""]
    out.append(f"> {SUMMARY_EN} {SUMMARY_ZH}")
    out.append("")
    for label, root, prefix in SECTIONS:
        out.append(f"## {label}")
        out.append("")
        if prefix == "":
            out.append(f"- [Agent SaaS documentation home]({BASE_URL}/): {SUMMARY_EN}")
        else:
            out.append(f"- [鲸芽 Agent 文档首页]({BASE_URL}{prefix}/): {SUMMARY_ZH}")
        for title, route, desc in collect(root, prefix):
            out.append(f"- [{title}]({BASE_URL}{route}): {desc}")
        out.append("")
    text = "\n".join(out).rstrip() + "\n"
    target = "static/llms.txt"
    with open(target, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"-> {target} ({len(text.splitlines())} lines)")


if __name__ == "__main__":
    main()
