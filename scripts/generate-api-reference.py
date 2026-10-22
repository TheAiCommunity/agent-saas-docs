#!/usr/bin/env python3
"""Generate docs/developer/api-reference.md from the backend swagger spec.

Usage: python3 scripts/generate-api-reference.py path/to/frontend-swagger.json
Source of truth: agent-saas-service repo, docs/frontend-swagger.json.
"""
import json
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

ORDER = {name: i for i, name in enumerate(GROUPS)}
FALLBACK = "Other endpoints"


def group_for(path):
    parts = path.strip("/").split("/")
    for name, prefixes in GROUPS.items():
        for p in prefixes:
            if len(parts) > 1 and parts[1].startswith(p):
                return name
    return FALLBACK


def main():
    spec = json.load(open(sys.argv[1]))
    rows = {}
    for path in sorted(spec["paths"]):
        if path.startswith("/api/"):
            continue
        for method, op in spec["paths"][path].items():
            if not isinstance(op, dict):
                continue
            desc = op.get("summary") or (op.get("description") or "").splitlines()[0]
            rows.setdefault(group_for(path), []).append(
                (method.upper(), path, desc.replace("|", "\\|"))
            )
    out = []
    out.append("""---
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
""")
    for name in list(GROUPS) + [FALLBACK]:
        if name not in rows:
            continue
        out.append(f"## {name}\n")
        out.append("| Method | Endpoint | Description |")
        out.append("| --- | --- | --- |")
        for method, path, desc in rows[name]:
            out.append(f"| `{method}` | `{path}` | {desc} |")
        out.append("")
    text = "\n".join(out) + "\n"
    with open("docs/developer/api-reference.md", "w") as f:
        f.write(text)
    groups_printed = ", ".join(f"{n}: {len(rows[n])}" for n in rows)
    print("groups:", groups_printed)


if __name__ == "__main__":
    main()
