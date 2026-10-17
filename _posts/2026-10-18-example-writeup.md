---
layout: post
title: "Example Writeup — Replace This Post"
date: 2026-10-18 00:00:00 +0700
categories: [CTF, Pwn]
tags: [writeup, example]
description: "A sample Markdown article showing code blocks and screenshots. Replace this with your own writeup."
---

> This is an example article, not a real challenge solution. Replace its content and metadata before publishing your work.

## Challenge Overview

| Field | Value |
| --- | --- |
| Challenge | `[REDACTED_CHALLENGE]` |
| Category | Pwn |
| Difficulty | `[REDACTED_DIFFICULTY]` |
| Environment | Linux x86_64 |

## Initial Analysis

Write the vulnerability, relevant protections, and attack surface here.

```bash
file ./chall
checksec --file=./chall
```

## Exploitation

Explain the root cause and intended exploit path. Code blocks have syntax highlighting:

```python
from pwn import *

binary = ELF("./chall", checksec=False)
print(binary.arch)
```

## Screenshot

Place images in `assets/images/writeups/`, then embed them in Markdown:

![Example screenshot placeholder]({{ '/assets/images/writeups/placeholder.svg' | relative_url }})

For a real screenshot, replace `placeholder.svg` with your own file, for example `exploit-output.png`.

## Conclusion

Summarize what you learned, which exploit primitives mattered, and how you verified the result.
