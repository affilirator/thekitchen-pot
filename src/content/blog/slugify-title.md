---
title: This Post is Imported from WordPress to Here
date: "{{fields.pubDate}}"
slug: "{{slugify title}}"
layout: ../../layouts/BlogLayout.astro
pubDate: 2025-04-17
modDate: 2025-04-17
image: /src/content/blog/images/012521_Sardel-Prdct_1513_web2_2000x.jpg
excerpt: A description will always be very cool
category: Kitchenware
showTableOfContents: true
author: The Author Field
authorBio: The Author bio
authorImage: /src/content/blog/images/10-inch-and-9-inch-Bread-Proofing-150x150.jpg
authorImageAlt: Author image alt
coverAlt: cover alt
source: decap
---
The body of the post should be very descriptive and upfront.

### **1. Verify the Slug Field in Content Files**

First, confirm that your content files (e.g., Markdown files) have a valid `slug` field in their frontmatter.
For example, a valid `my-post.md` should include:

If the `slug` field still contains `{{slugify title}}` (the template literal) instead of a resolved value, your CMS configuration is incorrect.
Ensure Decap CMS is **saving the actual slug** (not the template) by:

* Using `default: "{{slugify title}}"` in the CMS config (as [previously shown](https://chatgpt.com/c/5d4b3e18-10f3-42f7-8c82-5e2a0f3c8a4b)).
* Testing with new entries to confirm the slug auto-generates properly.

markdownCopy
