---
title: "Modern Mathematical Logic"
description: "Notes on J Mileti's textbook on mathematical logic."
date: 2025-06-29
status: studying
subjects: ["Mathematics", "Logic"] 
categories: ["Academic Textbook"]
tags: ["mathematical-logic", "first-order-logic", "model-theory", "set-theory", "computability-theory", "incompleteness-theorems", "foundations-of-mathematics"]
bookAuthor: "Joseph Mileti"
draft: true
---

## Introduction

### The Nature of Mathematical Logic

Mathematical logic originated as an attempt ░░░░ codify ░░░░ formalize:

- _The language of mathematics._
░░░░ _The basic assumptions of mathematics._
- _The permissible rules of proof._

░░░░ of ░░░░ successful ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ study mathematical ░░░░ and ░░░░ ░░░░ mathematics itself. For ░░░░ ░░░░ will eventually give ░░░░ ░░░░ mathematical ░░░░ ░░░░ a ░░░░ ░░░░ ░░░░ to ░░░░ confusion with our ░░░░ ░░░░ understanding of ░░░░ ░░░░ proof ░░░░ we will ░░░░ ░░░░ objects deductions. ░░░░ can ░░░░ ░░░░ ░░░░ eventual ░░░░ of ░░░░ deduction as ░░░░ ░░░░ ░░░░ precise ░░░░ definition of continuity, ░░░░ replaces the ░░░░ “a graph that ░░░░ be drawn without lifting ░░░░ pencil.” ░░░░ we have ░░░░ ░░░░ notion ░░░░ ░░░░ ░░░░ we will ░░░░ ░░░░ ░░░░ into ░░░░ mathematical objects, ░░░░ us ░░░░ prove mathematical ░░░░ about ░░░░ ░░░░ ░░░░ mathematical reasoning. For example, ░░░░ ░░░░ open up ░░░░ ░░░░ ░░░░ ░░░░ that ░░░░ ░░░░ no deduction of ░░░░ mathematical ░░░░

Some newcomers find ░░░░ whole ░░░░ ░░░░ ░░░░ instance, ░░░░ ░░░░ ░░░░ to ░░░░ subject ░░░░ ░░░░ belief ░░░░ ░░░░ ░░░░ of ░░░░ logic ░░░░ ░░░░ ░░░░ as a foundation to ░░░░ ░░░░ more precise and secure, then the preceding ░░░░ ░░░░ ░░░░ rather circular, and this will almost certainly lead to ░░░░ great ░░░░ ░░░░ confusion. ░░░░ may ask ░░░░

_```Okay, we have just given a decent definition of a deduction. However, instead of proving things about deductions following this formal definition, we’re proving things about deductions using the usual informal proof style that I’ve grown accustomed to in other math courses. Why should I trust these informal proofs about deductions? How can we formally prove things (using deductions) about deductions? Isn’t that circular? Is that why we are only giving informal proofs? I thought that I would come away from this subject feeling better about the philosophical foundations of mathematics, but we have just added a new layer to mathematics, so we now have both informal proofs and deductions, which makes the whole thing even more dubious.```_

Others do not see a problem. After all, mathematics is the most reliable method we have to establish truth, and there was never any serious doubt about its validity. Such a person might react to these thoughts as follows:

_```We gave a mathematical definition of a deduction, so what’s wrong with using mathematics to prove things about deductions? There’s obviously a “real world” of true mathematics, and we are just working in that world to build a certain model of mathematical reasoning that is susceptible to mathematical analysis. It’s quite cool, really, that we can subject mathematical proofs to a mathematical study by building this internal model. All of this philosophical speculation and worry about secure foundations is tiresome, and probably meaningless. Let’s get on with the subject!```_

Should ░░░░ ░░░░ so dismissive of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ answer, of course, ░░░░ on your own philosophical ░░░░ ░░░░ is best ░░░░ ░░░░ ░░░░ subject with a point ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ mathematical ░░░░ ░░░░ to the ░░░░ ░░░░ methods. We should keep ░░░░ ░░░░ distinction between normal “real” mathematical reasoning ░░░░ the formal ░░░░ ░░░░ ░░░░ mathematical reasoning ░░░░ ░░░░ developing. ░░░░ is ░░░░ to ░░░░ these ░░░░ realms ░░░░ ░░░░ ░░░░ ░░░░ name, so one ░░░░ ░░░░ the ░░░░ ░░░░ realm ░░░░ ░░░░ ░░░░ be ░░░░ within) the _metatheory_░░░░ We ░░░░ eventually give examples of ░░░░ ░░░░ such as ░░░░ set theory, which ░░░░ ░░░░ to ░░░░ ░░░░ entire ░░░░ of ░░░░ ░░░░ mathematical logic itself. Once ░░░░ have developed ░░░░ theory in ░░░░ ░░░░ ░░░░ ░░░░ be able ░░░░ ░░░░ reasonable answers ░░░░ the first ░░░░ and provide other ░░░░ ░░░░ accounts ░░░░ ░░░░ ░░░░ ░░░░ mathematics.

░░░░ ideas and techniques that were developed with ░░░░ goals in mind ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ branches ░░░░ mathematics and in computer science. ░░░░ subject, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ also ░░░░ ░░░░ own ░░░░ interesting internal questions, ░░░░ are often ░░░░ better or worse) divorced ░░░░ ░░░░ ░░░░ Most of the subject ░░░░ ░░░░ ░░░░ 1930s is ░░░░ with these ░░░░ and ░░░░ ░░░░ along ░░░░ applications ░░░░ ░░░░ ░░░░ ░░░░ now ░░░░ work is just ░░░░ small ░░░░ still important) part ░░░░ mathematical logic. Thus, ░░░░ if one has no ░░░░ in ░░░░ more philosophical ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ is worthy ░░░░ attention.

