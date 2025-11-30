---
title: "Type-Theoretic Proofs for the Commutative Ring Axioms of the Integers"
date: 2022-07-30
weight: 1
status: ongoing
description: "A research project consisting of type-theoretic proofs for properties of abstract algebraic mathematical structures."
stacks: ["Agda"]
repo: https://github.com/essentialblend/ms-thesis
---

This research project constituted a partial conditional for my MS where I prove the existence of a certain mathematical construct called a _Ring_. I achieve this with the help of a computer-aided proof-assistant called _Agda_, a programming language based on intuitionist type theory, also called Martin-Löf type theory (MLTT).

This research project was undertaken under Prof. Thorsten Altenkirch's supervision, and I’m forever grateful for his time, expertise, and empathy towards my journey into this fantastic subject. 

I'm lucky to have Dan from over at the Univalent Agda Discord server for a close friend who spent countless hours, so I get to feel less clueless with each passing day.

## Build Instructions

### Prerequisites

- Windows
- Git, CMake 3.10 or higher, Agda 2.7.0.1 or higher
- Please check https://agda.readthedocs.io/en/stable/getting-started/installation.html for platform-specific Agda installation instructions

### Build & Verify 

```bash
git clone https://github.com/essentialblend/ms-thesis.git
cd ms-thesis
cmake -B build -S .
cmake --build build
```
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

## Details

This project develops a fully constructive, machine-verified formalization of the commutative ring of integers in Agda. Beginning from an entirely independent definition of the natural numbers (ℕ) and integers (ℤ), the development proceeds in four major phases:

### Core Definitions
- We define the naturals as an inductive data-type with constructors `zero` and `suc`
- Then, we extend the naturals to the integers as a record with two fields, a sign and a (natural) magnitude respectively
- None of these constructions rely on Agda’s standard library; they're built from first principles

### Basic Operations and Properties over the Naturals
- Implemented all necessary binary operations inducting over the constructors
- Proved key lemmas (assoc, comm, identities, etc.) for the naturals
- These proofs serve as a pedagogical warm-up, motivated learners may refer to this section for an informal tutorial on proof-assistants and Agda

### Operations and Properties of the Integers
- Defined binary operations integer addition, multiplication, negation, etc
- Proved every property needed to show the ring axioms, building upon the naturals
- Instantiated modular records for the integers, certifying the _final_ Ring object in Agda

### Extensibility and Documentation
- The codebase totals 34 Agda modules and ~900 lines of Agda code (as measured by `cloc`)
- Nearly 100 specialized lemmas and proofs encapsulated into generic, reusable, extensible interfaces; i.e., to other number systems and/or abstract algebraic structures
- Each module begins with a declaration, followed by necessary imports, lemmas, and concluding with the proofs. The entire development compiles in a single step with `agda --ignore-interfaces -i .`

## Results

### Complete, Standalone Formalization
We deliver a self-contained library of 34 modules (~900 lines) that formalizes and verifies the commutative-ring axioms for the integers in MLTT. We do not use Agda STL, _all proofs are handwritten._

### Machine-Checked Rigour
Computer aided proof assistants rigorously verify every module, guaranteeing total correctness via Agda's type checker.

### Modularity and Extensibility
This repo includes almost **100 lemmas** organized into small, reusable modules. Anyone can import these to build fields, polynomial rings, or experiment with more complex properties which critically demand robust constructions.

### Maintainability
Verification takes mere seconds on a modern computer. The library is easy to navigate: each top-level record lives in `integers/comm-ring/records.agda`. The supporting lemmas are at `integers/props`.
