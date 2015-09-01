---
category: Docker
title: Overview
layout: tutorial
---

## Introduction
This document serves as a collection of an ongoing series of tutorials authored for Docker and services surrounding Docker on the Chameleon Cloud platform. Starting with the basics of how to get Docker installed to creating customized Docker applications that span a series of hosts, these sections are designed to serve as a starting point from which users can create their own container-based applications. Included within this series also exists topics covering Kubernetes, a solution that uses Docker containers across a wide variety of hosts to offer a resilient and reliable solution for applications. This is compared to Docker's native solution to compare and contrast the two so that users can make a knowledgeable choice about which solution is best. Finally, Docker is examined in slightly more depth to take a look at their use of some of the modern Linux kernel features to offer additional features in management and security.

{% include_relative _chameleon/docker/cgroups-namespaces.md %}

{% include_relative _chameleon/docker/fundamentals.md %}

{% include_relative _chameleon/docker/kubernetes.md %}

{% include_relative _chameleon/docker/machine-compose-swarm.md %}