### The Language of Mathematics

░░░░ ░░░░ ░░░░ ░░░░ most essential, ░░░░ ░░░░ we must address to provide ░░░░ ░░░░ ░░░░ of ░░░░ is how to deal ░░░░ the language of mathematics. In this ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ motivation for ░░░░ development ░░░░ ░░░░ language, ░░░░ ░░░░ ░░░░ leave precise ░░░░ ░░░░ until later.

We ░░░░ certainly ░░░░ use English ░░░░ any other natural ░░░░ because ░░░░ is constantly ░░░░ often ambiguous, and allows ░░░░ construction of ░░░░ that ░░░░ not mathematical, or ░░░░ ░░░░ ░░░░ subjective sentiments. ░░░░ ░░░░ ░░░░ ░░░░ out natural language, ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ ░░░░ own formal ░░░░ At first, the ░░░░ of ░░░░ ░░░░ universal language seems quite ░░░░ ░░░░ ░░░░ we ░░░░ write down ░░░░ ░░░░ ░░░░ that can simultaneously ░░░░ the ░░░░ ░░░░ geometry, ░░░░ ░░░░ and ░░░░ other field ░░░░ mathematics, ░░░░ to ░░░░ those ░░░░ haven’t developed ░░░░ Our approach to ░░░░ problem will ░░░░ to avoid ░░░░ ░░░░ ░░░░ all ░░░░ once. 

Instead ░░░░ ░░░░ from ░░░░ ░░░░ ░░░░ trying to ░░░░ primitive mathematical ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ down ░░░░ let’s first think ░░░░ how to ░░░░ new ░░░░ statements ░░░░ ░░░░ ones. ░░░░ simplest way to do ░░░░ is ░░░░ take ░░░░ established mathematical statements ░░░░ put them ░░░░ using ░░░░ ░░░░ not, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ between English ░░░░ our ░░░░ (as ░░░░ ░░░░ between ░░░░ metatheory ░░░░ ░░░░ formal model), we ░░░░ introduce symbols ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ call these ░░░░ _connectives_.

- $\land$ ░░░░ _and_░░░░
░░░░ $\lor$ ░░░░ _or_░░░░
░░░░ $\lnot$ means _not_.
░░░░ $\to$ ░░░░ _implies_░░░░

In ░░░░ ░░░░ ignore the ░░░░ question ░░░░ what constitutes a primitive statement, ░░░░ ░░░░ attempt will simply ░░░░ to take ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ as ░░░░ ░░░░ ░░░░ and ░░░░ ░░░░ ░░░░ in all ░░░░ ways ░░░░ the ░░░░

░░░░ ░░░░ suppose we ░░░░ ░░░░ ░░░░ ░░░░ $P = \{\mathrm{A},\ \mathrm{B},\ \mathrm{C}\}$░░░░ ░░░░ ░░░░ of $\mathrm{A}$, $\mathrm{B}$, and $\mathrm{C}$ ░░░░ ░░░░ primitive statements, and we may or ░░░░ ░░░░ care what they might express. ░░░░ ░░░░ ░░░░ to ░░░░ together ░░░░ ░░░░ ░░░░ $P$ ░░░░ the connectives, ░░░░ ░░░░ ░░░░ this ░░░░ idea quickly leads ░░░░ a ░░░░ ░░░░ ░░░░ _meaning_ ░░░░ $\mathrm{A} \land \mathrm{B} \lor \mathrm{C}$ be “$\mathrm{A}$ holds, and ░░░░ $\mathrm{B}$ holds or $\mathrm{C}$ holds,” corresponding to $\mathrm{A} \land \left(\mathrm{B} \lor \mathrm{C}\right)$, or ░░░░ it be “Either ░░░░ $\mathrm{A}$ ░░░░ $\mathrm{B}$ ░░░░ or $\mathrm{C}$ ░░░░ corresponding ░░░░ $\left(\mathrm{A} \land \mathrm{B}\right) \lor \mathrm{C}$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ to avoid this ░░░░ Probably ░░░░ most ░░░░ ░░░░ to ░░░░ ░░░░ is to ░░░░ parentheses ░░░░ ░░░░ ░░░░ ░░░░ how to group terms. We start by ░░░░ ░░░░ every ░░░░ of $P$ is ░░░░ _formula_, and then we generate ░░░░ ░░░░ using the ░░░░ ░░░░

- If $\varphi$ and $\psi$ ░░░░ ░░░░ ░░░░ $\left(\varphi \land \psi\right)$ ░░░░ ░░░░ ░░░░
- If $\varphi$ and $\psi$ are formulas, ░░░░ $\left(\varphi \lor \psi\right)$ is a formula.
░░░░ If $\varphi$ is a formula, then $\lnot \varphi$ is a ░░░░
░░░░ If $\varphi$ and $\psi$ are ░░░░ then $\left(\varphi \to \psi\right)$ is ░░░░ formula.

For example, $\left(\left(¬\left(\mathrm{B} \lor \left(\left(\lnot \mathrm{A}\right) → \mathrm{C}\right)\right)\right) \lor \mathrm{A}\right)$ ░░░░ a ░░░░ This simple setup, ░░░░ propositional logic, is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ language ░░░░ ░░░░ ░░░░ ░░░░ are ░░░░ ░░░░ ░░░░ questions ░░░░ theorems that ░░░░ from ░░░░ ░░░░ study.

