---
title: "Thoughts on Mathematical Induction: Part I"
date: 2025-12-16
subjects: ["Mathematics", "Logic"]
categories: ["Series"]
series: []
tags: ["mathematics", "logic", "induction", "recursion", "first", "order", "generating", "systems", "closure", "computer", "science", "programming", "language", "c++", "c"]
description: "A series introducing mathematical induction and discussing some of its corollaries."
ai_scale: B
draft: false
---
<p class="lede"> Induction, even setting aside its raison d&apos;&ecirc;tre as an inferential tool for mathematical proofs, is a remarkably elegant concept. Most people first encounter it indirectly through recursion in programming language lessons, and in my personal experience, rarely explore any further. Pinning down the scope for this series initially perplexed me. It's best we start in known territory and gently extend outward. To that end, I will only assume that the reader is capable of basic procedural and algorithmic reasoning and that they're either curious or motivated. We'll approach induction by first understanding recursion, since that's how many encounter it. Some confusion is normal (and inevitable); repeated encounters with these ideas will clear most of it in time.</p>

{{< figure src="anim.gif"
    alt="Sierpiński triangle animation showing recursive subdivision."
    caption="The Sierpi&nacute;ski triangle: a fractal formed by recursively subdividing a triangle." 
>}}

A common example often used to demonstrate the power of recursion is the Fibonacci function. A sequence is simply an _ordered list of values_. Fibonacci is a sequence where each element (after the first two) is a sum of the two preceding elements, like $0, 1, 1, 2, 3, 5, 8 \dots$ This is given by a _recurrence relation_, which means that each element of the sequence depends on the elements preceding it. The Fibonacci function accepts an index $n$ and returns the $n$-th element in the sequence. We write $\operatorname{FIB}(n)$ to mean 'apply $\operatorname{FIB}$ to input $n$'. Consider the following pseudocode:
{{< pseudocode start="1" >}}
**PROCEDURE** $\operatorname{FIB}(n)$
  **INPUT:** $n \in \N_{\geq 0}$ (0-based index)

  **IF** $n \le 1$ **THEN**
    **RETURN** $n$
  **ELSE**
    **RETURN** $\operatorname{FIB}(n-1) + \operatorname{FIB}(n-2)$
  **END IF**
**END PROCEDURE**
{{< /pseudocode >}}
Before understanding the pseudocode, let's clarify some notation.

- The set of natural numbers is denoted by the symbol $\N$. Here, we use $\N_{\geq 0}$ to denote the set of natural numbers including $0$, i.e., $\{0, 1, 2, 3, \dots\}$. The way we define $\N$, whether it includes $0$ or not, is a matter of convention, we pick $\N = \N_{\geq 0}$.
- We use zero-based numbering, which means that in our sequence, the first element's index is $0$, not $1$. For e.g., if our sequence is $1, 2, 3, \dots$, the zeroth element is $1$.
- **RETURN** immediately stops execution and outputs a value.

This procedure is _recursive_. Notice line 7. The procedure $\operatorname{FIB}$ _calls itself_ with inputs smaller than $n$: $(n - 1)$ and $(n - 2)$. We can immediately make some crucial observations:

- Both inputs are smaller than our original input $n$.
- The problem of finding the $n$-th element of the Fibonacci sequence gets decomposed into several identical subproblems, where we must (again) evaluate the Fibonacci for elements smaller than the main input. These intermediate solutions are used to arrive at the final solution.
- The function continually recurses and decreases $n$ with each invocation. Since $n$ must be non-negative, this imposes a hard floor that forces termination, avoiding an infinite regress. Plainly stated, repeated invocations must eventually reach $n = 1$ or $n = 0$ where the **IF** branch returns immediately without any recursive call.

Now, we make a first attempt at informally defining recursion.

_A function $F$ is recursive if evaluating $F(n)$ reduces to evaluating $F$ on smaller inputs._ 

Line 1 introduces the Fibonacci function $\operatorname{FIB}$. When we use a function, we can usually treat it like a black box; we supply an input, and the function returns an output. In that sense, the function's implementation needn't be known in order to call it. But since recursion is precisely about _how_ a function works, let's open the black box and follow the steps one by one. 

Line 2 declares that $\operatorname{FIB}$ accepts one input $n$, which must be a natural number $\N$. Lines 4 to 8 describe a conditional branch. Simply stated, it asks a question. If $n \leq 1$, it returns $n$, else it returns the recursive invocation $\operatorname{FIB}(n - 1) + \operatorname{FIB}(n - 2)$. This can feel opaque at first glance. We'll stay true to the spirit of recursion and break the function down to develop a robust understanding. To this end, let's temporarily consider only the set of inputs that trigger the first branch (the **IF** branch that returns $n$)&mdash;the set of inputs $0 \leq n \leq 1$. Let's step through the procedure for $\operatorname{FIB}(0)$:

1. Since $n = 0$, the input is well-formed as required in line 2. Now we step to line 4. 
2. Since $0 \leq 1$, the **IF** branch gets triggered and we return $0$.

Thus $\operatorname{FIB}(0) = 0$ and by identical reasoning $\operatorname{FIB}(1) = 1$. Our recursive definition works so far. Now let's focus on an input that triggers the **ELSE** branch. Consider $\operatorname{FIB}(3)$. As a quick manual check, $0, 1, 1, 2, 3, \dots$ means that the element at index $3$ is $2$, and thus we must have $\operatorname{FIB}(3) = 2$. Let's evaluate the recursive definition:

