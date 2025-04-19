---
title: "Type-Theoretical Proofs for Commutative Ring Axioms of the Integers"
date: 2022-07-30
weight: 1
status: ongoing
description: "A research project consisting of type-theoretic proofs for various properties of abstract algebraic mathematical structures."
stacks: ["Agda"]
repo: https://github.com/essentialblend/integers-comm-ring
---

### Introduction

This project was submitted as part of requirements for my MS. The objective was to constructively demonstrate the existence of the commutative Ring of Integers alongside proofs all its accompanying algebraic properties in a computer aided proof assistant called Agda.

This research project was supervised by [Professor Thorsten Altenkirch](https://people.cs.nott.ac.uk/psztxa/) and I'm forever grateful for his time, expertise, and empathy towards my journey into this fantastic subject.

I'm revising aspects of the thesis based on the feedback I received during the presentation.

### Problem Statement

The main goal of this project was to highlight the efficacy of formal verification for ensuring the correctness of fundamental mathematical constructions. Some motivations being,

- Exploration of formal mathematical reasoning and verification from an constructivist perspective.

- Demonstrating the effectiveness of Agda and intuitionistic type theory for rigorously expressing and verifying complex mathematical structures and properties.

- Contributing a modular formalization of the commutative ring axioms. 

### Basic Strategy

- Set up logical reasoning facilities. 

- Definition and construction of proofs for operations and properties over the natural numbers.

- Definition and construction of proofs for operations and properties over the integers. 

- These proofs aid in the construction of the final mathematical object representing the Ring of Integers.

### A Sample Proof

```agda
-- A proof for associtivity of addition over ℕ

module natural_numbers.properties.addition.associativity where

-- Import some basic operations, properties and logical operations
open import natural_numbers.definition
open import natural_numbers.operations

open import predicate_logic.definitions
open import predicate_logic.properties

-- Proof
associativityℕ+ : {l m n : ℕ} → ((l + m) + n) ≡ (l + (m + n))
associativityℕ+ {zero} {m} {n} = refl
associativityℕ+ {suc l} {m} {n} = congruence suc (associativityℕ+ {l} {m} {n})
```

### Results

- Successfully formalized the commutative Ring of integers constructively with Agda using intuitionistic type theory.

- Furnished machine-verified proofs for all standard commutative ring axioms.

- Developed a self-contained modular library with the capacity to extend to other structures.