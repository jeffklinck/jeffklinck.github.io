---
title: "Towards Verifiable-by-Design Smart Contracts: A Declarative Limit Order Books Implementation"
year: "2025"
kind: Conference paper
venue: IEEE International Conference on Blockchain
summary: A declarative approach to on-chain limit order books that treats correctness as a design constraint rather than an after-the-fact audit.
abstract: This paper studies an on-chain limit order book built around a declarative representation of contract behaviour. By expressing conservation, ordering, and state-transition constraints directly, the design aims to make core properties easier to verify before deployment.
citationAuthors: S. F. Singh, J. Klinck, Z. Poulos, A. Veneris, M. Fawaz, and S. Roberts
citationPublication: "8th IEEE International Conference on Blockchain, 2025."
logo: /logos/ieee.png
logoAlt: IEEE logo
externalUrl: https://doi.org/10.1109/Blockchain67634.2025.00017
gallery: []
visual: 3
order: 3
---

Smart contracts are usually written as imperative programs and audited after implementation. This paper asks what changes when verifiability becomes part of the programming model itself.

## Approach

We study an on-chain limit order book expressed through a more declarative representation. The goal is to make core invariants—such as conservation, ordering, and valid state transitions—easier to state and reason about.

## Contribution

The implementation is a case study in designing for verification from the beginning. Instead of asking an auditor to reconstruct the intended behaviour from low-level control flow, the system makes important constraints more explicit.

This does not remove the need for careful review. It changes what reviewers have to recover from the code.
