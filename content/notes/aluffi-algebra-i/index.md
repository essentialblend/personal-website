---
title: "Algebra: Notes from the Underground"
description: "My notes on Aluffi's book on abstract algebra."
date: 2025-02-17
status: ongoing
subjects: ["Mathematics"] 
categories: ["Academic Textbook"]
tags: ["Algebra", "Abstract Algebra", "Aluffi", "Rings", "Groups", "Fields", "Abstract"]
bookAuthor: "Paolo Aluffi"
---

## Part I: Rings

### The Integers

#### The Well Ordering Principle and Induction

░░░░ general ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ algebraic structures; we will try to ░░░░ their ░░░░ by ░░░░ ░░░░ which ░░░░ ░░░░ ░░░░ ░░░░ properties. ░░░░ ░░░░ ░░░░ the ░░░░ of ░░░░ $\mathbb{Z}$░░░░ ░░░░ ░░░░ with the ░░░░ ░░░░ of addition $(+)$ ░░░░ multiplication $(\cdot)$. We ░░░░ spend ░░░░ ░░░░ trying ░░░░ ░░░░ how $\mathbb{Z}$ is ░░░░ ░░░░ ░░░░ ░░░░ to these two operations, ░░░░ ░░░░ ░░░░ ░░░░ several ░░░░ ░░░░ ░░░░ will ░░░░ take a ░░░░ ░░░░ those ░░░░ ░░░░ ░░░░ **ring axioms**, and eventually aim at studying all structures that are defined by requiring a set $A$ along with two operations (which will be called $+$ and $\cdot$ even if they may have nothing to do with the conventional $+$ and $\cdot$) to satisfy the ring axioms. These structures will be called **rings**: from this perspective, $\mathbb{Z}$ is a particular example of a ring. Other examples being $\mathbb{Q}$ (_rational_ numbers), $\mathbb{R}$ (_real_ numbers), $\mathbb{C}$ (_complex_ numbers); but many more exist, and most of them have **nothing to do with numbers**░░░░ 

We will ░░░░ **_all_ of them** at once in the sense that we will determine several features that every such structure (as opposed to specific examples like $\mathbb{Z}$ or $\mathbb{Q}$) must have. We will (implicitly) define a **category of rings** by specifying certain types of functions (which we will call **_homomorphisms_**░░░░ between rings.

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ familiar, but ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ first—the goal ░░░░ be ░░░░ ░░░░ out ░░░░ ░░░░ facts that are ░░░░ for **_the way $\mathbb{Z}$ works_.** These facts will be useful in studying other examples, particularly coming from **_modular arithmetic_**, and ░░░░ ░░░░ ░░░░ these examples ░░░░ ░░░░ us ░░░░ ░░░░ the ░░░░ that we ░░░░ use in ░░░░ ░░░░ ░░░░ what ░░░░ ░░░░ ░░░░

░░░░ will assume familiarity with the ░░░░ ░░░░ properties ░░░░ ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ with ░░░░ ░░░░ ░░░░ **_ordering_** ░░░░ $\mathbb{Z}$░░░░ if $a$ and $b$ are integers, ░░░░ ░░░░ $a \leq b$ to mean that $a$ is ░░░░ ░░░░ or equal ░░░░ $b$, ░░░░ the ░░░░ sense. ░░░░ ░░░░ satisfies ░░░░ following axioms ░░░░ respect ░░░░ the ░░░░ for example, ░░░░ $a \leq b$ ░░░░ $c \geq 0$░░░░ ░░░░ $a+c \leq b+c$░░░░

░░░░ will ░░░░ ░░░░ noticing ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ rather ░░░░ ░░░░ $\Z$. For ░░░░ ░░░░ ░░░░ divide $18$ ░░░░ $3$░░░░ ░░░░ a quotient ░░░░ $6$, which ░░░░ an element ░░░░ $\mathbb{Z}$░░░░ ░░░░ can also divide $1$ ░░░░ $2$░░░░ but ░░░░ quotient ░░░░ not an element ░░░░ $\mathbb{Z}$░░░░ ░░░░ is ░░░░ integer $c$ ░░░░ that $1 = 2c$. We ░░░░ ░░░░ terminology ░░░░ be able ░░░░ ░░░░ ░░░░ ░░░░ distinction.

_**Definition $1.1$:**  Let $a, b \in \mathbb{Z}$. We say that ‘$b$ divides $a$’, or ‘$b$ is a divisor of $a$’, or ‘$a$ is a multiple of $b$’, and write $b \mid a$, if there is an integer $c$ such that $a = bc$._

░░░░ $3$ ‘divides’ $18$ ░░░░ $18 = 3 \cdot 6$ ░░░░ $6$ ░░░░ ░░░░ ░░░░ while $2$ ░░░░ not divide $1$░░░░ ░░░░ $1 = 2 \cdot (1/2)$ but $1/2$ ░░░░ ░░░░ ░░░░ ░░░░ The divisors ░░░░ $12$ are $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6$, and $\pm 12$. ░░░░ ░░░░ ░░░░ $0$░░░░ since $0 = b \cdot c$ for ░░░░ ░░░░ $c$░░░░ ░░░░ it ░░░░ $c = 0$ works. ░░░░ the other hand, ░░░░ ░░░░ integer that $0$ divides is $0$ itself.  

░░░░ this ░░░░ we ░░░░ already ░░░░ ░░░░ ░░░░ ░░░░ ░░░░  

_**Lemma $1.2$:** If $b \mid a$ and $a \neq 0$, then $|b| \leq |a|$._

_Proof:_  
░░░░ by definition of divisibility we ░░░░ $a = bc$ ░░░░ ░░░░ ░░░░ $c$░░░░ in particular, both $b$ ░░░░ $c$ ░░░░ ░░░░ ░░░░ $a \neq 0$. ░░░░ $c \in \mathbb{Z}$ ░░░░ $c \neq 0$░░░░ ░░░░ ░░░░ $|c| \geq 1$░░░░  

And then,
$$|a| = |b| \cdot |c| \geq |b| \cdot 1 = |b|$$
as claimed.  

‘Divisibility’ ░░░░ ░░░░ order relation on ░░░░ ░░░░ of nonnegative integers. What ░░░░ $1.2$ ░░░░ ░░░░ ░░░░ ░░░░ some ░░░░ ░░░░ ‘new’ order relation is compatible ░░░░ the ordinary one $\leq$.  

░░░░ if $b$ ░░░░ not divide $a$? ░░░░ can ░░░░ divide $b$ ░░░░ $a$ ░░░░ least if $b \neq 0$░░░░ ░░░░ we have to pay ░░░░ price: we get a remainder ░░░░ ░░░░ ░░░░ so. Even ░░░░ this ░░░░ is ░░░░ to you, we will ░░░░ into why it works the ░░░░ ░░░░ does, since it ░░░░ something special ░░░░ $\mathbb{Z}$—we ░░░░ ░░░░ need ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ for ░░░░ So ░░░░ must ░░░░ some special ░░░░ of $\mathbb{Z}$ which is ░░░░ for this fact.  

░░░░ ░░░░ ░░░░ ░░░░ fact a ░░░░ of the ordering $\leq$ ░░░░ ░░░░ a moment ago. ░░░░ will be responsible for ░░░░ ░░░░ ░░░░ of $\mathbb{Z}$░░░░ ░░░░ fact, besides the ░░░░ high-school properties ░░░░ addition ░░░░ multiplication, ░░░░ ░░░░ ░░░░ ░░░░ one property of $\mathbb{Z}$ ░░░░ ░░░░ ░░░░ work ░░░░ way it does. So we focus ░░░░ it for a moment, ░░░░ returning ░░░░ the ░░░░ ░░░░ ░░░░  

░░░░ recalled ░░░░ $\mathbb{Z}$ ░░░░ endowed with an ░░░░ ░░░░ $\leq$. ░░░░ fact, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ By this ░░░░ we mean ░░░░ ░░░░ any ░░░░ ░░░░ $a$ ░░░░ $b$░░░░ ░░░░ ░░░░ ░░░░ things must be ░░░░ $a < b$░░░░ or $a = b$, ░░░░ $a > b$░░░░ The ░░░░ ░░░░ ░░░░ said ░░░░ other ░░░░ ░░░░ ░░░░ such ░░░░ the set ░░░░ rational ░░░░ $\mathbb{Q}$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\mathbb{R}$░░░░ but there is something ░░░░ ░░░░ ░░░░ relation on $\mathbb{Z}$ ░░░░ ░░░░ it very ░░░░ Terminology: $\mathbb{Z}^{\geq 0}$ stands ░░░░ ░░░░ set ░░░░ ░░░░ ░░░░

$$
\mathbb{Z}^{\geq 0} = \{ a \in \mathbb{Z} \mid a \geq 0 \} = \{0, 1, 2, 3, \ldots\}.
$$
░░░░ $\mathbb{Z}_{\geq0}$ stands for the set of positive integers, $\mathbb{Q}_{\leq0}$ is the ░░░░ of ░░░░ rational numbers, ░░░░ so ░░░░ Another ░░░░ for $\mathbb{Z}_{\geq0}$ is $\mathbb{N}$, the set of _░░░░ ░░░░_. The fact we need has everything to do with $\mathbb{Z}_{\geq0}$:

_**Fact (Well-ordering principle):** Every nonempty set of nonnegative integers contains a least element._

░░░░ ░░░░ ░░░░ this ░░░░ by saying that $\mathbb{Z}_{\geq0}$ is ‘well-ordered’ by the ░░░░ $\leq$. A ‘well-ordering’ on ░░░░ set $S$ is simply ░░░░ order relation ░░░░ ░░░░ every nonempty ░░░░ of $S$ ░░░░ a minimum.

░░░░ well-ordering ░░░░ ░░░░ sound reasonable ░░░░ ░░░░ outright obvious: ░░░░ we have ░░░░ bags ░░░░ ░░░░ there ░░░░ be one (or more) bags ░░░░ the least number of potatoes. But ░░░░ ░░░░ ░░░░ obvious or not is ░░░░ matter of ░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ **define** $\mathbb{Z}$ ░░░░ the ░░░░ ░░░░ ░░░░ nonnegative ░░░░ ░░░░ ░░░░ one ░░░░ ░░░░ ░░░░ we would ░░░░ adopt; ░░░░ ░░░░ (to ░░░░ knowledge) no ░░░░ way to derive it ░░░░ ░░░░ basic properties ░░░░ the ░░░░ ░░░░ ░░░░

Also ░░░░ ░░░░ $\leq$ ░░░░ not ░░░░ well-ordering on ░░░░ ░░░░ $\mathbb{Q}_{\geq0}$ of nonnegative rationals, or on the set $\mathbb{R}_{\geq0}$ ░░░░ nonnegative reals. For example, the ░░░░ ░░░░ positive rationals is a nonempty subset ░░░░ $\mathbb{Q}_{\geq0}$, but it does not have a ‘least’ element. (If $q>0$ were such an element, then $q/2$ would be even smaller and still rational and positive, giving a contradiction.) So the well-ordering principle is really a rather special feature of $\mathbb{Z}_{\geq0}$░░░░ We ░░░░ derive several key ░░░░ ░░░░ $\mathbb{Z}$ ░░░░ it, granting (as we already did above) ░░░░ facts ░░░░ ░░░░ the ░░░░ $\leq$ ░░░░ with respect to the operations $+, -,$ and $\cdot$░░░░

░░░░ before ░░░░ see ░░░░ well-ordering ░░░░ ░░░░ ░░░░ in ‘algebra’ ░░░░ it is ░░░░ ░░░░ ░░░░ that ░░░░ ░░░░ plays a role ░░░░ a ░░░░ ░░░░ tool with ░░░░ we are already familiar: ░░░░ process ░░░░ ░░░░ depends on ░░░░ Every proof ░░░░ induction ░░░░ be ░░░░ into an ░░░░ ░░░░ to the ░░░░ principle. Why?

This is ░░░░ induction ░░░░ We want ░░░░ prove ░░░░ certain property $P(n)$ for all integers $n \geq 0$. ░░░░ we ░░░░ to ░░░░ ░░░░

░░░░ $P(0)$ holds: ░░░░ ░░░░ is ░░░░ for $n = 0$░░░░ ░░░░  
░░░░ the ░░░░ $P(n) \implies P(n + 1)$ holds ░░░░ ░░░░ $n \geq 0$.

Then induction ░░░░ ░░░░ that indeed, ░░░░ ░░░░ $P(n)$ ░░░░ for ░░░░ $n \geq 0$; ░░░░ ‘seed’ $P(0)$ ░░░░ because we have proved it by ░░░░ ░░░░ ░░░░ and ░░░░ $P(1)$ holds since $P(0)$ ░░░░ and we have ░░░░ in ░░░░ that $P(0) \implies P(1)$░░░░ ░░░░ then $P(2)$ holds ░░░░ $P(1)$ holds and we have proved ░░░░ $P(1) \implies P(2)$░░░░ ░░░░ ░░░░ $P(3)$ ░░░░ since $P(2)$ holds ░░░░ we have proved that $P(2) \implies P(3)$; ░░░░ ░░░░ ░░░░ ░░░░

░░░░ ░░░░ ░░░░ ░░░░ argument ░░░░ that ░░░░ on ░░░░ ░░░░ not mathematics. There ░░░░ an ░░░░ ░░░░ which is ░░░░ once ░░░░ ░░░░ the ░░░░ ░░░░ the well-ordering principle.

_**Induction from the well-ordering principle:** Assume we have established (i) and (ii). We have to prove that $P(n)$ holds for all $n \geq 0$._

_Proof:_
Let $F \subseteq \mathbb{Z}_{\geq 0}$ be ░░░░ ░░░░ ░░░░ nonnegative ░░░░ $n$ ░░░░ ░░░░ $P(n)$ does ░░░░ ░░░░ then ░░░░ have to prove ░░░░ $F = \emptyset$░░░░ We will prove that ░░░░ is necessarily the case by ░░░░ ░░░░ $F \neq \emptyset$ ░░░░ to ░░░░ contradiction.  

Assume ░░░░ that our ░░░░ $F$ is ░░░░ ░░░░ ░░░░ of ░░░░ integers. ░░░░ ░░░░ well-ordering ░░░░ $F$ ░░░░ a ░░░░ ░░░░ $\ell \in \mathbb{Z}_{\geq 0}$░░░░ that ░░░░ $P(\ell)$ does ░░░░ hold, and $\ell$ is ░░░░ least nonnegative integer with ░░░░ ░░░░  

░░░░ (i) we know ░░░░ $P(0)$ ░░░░ ░░░░ ░░░░ $\ell > 0$. ░░░░ $n = \ell - 1$ ░░░░ ░░░░ nonnegative integer, and $n < \ell$, ░░░░ $P(n)$ ░░░░ ░░░░ $\ell$ is ░░░░ least nonnegative integer for ░░░░ ░░░░ property ░░░░ ░░░░ ░░░░ By (ii), $P(n) \implies P(n + 1)$; ░░░░ $P(n + 1)$ ░░░░ But $n + 1 = \ell$, so ░░░░ shows that $P(\ell)$ does hold.  

We ░░░░ reached a contradiction: $P(\ell)$ would both hold ░░░░ ░░░░ ░░░░ Therefore, ░░░░ ░░░░ ░░░░ $F \neq \emptyset$ leads ░░░░ a contradiction, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $F = \emptyset$░░░░ ░░░░ ░░░░ needed. $\blacksquare$

░░░░ proofs in what ░░░░ could be ░░░░ ░░░░ ░░░░ or ░░░░ by an appeal to ░░░░ well-ordering ░░░░ Which ░░░░ use ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ We ░░░░ ░░░░ ░░░░ to the well-ordering ░░░░ to stress that ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ specific ░░░░ of $\mathbb{Z}$. ░░░░ ░░░░ ░░░░ ░░░░ leaner, ░░░░ ░░░░

#### Division with Remainder in $\Z$

_**Theorem $1.3$:** Let $a, b$ be integers, with $b \neq 0$. Then there exist a unique ‘quotient’ $q \in \mathbb{Z}$ and a unique ‘remainder’ $r \in \mathbb{Z}$ such that:_
$$a = bq + r \quad \text{with} \quad 0 \leq r < |b|.$$
_Proof:_

We ░░░░ assume that $b > 0$. ░░░░ if $b < 0$, ░░░░ can apply the statement to $-b > 0$ and ░░░░ flip ░░░░ sign ░░░░ $q$ after ░░░░ ░░░░ ░░░░ the sign ░░░░ $b$ does ░░░░ change $|b|$░░░░ so ░░░░ condition ░░░░ $r$ is unchanged.

Assume then ░░░░ $b > 0$, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ combinations ░░░░ $a$ ░░░░ $b$ ░░░░ the ░░░░ $a - bx$ with $x \in \mathbb{Z}$░░░░ ░░░░ that $a - bx \geq 0$. ░░░░ that ░░░░ are ░░░░ integers of ░░░░ type: ░░░░ $a$ is itself nonnegative, ░░░░ $a - b \cdot 0 = a$ is ░░░░ ░░░░ ░░░░ $a$ ░░░░ ░░░░ then $a - ba = a(1 - b)$ is ░░░░ ░░░░ $1 - b \leq 0$░░░░ Therefore, the set,

$$S = \{a - bx \mid x \in \mathbb{Z}, a - bx \geq 0\}$$  

is ░░░░ nonempty set ░░░░ nonnegative ░░░░ ░░░░ the well-ordering ░░░░ ░░░░ contains a ░░░░ element $r$: that ░░░░ ░░░░ is ░░░░ $x = q$ such that $r = a - bq$ is ░░░░ than any other ░░░░ number ░░░░ ░░░░ form $a - bx$. ░░░░ claim that these $q$ ░░░░ $r$ ░░░░ the unique ░░░░ ░░░░ existence ░░░░ claimed ░░░░ ░░░░ ░░░░ 

Indeed: by construction we ░░░░ ░░░░ $a = bq + r$ and that $r \geq 0$░░░░ ░░░░ now ░░░░ to ░░░░ ░░░░

- ░░░░ expression $r < b$ holds ░░░░ ░░░░ $|b| = b$ since we are assuming $b > 0$░░░░
- The numbers $q$ ░░░░ $r$ are ░░░░ ░░░░ these ░░░░

░░░░ $(1)$, ░░░░ by contradiction. ░░░░ ░░░░ ░░░░ $r \geq b$░░░░ ░░░░ we would ░░░░ $r - b \geq 0$░░░░ and 

$$
0 \leq r - b = (a - bq) - b = a - b(q + 1).
$$
░░░░ ░░░░ show ░░░░ $r - b$ is ░░░░ element of $S$░░░░ since it ░░░░ ░░░░ ░░░░ integer linear ░░░░ of $a$ ░░░░ $b$. ░░░░ ░░░░ is ░░░░ contradiction, ░░░░ $r - b < r$ ░░░░ $r$ was chosen to ░░░░ the ░░░░ ░░░░ of $S$. Since $r \geq b$ leads to a contradiction, we ░░░░ conclude that $r < b$ as we claimed.

░░░░ $(2)$, assume ░░░░ $q', r'$ are ░░░░ ░░░░ satisfying the ░░░░ spelled ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is, $a = bq' + r'$░░░░ ░░░░ $0 \leq r' < b$. We ░░░░ ░░░░ ░░░░ necessarily $q = q'$ ░░░░ $r = r'$ ░░░░ ░░░░ what ░░░░ mean ░░░░ stating that $q$ and $r$ ░░░░ "unique").

Since $a = bq + r = bq' + r'$, ░░░░ ░░░░

$$
b(q - q') = r' - r
$$
Now, since ░░░░ $r$ and $r'$ ░░░░ in ░░░░ interval $[0, b - 1]$░░░░ their ░░░░ cannot exceed $b - 1$. In other ░░░░ $|r' - r| \leq b - 1$, ░░░░ ░░░░ ░░░░ $|r' - r| < |b|$. ░░░░ $(1.1)$ shows that $b$ is ░░░░ divisor ░░░░ $r' - r$; ░░░░ $r' - r \neq 0$, ░░░░ ░░░░ Lemma $1.2$ ░░░░ would ░░░░ have $|b| \leq |r' - r|$░░░░ ░░░░ ░░░░ fact ░░░░ $|b| > |r' - r|$ ░░░░ observed ░░░░ moment ago. ░░░░ only ░░░░ ░░░░ ░░░░ ░░░░ $r' - r = 0$. ░░░░ ░░░░ ░░░░ $r' = r$, ░░░░ ░░░░ $b(q - q') = 0$. Since $b \neq 0$░░░░ this ░░░░ that $q - q' = 0$, ░░░░ ░░░░ ░░░░ that $q' = q$. $\blacksquare$

#### Greatest Common Divisors (GCD)

_**Definition $1.5$:** Let $a, b \in \mathbb{Z}$. We say that a nonnegative integer $d$ is the ‘greatest common divisor’ of $a$ and $b$, denoted $\text{gcd}(a, b)$ or simply $(a, b)$ if,_  

░░░░ _$d \mid a$ and $d \mid b$;_

- _if $c \mid a$ and $c \mid b$, then $c \mid d$._

If at least one of $a$ and $b$ is ░░░░ $0$, then $d = \text{gcd}(a, b) \neq 0$░░░░ Indeed, $d$ ░░░░ ░░░░ both $a$ and $b$ according to ░░░░ first requirement ░░░░ the ░░░░ ░░░░ ░░░░ $d$ a ░░░░ ░░░░ ░░░░ $d$ ░░░░ be $0$ ░░░░ both $a$ and $b$ are $0$—keep in ░░░░ that $0$ ░░░░ divides $0$. The second requirement in ░░░░ ░░░░ ░░░░ that if $c$ is also ░░░░ common divisor, then ░░░░ must ░░░░ $d$░░░░ ░░░░ Lemma $1.2$░░░░ ░░░░ implies that $|c| \leq |d|$ ░░░░ $d \neq 0$░░░░ and ░░░░ $c \leq d$ since $d$ ░░░░ ░░░░ Therefore $d$ ░░░░ the ‘greatest’ (as in ‘largest’) ░░░░ ░░░░ ░░░░ $a$ ░░░░ $b$ if $a$ ░░░░ $b$ ░░░░ ░░░░ both $0$.  

It is ░░░░ ░░░░ ░░░░ ░░░░ exists: ░░░░ you ░░░░ ░░░░ ░░░░ $a$ ░░░░ $b$, ░░░░ both ░░░░ to $0$, ░░░░ you ░░░░ simply list the ░░░░ ░░░░ $a$, list the divisors of $b$░░░░ and ░░░░ $\text{gcd}(a, b)$ ░░░░ simply ░░░░ ░░░░ integer ░░░░ ░░░░ ░░░░ of ░░░░ two sets.  

**Example $1.6$** ░░░░ ░░░░ ░░░░ $\text{gcd}(30, -42) = 6$░░░░ we can list all ░░░░ of $30$░░░░
$$-30, -15, -10, -6, -5, -3, -2, -1, 1, 2, 3, 5, 6, 10, 15, 30$$ ░░░░ ░░░░ divisors ░░░░ $-42$░░░░  $$-42, -21, -14, -7, -6, -3, -2, -1, 1, 2, 3, 6, 7, 14, 21, 42$$ ░░░░ ░░░░ note that $6$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ lists.  

Beware, however, ░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ gcd ░░░░ extremely ░░░░ ░░░░ the divisors ░░░░ ░░░░ integer is a ░░░░ ░░░░ and ░░░░ the ░░░░ ░░░░ largish (say, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ its factorization ░░░░ ░░░░ current algorithms longer ░░░░ the age ░░░░ ░░░░ ░░░░ ░░░░ be ░░░░ out on the ░░░░ imaginable ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ a very efficient ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $1.14$).  

_**Remark $1.7$:**_ One may ░░░░ why we ░░░░ not replaced ░░░░ ░░░░ requirement ░░░░ something ░░░░ ░░░░ $c \mid a$ ░░░░ $c \mid b$░░░░ then $c \leq d$, which ░░░░ seem ░░░░ justify the ░░░░ ‘greatest common divisor’ in a more ░░░░ way. (This ░░░░ be the ░░░░ one ░░░░ have ░░░░ ░░░░ ░░░░ ░░░░ notion.) The ░░░░ reason ░░░░ ░░░░ when we recast this ░░░░ ░░░░ ░░░░ general ‘rings’, ░░░░ relation of ░░░░ will be ░░░░ while the (perhaps) simpler relation $\leq$ ░░░░ not. Also, ░░░░ $1.5$ ░░░░ good sense ░░░░ ░░░░ possible ░░░░ $a, b$, including ░░░░ ░░░░ $a = b = 0$░░░░ in ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $0$░░░░ ░░░░ second requirement says that ░░░░ integer ░░░░ $\text{gcd}(0, 0)$. ░░░░ $0$ ░░░░ the ░░░░ ░░░░ ░░░░ by ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\text{gcd}(0, 0) = 0$ ░░░░ ░░░░ ░░░░ $1.5$. Even in this case, $\text{gcd}(a, b)$ ░░░░ ░░░░ ░░░░ with respect ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $1.2$ ░░░░ than the ordinary ░░░░ relation $\leq$░░░░

_**Theorem $1.8$:** Let $a, b$ be integers. Then the greatest common divisor $d = \text{gcd}(a, b)$ is an integer linear combination of $a$ and $b$. That is, there exist integers $m$ and $n$ such that,_  $$d = ma + nb$$░░░░ ░░░░ ░░░░ $a$ ░░░░ $b$ are ░░░░ both $0$░░░░ ░░░░ $\text{gcd}(a, b)$ is the ░░░░ positive linear combination ░░░░ $a$ ░░░░ $b$░░░░

░░░░ example, $\text{gcd}(30, -42) = 6$. The ░░░░ ░░░░ tells ░░░░ ░░░░ ░░░░ ░░░░ be integers $m$ ░░░░ $n$ such that $30m - 42n = 6$. ░░░░ ░░░░ seem ░░░░ A couple of ░░░░ ░░░░ ░░░░ $m = 3$░░░░ $n = 2$░░░░ ░░░░ ░░░░$$3 \cdot 30 - 2 \cdot (-42) = 90 - 84 = 6.$$Notice that ░░░░ ░░░░ clear that ░░░░ ░░░░ $m$ and $n$ are ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ if,  $$d = ma + nb,$$ ░░░░ ░░░░  $$d = (m - b)a + (n + a)b,$$
$$d = (m + ba) + (n - ab),$$  and ░░░░ on. For ░░░░  
$$(3 + 42) \cdot 30 - (2 + 30) \cdot 42 = 45 \cdot 30 - 32 \cdot 42 = 1350 - 1344 = 6.$$  Therefore $m = 45, n = 32$ also ░░░░ ░░░░ our ░░░░ ░░░░ ░░░░ type of ░░░░ is ░░░░ practice, ░░░░ ░░░░ ░░░░ kind ░░░░ ░░░░ that ░░░░ arithmetic ░░░░ ░░░░ prove ░░░░ ░░░░ ░░░░ general. ░░░░ ░░░░ ingredient is the well-ordering principle, ░░░░ ░░░░ beginning of ░░░░ ░░░░ ░░░░ ░░░░ you ░░░░ ░░░░ ░░░░ of the proof of Theorem $1.3$░░░░

_Proof:_ 

░░░░ $a = b = 0$, ░░░░ $\text{gcd}(a, b) = \text{gcd}(0, 0) = 0$░░░░ which is a ░░░░ combination ░░░░ $a$ and $b$ ░░░░ $0 = 1 \cdot 0 + 1 \cdot 0$░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ $a$ and $b$ are ░░░░ ░░░░ $0$░░░░ Consider all linear ░░░░ $ma + nb$ of $a$ and $b$. I ░░░░ that some of ░░░░ are positive. Indeed, ░░░░ $m = a, n = b$; ░░░░  $$ma + nb = a^2 + b^2,$$
░░░░ ░░░░ number is positive since $a$ ░░░░ $b$ are ░░░░ both $0$. Therefore, the set,$$S = \{ma + nb \mid m \in \mathbb{Z}, n \in \mathbb{Z}, \text{ and } ma + nb > 0\}$$░░░░ ░░░░ This ░░░░ the ░░░░ setting ░░░░ apply the ░░░░ ░░░░ ░░░░ $S$ is a ░░░░ ░░░░ ░░░░ nonnegative ░░░░ it ░░░░ have ░░░░ least element. ░░░░ $d$ be ░░░░ least ░░░░ and ░░░░ $m$ and $n$ ░░░░ ░░░░ ░░░░ that $d = ma + nb$░░░░ ░░░░ is, $d$ ░░░░ ░░░░ smallest positive linear ░░░░ ░░░░ $a$ ░░░░ $b$. We ░░░░ going ░░░░ ░░░░ ░░░░ $d$ is the $\text{gcd}$ of $a$ and $b$, and ░░░░ will prove the theorem.

Since $d \in S$░░░░ ░░░░ $d > 0$: ░░░░ $d$ ░░░░ nonnegative ░░░░ not ░░░░ to $0$░░░░ In order to ░░░░ that $d$ ░░░░ ░░░░ $\text{gcd}$ of $a$ and $b$, ░░░░ ░░░░ ░░░░ ░░░░ that

░░░░ $d \mid a$ ░░░░ $d \mid b$░░░░ and  

░░░░ ░░░░ $c \mid a$ and $c \mid b$░░░░ then $c \mid d$░░░░

If $a = 0$, $d \mid a$ ░░░░ automatic. ░░░░ $a \neq 0$, ░░░░ ░░░░ use division ░░░░ remainder: ░░░░ Theorem $1.3$░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ integers $q$ ░░░░ $r$ ░░░░ ░░░░  $$a = dq + r,$$  with $0 \leq r < d$. ░░░░ that,  $$r = a - dq = a - (ma + nb)q = a(1 - m) + b(-nq).$$  This ░░░░ ░░░░ $r$ ░░░░ ░░░░ linear ░░░░ of $a$ ░░░░ $b$░░░░ Can ░░░░ ░░░░ an element ░░░░ $S$? ░░░░ Because $r < d$, and $d$ ░░░░ ░░░░ chosen ░░░░ be ░░░░ ░░░░ ░░░░ of $S$. ░░░░ ░░░░ $r$ ░░░░ ░░░░ ░░░░ since $r$ ░░░░ ░░░░ ░░░░ combination of $a$ and $b$, ░░░░ $S$ contains ░░░░ **positive** linear ░░░░ ░░░░ $a$ and $b$. Since $r \geq 0$ ░░░░ $r$ is ░░░░ ░░░░ ░░░░ follows that $r = 0$░░░░ This ░░░░ ░░░░ $a = dq$░░░░ showing that $d \mid a$.

By essentially ░░░░ same ░░░░ ░░░░ can ░░░░ ░░░░ $d \mid b$. ░░░░ ░░░░ ░░░░ $a$ and $b$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

We ░░░░ ░░░░ ░░░░ prove (ii). ░░░░ we ░░░░ ░░░░ common divisor $c$ of $a$ and $b$: $c \mid a$ ░░░░ $c \mid b$. ░░░░ ░░░░ have $a = uc, b = vc$ for ░░░░ integers $u$ and $v$. ░░░░ ░░░░  $$d = ma + nb = m(uc) + n(vc) = (mu + nv)c$$  ░░░░ proves ░░░░ $c \mid d$, ░░░░ we needed. $\blacksquare$

Theorem $1.8$ has nice, ░░░░ ░░░░ ░░░░ applications. Here is ░░░░

_**Corollary $1.9$:** Let $a, b$ be integers. Then $\text{gcd}(a, b) = 1$ if and only if $1$ may be expressed as a linear combination of $a$ and $b$._

_Proof:_ 

░░░░ $\text{gcd}(a, b) = 1$, then ░░░░ ░░░░ $1$ ░░░░ ░░░░ ░░░░ as a linear combination of $a$ ░░░░ $b$ by Theorem $1.8$░░░░ ░░░░ ░░░░ other ░░░░ if $1$ may ░░░░ expressed ░░░░ a ░░░░ combination ░░░░ $a$ ░░░░ $b$, ░░░░ $1$ is necessarily ░░░░ **smallest positive** linear combination ░░░░ $a$ and $b$░░░░ because $1$ is ░░░░ ░░░░ ░░░░ integer. ░░░░ follows that $\text{gcd}(a, b) = 1$, ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ $1.8$. $\blacksquare$

_**Definition $1.10$:**  We say that $a$ and $b$ are **relatively prime** if $\text{gcd}(a, b) = 1$._

For example, $3$ ░░░░ $7$ ░░░░ ░░░░ prime. ░░░░ ░░░░ that **every** ░░░░ is ░░░░ linear ░░░░ of $3$ and $7$░░░░ indeed, $1$ ░░░░ ░░░░ ░░░░ combination, and a multiple ░░░░ a linear ░░░░ ░░░░ a linear combination. For example, ░░░░ ░░░░ ░░░░ a random integer, ░░░░  $$173233884731,$$  ░░░░ ░░░░ small ░░░░ yields,  $$173233884731 = 866191923655 \cdot 3 + (-346476769462) \cdot 7$$
_**Corollary $1.11$:** Let $a$, $b$, $c$ be integers. If $a \mid bc$ and $\gcd{(a, b)} = 1$, then $a \mid c$._ 

_Proof:_ 

By ░░░░ $1.8$░░░░  $$1 = ma + nb$$  
for some ░░░░ $m$ and $n$. Multiply ░░░░ $c$, $$c = 1 \cdot c = (ma + nb)c = mac + nbc = (mc)a + n(bc).$$  Now the ░░░░ tells ░░░░ ░░░░ $a \mid bc$░░░░ so $bc = ra$ for some ░░░░ $r$. ░░░░  $$c = (mc)a + n(ra) = (mc + nr)a,$$  and this shows ░░░░ $a \mid c$ ░░░░ needed. $\blacksquare$

_**Remark $1.12$:** The hypothesis that $\gcd(a,b)=1$ is necessary. For example, we have that $10 \mid (6\cdot5)$, and yet $10$ divides neither $6$ nor $5$. This is not contradicting the statement, since $\gcd(10,6)=2\neq1$._

░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ question ░░░░ how we could ░░░░ the gcd ░░░░ ░░░░ ░░░░ ░░░░ efficiently than ░░░░ ░░░░ the ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ beginning of ░░░░ section). ░░░░ two integers $a$ and $b$░░░░ we may ░░░░ ░░░░ $b\neq0$ (if $b=0$░░░░ ░░░░ $\gcd(a,b)=a$░░░░ ░░░░ ░░░░ is nothing ░░░░ “compute”). ░░░░ can ░░░░ apply ░░░░ with remainder ░░░░ like ░░░░