1. The procedure proceeds to line 4 as before, but here, since $3 \nleq 1$, the **ELSE** branch $\operatorname{FIB}(n - 1) + \operatorname{FIB}(n - 2)$ gets triggered, which is our recursive invocation. Since $n = 3$, we must evaluate $\operatorname{FIB}(2) + \operatorname{FIB}(1)$ beginning with $\operatorname{FIB}(2)$.
2. $\operatorname{FIB}(2)$ again triggers the **ELSE** branch, and we must evaluate $\operatorname{FIB}(1) + \operatorname{FIB}(0)$. We already know from our **IF** branch examples above that $\operatorname{FIB}(0) = 0$ and $\operatorname{FIB}(1) = 1$. Hence, $\operatorname{FIB}(2) = 0 + 1 = 1$. 
3. Plugging these values into step 1, we have $\operatorname{FIB}(3) = \operatorname{FIB}(2) + \operatorname{FIB}(1) = 1 + 1 = 2$, matching our hand-evaluation! 

Notice that to find $\operatorname{FIB}(3)$, we had to evaluate $\operatorname{FIB}(0)$, $\operatorname{FIB}(1)$, $\operatorname{FIB}(2)$, and use them to evaluate $\operatorname{FIB}(3)$. As we recursed deeper, the same phenomenon applied to all evaluations of $\operatorname{FIB}$ on smaller inputs.

Having gotten a first taste of recursion, let's play around with another function. I'd like you to attempt a recursive definition for another well known function: the factorial, denoted by $n!$. The factorial of a natural number $n$ is defined as the product of all naturals up to $n$. For example, $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$. By the empty product convention, $0! = 1$. Use the Fibonacci pseudocode as a guide, it's not far off. Only view the solution after you've had a couple of attempts.
{{< pseudocode collapsible=true collapsed=true start="1" >}}
**PROCEDURE** $\operatorname{FACT}(n)$
  **INPUT:** $n \in \N$
  
  **IF** $n = 0$ **THEN**
    **RETURN** $1$
  **ELSE**
    **RETURN** ($n \cdot \operatorname{FACT}(n - 1)$)
  **END IF**
**END PROCEDURE**
{{< /pseudocode >}}
This feels a bit like black magic (even now, I must admit). There's a certain quality to the idea of recursion, where any amount of clarity gained almost comes hand in hand with simple questions which are easily arrived at but whose answers are fairly deep, like:

- _Q1: What class of functions permit recursive definitions? Can all functions be recursively defined?_
- _Q2: Which property (or properties) of a certain procedure allows us this flexibility?_
- _Q3: Suppose we know that a certain function is defined recursively. Can we also define it without using recursion, if desired? Is one better or efficient than the other? Why?_
- _Q4: To evaluate $\operatorname{FIB}(3)$, we had to also evaluate for all $0 \leq n \lt 3$. Temporarily suppose we retain/cache every intermediate value computed while evaluating $\operatorname{FIB}(3)$, i.e., we now also have $\operatorname{FIB}(0)$, $\operatorname{FIB}(1)$, $\operatorname{FIB}(2)$, $\operatorname{FIB}(3)$ stored. Then, $\operatorname{FIB}(4)$ only needs $\operatorname{FIB}(3)$ and $\operatorname{FIB}(2)$ which are already stored. But then similarly, we can also access $\operatorname{FIB}(5)$. Does this mean that we can access $\operatorname{FIB}$ up to any finite index without any recomputation?_
- _Q5: Does the input's type matter? We used $\N$, but what about the reals $\R$ or the integers $\Z$?_
- _Q6: This series deals with mathematical induction after all and we've just explored recursion so far. For those already familiar with induction, how are these two concepts related, if at all?_
- _Q7: This one is a fun optional. Consider addition over $\N_{\geq 0}$. We have a function $\operatorname{ADD}(x, \ y)$ where $x, \ y \in \N_{\geq 0}$. Consider the successor function $\operatorname{SUC}$ where $\operatorname{SUC}(n) = n + 1$. Can $\operatorname{ADD}$ be defined recursively using only $0$, $\operatorname{SUC}$, and recursion on one argument? Hint 1: Fix one input: what should $\operatorname{ADD}(x, \ 0)$ be? Hint 2: How might $\operatorname{ADD}(x, \ \operatorname{SUC}(y))$ be related to $\operatorname{ADD}(x, \ y)$? Test with simple inputs._

Finding exact answers aside, even precisely _framing_ some of these questions appropriately requires some non-trivial machinery. I remember asking them years ago and could only gain some clarity in the recent past. We covered considerable ground in this first article, and it's best to spend some time understanding these concepts. The key takeaway from Part I is that a _recursive definition_ solves a problem by invoking itself on smaller inputs.

Please leave a comment if you have any questions. Feel free to think about these questions in the meantime. See you around for Part II where we will formalize some of these ideas so we can safely build on them.

### References 

- _[Sierpinski Triangle Animation.gif by Kalternate](https://commons.wikimedia.org/wiki/File%3ASierpinski_Triangle_Animation.gif), [licensed CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en), via Wikimedia Commons._