Of course, mathematical language ░░░░ much ░░░░ rich ░░░░ ░░░░ ░░░░ what we get ░░░░ ░░░░ logic. ░░░░ important way to make ░░░░ ░░░░ and interesting ░░░░ statements ░░░░ ░░░░ make use of the quantifiers _for all_ ░░░░ _there exists_. We ░░░░ ░░░░ ░░░░ $\forall$ ░░░░ $\exists$░░░░ ░░░░ ░░░░ ░░░░ to ░░░░ “for ░░░░ and “there exists,” ░░░░ To ░░░░ these symbols, we ░░░░ ░░░░ _variables_ to ░░░░ as ░░░░ ░░░░ quantify ░░░░ We ░░░░ denote ░░░░ by ░░░░ ░░░░ $\mathrm{x},\ \mathrm{y},\ \mathrm{z}$ ░░░░ so on. ░░░░ we have come ░░░░ ░░░░ ░░░░ we will ░░░░ ░░░░ refine ░░░░ ░░░░ notion ░░░░ ░░░░ ░░░░ because it ░░░░ unclear how to interpret a ░░░░ ░░░░ $\forall x B$ ░░░░ ░░░░ of the ░░░░ of $\mathrm{x}$ “inside” $\mathrm{B}$.

░░░░ ░░░░ a ░░░░ ░░░░ our ░░░░ statements. As ░░░░ have ░░░░ ░░░░ seems ░░░░ ░░░░ come ░░░░ with primitive ░░░░ for ░░░░ ░░░░ of mathematics ░░░░ once, so let’s ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ isolation. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ a set $G$ ░░░░ with ░░░░ binary operation $\cdot$ (that is, $\cdot$ takes in ░░░░ ░░░░ $x,\ y \in G$ ░░░░ produces ░░░░ ░░░░ element ░░░░ $G$ ░░░░ ░░░░ $x \cdot y$) and an ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

- Associativity: ░░░░ ░░░░ $x,\ y,\ z \in G$░░░░ we have $\left(x \cdot y\right) \cdot z = x \cdot \left(y \cdot z\right)$░░░░
- Identity: For ░░░░ $x \in G$░░░░ ░░░░ ░░░░ $x \cdot e = x = e \cdot x$.
- ░░░░ ░░░░ all $x \in G$░░░░ ░░░░ exists $y \in G$ such ░░░░ $x \cdot y = e = y \cdot x$░░░░

Although it ░░░░ ░░░░ ░░░░ certainly easier ░░░░ the ░░░░ ░░░░ put $\cdot$ ░░░░ ░░░░ elements ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the standard ░░░░ ░░░░ ░░░░ make the ░░░░ ░░░░ ░░░░ across different areas. In this ░░░░ a ░░░░ ░░░░ ░░░░ set $G$ ░░░░ ░░░░ ░░░░ ░░░░ $f: G \times G \to G$ and ░░░░ element $e$ satisfying ░░░░ following:

- For ░░░░ $x,\ y,\ z \in G$, we have $f(f(x,\ y),\ z) = f(x,\ f(y,\ z))$.
- For all $x \in G$░░░░ we have $f(x,\ e) = x = f(e,\ x)$░░░░
- For ░░░░ $x \in G$, there ░░░░ $y \in G$ such that $f(x,\ y) = e = f(y,\ x)$.

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ make statements about groups, we introduce a _function symbol_ $\mathrm{f}$ ░░░░ represent ░░░░ group operation, and ░░░░ _constant symbol_ $\mathrm{e}$ to ░░░░ the group identity. ░░░░ ░░░░ ░░░░ operation ░░░░ in ░░░░ elements of the group, ░░░░ if $\mathrm{x}$ ░░░░ $\mathrm{y}$ ░░░░ ░░░░ then we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\mathrm{f}(\mathrm{x},\ \mathrm{y})$, ░░░░ should ░░░░ an ░░░░ of ░░░░ group ░░░░ ░░░░ ░░░░ assigned ░░░░ of ░░░░ ░░░░ ░░░░ $\mathrm{x}$ and $\mathrm{y}$░░░░ ░░░░ ░░░░ should permit the constant symbol ░░░░ be ░░░░ in this way, allowing us ░░░░ form ░░░░ like $\mathrm{f}(\mathrm{x},\ \mathrm{e})$░░░░ ░░░░ we have formed ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ to use ░░░░ ░░░░ variables in ░░░░ ░░░░ ░░░░ ░░░░ as $\mathrm{f}(\mathrm{f}(\mathrm{x},\ \mathrm{e}),\ \mathrm{y})$░░░░ Each ░░░░ ░░░░ expressions formed ░░░░ putting ░░░░ perhaps repeatedly, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\mathrm{e}$ using ░░░░ function symbol $\mathrm{f}$ ░░░░ ░░░░ _term_. ░░░░ a term ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ once we have assigned ░░░░ ░░░░ ░░░░ variables. 

With ░░░░ ░░░░ ░░░░ name ░░░░ ░░░░ in ░░░░ we ░░░░ now ░░░░ position ░░░░ ░░░░ our ░░░░ statements. ░░░░ most ░░░░ thing that we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ elements ░░░░ whether they are ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ new _equality symbol_ ░░░░ we will ░░░░ by ░░░░ ░░░░ $=$░░░░ Given two ░░░░ $t1$ and $t2$░░░░ ░░░░ ░░░░ the ░░░░ $\left(t1 = t2\right)$ an _atomic formula_. These are ░░░░ ░░░░ ░░░░

