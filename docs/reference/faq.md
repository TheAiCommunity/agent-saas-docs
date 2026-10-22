---
title: FAQ
description: Frequently asked questions about Agent SaaS.
---

## What is a tenant code?

A short code that identifies your tenant at sign-in. It is not the tenant ID you see in the API — the code is only for logging in.

## Why must I change my password after the first login?

Accounts created by an admin start with a temporary password. The first sign-in requires setting your own password before the product can be used. This happens once.

## Why is my content stuck in review?

Review is required by default. Content also gets flagged for review when it hits banned words, misses required disclosures, contains links to domains that are not allowed, or exceeds the platform's length limits. WeChat mass send always requires manual approval.

## How many skills can one task use?

Up to ten. They are applied in the order you list them, and each must be installed in your tenant and authorized for use.

## Why can't I use generated images for Douyin?

Douyin tasks use images from your asset library. The library mode also applies any image constraints the platform has.

## Why does my integration get a CORS error?

The content API does not serve cross-origin requests. Browser applications should call it through a same-origin proxy or a gateway on the same domain.

## Where is the full API documentation?

In the [content API reference](/docs/developer/api-reference), generated from the OpenAPI specification, with interactive Swagger UI at [saas.theaicommunity.net/swagger/content](https://saas.theaicommunity.net/swagger/content/index.html).

<!-- TODO: product team to review and extend. -->
