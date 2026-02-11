---
title: "Developing software with AI chat: a practical loop"
date: "2026-02-03"
description: "How I structure prompts, checkpoints, and reviews to ship faster without losing control."
tags:
  - AI
  - DX
  - Engineering
---

Over the last few months, AI chat has become part of my daily development loop. It’s not replacing design or architecture decisions, but it *is* accelerating the boring parts and tightening feedback. Here’s the workflow I’ve settled into.

## 1) Start with constraints, not features

I open with a short brief that includes:

- Target environment (Next.js export, serverless, etc.)
- Non‑negotiables (security, accessibility, bundle size)
- Input/output types and data boundaries

This keeps the conversation grounded and prevents overly clever but unsafe suggestions.

## 2) Ask for a plan before code

I ask for a step‑by‑step plan and validate it against the repo. It’s faster to correct a plan than to unwind a thousand lines of code.

## 3) Work in tight iterations

I keep changes small and run checks after each step. If a change can’t be explained in one sentence, it’s probably too big.

## 4) Review like a human, not a compiler

I look for:

- Naming and clarity
- Hidden complexity
- Edge cases around error states

If the AI introduces something I can’t explain to a teammate, it doesn’t ship.

## 5) Capture what works

Good prompts become snippets in my notes. A small library of “known good” prompts saves hours over time.

```text
Prompt template:
Context: (stack + constraints)
Goal: (clear outcome)
Inputs/outputs: (types)
Non‑goals: (explicit exclusions)
```

The result: faster iteration without giving up ownership of the codebase. AI chat is a sharp tool when you keep the handle in your hand.