░░░░ ░░░░ formulas ░░░░ ░░░░ ░░░░ can use ░░░░ ░░░░ connectives and the ░░░░ ░░░░ ░░░░ make ░░░░ ░░░░ statements, ░░░░ ░░░░ again call _formulas_. ░░░░ all ░░░░ ░░░░ are ░░░░ ░░░░ ░░░░ we already ░░░░ ░░░░ can put ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ Also, ░░░░ $\varphi$ is ░░░░ formula and $x$ ░░░░ a ░░░░ then ░░░░ ░░░░ the ░░░░ is a formula:

- $\forall \mathrm{x} \varphi$
- $\exists \mathrm{x} \varphi$

░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ reasonably ░░░░ language ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ instance, ░░░░ can write formulas ░░░░ this language that ░░░░ ░░░░ group ░░░░

░░░░ $\forall \mathrm{x} \forall \mathrm{y} \forall \mathrm{z} (\mathrm{f}(\mathrm{f}(\mathrm{x},\ \mathrm{y}),\ \mathrm{z}) = \mathrm{f}(\mathrm{x},\ \mathrm{f}(\mathrm{y},\ \mathrm{z})))$
- $\forall \mathrm{x}((\mathrm{f}(\mathrm{x},\ \mathrm{e}) = \mathrm{x}) \land (\mathrm{f}(\mathrm{e},\ \mathrm{x}) = \mathrm{x}))$
░░░░ $\forall \mathrm{x} \exists \mathrm{y}((\mathrm{f}(\mathrm{x},\ \mathrm{y}) = \mathrm{e}) \land (\mathrm{f}(\mathrm{y},\ \mathrm{x}) = \mathrm{e}))$

░░░░ ░░░░ also ░░░░ a formula ░░░░ ░░░░ ░░░░ group ░░░░ abelian: 

$$\forall \mathrm{x} \forall \mathrm{y}(\mathrm{f}(\mathrm{x},\ \mathrm{y}) = \mathrm{f}(\mathrm{y},\ \mathrm{x}))$$

░░░░ ░░░░ ░░░░ formula expressing that the centre ░░░░ ░░░░ ░░░░ is ░░░░

$$\exists \mathrm{x}(\lnot(\mathrm{x} = \mathrm{e}) \land \forall \mathrm{y}(\mathrm{f}(\mathrm{x},\ \mathrm{y}) = \mathrm{f}(\mathrm{y},\ \mathrm{x})))$$

░░░░ we ░░░░ ░░░░ write ░░░░ ░░░░ formulas that express incoherent ░░░░ ░░░░ ░░░░

$$\forall \mathrm{x} \exists \mathrm{y} \exists \mathrm{x}(\lnot(\mathrm{e = e}))$$

However, we ░░░░ certainly handle some unnatural ░░░░ and ░░░░ ░░░░ ░░░░ it easier ░░░░ ░░░░ and ░░░░ about, ░░░░ ░░░░ ░░░░ actually ░░░░

░░░░ if we ░░░░ to consider ░░░░ ░░░░ other ░░░░ group theory? Commutative ring ░░░░ doesn’t pose ░░░░ ░░░░ a problem, ░░░░ long as ░░░░ may ░░░░ the number of function symbols ░░░░ constant symbols. We can ░░░░ ░░░░ ░░░░ symbols a and m that ░░░░ two ░░░░ (where $a$ ░░░░ addition ░░░░ $m$ represents multiplication) ░░░░ ░░░░ constant ░░░░ $0$ and $1$ (where $0$ ░░░░ ░░░░ additive identity and $1$ ░░░░ the ░░░░ identity). ░░░░ ░░░░ axioms for ░░░░ rings in this ░░░░ is straightforward. 

░░░░ contrast, ░░░░ about ░░░░ ░░░░ ░░░░ ░░░░ orderings? ░░░░ that a ░░░░ ░░░░ is a set $P$ equipped with a ░░░░ $\lt$ ░░░░ $P \times P$░░░░ where we write $x \lt y$ to mean that $(x, y)$ is ░░░░ ░░░░ of ░░░░ ░░░░ satisfying ░░░░ ░░░░

- Irreflexive: ░░░░ all $x \in P$, ░░░░ have $x \not\lt x$░░░░
- Transitive: If $x,\ y,\ z \in P$ ░░░░ ░░░░ ░░░░ $x \lt y$ and $y \lt z$, ░░░░ $x \lt z$░░░░