$$
\begin{align*}
a &= bq_0 + r_0 \quad 0 \leq r_0 \lt b \\ \\[0.1pt]
b &= r_0q_1 + r_1 \quad 0\leq r_1 \lt r_0 \\ \\[0.1pt]
r_0 &= r_1 q_2 + r_2 \quad 0 \leq r_2 \lt r_1
\end{align*}
$$
We can keep going ░░░░ ░░░░ ░░░░ ░░░░ remainder ░░░░ ░░░░ ░░░░ division ░░░░ ░░░░ $0$░░░░ Since at ░░░░ ░░░░ ░░░░ remainder ░░░░ and remains ░░░░ at some ░░░░ it must ░░░░ $0$░░░░

$$
\begin{align*}
r_{n - 2} &= r_{n - 1} q_n + r_n \quad 0 \leq r_n \lt r_{n - 1} \\ \\[0.1pt]
r_{n - 1} &= r_nq_{n + 1} + 0
\end{align*}
$$
**Example $1.13$:** Let’s ░░░░ ░░░░ procedure ░░░░ $a = 30$, $b = -42$ (cf. Example $1.6$):

$$
\begin{align*}
30 &= -42 \cdot 0 + 30 \\ \\[0.1pt]
-42 &= 30 \cdot (-2) + 18 \\ \\[0.1pt]
30 &= 18 \cdot 1 + 12 \\ \\[0.1pt]
18 &= 12 \cdot 1 + 6 \\ \\[0.1pt]
12 &= 6 \cdot 2 + 0
\end{align*}
$$
The last ░░░░ ░░░░ ░░░░ $6$, ░░░░ ░░░░ had observed ░░░░ $\gcd(30, -42) = 6$. ░░░░ is not a coincidence!

_**Theorem $1.14$ (Euclidean algorithm):** Let $a$, $b$ be integers, with $b \neq 0$. Then, with notation as above, $\gcd(a,b)$ equals the last nonzero remainder $r_n$░░░░

░░░░ explicitly: let $r_{-2} = a$ and $r_{-1} = b$; for $i \geq 0$░░░░ ░░░░ $r_i$ be the remainder of the division of $r_{i-2}$ by $r_{i-1}$. Then there is an integer $n$ such that $r_n \neq 0$ ░░░░ $r_{n+1} = 0$, and $\gcd(a,b) = r_n$░░░░

Applying ░░░░ ░░░░ ░░░░ ░░░░ two ░░░░ only ░░░░ ░░░░ able ░░░░ ░░░░ ░░░░ the ░░░░ with remainder, which ░░░░ very ░░░░ ░░░░ factorization ░░░░ required!

░░░░ $1.14$ ░░░░ ░░░░ easier ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ seem, once ░░░░ understand ░░░░ ░░░░ ░░░░ 

_**Lemma $1.15$:** Let $a, b, q, r$ be integers, with $b \neq 0$, and assume that $a = bq + r$. Then,_
$$\text{gcd}(a, b) = \text{gcd}(b, r).$$ _Proof:_  

░░░░ is ░░░░ ░░░░ ░░░░ that the pairs $a$ ░░░░ $b$░░░░ $b$ and $r$ ░░░░ the same ░░░░ divisors: then the ░░░░ among the common divisors ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ $(a, b)$ and $(b, r)$░░░░ ░░░░ the statement.  

░░░░ $c$ be ░░░░ ░░░░ divisor ░░░░ $a$ and $b$░░░░ $c \mid a$ ░░░░ $c \mid b$. ░░░░ $a = cs$, $b = ct$ for ░░░░ integers $s$ and $t$ ░░░░ ░░░░ ░░░░ that,  $$r = a - bq = cs - ctq = c(s - tq),$$  ░░░░ ░░░░ shows that $c \mid r$. Since we ░░░░ ░░░░ ░░░░ $c \mid b$, ░░░░ see ░░░░ $c$ is ░░░░ ░░░░ divisor ░░░░ $b$ and $r$░░░░ One ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $c$ is a common ░░░░ ░░░░ $b$ ░░░░ $r$, then it is ░░░░ common ░░░░ ░░░░ $a$ and $b$░░░░ 

Why does ░░░░ $1.15$ imply ░░░░ $1.14$? ░░░░ the ░░░░ ░░░░ above, ░░░░ lemma ░░░░ us that,$$\text{gcd}(a, b) = \text{gcd}(b, r_0) = \text{gcd}(r_0, r_1) = \dots = \text{gcd}(r_{n-1}, r_n) = \text{gcd}(r_n, 0) = r_n,$$  ░░░░ this ░░░░ precisely ░░░░ Theorem $1.14$ claims.  

_**Remark $1.16$:** If necessary, one can chase the Euclidean algorithm backwards and find integers $m, n$ such that $\text{gcd}(a, b) = ma + nb$. Rather than giving a formal description of this process, let’s see how it works in Example $1.13$. The fourth (i.e., second-to-last) line in the “algorithm” tells us,_
$$\text{gcd}(30, -42) = 6 = 18 - 12 \cdot 1 = 18 - 12.$$░░░░ ░░░░ the third ░░░░ $12 = 30 - 18$, ░░░░ this says,
$$\text{gcd}(30, -42) = 18 - (30 - 18) = 2 \cdot 18 - 30.$$░░░░ ░░░░ ░░░░ ░░░░ line, $18 = -42 - 30 \cdot (-2)$░░░░ therefore,  $$\text{gcd}(30, -42) = 2 \cdot (-42 - 30 \cdot (-2)) - 30 = 3 \cdot 30 + 2 \cdot (-42),$$░░░░ we ░░░░ ░░░░ $m = 3$░░░░ $n = 2$ ░░░░

#### The Fundamental Theorem of Arithmetic

