---
title: Towards Verifiable-by-Design Smart Contracts
year: "2025"
kind: Conference paper
venue: IEEE International Conference on Blockchain
summary: A declarative approach to on-chain limit order books that treats correctness as a design constraint rather than an after-the-fact audit.
externalUrl: https://www.eecg.toronto.edu/~veneris/ICB25.pdf
visual: 3
order: 3
---

Smart contracts are usually written as imperative programs and audited after implementation. This paper asks what changes when verifiability becomes part of the programming model itself.

## Approach

We study an on-chain limit order book expressed through a more declarative representation. The goal is to make core invariants—such as conservation, ordering, and valid state transitions—easier to state and reason about.

## Contribution

The implementation is a case study in designing for verification from the beginning. Instead of asking an auditor to reconstruct the intended behaviour from low-level control flow, the system makes important constraints more explicit.

This does not remove the need for careful review. It changes what reviewers have to recover from the code.
