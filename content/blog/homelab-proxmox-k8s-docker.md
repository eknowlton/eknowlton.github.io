---
title: "My homelab stack: Proxmox, Kubernetes, Docker"
date: "2024-07-22"
description: "Why I run three Xeon servers and still sleep at night."
tags:
  - Homelab
  - Infrastructure
  - DevOps
image: "/blog/homelab-proxmox-k8s-docker.svg"
---
The basement lab is where I experiment without risk. The stack is simple and repeatable.

![Homelab stack graphic](/blog/homelab-proxmox-k8s-docker.svg)

## Proxmox for orchestration

Proxmox gives me stable virtualization and quick snapshots. It’s my base layer.

## Kubernetes for services

Yes, it’s heavy — but it mirrors production patterns and lets me run real workloads the right way.

## Docker for dev speed

Containers keep environments consistent across machines and collaborators.

The homelab pays off in confidence: I can test ideas end‑to‑end before anything touches production.