Everything we have ░░░░ ░░░░ far ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ multiplication ░░░░ $\mathbb{Z}$░░░░ ░░░░ may feel ░░░░ addition ░░░░ ░░░░ ░░░░ business ░░░░ ░░░░ ░░░░ there are ░░░░ ░░░░ ░░░░ this is ░░░░ the ░░░░ ░░░░ about addition boils ░░░░ ░░░░ the number $1$░░░░ ░░░░ positive integer can be ░░░░ ░░░░ adding $1$ to itself a number ░░░░ times; and if you ░░░░ ░░░░ then ░░░░ ░░░░ ░░░░ every integer from $1$░░░░ ░░░░ number $1$ ░░░░ ░░░░ one ░░░░ ░░░░ need ░░░░ ░░░░ ░░░░ ░░░░ of $\mathbb{Z}$, if ░░░░ can only ░░░░ addition. (We ░░░░ see in due time ░░░░$§10.2$░░░░ ░░░░ this makes the ░░░░ $(\mathbb{Z},+)$ ░░░░ From ░░░░ point ░░░░ view, multiplication is ░░░░ a ░░░░ story: ░░░░ ░░░░ ░░░░ every ░░░░ by ░░░░ a ░░░░ ░░░░ by itself. Even ░░░░ you ░░░░ division, one ░░░░ ░░░░ do. ░░░░ it ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ build ░░░░ whole of $\mathbb{Z}$ with ░░░░ ░░░░ ░░░░ need many ░░░░ bricks—an ░░░░ ░░░░ of them.

_**Definition $1.17$:** An integer $p$ is ‘irreducible’ if $p\neq\pm 1$ and the only divisors of $p$ are $\pm 1,\pm p$. An integer $\neq 0,\neq\pm 1$ is ‘reducible’ or ‘composite’ if it is not irreducible._

░░░░ ░░░░ $0$ and $\pm 1$ are ░░░░ ░░░░ nor composite ░░░░ ░░░░ this ░░░░

░░░░ ░░░░ $10$ is not irreducible ░░░░ ░░░░ ░░░░ a composite ░░░░ indeed, $2$ is a divisor of $10$ that does ░░░░ ░░░░ $\pm 1,\pm 10$░░░░ ░░░░ first few irreducible ░░░░ integers are,$$2,3,5,7,11,13,17,19,23,29,31,37,41,43,\dots$$One straightforward ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ irreducible positive integers is ░░░░ Sieve ░░░░ Eratosthenes: ░░░░ ░░░░ integers $\geq 2$░░░░ ░░░░ ░░░░ out ░░░░ ░░░░ ░░░░ $2$ bigger than $2$░░░░ then ░░░░ ░░░░ of $3$ bigger than $3$, ░░░░ ░░░░ ░░░░ cross ░░░░ all multiples of the ░░░░ that ░░░░ not been crossed ░░░░ yet. We get,$$2\ 3\ 5\ \cancel{6}\ 7\ \cancel{9}\ 11\ \cancel{12}\ 13\ \cancel{15}\ 17\ \cancel{18}\ 19\ \cancel{21}\ \dots$$It should be clear ░░░░ ░░░░ integers that are not crossed out ░░░░ ░░░░ and only ░░░░ ░░░░ ░░░░ integers.

We will see that ░░░░ integer ░░░░ be written ░░░░ ░░░░ ░░░░ of ░░░░ integers, and further ░░░░ this can ░░░░ done ░░░░ ░░░░ essentially ░░░░ way. Before ░░░░ get there, we have ░░░░ ░░░░ into ░░░░ ░░░░ a little ░░░░ carefully. Here ░░░░ ░░░░ ░░░░ which ░░░░ ░░░░ $1.17$ ░░░░ the ░░░░ covered in $§1.3$░░░░

_**Lemma $1.18$:**: Assume that $p$ is an irreducible integer and that $b$ is not a multiple of $p$. Then $b$ and $p$ are relatively prime, that is, $\text{gcd}(p,b)=1$._

_Proof:_  

If $c$ ░░░░ ░░░░ ░░░░ divisor ░░░░ $p$ ░░░░ $b$, ░░░░ ░░░░ particular $c=\pm 1$ ░░░░ $c=\pm p$, ░░░░ $c\mid p$ ░░░░ $p$ ░░░░ ░░░░ Since $c$ ░░░░ also ░░░░ divisor of $b$░░░░ ░░░░ $p$ is not a divisor of $b$ by hypothesis, ░░░░ deduce ░░░░ necessarily $c=\pm 1$. This is true ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $p$ ░░░░ $b$░░░░ so it ░░░░ in particular true ░░░░ $\text{gcd}(p,b)$. ░░░░ $\text{gcd}(p,b)\geq 0$, the only possibility ░░░░ $\text{gcd}(p,b)=1$.

░░░░ is already ░░░░ ░░░░ $p$ ░░░░ ░░░░ and $b$ is ░░░░ ░░░░ ░░░░ of $p$░░░░ we ░░░░ know ░░░░ there ░░░░ ░░░░ $m$ and $n$ ░░░░ ░░░░ $mp+nb=1$. ░░░░ this obvious? ░░░░ ░░░░ appear ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ it is ░░░░ since ░░░░ ░░░░ proved ░░░░ $1.18$ ░░░░ established ░░░░ $1.9$ ░░░░

_**Definition $1.19$:** An integer $p$ is _prime_ if $p \neq \pm 1$ and whenever $p$ divides the product $bc$ of two integers $b$, $c$, then $p$ divides $b$ or $p$ divides $c$._

For example, $10$ ░░░░ not ░░░░ indeed, $10$ ░░░░ $30 = 6 \cdot 5$░░░░ ░░░░ ░░░░ $10$ divides neither $6$ nor $5$. On ░░░░ other hand, $0$ ░░░░ prime ░░░░ to ░░░░ $1.19$.

_Caveat:_ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ do not include $0$ ░░░░ a prime integer, ░░░░ ░░░░ inclusion may ░░░░ ░░░░ ░░░░ as distasteful. ░░░░ make this ░░░░ choice to ░░░░ ░░░░ ░░░░ terminology involving ideals, ░░░░ ░░░░ will encounter in $§6.1$; ░░░░ ░░░░ convention will enable ░░░░ ░░░░ ░░░░ ░░░░ sharper statements (cf. Examples $3.30$ ░░░░ $6.6$░░░░

_Remark 1.20:_ 

░░░░ ░░░░ ░░░░ _or_ is not exclusive. The definition ░░░░ for ░░░░ ░░░░ that $p$ may ░░░░ _both_ $b$ ░░░░ $c$.

░░░░ ░░░░ ░░░░ from the ░░░░ ░░░░ ░░░░ $p$ ░░░░ prime, and $p$ divides a product of several integers $a_i : p | a_1 \cdots a_s$, then $p$ must divide (at least) one of the integers $a_i$░░░░

_**Theorem $1.21$:** Let $p \in \Z$, $p \neq 0$. Then $p$ is prime if and only if it is irreducible._

_Proof:_ 
If $p = \pm 1$, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ irreducible), ░░░░ our hypothesis holds. ░░░░ ░░░░ need to concern ░░░░ with ░░░░ which ░░░░ not $0$ nor $\pm 1$. To ░░░░ ░░░░ biconditional, we need ░░░░ ░░░░ the ░░░░ and converse ░░░░ that is, 

░░░░ _Direct implication: If $p$ is prime, then it's irreducible._
- _Converse implication: If $p$ is irreducible, then it must be prime._

For the direct ░░░░ let $p$ ░░░░ ░░░░ ░░░░ $d \mid p$, where $d$ ░░░░ ░░░░ divisor ░░░░ $p$. Then,$$p = dq$$But then $p$ ░░░░ $dq$ ░░░░ $dq = 1 \cdot p$ ░░░░ this case), ░░░░ since $p$ is ░░░░ ░░░░ ░░░░ deduce ░░░░ $p \mid d$ ░░░░ $p \mid q$░░░░ If $p \mid d$, ░░░░ we ░░░░ ░░░░ ░░░░ $d \mid p$ and $p \mid d$; by Lemma $1.2$░░░░ ░░░░ ░░░░ ░░░░ we have that $|d| \leq |p|$ or $|p| \leq |d|$. Then ░░░░ can ░░░░ $|d| = |p|$, ░░░░ is, $d = \pm p$. 

On ░░░░ ░░░░ hand, if $p \mid q$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $e$ such that $q = ep$. ░░░░ ░░░░ ░░░░ $p = dq = dep$, ░░░░ hence $p(de - 1) = 0$░░░░ Since $p \neq 0$░░░░ we deduce $de - 1 = 0$, ░░░░ is, $de = 1$. ░░░░ $d$ divides $1$, ░░░░ this implies $d = \pm 1$. Summarizing, we have ░░░░ ░░░░ if $d \mid p$░░░░ then $d = \pm p$ ░░░░ $d = \pm 1$░░░░ ░░░░ this shows ░░░░ $p$ is irreducible, ░░░░ we needed.

░░░░ ░░░░ ░░░░ we assume that $p$ is ░░░░ ░░░░ ░░░░ ░░░░ are precisely $\pm 1$ and $\pm p$. ░░░░ ░░░░ to ░░░░ that $p$ is ░░░░ ░░░░ assume that $p \mid bc$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $p \mid b$ or $p \mid c$. ░░░░ $p$ ░░░░ to divide $b$░░░░ ░░░░ ░░░░ ░░░░ to prove, so ░░░░ ░░░░ ░░░░ that $p$ does ░░░░ divide $b$░░░░ ░░░░ ░░░░ have ░░░░ ░░░░ that in ░░░░ ░░░░ $p$ ░░░░ divides $c$░░░░ ░░░░ Lemma $1.18$░░░░ we ░░░░ ░░░░ $\gcd(p, b) = 1$░░░░ But ░░░░ $p$ must indeed ░░░░ $c$░░░░ by ░░░░ $1.11$. $\blacksquare$