Analogous to ░░░░ syntax ░░░░ used ░░░░ ░░░░ ░░░░ group ░░░░ we ░░░░ ░░░░ notation ░░░░ puts ░░░░ ░░░░ ░░░░ front ░░░░ ░░░░ ░░░░ arguments. Such an approach ░░░░ seem ░░░░ at this ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ putting ░░░░ in the ░░░░ but we ░░░░ see ░░░░ such ░░░░ convention provides ░░░░ unifying ░░░░ for other ░░░░ objects. We thus ░░░░ ░░░░ _relation symbol_ $\mathrm{R}$ (meant ░░░░ ░░░░ $\lt$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $=$░░░░ but ░░░░ ░░░░ ░░░░ have ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ function ░░░░ 

░░░░ this ░░░░ (without ░░░░ ░░░░ function symbols), the only terms ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ only names ░░░░ ░░░░ of ░░░░ partial ░░░░ are the variables. ░░░░ our atomic ░░░░ are ░░░░ interesting because now ░░░░ ░░░░ ░░░░ ░░░░ things we can say ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ are equal and ░░░░ ░░░░ ░░░░ related ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ things of ░░░░ ░░░░ $t1 = t2$ and $\mathrm{R}(t1,\ t2)$ where $t1$ ░░░░ $t2$ ░░░░ terms. ░░░░ these atomic formulas, we ░░░░ up ░░░░ ░░░░ formulas as described above.

We ░░░░ now ░░░░ formulas expressing the axioms of ░░░░ orderings:

░░░░ $\forall \mathrm{x} \lnot \mathrm{R}(\mathrm{x},\ \mathrm{x})$
- $\forall \mathrm{x} \forall \mathrm{y} \forall \mathrm{z}((\mathrm{R}(\mathrm{x},\ \mathrm{y}) \land \mathrm{R}(\mathrm{y},\ \mathrm{z})) \to \mathrm{R}(\mathrm{x},\ \mathrm{z}))$

░░░░ ░░░░ also write ░░░░ formula ░░░░ that ░░░░ partial ordering is ░░░░ ░░░░ ordering:

$$\mathrm{\forall x \forall y(x = y \land (R(x,\ y) \land R(y,\ x)))}$$

░░░░ with ░░░░ ░░░░ expressing ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░

$$\mathrm{\exists x \forall y(\lnot R(x,\ y))}$$

░░░░ ░░░░ idea ░░░░ that by leaving flexibility ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ constant ░░░░ ░░░░ symbols, ░░░░ function ░░░░ we will ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ call this setup ░░░░ logic. ░░░░ analysis of first-order ░░░░ ░░░░ consume the ░░░░ of our time. ░░░░ we do not claim that ░░░░ ░░░░ ░░░░ us ░░░░ express everything in mathematics, nor ░░░░ ░░░░ claim that ░░░░ ░░░░ ░░░░ setups just ░░░░ allows us ░░░░ express ░░░░ ░░░░ ░░░░ in ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ take ░░░░ group theory ░░░░ We can ░░░░ ░░░░ every ░░░░ ░░░░ ░░░░ order two with ░░░░ formula $\mathrm{\forall x(f(x,\ x) = e)}$░░░░ ░░░░ it ░░░░ difficult to say that ░░░░ ░░░░ of ░░░░ group ░░░░ finite ░░░░ The natural guess ░░░░

$$\mathrm{\forall x \exists n(x^n = e)}$$

But ░░░░ poses a ░░░░ ░░░░ ░░░░ ░░░░ First our variables are supposed to quantify ░░░░ elements of ░░░░ group in ░░░░ ░░░░ the natural ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ to ░░░░ us to ░░░░ ░░░░ like $\mathrm{x^n}$. For each ░░░░ $n$, we ░░░░ ░░░░ ░░░░ for $n = 3$ ░░░░ ░░░░ ░░░░ $\mathrm{f(f(x,\ x),\ x)}$░░░░ and for $n = 4$ ░░░░ ░░░░ ░░░░ $\mathrm{f}(\mathrm{f}(\mathrm{f}(\mathrm{x},\ \mathrm{x}),\ \mathrm{x}),\ x)$░░░░ ░░░░ it ░░░░ ░░░░ clear how to ░░░░ ░░░░ ░░░░ ░░░░ allowing quantification ░░░░ ░░░░ ░░░░ ░░░░ For ░░░░ example, consider trying to ░░░░ ░░░░ ░░░░ group ░░░░ ░░░░ (i.e. has no nontrivial ░░░░ ░░░░ ░░░░ natural instinct ░░░░ to quantify over all subsets $H$ ░░░░ ░░░░ ░░░░ $G$, ░░░░ ░░░░ that if it so ░░░░ that $H$ ░░░░ a ░░░░ ░░░░ then $H$ is either trivial or ░░░░ However, we have no way to quantify ░░░░ subsets. ░░░░ ░░░░ ░░░░ ░░░░ to allow ░░░░ ░░░░ ░░░░ leads to _second-order logic_░░░░ ░░░░ can ░░░░ ░░░░ further and ░░░░ quantification ░░░░ ░░░░ of ░░░░ (for example, ░░░░ way of ░░░░ that ░░░░ ring is Noetherian ░░░░ ░░░░ ░░░░ ░░░░ every nonempty set of ideals has ░░░░ maximal ░░░░ which ░░░░ to _third-order logic_, and ░░░░ on.

Newcomers ░░░░ the field often ░░░░ it strange ░░░░ ░░░░ ░░░░ primarily on ░░░░ logic. ░░░░ ░░░░ many reasons ░░░░ give ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ (which ░░░░ ░░░░ come to appreciate throughout our study), but ░░░░ ░░░░ one should ░░░░ ░░░░ ░░░░ as ░░░░ ░░░░ ░░░░ ░░░░ of a ░░░░ ░░░░ is capable of expressing ░░░░ aspects ░░░░ ░░░░ of mathematics. 

In fact, ░░░░ will ░░░░ ░░░░ the limitations ░░░░ first-order logic ░░░░ precisely what ░░░░ us ░░░░ ░░░░ powerful ░░░░ ░░░░ ░░░░ Moreover, these ░░░░ ░░░░ allow us to ░░░░ interesting ░░░░ consequences.

### Syntax and Semantics

░░░░ the ░░░░ ░░░░ we ░░░░ ░░░░ symbols ░░░░ ░░░░ intended to denote ░░░░ mathematical concepts (such as ░░░░ $\land$ in place ░░░░ “and,” $\forall$ ░░░░ place ░░░░ ░░░░ all,” ░░░░ ░░░░ function
symbol $\mathrm{f}$ ░░░░ ░░░░ of the group operation $f$) ░░░░ and maintaining ░░░░ careful ░░░░ between ░░░░ ░░░░ and ░░░░ to interpret them ░░░░ a fundamental aspect of ░░░░ logic. 

The ░░░░ structure of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ write ░░░░ using the symbols, connectives, and quantifiers ░░░░ ░░░░ ░░░░ ░░░░ _syntax_ ░░░░ the logic ░░░░ we are ░░░░ Syntax corresponds to the ░░░░ of the ░░░░ in ░░░░ ░░░░ ░░░░ thought given to ░░░░ Imagine ░░░░ ░░░░ ░░░░ who ░░░░ ░░░░ for ░░░░ content ░░░░ your ░░░░ but only cared that it ░░░░ grammatically ░░░░ That is exactly ░░░░ ░░░░ syntax of a ░░░░ ░░░░ all about. Syntax ░░░░ ░░░░ in ░░░░ ░░░░ is ░░░░ ░░░░ simple rules ░░░░ provide admissible ░░░░ to manipulate ░░░░ devoid of any knowledge of ░░░░ intended ░░░░ 

The manner in which ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ interpret ░░░░ ░░░░ connectives, ░░░░ quantifiers ░░░░ known as ░░░░ _semantics_ ░░░░ the ░░░░ logic. ░░░░ ░░░░ logic there ░░░░ ░░░░ ░░░░ symbols that ░░░░ ░░░░ forced ░░░░ interpret in ░░░░ ░░░░ ways. For ░░░░ in ░░░░ preceding ░░░░ we ░░░░ ░░░░ symbol $\land$ ░░░░ mean _and_. In ░░░░ ░░░░ ░░░░ setting, this does ░░░░ ░░░░ how to ░░░░ ░░░░ formula because ░░░░ have ░░░░ said how to interpret ░░░░ elements ░░░░ $P$. ░░░░ have ░░░░ ░░░░ here, but once ░░░░ ░░░░ that ░░░░ ░░░░ ░░░░ ░░░░ elements ░░░░ $P$ ░░░░ ░░░░ and the ░░░░ as ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ either true or false.

The ░░░░ ░░░░ ░░░░ is more ░░░░ ░░░░ ░░░░ have ░░░░ ░░░░ ░░░░ thing ░░░░ ░░░░ ░░░░ ░░░░ in order to interpret ░░░░ formula is ░░░░ fix ░░░░ set $X$ ░░░░ ░░░░ act ░░░░ the set ░░░░ objects ░░░░ which the ░░░░ will range. ░░░░ ░░░░ a _universe_ $X$ ░░░░ ░░░░ ░░░░ ░░░░ interpret ░░░░ function symbol $\mathrm{f}$ taking $k$ arguments as an actual ░░░░ $f: X^k \to X$, ░░░░ ░░░░ $\mathrm{R}$ symbol ░░░░ $k$ ░░░░ ░░░░ a ░░░░ of $X^k$, and each ░░░░ ░░░░ $\mathrm{c}$ as an element ░░░░ $X$░░░░ Once ░░░░ ░░░░ fixed ░░░░ ░░░░ are ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ interpretations, we can ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ meaningful. For example, ░░░░ we ░░░░ ░░░░ a group $G$ ░░░░ interpret $\mathrm{f}$ ░░░░ ░░░░ ░░░░ operation ░░░░ e as the ░░░░ then ░░░░ ░░░░ 

$$\mathrm{\forall x \forall y(f(x,\ y) = f(y,\ x))}$$ 

is either true ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $G$ ░░░░ abelian or not.

Always ░░░░ the ░░░░ between ░░░░ and ░░░░ ░░░░ Many basic theorems ░░░░ the ░░░░ ░░░░ the ░░░░ between syntax and ░░░░ For example, suppose ░░░░ $\mathrm{\Gamma}$ is ░░░░ ░░░░ ░░░░ ░░░░ and that $\varphi$ ░░░░ ░░░░ formula. We will ░░░░ ░░░░ what ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\mathrm{\Gamma}$ implies the ░░░░ $\varphi$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we discuss, ░░░░ will ░░░░ ░░░░ fundamental but seemingly ░░░░ ░░░░ ░░░░ way ░░░░ saying ░░░░ the ░░░░ ░░░░ $\mathrm{\Gamma}$ ░░░░ $\varphi$ ░░░░ semantic: ░░░░ we provide an ░░░░ making all ░░░░ formulas ░░░░ $\mathrm{\Gamma}$ true, it ░░░░ that $\varphi$ ░░░░ ░░░░ true. For instance, if ░░░░ ░░░░ ░░░░ in propositional ░░░░ ░░░░ ░░░░ have $\mathrm{\Gamma = {((A ∧ B) ∨ C)}}$ ░░░░ $\varphi = (\mathrm{A} \land \mathrm{C})$, then $\mathrm{\Gamma}$ implies $\varphi$ in this ░░░░ because ░░░░ we assign true/false ░░░░ to $\mathrm{A}$, $\mathrm{B}$, and $\mathrm{C}$ so that the formulas in $\mathrm{\Gamma}$ are true, it ░░░░ that $\mathrm{\varphi}$ will also be true. ░░░░ approach that we will ░░░░ is ░░░░ ░░░░ will define ░░░░ ░░░░ ░░░░ “formal proofs” ░░░░ ░░░░ ░░░░ permissible syntactic manipulations, ░░░░ $\mathrm{\Gamma}$ will imply $\varphi$ ░░░░ this ░░░░ ░░░░ there is a ░░░░ deduction. ░░░░ Soundness Theorem ░░░░ the ░░░░ Theorem ░░░░ first-order ░░░░ (and ░░░░ logic) say ░░░░ the ░░░░ ░░░░ and ░░░░ version coincide. ░░░░ we ░░░░ (amazingly!) ░░░░ ░░░░ ░░░░ using ░░░░ syntactic manipulations.

### The Point of It All

░░░░ important aspect, often mistaken ░░░░ the ░░░░ ░░░░ of mathematical ░░░░ is that ░░░░ allows ░░░░ ░░░░ study mathematical ░░░░ using the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ sentence ░░░░ ░░░░ ░░░░ section ░░░░ ░░░░ ░░░░ example. ░░░░ Completeness Theorem ░░░░ ░░░░ we can capture the ░░░░ ░░░░ ░░░░ mathematical ░░░░ ░░░░ ░░░░ other ░░░░ statements using nothing more ░░░░ ░░░░ ░░░░ on symbols. ░░░░ ░░░░ result is certainly computationally, ░░░░ ░░░░ foundationally interesting, it ░░░░ also ░░░░ more than that. ░░░░ simple ░░░░ is ░░░░ ░░░░ ░░░░ which says ░░░░ ░░░░ deep ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ has many ░░░░ ░░░░ ░░░░ mathematics.

░░░░ ░░░░ ░░░░ ░░░░ logics ░░░░ ░░░░ ░░░░ goal ░░░░ handling certain ░░░░ ░░░░ ░░░░ it is ░░░░ ░░░░ and ░░░░ ░░░░ that we can embed (nearly) all of ░░░░ ░░░░ ░░░░ ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ theory. ░░░░ we ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ mathematical ░░░░ ░░░░ independent ░░░░ our ░░░░ ░░░░ ░░░░ axioms. ░░░░ other ░░░░ we might ░░░░ able to show that there ░░░░ ░░░░ $\varphi$ such ░░░░ there ░░░░ no deduction ░░░░ ░░░░ usual ░░░░ ░░░░ $\varphi$, and ░░░░ ░░░░ deduction of $\lnot \varphi$. ░░░░ ░░░░ field ░░░░ ░░░░ theory has blossomed ░░░░ an ░░░░ ░░░░ with ░░░░ own deep ░░░░ questions.

░░░░ ░░░░ ░░░░ and ░░░░ subjects arise ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ and ░░░░ altogether ░░░░ simply look ░░░░ what ░░░░ ░░░░ accomplished ░░░░ ░░░░ ░░░░ precise language to ░░░░ ░░░░ area ░░░░ ░░░░ ░░░░ ░░░░ language ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░ say that ░░░░ objects ░░░░ _definable_ ░░░░ ░░░░ ░░░░ For instance, ░░░░ ░░░░ language of commutative rings. If ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the formula $\mathrm{\exists y (m(x,y) = 1)}$ has a ░░░░ ░░░░ x ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ in ░░░░ ring. ░░░░ we ░░░░ ░░░░ reason about ░░░░ ░░░░ have ░░░░ ░░░░ ░░░░ possibility ░░░░ proving lower bounds ░░░░ the ░░░░ of any definition of a ░░░░ ░░░░ or even ░░░░ proving that no such ░░░░ exists in ░░░░ given language. 

░░░░ ░░░░ related, ░░░░ ░░░░ ░░░░ our definitions ░░░░ ░░░░ languages and run ░░░░ ░░░░ leads to the ░░░░ of _model theory_░░░░ ░░░░ group ░░░░ ░░░░ ░░░░ ░░░░ axioms ░░░░ ░░░░ from there ░░░░ ░░░░ ░░░░ possible realizations of ░░░░ axioms (i.e. ░░░░ possible groups). Still, as ░░░░ ░░░░ ░░░░ ░░░░ group axioms arise ░░░░ ░░░░ possible language ░░░░ ░░░░ possible set ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ possible languages and all possible ░░░░ of axioms and ░░░░ ░░░░ ░░░░ can ░░░░ ░░░░ and ░░░░ the ░░░░ ░░░░ to ░░░░ ░░░░ In this ░░░░ ░░░░ theory is ░░░░ kind ░░░░ _abstract_ abstract algebra.

Finally, although it ░░░░ probably far ░░░░ clear ░░░░ ░░░░ fits ░░░░ ░░░░ ░░░░ ░░░░ _computability theory_ is intimately related ░░░░ ░░░░ above subjects. ░░░░ see ░░░░ ░░░░ ░░░░ of ░░░░ connection, ░░░░ ░░░░ computer programming ░░░░ are ░░░░ ░░░░ ░░░░ with a precise ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ syntax ░░░░ semantics. ░░░░ the ░░░░ runs ░░░░ ░░░░ deeply. ░░░░ ░░░░ ░░░░ inevitably arise ░░░░ both our study ░░░░ propositional logic and ░░░░ ░░░░ ░░░░ will ░░░░ that the computable sets ░░░░ ░░░░ important ░░░░ in ░░░░ definability ░░░░ ░░░░ natural numbers, and this ░░░░ will ░░░░ ░░░░ the ░░░░ ░░░░

### Terminology and Notation

░░░░ briefly ░░░░ some terminology ░░░░ notation that we ░░░░ use throughout the book. ░░░░ definitions of ░░░░ ░░░░ numbers ░░░░ ░░░░ sequences ░░░░ ░░░░ ░░░░ an ░░░░ ░░░░ set ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ new ░░░░ ░░░░ ░░░░ ░░░░ of these ░░░░ but we ░░░░ still ░░░░ ░░░░ ░░░░ ░░░░

**Definition 1.5.1**░░░░ We ░░░░ $\N = \{0,\ 1,\ 2, \cdots\}$ and we let $\N^{+} = \N \backslash \{0\}$. 

Given a natural ░░░░ ░░░░ it ░░░░ somewhat ░░░░ in combinatorics ░░░░ ░░░░ ░░░░ notation $[n]$ for the ░░░░ $\{1,\ 2,\ \cdots,\ n\}$░░░░ ░░░░ choose ░░░░ ░░░░ with $0$ instead, ░░░░ lay the groundwork ░░░░ our ░░░░ ░░░░ ░░░░ the ░░░░ numbers ░░░░

**Definition 1.5.2**: ░░░░ each $n \in \N$░░░░ we let $[n] = {m \in \N : m \lt n}$░░░░ so $[n] = \{0,\ 1,\ 2, \cdots ,\ n−1\}$. 

_Notation 1.5.3_░░░░ ░░░░ $f: A \to B$ ░░░░ a function. Given $X \subseteq A$, we ░░░░ $f \restriction X$ ░░░░ ░░░░ ░░░░ with ░░░░ $X$ ░░░░ ░░░░ $B$ that is ░░░░ by restricting $f$ ░░░░ $X$. We will ░░░░ work ░░░░ ░░░░ ░░░░ While these ░░░░ ░░░░ taken as primitive objects, we ░░░░ to ░░░░ ░░░░ sequence ░░░░ length $n$ ░░░░ a ░░░░ ░░░░ ░░░░ $\{0,\ 1,\ \cdots,\ n−1\}$.

**Definition 1.5.4**: ░░░░ $X$ be ░░░░ set. ░░░░ $n \in \N$░░░░ we call a function $\sigma: [n] \to X$ ░░░░ finite sequence from $X$ of length $n$░░░░ We ░░░░ the ░░░░ of ░░░░ finite ░░░░ ░░░░ $X$ of length $n$ ░░░░ $X^n$.We ░░░░ $\lambda$ ░░░░ ░░░░ the unique ░░░░ ░░░░ length $0$░░░░ so $X^0 = {\lambda}$. ░░░░ given a ░░░░ ░░░░ $\sigma$ from $X$, ░░░░ ░░░░ the ░░░░ $[\sigma]$ to denote ░░░░ length of $\sigma$.
 
**Definition 1.5.5**: Given ░░░░ ░░░░ $X$░░░░ we ░░░░ $X^∗ = \bigcup_{n \in \N} X^n$░░░░ that is, $X^∗$ ░░░░ the set ░░░░ ░░░░ ░░░░ sequences from $X$░░░░

░░░░ denote finite ░░░░ ░░░░ simply ░░░░ the ░░░░ ░░░░ order. For ░░░░ if $X = {a,\ b}$░░░░ ░░░░ ░░░░ sequence $\mathit{aababbba}$ is an element ░░░░ $X^∗$. ░░░░ ░░░░ ░░░░ we ░░░░ insert commas ░░░░ instead write $a,\ a,\ b,\ a,\ b,\ b,\ b,\ a$░░░░ 

**Definition 1.5.6**: If $\sigma,\ \tau \in X^*$, we denote ░░░░ concatenation ░░░░ $\sigma$ ░░░░ $\tau$ ░░░░ $\sigma \tau$.

**Definition 1.5.7**: If $\sigma,\ \tau \in X^*$, we say that $\sigma$ ░░░░ an initial ░░░░ of $\tau$░░░░ ░░░░ write $\sigma \sqsubseteq \tau$░░░░ ░░░░ $\sigma = \tau \restriction [n]$ ░░░░ some $n$. We ░░░░ that $\sigma$ is ░░░░ _proper initial segment_ of $\tau$░░░░ and write $\sigma \sqsubset \tau$ if $\sigma \sqsubseteq \tau$ ░░░░ $\sigma \neq \tau$░░░░

░░░░ ░░░░ use the ░░░░ $\overline{a}$ and $\underline{a}$ for some other ░░░░ ░░░░ ░░░░ the following ░░░░ ░░░░ equivalence ░░░░

_Notation 1.5.8_░░░░ ░░░░ ░░░░ equivalence ░░░░ $\backsim$ ░░░░ ░░░░ set $A$, ░░░░ an $a \in A$, we ░░░░ write $[a]$ for ░░░░ ░░░░ ░░░░ ░░░░ $a$░░░░ ░░░░ ░░░░ $[a] = \{b \in A : a \backsim b\}$. ░░░░ $\backsim$ ░░░░ an ░░░░ relation on $A$, then $[a]$ ░░░░ a ░░░░ of $A$.

**Definition 1.5.9**: Given ░░░░ set $A$, we ░░░░ $\mathcal{P}(A)$ be the set ░░░░ all subsets ░░░░ $A$░░░░ ░░░░ ░░░░ ░░░░ $\mathcal{P}(A)$ ░░░░ power set ░░░░ $A$.

For example, ░░░░ ░░░░ $\mathcal{P}(\{1,\ 2\})=\{\empty,\ \{1\},\ \{2\},\ \{1,2\}\}$ and $\mathcal{P}(\empty)=\{\empty\}$. A ░░░░ combinatorial ░░░░ ░░░░ ░░░░ ░░░░ $|A| = n$░░░░ ░░░░ $|\mathcal{P}(A)| = 2^n$░░░░

We ░░░░ also often want ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ function on a ░░░░ input, and ░░░░ ░░░░ ░░░░ ░░░░ introduce some ░░░░ ░░░░ ░░░░ ░░░░

_Notation 1.5.10_░░░░ Let $f: A \to B$ be a function, ░░░░ let $c \in A$ ░░░░ $d \in B$░░░░ We let $f[c \leadsto d]$ denote ░░░░ function ░░░░ ░░░░ $A$ and ░░░░ $B$ ░░░░ by 

$$f [c \leadsto d](a) = 
\begin{cases}
  d & \textrm{if} \ a = c,\\
  (a) & \textrm{otherwise}.
\end{cases}$$
 
░░░░ is, $f[c \leadsto d]$ ░░░░ with $f$ on ░░░░ inputs ░░░░ $c$░░░░ ░░░░ is ░░░░ ░░░░ to $d$.
