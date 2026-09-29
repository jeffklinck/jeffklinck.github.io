---
title: Small systems, clear rules
date: "2026-07-12"
summary: Some working thoughts on why useful technical systems make their constraints legible—to users, operators, and institutions.
eyebrow: Essay
---

I am increasingly drawn to systems whose rules can be stated plainly. This is not the same as saying that the implementation must be simple. A complex implementation can still expose a small, coherent set of guarantees.

## Legibility is a technical property

When users cannot tell what a system promises, they substitute trust in a brand or operator. Sometimes that is reasonable. But in systems that coordinate money, identity, or public infrastructure, the rules themselves should carry more of the burden.

| Layer | A useful question |
| --- | --- |
| Interface | What can a user reasonably expect? |
| Protocol | Which actions are valid or invalid? |
| Institution | Who may change the rules, and how? |

## A working principle

> Prefer designs where the important guarantees survive a change in operator.

This is one reason verifiable software is interesting: it can turn some institutional promises into properties that are easier to inspect, test, and dispute.