There are ░░░░ for making ░░░░ distinction between _irreducible_ ░░░░ _prime_, considering ░░░░ these two notions ░░░░ ░░░░ identical, ░░░░ ░░░░ ░░░░ just ░░░░ ░░░░ could ░░░░ ░░░░ ░░░░ (as ░░░░ ░░░░ of ░░░░ ░░░░ $0$ when ░░░░ with prime integers, ░░░░ then _prime_ ░░░░ _irreducible_ ░░░░ be ░░░░ I ░░░░ otherwise: it does ░░░░ seem ░░░░ to ░░░░ $0$ as a ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the reason to avoid identifying the ░░░░ of ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ from ░░░░ ░░░░ general ░░░░ ░░░░ ░░░░ ($§6.2$░░░░ we ░░░░ discover ░░░░ they are indeed ░░░░ different. ░░░░ ░░░░ **rings** in which the ░░░░ ░░░░ Definitions $1.17$ ░░░░ $1.19$ ░░░░ really non-equivalent notions, ░░░░ for ░░░░ elements. ░░░░ it happens, nonzero prime ░░░░ are ░░░░ irreducible in ░░░░ ░░░░ but the converse ░░░░ ░░░░ ░░░░ true in general. Somehow, ░░░░ first part of the ░░░░ of Theorem $1.21$ ░░░░ generalize broadly, ░░░░ the ░░░░ part ░░░░ not, ░░░░ ░░░░ ring ░░░░ ░░░░ special. The ring $\mathbb{Z}$ ░░░░ very special!

░░░░ next ░░░░ ░░░░ also ░░░░ ░░░░ ░░░░ ░░░░ special $\mathbb{Z}$ ░░░░ ░░░░ is ░░░░ important ░░░░ it is called ░░░░ **fundamental theorem of arithmetic**░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we explored ░░░░ ░░░░ the effect that the multiplicative ░░░░ ░░░░ $\mathbb{Z}$ ░░░░ built on ░░░░ many bricks. ░░░░ ░░░░ are ░░░░ the prime/irreducible integers.

_**Theorem $1.22$ (Fundamental Theorem of Arithmetic):** Every integer $n \neq 0, \pm 1$ is a product of finitely many irreducible integers: $\forall n \in \mathbb{Z}, n \neq 0, n \neq \pm 1$, there exist irreducible integers $q_1, \dots, q_r$ such that,_

$$
n = q_1 \cdots q_r.
$$
_Further, this factorization is unique in the sense that if,_

$$
n = q_1 \cdots q_r = p_1 \cdots p_s,
$$
_with all $q_i, p_j$ irreducible, then necessarily $s = r$ and after reordering the factors we have $p_1 = \pm q_1, p_2 = \pm q_2, \dots, p_r = \pm q_r$._

_**Remark $1.23$:** As mentioned in this statement, an expression such as ($1.2$) is called a “factorization”, and specifically a **factorization into irreducibles**, or **prime factorization**. The statement does not exclude that $r = 1$: this happens precisely when $n = q_1$ is itself ░░░░ ░░░░ ░░░░ in ░░░░ even agree that the ░░░░ product” ░░░░ $1$ ░░░░ ░░░░ not ░░░░ ░░░░ do so), ░░░░ ░░░░ ░░░░ ░░░░ have that ░░░░ $n = 1$ has ░░░░ ░░░░ ░░░░ the factorization ░░░░ of ░░░░ ░░░░ corresponding ░░░░ $r = 0$░░░░

░░░░ ░░░░ that the statement of this theorem ░░░░ be ░░░░ ░░░░ ░░░░ more ░░░░ if ░░░░ ░░░░ ░░░░ ruled ░░░░ $\pm 1$ ░░░░ our definition of “irreducible”. ░░░░ ░░░░ allowed $1$ ░░░░ ░░░░ ░░░░ factor”, then we could include ░░░░ ░░░░ of ░░░░ factors in ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ part of the statement ░░░░ simply ░░░░ be ░░░░

_Proof of Theorem $1.22$:_ 
It is enough to prove the ░░░░ ░░░░ ░░░░ ░░░░ $n$░░░░ since ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ first deal ░░░░ the **existence** of factorizations for integers $n > 1$, and then with the **uniqueness** of ░░░░ factorization.

░░░░ ░░░░ and uniqueness ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ principle. ░░░░ existence, let

$$
S = \{n \in \mathbb{Z}, n > 1 \mid n \text{ is not a product of finitely many irreducibles}\}.
$$
░░░░ ░░░░ to ░░░░ that $S$ ░░░░ empty: this ░░░░ ░░░░ that every ░░░░ $n > 1$ ░░░░ ░░░░ a factorization ░░░░ irreducibles.

By ░░░░ ░░░░ assume ░░░░ $S$ is ░░░░ empty. ░░░░ this ░░░░ $S$ is a nonempty ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $S$ has a ░░░░ element ░░░░ the well-ordering ░░░░ ░░░░ this ░░░░ be $n$░░░░

Since $n \in S$░░░░ $n$ is ░░░░ a product of ░░░░ and in particular $n$ is ░░░░ ░░░░ itself. ░░░░ $n$ ░░░░ ░░░░ ░░░░ ░░░░ $\pm 1, \pm n$░░░░ that ░░░░ $n = ab$ ░░░░ some ░░░░ $a, b$ ░░░░ from $\pm 1, \pm n$. We may ░░░░ both $a$ ░░░░ $b$ are positive, ░░░░ $n$ is positive. ░░░░ $a \mid n$ ░░░░ $b \mid n$░░░░ ░░░░ ░░░░ ░░░░ $1$░░░░ ░░░░ ░░░░ ░░░░ $1 < a < n$ and $1 < b < n$ ░░░░ are again ░░░░ ░░░░ $1.2$░░░░ But $n$ ░░░░ the smallest ░░░░ in $S$, ░░░░ $a \notin S$ and $b \notin S$. ░░░░ tells ░░░░ that both $a$ and $b$ ░░░░ have factorizations ░░░░ ░░░░

$$
a = q_1 \cdots q_u, \quad b = q'_1 \cdots q'_v
$$
for ░░░░ integers $q_i, q'_j$. ░░░░ ░░░░ ░░░░ ░░░░ contradiction, ░░░░ this ░░░░ imply ░░░░

$$
n = q_1 \cdots q_u \cdot q'_1 \cdots q'_v,
$$
░░░░ that $n$ _does_ ░░░░ a factorization ░░░░ irreducibles—this ░░░░ mean that $n \notin S$░░░░ while $n$ ░░░░ ░░░░ element of $S$ ░░░░ begin with. Thus, our assumption that $S$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ It follows ░░░░ $S$ is ░░░░ and this proves ░░░░ first part ░░░░ the ░░░░ ░░░░ integer $\neq 0, \pm 1$ ░░░░ factorizations.

░░░░ we have to deal ░░░░ ░░░░ ░░░░ $n$ and the ░░░░ $q_i$ are all _positive_, then ‘uniqueness’ ░░░░ means that ░░░░ ░░░░ ($1.2$░░░░ is ░░░░ up ░░░░ the order of ░░░░ factors. This ░░░░ what we ░░░░ ░░░░ the ░░░░ case ░░░░ ░░░░ ░░░░ ░░░░

░░░░ assume ░░░░ that ░░░░ not necessarily the ░░░░ ░░░░ ░░░░ $T$ ░░░░ the set of nonnegative ░░░░ $n$ ░░░░ which the ░░░░ ░░░░ not unique: so ░░░░ are ░░░░ ░░░░ $T$ is nonempty, ░░░░ we would ░░░░ to derive ░░░░ ░░░░ ░░░░ this assumption.

By ░░░░ ░░░░ pattern ░░░░ be evident. ░░░░ ░░░░ $T$ is ░░░░ set of ░░░░ ░░░░ ░░░░ $T$ is nonempty, then it ░░░░ a _minimum_ $n$ ░░░░ the _well-ordering principle_: ░░░░ ░░░░ the factorization ░░░░ $n$ is not ░░░░ but the ░░░░ of any ░░░░ smaller than $n$ _is_ ░░░░ Write two distinct ░░░░ ░░░░ $n$:

$$
n = q_1 \cdots q_r = p_1 \cdots p_s,
$$
░░░░ ░░░░ $q_i, p_j$ ░░░░ and positive. ░░░░ $r$ and $s$ ░░░░ $\geq 1$, ░░░░ $n$ is ░░░░ equal ░░░░ $1$. We ░░░░ assuming ░░░░ ░░░░ ░░░░ factorizations ░░░░ _not_ ░░░░ same up ░░░░ ░░░░ and ░░░░ ░░░░ at reaching ░░░░ contradiction.

Look ░░░░ ($1.3$░░░░ it ░░░░ us in ░░░░ that $p_1$ divides the product $q_1 \cdots q_r$. Since $p_1$ ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ ░░░░ $1.21$░░░░ and ░░░░ ░░░░ Remark $1.20$) it must divide ░░░░ of ░░░░ ░░░░ $q_i$. After rearranging the factors $q_i$░░░░ we may ░░░░ that $p_1$ divides $q_1$. 

Next, $q_1$ is itself irreducible, so its divisors are $\pm 1, \pm q_1$░░░░ Since $p_1$ is irreducible, it is not equal to $\pm 1$; and since we have established that $p_1$ ░░░░ ░░░░ ░░░░ of $q_1$, necessarily $p_1 = \pm q_1$. Both $q_1$ and $p_1$ are positive, so we can conclude that $p_1 = q_1$░░░░

At ░░░░ ░░░░ we can rewrite ░░░░$1.3$░░░░ ░░░░

$$
n = q_1 \cdot q_2 \cdots q_r = q_1 \cdot p_2 \cdots p_s.
$$
░░░░ ░░░░ ░░░░$q_1 \neq 0$) ░░░░ follows that,

$$
q_2 \cdots q_r = p_2 \cdots p_s.
$$

░░░░ ░░░░ ░░░░ equals ░░░░ integer $n / q_1$, and in particular it is less than $n$. Since $n$ was the least positive integer for which the factorization was not unique, the factorization is unique for $n / q_1$. ░░░░ ░░░░ that $r - 1 = s - 1$ ░░░░ $q_i = p_i$ ░░░░ $i \geq 2$ up to reordering. We had ░░░░ established ░░░░ $q_1 = p_1$, so ░░░░ ░░░░ that $r = s$ ░░░░ $q_i = p_i$ ░░░░ $i \geq 1$░░░░ up to ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ factorizations presented ░░░░ ($1.3$░░░░ do coincide, contradicting ░░░░ assumption.

░░░░ the assumption ░░░░ $T \neq \emptyset$ leads to a ░░░░ Therefore ░░░░ $T = \emptyset$, ░░░░ is, ░░░░ ░░░░ is unique ░░░░ all $n > 1$, and we are ░░░░ $\blacksquare$

The fact that ░░░░ _Fundamental Theorem of Arithmetic_ ░░░░ ░░░░ ░░░░ ░░░░ that $\mathbb{Z}$ is rather ░░░░ When we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ language of rings, ░░░░ ░░░░ recognize ░░░░ this ░░░░ ░░░░ us that $\mathbb{Z}$ ░░░░ a _UFD_ (‘unique factorization ░░░░ This means ░░░░ $\mathbb{Z}$ ░░░░ ░░░░ domain (a ░░░░ nice ░░░░ of ░░░░ ░░░░ which every element ░░░░ a ░░░░ ░░░░ ░░░░ and ░░░░ that this ░░░░ ░░░░ ░░░░ in a ░░░░ ░░░░ as ░░░░ ░░░░ ░░░░ ░░░░ $1.22$. ░░░░ ░░░░ ░░░░ ░░░░ more ░░░░ ░░░░ ░░░░ $§6.4$░░░░

░░░░ you have ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ you ░░░░ ░░░░ ░░░░ that ░░░░ ░░░░ not need to use Theorem $1.21$ ░░░░ the ░░░░ of ░░░░ second part. In $\mathbb{Z}$░░░░ the ░░░░ ░░░░ factorizations ░░░░ depends ░░░░ the ░░░░ of irreducibility, while ░░░░ **uniqueness** requires knowing ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ of factorization in ░░░░

As a consequence ░░░░ Theorem $1.22$░░░░ every positive ░░░░ $\neq 1$ determines a well-defined ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ multiplicity; ░░░░ example, ░░░░ ░░░░ factorization $12 = 2 \cdot 2 \cdot 3$ ░░░░ ░░░░ that $12$ determines ░░░░ ░░░░ consisting ░░░░ $2, 2, 3$. ░░░░ the ░░░░ part, ░░░░ ░░░░ of ░░░░ ░░░░ collection of ░░░░ ░░░░ $12$. Dealing ░░░░ negative ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ for example, insist ░░░░ exactly one ░░░░ the ░░░░ factors ░░░░ ░░░░ with a ░░░░ ░░░░

░░░░ it yet another way, ░░░░ can ░░░░ any positive integer $n$ ░░░░ ░░░░ ($1.5$░░░░

$$
n = 2^{v_2} 3^{v_3} 5^{v_5} 7^{v_7} 11^{v_{11}} \cdots
$$
where the ‘infinite product’ on the ░░░░ consists ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ irreducible ░░░░ and only finitely many ░░░░ ░░░░ ░░░░ $v_i$ are not equal to $0$. For example, $12$ is obtained by letting $v_2 = 2, v_3 = 1$, and setting all other exponents $v_i$ ░░░░ $0$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ this ░░░░ $n$ ░░░░ $1$░░░░ ░░░░ case corresponds to choosing all ░░░░ ░░░░ to ░░░░ $0$. ░░░░ content of the ░░░░ Theorem of ░░░░ ░░░░ that **every** ░░░░ integer $n$ ░░░░ be ░░░░ ░░░░ this way, ░░░░ ░░░░ ░░░░ ░░░░ list of exponents $(v_2, v_3, v_5, \dots)$ is determined _░░░░ ░░░░ $n$.

░░░░ ░░░░ ░░░░ ░░░░ get ░░░░ ░░░░ point of view on ░░░░ and on greatest ░░░░ ░░░░ First, ░░░░ $n$ is ░░░░ ░░░░ ░░░░ (1.5) ░░░░ another ░░░░ integer $c$ ░░░░ given by,

$$
c = 2^{r_2} 3^{r_3} 5^{r_5} 7^{r_7} 11^{r_{11}} \cdots,
$$
░░░░ $c \mid n$ ░░░░ ░░░░ only ░░░░ $r_i \leq v_i$ for ░░░░ $i$░░░░ This ░░░░ us a ░░░░ ░░░░ write ░░░░ ░░░░ ░░░░ ░░░░ a given ░░░░ ░░░░ the following useful consequence.

_**Proposition $1.25$:** Let $a, b$ be nonzero integers, and write,_

$$
a = \pm 2^{\alpha_2} 3^{\alpha_3} 5^{\alpha_5} 7^{\alpha_7} 11^{\alpha_{11}} \cdots,
$$
$$
b = \pm 2^{\beta_2} 3^{\beta_3} 5^{\beta_5} 7^{\beta_7} 11^{\beta_{11}} \cdots,
$$
_as above. Then the gcd of $a$ and $b$ is the positive integer,_

$$
d = 2^{\delta_2} 3^{\delta_3} 5^{\delta_5} 7^{\delta_7} 11^{\delta_{11}} \cdots,
$$
_where $\delta_i = \min(\alpha_i, \beta_i)$ for all $i$._

_Proof:_ 
░░░░ $c = 2^{\gamma_2} 3^{\gamma_3} 5^{\gamma_5} \cdots$ is a common divisor of $a$ and $b$, as observed above, we must have $\gamma_i \leq \alpha_i$ and $\gamma_i \leq \beta_i$ ░░░░ all $i$.

░░░░ $\delta_i = \min(\alpha_i, \beta_i)$ is indeed $\leq \alpha_i$ ░░░░ $\leq \beta_i$, we see that,

$$
d = 2^{\delta_2} 3^{\delta_3} 5^{\delta_5} \cdots
$$
░░░░ ░░░░ common ░░░░ of $a$ ░░░░ $b$, giving ░░░░ (i) in Definition 1.5. Further, ░░░░ note that ░░░░ $\gamma_i$ is less than both $\alpha_i$ and $\beta_i$, then $\gamma_i < \min(\alpha_i, \beta_i) = \delta_i$. This implies ░░░░ every common divisor of $a$ ░░░░ $b$ ░░░░ $d$░░░░ and ░░░░ that $d$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $1.5$░░░░ $\blacksquare$

Essentially the ░░░░ argument ░░░░ ░░░░ ░░░░ ░░░░ _least common multiple_ ░░░░ is ░░░░ ░░░░ by ░░░░ exponents $\max(\alpha_i, \beta_i)$. (The ‘least common multiple’ of $a$ and $b$ is ░░░░ it says ░░░░ should ░░░░ a number $\ell$ ░░░░ is ░░░░ multiple of $a$ ░░░░ ░░░░ multiple ░░░░ $b$, and ░░░░ ░░░░ ░░░░ common multiple of $a$ ░░░░ $b$ is a multiple ░░░░ $\ell$.)

Of course ░░░░ is again _not_ ░░░░ ░░░░ ░░░░ ░░░░ compute gcds; ░░░░ Euclidean ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ faster. ░░░░ ░░░░ finding ░░░░ irreducible ░░░░ ░░░░ an integer ░░░░ computationally ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ factorizations would ░░░░ on _quantum computers_, ░░░░ ░░░░ quantum ░░░░ ░░░░ not ░░░░ ░░░░ ░░░░ that ░░░░ change ░░░░

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ these considerations.

_**Corollary $1.27$:** Two nonzero integers $a, b$ are relatively prime if and only if they have no common irreducible factor._

_Proof:_ 

░░░░

$$
a = \pm 2^{\alpha_2} 3^{\alpha_3} 5^{\alpha_5} \cdots, \quad b = \pm 2^{\beta_2} 3^{\beta_3} 5^{\beta_5} \cdots
$$
as above.

By ░░░░ 1.25, $a$ and $b$ ░░░░ ░░░░ ░░░░ ░░░░ is, $\gcd(a, b) = 1$, ░░░░ when $\min(\alpha_i, \beta_i) = 0$ for ░░░░ $i$, ░░░░ ░░░░ if ░░░░ only if $\alpha_i = 0$ or $\beta_i = 0$ ░░░░ ░░░░ $i$. ░░░░ means ░░░░ that $a$ and $b$ ░░░░ ░░░░ common ░░░░ factor. $\blacksquare$

░░░░ ░░░░ are ░░░░ very ░░░░ A ░░░░ things can ░░░░ said ░░░░ general:

- ░░░░ are ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ why as ░░░░ ░░░░ (Exercise $1.26$ ░░░░ be ░░░░ you will ░░░░ ░░░░ in the company of ░░░░ who ░░░░ credited with the first ░░░░ of this fact, and you will ░░░░ the ░░░░ Theorem in ░░░░ process.

░░░░ ░░░░ $\pi(n)$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ primes less than ░░░░ ░░░░ to $n$ ░░░░ $\pi(1) = 0, \pi(2) = 1, \pi(3) = 2, \pi(4) = 2, \pi(5) = 3$░░░░ ░░░░ ░░░░ ░░░░ $n \to \infty$░░░░ $\pi(n)$ ░░░░ at the same rate as $n / \ln n$░░░░ ░░░░ precisely, $\lim_{n \to \infty} \frac{\pi(n)}{n / \ln n} = 1$. This is the so-called **Prime Number Theorem.** _░░░░ ░░░░ try ░░░░ as ░░░░ ░░░░ it ░░░░ too ░░░░

░░░░ The **Riemann hypothesis** ░░░░ ░░░░ ░░░░ ░░░░ most ░░░░ open ░░░░ ░░░░ ░░░░ and it ░░░░ to ░░░░ sophisticated ░░░░ on ░░░░ distribution of primes.

#### Selected Exercises

_The exercises marked $\triangleright$ are particularly important for later developments._

##### Ex 1-1

_Find an example illustrating why the hypothesis that $a \neq 0$ is necessary in the statement of Lemma $1.2$._

_Proof:_

The ░░░░ states that ░░░░ $b \mid a$ and $a \neq 0$, then $|b| \leq |a|$. If $b \mid a$░░░░ ░░░░ $a = bc \mid c \in \Z$. If $a = 0$, $0 = b \cdot 0$ holds trivially ░░░░ ░░░░ $b$. ░░░░ $|b| \leq 0$ ░░░░ ░░░░ ░░░░ ░░░░ $b = 0$ and ░░░░ ░░░░ won't hold ░░░░ ░░░░ ░░░░ ░░░░ $b$░░░░ ░░░░ $a \neq 0$░░░░

##### $\triangleright$ Ex 1-2

_Prove that divisibility is an order relation on the set $\Z^{\geq 0}$ of nonnegative integers. That is, prove that for all positive integers $a$, $b$, $c$:_

- $a \mid a$░░░░
- if $a \mid b$ ░░░░ $b \mid c$, ░░░░ $a \mid c$;
- if $a \mid b$ ░░░░ $b \mid a$, ░░░░ $a = b$░░░░

_Is this order relation a **total ordering**? Does it have a _maximum_? That is, is there an integer $m$ such that $\forall a \in \Z^{\geq 0}, \ a \mid m$?_

_Proof:_

If $a \mid a$, by definition, there must ░░░░ a $c$ such ░░░░ $a = ac$, which ░░░░ in $c = 1$. Thus $a \mid a$.
If $a \mid b$░░░░ $b = aq$░░░░ ░░░░ ░░░░ $b \mid c$░░░░ ░░░░ $c = br$░░░░ ░░░░ $c = aqr$ ░░░░ $c = a \cdot (qr)$ and we ░░░░ $a \mid c$░░░░
If $a \mid b$░░░░ then $|a| \leq |b|$, ░░░░ ░░░░ $|b| \leq |a|$, ░░░░ $a = b$.

To check whether divisiblity ░░░░ ░░░░ ░░░░ we need to ░░░░ that ░░░░ any two nonnegative ░░░░ $a$ and $b$, one ░░░░ $a \mid b$ or $b \mid a$ _must_ hold. ░░░░ $a$ ░░░░ $b$ are prime, ░░░░ $a \nmid b$, nor $b \nmid a$. Thus, we ░░░░ ░░░░ ░░░░ ░░░░ $\blacksquare$

##### Ex 1-3

_Show that $\Z$ is not well-ordered by $\leq$._

_Proof:_

$\Z$ with the order ░░░░ $\leq$ is total-ordered. ░░░░ ░░░░ ░░░░ ░░░░ second ░░░░ ░░░░ every ░░░░ subset has ░░░░ ░░░░ element, ░░░░ ░░░░ principle ░░░░ applies ░░░░ $\Z^{\geq 0}$░░░░ that is, ░░░░ ░░░░ subsets ░░░░ do not have a ░░░░ ░░░░ ░░░░$\inf S = \min S$) such ░░░░ the set of all ░░░░ ░░░░ Hence ░░░░ ░░░░ ░░░░ well-ordering. $\blacksquare$

##### Ex 1-4

_Prove that for all $a \in \Z$, $\gcd{(a, 0)} = |a|$._

_Proof:_

If $a = 0$░░░░ ░░░░ $\gcd{(0, 0)} = 0$. ░░░░ $a \lt 0$░░░░ ░░░░ ░░░░ ░░░░ the negative $a$ are the same as that ░░░░ $|a|$░░░░ ░░░░ ░░░░ ░░░░ $|a|$ remains unaffected. So ░░░░ ░░░░ $a \gt 0$. ░░░░ $0$ divides ░░░░ ░░░░ and $a \gt 0$░░░░ ░░░░ ░░░░ of $a$ account ░░░░ the commonality. Since $a$ is ░░░░ own greatest divisor, $\gcd{(a, 0)} = |a|$. $\blacksquare$   

##### Ex 1-5

_Prove that every odd integer is either of the form $4k + 1$ or of the form $4k + 3$ for some integer $k$._

_Proof:_

░░░░ ░░░░ an ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $a = bq + r$░░░░ Then ░░░░ ░░░░ case, $a = 4k + r$ where $0 \leq r \lt 4$░░░░ ░░░░ ░░░░ $r$ ░░░░ ░░░░ only be ░░░░ ░░░░ $0$░░░░ $1$░░░░ $2$ or $3$░░░░ If $r = 0$░░░░ ░░░░ $a = 4k$ ░░░░ ░░░░ $k$, and thus ░░░░ odd. If $r = 2$░░░░ ░░░░ ░░░░ have $a = 4k + 2 = 2(2k + 1)$ ░░░░ $a$ ░░░░ odd. Then ░░░░ $a = 4k + 1$ ░░░░ $a = 4k + 3$ remain, where $(4k + 1) \mod 2 = 1$ ░░░░ $(4k + 3) \mod 2 = 1$░░░░ ░░░░ $4k + 1$ ░░░░ $4k + 3$ ░░░░ the only way ░░░░ can represent ░░░░ integers. ░░░░ ░░░░ integer division ░░░░ ░░░░ ░░░░ cover ░░░░ odd integers. $\blacksquare$

##### Ex 1-6

_Prove that the cube of an integer $a$ has to be exactly one of these forms: $9k$ or $9k + 1$ or $9k + 8$ for some integer $k$._

_Proof:_

We know by ░░░░ ░░░░ if $a = 9k + r$, ░░░░ $0 \leq r \lt 9$░░░░ ░░░░ means, $r$ ░░░░ only contain values ░░░░ from $0$ to $8$. Now ░░░░ ░░░░ ░░░░ show that ░░░░ ░░░░ ░░░░ $a$, $r$ ░░░░ only ░░░░ one ░░░░ $0$, $1$ ░░░░ $8$. We can check the ░░░░ 

- $a^3 = (9k + 0)^3 \implies r = 0$
- $a^3 = (9k + 1)^3 \implies r = 1$
░░░░ $a^3 = (9k + 2)^3 \implies r = 8$

░░░░ so on, confirming ░░░░ $r$ ░░░░ only ░░░░ ░░░░ $0$░░░░ $1$, ░░░░ $8$░░░░ Thus, ░░░░ ░░░░ is ░░░░ ░░░░ ░░░░ $9k$, $9k + 1$ ░░░░ $9k + 8$. $\blacksquare$

##### Ex 1-7 

_Prove that there is no integer $a$ such that the last digit of $a^2$ is $2$._

_Proof:_

░░░░ the ░░░░ of ░░░░ ░░░░ only depends ░░░░ ░░░░ last ░░░░ right-most) digit, we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $0$ to $9$. Suppose ░░░░ represent an ░░░░ $a = 10q + r$ where $r \leq 0 \lt 9$ ░░░░ ░░░░ of ░░░░ division. ░░░░ both sides, ░░░░ get $a^2 = (10q)^2 + 20qr + r^2$, ░░░░ ░░░░ to $10(10q^2 +2qr) + r^2$░░░░ where the ░░░░ digit is undoubtedly ░░░░ by $r^2$. A simple case ░░░░ case ░░░░ confirms ░░░░ ░░░░ ░░░░ $r$ ░░░░ $[0, 9]$, $r^2 \neq 2$░░░░ ░░░░ hence ░░░░ last digit ░░░░ $a^2$ ░░░░ any ░░░░ $a$ ░░░░ ░░░░ ░░░░ $2$. $\blacksquare$

##### $\triangleright$ Ex 1-8

_Let $n$ be a positive integer, and let $a$ and $b$ be integers. Prove that $a$ and $b$ have the same remainder when divided by $n$ if and only if $a − b = nk$ for some integer $k$._

_Proof:_

Dividing $a$ ░░░░ $b$ ░░░░ $n$, we ░░░░ $a = np_a + r_a$ and $b = np_b + r_b$░░░░ ░░░░ need ░░░░ show that $(r_a = r_b) \iff (a - b = nk)$. We first show ░░░░ ░░░░ ░░░░ ░░░░ $b$ ░░░░ $a$ ░░░░ us $a - b = n(p_a - p_b) + r_a - r_b$░░░░ ░░░░ ░░░░ have $r_a = r_b$░░░░ $r_a - r_b = 0$ ░░░░ we ░░░░ $a - b = n(p_a - p_b)$░░░░ We have ░░░░ that $a - b = nk$ where $k = (p_a - p_b)$░░░░ ░░░░ ░░░░ converse, ░░░░ ░░░░ have $a  - b = nk$, ░░░░ ░░░░ $n(p_a - p_b) + (r_a - r_b) = nk$ ░░░░ $r_a - r_b$ must ░░░░ ░░░░ a ░░░░ ░░░░ $n$░░░░ Then, ░░░░ have $r_a - r_b = cn$░░░░ Since ░░░░ ░░░░ must be ░░░░ than $n$░░░░ ░░░░ ░░░░ must be too, and the only ░░░░ this ░░░░ ░░░░ is if $c = 0$, and ░░░░ have $r_a = r_b$. $\blacksquare$

##### $\triangleright$ Ex 1-10

_Suppose $\gcd(a,b) = 1$. Prove that if $a \mid c$ and $b \mid c$, then $ab \mid c$._

_Proof:_

If $a \mid c$░░░░ we ░░░░ $c = ak_a$ and similarly, $c = bk_b$░░░░ ░░░░ ░░░░ to show that $ab \mid c$. ░░░░ know ░░░░ $ma + nb = 1$. Multiplying ░░░░ $c$ gets ░░░░ $mac + nbc = c$, and $ma^2k_a + nb^2k_b = c$. ░░░░ need ░░░░ show that ░░░░ ░░░░ terms ░░░░ ░░░░ ░░░░ $ab$░░░░ $ma^2k_a$ has a factor of $a$ and clearly is divisble by $a$. Also, $(b \mid c) \implies (b \mid a^2k_a) \implies (b \mid m \cdot a^2k_a)$, hence $ma^2k_a$ is divisble ░░░░ $a \cdot b$░░░░ so is ░░░░ second term by identical reasoning, ░░░░ $ab \mid c$. $\blacksquare$

##### Ex 1-11

_Prove that if $a \mid (b + c)$ and $\gcd(b,c) = 1$, then $\gcd(a,b) = 1$._

_Proof:_

We can prove this by contradiction. ░░░░ $\gcd(a, b) \neq 1$░░░░ ░░░░ ░░░░ ░░░░ have some integer $d \gt 1$ ░░░░ ░░░░ $d \mid a$ ░░░░ $d \mid b$░░░░ and ░░░░ ░░░░ $d \mid (b + c)$. But since $d \mid (b + c - b) \implies d \mid c$, and ░░░░ ░░░░ both $d \mid b$ and $d \mid c$, but this cannot ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that $\gcd(b, c) = 1$, ░░░░ $\gcd(a,b) \neq 1$ ░░░░ to ░░░░ contradiction, ░░░░ $\gcd(a,b) = 1$. $\blacksquare$

##### Ex 1-12

_Prove that if $\gcd(a,c) = 1$ and $\gcd(b,c) = 1$, then $\gcd(ab,c) = 1$._

_Proof:_

░░░░ $\gcd(ab,c) \neq 1$░░░░ $ab$ and $c$ aren't ░░░░ and since we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $a$░░░░ $b$ ░░░░ $c$ are not $0$░░░░ ░░░░ must ░░░░ ░░░░ ░░░░ ░░░░ $d$ ░░░░ ░░░░ $d \mid ab$ and $d \mid c$, where $d \gt 1$░░░░ ░░░░ need to ░░░░ that $d \gt 1$ leads to a ░░░░ ░░░░ that $d = 1$ ░░░░ the ░░░░ ░░░░ solution. ░░░░ $d \mid ab$░░░░ divisibility ░░░░ ░░░░ atleast ░░░░ one of $a$ ░░░░ $b$ ░░░░ ░░░░ ░░░░ common ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $d \mid a$░░░░ ░░░░ ░░░░ have both $d \mid a$ ░░░░ $d \mid c$ ░░░░ $\gcd(a, c) = 1$░░░░ ░░░░ similarly $\gcd(b, c) = 1$░░░░ ░░░░ $\gcd(ab, c) = 1$. $\blacksquare$

##### Ex 1-15

_Prove that if $c \mid ab$ and $\gcd(a,c) = d$, then $c \mid db$._

_Proof:_

If $\gcd(a, c) = d$, ░░░░ $a = dq_a$ and $c = dq_c$░░░░ ░░░░ $dq_c \mid dq_ab$░░░░ ░░░░ $\gcd(q_c, q_a) = 1$░░░░ $q_c \mid b$, and we must have $b = q_c k$░░░░ Multiplying ░░░░ ░░░░ ░░░░ $d$ ░░░░ $db = dq_ck = ck$ and we've shown ░░░░ $c \mid db$. $\blacksquare$

##### $\triangleright$ Ex 1-17

_Prove that if $p$ is prime, and $p$ divides a product of integers $a_1, \cdots , a_s$, then $p$ divides one of the integers $a_i$. (this fact ░░░░ reasonable, but can you prove ░░░░ ‘formally’? Try ░░░░ ░░░░ another use of ░░░░ ░░░░ principle.)_

_Proof:_

Let $F$ ░░░░ a set of elements $s \in \Z^{\gt 0}$ such that ░░░░ of the ░░░░ from the ░░░░ $a_1 \cdots a_s$ are divisible ░░░░ $p$ (but the product ░░░░ is). ░░░░ will ░░░░ that $F = \empty$ ░░░░ contradiction. Suppose $F$ ░░░░ ░░░░ then by ░░░░ well-ordering ░░░░ ░░░░ must ░░░░ ░░░░ positive ░░░░ $s_{min}$ such that none of the terms from the product $a_1 \cdots a_{s_{min}}$ are ░░░░ ░░░░ $p$. 
░░░░ we ░░░░ $[p \mid (a_1 \cdots a_{s_{min}})] \implies [p \mid (a_1 \cdots a_{s_{min} - 1}) \cdot a_{s_{min}}]$. ░░░░ ░░░░ $p$ must ░░░░ atleast one of $a_{s_{min}}$ or $(a_1 \cdots a_{s_{min} - 1})$. If $p \mid a_{s_{min}}$, we already have a contradiction because by construction of $F$ we know that $p$ does not divide any of the terms from $a_1$ ░░░░ $a_{s_{min}}$░░░░ If $p$ then ░░░░ $a_1 \cdots a_{s_{min} - 1}$, then $s_{min} - 1$ would be ░░░░ ░░░░ $F$░░░░ ░░░░ leading to ░░░░ ░░░░ because $s_{min}$ is the minimum element in $F$. Thus $F$ must be empty and $p$ must divide one of $a_1 \cdots a_s$. $\blacksquare$   

##### $\triangleright$ Ex 1-21

_Let_

$$n = 2^{\nu_{2}} 3^{\nu_{3}} 5^{\nu_{5}} 7^{\nu_{7}} \dots$$
$$c = 2^{\gamma_{2}} 3^{\gamma_{3}} 5^{\gamma_{5}} 7^{\gamma_{7}} \dots$$
_be positive integers. Prove that $c \mid n$ if and only if $\gamma_i \leq \nu_i$ for all $i$._

_Proof:_

We ░░░░ that $c \mid n$, then $n = ck$ for ░░░░ $k \in \Z^{\gt 0}$░░░░ ░░░░ $n$ ░░░░ $c$ are ░░░░ integers, $k$ ░░░░ introduce ░░░░ negative ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ holds is ░░░░ $\gamma_i \leq \nu_i$░░░░ and ░░░░ ░░░░ implication ░░░░ For the ░░░░ ░░░░ know that $\gamma_i \leq \nu_i$, ░░░░ ░░░░ need to ░░░░ ░░░░ $c \mid n$░░░░ If $c \mid n$ then ░░░░ ░░░░ ░░░░ ░░░░ positive $k$ such ░░░░ $n = ck$. And since $\gamma_i \leq \nu_i$, we can construct $k = 2^{\nu_2 -\gamma_2}3^{\nu_3 -\gamma_3} \cdots$  ░░░░ our ░░░░ holds. $\blacksquare$

### Modular Arithmetic 

#### Equivalence Relations and Quotients

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ picture on ░░░░ $\Z$ is put together, ░░░░ ░░░░ ░░░░ other ░░░░ which share many features with it, and that ░░░░ fact are ░░░░ from it. ░░░░ will ░░░░ be ░░░░ of _rings_░░░░ ░░░░ ░░░░ help us ░░░░ ░░░░ ░░░░ ░░░░ want to abstract ░░░░ the ░░░░ definition of a _ring_░░░░

These new ░░░░ ░░░░ ░░░░ ░░░░ by ░░░░ ░░░░ ░░░░ (which will ░░░░ be ░░░░ ░░░░ $+$ ░░░░ $\cdot$░░░░ as in the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ obtained as ░░░░ ░░░░ $\Z$ by ░░░░ ░░░░ ░░░░

**_Reminder on equivalence relations:_** ░░░░ notions of 'equivalence relation' ░░░░ 'partition' are ░░░░ ░░░░ 

- A ░░░░ $\sim$ ░░░░ ░░░░ ░░░░ $A$ ░░░░ an ░░░░ ░░░░ if ░░░░ is _reflexive_░░░░ _symmetric_░░░░ and _transitive_░░░░ ░░░░ properties ░░░░ properties ░░░░ hold for the $=$ relation; ░░░░ maybe viewed ░░░░ _the_ ░░░░ (albeit trivial) ░░░░ ░░░░ an ░░░░ relation.

░░░░ If we ░░░░ an equivalence relation $\sim$ ░░░░ ░░░░ set $A$░░░░ ░░░░ ░░░░ can construct ░░░░ ░░░░ ░░░░ often denoted ░░░░ $A/{\sim}$░░░░ this set is ░░░░ ░░░░ 'partition ░░░░ ░░░░ $\sim$ on $A$, ░░░░ ░░░░ ░░░░ ░░░░ $A$ ░░░░ $\sim$░░░░ The elements of the ░░░░ $A/{\sim}$ are the 'equivalence classes' ░░░░ by $\sim$. The ░░░░ class ░░░░ $a \in A$ ░░░░ ░░░░ ░░░░ $\left[a\right]_{\sim}$ ░░░░ of ░░░░ elements ░░░░ $A$ ░░░░ ░░░░ in relation ░░░░ $a$░░░░ ░░░░ is,

$$[a]_{\sim} = \{b \in A \mid a \sim b\}$$

One verifies that the ░░░░ ░░░░ are ░░░░ subsets ░░░░ $A$ whose union ░░░░ ░░░░ whole of $A$░░░░

- ░░░░ function $\pi : A \to (A/{\sim})$ defined by ░░░░ $\pi(a) = [a]_{\sim}$ ░░░░ surjective, ░░░░ $\pi(a) = \pi(b) \iff a \sim b$░░░░

░░░░ ░░░░ last property completely describes the ░░░░ $A/{\sim}$, in ░░░░ ░░░░ ░░░░ if ░░░░ ░░░░ ░░░░ ░░░░ function $f: A \to B$ such that $f(a) = f(b) \iff a \sim b$, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ correspondence ░░░░ $A/{\sim}$ ░░░░ $B$░░░░ In fact, in ░░░░ ░░░░ there is ░░░░ ░░░░ ░░░░ $\tilde{f}: (A/{\sim}) \to B$░░░░ defined by setting $\tilde{f}([a]_{\sim}) = f(a)$░░░░ which ░░░░ ░░░░ to be ░░░░ ░░░░ surjective.

#### Congruence mod $n$

Many ░░░░ ░░░░ ░░░░ ░░░░ be ░░░░ on $\mathbb{Z}$░░░░ Here are ░░░░ ░░░░ ░░░░ want to study ░░░░ ░░░░ In the following definition, $n\mathbb{Z}$ denotes the set ░░░░ multiples ░░░░ $n$:

$$
n\mathbb{Z} := \{ nk \;|\; k \in \mathbb{Z} \} = \{\dots, -2n, -n, 0, n, 2n, \dots\}
$$
**_Definition $2.1$_:** _Let $n \geq 0$ be an integer, and let $a, b \in \Z$. We say that '$a$ is congruent to $b$ modulo $n$', denoted $a \equiv b \pmod{n}$ if $b - a \in n\Z$._

░░░░ ░░░░ words, two ░░░░ $a$ and $b$ ░░░░ congruent ░░░░ $n$ ░░░░ $n$ divides ░░░░ ░░░░ $b - a$░░░░ ░░░░ symbols:

$$
a \equiv b \pmod{n} \iff n \;|\; (b - a)
$$
**_Remark $2.2$_:** We ░░░░ ░░░░ congruence modulo ░░░░ integers ░░░░ ░░░░ ░░░░ the ░░░░ corresponding ░░░░ $n$ ░░░░ $-n$ ░░░░ ░░░░ $n\Z = (-n)\Z$, so ░░░░ may as well take $n \geq 0$. Also note ░░░░ ░░░░ ░░░░ $0$░░░░ ░░░░ simply ░░░░ relation $=$░░░░ Indeed, $0\Z = \{0\}$ so the requirement ░░░░ $b - a \in 0\Z$ simply ░░░░ ░░░░ $a = b$.

░░░░ ░░░░ ░░░░ ░░░░ exercise to ░░░░ that, ░░░░ $n$ positive, $n \;|\; (b - a)$ if ░░░░ only if $a$ and $b$ have the same remainder ░░░░ ░░░░ ░░░░ $n$: this ░░░░ makes it particularly easy to ░░░░ ░░░░ the relation ░░░░ in ░░░░ $2.1$ ░░░░ ░░░░ _equivalence relation_. ░░░░ $a \equiv b \pmod{n}$; ░░░░ by ░░░░ there exists ░░░░ ░░░░ $k$ ░░░░ that $b - a = nk$░░░░ ░░░░ $b \equiv c \pmod{n}$░░░░ then by definition there ░░░░ an ░░░░ $\ell$ ░░░░ ░░░░ $c - b = n\ell$. ░░░░ then,

$$
c - a = (c - b) + (b - a) = nk + n\ell = n(k + \ell)
$$
and ░░░░ ░░░░ ░░░░ $c - a \in n\Z$░░░░ ░░░░ ░░░░ $a \equiv c \pmod{n}$.

░░░░ ░░░░ ░░░░ ░░░░ one ░░░░ relation ░░░░ $\Z$ ░░░░ ░░░░ $n \geq 0$░░░░ ░░░░ can consider the corresponding equivalence classes. ░░░░ any nonnegative ░░░░ $n$ and any ░░░░ $a$, ░░░░ denote by $[a]_n$ ░░░░ equivalence ░░░░ of $a$ with ░░░░ ░░░░ the ░░░░ of ░░░░ ░░░░ $n$░░░░ ░░░░

$$
\begin{align*}
[a]_n &= \{b \in \Z \mid a \equiv b \pmod{n}\} = \{b \in \Z \mid n \text{ divides } (b - a)\} \\ \\[0.1pt]
&= \{b = a + nk \mid k \in \Z\}
\end{align*}
$$

We ░░░░ $[a]_n$ the 'congruence class' of $a$ mod $n$, and we say that $a$ is a 'representative' of $[a]_n$. An alternative notation ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $a + n\Z$, ░░░░ is a shorthand ░░░░ ░░░░ last ░░░░ of $[a]_n$ given above.

░░░░ ░░░░ general facts ░░░░ ░░░░ relations ░░░░ ░░░░ recalled ░░░░ §$2.1$░░░░ we know ░░░░ two ░░░░ ░░░░ $[a]_n$, $[b]_n$ for ░░░░ ░░░░ $n$ ░░░░ either ░░░░ ░░░░ ░░░░ disjoint. In fact, we ░░░░ that

$$
[a]_n = [b]_n \iff a \equiv b \pmod{n}
$$

░░░░ whatever information ░░░░ ░░░░ by ░░░░ congruence ░░░░ ░░░░ ░░░░ ░░░░ packaged in ░░░░ equivalence classes (that is, in ░░░░ ░░░░ classes). ░░░░ ░░░░ not need to ░░░░ any ░░░░ to verify ░░░░ since ░░░░ ░░░░ something ░░░░ is ░░░░ for every equivalence ░░░░

Congruence classes ░░░░ a ░░░░ $n$ form ░░░░ _partition_ of $\Z$░░░░ ░░░░ is, ░░░░ each ░░░░ ░░░░ ░░░░ a ░░░░ of ░░░░ ░░░░ $\Z$ with ░░░░ property ░░░░ ░░░░ ░░░░ ░░░░ $\Z$ ░░░░ ░░░░ exactly one ░░░░ ░░░░ ░░░░ $-4$ and $5$ ░░░░ not congruent ░░░░ $2$, ░░░░ ░░░░ they ░░░░ ░░░░ different congruence classes. These equalities are _really_ equalities: $[-4]_3$ and $[2]_3$ are ░░░░ ░░░░ ░░░░ ░░░░ subset ░░░░ $\Z$; this ░░░░ ░░░░ ░░░░ to ░░░░ several different ░░░░

Now ░░░░ ░░░░ ░░░░ an equivalence relation on ░░░░ set, ░░░░ can ░░░░ the ░░░░ partition as a set in ░░░░ ░░░░ ░░░░ Its ░░░░ ░░░░ the ░░░░ classes — ░░░░ our case, ░░░░ subsets $[a]_n$ ░░░░ $\Z$. ░░░░ ░░░░ ░░░░ powerful ░░░░ we consider a whole subset ░░░░ $\Z$ as ░░░░ ░░░░ element of a ░░░░ set.

**_Definition $2.5$_:** _For any integer $n \geq 0$ we denote by $\Z/n\Z$ the set of congruence classes mod $n$ in $\Z$. This set is called the 'quotient of $\Z$ modulo $n\Z$', or simply '$\Z$ mod $n$'._

░░░░ popular ░░░░ ░░░░ $\Z/\equiv_n$, $\Z/(n)$, $\Z/n$, or $\Z_n$░░░░ this latter ░░░░ used particularly ░░░░ ░░░░ ░░░░ is ░░░░ pity because ░░░░ notation means something else in ░░░░ ░░░░ context ($\Z_p$ ░░░░ the set ░░░░ ░░░░$p$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ else entirely). We ░░░░ ░░░░ use ░░░░ ░░░░ $\Z/n\Z$.

Summarizing, the ░░░░ of $\Z/n\Z$ ░░░░ ░░░░ ░░░░ ░░░░ $[a]_n$, for some integer $a$. Please get used to the fact that $[a]_n$ is _not_ itself an ░░░░ ░░░░ is, we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of $\Z/n\Z$ as ░░░░ subset of $\Z$. The ░░░░ $\Z$ ░░░░ $\Z/n\Z$ are closely related, ░░░░ ░░░░ the ░░░░ We ░░░░ come ░░░░ to ░░░░ (Ex $4.19$).

░░░░ _element_ of $\Z/n\Z$ may ░░░░ ░░░░ as ░░░░ ░░░░ ░░░░ $\Z$; but the _set_ $\Z/n\Z$ ░░░░ such elements ░░░░ not be viewed as ░░░░ ░░░░ of $\Z$░░░░ The element $[2]_3$ of the set $\Z/3\Z$ is not a fancy new name for the number $2$: indeed, the number $2$ is not the same as the number $5$, and yet $[2]_3$ ░░░░ $[5]_3$ really _are_ ░░░░ same element of $\Z/3\Z$, ░░░░ they are ░░░░ same subset ░░░░ $\Z$░░░░

Thinking of an entity such ░░░░ $[5]_3$ ░░░░ as a subset ░░░░ $\Z$ and ░░░░ an element ░░░░ the ░░░░ $\Z/3\Z$ ░░░░ a ░░░░ ░░░░ ░░░░ mathematical ░░░░ we should have gotten ░░░░ ░░░░ this ░░░░ idea ░░░░ ░░░░ first encounter ░░░░ ░░░░ relations. In any case, ░░░░ now have ░░░░ brand ░░░░ set $\Z/n\Z$ for every nonnegative integer $n$░░░░ ░░░░ we ░░░░ to study ░░░░

The first ░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ big' $\Z/n\Z$ ░░░░ For example, we saw in ░░░░ $2.3$ ░░░░ $2.4$ that $\Z/2\Z$ consists ░░░░ _two_ ░░░░ which we could ░░░░ ░░░░ $[0]_2$ and $[1]_2$░░░░ and that $\Z/3\Z$ consists of _three_ ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ $[0]_3$, $[1]_3$░░░░ and $[2]_3$ (or also by $[-6]_3$, $[7]_3$, and $[5]_3$ if ░░░░ felt like ░░░░ this is the ░░░░ ░░░░ Let's summarize ░░░░ a ░░░░ something that should be ░░░░ ░░░░ ░░░░ ░░░░ Recall from ░░░░$1.2$ ░░░░ $\Z$ is endowed ░░░░ a _division with remainder_░░░░ if $n > 0$, we can divide ░░░░ integer $a$ ░░░░ $n$, ░░░░ ░░░░ remainder $r$ ░░░░ ░░░░ $0 \leq r < n$░░░░

**_Lemma $2.6$_:** _Let $n$ be a positive integer._

- _Let $a \in \Z$, and let $r$ be the remainder after division of $a$ by $n$. Then $[a]_n = [r]_n$._  
░░░░ _The classes $[0]_n, [1]_n, \dots, [n - 1]_n$ are all ░░░░

_Proof_░░░░

First ░░░░ If $a = nq + r$, ░░░░ $a - r = nq \in n\Z$, ░░░░ $a \equiv r \pmod{n}$░░░░ and ░░░░ ░░░░ $[a]_n = [r]_n$ ░░░░ definition ░░░░ ░░░░ ░░░░

Second ░░░░ Let's ░░░░ ░░░░ if $0 \leq r_1 < n$ and $0 \leq r_2 < n$, ░░░░ $[r_1]_n = [r_2]_n$░░░░ then $r_1 = r_2$: this is ░░░░ spelled-out ░░░░ ░░░░ ░░░░ statement. If $0 \leq r_1 < n$ and $0 \leq r_2 < n$, then $0 \leq |r_2 - r_1| < n$. ░░░░ now $[r_1]_n = [r_2]_n$░░░░ ░░░░ $n \mid (r_2 - r_1)$░░░░

If $|r_2 - r_1| \neq 0$░░░░ this ░░░░ $n \leq |r_2 - r_1| < n$░░░░ a contradiction. ░░░░ ░░░░ ░░░░ ░░░░ $1.2$ ░░░░ This ░░░░ shows that ░░░░ $|r_2 - r_1| = 0$░░░░ that ░░░░ $r_1 = r_2$ as needed. $\blacksquare$

The ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ immediate consequence.

**_Theorem $2.7$_:** _For all positive integers $n$, the set $\Z/n\Z$ consists of exactly $n$ elements:_

$$
[0]_n, [1]_n, \dots, [n - 1]_n.
$$

_Proof_░░░░  

░░░░ the ░░░░ ░░░░ ░░░░ the lemma every class agrees with one of these, ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ of $\Z/n\Z$ ░░░░ ░░░░ different ░░░░ ░░░░ other. $\blacksquare$

 The ░░░░ $[0]_n, [1]_n, \dots, [n - 1]_n$, while reasonable looking, is only one of infinitely many viable choices. We can label the elements of $\Z/5\Z$ by $[160]_5$░░░░ $[-324]_5$, $[175]_5$░░░░ $[48]_5$, and $[-4329349871]_5$ if we ░░░░ ░░░░ it; ░░░░ ░░░░ ░░░░ is _precisely_ ░░░░ ░░░░ ░░░░ as ░░░░ more conventional-looking $[0]_5, [1]_5, [2]_5, [3]_5$░░░░ ░░░░ $[4]_5$░░░░ The ░░░░ choice ░░░░ ░░░░ ░░░░ advantage of ░░░░ memorable, ░░░░ ░░░░ is all ░░░░ is ░░░░ ░░░░

░░░░ an ░░░░ example, there ░░░░ _only one_ ░░░░ ░░░░ $\Z/1\Z$, which ░░░░ ░░░░ ░░░░ $[a]_1$ for any integer $a$ whatsoever. There is absolutely no way to distinguish $[0]_1$ ░░░░ $[1]_1$ (or $[-23493851298371298319238983459485945874349857943857397498]_1$).

**_Remark $2.8$_:** If $n = 0$░░░░ ░░░░ can still ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ i.e., of $\Z/0\Z$░░░░ In this case ░░░░ ░░░░ ░░░░ ░░░░ just ░░░░ (Remark $2.2$), so ░░░░ equivalence class $[a]_0$ of an integer $a$ consists of the single element $a$: $[a]_0 = \{a\}$. ░░░░ ░░░░ set $\Z/0\Z$ is just a copy of $\Z$ itself. ░░░░ ░░░░ sense $\Z$ may ░░░░ viewed as one of the ░░░░ $\Z/n\Z$, that ░░░░ ░░░░ special ░░░░ $n = 0$. For $n \neq 0$, ░░░░ set $\Z/n\Z$ ░░░░ _finite_, as ░░░░ proved ░░░░ Theorem $2.7$░░░░

#### Algebra in $\Z/n\Z$

░░░░ ░░░░ a text on _algebra_, so ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ algebra ░░░░ ░░░░ ░░░░ ░░░░ $\Z/n\Z$. ░░░░ ░░░░ ░░░░ this by ░░░░ of ░░░░ compatibilities ░░░░ the congruence relation ░░░░ respect to the ordinary operations $+$, $\cdot$ ░░░░ $\Z$.

░░░░ first question we ░░░░ ░░░░ is ░░░░ big' $\Z/n\Z$ is. For example, we ░░░░ ░░░░ ░░░░ $2.3$ and $2.4$ ░░░░ $\Z/2\Z$ ░░░░ ░░░░ _two_ elements, which we could denote ░░░░ $[0]_2$ and $[1]_2$, and that $\Z/3\Z$ consists of _three_ elements, ░░░░ ░░░░ could ░░░░ by $[0]_3$, $[1]_3$, ░░░░ $[2]_3$ (or also by $[-6]_3$░░░░ $[7]_3$, and $[5]_3$ if we felt like ░░░░ this is ░░░░ same list). Let's ░░░░ ░░░░ a statement ░░░░ that ░░░░ be ░░░░ at ░░░░ ░░░░ ░░░░ from §$1.2$ that $\Z$ is ░░░░ with ░░░░ _division with remainder_: if $n > 0$░░░░ ░░░░ can divide ░░░░ integer $a$ ░░░░ $n$░░░░ ░░░░ ░░░░ ░░░░ $r$ ░░░░ ░░░░ $0 \leq r < n$.

**_Lemma $2.9$_:** _Let $n \geq 0$ be an integer, and let $a, a', b, b'$ be integers._

- _(i) If $a \equiv a' \pmod{n}$ and $b \equiv b' \pmod{n}$,_  

$$a + b \equiv a' + b' \pmod{n}$$

- _(ii)_  

$$a \cdot b \equiv a' \cdot b' \pmod{n}$$

_Proof_░░░░

Since $a \equiv a' \pmod{n}$ ░░░░ $b \equiv b' \pmod{n}$░░░░ there exist integers $k$ and $\ell$ such ░░░░

$$
a' - a = nk, \quad b' - b = n\ell.
$$

Then

$$
(a' + b') - (a + b) = a' - a + b' - b = nk + n\ell = n(k + \ell).
$$

░░░░ ░░░░ that $n \mid (a' + b') - (a + b)$░░░░ that is, $a + b \equiv a' + b' \pmod{n}$░░░░ ░░░░ ░░░░ (i).

With the same ░░░░

$$
a'b' - ab = (a + nk)(b + n\ell) - ab = ab + na\ell + nkb + n^2k\ell - ab
$$

$$
= n(a\ell + bk + nk\ell)
$$

showing ░░░░ $n \mid a'b' - ab$░░░░ ░░░░ is, $a \cdot b \equiv a' \cdot b' \pmod{n}$░░░░ ░░░░ ░░░░ $\blacksquare$

░░░░ with ░░░░ $2.9$, we ░░░░ make ░░░░ ░░░░ ░░░░ ░░░░ define ░░░░ notion of ░░░░ and of 'multiplication' on the set $\Z/n\Z$, ░░░░ every $n$░░░░

**_Definition $2.10$_:** _Let $n \geq 0$ be an integer, and let $[a]_n$, $[b]_n$ be elements of $\Z/n\Z$. We define_

$$
\begin{align*}
[a]_n + [b]_n &:= [a + b]_n, \\ \\[0.1pt]
[a]_n \cdot [b]_n &:= [a \cdot b]_n.
\end{align*}
$$

_(Note: The symbols $+$, $\cdot$ on the right-hand side are the familiar addition and multiplication in $\Z$; the symbols $+$, $\cdot$ on the left-hand side are the new operations we are defining in $\Z/n\Z$.)_

This ░░░░ ░░░░ ░░░░ reasonable, ░░░░ there is an ░░░░ subtlety, which is worth noticing. ░░░░ $n = 2$ ░░░░ ░░░░ with a ░░░░ ░░░░ Then according $2.10$ we have ░░░░ ░░░░

$$
[0]_2 + [1]_2 = [1]_2.
$$

░░░░ ░░░░ $[0]_2$, $[1]_2$ are ░░░░ ░░░░ subsets in ░░░░ partition determined ░░░░ the ░░░░ ░░░░ ░░░░ $2$░░░░ as ░░░░ saw ░░░░ Ex $2.3$░░░░

$$
\begin{align*}
[0]_2 &= \{\dots, -6, -4, -2, 0, 2, 4, 6, \dots\} = \{0 + 2k \mid k \in \Z\}, \\ \\[0.1pt]
[1]_2 &= \{\dots, -5, -3, -1, 1, 3, 5, 7, \dots\} = \{1 + 2k \mid k \in \Z\}.
\end{align*}
$$

░░░░ ░░░░ decide to call the ░░░░ class $[0]_1$ or $[-2]_1$ ░░░░ ░░░░ the ░░░░ ░░░░ an ░░░░ depending ░░░░ ░░░░ ░░░░ the operation ░░░░ depend ░░░░ the _class_ ░░░░ not on ░░░░ ░░░░ ░░░░ the ░░░░ on ░░░░ we decide ░░░░ ░░░░ the ░░░░ In ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ should ░░░░ depend ░░░░ ░░░░ ░░░░ ░░░░ chooses ░░░░ order to apply ░░░░

░░░░ we see in ░░░░ sense Definition $2.10$ ░░░░ subtle. ░░░░ ░░░░ ░░░░ ░░░░ problem ░░░░ ░░░░ ░░░░ ░░░░ equivalence ░░░░ does _not_ ░░░░ Definition $2.10$: the ░░░░ ░░░░ $+$, $\cdot$ in $\Z/n\Z$ ░░░░ ░░░░ ░░░░ definition relies ░░░░ ░░░░ ░░░░ being ░░░░

Is this obvious? Nearly ░░░░ but only because ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ some ░░░░ ░░░░ ░░░░ Lemma $2.9$░░░░ we'll formalize the ░░░░ ░░░░ ░░░░

**_Claim $2.12$_:** _The operations defined in Definition $2.10$ do not depend on the choice of the representatives. That is: if $n \geq 0$ is an integer, and $[a]_n = [a']_n$, $[b]_n = [b']_n$, then_

░░░░ _(i)_ $[a]_n + [b]_n = [a' + b']_n,$

- _(ii)_ $[a]_n \cdot [b]_n = [a' \cdot b']_n.$

_Proof_:  

This ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ less than a restatement ░░░░ ░░░░ $2.9$░░░░ $\blacksquare$

░░░░ preceding ░░░░ may ░░░░ exceedingly ░░░░ ░░░░ the issue ░░░░ ░░░░ a notion is ░░░░ is ░░░░ ░░░░ ░░░░ ░░░░ easy ░░░░ become ░░░░ little ░░░░ on this point, ░░░░ can ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ What ░░░░ hopefully understand ░░░░ is that ░░░░ ░░░░ of ░░░░ mod $n$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ they ░░░░ compatible with ░░░░ ordinary operations ░░░░ integers in ░░░░ ░░░░ way that ░░░░ allow ░░░░ ░░░░ define ░░░░ operations ░░░░ the corresponding ░░░░ ░░░░ As ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ expect this from an ░░░░ ░░░░ ░░░░ ░░░░ 

░░░░ ░░░░ ░░░░ whether ░░░░ notion ░░░░ ░░░░ is very ░░░░ It is easy ░░░░ become a ░░░░ sloppy ░░░░ ░░░░ ░░░░ which ░░░░ lead ░░░░ quickly ░░░░ nonsensical statements. What we hopefully ░░░░ stand now ░░░░ that ░░░░ relations ░░░░ ‘congruence mod n’ are very ░░░░ because ░░░░ ░░░░ compatible with the ordinary operations ░░░░ integers in such a ░░░░ ░░░░ they ░░░░ us to ░░░░ analogous operations among ░░░░ ░░░░ congruence classes. ░░░░ we ░░░░ ░░░░ one should ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ equivalence relation. ░░░░ is ░░░░ ░░░░ why ░░░░ focus ░░░░ ░░░░ ░░░░ ░░░░ relations introduced in ░░░░ $2.1$░░░░

#### Properties of the Operations $+$, $\cdot$ on $\Z/n\Z$

Let's ░░░░ where we stand. ░░░░ ░░░░ $1$ ░░░░ looked ░░░░ ░░░░ at the ░░░░ ░░░░ of $\Z$ ░░░░ with ░░░░ ░░░░ ░░░░ $+$ ░░░░ $\cdot$░░░░ In ░░░░$2.2$ we defined new structures $\Z/n\Z$, ░░░░ ░░░░ ░░░░ nonnegative integer $n$░░░░ ░░░░ ░░░░ §$2.3$ ░░░░ ░░░░ these ░░░░ with ░░░░ $+$ ░░░░ $\cdot$. By ░░░░ way, we refer ░░░░ these ░░░░ ░░░░ ░░░░ still calling ░░░░ $\Z$, $\Z/n\Z$░░░░ ░░░░ we ░░░░ ░░░░ these ░░░░ _along with_ the natural ░░░░ $+$, $\cdot$ we ░░░░ ░░░░ ░░░░ we need ░░░░ emphasize ░░░░ ░░░░ we may use ░░░░ ░░░░ $(\Z/n\Z, +, \cdot)$░░░░

We ░░░░ ░░░░ that $\Z/0\Z$ ░░░░ 'a ░░░░ of $\Z$░░░░ (Remark $2.8$), so we ░░░░ ░░░░ $\Z/n\Z$ for $n > 0$░░░░ ░░░░ gadgets ░░░░ ░░░░ different, ░░░░ ░░░░ ░░░░ from $\Z$. The ░░░░ ░░░░ integers $\Z$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that ░░░░ ░░░░ $\Z/n\Z$ ░░░░ of ░░░░ $n$ elements ░░░░ we ░░░░ ░░░░ $[0]_n, \dots, [n - 1]_n$; this ░░░░ part of the ░░░░ ░░░░ ░░░░ $2.7$░░░░

It's worth ░░░░ that $a$ really is $[a]_4$░░░░ For ░░░░ ░░░░ ░░░░ in the ░░░░ ░░░░ of the last ░░░░ ░░░░ ░░░░ ░░░░ table is $1$░░░░ ░░░░ that ░░░░$3 \cdot 3 = 1$░░░░ ░░░░ are  to ░░░░ ░░░░ as

$$
[3]_4 \cdot [3]_4 = [1]_4
$$

which ░░░░ course is true: $3 \cdot 3 = 9$, ░░░░ $[3]_4 \cdot [3]_4 = [9]_4 = [1]_4$ by ░░░░ ░░░░ of ░░░░ of congruence classes (Definition $2.10$░░░░

░░░░ is ░░░░ ░░░░ ░░░░ ░░░░ there are ░░░░ of ░░░░ ░░░░ ░░░░ these different sets ░░░░ seem qualitatively ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ $\Z$░░░░

$$
ab = 0 \implies a = 0 \text{ or } b = 0.
$$

This property ░░░░ also true in, ░░░░ example, $\Z/3\Z$░░░░ ░░░░ ░░░░ ░░░░ of $[0]_3$ as $0$. ░░░░ ░░░░ could ░░░░ all products $ab$ ░░░░ $a \neq 0$ ░░░░ $b \neq 0$:

$$
[1]_3 \cdot [1]_3 = [1]_3, \quad [1]_3 \cdot [2]_3 = [2]_3, \quad [2]_3 \cdot [1]_3 = [2]_3, \quad [2]_3 \cdot [2]_3 = [1]_3.
$$

░░░░ ░░░░ just does ░░░░ happen that $[0]_3$ ever appears as the product of two nonzero elements. So from the point of view of this property, $\Z$ and $\Z/3\Z$ are similar. We say, to anticipate a definition we will officially introduce soon (Definition $3.23$), that $\Z$ and $\Z/3\Z$ are both 'integral domains'. But this property is _not_ ░░░░ in all $\Z/n\Z$░░░░ for example,

$$
[2]_4 \cdot [2]_4 = [4]_4 = [0]_4.
$$

even though $[2]_4 \neq [0]_4$░░░░ In ░░░░ ░░░░ the ░░░░ drawn above, ░░░░ just observing ░░░░ there ░░░░ a $0$ in the middle of the second ░░░░ ░░░░ from the first ░░░░ ░░░░ ░░░░ first ░░░░ Is ░░░░ a rare phenomenon? Not ░░░░ ░░░░ ░░░░ $[2]_6 \cdot [3]_6 = [6]_6 = [0]_6$, $[3]_{12} \cdot [4]_{12} = [0]_{12}$, ░░░░ We ░░░░ ░░░░ ░░░░ $\Z/4\Z$, $\Z/6\Z$░░░░ $\Z/12\Z$ are not 'integral domains'. It ░░░░ ░░░░ easy to find ░░░░ more examples ░░░░ this kind. ░░░░ the end ░░░░ ░░░░ section, we will ░░░░ very thoroughly what ░░░░ ░░░░ on.

░░░░ ░░░░ ░░░░ hand, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ operations which ░░░░ ░░░░ ░░░░ $\Z$ ░░░░ for ░░░░ $\Z/n\Z$░░░░ First ░░░░ all, $a + b \in \Z$ and $a \cdot b \in \Z$ for ░░░░ $a, b \in \Z$ (that is, $\Z$ ░░░░ 'closed' ░░░░ ░░░░ ░░░░ ░░░░ operations); ░░░░

$$
\begin{align*}
\forall a, b, c &\quad (a + b) + c = a + (b + c), \\ \\[0.1pt]
\forall a &\quad a + 0 = 0 + a = a, \\ \\[0.1pt]
\forall a \; \exists a' &\quad a + a' = a' + a = 0, \\ \\[0.1pt]
\forall a, b &\quad a + b = b + a, \\ \\[0.1pt]
\forall a, b, c &\quad (a \cdot b) \cdot c = a \cdot (b \cdot c), \\ \\[0.1pt]
\forall a &\quad a \cdot 1 = 1 \cdot a = a, \\ \\[0.1pt]
\forall a, b, c &\quad a \cdot (b + c) = a \cdot b + a \cdot c, \ (a + b) \cdot c = a \cdot c + b \cdot c, \\ \\[0.1pt] \\ \\[0.1pt]
\end{align*}
$$
and ░░░░

$$
\forall a, b \quad a \cdot b = b \cdot a.
$$
In the third property, ░░░░ ░░░░ $a'$ ░░░░ ░░░░ ░░░░ usually call $-a$. ░░░░ of the ░░░░ ░░░░ in $(2.3)$ have ░░░░ ░░░░ ░░░░ ░░░░ first ░░░░ is called ░░░░ ░░░░ ░░░░ ░░░░ second is the ░░░░ of ░░░░ additive ░░░░ ░░░░ so ░░░░ ░░░░ will ░░░░ back to these ░░░░ soon, in the appropriately general ░░░░ ░░░░$3.1$). ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ following,

**_Theorem $2.13$_:** _For every positive integer $n$, all of these properties hold for $\Z/n\Z$ with $0 = [0]_n$ ░░░░ $1 = [1]_n$._

**_Remark $2.14$_:** In view of ░░░░ ░░░░ will often ░░░░ $0$ ░░░░ $[0]_n$ and $1$ for $[1]_n$░░░░ This ░░░░ potentially confusing, ░░░░ the ░░░░ $0$ ░░░░ ░░░░$0 = [0]_n$░░░░ ░░░░ ░░░░ things: the first is an ░░░░ of the ░░░░ we now call $0$ ░░░░ $\Z/n\Z$░░░░ the ░░░░ is the integer $0$.

░░░░ the terminology we will introduce in ░░░░$3.1$, Theorem $2.13$ simply ░░░░ us ░░░░ $\Z/n\Z$ is ░░░░ 'ring', and ░░░░ fact ░░░░ 'commutative ░░░░ ░░░░ theorem ░░░░ itself! ░░░░ $2.10$ prescribes ░░░░ $[a]_n + [b]_n$ ░░░░ $[a]_n \cdot [b]_n$ ░░░░ ░░░░ of $\Z/n\Z$, so ░░░░ is ░░░░ satisfied. Every single other item in the ░░░░ can be easily ░░░░ to ░░░░ ░░░░ ░░░░ in $\Z$. For example, if ░░░░ ░░░░ ░░░░ prove the 'distributivity' ░░░░ ░░░░ $\Z/n\Z$,

$$
\forall a, b, c \in \Z/n\Z \quad a \cdot (b + c) = a \cdot b + a \cdot c,
$$

░░░░ ░░░░ argue as ░░░░ For ░░░░ $a, b, c \in \Z/n\Z$, ░░░░ are ░░░░ $k, \ell, m \in \Z$ ░░░░ ░░░░

$$
a = [k]_n, \quad b = [\ell]_n, \quad c = [m]_n.
$$

Then using ░░░░ $2.10$ ░░░░ have

$$
\begin{align*}
a \cdot (b + c) &= [k]_n \cdot ([\ell]_n + [m]_n) \\ \\[0.1pt]
&= [k]_n \cdot [\ell + m]_n \\ \\[0.1pt]
&= [k \cdot (\ell + m)]_n \\ \\[0.1pt]
&\overset{!}{=} [k \cdot \ell + k \cdot m]_n \\ \\[0.1pt]
&= [k]_n \cdot [\ell]_n + [k]_n \cdot [m]_n \\ \\[0.1pt]
&= a \cdot b + a \cdot c.
\end{align*}
$$
where the ░░░░ $\overset{!}{=}$ ░░░░ ░░░░ ░░░░ same ░░░░ ░░░░ ░░░░ in $\Z$░░░░ Every ░░░░ ░░░░ the list can be proved to hold in $\Z/n\Z$ by ░░░░ the same ░░░░ ░░░░ long list given above (without ░░░░ ░░░░ lone item) will ░░░░ ░░░░ ░░░░ point to ░░░░ _rings_. The ░░░░ item is separated from ░░░░ ░░░░ ░░░░ ░░░░ is an ░░░░ property ('commutativity of multiplication') which is not ░░░░ ░░░░ the ░░░░ ░░░░ ring. ░░░░ it holds, ░░░░ ░░░░ that the ░░░░ is _commutative_. Therefore, $\Z$ and ░░░░ $\Z/n\Z$ are 'commutative rings'. ░░░░ ░░░░ ░░░░ ░░░░ examples: ░░░░ sets $\mathbb{Q}$, $\R$, and $\mathbb{C}$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ _rational_, _real_, and _complex_ ░░░░ along ░░░░ the ordinary operations $+$ ░░░░ $\cdot$) ░░░░ satisfy the properties of ░░░░ rings'.

░░░░ will see that many other properties can be deduced ░░░░ the ░░░░ listed ░░░░ $(2.3)$, and all ░░░░ properties ░░░░ ░░░░ for ░░░░ rings. ░░░░ ░░░░ ░░░░ ░░░░ will ░░░░ with $\Z/n\Z$, ░░░░ ░░░░ ░░░░ ░░░░ features ░░░░ ░░░░ integer $n$ ░░░░ magically ░░░░ in properties ░░░░ ░░░░ ░░░░ $\Z/n\Z$░░░░

I ░░░░ already ░░░░ ░░░░ that ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\Z$░░░░ that ░░░░ the ░░░░

$$
ab = 0 \implies a = 0 \text{ or } b = 0,
$$

░░░░ in $\Z/n\Z$ for some, ░░░░ ░░░░ ░░░░ $n$░░░░ For ░░░░ $[2]_{10} \cdot [5]_{10} = [10]_{10} = [0]_{10}$, ░░░░ though $[2]_{10} \neq [0]_{10}$ ░░░░ $[5]_{10} \neq [0]_{10}$░░░░

On the other hand, there are 'nice' properties that hold ░░░░ ░░░░ $\Z/n\Z$ and ░░░░ not ░░░░ for $\Z$. ░░░░ ░░░░ have ░░░░ that the ░░░░ listed ░░░░ $(2.3)$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

$$
\forall a \; \exists a' \quad a + a' = a' + a = 0.
$$

For ░░░░ the additive inverse of $2$ is $-2$░░░░ since $2 + (-2) = (-2) + 2 = 0$. ░░░░ ░░░░ also have noticed ░░░░ I _did not_ list a property ░░░░ ░░░░ existence of ░░░░ ░░░░ which ░░░░ look like ░░░░

$$
\forall a \; \exists a' \quad a \cdot a' = a' \cdot a = 1. \tag{2.4}
$$
It ░░░░ ░░░░ ░░░░ require $a$ ░░░░ ░░░░ equal zero, since ░░░░$1/0$' does not exist in ░░░░ ░░░░ context. However, ░░░░ with ░░░░ natural ░░░░ $(2.4)$ ░░░░ simply ░░░░ ░░░░ ░░░░ $\Z$░░░░ for example, $2 \neq 0$ and yet there is no integer $n$ ░░░░ ░░░░ $2n = 1$░░░░ By contrast, $(2.4)$ is ░░░░ ░░░░ ░░░░ allow 'fractions': if $\frac{p}{q}$ ░░░░ a ░░░░ number ░░░░ is, $p, q$ ░░░░ ░░░░ ░░░░ $q \neq 0$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\frac{q}{p}$ is its multiplicative inverse: $\frac{p}{q} \cdot \frac{q}{p} = 1$. ░░░░ $\Z$ ░░░░ _not_ ░░░░ a multiplicative ░░░░ in $\Z$, ░░░░ ░░░░ does in $\mathbb{Q}$ (that ░░░░ $\frac{1}{2}$░░░░ ░░░░ ░░░░ $(2.4)$ is ░░░░ ░░░░ $\mathbb{Q}$░░░░ but it is not ░░░░ $\Z$░░░░

░░░░ ░░░░ $\Z/n\Z$░░░░ It is easy ░░░░ ░░░░ ░░░░ $(2.4)$ holds ░░░░ ░░░░ a multiplication ░░░░ this ░░░░ just ░░░░ that ░░░░ row ░░░░ the table, ░░░░ ░░░░ exception of ░░░░ ░░░░ ░░░░ to $0$, ░░░░ ░░░░ a $1$. (Why?) For ░░░░ $(2.4)$ ░░░░ _not_ hold in $\Z/4\Z$░░░░ look back ░░░░ ░░░░ ░░░░ ░░░░ and ░░░░ ░░░░ ░░░░ is no $1$ in the ░░░░ corresponding to $2$.

░░░░ ░░░░ when a ░░░░ satisfying ░░░░ ░░░░ listed in $(2.3)$, including ░░░░ commutativity of ░░░░ ░░░░ satisfies $(2.4)$░░░░ ░░░░ say ░░░░ ░░░░ ░░░░ ░░░░ ░░░░_field_░░░░ (We will ░░░░ ░░░░ ░░░░ official definition in ░░░░$3.3$.) Thus, $\Z$ and $\Z/4\Z$ are not fields, while $\Z/5\Z$ is a ░░░░ ░░░░ the reader can ░░░░ that $\mathbb{Q}$, $\mathbb{R}$, and $\mathbb{C}$ ░░░░ ░░░░ ░░░░

It ░░░░ seem ░░░░ $\Z/n\Z$ satisfies $(2.4)$ ░░░░ some values of $n$, ░░░░ ░░░░ for others. Is ░░░░ ░░░░ ░░░░ random fact ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is there a method to ░░░░ madness? If ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ personal intuition ░░░░ ░░░░ is going ░░░░ ░░░░ away these notes ░░░░ ░░░░ the multiplication tables ░░░░ $\Z/n\Z$ for several ░░░░ ░░░░ $n$░░░░ ░░░░ $n = 2, \dots, 10$░░░░ List the numbers $n$ ░░░░ ░░░░ $(2.4)$ ░░░░ satisfied, ░░░░ ░░░░ ░░░░ you can detect ░░░░ pattern.

**_Theorem $2.15$_:** _Let $n > 1$. Then the following assertions are equivalent:_

░░░░ _(i) The integer $n$ is prime._

░░░░ _(ii) In $\Z/n\Z$, property $(2.2)$ is satisfied: $\forall a, b$ $ab = 0 \implies a = 0$ or $b = 0$._

░░░░ _(iii) In $\Z/n\Z$, property $(2.4)$ is satisfied: if $a \neq 0$, then $a$ has a multiplicative inverse._

_Proof_:

░░░░ are ░░░░ ░░░░ argue that $(i) \implies (iii) \implies (ii) \implies (i)$░░░░

**$(i) \implies (iii)$:**  
Assume ░░░░ $n > 1$ ░░░░ a prime ░░░░ irreducible) ░░░░ ░░░░ let $a \in \Z/p\Z$░░░░ $a \neq 0$. ░░░░ ░░░░ ░░░░ prove ░░░░ $a$ ░░░░ ░░░░ ░░░░ inverse ░░░░ $\Z/p\Z$░░░░

░░░░ $\ell \in \Z$ ░░░░ ░░░░ representative for $a$: i.e. $[a]_p = [\ell]_p$░░░░ ░░░░ $a \neq 0$░░░░ ░░░░ have $[\ell]_p \neq [0]_p$, that is, $p \nmid \ell$░░░░ By ░░░░ $1.18$, ░░░░ ░░░░ ░░░░ $\gcd(p, \ell) = 1$; therefore, by Theorem $1.8$░░░░ ░░░░ ░░░░ integers $q$ ░░░░ $k$ ░░░░ ░░░░

$$
1 = q p + k \ell.
$$

Now 'read this ░░░░ ░░░░ $p$': ░░░░ $1 = q p + k \ell$░░░░ then $[1]_p = [q p + k \ell]_p$ and Definition $2.10$ ░░░░

$$
[1]_p = [q p]_p + [k \ell]_p = [k]_p \cdot [\ell]_p,
$$

since $[q p]_p = [0]_p$░░░░ as $p q$ is a ░░░░ ░░░░ $p$░░░░ ░░░░ $a' = [k]_p$░░░░ we ░░░░ that $a' \cdot a = 1$ ░░░░ $\Z/p\Z$ ░░░░ $a a' = 1$ ░░░░ ░░░░ ░░░░ ░░░░ $a$ does have ░░░░ ░░░░ ░░░░ as ░░░░ ░░░░ to verify.

**$(iii) \implies (ii)$:**  
Assume ░░░░ ░░░░ nonzero $a \in \Z/n\Z$ has a ░░░░ ░░░░ We ░░░░ ░░░░ verify ░░░░ ░░░░ $a b = 0$ in $\Z/n\Z$░░░░ ░░░░ $a = 0$ ░░░░ $b = 0$. ░░░░ $a = 0$, ░░░░ there ░░░░ ░░░░ ░░░░ ░░░░ If $a \neq 0$░░░░ then $a$ has ░░░░ ░░░░ ░░░░ $a'$, ░░░░ ░░░░ ░░░░ then

$$
b = 1 \cdot b = (a' \cdot a) \cdot b = a' \cdot (a \cdot b) = a' \cdot 0 = 0
$$
░░░░ needed.

**$(ii) \implies (i)$:**  
Now ░░░░ ░░░░ ░░░░ ░░░░ $a b = 0 \implies a = 0$ or $b = 0$, ░░░░ ░░░░ $a, b \in \Z/n\Z$, ░░░░ we have ░░░░ prove that $n$ ░░░░ prime. ░░░░ use ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ Definition $1.19$: we ░░░░ ░░░░ that $n$ divides ░░░░ product $k m$░░░░ ░░░░ show that $n$ must divide $k$ ░░░░ $m$. This is ░░░░ ░░░░ we consider the ░░░░ $a = [k]_n$ and $b = [m]_n$░░░░ determined ░░░░ $k$ ░░░░ $m$ in $\Z/n\Z$░░░░ ░░░░

$$
a b = [k]_n[m]_n = [k m]_n = [0]_n = 0,
$$
░░░░ $n$ divides $k m$. ░░░░ our ░░░░ we ░░░░ that $a = 0$ or $b = 0$, that ░░░░

$$
[k]_n = 0 \text{ or } [m]_n = 0,
$$
and ░░░░ ░░░░ ░░░░ ░░░░ $n$ divides $k$ ░░░░ $n$ divides $m$. $\blacksquare$

░░░░ the fancy terminology mentioned ░░░░ ░░░░ ░░░░ we will deal more ░░░░ ░░░░ ░░░░ $3$░░░░ Theorem $2.15$ says ░░░░ $n > 1$ is ░░░░ if and only ░░░░ $\Z/n\Z$ is ░░░░ **integral domain**, and if only if $\Z/n\Z$ is a **field**░░░░

**_Proposition $2.16$_:** _Let $n > 1$ be an integer. Then a class $[k]_n$ has a ░░░░ ░░░░ in $\Z/n\Z$ if and ░░░░ ░░░░ $\gcd(n, k) = 1$░░░░

_Proof_:  

If $\gcd(n, k) = 1$, ░░░░ ░░░░ ░░░░ ░░░░ $q$ ░░░░ $k$ ░░░░ ░░░░ $q n + k \ell = 1$░░░░ It ░░░░ ░░░░

$$
[k]_n[k]_m = [k]_n = [1 - q n]_n = [1]_n.
$$
░░░░ multiplication is ░░░░ in $\Z/n\Z$, this also implies $[k]_n[k]_n = [1]_n$, and the conclusion is that $[k]_n$ ░░░░ a ░░░░ ░░░░ of $[k]_n$░░░░

Conversely, ░░░░ $[k]_n$ has a multiplicative inverse in $\Z/n\Z$, then $\gcd(n, k) = 1$. Indeed, let $[k]_n$ ░░░░ an ░░░░ ░░░░ $[k]_n$, so that $[k]_n[k]_n = [1]_n$; then ░░░░ ░░░░ ░░░░ $q$ such ░░░░ $1 - k q = n$░░░░ ░░░░ that $1 = q n + k \ell$. This ░░░░ that $1$ is ░░░░ linear combination ░░░░ $n$ and $k$░░░░ ░░░░ it ░░░░ ░░░░ $\gcd(n, k) = 1$ by ░░░░ $1.9$. $\blacksquare$

**_Remark $2.17$_:** ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ that $\Z/p\Z$ ░░░░ an ░░░░ domain ░░░░ $p$ is ░░░░ is ░░░░ ░░░░ ░░░░ cancellation' ░░░░ ░░░░ ░░░░ $a \neq 0$ ░░░░ $\Z/p\Z$, ░░░░

$$
a b = a c \implies b = c.
$$
░░░░ ░░░░ $a b = a c$░░░░ then $a(b - c) = 0$░░░░ and if $p$ is ░░░░ ░░░░ ░░░░ that $b - c = 0$ ░░░░ ░░░░ $(ii)$ of the ░░░░ ░░░░ ░░░░ does _not_ hold in general. For example, $[2]_6 \cdot [2]_6 = [4]_6 = [2]_6 \cdot [5]_6$, and yet $[2]_6 \neq [5]_6$░░░░

The ░░░░ ░░░░ ░░░░ $2.15$ is ░░░░ straightforward, but ░░░░ ░░░░ ░░░░ ░░░░ that the proof of _"(iii) $\implies$ (ii)"_ did not ░░░░ use modular ░░░░ (that ░░░░ ░░░░ ░░░░ specifically ░░░░ ░░░░ with $\Z/n\Z$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ formal ░░░░ ░░░░ only ░░░░ on some ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $(2.3)$. ░░░░ indeed, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░ general setting. There ░░░░ two cases ░░░░ are ░░░░ contemplated in ░░░░ $2.15$░░░░ $n = 0$ and $n = 1$░░░░ ░░░░ $n = 0$░░░░ we ░░░░ from Remark $2.8$ ░░░░ $\Z/0\Z$ ░░░░ ░░░░ 'copy' ░░░░ $\Z$░░░░ ░░░░ ░░░░ identification, ░░░░ operations on $\Z/0\Z$ ░░░░ clearly ░░░░ same as ░░░░ ░░░░ $\Z$░░░░ ░░░░ ░░░░ ░░░░ $(2.2)$ holds in $\Z$░░░░ ░░░░ $(2.4)$ ░░░░ ░░░░ in ░░░░ ░░░░ $\Z$ is ░░░░ integral domain ░░░░ ░░░░ ░░░░ not a ░░░░ ░░░░ this ░░░░ ░░░░ equivalence 'field $\iff$ prime' ░░░░ Theorem $2.15$ does not hold.

Looking ░░░░ ░░░░ the proof of ░░░░ theorem, ░░░░ will realize ░░░░ ░░░░ ░░░░ ░░░░ do ░░░░ the ░░░░ ░░░░ $0$ is ░░░░ ░░░░ ░░░░ ░░░░ definition. If $p = 1$, ░░░░ get ░░░░ ░░░░ As noted in §$2.7$, $\Z/1\Z$ ░░░░ of a ░░░░ element, $[0]_1$. In particular, $[0]_1 = [1]_1$; ░░░░ ░░░░ words, $\Z/1\Z$ ░░░░ ░░░░ ░░░░ $(2.4)$░░░░ since the ░░░░ inverse is stated. As a result, this ░░░░ ░░░░ not be considered ░░░░ ░░░░ ░░░░ ░░░░ or a field. These ░░░░ ░░░░ $n$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the more general ░░░░ of ░░░░ types of structures, as ░░░░ will see ░░░░ §$3.3$░░░░

#### Fermat's Little Theorem, and the RSA Encryption System

The ░░░░ ░░░░ learn from Theorem $2.15$ is ░░░░ rather ░░░░ features of ░░░░ number $n$ ░░░░ reflected in ░░░░ ░░░░ ░░░░ the ░░░░ $(\Z/n\Z, +, \cdot)$ ░░░░ we ░░░░ been exploring. The following ░░░░ ░░░░ ░░░░ be ░░░░ as a manifestation ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ usual 'power' notation: so, $[a]_n^e$ stands for the product of $[a]_n$ ░░░░ itself $e$ ░░░░ ░░░░ according to Definition $2.10$ must ░░░░ $[a^e]_n$░░░░

**_Theorem $2.18$ (Fermat's Little Theorem)_**░░░░ _Let $a, p$ be integers, with $p$ positive and prime. Then $[a]_p^p = [a]_p$._

░░░░ other words, ░░░░ $p$ ░░░░ prime, ░░░░ $a^p \equiv a \pmod p$. This is ░░░░ not (necessarily) the case ░░░░ $p$ ░░░░ ░░░░ ░░░░ for example, $2^4 = 16$ is ░░░░ ░░░░ ░░░░ $2$ ░░░░ $4$░░░░ ░░░░ it is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $2.18$ ░░░░ and ░░░░ we will ░░░░ ░░░░ ░░░░ result ░░░░ ░░░░ impressive in ░░░░ given example with ░░░░ ░░░░ ░░░░ ░░░░ take $a = 100$░░░░ $p = 13$: ░░░░ by ░░░░ theorem) no ░░░░ is needed ░░░░ conclude ░░░░

$$
10000000000000000000000000000 \equiv 100 \pmod{13};
$$

░░░░ ░░░░ that, indeed

$$
10000000000000000000000000000 - 100 = 7692307692307692307692300 \cdot 13,
$$

confirming that ░░░░ ░░░░ side ░░░░ a multiple ░░░░ $13$. ░░░░ little theorem is often stated in ░░░░ ░░░░ ░░░░ formulation.

**_Theorem $2.19$_:** _Let $a, p$ be integers, with $p$ positive and prime, and assume that $p \nmid a$. Then $a^{p-1} \equiv 1 \pmod p$._

This ░░░░ ░░░░ the way ░░░░ ░░░░ stated it, in ░░░░ ░░░░ to a ░░░░ in $1640$. ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ letter, but did not include the proof; allegedly, it was ░░░░ ░░░░

_Proof of Theorem $2.18$_░░░░  

░░░░ $p \mid a$, ░░░░ $[a]_p = [0]_p$░░░░ and the ░░░░ is that $[0]_p^p = [0]_p$░░░░ ░░░░ is ░░░░ So we ░░░░ assume ░░░░ $p \nmid a$░░░░ ░░░░ it ░░░░ enough ░░░░ prove ░░░░ $[a]_p^{p - 1} = [1]_p$ ░░░░ ░░░░ ░░░░ since ░░░░ stated formula follows then by ░░░░ both sides by $[a]_p$░░░░

Assume then that $p \nmid a$░░░░ that is, $[a]_p \neq [0]_p$. The ░░░░ step consists ░░░░ considering the $p - 1$ classes,

$$
[a]_p, \; [2a]_p, \; \dots, \; [(p - 2)a]_p, \; [(p - 1)a]_p.
$$
These ░░░░ ░░░░ _different_ ░░░░ one another (we ░░░░ ░░░░ they ░░░░ 'distinct'). Indeed, since $[a]_p \neq [0]_p$ ░░░░ $p$ ░░░░ ░░░░

$$
[\ell a]_p = [k a]_p \implies [\ell]_p = [k]_p,
$$
░░░░ ░░░░ ░░░░ $2.17$). By the ░░░░ ░░░░ this statement, $[\ell]_p \neq [k]_p$ ░░░░ $[\ell a]_p \neq [k a]_p$░░░░ By the ░░░░ ░░░░ of ░░░░ $2.6$ the classes $[1]_p, \dots, [p - 1]_p$ ░░░░ ░░░░ ░░░░ ░░░░ well, and ░░░░ ░░░░ the classes $[a]_p, \dots, [(p - 1)a]_p$.

But then ░░░░ ░░░░ the ░░░░ part) ░░░░ ░░░░ ░░░░ ░░░░ $(2.5)$ must be _the same as the classes_ $[1]_p, \dots, [p - 1]_p$, _just in a different order_░░░░ (Work ░░░░ ░░░░ $2.19$ ░░░░ see this ░░░░ ░░░░ It ░░░░ that ░░░░ products of the two ░░░░ of ░░░░ must be equal:

$$
[a]_p \cdot [2a]_p \cdot \dots \cdot [(p - 1)a]_p = [1]_p \cdot [2]_p \cdot \dots \cdot [p - 1]_p.
$$

░░░░

$$
[1 \cdot 2 \cdot \dots \cdot (p - 1) \cdot a^{p - 1}]_p = [1 \cdot 2 \cdot \dots \cdot (p - 1)]_p,
$$

░░░░ is,

$$
[(p - 1)!]_p \cdot [a]_p^{p-1} = [(p - 1)!]_p.
$$

░░░░ ░░░░ suffices to ░░░░ ░░░░ $[(p - 1)!]_p \neq [0]_p$ (since $p$ ░░░░ prime and does ░░░░ divide ░░░░ ░░░░ $1, \dots, p - 1$░░░░ ░░░░ applying cancellation again gives,

$$
[a]_p^{p-1} = [1]_p
$$

as ░░░░ $\blacksquare$

░░░░ ░░░░ ░░░░ is actually useful in ░░░░ for applications ░░░░ ░░░░ and ░░░░ taking the time ░░░░ explore.

░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ $n$░░░░ ░░░░ ░░░░ find ░░░░ ░░░░ $a$░░░░ which may be ░░░░ ░░░░ ░░░░ in ░░░░ range $1 < a < n$, ░░░░ that $[a]_n^{n-1} \neq [1]_n$, then ░░░░ $2.18$ guarantees ░░░░ $n$ is ░░░░ ░░░░ ░░░░ it ░░░░ ░░░░ Such ░░░░ integer $a$ is said ░░░░ 'witness' the fact ░░░░ $n$ is ░░░░ For example, $2$ ░░░░ ░░░░ witness ░░░░ the fact ░░░░ $4$ is composite, since $2^{4-1} = 8 \not\equiv 1 \pmod 4$. ░░░░ ░░░░ sense, this ░░░░ remarkable: factoring large integers takes an unpractically long ░░░░ while ░░░░ ░░░░ of $[a]_n^{n-1}$ is ░░░░ fast. ░░░░ ░░░░ ░░░░ explained below ░░░░ §$2.8$.

░░░░ ░░░░ a witness ░░░░ relatively easy: ░░░░ ░░░░ be shown ░░░░ most ░░░░ ░░░░ $n$ ░░░░ at ░░░░ (roughly) $n/2$ ░░░░ ░░░░ ░░░░ $n$ ░░░░ one of ░░░░ composite ░░░░ and we ░░░░ ░░░░ example) $10$ random integers between $1$ ░░░░ $n$, then we are going ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $n$ ░░░░ ░░░░ probability ░░░░

$$
1 - \frac{1}{2^{10}} = 0.999\ldots
$$
░░░░ line: ░░░░ ░░░░ ░░░░ ░░░░ computationally expensive to tell ░░░░ a high degree ░░░░ confidence ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ ░░░░

These considerations ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ produce ░░░░ prime integers. ░░░░ ░░░░ generate a ░░░░ ░░░░ ░░░░ ░░░░ $500$ ░░░░ ░░░░ then use ░░░░ ░░░░ ░░░░ ░░░░ to essentially ░░░░ ░░░░ this integer ░░░░ prime; ░░░░ ░░░░ ░░░░ not, ░░░░ ░░░░ ░░░░ ░░░░ and ░░░░ another ░░░░ integer, and ░░░░ ░░░░ until we ░░░░ one that ░░░░ ░░░░ ░░░░ ░░░░ consequence ░░░░ ░░░░ ░░░░ ░░░░ Theorem (also briefly mentioned ░░░░ the ░░░░ of §$1.4$) it can ░░░░ ░░░░ that the probability of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $n$ is $1 / \ln n$, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ most will ░░░░ enough to find ░░░░ $500$░░░░ prime. With current ░░░░ ░░░░ all ░░░░ takes ░░░░ ░░░░ of ░░░░ second.

Why do ░░░░ ░░░░ to construct large ░░░░ This is a ░░░░ ingredient ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ commonplace as ░░░░ way ░░░░ encode information transmitted through the ░░░░ ░░░░ laptop is ░░░░ ░░░░ it when we ░░░░ your online ░░░░ ░░░░ example. RSA ░░░░ ░░░░ 'Rivest, Shamir, ░░░░ ░░░░ who came ░░░░ with ░░░░ back in ░░░░ $1970$░░░░ It should not ░░░░ one ░░░░ ░░░░ clever ░░░░ ░░░░ sophisticated and modern mathematical ░░░░ but as ░░░░ ░░░░ ░░░░ ░░░░ _extremely elementary, ancient mathematics_. ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ covered ░░░░ ░░░░ in these ░░░░ ░░░░ ░░░░ how ░░░░ works, and ░░░░ ░░░░ not ░░░░ really know ░░░░ ░░░░ ░░░░ _ring_ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ only ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ all the ░░░░ ░░░░

░░░░ is a 'public ░░░░ ░░░░ system, which ░░░░ ░░░░ everybody can ░░░░ a message: the ░░░░ to encode ░░░░ message ░░░░ ░░░░ ░░░░ available to ░░░░ cares; ░░░░ is ░░░░ ░░░░ ░░░░ ░░░░ _decoding_ ░░░░ message can in ░░░░ ░░░░ be done by ░░░░ ░░░░ has some extra information. Thus, ░░░░ laptop can ░░░░ your bank ░░░░ ░░░░ ░░░░ allows the ░░░░ to encode ░░░░ sensitive ░░░░ and ░░░░ it ░░░░ someone ░░░░ intercept ░░░░ key and ░░░░ encoded ░░░░ ░░░░ ░░░░ not be able (with current ░░░░ ░░░░ use this information ░░░░ recover the message.

░░░░ does this work? Above we ░░░░ ░░░░ ░░░░ explanation ░░░░ ░░░░ one can ░░░░ ░░░░ ░░░░ integers. ░░░░ ░░░░ you how this ░░░░ ░░░░ implemented, we will use produce two largish primes, ░░░░ ░░░░ ░░░░ ░░░░ above:

$$
p = 818428743210989683024895225263, \quad q = 644677944074338849892311039879.
$$

░░░░ ░░░░ ░░░░ ░░░░

$$
n = p q = 527622959544605838546815712346082387453782597046540869959877.
$$
░░░░ takes ░░░░ time at ░░░░ And ░░░░ no ░░░░ ░░░░ how to ░░░░ equally fast from $n$ to ░░░░ ░░░░ $p$ and $q$: _this_ ░░░░ ░░░░ ░░░░ ░░░░ works so ░░░░ ░░░░ we will ░░░░ There ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $n$; $p$ ░░░░ $q$ ░░░░ remain secret. ░░░░ ░░░░ note ░░░░ ░░░░ ░░░░

$$
k = (p - 1)(q - 1)
$$

░░░░ ░░░░ equal

$$
k = 527622959544605838546815712346461928076649726851362366367436
$$

░░░░ by ░░░░ the Euclidean ░░░░ it is ░░░░ ░░░░ ░░░░ ░░░░ $\gcd(e, k) = 1$ ░░░░

$$
e = 23847938479384928749387.
$$

I ░░░░ ░░░░ this ░░░░ randomly: ░░░░ just typed very ░░░░ ░░░░ bunch of random ░░░░ ░░░░ ░░░░ ░░░░ 'encryption ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ integers

$$
n = 527622959544605838546815712346082387453782597046540869959877
$$

$$
e = 23847938479384928749387.
$$

░░░░ your ░░░░ ░░░░ ░░░░ else ░░░░ ░░░░ can send you ░░░░ ░░░░ ░░░░ suffices to ░░░░ ░░░░ information as ░░░░ or more integers $a$░░░░ $1 \leq a < n$░░░░ ░░░░ $a$ will be ░░░░ ░░░░ computing $[a]_n^e$, which ░░░░ again something that can ░░░░ ░░░░ quickly. ░░░░ example, if my Very Secret message to you ░░░░

$$
a = 1010101010101010101010101010101010,
$$

░░░░ ░░░░ will send

$$
b = 16360537946748886409026352514770724213613815940906125836470312,
$$

since ░░░░ ░░░░ assures ░░░░ $[a]_n^e = [b]_n$░░░░ To this ░░░░ ░░░░ ░░░░ has found ░░░░ ░░░░ way ░░░░ ░░░░ $a$ ░░░░ $b$░░░░ given only the ░░░░ ░░░░ $n$ and $e$░░░░ ░░░░ $b$ can ░░░░ transmitted in the open, ░░░░ it ░░░░ not matter if someone ░░░░ it.

░░░░ you receive $b$░░░░ ░░░░ ░░░░ _you_ recover my message? ░░░░ ░░░░ ░░░░ seen ░░░░ ░░░░ $2.16$, ░░░░ $\gcd(e, k) = 1$░░░░ then $e$ has a multiplicative ░░░░ ░░░░ $k$. Chasing ░░░░ Euclidean algorithm ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

$$
d = 72444918945559643533015877809753152910803207582951588533695.
$$

░░░░ ░░░░ ░░░░ verify that $[d]_k \cdot [e]_k = [1]_k$ if you don't trust me.) Since you know $d$ (the 'decryption' exponent), it is a very easy matter for _░░░░ ░░░░ recover the ░░░░ lo ░░░░ ░░░░

$$
[b]_n^d = [1010101010101010101010101010101010]_n,
$$

as ░░░░ ░░░░ confirms in a fraction ░░░░ a ░░░░

This ░░░░ look amazing, but of course ░░░░ is ░░░░ ░░░░ ░░░░ we ░░░░ all the ░░░░ ░░░░ to ░░░░ how ░░░░ ░░░░

---

**_Theorem 2.19 (RSA algorithm)_**: _Let $p \neq q$ be positive prime integers, and let:_

░░░░ $n = p q$
- $k = (p - 1)(q - 1)$
- $e$ be ░░░░ integer ░░░░ ░░░░ relatively prime ░░░░ $k$
░░░░ $d$ ░░░░ ░░░░ integer ░░░░ that $d e \equiv 1 \pmod k$
░░░░ $a$ ░░░░ ░░░░ ░░░░

_Then_

$$
a \equiv b^d \pmod n.
$$

_Proof_:

░░░░ that $b^d \equiv a^{d e} \pmod n$; so ░░░░ have ░░░░ prove that $a^{d e} \equiv a \pmod n$░░░░ ░░░░ I ░░░░ ░░░░ ░░░░ ░░░░ to ░░░░ that,

$$
a^{d e} \equiv a \pmod p \text{ and } a^{d e} \equiv a \pmod q.
$$

░░░░ ░░░░ this ░░░░ the case, then,

$$
p \mid (a^{d e} - a) \quad\text{and}\quad q \mid (a^{d e} - a),
$$

and this ░░░░ that $n \mid (a^{d e} - a)$ since $p$ and $q$ are ░░░░ prime. ░░░░ ░░░░ ░░░░ ░░░░ $p$░░░░ If $p \mid a$, then ░░░░ $a$ and $a^{d e}$ ░░░░ $0 \pmod p$░░░░ ░░░░ ░░░░ particular,

$$
a^{d e} \equiv a \pmod p.
$$

Therefore ░░░░ ░░░░ assume that $p \nmid a$░░░░

Since $d e \equiv 1 \pmod k$, $k$ divides $d e - 1$. ░░░░ ░░░░ is a positive integer $\ell$ ░░░░ ░░░░

$$
d e = 1 + k \ell.
$$

Then,

$$
a^{d e} = a^{1 + k \ell} = a \cdot a^{k \ell} = a \cdot a^{(p-1)(q-1)\ell}.
$$

By ░░░░ ░░░░ theorem, $a^{p-1} \equiv 1 \pmod p$, since $p$ is ░░░░ and $p \nmid a$. Therefore,

$$
a^{d e} = a \cdot (a^{p-1})^{(q-1)\ell} \equiv a \cdot 1^{(q-1)\ell} = a \pmod p,
$$

as needed. The proof for $q$ ░░░░ ░░░░ ░░░░ entirely ░░░░ and we are done. $\blacksquare$

░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ as ░░░░ to quantum, ░░░░ are ░░░░ ░░░░ this ░░░░ ░░░░ ░░░░ ░░░░ lot ░░░░ attention. There ░░░░ ░░░░ ░░░░ that ░░░░ fiendishly ░░░░ ░░░░ ░░░░ to ░░░░ an integer ░░░░ If such a ░░░░ ░░░░ ░░░░ the security of ░░░░ ░░░░ ░░░░ ░░░░ would ░░░░ ░░░░

#### Selected Exercises

##### Ex 2-3

_Prove that if $q \geq 5$ and $q$ is irreducible, then $[q]_6 = [1]_6$ or $[q]_6 = [5]_6$._

_Proof_:

░░░░ $q$ is ░░░░ $\gcd(q, 6) = 1$ and ░░░░ have $q = 6k + r$ where $0 \leq r \lt 6$. ░░░░ $r$ cannot ░░░░ $0$░░░░ $2$, $3$ ░░░░ $6$ because then $q$ ░░░░ composite. ░░░░ it ░░░░ ░░░░ that either $r = 1$ ░░░░ $r = 5$, ░░░░ $q$ ░░░░ ░░░░ in ░░░░ of ░░░░ ░░░░ ░░░░ and $[q]_6 = [1]_6$ ░░░░ $[q]_6 = [5]_6$. $\blacksquare$

##### $\triangleright$ Ex 2-4

_Find a proof or a counterexample of the following statement: If $[a]_n \neq [0]_n$, and $[a]_n [b]_n = [a]_n [c]_n$, then $[b]_n = [c]_n$._

_Proof_░░░░

Clean ░░░░ hold when $n$ ░░░░ composite. ░░░░ means $\Z/n\Z$ is not ░░░░ integral ░░░░ ░░░░ a field. $\blacksquare$

##### Ex 2-6

_Assume that $[a]_n = [1]_n$. Prove that $\gcd(a, n) = 1$. Find an example showing that the converse is not true._

_Proof_:

If $[a]_n = [1]_n$, ░░░░ $a \equiv 1 \pmod{n}$, and $a + (-k)n = 1$░░░░ By Corollary $1.9$░░░░ $\gcd(a, n) = 1$. For ░░░░ ░░░░ ░░░░ $\gcd(a, n) = 1$ ░░░░ , ░░░░ suppose ░░░░ ░░░░ ░░░░ $a \equiv 1 \pmod{n}$ must always ░░░░ ░░░░ ░░░░ need to ░░░░ $n \gt 2$░░░░ Euler's Totient Function $\phi(n)$ counts ░░░░ elements coprime ░░░░ $n$░░░░ and ░░░░ ░░░░ $a$ ░░░░ be congruent to $1$ ░░░░ necessitate $\Z/n\Z$ ░░░░ only a ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ a contradiction, ░░░░ our assumption ░░░░ $[a]_n = [1]_n$ for all $a$ must be false. $\blacksquare$ 

##### $\triangleright$ Ex 2-8

_Find the last digit of $7^{1000000}$._

_Proof_:

We know that ░░░░ nonnegative ░░░░ ░░░░ $10$ ░░░░ the ░░░░ digit ░░░░ that ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ division. Also, $7$ has order $4$ in $\Z/10\Z$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ cycle ░░░░ $4$ steps; $7^{4k} \equiv 1 \pmod{n}$ for all $k$░░░░ Since $1000000 \equiv 0 \pmod{4}$░░░░ ░░░░ ░░░░ that ░░░░ last ░░░░ must be $1$░░░░ $\blacksquare$

##### $\triangleright$ Ex 2-9

_Find a congruence class $[a]_7$ in $\Z/7\Z$ ░░░░ ░░░░ every class $[b]_7$ except $[0]_7$ equals a ░░░░ ░░░░ $[a]_7$._

_Proof_░░░░

A ░░░░ case by case evaluation shows ░░░░ $a = 3$ ░░░░ ░░░░ generator for $\Z/7\Z$. $\blacksquare$

##### Ex 2-10

_Let $n \gt 0$ be an odd integer that may be written as the sum of two perfect squares. Prove that $[n]_4=[1]_4$._

_Proof_░░░░

░░░░ $x^2$ and $y^2$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $x^2 + y^2 = n$ ░░░░ $n$ ░░░░ ░░░░ If $x$ ░░░░ ░░░░ then $x^2 \equiv 0 \pmod{4}$, ░░░░ ░░░░ $x$ ░░░░ ░░░░ ░░░░ $x^2 \equiv 1 \pmod{4}$. Since $n$ ░░░░ odd, ░░░░ only valid options ░░░░ $[0]_4 + [1]_4 = [1]_4$ and $[1]_4 + [0]_4 = [1]_4$░░░░ therefore $[n]_4 = [1]_4$░░░░ $\blacksquare$

##### $\triangleright$ Ex 2-11

_Prove that for all $a \in \Z/n\Z$, $a \cdot 0=0$ (where $0$ stands for $[0]_n$)._

_Proof:_

░░░░ $a \in \Z/n\Z$░░░░ ░░░░ can represent its ░░░░ ░░░░ as $[a]_n$. Then, by the definition of modular arithmetic operations, $[a]_n \cdot [0]_n = [a \cdot 0]_n = [0]_n \equiv 0 \pmod{n}$. $\blacksquare$

##### Ex 2-15

_Let $p \gt 0$ be a prime integer. Prove that the equation $x^2 + x = 0$ has exactly two solutions in $\Z/p\Z$, and find those solutions._

_Proof_:

Since $\Z/p\Z$ ░░░░ ░░░░ we ░░░░ no zero ░░░░ ░░░░ $x(x + 1) = 0 \implies x = 0 \ \text{or} \ (x + 1) = 0 \implies x = -1$. $\blacksquare$

##### $\triangleright$ Ex 2-18

_Prove that the two formulations of Fermat’s little theorem are equivalent._

_Proof_:

Fermat's Little ░░░░ ░░░░ $a^{p - 1} \equiv 1 \pmod{p}$ where $p$ ░░░░ prime. Also, $\Z/p\Z$ ░░░░ a ░░░░ ░░░░ ░░░░ ░░░░ multiply ░░░░ ░░░░ ░░░░ $a$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░$a^{p - 1} \cdot a \equiv 1 \cdot a \pmod{p} \implies a^{p - 1 + 1} \equiv a \pmod{p} \implies a^p \equiv a \pmod{p}$░░░░ $\blacksquare$ 

##### $\triangleright$ Ex 2-19  

_(i)_ ░░░░ the ░░░░ $[1 \cdot 3]_{11}$, $[2 \cdot 3]_{11}$░░░░ $[3 \cdot 3]_{11}, \dots, [10 \cdot 3]_{11}$ ░░░░ confirm ░░░░ ░░░░ are the classes $[1]_{11}, \dots, [10]_{11}$░░░░ ░░░░ a different ░░░░ (A generalization of ░░░░ fact is used in the ░░░░ of ░░░░ 2.18.)  

_Proof_░░░░

░░░░ multiplying each equivalence class ░░░░ $3$ ░░░░ $\Z/11\Z$, and ░░░░ ░░░░

$[3]_{11}, [6]_{11}, [9]_{11}, [1]_{11}, [4]_{11}, [7]_{11}, [10]_{11}, [2]_{11}, [5]_{11}, [8]_{11}$,

░░░░ ░░░░ ░░░░ the ░░░░ classes ░░░░ ░░░░ a different order. $\blacksquare$

_(ii)_ Compute the ░░░░ $[1 \cdot 3]_{12}$, $[2 \cdot 3]_{12}$░░░░ $[3 \cdot 3]_{12}, \dots, [11 \cdot 3]_{12}$ ░░░░ ░░░░ ░░░░ ░░░░ **do not** equal ░░░░ classes $[1]_{12}, \dots, [11]_{12}$, in ░░░░ ░░░░

_Proof_:

░░░░ a ░░░░ case-by-case ░░░░ ░░░░ ░░░░ ░░░░ can prove the ░░░░ of the proposition. ░░░░ ░░░░ because $12$ is composite.  $\blacksquare$

##### $\triangleright$ Ex 2-20

_Let $n$, $a$, $b_1$░░░░ $b_r$ be integers, with $n \gt 1$ and $1 \lt a \lt n$, $1 \lt b_i \lt n$. Assume that $a$ ░░░░ a ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $n$ is ░░░░ (that is, $a^{n - 1} \not\equiv 1 \pmod{n}$░░░░ and that $\gcd(a, n) = 1$._

_(i) Prove that if $b_i$ ░░░░ **not** a witness, then $ab_i$ **is** a witness._

_Proof_░░░░

░░░░ $a$ is a witness, we have $a \cdot x \equiv 0 \pmod{n}$ ░░░░ some ░░░░ $x \in \Z$░░░░ ░░░░ ░░░░ $b_i$, $axb_i \equiv 0 \pmod{n} \implies a(x b_i) \equiv 0 \pmod{n}$. We know that $b_i$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ only if $x \equiv 0 \pmod{n}$. ░░░░ $b_i x \neq 0$, $a b_i \equiv 0 \pmod{n}$ ░░░░ $ab_i$ witnesses ░░░░ compositeness of $n$░░░░ $\blacksquare$

_(ii) Prove that if $[b_i]_n, \cdots, [b_r]_n$ are all different, then so are $[ab_1]_n, \cdots, [ab_r]_n$._

_Proof_░░░░

░░░░ the ░░░░ ░░░░ products collide modulo $n$░░░░ ░░░░ is, there ░░░░ two ░░░░ indices $i \neq j$ ░░░░ that $ab_i \equiv ab_j \pmod{n}$. Since $\gcd(a, n) = 1$ ░░░░ ░░░░ invertibility of $a$ modulo $n$, we ░░░░ multiply ░░░░ $a^{-1}$ ░░░░ get $(a \cdot a^{-1}) b_i \equiv (a \cdot a^{-1}) b_j \pmod{n} \implies b_i \equiv b_j \pmod{n}$, but ░░░░ leads to ░░░░ ░░░░ since $b_i$ and $b_j$ were supposed to ░░░░ distinct, ░░░░ $ab_i \not\equiv ab_j \pmod{n}$. $\blacksquare$

_(iii) Deduce that in this case $n$ has fewer than $n/2$ non-witnesses._

_Proof_░░░░

░░░░ ░░░░ are $k$ ░░░░ such ░░░░ $b_1, \cdots, b_k$ that ░░░░ ░░░░ witnesses. ░░░░ ░░░░ ░░░░ know that ░░░░ by $a$ ░░░░ distinctness, meaning $ab_1, \cdots, ab_k$ are ░░░░ distinct ░░░░ we have ░░░░ $k$ ░░░░ Also, $\Z/n\Z$ ░░░░ $n - 1$ non-zero ░░░░ ░░░░ $k + k \leq n - 1 \implies k \leq (n - 1)/2 \implies k \lt n/2$, and we have fewer than $n/2$ non-witnesses. $\blacksquare$








