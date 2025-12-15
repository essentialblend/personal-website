---
title: "Thoughts on Mathematical Induction: Part I"
date: 2025-06-06
subjects: ["Mathematics", "Logic"]
categories: ["Series"]
series: []
tags: ["mathematics", "logic", "induction", "recursion", "first", "order", "generating", "systems", "closure", "computer", "science", "programming", "language", "c++", "c"]
description: "A series introducing mathematical induction and discussing some of its corollaries."
ai_scale: C
draft: true
---
<p class="lede"> Induction, even setting aside its raison d&apos;&ecirc;tre as an inferential tool for mathematical proofs, is an insanely cool concept. Most people first encounter it indirectly through recursion in programming language lessons, and in my experience, barely covered any further. Arriving at a well-defined scope for the what/why/how of this series initially perplexed me. It's best we retain that anchor and slowly expand outwards to cover a wider audience. To that end, I will only assume that the reader possesses basic procedural and algorithmic reasoning skills alongside some existing desire and/or curiosity. We will begin on familiar grounds and gradually build to the mathematical formalism as we need it. Some haze is inevitable; repeated applications of these ideas will clear most of it in time.</p>

A typical C++ program that is often used to demonstrate the power of recursion&mdash;the famous Fibonacci sequence program. A sequence is simply an ordered set of values. Then, Fibonacci is a sequence where each element is a sum of the two preceding elements, like $0, 1, 1, 2, 3, 5, 8 \dots$ Such a definition where each element is a combination of the ones preceding it is called a _definition by recurrence relation_. Now let's take a look at the pseudocode:

{{< pseudocode start="1" >}}
**PROCEDURE** $\mathsf{FIB}(n)$
  **INPUT:** $n \in \mathbb{Z}$
  **PRECONDITION:** $n \ge 0$

  **IF** $n \le 1$ **THEN**
    **RETURN** $n$
  **ELSE**
    **RETURN** $\mathsf{FIB}(n-1) + \mathsf{FIB}(n-2)$
  **END IF**
**END PROCEDURE**
{{< /pseudocode >}}
