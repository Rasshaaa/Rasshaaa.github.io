---
layout: post
title: "Markdown Writeup Example"
date: 2026-10-15 09:00:00 +0700
category: Guide
description: A starter post showing headings, screenshots, tables, commands, and language-specific code blocks.
tags: [Markdown, Writeup, Template]
---

> **Example content only.** Replace this post with your own writeup when you're ready.

This is a Markdown template for a technical writeup. GitHub Pages turns it into a normal HTML page, with code highlighting provided by Rouge.

## Challenge overview

| Field | Value |
| --- | --- |
| Category | `[REDACTED]` |
| Difficulty | `[REDACTED]` |
| Target | `[REDACTED]` |

A good writeup covers the objective, relevant observations, the root cause, and a reproducible solve path.

## Initial analysis

The following is **illustrative only**. No live target is involved.

```bash
file ./chall
checksec --file=./chall
python3 solve.py
```

Capture screenshots locally and place them in `assets/images/blog/`. Reference the image using `relative_url` so it also works on GitHub Pages:

![Example screenshot placeholder]({{ '/assets/images/blog/screenshot-placeholder.svg' | relative_url }})

*Replace this illustration with a real screenshot you are authorized to publish.*

## Python example

Specify a language after the three opening backticks to enable highlighting.

```python
from pathlib import Path


def read_output(filename: str) -> str:
    return Path(filename).read_text(encoding="utf-8")


if __name__ == "__main__":
    print("Replace this with a real solution")
```

## JavaScript example

```javascript
const items = ["web", "pwn", "crypto"];

for (const category of items) {
    console.log(`Category: ${category}`);
}
```

## Result and takeaway

Document what actually worked and why. Add a mitigation or defensive lesson where appropriate, and never publish credentials, private infrastructure details, or unauthorized flags.
