---
title: "Type-Theoretic Proofs for the Commutative Ring Axioms of the Integers"
date: 2022-07-30
weight: 1
status: ongoing
description: "A research project consisting of type-theoretic proofs for various properties of abstract algebraic mathematical structures."
stacks: ["Agda"]
repo: https://github.com/essentialblend/ms-thesis
---

### Introduction

This project fulfills MSc requirements by constructing a complete, machine-checked formalization of the commutative ring of integers in Agda. Under the supervision of Prof. Thorsten Altenkirch, the project:

- Defined natural numbers ($\N$) and integers ($\Z$) using intuitionistic type-theory (MLTT) independent of the standard library

- Streamlined operation definitions for the datatypes with iterators which aid in proof-writing efficiency

- Rigorously proved all algebraic properties: associativity, commutativity, identity, distributivity, and inverses for both datatypes

- Composed a modular library comprising of $\sim$1 k LOC representing $\sim$100 proofs extensible to other algebraic structures (groups, rings, and fields)

- Documented the library thoroughly, including exhaustive in-thesis explanations and build instructions

### Basic Strategy

- Defined Agda's logical and propositional infrastructure from scratch, without Agda STL

- Constructed proofs for operations and properties over $\N$ and $\Z$

- Utilized proofs constructively to assemble the extensible Ring object to verify all commutative ring axioms for $\Z$ 

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

- **Complete Formalization of $\N$ and $\Z$**
  Machine-verified proofs for the commutative ring axioms over the two datatypes, i.e., associativity, commutativity, identity, distributivity, inverses, structural datatypes, etc.

- **Modular Codebase**
  Nearly 100 proofs comprised of $\sim$1 k LOC with generic interfaces ripe for extension.

- **Foundations for the Future** 
  - A blueprint for extending constructive formalizations to advanced algebraic structures and number-theoretic concepts.
  - Pedagogical flexibility towards exploring constructive mathematics  

- **Documentation**
  - Step by step build instructions along with near-instant verification 
  - In-thesis commentary demonstrating proof strategies, design decisions and considerations