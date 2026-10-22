---
title: MCP extensions
description: Installing MCP plugins and controlling tool access.
---

Agent SaaS can be extended with MCP (Model Context Protocol) plugins. An MCP plugin is a server that exposes tools — external systems the platform can call, such as search, data sources, or internal services. Plugins are distributed through a plugin market and installed per workspace.

## How plugin access works

- The platform side maintains the plugin catalog: what plugins exist, their versions, and the tools each version exposes.
- A workspace installs a plugin and then grants access tool by tool. Access is denied by default — a tool that has not been explicitly granted is not callable.
- Plugin credentials are stored encrypted and are never returned in plain text after setup.
- Every tool call is logged; the log entries are sanitized and kept for a limited period.

## Versions

A plugin version, once released, is frozen: its endpoint, transport, and tool definitions cannot change. If a plugin ships new tools in a later version, installing the newer version starts with all new tools denied until they are granted.

## Where it is managed

Installation and tool grants are handled in the management console by workspace admins; the catalog itself is maintained on the platform side. The same rules apply to MCP servers used by skills as their runtime.

<!-- TODO: final copy from the product team: the current plugin catalog and walkthrough of installing a plugin. -->
