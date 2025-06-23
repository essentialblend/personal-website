---
title: "Algebra: Notes from the Underground"
description: "My notes on Aluffi's book on abstract algebra."
date: 2025-03-17
status: studying
subjects: ["Mathematics"] 
categories: ["Academic Textbook"]
tags: ["Algebra", "Abstract Algebra", "Aluffi", "Rings", "Groups", "Fields", "Abstract"]
bookAuthor: "Paolo Aluffi"
---

## Part I: Rings

### The Integers

#### The Well Ordering Principle and Induction

░░░░ general goal is the generalization ░░░░ common algebraic ░░░░ we will try ░░░░ ░░░░ ░░░░ essence ░░░░ determining ░░░░ which are ░░░░ for their ░░░░ We ░░░░ ░░░░ the ░░░░ of integers $\mathbb{Z}$, considered along ░░░░ ░░░░ two operations of addition $(+)$ and ░░░░ $(\cdot)$. ░░░░ ░░░░ spend some time trying ░░░░ ░░░░ ░░░░ $\mathbb{Z}$ ░░░░ put ░░░░ ░░░░ ░░░░ to these ░░░░ operations, and we ░░░░ identify ░░░░ ░░░░ properties. ░░░░ will ░░░░ take a ░░░░ ░░░░ those properties, ░░░░ so-called **ring axioms**, and eventually aim at studying all structures that are defined by requiring a set $A$ along with two operations (which will be called $+$ and $\cdot$ even if they may have nothing to do with the conventional $+$ and $\cdot$) to satisfy the ring axioms. These structures will be called **rings**: from this perspective, $\mathbb{Z}$ is a particular example of a ring. Other examples being $\mathbb{Q}$ (_rational_ numbers), $\mathbb{R}$ (_real_ numbers), $\mathbb{C}$ (_complex_ numbers); but many more exist, and most of them have **nothing to do with numbers**░░░░ 

We will ░░░░ **_all_ of them** at once in the sense that we will determine several features that every such structure (as opposed to specific examples like $\mathbb{Z}$ or $\mathbb{Q}$) must have. We will (implicitly) define a **category of rings** by specifying certain types of functions (which we will call **_homomorphisms_**░░░░ between rings.

Everything we will see ░░░░ ░░░░ familiar, but the ░░░░ ░░░░ ░░░░ unusual at ░░░░ goal ░░░░ ░░░░ ░░░░ single ░░░░ the key facts ░░░░ are ░░░░ for **_the way $\mathbb{Z}$ works_.** These facts will be useful in studying other examples, particularly coming from **_modular arithmetic_**░░░░ and the study of these ░░░░ will guide us ░░░░ ░░░░ ░░░░ axioms that we will use ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ is.

░░░░ will assume familiarity ░░░░ the basic, ░░░░ ░░░░ ░░░░ ░░░░ and multiplication ░░░░ ░░░░ along ░░░░ the notion ░░░░ **_ordering_** ░░░░ $\mathbb{Z}$: ░░░░ $a$ and $b$ are integers, ░░░░ write $a \leq b$ ░░░░ mean ░░░░ $a$ is ‘less ░░░░ ░░░░ equal ░░░░ $b$, in ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ satisfies the following ░░░░ ░░░░ respect to ░░░░ operations: for example, ░░░░ $a \leq b$ and $c \geq 0$░░░░ ░░░░ $a+c \leq b+c$.

We will begin by ░░░░ the fact ░░░░ division behaves rather peculiarly in $\Z$. ░░░░ example, ░░░░ ░░░░ divide $18$ by $3$, ░░░░ a ░░░░ of $6$, which is an ░░░░ of $\mathbb{Z}$. ░░░░ ░░░░ also divide $1$ ░░░░ $2$, ░░░░ ░░░░ ░░░░ is not an element ░░░░ $\mathbb{Z}$: there ░░░░ no integer $c$ ░░░░ ░░░░ $1 = 2c$░░░░ ░░░░ need ░░░░ ░░░░ ░░░░ ░░░░ able to deal ░░░░ this distinction.

_**Definition $1.1$:**  Let $a, b \in \mathbb{Z}$. We say that ‘$b$ divides $a$’, or ‘$b$ is a divisor of $a$’, or ‘$a$ is a multiple of $b$’, and write $b \mid a$, if there is an integer $c$ such that $a = bc$._

Thus, $3$ ‘divides’ $18$ ░░░░ $18 = 3 \cdot 6$ ░░░░ $6$ is an integer; ░░░░ $2$ ░░░░ not divide $1$░░░░ because $1 = 2 \cdot (1/2)$ but $1/2$ ░░░░ ░░░░ ░░░░ integer. ░░░░ divisors ░░░░ $12$ are $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6$░░░░ and $\pm 12$░░░░ ░░░░ integer ░░░░ $0$, since $0 = b \cdot c$ for ░░░░ ░░░░ $c$; ░░░░ it ░░░░ $c = 0$ ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ only ░░░░ that $0$ ░░░░ ░░░░ $0$ itself.  

░░░░ this understood, we ░░░░ ░░░░ record ░░░░ useful ░░░░ ░░░░  

_**Lemma $1.2$:** If $b \mid a$ and $a \neq 0$, then $|b| \leq |a|$._

_Proof:_  
░░░░ ░░░░ definition ░░░░ divisibility ░░░░ ░░░░ $a = bc$ ░░░░ some ░░░░ $c$; ░░░░ particular, both $b$ ░░░░ $c$ are nonzero since $a \neq 0$░░░░ Since $c \in \mathbb{Z}$ ░░░░ $c \neq 0$, we have $|c| \geq 1$░░░░  

░░░░ then,
$$|a| = |b| \cdot |c| \geq |b| \cdot 1 = |b|$$
░░░░ claimed.  

‘Divisibility’ ░░░░ ░░░░ order relation on the set of nonnegative integers. What ░░░░ $1.2$ says ░░░░ that, to ░░░░ ░░░░ ░░░░ ‘new’ ░░░░ ░░░░ ░░░░ compatible with ░░░░ ░░░░ one $\leq$░░░░  

What if $b$ ░░░░ not ░░░░ $a$? We can still divide $b$ into $a$ (at least if $b \neq 0$), but we have ░░░░ pay ░░░░ price: we get a remainder ░░░░ we do ░░░░ ░░░░ ░░░░ ░░░░ fact ░░░░ ░░░░ to you, ░░░░ will ░░░░ into why it ░░░░ ░░░░ way it does, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ about $\mathbb{Z}$—we ░░░░ no need for ░░░░ ░░░░ ░░░░ ░░░░ divide ░░░░ ░░░░ for ░░░░ ░░░░ ░░░░ ░░░░ be ░░░░ ░░░░ property of $\mathbb{Z}$ which is ░░░░ ░░░░ this ░░░░  

░░░░ property ░░░░ ░░░░ ░░░░ ░░░░ property ░░░░ the ░░░░ $\leq$ we ░░░░ a moment ░░░░ It ░░░░ be responsible for ░░░░ ░░░░ features of $\mathbb{Z}$; in fact, besides the basic ░░░░ ░░░░ of addition and multiplication, ░░░░ is essentially the ░░░░ property of $\mathbb{Z}$ ░░░░ makes ░░░░ ░░░░ the ░░░░ ░░░░ does. So we ░░░░ ░░░░ it ░░░░ ░░░░ moment, before ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░  

░░░░ ░░░░ above, $\mathbb{Z}$ comes endowed with ░░░░ ░░░░ ░░░░ $\leq$░░░░ ░░░░ fact, ░░░░ is ░░░░ ░░░░ call ░░░░ ‘total ░░░░ ░░░░ ░░░░ terminology ░░░░ mean that ░░░░ ░░░░ ░░░░ integers $a$ and $b$, one ░░░░ ░░░░ ░░░░ must be true: $a < b$░░░░ ░░░░ $a = b$░░░░ ░░░░ $a > b$. ░░░░ same can ░░░░ said of other ░░░░ of numbers, such as ░░░░ set of ░░░░ numbers $\mathbb{Q}$ ░░░░ ░░░░ set ░░░░ real ░░░░ $\mathbb{R}$; ░░░░ there is something ░░░░ the ░░░░ ░░░░ ░░░░ $\mathbb{Z}$ that makes ░░░░ ░░░░ special. ░░░░ $\mathbb{Z}^{\geq 0}$ stands ░░░░ the set ░░░░ ░░░░ ░░░░

$$
\mathbb{Z}^{\geq 0} = \{ a \in \mathbb{Z} \mid a \geq 0 \} = \{0, 1, 2, 3, \ldots\}.
$$
░░░░ $\mathbb{Z}_{\geq0}$ stands for the set of positive integers, $\mathbb{Q}_{\leq0}$ ░░░░ ░░░░ ░░░░ of nonpositive ░░░░ numbers, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\mathbb{Z}_{\geq0}$ is $\mathbb{N}$, the set of _░░░░ ░░░░_. The fact we need has everything to do with $\mathbb{Z}_{\geq0}$:

_**Fact (Well-ordering principle):** Every nonempty set of nonnegative integers contains a least element._

We ░░░░ summarize ░░░░ fact ░░░░ saying ░░░░ $\mathbb{Z}_{\geq0}$ is ‘well-ordered’ by the ░░░░ $\leq$░░░░ ░░░░ ‘well-ordering’ ░░░░ ░░░░ ░░░░ $S$ ░░░░ ░░░░ an ░░░░ relation ░░░░ that ░░░░ ░░░░ ░░░░ of $S$ has ░░░░ minimum.

░░░░ ░░░░ principle should sound ░░░░ if not ░░░░ ░░░░ ░░░░ we have many bags ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ one ░░░░ more) ░░░░ with ░░░░ ░░░░ number ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ matter of perspective—if ░░░░ were to ░░░░ ░░░░ **define** $\mathbb{Z}$ ░░░░ the ░░░░ principle ░░░░ nonnegative ░░░░ ░░░░ be ░░░░ of the ░░░░ ░░░░ ░░░░ explicitly ░░░░ ░░░░ is (to my ░░░░ no direct way to ░░░░ ░░░░ from ░░░░ basic ░░░░ of ░░░░ ░░░░ ░░░░ integers.

░░░░ ░░░░ that $\leq$ is not a well-ordering ░░░░ the ░░░░ $\mathbb{Q}_{\geq0}$ of nonnegative rationals, or on the set $\mathbb{R}_{\geq0}$ of nonnegative reals. ░░░░ example, the set ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\mathbb{Q}_{\geq0}$, but it does not have a ‘least’ element. (If $q>0$ were such an element, then $q/2$ would be even smaller and still rational and positive, giving a contradiction.) So the well-ordering principle is really a rather special feature of $\mathbb{Z}_{\geq0}$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ key properties of $\mathbb{Z}$ from it, granting (as ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ facts about ░░░░ the ░░░░ $\leq$ behaves ░░░░ ░░░░ to ░░░░ ░░░░ $+, -,$ ░░░░ $\cdot$░░░░

Even before ░░░░ ░░░░ the well-ordering ░░░░ in ░░░░ in ░░░░ proper, it ░░░░ useful to ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░ a specific ░░░░ ░░░░ with which we ░░░░ already ░░░░ the process of ░░░░ depends ░░░░ ░░░░ Every ░░░░ ░░░░ induction ░░░░ be converted ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ principle. ░░░░

This ░░░░ ░░░░ ░░░░ works. We ░░░░ to prove ░░░░ certain property $P(n)$ ░░░░ ░░░░ ░░░░ $n \geq 0$░░░░ ░░░░ we ░░░░ to prove that,

(i) $P(0)$ ░░░░ ░░░░ ░░░░ is true for $n = 0$░░░░ ░░░░  
░░░░ the implication $P(n) \implies P(n + 1)$ holds for all $n \geq 0$.

Then induction tells ░░░░ that ░░░░ our ░░░░ $P(n)$ ░░░░ ░░░░ ░░░░ $n \geq 0$; the ░░░░ $P(0)$ holds ░░░░ ░░░░ have ░░░░ ░░░░ ░░░░ hand in ░░░░ and ░░░░ $P(1)$ ░░░░ since $P(0)$ ░░░░ and we have ░░░░ ░░░░ ░░░░ that $P(0) \implies P(1)$; and ░░░░ $P(2)$ ░░░░ since $P(1)$ holds ░░░░ we have proved ░░░░ $P(1) \implies P(2)$; and then $P(3)$ holds since $P(2)$ ░░░░ ░░░░ we have proved that $P(2) \implies P(3)$░░░░ ░░░░ so ░░░░ forever.

░░░░ problem with ░░░░ ░░░░ is that ░░░░ ░░░░ forever’ ░░░░ ░░░░ ░░░░ ░░░░ is an ░░░░ ░░░░ ░░░░ is ░░░░ once we grant the ░░░░ of the ░░░░ ░░░░

_**Induction from the well-ordering principle:** Assume we have established (i) and (ii). We have to prove that $P(n)$ holds for all $n \geq 0$._

_Proof:_
░░░░ $F \subseteq \mathbb{Z}_{\geq 0}$ be the set ░░░░ nonnegative integers $n$ ░░░░ ░░░░ $P(n)$ does ░░░░ hold; then ░░░░ ░░░░ to ░░░░ that $F = \emptyset$. We ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ by showing that $F \neq \emptyset$ leads ░░░░ a contradiction.  

░░░░ ░░░░ that ░░░░ ░░░░ $F$ ░░░░ a ░░░░ set of nonnegative ░░░░ ░░░░ the well-ordering ░░░░ $F$ has a least element $\ell \in \mathbb{Z}_{\geq 0}$: ░░░░ ░░░░ $P(\ell)$ does not hold, and $\ell$ ░░░░ the ░░░░ ░░░░ ░░░░ with this property.  

By ░░░░ we ░░░░ that $P(0)$ holds, and ░░░░ $\ell > 0$. ░░░░ $n = \ell - 1$ ░░░░ a ░░░░ ░░░░ and $n < \ell$░░░░ ░░░░ $P(n)$ holds, since $\ell$ is ░░░░ ░░░░ ░░░░ ░░░░ for which ░░░░ ░░░░ does not ░░░░ By (ii), $P(n) \implies P(n + 1)$░░░░ ░░░░ $P(n + 1)$ ░░░░ ░░░░ $n + 1 = \ell$, ░░░░ ░░░░ ░░░░ that $P(\ell)$ does ░░░░  

We have reached ░░░░ contradiction: $P(\ell)$ ░░░░ both hold and not hold. ░░░░ the ░░░░ ░░░░ $F \neq \emptyset$ leads to a contradiction, and ░░░░ ░░░░ ░░░░ ░░░░ $F = \emptyset$░░░░ as we needed. $\blacksquare$

Several ░░░░ ░░░░ ░░░░ follows ░░░░ ░░░░ handled by induction ░░░░ ░░░░ by an ░░░░ ░░░░ the well-ordering principle. Which ░░░░ ░░░░ ░░░░ essentially a ░░░░ of taste. ░░░░ ░░░░ ░░░░ resort to ░░░░ ░░░░ principle, ░░░░ ░░░░ that ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░ of $\mathbb{Z}$. Also, well-ordering tends ░░░░ leaner, rigorous arguments.

#### Division with Remainder in $\Z$

_**Theorem $1.3$:** Let $a, b$ be integers, with $b \neq 0$. Then there exist a unique ‘quotient’ $q \in \mathbb{Z}$ and a unique ‘remainder’ $r \in \mathbb{Z}$ such that:_
$$a = bq + r \quad \text{with} \quad 0 \leq r < |b|.$$
_Proof:_

We ░░░░ ░░░░ that $b > 0$. Indeed, ░░░░ $b < 0$, we ░░░░ apply ░░░░ statement to $-b > 0$ and ░░░░ ░░░░ the sign ░░░░ $q$ after ░░░░ ░░░░ ░░░░ the sign ░░░░ $b$ ░░░░ ░░░░ change $|b|$░░░░ ░░░░ the ░░░░ on $r$ ░░░░ unchanged.

░░░░ ░░░░ that $b > 0$, ░░░░ ░░░░ ░░░░ ░░░░ linear combinations of $a$ ░░░░ $b$ of the ░░░░ $a - bx$ with $x \in \mathbb{Z}$░░░░ such that $a - bx \geq 0$░░░░ ░░░░ that ░░░░ are nonnegative integers of ░░░░ type: if $a$ is ░░░░ ░░░░ ░░░░ $a - b \cdot 0 = a$ ░░░░ nonnegative; and if $a$ ░░░░ ░░░░ then $a - ba = a(1 - b)$ ░░░░ nonnegative ░░░░ $1 - b \leq 0$. Therefore, ░░░░ ░░░░

$$S = \{a - bx \mid x \in \mathbb{Z}, a - bx \geq 0\}$$  

░░░░ ░░░░ ░░░░ ░░░░ of nonnegative integers. ░░░░ the ░░░░ ░░░░ ░░░░ contains ░░░░ least ░░░░ $r$░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ $x = q$ ░░░░ that $r = a - bq$ is smaller ░░░░ any ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $a - bx$. I ░░░░ ░░░░ ░░░░ $q$ ░░░░ $r$ ░░░░ ░░░░ unique ░░░░ ░░░░ ░░░░ ░░░░ claimed ░░░░ ░░░░ ░░░░ 

░░░░ by ░░░░ ░░░░ ░░░░ ░░░░ $a = bq + r$ ░░░░ ░░░░ $r \geq 0$. We ░░░░ ░░░░ to verify ░░░░

- ░░░░ ░░░░ $r < b$ holds (note ░░░░ $|b| = b$ since we are ░░░░ $b > 0$░░░░
░░░░ ░░░░ ░░░░ $q$ and $r$ are ░░░░ with ░░░░ properties.

░░░░ $(1)$░░░░ argue by contradiction. If ░░░░ had $r \geq b$░░░░ then ░░░░ would ░░░░ $r - b \geq 0$, ░░░░ 

$$
0 \leq r - b = (a - bq) - b = a - b(q + 1).
$$
░░░░ would ░░░░ that $r - b$ ░░░░ ░░░░ element of $S$░░░░ since it ░░░░ a nonnegative integer linear combination of $a$ ░░░░ $b$. But that ░░░░ ░░░░ contradiction, ░░░░ $r - b < r$ ░░░░ $r$ ░░░░ ░░░░ to ░░░░ the ░░░░ element of $S$░░░░ ░░░░ $r \geq b$ ░░░░ ░░░░ a ░░░░ ░░░░ can ░░░░ that $r < b$ ░░░░ we ░░░░

░░░░ $(2)$░░░░ assume that $q', r'$ are also ░░░░ ░░░░ the requirement ░░░░ out in ░░░░ ░░░░ ░░░░ is, $a = bq' + r'$, and $0 \leq r' < b$░░░░ We ░░░░ ░░░░ ░░░░ ░░░░ $q = q'$ and $r = r'$ ░░░░ ░░░░ what we mean ░░░░ stating that $q$ and $r$ ░░░░ ░░░░

░░░░ $a = bq + r = bq' + r'$, we have,

$$
b(q - q') = r' - r
$$
Now, since both $r$ and $r'$ are ░░░░ ░░░░ interval $[0, b - 1]$, their difference cannot ░░░░ $b - 1$░░░░ In ░░░░ ░░░░ $|r' - r| \leq b - 1$, ░░░░ ░░░░ ░░░░ $|r' - r| < |b|$░░░░ ░░░░ $(1.1)$ shows ░░░░ $b$ is ░░░░ ░░░░ ░░░░ $r' - r$░░░░ if $r' - r \neq 0$, ░░░░ ░░░░ ░░░░ $1.2$ ░░░░ ░░░░ ░░░░ have $|b| \leq |r' - r|$, ░░░░ the ░░░░ that $|b| > |r' - r|$ we ░░░░ a ░░░░ ago. The ░░░░ possibility ░░░░ ░░░░ that $r' - r = 0$░░░░ ░░░░ shows that $r' = r$░░░░ and further $b(q - q') = 0$. ░░░░ $b \neq 0$, this implies that $q - q' = 0$░░░░ ░░░░ it ░░░░ ░░░░ $q' = q$░░░░ $\blacksquare$

#### Greatest Common Divisors (GCD)

_**Definition $1.5$:** Let $a, b \in \mathbb{Z}$. We say that a nonnegative integer $d$ is the ‘greatest common divisor’ of $a$ and $b$, denoted $\text{gcd}(a, b)$ or simply $(a, b)$ if,_  

- _$d \mid a$ and $d \mid b$;_

░░░░ _if $c \mid a$ and $c \mid b$, then $c \mid d$._

If ░░░░ least one ░░░░ $a$ ░░░░ $b$ is not $0$░░░░ ░░░░ $d = \text{gcd}(a, b) \neq 0$░░░░ Indeed, $d$ must ░░░░ ░░░░ $a$ and $b$ according ░░░░ the ░░░░ requirement ░░░░ ░░░░ ░░░░ (this ░░░░ $d$ a ░░░░ divisor’), ░░░░ $d$ cannot be $0$ unless ░░░░ $a$ and $b$ ░░░░ $0$░░░░ ░░░░ mind that $0$ only divides $0$░░░░ ░░░░ ░░░░ requirement ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ $c$ ░░░░ ░░░░ a common divisor, then ░░░░ ░░░░ divide $d$░░░░ ░░░░ Lemma $1.2$░░░░ ░░░░ ░░░░ ░░░░ $|c| \leq |d|$ if $d \neq 0$, ░░░░ hence $c \leq d$ since $d$ ░░░░ ░░░░ Therefore $d$ ░░░░ ░░░░ ‘greatest’ ░░░░ ░░░░ ░░░░ ░░░░ divisor of $a$ ░░░░ $b$ ░░░░ $a$ and $b$ are ░░░░ ░░░░ $0$░░░░  

It ░░░░ ░░░░ that the gcd ░░░░ if you ░░░░ two ░░░░ $a$ ░░░░ $b$, not both ░░░░ ░░░░ $0$, then ░░░░ can simply list the divisors ░░░░ $a$░░░░ list the divisors of $b$, and ░░░░ $\text{gcd}(a, b)$ ░░░░ simply the largest integer ░░░░ ░░░░ ░░░░ ░░░░ these two ░░░░  

**Example $1.6$** To find that $\text{gcd}(30, -42) = 6$, we can list all divisors ░░░░ $30$░░░░
$$-30, -15, -10, -6, -5, -3, -2, -1, 1, 2, 3, 5, 6, 10, 15, 30$$ ░░░░ all ░░░░ of $-42$░░░░  $$-42, -21, -14, -7, -6, -3, -2, -1, 1, 2, 3, 6, 7, 14, 21, 42$$ ░░░░ then note that $6$ ░░░░ the ░░░░ integer that ░░░░ ░░░░ ░░░░ lists.  

Beware, however, ░░░░ this ░░░░ to find a ░░░░ is extremely inefficient: ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ time-consuming business, and if ░░░░ ░░░░ ░░░░ ░░░░ (say, a few thousand digits) then ░░░░ ░░░░ may ░░░░ ░░░░ algorithms ░░░░ than the ░░░░ of the ░░░░ ░░░░ ░░░░ carried out on the ░░░░ imaginable ░░░░ ░░░░ We ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ alternative to the ‘inspection’ ░░░░ ░░░░ ░░░░ ░░░░ $1.14$).  

_**Remark $1.7$:**_ ░░░░ may ░░░░ ░░░░ ░░░░ have not ░░░░ ░░░░ ░░░░ requirement ░░░░ something ░░░░ ░░░░ $c \mid a$ ░░░░ $c \mid b$░░░░ ░░░░ $c \leq d$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ justify the terminology ‘greatest common ░░░░ ░░░░ a ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ be the definition ░░░░ ░░░░ ░░░░ previously ░░░░ with ░░░░ notion.) ░░░░ main ░░░░ is that ░░░░ we ░░░░ ░░░░ notion ░░░░ more general ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ while ░░░░ (perhaps) simpler relation $\leq$ will ░░░░ Also, Definition $1.5$ makes ░░░░ ░░░░ for all possible integers $a, b$, including ░░░░ ░░░░ $a = b = 0$░░░░ in this case, ░░░░ every ░░░░ ░░░░ $0$, ░░░░ ░░░░ requirement says that ░░░░ integer ░░░░ $\text{gcd}(0, 0)$░░░░ Since $0$ ░░░░ ░░░░ ░░░░ ░░░░ divisible ░░░░ everything, ░░░░ tells us ░░░░ $\text{gcd}(0, 0) = 0$ ░░░░ ░░░░ Definition $1.5$░░░░ ░░░░ in ░░░░ ░░░░ $\text{gcd}(a, b)$ ░░░░ ░░░░ but with respect to the ░░░░ ░░░░ from Ex $1.2$ rather than the ordinary ░░░░ relation $\leq$.

_**Theorem $1.8$:** Let $a, b$ be integers. Then the greatest common divisor $d = \text{gcd}(a, b)$ is an integer linear combination of $a$ and $b$. That is, there exist integers $m$ and $n$ such that,_  $$d = ma + nb$$░░░░ fact, if $a$ ░░░░ $b$ ░░░░ not both $0$░░░░ ░░░░ $\text{gcd}(a, b)$ is ░░░░ smallest ░░░░ linear ░░░░ of $a$ ░░░░ $b$.

For ░░░░ $\text{gcd}(30, -42) = 6$░░░░ ░░░░ ░░░░ then tells ░░░░ ░░░░ there ░░░░ ░░░░ ░░░░ $m$ ░░░░ $n$ such ░░░░ $30m - 42n = 6$░░░░ Does ░░░░ seem ░░░░ A couple ░░░░ ░░░░ ░░░░ yield $m = 3$, $n = 2$░░░░ ░░░░ ░░░░$$3 \cdot 30 - 2 \cdot (-42) = 90 - 84 = 6.$$Notice ░░░░ it is ░░░░ ░░░░ the ░░░░ $m$ ░░░░ $n$ ░░░░ ░░░░ ░░░░ to ░░░░ unique, ░░░░ ░░░░  $$d = ma + nb,$$ ░░░░ also,  $$d = (m - b)a + (n + a)b,$$
$$d = (m + ba) + (n - ab),$$  and so on. ░░░░ ░░░░  
$$(3 + 42) \cdot 30 - (2 + 30) \cdot 42 = 45 \cdot 30 - 32 \cdot 42 = 1350 - 1344 = 6.$$  Therefore $m = 45, n = 32$ also work ░░░░ our ░░░░ Doing this type ░░░░ ░░░░ ░░░░ excellent practice, but it ░░░░ kind of ░░░░ ░░░░ ░░░░ arithmetic will ░░░░ ░░░░ the theorem ░░░░ general. ░░░░ ░░░░ ░░░░ is ░░░░ well-ordering ░░░░ ░░░░ the beginning ░░░░ the ░░░░ will remind you of the beginning of the ░░░░ ░░░░ ░░░░ $1.3$░░░░

_Proof:_ 

░░░░ $a = b = 0$░░░░ ░░░░ $\text{gcd}(a, b) = \text{gcd}(0, 0) = 0$░░░░ ░░░░ is ░░░░ ░░░░ combination of $a$ ░░░░ $b$ (because $0 = 1 \cdot 0 + 1 \cdot 0$). ░░░░ we ░░░░ assume ░░░░ $a$ and $b$ ░░░░ ░░░░ ░░░░ $0$░░░░ Consider ░░░░ ░░░░ combinations $ma + nb$ ░░░░ $a$ ░░░░ $b$░░░░ I ░░░░ that some ░░░░ ░░░░ are ░░░░ Indeed, take $m = a, n = b$░░░░ then,  $$ma + nb = a^2 + b^2,$$
░░░░ ░░░░ ░░░░ ░░░░ positive ░░░░ $a$ and $b$ are ░░░░ both $0$░░░░ Therefore, the set,$$S = \{ma + nb \mid m \in \mathbb{Z}, n \in \mathbb{Z}, \text{ and } ma + nb > 0\}$$░░░░ nonempty. ░░░░ ░░░░ ░░░░ standard setting to apply ░░░░ ░░░░ principle: since $S$ is a ░░░░ ░░░░ ░░░░ nonnegative ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ element. ░░░░ $d$ be this least ░░░░ and let $m$ and $n$ ░░░░ ░░░░ such ░░░░ $d = ma + nb$. ░░░░ is, $d$ ░░░░ the smallest ░░░░ linear ░░░░ of $a$ and $b$░░░░ ░░░░ ░░░░ going to verify that $d$ ░░░░ ░░░░ $\text{gcd}$ of $a$ ░░░░ $b$░░░░ and ░░░░ ░░░░ ░░░░ the ░░░░

Since $d \in S$░░░░ ░░░░ $d > 0$░░░░ ░░░░ $d$ is ░░░░ ░░░░ ░░░░ equal to $0$. ░░░░ order ░░░░ ░░░░ that $d$ is ░░░░ $\text{gcd}$ ░░░░ $a$ ░░░░ $b$░░░░ ░░░░ ░░░░ to ░░░░ that

(i) $d \mid a$ and $d \mid b$░░░░ ░░░░  

░░░░ ░░░░ $c \mid a$ ░░░░ $c \mid b$░░░░ ░░░░ $c \mid d$.

░░░░ $a = 0$░░░░ $d \mid a$ is ░░░░ If $a \neq 0$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ with ░░░░ ░░░░ ░░░░ $1.3$, ░░░░ know ░░░░ there ░░░░ integers $q$ and $r$ ░░░░ that,  $$a = dq + r,$$  with $0 \leq r < d$░░░░ ░░░░ ░░░░  $$r = a - dq = a - (ma + nb)q = a(1 - m) + b(-nq).$$  ░░░░ shows ░░░░ $r$ ░░░░ a linear combination of $a$ and $b$. ░░░░ ░░░░ be ░░░░ ░░░░ of $S$░░░░ ░░░░ ░░░░ $r < d$░░░░ and $d$ ░░░░ been ░░░░ ░░░░ ░░░░ the smallest element of $S$. ░░░░ then $r$ ░░░░ ░░░░ ░░░░ since $r$ ░░░░ a linear combination of $a$ ░░░░ $b$, ░░░░ $S$ ░░░░ all **positive** linear ░░░░ ░░░░ $a$ ░░░░ $b$░░░░ Since $r \geq 0$ ░░░░ $r$ ░░░░ ░░░░ positive, ░░░░ follows ░░░░ $r = 0$. This proves ░░░░ $a = dq$, showing that $d \mid a$░░░░

By essentially the same argument, we can deduce that $d \mid b$. ░░░░ ░░░░ ░░░░ $a$ ░░░░ $b$ are interchangeable.) This ░░░░ care of (i).

We still ░░░░ ░░░░ prove (ii). ░░░░ ░░░░ have ░░░░ common ░░░░ $c$ ░░░░ $a$ ░░░░ $b$: $c \mid a$ and $c \mid b$. Then ░░░░ ░░░░ $a = uc, b = vc$ ░░░░ some integers $u$ ░░░░ $v$. This ░░░░  $$d = ma + nb = m(uc) + n(vc) = (mu + nv)c$$  and ░░░░ ░░░░ $c \mid d$░░░░ ░░░░ ░░░░ needed. $\blacksquare$

░░░░ $1.8$ ░░░░ ░░░░ if somewhat ░░░░ ░░░░ Here ░░░░ one.

_**Corollary $1.9$:** Let $a, b$ be integers. Then $\text{gcd}(a, b) = 1$ if and only if $1$ may be expressed as a linear combination of $a$ and $b$._

_Proof:_ 

If $\text{gcd}(a, b) = 1$░░░░ ░░░░ the ░░░░ $1$ ░░░░ ░░░░ ░░░░ as a ░░░░ combination of $a$ and $b$ by ░░░░ $1.8$░░░░ On the other hand, ░░░░ $1$ ░░░░ be ░░░░ ░░░░ ░░░░ linear ░░░░ of $a$ ░░░░ $b$, then $1$ ░░░░ necessarily ░░░░ **smallest positive** ░░░░ ░░░░ of $a$ ░░░░ $b$, ░░░░ $1$ ░░░░ the smallest ░░░░ integer. It follows ░░░░ $\text{gcd}(a, b) = 1$, again as a ░░░░ ░░░░ ░░░░ $1.8$. $\blacksquare$

_**Definition $1.10$:**  We say that $a$ and $b$ are **relatively prime** if $\text{gcd}(a, b) = 1$._

░░░░ example, $3$ ░░░░ $7$ ░░░░ relatively prime. It ░░░░ ░░░░ **every** ░░░░ ░░░░ a linear combination ░░░░ $3$ and $7$░░░░ ░░░░ $1$ ░░░░ ░░░░ ░░░░ combination, ░░░░ a ░░░░ ░░░░ a linear combination ░░░░ a ░░░░ ░░░░ For example, ░░░░ we ░░░░ a random integer, ░░░░  $$173233884731,$$  then, a ░░░░ ░░░░ ░░░░  $$173233884731 = 866191923655 \cdot 3 + (-346476769462) \cdot 7$$
_**Corollary $1.11$:** Let $a$, $b$, $c$ be integers. If $a \mid bc$ and $\gcd{(a, b)} = 1$, then $a \mid c$._ 

_Proof:_ 

By Theorem $1.8$,  $$1 = ma + nb$$  
░░░░ some ░░░░ $m$ and $n$░░░░ ░░░░ by $c$, $$c = 1 \cdot c = (ma + nb)c = mac + nbc = (mc)a + n(bc).$$  ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that $a \mid bc$, so $bc = ra$ for some integer $r$. ░░░░  $$c = (mc)a + n(ra) = (mc + nr)a,$$  ░░░░ ░░░░ shows ░░░░ $a \mid c$ as needed. $\blacksquare$

_**Remark $1.12$:** The hypothesis that $\gcd(a,b)=1$ is necessary. For example, we have that $10 \mid (6\cdot5)$, and yet $10$ divides neither $6$ nor $5$. This is not contradicting the statement, since $\gcd(10,6)=2\neq1$._

░░░░ ░░░░ come back ░░░░ the ░░░░ of ░░░░ ░░░░ ░░░░ compute ░░░░ gcd ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ just ░░░░ the definition (as we did at the ░░░░ ░░░░ ░░░░ ░░░░ Given ░░░░ ░░░░ $a$ and $b$░░░░ ░░░░ may ░░░░ that $b\neq0$ ░░░░ $b=0$, ░░░░ $\gcd(a,b)=a$░░░░ ░░░░ there ░░░░ nothing ░░░░ “compute”). ░░░░ can ░░░░ ░░░░ division with ░░░░ ░░░░ ░░░░ ░░░░

$$
\begin{align*}
a &= bq_0 + r_0 \quad 0 \leq r_0 \lt b \\ \\[0.1pt]
b &= r_0q_1 + r_1 \quad 0\leq r_1 \lt r_0 \\ \\[0.1pt]
r_0 &= r_1 q_2 + r_2 \quad 0 \leq r_2 \lt r_1
\end{align*}
$$
We can keep ░░░░ ░░░░ long ░░░░ the ░░░░ of the last division ░░░░ not $0$░░░░ ░░░░ ░░░░ each ░░░░ ░░░░ remainder decreases and remains ░░░░ ░░░░ some point ░░░░ must become $0$:

$$
\begin{align*}
r_{n - 2} &= r_{n - 1} q_n + r_n \quad 0 \leq r_n \lt r_{n - 1} \\ \\[0.1pt]
r_{n - 1} &= r_nq_{n + 1} + 0
\end{align*}
$$
**Example $1.13$:** ░░░░ ░░░░ this ░░░░ with $a = 30$, $b = -42$ ░░░░ ░░░░ $1.6$):

$$
\begin{align*}
30 &= -42 \cdot 0 + 30 \\ \\[0.1pt]
-42 &= 30 \cdot (-2) + 18 \\ \\[0.1pt]
30 &= 18 \cdot 1 + 12 \\ \\[0.1pt]
18 &= 12 \cdot 1 + 6 \\ \\[0.1pt]
12 &= 6 \cdot 2 + 0
\end{align*}
$$
The ░░░░ nonzero ░░░░ is $6$, and ░░░░ had ░░░░ ░░░░ $\gcd(30, -42) = 6$. ░░░░ is not ░░░░ ░░░░

_**Theorem $1.14$ (Euclidean algorithm):** Let $a$, $b$ be integers, with $b \neq 0$. Then, with notation as above, $\gcd(a,b)$ equals the last nonzero remainder $r_n$._

More explicitly: ░░░░ $r_{-2} = a$ and $r_{-1} = b$░░░░ for $i \geq 0$░░░░ ░░░░ $r_i$ be the remainder of the division of $r_{i-2}$ ░░░░ $r_{i-1}$. Then there is an integer $n$ such that $r_n \neq 0$ and $r_{n+1} = 0$, and $\gcd(a,b) = r_n$.

Applying the ░░░░ ░░░░ to ░░░░ integers ░░░░ requires being able to carry ░░░░ the division with remainder, ░░░░ ░░░░ ░░░░ fast. ░░░░ factorization is ░░░░

░░░░ $1.14$ is ░░░░ ░░░░ to ░░░░ than it ░░░░ seem, ░░░░ ░░░░ understand ░░░░ following ░░░░ 

_**Lemma $1.15$:** Let $a, b, q, r$ be integers, with $b \neq 0$, and assume that $a = bq + r$. Then,_
$$\text{gcd}(a, b) = \text{gcd}(b, r).$$ _Proof:_  

░░░░ is ░░░░ to ░░░░ that ░░░░ pairs $a$ and $b$░░░░ $b$ and $r$ have the same common divisors: ░░░░ the largest among the common divisors will ░░░░ ░░░░ gcd of ░░░░ $(a, b)$ and $(b, r)$░░░░ proving ░░░░ ░░░░  

Let $c$ ░░░░ a ░░░░ ░░░░ ░░░░ $a$ and $b$: $c \mid a$ and $c \mid b$. Then $a = cs$, $b = ct$ ░░░░ ░░░░ integers $s$ ░░░░ $t$ . It ░░░░ ░░░░  $$r = a - bq = cs - ctq = c(s - tq),$$  and this ░░░░ that $c \mid r$░░░░ Since we already have that $c \mid b$, ░░░░ see ░░░░ $c$ ░░░░ ░░░░ common ░░░░ of $b$ ░░░░ $r$. One applies the ░░░░ ░░░░ to ░░░░ that if $c$ is ░░░░ common divisor ░░░░ $b$ ░░░░ $r$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $a$ and $b$░░░░ 

Why ░░░░ Lemma $1.15$ ░░░░ ░░░░ $1.14$░░░░ ░░░░ ░░░░ ░░░░ described ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░$$\text{gcd}(a, b) = \text{gcd}(b, r_0) = \text{gcd}(r_0, r_1) = \dots = \text{gcd}(r_{n-1}, r_n) = \text{gcd}(r_n, 0) = r_n,$$  and ░░░░ is precisely ░░░░ Theorem $1.14$ claims.  

_**Remark $1.16$:** If necessary, one can chase the Euclidean algorithm backwards and find integers $m, n$ such that $\text{gcd}(a, b) = ma + nb$. Rather than giving a formal description of this process, let’s see how it works in Example $1.13$. The fourth (i.e., second-to-last) line in the “algorithm” tells us,_
$$\text{gcd}(30, -42) = 6 = 18 - 12 \cdot 1 = 18 - 12.$$░░░░ ░░░░ the ░░░░ line, $12 = 30 - 18$, so ░░░░ says,
$$\text{gcd}(30, -42) = 18 - (30 - 18) = 2 \cdot 18 - 30.$$░░░░ to ░░░░ second line, $18 = -42 - 30 \cdot (-2)$, therefore,  $$\text{gcd}(30, -42) = 2 \cdot (-42 - 30 \cdot (-2)) - 30 = 3 \cdot 30 + 2 \cdot (-42),$$and ░░░░ ░░░░ ░░░░ $m = 3$░░░░ $n = 2$ work.

#### The Fundamental Theorem of Arithmetic

Everything we have ░░░░ ░░░░ far ░░░░ ░░░░ with the ░░░░ ░░░░ ░░░░ ░░░░ and ░░░░ in $\mathbb{Z}$. ░░░░ may ░░░░ ░░░░ addition is a ░░░░ ░░░░ than multiplication, ░░░░ there ░░░░ ░░░░ ░░░░ ░░░░ this is ░░░░ the case. Everything about ░░░░ ░░░░ down ░░░░ the number $1$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ obtained ░░░░ adding $1$ ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ if ░░░░ allow ░░░░ then you ░░░░ ‘generate’ ░░░░ ░░░░ from $1$. The number $1$ ░░░░ ░░░░ ░░░░ brick you ░░░░ ░░░░ ░░░░ the whole ░░░░ $\mathbb{Z}$, if ░░░░ can ░░░░ ░░░░ addition. (We ░░░░ ░░░░ in due ░░░░ ░░░░$§10.2$░░░░ that ░░░░ ░░░░ the group $(\mathbb{Z},+)$ ‘cyclic’.) From this point ░░░░ ░░░░ ░░░░ is ░░░░ a ░░░░ ░░░░ ░░░░ ░░░░ obtain every ░░░░ ░░░░ multiplying a ░░░░ ░░░░ by ░░░░ Even if you ░░░░ ░░░░ ░░░░ ░░░░ won’t do. As it happens, however, ░░░░ we ░░░░ build ░░░░ whole of $\mathbb{Z}$ with ░░░░ ░░░░ we need ░░░░ ░░░░ bricks—an ░░░░ number ░░░░ them.

_**Definition $1.17$:** An integer $p$ is ‘irreducible’ if $p\neq\pm 1$ and the only divisors of $p$ are $\pm 1,\pm p$. An integer $\neq 0,\neq\pm 1$ is ‘reducible’ or ‘composite’ if it is not irreducible._

░░░░ ░░░░ $0$ ░░░░ $\pm 1$ ░░░░ ░░░░ irreducible nor ░░░░ ░░░░ to ░░░░ ░░░░

For ░░░░ $10$ ░░░░ ░░░░ irreducible ░░░░ ░░░░ is a ░░░░ integer): indeed, $2$ is ░░░░ divisor of $10$ ░░░░ does not ░░░░ $\pm 1,\pm 10$. The ░░░░ few irreducible ░░░░ ░░░░ are,$$2,3,5,7,11,13,17,19,23,29,31,37,41,43,\dots$$░░░░ straightforward ░░░░ to ░░░░ the list of irreducible ░░░░ ░░░░ ░░░░ the Sieve ░░░░ Eratosthenes: list all ░░░░ $\geq 2$░░░░ ░░░░ cross ░░░░ ░░░░ ░░░░ ░░░░ $2$ bigger ░░░░ $2$, then ░░░░ ░░░░ ░░░░ $3$ ░░░░ ░░░░ $3$░░░░ and ░░░░ on: ░░░░ out ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ have not ░░░░ ░░░░ out ░░░░ ░░░░ ░░░░$$2\ 3\ 5\ \cancel{6}\ 7\ \cancel{9}\ 11\ \cancel{12}\ 13\ \cancel{15}\ 17\ \cancel{18}\ 19\ \cancel{21}\ \dots$$It ░░░░ ░░░░ clear that ░░░░ ░░░░ that are ░░░░ ░░░░ ░░░░ ░░░░ all and only the positive irreducible ░░░░

We ░░░░ ░░░░ that every ░░░░ ░░░░ ░░░░ written ░░░░ a ░░░░ of irreducible ░░░░ and further ░░░░ this can ░░░░ done ░░░░ ░░░░ ░░░░ unique ░░░░ Before we ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ this definition a little more carefully. ░░░░ is a consequence which relates ░░░░ $1.17$ with ░░░░ material ░░░░ in $§1.3$.

_**Lemma $1.18$:**: Assume that $p$ is an irreducible integer and that $b$ is not a multiple of $p$. Then $b$ and $p$ are relatively prime, that is, $\text{gcd}(p,b)=1$._

_Proof:_  

░░░░ $c$ ░░░░ ░░░░ common divisor ░░░░ $p$ and $b$░░░░ ░░░░ in particular $c=\pm 1$ ░░░░ $c=\pm p$░░░░ ░░░░ $c\mid p$ and $p$ ░░░░ irreducible. ░░░░ $c$ ░░░░ also a ░░░░ of $b$, and $p$ ░░░░ ░░░░ ░░░░ divisor of $b$ by hypothesis, ░░░░ deduce ░░░░ necessarily $c=\pm 1$░░░░ This ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ divisors of $p$ and $b$░░░░ ░░░░ ░░░░ is in ░░░░ ░░░░ for $\text{gcd}(p,b)$░░░░ ░░░░ $\text{gcd}(p,b)\geq 0$, ░░░░ ░░░░ ░░░░ ░░░░ $\text{gcd}(p,b)=1$░░░░

This ░░░░ ░░░░ interesting. If $p$ ░░░░ ░░░░ and $b$ is not ░░░░ multiple of $p$░░░░ we ░░░░ know ░░░░ ░░░░ exist integers $m$ and $n$ such ░░░░ $mp+nb=1$. Was this ░░░░ Did not appear to be ░░░░ case, but it ░░░░ ░░░░ since ░░░░ ░░░░ proved Lemma $1.18$ ░░░░ ░░░░ Corollary $1.9$ earlier.

_**Definition $1.19$:** An integer $p$ is _prime_ if $p \neq \pm 1$ and whenever $p$ divides the product $bc$ of two integers $b$, $c$, then $p$ divides $b$ or $p$ divides $c$._

For example, $10$ is ░░░░ ░░░░ indeed, $10$ ░░░░ $30 = 6 \cdot 5$, ░░░░ if $10$ ░░░░ neither $6$ ░░░░ $5$. On the ░░░░ hand, $0$ is ░░░░ ░░░░ ░░░░ Definition $1.19$░░░░

_Caveat:_ ░░░░ ░░░░ ░░░░ unusual choice; most references ░░░░ ░░░░ ░░░░ $0$ ░░░░ a prime integer, and this ░░░░ may even be viewed ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ choice to align with ░░░░ ░░░░ involving ideals, which ░░░░ will encounter ░░░░ $§6.1$; and this ░░░░ will enable ░░░░ to ░░░░ ░░░░ sharper statements (cf. ░░░░ $3.30$ ░░░░ $6.6$░░░░

_Remark 1.20:_ 

- ░░░░ mathematics, _or_ is not exclusive. The ░░░░ allows ░░░░ the possibility ░░░░ $p$ may ░░░░ _both_ $b$ ░░░░ $c$.

- It follows ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $p$ ░░░░ prime, ░░░░ $p$ divides ░░░░ ░░░░ ░░░░ ░░░░ integers $a_i : p | a_1 \cdots a_s$, then $p$ must divide (at least) one of the integers $a_i$.

_**Theorem $1.21$:** Let $p \in \Z$, $p \neq 0$. Then $p$ is prime if and only if it is irreducible._

_Proof:_ 
If $p = \pm 1$, then it's not ░░░░ ░░░░ irreducible), ░░░░ our ░░░░ ░░░░ Then, we need to concern ourselves ░░░░ integers which are not $0$ nor $\pm 1$. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ prove the ░░░░ and ░░░░ ░░░░ that is, 

- _Direct implication: If $p$ is prime, then it's irreducible._
- _Converse implication: If $p$ is irreducible, then it must be prime._

░░░░ ░░░░ ░░░░ implication, ░░░░ $p$ ░░░░ prime ░░░░ $d \mid p$, ░░░░ $d$ ░░░░ ░░░░ divisor of $p$░░░░ ░░░░$$p = dq$$But then $p$ ░░░░ $dq$ (since $dq = 1 \cdot p$ in ░░░░ ░░░░ ░░░░ ░░░░ $p$ ░░░░ prime ░░░░ can deduce ░░░░ $p \mid d$ ░░░░ $p \mid q$░░░░ If $p \mid d$░░░░ then we ░░░░ that ░░░░ $d \mid p$ ░░░░ $p \mid d$; by ░░░░ $1.2$, ░░░░ ░░░░ case ░░░░ ░░░░ that $|d| \leq |p|$ or $|p| \leq |d|$░░░░ ░░░░ ░░░░ can ░░░░ $|d| = |p|$░░░░ that ░░░░ $d = \pm p$░░░░ 

On the ░░░░ ░░░░ ░░░░ $p \mid q$, then there ░░░░ an integer $e$ such ░░░░ $q = ep$░░░░ In this ░░░░ $p = dq = dep$, ░░░░ hence $p(de - 1) = 0$░░░░ Since $p \neq 0$░░░░ we deduce $de - 1 = 0$░░░░ ░░░░ is, $de = 1$░░░░ Then $d$ divides $1$, ░░░░ ░░░░ ░░░░ $d = \pm 1$░░░░ ░░░░ ░░░░ have ░░░░ ░░░░ if $d \mid p$░░░░ ░░░░ $d = \pm p$ ░░░░ $d = \pm 1$░░░░ ░░░░ ░░░░ shows that $p$ ░░░░ ░░░░ as ░░░░ needed.

For ░░░░ converse, we ░░░░ that $p$ ░░░░ ░░░░ ░░░░ ░░░░ divisors ░░░░ ░░░░ $\pm 1$ and $\pm p$. In order ░░░░ prove ░░░░ $p$ ░░░░ ░░░░ ░░░░ assume ░░░░ $p \mid bc$ ░░░░ ░░░░ to show ░░░░ $p \mid b$ ░░░░ $p \mid c$. If $p$ happens to divide $b$, we have nothing ░░░░ ░░░░ so ░░░░ may assume ░░░░ $p$ does ░░░░ divide $b$░░░░ ░░░░ we have ░░░░ prove ░░░░ in this ░░░░ $p$ necessarily divides $c$░░░░ By ░░░░ $1.18$░░░░ we have ░░░░ $\gcd(p, b) = 1$. But then $p$ ░░░░ indeed divide $c$░░░░ ░░░░ ░░░░ $1.11$. $\blacksquare$

There are ░░░░ ░░░░ ░░░░ a distinction between _irreducible_ and _prime_, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ almost ░░░░ ░░░░ we ░░░░ ░░░░ proved. We ░░░░ adopt the convention (as ░░░░ ░░░░ of simply ░░░░ $0$ when dealing ░░░░ prime integers, ░░░░ then _prime_ and _irreducible_ would ░░░░ ░░░░ I prefer otherwise: ░░░░ does ░░░░ seem necessary ░░░░ treat $0$ as ░░░░ ░░░░ number in this ░░░░ More ░░░░ ░░░░ ░░░░ to avoid identifying the notions ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ when ░░░░ view these ░░░░ ░░░░ a more general ░░░░ ░░░░ on ░░░░$§6.2$░░░░ ░░░░ ░░░░ discover ░░░░ they ░░░░ indeed ░░░░ ░░░░ There are **rings** ░░░░ which ░░░░ analogues of Definitions $1.17$ ░░░░ $1.19$ ░░░░ really non-equivalent ░░░░ even for nonzero ░░░░ As it ░░░░ nonzero ░░░░ elements are ░░░░ irreducible in ░░░░ ░░░░ but the converse will not ░░░░ ░░░░ in general. ░░░░ the first part of ░░░░ proof ░░░░ Theorem $1.21$ ░░░░ ░░░░ broadly, ░░░░ the ░░░░ ░░░░ will ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ The ░░░░ $\mathbb{Z}$ ░░░░ ░░░░ ░░░░

The next ░░░░ is also ░░░░ expression ░░░░ how special $\mathbb{Z}$ is. ░░░░ ░░░░ so important ░░░░ it is ░░░░ ░░░░ **fundamental theorem of arithmetic**░░░░ It ░░░░ the ░░░░ of the claim we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that the multiplicative structure ░░░░ $\mathbb{Z}$ is ░░░░ on infinitely ░░░░ ░░░░ The bricks are precisely ░░░░ ░░░░ integers.

_**Theorem $1.22$ (Fundamental Theorem of Arithmetic):** Every integer $n \neq 0, \pm 1$ is a product of finitely many irreducible integers: $\forall n \in \mathbb{Z}, n \neq 0, n \neq \pm 1$, there exist irreducible integers $q_1, \dots, q_r$ such that,_

$$
n = q_1 \cdots q_r.
$$
_Further, this factorization is unique in the sense that if,_

$$
n = q_1 \cdots q_r = p_1 \cdots p_s,
$$
_with all $q_i, p_j$ irreducible, then necessarily $s = r$ and after reordering the factors we have $p_1 = \pm q_1, p_2 = \pm q_2, \dots, p_r = \pm q_r$._

_**Remark $1.23$:** As mentioned in this statement, an expression such as ($1.2$) is called a “factorization”, and specifically a **factorization into irreducibles**, or **prime factorization**. The statement does not exclude that $r = 1$: this happens precisely when $n = q_1$ ░░░░ ░░░░ irreducible. We ░░░░ in ░░░░ even ░░░░ that ░░░░ “empty ░░░░ equals $1$ (it ░░░░ not ░░░░ to do ░░░░ ░░░░ ░░░░ ░░░░ would ░░░░ ░░░░ even $n = 1$ has ░░░░ irreducible factorization: ░░░░ ░░░░ consisting ░░░░ no ░░░░ corresponding to $r = 0$░░░░

Incidentally, note ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ be quite a bit more ░░░░ if we had not ░░░░ ░░░░ $\pm 1$ ░░░░ our definition of “irreducible”. If ░░░░ ░░░░ $1$ as ░░░░ ░░░░ factor”, then we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ factorization, ░░░░ the ░░░░ ░░░░ ░░░░ the statement would simply not ░░░░ ░░░░

_Proof of Theorem $1.22$:_ 
It ░░░░ ░░░░ to ░░░░ the ░░░░ ░░░░ ░░░░ integers $n$░░░░ ░░░░ ░░░░ ░░░░ incorporate ░░░░ ░░░░ ░░░░ ░░░░ Let’s ░░░░ deal ░░░░ ░░░░ **existence** of factorizations for integers $n > 1$, and then with the **uniqueness** of ░░░░ ░░░░

Both existence ░░░░ uniqueness are consequences of ░░░░ ░░░░ ░░░░ ░░░░ existence, ░░░░

$$
S = \{n \in \mathbb{Z}, n > 1 \mid n \text{ is not a product of finitely many irreducibles}\}.
$$
░░░░ have ░░░░ prove that $S$ ░░░░ empty: ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ integer $n > 1$ does have a ░░░░ into ░░░░

░░░░ contradiction, let’s assume that $S$ is ░░░░ empty. In this ░░░░ $S$ is a ░░░░ ░░░░ of nonnegative integers, ░░░░ $S$ ░░░░ ░░░░ least ░░░░ by ░░░░ well-ordering principle. Let ░░░░ integer ░░░░ $n$.

Since $n \in S$, $n$ ░░░░ not ░░░░ ░░░░ ░░░░ ░░░░ and in particular $n$ is not irreducible ░░░░ ░░░░ $n$ has divisors ░░░░ than $\pm 1, \pm n$: ░░░░ is, $n = ab$ ░░░░ some integers $a, b$ ░░░░ from $\pm 1, \pm n$░░░░ We ░░░░ assume both $a$ ░░░░ $b$ are ░░░░ since $n$ is positive. Since $a \mid n$ and $b \mid n$, ░░░░ ░░░░ ░░░░ $1$, we ░░░░ that $1 < a < n$ ░░░░ $1 < b < n$ ░░░░ ░░░░ again using Lemma $1.2$!) ░░░░ $n$ is ░░░░ smallest ░░░░ ░░░░ $S$░░░░ so $a \notin S$ ░░░░ $b \notin S$. ░░░░ tells us ░░░░ both $a$ ░░░░ $b$ ░░░░ have ░░░░ ░░░░ ░░░░

$$
a = q_1 \cdots q_u, \quad b = q'_1 \cdots q'_v
$$
░░░░ irreducible ░░░░ $q_i, q'_j$. ░░░░ have ░░░░ a contradiction, because this ░░░░ imply that,

$$
n = q_1 \cdots q_u \cdot q'_1 \cdots q'_v,
$$
░░░░ that $n$ _does_ have ░░░░ ░░░░ ░░░░ irreducibles—this would mean that $n \notin S$░░░░ while $n$ ░░░░ ░░░░ element of $S$ ░░░░ ░░░░ with. Thus, our assumption that $S$ be nonempty ░░░░ to ░░░░ contradiction. It ░░░░ that $S$ ░░░░ ░░░░ ░░░░ this proves ░░░░ first ░░░░ of ░░░░ ░░░░ every ░░░░ $\neq 0, \pm 1$ ░░░░ factorizations.

Now ░░░░ have to ░░░░ ░░░░ uniqueness. ░░░░ $n$ ░░░░ the ░░░░ $q_i$ are all _positive_, ░░░░ ░░░░ ░░░░ means ░░░░ the factorization ░░░░$1.2$) ░░░░ ░░░░ ░░░░ to the order ░░░░ the ░░░░ This ░░░░ what ░░░░ will ░░░░ the general ░░░░ follows easily from this.

░░░░ ░░░░ ░░░░ that ░░░░ not ░░░░ the case, ░░░░ let $T$ be the ░░░░ of nonnegative integers $n$ for which the factorization is not ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that $T$ ░░░░ ░░░░ ░░░░ ░░░░ would like to ░░░░ ░░░░ contradiction ░░░░ ░░░░ assumption.

By ░░░░ the ░░░░ should ░░░░ ░░░░ By definition, $T$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ integers. ░░░░ $T$ ░░░░ ░░░░ ░░░░ ░░░░ has a _minimum_ $n$ ░░░░ ░░░░ _well-ordering principle_░░░░ that is, the ░░░░ of $n$ is not unique, ░░░░ ░░░░ factorization of any ░░░░ ░░░░ than $n$ _is_ ░░░░ Write two distinct ░░░░ ░░░░ $n$:

$$
n = q_1 \cdots q_r = p_1 \cdots p_s,
$$
░░░░ ░░░░ $q_i, p_j$ ░░░░ and positive. Both $r$ and $s$ ░░░░ $\geq 1$░░░░ ░░░░ $n$ ░░░░ ░░░░ equal to $1$░░░░ We ░░░░ ░░░░ that ░░░░ two ░░░░ ░░░░ _not_ ░░░░ same up ░░░░ ░░░░ ░░░░ we ░░░░ at reaching ░░░░ ░░░░

Look at ░░░░$1.3$): it ░░░░ us ░░░░ ░░░░ ░░░░ $p_1$ divides the product $q_1 \cdots q_r$. Since $p_1$ is ░░░░ it ░░░░ prime ░░░░ Theorem $1.21$, and therefore (cf. ░░░░ $1.20$) ░░░░ ░░░░ divide ░░░░ of ░░░░ ░░░░ $q_i$. After rearranging the factors $q_i$, we ░░░░ assume ░░░░ $p_1$ divides $q_1$░░░░ 

░░░░ $q_1$ is itself irreducible, so its divisors are $\pm 1, \pm q_1$. Since $p_1$ is irreducible, it is not equal to $\pm 1$; and since we have established that $p_1$ ░░░░ a divisor ░░░░ $q_1$, necessarily $p_1 = \pm q_1$. Both $q_1$ ░░░░ $p_1$ are positive, so we can conclude that $p_1 = q_1$.

░░░░ this point ░░░░ can rewrite ($1.3$) as,

$$
n = q_1 \cdot q_2 \cdots q_r = q_1 \cdot p_2 \cdots p_s.
$$
By ░░░░ ░░░░$q_1 \neq 0$░░░░ it follows that,

$$
q_2 \cdots q_r = p_2 \cdots p_s.
$$

░░░░ ░░░░ ░░░░ ░░░░ the integer $n / q_1$, and in particular it is less than $n$. Since $n$ was the least positive integer for which the factorization was not unique, the factorization is unique for $n / q_1$. ░░░░ ░░░░ that $r - 1 = s - 1$ ░░░░ $q_i = p_i$ for $i \geq 2$ up ░░░░ ░░░░ We had already established ░░░░ $q_1 = p_1$░░░░ ░░░░ it ░░░░ ░░░░ $r = s$ and $q_i = p_i$ ░░░░ $i \geq 1$, ░░░░ to ░░░░ ░░░░ ░░░░ that the two factorizations ░░░░ in ░░░░$1.3$░░░░ ░░░░ ░░░░ contradicting ░░░░ assumption.

░░░░ the assumption ░░░░ $T \neq \emptyset$ ░░░░ to a ░░░░ ░░░░ ░░░░ $T = \emptyset$, ░░░░ is, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $n > 1$, ░░░░ we are ░░░░ $\blacksquare$

The fact that ░░░░ _Fundamental Theorem of Arithmetic_ is true tells ░░░░ that $\mathbb{Z}$ is rather special. When ░░░░ learn ░░░░ bit ░░░░ ░░░░ ░░░░ of rings, ░░░░ will recognize ░░░░ this ░░░░ tells ░░░░ that $\mathbb{Z}$ is ░░░░ _UFD_ (‘unique factorization ░░░░ This ░░░░ that $\mathbb{Z}$ is ░░░░ domain (a ░░░░ nice ░░░░ of ring) in ░░░░ ░░░░ ░░░░ admits ░░░░ ░░░░ into irreducibles, and further that this ░░░░ is unique in ░░░░ ░░░░ sense, as ░░░░ out in ░░░░ $1.22$. ░░░░ ░░░░ ░░░░ at more ░░░░ UFDs in $§6.4$.

░░░░ you have paid close ░░░░ ░░░░ ░░░░ argument, you ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ did not need ░░░░ use Theorem $1.21$ ░░░░ ░░░░ proof ░░░░ ░░░░ second part. In $\mathbb{Z}$░░░░ the existence ░░░░ ░░░░ only depends on ░░░░ ░░░░ ░░░░ irreducibility, ░░░░ ░░░░ **uniqueness** ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ This is a facet ░░░░ ░░░░ more general theory ░░░░ ░░░░ ░░░░ rings.

░░░░ a consequence of ░░░░ $1.22$░░░░ every ░░░░ integer $\neq 1$ determines a well-defined ░░░░ of positive ░░░░ ░░░░ appearing with ░░░░ for example, ░░░░ irreducible ░░░░ $12 = 2 \cdot 2 \cdot 3$ tells us that $12$ ░░░░ the ‘multiset’ ░░░░ of $2, 2, 3$. ░░░░ the uniqueness part, ░░░░ ░░░░ of no other collection ░░░░ irreducibles ░░░░ $12$░░░░ Dealing ░░░░ negative ░░░░ ░░░░ no harder: ░░░░ could, for example, insist ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ irreducible ░░░░ is taken ░░░░ ░░░░ ░░░░ sign.

░░░░ ░░░░ yet another ░░░░ we can write ░░░░ positive integer $n$ ░░░░ ░░░░ ($1.5$):

$$
n = 2^{v_2} 3^{v_3} 5^{v_5} 7^{v_7} 11^{v_{11}} \cdots
$$
░░░░ ░░░░ ‘infinite ░░░░ ░░░░ ░░░░ right consists of ░░░░ ░░░░ ░░░░ ░░░░ irreducible elements, ░░░░ only finitely many of the ░░░░ $v_i$ are not equal to $0$. For example, $12$ is obtained by letting $v_2 = 2, v_3 = 1$, and setting all other exponents $v_i$ to $0$░░░░ We can even ░░░░ this when $n$ ░░░░ $1$: this case corresponds to ░░░░ ░░░░ the exponents ░░░░ ░░░░ $0$░░░░ The ░░░░ of ░░░░ Fundamental ░░░░ of Arithmetic is that **every** ░░░░ ░░░░ $n$ ░░░░ ░░░░ expressed in ░░░░ way, ░░░░ ░░░░ ░░░░ ░░░░ list ░░░░ ░░░░ $(v_2, v_3, v_5, \dots)$ is determined _uniquely_ ░░░░ $n$.

░░░░ ░░░░ ░░░░ we get ░░░░ different ░░░░ of ░░░░ ░░░░ divisibility ░░░░ on ░░░░ common divisors. First, ░░░░ $n$ ░░░░ given ░░░░ in (1.5) ░░░░ another positive ░░░░ $c$ ░░░░ given ░░░░

$$
c = 2^{r_2} 3^{r_3} 5^{r_5} 7^{r_7} 11^{r_{11}} \cdots,
$$
░░░░ $c \mid n$ if and ░░░░ ░░░░ $r_i \leq v_i$ ░░░░ all $i$░░░░ ░░░░ gives us ░░░░ ░░░░ to write down ░░░░ divisors ░░░░ a given integer, ░░░░ ░░░░ following ░░░░ consequence.

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
_where $\delta_i = \min(\alpha_i, \beta_i)$ ░░░░ all $i$░░░░

_Proof:_ 
If $c = 2^{\gamma_2} 3^{\gamma_3} 5^{\gamma_5} \cdots$ is a common divisor of $a$ and $b$, as observed above, we must have $\gamma_i \leq \alpha_i$ and $\gamma_i \leq \beta_i$ ░░░░ all $i$.

░░░░ $\delta_i = \min(\alpha_i, \beta_i)$ is indeed $\leq \alpha_i$ ░░░░ $\leq \beta_i$░░░░ ░░░░ ░░░░ that,

$$
d = 2^{\delta_2} 3^{\delta_3} 5^{\delta_5} \cdots
$$
is a common ░░░░ ░░░░ $a$ ░░░░ $b$, giving requirement (i) ░░░░ Definition ░░░░ Further, we note ░░░░ ░░░░ $\gamma_i$ is less than both $\alpha_i$ and $\beta_i$, then $\gamma_i < \min(\alpha_i, \beta_i) = \delta_i$░░░░ This ░░░░ ░░░░ ░░░░ common divisor of $a$ ░░░░ $b$ divides $d$░░░░ and shows that $d$ also satisfies requirement ░░░░ in Definition $1.5$. $\blacksquare$

Essentially the same ░░░░ ░░░░ ░░░░ that the _least common multiple_ ░░░░ is similarly ░░░░ ░░░░ ░░░░ exponents $\max(\alpha_i, \beta_i)$. (The ‘least ░░░░ multiple’ ░░░░ $a$ and $b$ is ░░░░ it says ░░░░ ░░░░ be: a number $\ell$ that is ░░░░ multiple of $a$ and a multiple ░░░░ $b$, ░░░░ ░░░░ ░░░░ ░░░░ common multiple ░░░░ $a$ and $b$ ░░░░ a multiple of $\ell$░░░░

Of course this ░░░░ again _not_ ░░░░ ░░░░ ░░░░ ░░░░ compute gcds; ░░░░ ░░░░ ░░░░ (cf. Theorem 1.14) is ░░░░ ░░░░ In practice, ░░░░ the ░░░░ factorization of ░░░░ integer is computationally ░░░░ ░░░░ best ░░░░ ░░░░ for factorizations would run ░░░░ _quantum computers_░░░░ ░░░░ practical ░░░░ computers ░░░░ not around ░░░░ (but ░░░░ may ░░░░ ░░░░

In ░░░░ ░░░░ ░░░░ can ░░░░ ░░░░ following ░░░░ consequence ░░░░ these ░░░░

_**Corollary $1.27$:** Two nonzero integers $a, b$ are relatively prime if and only if they have no common irreducible factor._

_Proof:_ 

Write,

$$
a = \pm 2^{\alpha_2} 3^{\alpha_3} 5^{\alpha_5} \cdots, \quad b = \pm 2^{\beta_2} 3^{\beta_3} 5^{\beta_5} \cdots
$$
░░░░ ░░░░

By Proposition 1.25, $a$ ░░░░ $b$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\gcd(a, b) = 1$, ░░░░ when $\min(\alpha_i, \beta_i) = 0$ for all $i$░░░░ ░░░░ ░░░░ if ░░░░ ░░░░ if $\alpha_i = 0$ or $\beta_i = 0$ ░░░░ all $i$░░░░ This ░░░░ ░░░░ that $a$ and $b$ have ░░░░ common irreducible ░░░░ $\blacksquare$

░░░░ numbers ░░░░ still very ░░░░ A ░░░░ ░░░░ can be ░░░░ ░░░░ ░░░░

░░░░ There ░░░░ infinitely many of them. ░░░░ ░░░░ ░░░░ as ░░░░ exercise (Exercise $1.26$ to be precise); you ░░░░ ░░░░ ░░░░ in the ░░░░ of Euclid, ░░░░ ░░░░ credited ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ fact, and ░░░░ ░░░░ use the Fundamental ░░░░ ░░░░ ░░░░ ░░░░

- ░░░░ $\pi(n)$ ░░░░ the number ░░░░ ░░░░ ░░░░ less than ░░░░ ░░░░ ░░░░ $n$ ░░░░ $\pi(1) = 0, \pi(2) = 1, \pi(3) = 2, \pi(4) = 2, \pi(5) = 3$░░░░ etc.), ░░░░ as $n \to \infty$░░░░ $\pi(n)$ ░░░░ at the ░░░░ ░░░░ ░░░░ $n / \ln n$. ░░░░ ░░░░ $\lim_{n \to \infty} \frac{\pi(n)}{n / \ln n} = 1$. This is the so-called **Prime Number Theorem.** _░░░░ ░░░░ ░░░░ this ░░░░ ░░░░ exercise, ░░░░ ░░░░ too hard._

- ░░░░ **Riemann hypothesis** is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ open ░░░░ in mathematics, ░░░░ it amounts to a sophisticated conjecture on ░░░░ ░░░░ of ░░░░

#### Selected Exercises

_The exercises marked $\triangleright$ are particularly important for later developments._

##### Ex 1-1

_Find an example illustrating why the hypothesis that $a \neq 0$ is necessary in the statement of Lemma $1.2$._

_Proof:_

░░░░ ░░░░ states that if $b \mid a$ and $a \neq 0$, ░░░░ $|b| \leq |a|$. If $b \mid a$, ░░░░ $a = bc \mid c \in \Z$. If $a = 0$, $0 = b \cdot 0$ ░░░░ trivially for ░░░░ $b$. But $|b| \leq 0$ is only ░░░░ if $b = 0$ ░░░░ ░░░░ inequality ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $b$░░░░ ░░░░ $a \neq 0$.

##### $\triangleright$ Ex 1-2

_Prove that divisibility is an order relation on the set $\Z^{\geq 0}$ of nonnegative integers. That is, prove that for all positive integers $a$, $b$, $c$:_

░░░░ $a \mid a$;
░░░░ if $a \mid b$ ░░░░ $b \mid c$, ░░░░ $a \mid c$░░░░
░░░░ if $a \mid b$ ░░░░ $b \mid a$░░░░ ░░░░ $a = b$.

_Is this order relation a **total ordering**? Does it have a _░░░░_? That is, is there an integer $m$ such that $\forall a \in \Z^{\geq 0}, \ a \mid m$?_

_Proof:_

░░░░ $a \mid a$░░░░ by definition, ░░░░ ░░░░ exist ░░░░ $c$ such that $a = ac$, which results ░░░░ $c = 1$░░░░ ░░░░ $a \mid a$.
░░░░ $a \mid b$, $b = aq$░░░░ ░░░░ ░░░░ $b \mid c$░░░░ ░░░░ $c = br$. ░░░░ $c = aqr$ implies $c = a \cdot (qr)$ ░░░░ ░░░░ have $a \mid c$.
If $a \mid b$, ░░░░ $|a| \leq |b|$, and similarly, $|b| \leq |a|$, thus $a = b$.

To ░░░░ ░░░░ divisiblity ░░░░ ░░░░ ░░░░ we need to show that for ░░░░ ░░░░ ░░░░ ░░░░ $a$ ░░░░ $b$, one ░░░░ $a \mid b$ ░░░░ $b \mid a$ _must_ ░░░░ ░░░░ $a$ ░░░░ $b$ ░░░░ prime, then $a \nmid b$, nor $b \nmid a$░░░░ Thus, we do ░░░░ have ░░░░ $\blacksquare$

##### Ex 1-3

_Show that $\Z$ is not well-ordered by $\leq$._

_Proof:_

$\Z$ with the ░░░░ ░░░░ $\leq$ is ░░░░ ░░░░ it ░░░░ the second case, where ░░░░ non-empty subset has a least element, ░░░░ well-ordering ░░░░ ░░░░ ░░░░ ░░░░ $\Z^{\geq 0}$░░░░ ░░░░ is, there ░░░░ subsets ░░░░ ░░░░ ░░░░ ░░░░ a least ░░░░ ($\inf S = \min S$░░░░ such as ░░░░ set ░░░░ ░░░░ negative integers. Hence we ░░░░ ░░░░ ░░░░ $\blacksquare$

##### Ex 1-4

_Prove that for all $a \in \Z$, $\gcd{(a, 0)} = |a|$._

_Proof:_

If $a = 0$░░░░ then $\gcd{(0, 0)} = 0$. ░░░░ $a \lt 0$, ░░░░ divisors ░░░░ ░░░░ ░░░░ $a$ are ░░░░ same ░░░░ ░░░░ ░░░░ $|a|$░░░░ and divisibility ░░░░ $|a|$ remains unaffected. ░░░░ ░░░░ ░░░░ $a \gt 0$░░░░ Since $0$ ░░░░ ░░░░ integers, and $a \gt 0$, ░░░░ ░░░░ of $a$ account for ░░░░ commonality. Since $a$ ░░░░ its ░░░░ greatest ░░░░ $\gcd{(a, 0)} = |a|$░░░░ $\blacksquare$   

##### Ex 1-5

_Prove that every odd integer is either of the form $4k + 1$ or of the form $4k + 3$ for some integer $k$._

_Proof:_

░░░░ ░░░░ an integer may ░░░░ represented as $a = bq + r$. Then ░░░░ this ░░░░ $a = 4k + r$ where $0 \leq r \lt 4$. This ░░░░ $r$ can ░░░░ only be ░░░░ of $0$░░░░ $1$░░░░ $2$ ░░░░ $3$. ░░░░ $r = 0$░░░░ ░░░░ $a = 4k$ ░░░░ ░░░░ $k$░░░░ and thus ░░░░ odd. If $r = 2$░░░░ ░░░░ ░░░░ have $a = 4k + 2 = 2(2k + 1)$ and $a$ isn't odd. ░░░░ ░░░░ $a = 4k + 1$ and $a = 4k + 3$ ░░░░ where $(4k + 1) \mod 2 = 1$ and $(4k + 3) \mod 2 = 1$░░░░ ░░░░ $4k + 1$ or $4k + 3$ ░░░░ ░░░░ only ░░░░ ░░░░ can ░░░░ odd integers. And since ░░░░ ░░░░ is unique, we cover ░░░░ odd ░░░░ $\blacksquare$

##### Ex 1-6

_Prove that the cube of an integer $a$ has to be exactly one of these forms: $9k$ or $9k + 1$ or $9k + 8$ for some integer $k$._

_Proof:_

We know by definition ░░░░ if $a = 9k + r$, then $0 \leq r \lt 9$░░░░ this ░░░░ $r$ can only contain ░░░░ ranging from $0$ ░░░░ $8$. Now ░░░░ need to ░░░░ ░░░░ when we cube $a$░░░░ $r$ can only be one of $0$, $1$ or $8$. ░░░░ ░░░░ check the cases, 

░░░░ $a^3 = (9k + 0)^3 \implies r = 0$
- $a^3 = (9k + 1)^3 \implies r = 1$
░░░░ $a^3 = (9k + 2)^3 \implies r = 8$

░░░░ ░░░░ ░░░░ confirming that $r$ ░░░░ ░░░░ one ░░░░ $0$, $1$░░░░ or $8$░░░░ Thus, every ░░░░ ░░░░ ░░░░ the ░░░░ $9k$░░░░ $9k + 1$ or $9k + 8$. $\blacksquare$

##### Ex 1-7 

_Prove that there is no integer $a$ such that the last digit of $a^2$ is $2$._

_Proof:_

░░░░ ░░░░ ░░░░ ░░░░ any integer only depends on ░░░░ last (or ░░░░ digit, we only need ░░░░ check for ░░░░ ░░░░ $0$ to $9$░░░░ Suppose ░░░░ ░░░░ ░░░░ ░░░░ $a = 10q + r$ where $r \leq 0 \lt 9$ ░░░░ ░░░░ of integer ░░░░ Squaring both sides, we get $a^2 = (10q)^2 + 20qr + r^2$, which ░░░░ ░░░░ $10(10q^2 +2qr) + r^2$░░░░ ░░░░ the last ░░░░ is ░░░░ ░░░░ by $r^2$░░░░ ░░░░ simple ░░░░ ░░░░ ░░░░ ░░░░ confirms ░░░░ ░░░░ all $r$ in $[0, 9]$, $r^2 \neq 2$░░░░ ░░░░ hence the ░░░░ digit ░░░░ $a^2$ for ░░░░ ░░░░ $a$ can ░░░░ be $2$. $\blacksquare$

##### $\triangleright$ Ex 1-8

_Let $n$ be a positive integer, and let $a$ and $b$ be integers. Prove that $a$ and $b$ have the same remainder when divided by $n$ if and only if $a − b = nk$ for some integer $k$._

_Proof:_

░░░░ $a$ ░░░░ $b$ by $n$, we ░░░░ $a = np_a + r_a$ and $b = np_b + r_b$░░░░ We need to show that $(r_a = r_b) \iff (a - b = nk)$░░░░ ░░░░ ░░░░ show ░░░░ ░░░░ implication. Subtracting $b$ ░░░░ $a$ gives us $a - b = n(p_a - p_b) + r_a - r_b$. Since we ░░░░ $r_a = r_b$, $r_a - r_b = 0$ and we ░░░░ $a - b = n(p_a - p_b)$░░░░ We ░░░░ ░░░░ ░░░░ $a - b = nk$ where $k = (p_a - p_b)$. ░░░░ the converse, ░░░░ we have $a  - b = nk$, this ░░░░ $n(p_a - p_b) + (r_a - r_b) = nk$ and $r_a - r_b$ ░░░░ also ░░░░ a multiple of $n$░░░░ ░░░░ we have $r_a - r_b = cn$░░░░ Since ░░░░ ░░░░ must ░░░░ less than $n$, ░░░░ difference must be too, and the only way ░░░░ ░░░░ ░░░░ is ░░░░ $c = 0$░░░░ and we have $r_a = r_b$. $\blacksquare$

##### $\triangleright$ Ex 1-10

_Suppose $\gcd(a,b) = 1$. Prove that if $a \mid c$ and $b \mid c$, then $ab \mid c$._

_Proof:_

If $a \mid c$░░░░ ░░░░ have $c = ak_a$ and similarly, $c = bk_b$. ░░░░ need to ░░░░ that $ab \mid c$. We ░░░░ ░░░░ $ma + nb = 1$░░░░ Multiplying by $c$ ░░░░ us $mac + nbc = c$░░░░ ░░░░ $ma^2k_a + nb^2k_b = c$░░░░ ░░░░ ░░░░ to ░░░░ that ░░░░ ░░░░ terms ░░░░ ░░░░ ░░░░ $ab$. $ma^2k_a$ has a factor of $a$ and clearly is divisble by $a$. Also, $(b \mid c) \implies (b \mid a^2k_a) \implies (b \mid m \cdot a^2k_a)$, hence $ma^2k_a$ is divisble by $a \cdot b$░░░░ so is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ reasoning, ░░░░ $ab \mid c$. $\blacksquare$

##### Ex 1-11

_Prove that if $a \mid (b + c)$ and $\gcd(b,c) = 1$, then $\gcd(a,b) = 1$._

_Proof:_

We ░░░░ prove ░░░░ ░░░░ ░░░░ Suppose $\gcd(a, b) \neq 1$, ░░░░ ░░░░ must ░░░░ ░░░░ ░░░░ $d \gt 1$ ░░░░ ░░░░ $d \mid a$ and $d \mid b$, ░░░░ ░░░░ ░░░░ $d \mid (b + c)$. ░░░░ ░░░░ $d \mid (b + c - b) \implies d \mid c$, and ░░░░ have both $d \mid b$ and $d \mid c$░░░░ but ░░░░ cannot be because ░░░░ already know ░░░░ $\gcd(b, c) = 1$, ░░░░ $\gcd(a,b) \neq 1$ ░░░░ ░░░░ ░░░░ contradiction, hence $\gcd(a,b) = 1$. $\blacksquare$

##### Ex 1-12

_Prove that if $\gcd(a,c) = 1$ and $\gcd(b,c) = 1$, then $\gcd(ab,c) = 1$._

_Proof:_

░░░░ $\gcd(ab,c) \neq 1$░░░░ $ab$ and $c$ ░░░░ coprime, and since ░░░░ ░░░░ ░░░░ hypothesis ░░░░ definition of gcd ░░░░ $a$░░░░ $b$ ░░░░ $c$ ░░░░ ░░░░ $0$, we must have a ░░░░ ░░░░ $d$ ░░░░ that $d \mid ab$ ░░░░ $d \mid c$░░░░ where $d \gt 1$░░░░ We ░░░░ ░░░░ show ░░░░ $d \gt 1$ leads to a contradiction ░░░░ ░░░░ $d = 1$ ░░░░ the only valid ░░░░ Since $d \mid ab$░░░░ divisibility must spread ░░░░ ░░░░ ░░░░ ░░░░ $a$ ░░░░ $b$ due to ░░░░ common prime ░░░░ by ░░░░ FTA. ░░░░ $d \mid a$░░░░ ░░░░ we'd have ░░░░ $d \mid a$ and $d \mid c$ ░░░░ $\gcd(a, c) = 1$░░░░ ░░░░ similarly $\gcd(b, c) = 1$. Hence $\gcd(ab, c) = 1$. $\blacksquare$

##### Ex 1-15

_Prove that if $c \mid ab$ and $\gcd(a,c) = d$, then $c \mid db$._

_Proof:_

If $\gcd(a, c) = d$, ░░░░ $a = dq_a$ and $c = dq_c$░░░░ ░░░░ $dq_c \mid dq_ab$░░░░ ░░░░ $\gcd(q_c, q_a) = 1$, $q_c \mid b$, and we must have $b = q_c k$░░░░ ░░░░ both ░░░░ by $d$ yields $db = dq_ck = ck$ and we've ░░░░ ░░░░ $c \mid db$░░░░ $\blacksquare$

##### $\triangleright$ Ex 1-17

_Prove that if $p$ is prime, and $p$ divides a product of integers $a_1, \cdots , a_s$, then $p$ divides one of the integers $a_i$. ░░░░ ░░░░ looks ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ it ░░░░ Try ░░░░ ░░░░ another ░░░░ of the well-ordering principle.)_

_Proof:_

Let $F$ ░░░░ ░░░░ ░░░░ of ░░░░ $s \in \Z^{\gt 0}$ such that none of ░░░░ ░░░░ ░░░░ ░░░░ product $a_1 \cdots a_s$ are divisible by $p$ ░░░░ the ░░░░ ░░░░ ░░░░ We ░░░░ ░░░░ ░░░░ $F = \empty$ by ░░░░ Suppose $F$ isn't ░░░░ ░░░░ by the ░░░░ ░░░░ ░░░░ must exist a ░░░░ ░░░░ $s_{min}$ such that none of the terms from the product $a_1 \cdots a_{s_{min}}$ ░░░░ ░░░░ ░░░░ $p$. 
░░░░ we have $[p \mid (a_1 \cdots a_{s_{min}})] \implies [p \mid (a_1 \cdots a_{s_{min} - 1}) \cdot a_{s_{min}}]$. ░░░░ ░░░░ $p$ must ░░░░ ░░░░ ░░░░ of $a_{s_{min}}$ ░░░░ $(a_1 \cdots a_{s_{min} - 1})$. If $p \mid a_{s_{min}}$, we already have a contradiction because by construction of $F$ we know that $p$ does not divide any of the terms from $a_1$ to $a_{s_{min}}$. ░░░░ $p$ ░░░░ divides $a_1 \cdots a_{s_{min} - 1}$, then $s_{min} - 1$ ░░░░ be ░░░░ of $F$░░░░ ░░░░ leading to ░░░░ ░░░░ because $s_{min}$ is the minimum element in $F$. Thus $F$ must be empty and $p$ must divide one of $a_1 \cdots a_s$. $\blacksquare$   

##### $\triangleright$ Ex 1-21

_Let_

$$n = 2^{\nu_{2}} 3^{\nu_{3}} 5^{\nu_{5}} 7^{\nu_{7}} \dots$$
$$c = 2^{\gamma_{2}} 3^{\gamma_{3}} 5^{\gamma_{5}} 7^{\gamma_{7}} \dots$$
_be positive integers. Prove that $c \mid n$ if and only if $\gamma_i \leq \nu_i$ for all $i$._

_Proof:_

░░░░ know ░░░░ $c \mid n$░░░░ then $n = ck$ for ░░░░ $k \in \Z^{\gt 0}$. Since $n$ and $c$ ░░░░ positive ░░░░ $k$ cannot ░░░░ ░░░░ negative ░░░░ and the ░░░░ ░░░░ ░░░░ holds is ░░░░ $\gamma_i \leq \nu_i$, ░░░░ the ░░░░ implication ░░░░ For the ░░░░ we ░░░░ ░░░░ $\gamma_i \leq \nu_i$, ░░░░ we need ░░░░ ░░░░ that $c \mid n$. ░░░░ $c \mid n$ then we must ░░░░ some positive $k$ ░░░░ that $n = ck$. ░░░░ since $\gamma_i \leq \nu_i$, we can ░░░░ $k = 2^{\nu_2 -\gamma_2}3^{\nu_3 -\gamma_3} \cdots$  ░░░░ ░░░░ proposition holds. $\blacksquare$

### Modular Arithmetic 

#### Equivalence Relations and Quotients

░░░░ ░░░░ ░░░░ have a ░░░░ ░░░░ on how $\Z$ is put together, we can ░░░░ ░░░░ structures which share ░░░░ ░░░░ with ░░░░ ░░░░ ░░░░ in fact ░░░░ derived from ░░░░ These ░░░░ also be ░░░░ ░░░░ _rings_░░░░ they ░░░░ help ░░░░ ░░░░ which ░░░░ we want ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ definition of ░░░░ _ring_░░░░

These ░░░░ examples ░░░░ be ░░░░ by ░░░░ with operations ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ with $+$ and $\cdot$░░░░ ░░░░ in the case of ░░░░ integers) ░░░░ obtained as 'quotients of $\Z$ by certain equivalence relations'.

**_Reminder on equivalence relations:_** ░░░░ ░░░░ of 'equivalence relation' and 'partition' ░░░░ ░░░░ reviewing. 

- A ░░░░ $\sim$ ░░░░ a ░░░░ $A$ is ░░░░ 'equivalence' relation ░░░░ it is _reflexive_░░░░ _symmetric_░░░░ ░░░░ _transitive_░░░░ ░░░░ properties generalize ░░░░ that ░░░░ for ░░░░ $=$ relation; equality ░░░░ viewed as _the_ prototypical (albeit ░░░░ example of an ░░░░ relation.

- ░░░░ ░░░░ have ░░░░ ░░░░ ░░░░ $\sim$ on a set $A$░░░░ then we can construct a new ░░░░ ░░░░ denoted by $A/{\sim}$: ░░░░ set is called the 'partition ░░░░ ░░░░ $\sim$ on $A$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $A$ ░░░░ $\sim$░░░░ The ░░░░ ░░░░ the set $A/{\sim}$ ░░░░ ░░░░ 'equivalence classes' ░░░░ by $\sim$. The ░░░░ class ░░░░ $a \in A$ ░░░░ ░░░░ ░░░░ $\left[a\right]_{\sim}$ ░░░░ of all ░░░░ ░░░░ $A$ which are in relation ░░░░ $a$░░░░ that is,

$$[a]_{\sim} = \{b \in A \mid a \sim b\}$$

One ░░░░ that ░░░░ equivalence ░░░░ are ░░░░ ░░░░ ░░░░ $A$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of $A$.

- ░░░░ ░░░░ $\pi : A \to (A/{\sim})$ ░░░░ ░░░░ setting $\pi(a) = [a]_{\sim}$ is surjective, and $\pi(a) = \pi(b) \iff a \sim b$.

- ░░░░ ░░░░ ░░░░ ░░░░ describes ░░░░ ░░░░ $A/{\sim}$, ░░░░ the sense ░░░░ if ░░░░ have a surjective function $f: A \to B$ ░░░░ ░░░░ $f(a) = f(b) \iff a \sim b$, then ░░░░ ░░░░ is ░░░░ one-to-one ░░░░ between $A/{\sim}$ and $B$. ░░░░ fact, in ░░░░ ░░░░ there ░░░░ an ░░░░ ░░░░ $\tilde{f}: (A/{\sim}) \to B$░░░░ ░░░░ by ░░░░ $\tilde{f}([a]_{\sim}) = f(a)$░░░░ ░░░░ ░░░░ ░░░░ to be ░░░░ and ░░░░

#### Congruence mod $n$

Many ░░░░ ░░░░ relations ░░░░ be ░░░░ on $\mathbb{Z}$░░░░ Here are ░░░░ ones ░░░░ want to study ░░░░ ░░░░ ░░░░ the ░░░░ definition, $n\mathbb{Z}$ ░░░░ the ░░░░ ░░░░ multiples of $n$:

$$
n\mathbb{Z} := \{ nk \;|\; k \in \mathbb{Z} \} = \{\dots, -2n, -n, 0, n, 2n, \dots\}
$$
**_Definition $2.1$_:** _Let $n \geq 0$ be an integer, and let $a, b \in \Z$. We say that '$a$ is congruent to $b$ modulo $n$', denoted $a \equiv b \pmod{n}$ if $b - a \in n\Z$._

░░░░ other ░░░░ two ░░░░ $a$ ░░░░ $b$ are ░░░░ modulo $n$ ░░░░ $n$ ░░░░ the difference $b - a$. ░░░░ ░░░░

$$
a \equiv b \pmod{n} \iff n \;|\; (b - a)
$$
**_Remark $2.2$_:** We ░░░░ define congruence modulo ░░░░ integers as well; but the ░░░░ corresponding to $n$ ░░░░ $-n$ coincide, ░░░░ $n\Z = (-n)\Z$░░░░ so ░░░░ may as well ░░░░ $n \geq 0$░░░░ ░░░░ note ░░░░ 'congruence modulo $0$' is ░░░░ the ░░░░ $=$. Indeed, $0\Z = \{0\}$ ░░░░ ░░░░ ░░░░ ░░░░ $b - a \in 0\Z$ ░░░░ ░░░░ that $a = b$░░░░

░░░░ is ░░░░ easy exercise ░░░░ ░░░░ that, for $n$ ░░░░ $n \;|\; (b - a)$ if ░░░░ only ░░░░ $a$ and $b$ ░░░░ ░░░░ ░░░░ remainder ░░░░ division by $n$░░░░ this ░░░░ ░░░░ ░░░░ particularly easy ░░░░ verify ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ $2.1$ ░░░░ an _equivalence relation_░░░░ ░░░░ $a \equiv b \pmod{n}$; ░░░░ by ░░░░ there exists an integer $k$ such that $b - a = nk$░░░░ ░░░░ $b \equiv c \pmod{n}$; ░░░░ ░░░░ ░░░░ there ░░░░ an ░░░░ $\ell$ such ░░░░ $c - b = n\ell$░░░░ ░░░░ ░░░░

$$
c - a = (c - b) + (b - a) = nk + n\ell = n(k + \ell)
$$
and ░░░░ ░░░░ ░░░░ $c - a \in n\Z$░░░░ proving ░░░░ $a \equiv c \pmod{n}$░░░░

Now ░░░░ we have one equivalence relation ░░░░ $\Z$ ░░░░ ░░░░ $n \geq 0$░░░░ ░░░░ ░░░░ ░░░░ the corresponding ░░░░ ░░░░ For any ░░░░ integer $n$ and any integer $a$░░░░ ░░░░ ░░░░ ░░░░ $[a]_n$ ░░░░ equivalence ░░░░ ░░░░ $a$ with ░░░░ ░░░░ the ░░░░ of ░░░░ modulo $n$. Explicitly:

$$
\begin{align*}
[a]_n &= \{b \in \Z \mid a \equiv b \pmod{n}\} = \{b \in \Z \mid n \text{ divides } (b - a)\} \\ \\[0.1pt]
&= \{b = a + nk \mid k \in \Z\}
\end{align*}
$$

We call $[a]_n$ the 'congruence class' of $a$ mod $n$, and we say that $a$ is a 'representative' of $[a]_n$. An ░░░░ ░░░░ for the ░░░░ set is $a + n\Z$, ░░░░ ░░░░ ░░░░ shorthand for ░░░░ ░░░░ description of $[a]_n$ ░░░░ ░░░░

From the ░░░░ ░░░░ about equivalence ░░░░ and ░░░░ recalled in ░░░░$2.1$░░░░ we ░░░░ that ░░░░ equivalence ░░░░ $[a]_n$, $[b]_n$ ░░░░ ░░░░ fixed $n$ are either ░░░░ ░░░░ ░░░░ ░░░░ In fact, we know that

$$
[a]_n = [b]_n \iff a \equiv b \pmod{n}
$$

so whatever information ░░░░ carried ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ packaged ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is, ░░░░ ░░░░ congruence ░░░░ ░░░░ do not ░░░░ to do any ░░░░ to ░░░░ this, since ░░░░ ░░░░ ░░░░ that is true for every ░░░░ relation.

Congruence classes ░░░░ a ░░░░ $n$ form ░░░░ _partition_ ░░░░ $\Z$░░░░ that is, in ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ of ░░░░ ░░░░ $\Z$ ░░░░ ░░░░ property ░░░░ every element of $\Z$ appears in ░░░░ one ░░░░ ░░░░ ░░░░ $-4$ ░░░░ $5$ are not congruent ░░░░ $2$, ░░░░ indeed ░░░░ ░░░░ ░░░░ different ░░░░ ░░░░ These equalities ░░░░ _really_ equalities: $[-4]_3$ and $[2]_3$ are quite simply ░░░░ same ░░░░ ░░░░ $\Z$░░░░ this ░░░░ ░░░░ ░░░░ ░░░░ have several ░░░░ ░░░░

░░░░ ░░░░ ░░░░ have an equivalence relation on ░░░░ ░░░░ we ░░░░ consider ░░░░ corresponding partition ░░░░ a ░░░░ in its own right. ░░░░ elements are the equivalence ░░░░ — ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $[a]_n$ ░░░░ $\Z$. ░░░░ is ░░░░ powerful ░░░░ we consider a whole ░░░░ of $\Z$ ░░░░ a ░░░░ element of a ░░░░ set.

**_Definition $2.5$_:** _For any integer $n \geq 0$ we denote by $\Z/n\Z$ the set of congruence classes mod $n$ in $\Z$. This set is called the 'quotient of $\Z$ modulo $n\Z$', or simply '$\Z$ mod $n$'._

Other popular notations are $\Z/\equiv_n$, $\Z/(n)$, $\Z/n$, or $\Z_n$░░░░ this latter ░░░░ used ░░░░ ░░░░ and that ░░░░ a pity ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ else in a different context ░░░░$\Z_p$ is the ░░░░ ░░░░ ░░░░$p$-adic numbers', which ░░░░ something ░░░░ entirely). We will ░░░░ use ░░░░ ░░░░ $\Z/n\Z$░░░░

Summarizing, the elements of $\Z/n\Z$ are ░░░░ the ░░░░ $[a]_n$, for some integer $a$. Please get used to the fact that $[a]_n$ is _not_ ░░░░ ░░░░ integer. That is, ░░░░ must resist the ░░░░ to think of $\Z/n\Z$ as a subset of $\Z$. The ░░░░ $\Z$ and $\Z/n\Z$ ░░░░ ░░░░ ░░░░ but not ░░░░ ░░░░ ░░░░ will ░░░░ ░░░░ to this (Ex $4.19$░░░░

░░░░ _element_ ░░░░ $\Z/n\Z$ ░░░░ be viewed as a ░░░░ ░░░░ $\Z$░░░░ ░░░░ the _set_ $\Z/n\Z$ of such elements ░░░░ ░░░░ ░░░░ viewed ░░░░ a ░░░░ ░░░░ $\Z$░░░░ ░░░░ ░░░░ $[2]_3$ of the set $\Z/3\Z$ is not a fancy new name for the number $2$: indeed, the number $2$ is not the same as the number $5$, and yet $[2]_3$ and $[5]_3$ really _░░░░ the same element ░░░░ $\Z/3\Z$, because ░░░░ ░░░░ the same ░░░░ of $\Z$.

░░░░ of ░░░░ ░░░░ such as $[5]_3$ ░░░░ as ░░░░ ░░░░ of $\Z$ ░░░░ ░░░░ an element ░░░░ the ░░░░ $\Z/3\Z$ ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ should ░░░░ ░░░░ ░░░░ to this strange idea ░░░░ our first ░░░░ ░░░░ ░░░░ relations. ░░░░ any case, ░░░░ ░░░░ ░░░░ a brand new set $\Z/n\Z$ ░░░░ ░░░░ ░░░░ ░░░░ $n$░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

The ░░░░ question we ░░░░ ask is 'how big' $\Z/n\Z$ is. ░░░░ example, we saw ░░░░ ░░░░ $2.3$ and $2.4$ ░░░░ $\Z/2\Z$ consists of _two_ ░░░░ which we could ░░░░ by $[0]_2$ and $[1]_2$░░░░ ░░░░ that $\Z/3\Z$ consists of _three_ ░░░░ ░░░░ we could denote ░░░░ $[0]_3$, $[1]_3$, and $[2]_3$ (or also by $[-6]_3$░░░░ $[7]_3$, and $[5]_3$ ░░░░ we ░░░░ ░░░░ ░░░░ this ░░░░ the same ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ statement something ░░░░ ░░░░ ░░░░ clear ░░░░ ░░░░ ░░░░ ░░░░ from ░░░░$1.2$ that $\Z$ is endowed with ░░░░ _division with remainder_░░░░ ░░░░ $n > 0$░░░░ we can ░░░░ any integer $a$ by $n$░░░░ with ░░░░ ░░░░ $r$ ░░░░ ░░░░ $0 \leq r < n$░░░░

**_Lemma $2.6$_:** _Let $n$ be a positive integer._

░░░░ _Let $a \in \Z$, and let $r$ be the remainder after division of $a$ by $n$. Then $[a]_n = [r]_n$._  
- _The classes $[0]_n, [1]_n, \dots, [n - 1]_n$ ░░░░ all distinct._

_Proof_░░░░

░░░░ ░░░░ ░░░░ $a = nq + r$, then $a - r = nq \in n\Z$░░░░ therefore $a \equiv r \pmod{n}$, and ░░░░ implies $[a]_n = [r]_n$ by definition ░░░░ ░░░░ classes.

░░░░ ░░░░ ░░░░ verify ░░░░ if $0 \leq r_1 < n$ and $0 \leq r_2 < n$░░░░ ░░░░ $[r_1]_n = [r_2]_n$, then $r_1 = r_2$░░░░ ░░░░ ░░░░ ░░░░ spelled-out ░░░░ ░░░░ the ░░░░ If $0 \leq r_1 < n$ and $0 \leq r_2 < n$, then $0 \leq |r_2 - r_1| < n$. If ░░░░ $[r_1]_n = [r_2]_n$, then $n \mid (r_2 - r_1)$░░░░

If $|r_2 - r_1| \neq 0$, ░░░░ ░░░░ $n \leq |r_2 - r_1| < n$, ░░░░ contradiction. (using ░░░░ ░░░░ Lemma $1.2$ ░░░░ ░░░░ contradiction shows ░░░░ necessarily $|r_2 - r_1| = 0$, ░░░░ ░░░░ $r_1 = r_2$ as needed. $\blacksquare$

The ░░░░ ░░░░ is ░░░░ an immediate consequence.

**_Theorem $2.7$_:** _For all positive integers $n$, the set $\Z/n\Z$ consists of exactly $n$ elements:_

$$
[0]_n, [1]_n, \dots, [n - 1]_n.
$$

_Proof_:  

░░░░ the first point ░░░░ the lemma ░░░░ ░░░░ agrees with ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ second point these ░░░░ ░░░░ $\Z/n\Z$ are all ░░░░ ░░░░ each other. $\blacksquare$

 The choice $[0]_n, [1]_n, \dots, [n - 1]_n$, while reasonable looking, is only one of infinitely many viable choices. We can label the elements of $\Z/5\Z$ by $[160]_5$░░░░ $[-324]_5$, $[175]_5$, $[48]_5$, and $[-4329349871]_5$ if ░░░░ feel ░░░░ it; despite appearances, ░░░░ ░░░░ _precisely_ ░░░░ ░░░░ list ░░░░ the ░░░░ conventional-looking $[0]_5, [1]_5, [2]_5, [3]_5$, and $[4]_5$░░░░ The ░░░░ ░░░░ ░░░░ the psychological advantage of ░░░░ memorable, but ░░░░ is all there ░░░░ to it.

As an extreme example, ░░░░ is _only one_ element in $\Z/1\Z$░░░░ which ░░░░ could ░░░░ $[a]_1$ for any integer $a$ whatsoever. There is absolutely no way to distinguish $[0]_1$ ░░░░ $[1]_1$ (or $[-23493851298371298319238983459485945874349857943857397498]_1$).

**_Remark $2.8$_:** If $n = 0$, ░░░░ can still ░░░░ ░░░░ of the ░░░░ i.e., of $\Z/0\Z$. ░░░░ ░░░░ ░░░░ ░░░░ congruence ░░░░ ░░░░ just equality (Remark $2.2$), so ░░░░ equivalence class $[a]_0$ of an integer $a$ consists of the single element $a$: $[a]_0 = \{a\}$. Therefore, ░░░░ set $\Z/0\Z$ is ░░░░ ░░░░ ░░░░ ░░░░ $\Z$ ░░░░ In this ░░░░ $\Z$ ░░░░ be viewed ░░░░ one ░░░░ ░░░░ structures $\Z/n\Z$░░░░ that ░░░░ ░░░░ special ░░░░ $n = 0$░░░░ For $n \neq 0$░░░░ the ░░░░ $\Z/n\Z$ ░░░░ _finite_, ░░░░ we ░░░░ ░░░░ Theorem $2.7$.

#### Algebra in $\Z/n\Z$

░░░░ is a text ░░░░ _algebra_░░░░ so ░░░░ ░░░░ try to ░░░░ some algebra on ░░░░ ░░░░ ░░░░ $\Z/n\Z$░░░░ ░░░░ ░░░░ ░░░░ this by virtue of simple ░░░░ of ░░░░ congruence ░░░░ ░░░░ respect to ░░░░ ordinary ░░░░ $+$░░░░ $\cdot$ ░░░░ $\Z$░░░░

The ░░░░ question ░░░░ ░░░░ ask ░░░░ ░░░░ ░░░░ $\Z/n\Z$ is. ░░░░ example, we saw in Ex $2.3$ ░░░░ $2.4$ that $\Z/2\Z$ consists ░░░░ _two_ ░░░░ which ░░░░ could ░░░░ by $[0]_2$ and $[1]_2$░░░░ and that $\Z/3\Z$ ░░░░ ░░░░ _three_ ░░░░ which ░░░░ ░░░░ denote by $[0]_3$, $[1]_3$░░░░ and $[2]_3$ (or also by $[-6]_3$, $[7]_3$, and $[5]_3$ ░░░░ we felt like it: this is the ░░░░ list). Let's ░░░░ ░░░░ ░░░░ ░░░░ something that should be ░░░░ at ░░░░ ░░░░ Recall ░░░░ ░░░░$1.2$ ░░░░ $\Z$ ░░░░ endowed with ░░░░ _division with remainder_░░░░ if $n > 0$, ░░░░ can divide ░░░░ ░░░░ $a$ ░░░░ $n$░░░░ ░░░░ a ░░░░ $r$ such ░░░░ $0 \leq r < n$.

**_Lemma $2.9$_:** _Let $n \geq 0$ be an integer, and let $a, a', b, b'$ be integers._

- _(i) If $a \equiv a' \pmod{n}$ and $b \equiv b' \pmod{n}$,_  

$$a + b \equiv a' + b' \pmod{n}$$

- _(ii)_  

$$a \cdot b \equiv a' \cdot b' \pmod{n}$$

_Proof_:

░░░░ $a \equiv a' \pmod{n}$ and $b \equiv b' \pmod{n}$, ░░░░ exist ░░░░ $k$ and $\ell$ such that

$$
a' - a = nk, \quad b' - b = n\ell.
$$

░░░░

$$
(a' + b') - (a + b) = a' - a + b' - b = nk + n\ell = n(k + \ell).
$$

░░░░ ░░░░ ░░░░ $n \mid (a' + b') - (a + b)$, ░░░░ is, $a + b \equiv a' + b' \pmod{n}$░░░░ ░░░░ proves ░░░░

With the same notation,

$$
a'b' - ab = (a + nk)(b + n\ell) - ab = ab + na\ell + nkb + n^2k\ell - ab
$$

$$
= n(a\ell + bk + nk\ell)
$$

showing that $n \mid a'b' - ab$░░░░ ░░░░ is, $a \cdot b \equiv a' \cdot b' \pmod{n}$, ░░░░ ░░░░ $\blacksquare$

░░░░ ░░░░ ░░░░ $2.9$, ░░░░ ░░░░ ░░░░ two important definitions: ░░░░ define ░░░░ notion ░░░░ 'addition' ░░░░ ░░░░ 'multiplication' on the ░░░░ $\Z/n\Z$░░░░ for every $n$░░░░

**_Definition $2.10$_:** _Let $n \geq 0$ be an integer, and let $[a]_n$, $[b]_n$ be elements of $\Z/n\Z$. We define_

$$
\begin{align*}
[a]_n + [b]_n &:= [a + b]_n, \\ \\[0.1pt]
[a]_n \cdot [b]_n &:= [a \cdot b]_n.
\end{align*}
$$

_(Note: The symbols $+$, $\cdot$ on the right-hand side are the familiar addition and multiplication in $\Z$; the symbols $+$, $\cdot$ on the left-hand side are the new operations we are defining in $\Z/n\Z$.)_

░░░░ ░░░░ look perfectly reasonable, but ░░░░ is an important subtlety, which ░░░░ ░░░░ noticing. ░░░░ $n = 2$ ░░░░ ░░░░ with a ░░░░ example. ░░░░ ░░░░ $2.10$ ░░░░ have (for ░░░░

$$
[0]_2 + [1]_2 = [1]_2.
$$

░░░░ elements $[0]_2$, $[1]_2$ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ by the congruence relation mod $2$░░░░ ░░░░ ░░░░ ░░░░ in ░░░░ $2.3$,

$$
\begin{align*}
[0]_2 &= \{\dots, -6, -4, -2, 0, 2, 4, 6, \dots\} = \{0 + 2k \mid k \in \Z\}, \\ \\[0.1pt]
[1]_2 &= \{\dots, -5, -3, -1, 1, 3, 5, 7, \dots\} = \{1 + 2k \mid k \in \Z\}.
\end{align*}
$$

Whether ░░░░ ░░░░ to ░░░░ the ░░░░ class $[0]_1$ or $[-2]_1$ cannot ░░░░ ░░░░ result ░░░░ ░░░░ operation ░░░░ on this ░░░░ ░░░░ ░░░░ should ░░░░ ░░░░ the _class_ itself, not ░░░░ ░░░░ mood of the moment ░░░░ ░░░░ ░░░░ decide to call the class. ░░░░ other ░░░░ ░░░░ viable ░░░░ should not depend ░░░░ the representatives ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ apply ░░░░

Now ░░░░ see in ░░░░ ░░░░ ░░░░ $2.10$ ░░░░ subtle. ░░░░ ░░░░ that the ░░░░ just ░░░░ ░░░░ the equivalence relation does _not_ affect Definition $2.10$░░░░ ░░░░ ░░░░ operations $+$, $\cdot$ in $\Z/n\Z$ ░░░░ ░░░░ ░░░░ ░░░░ relies on the ░░░░ ░░░░ ░░░░

Is ░░░░ ░░░░ Nearly so, ░░░░ only because ░░░░ wisely ░░░░ care ░░░░ some preparatory ░░░░ in Lemma $2.9$. we'll ░░░░ the ░░░░ as follows.

**_Claim $2.12$_:** _The operations defined in Definition $2.10$ do not depend on the choice of the representatives. That is: if $n \geq 0$ is an integer, and $[a]_n = [a']_n$, $[b]_n = [b']_n$, then_

- _(i)_ $[a]_n + [b]_n = [a' + b']_n,$

- _(ii)_ $[a]_n \cdot [b]_n = [a' \cdot b']_n.$

_Proof_:  

This ░░░░ no ░░░░ ░░░░ ░░░░ less ░░░░ ░░░░ ░░░░ of ░░░░ $2.9$░░░░ $\blacksquare$

░░░░ preceding ░░░░ may ░░░░ ░░░░ ░░░░ but the ░░░░ ░░░░ whether a ░░░░ is ░░░░ ░░░░ very ░░░░ It is easy to become a ░░░░ ░░░░ on this point, ░░░░ ░░░░ lead ░░░░ quickly ░░░░ nonsensical ░░░░ What ░░░░ ░░░░ understand ░░░░ is that ░░░░ relations ░░░░ ░░░░ mod $n$' ░░░░ very special, because they are compatible with the ordinary ░░░░ among ░░░░ ░░░░ ░░░░ a way that they allow us to ░░░░ analogous ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ we have seen, one should not expect this from an ░░░░ ░░░░ ░░░░ relation. 

The ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ important. ░░░░ ░░░░ easy to ░░░░ a little sloppy ░░░░ ░░░░ point, which can lead ░░░░ quickly to ░░░░ statements. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ now is that ░░░░ relations ░░░░ ‘congruence ░░░░ n’ are ░░░░ special, because they ░░░░ compatible ░░░░ ░░░░ ordinary ░░░░ among ░░░░ ░░░░ such a way that ░░░░ ░░░░ us ░░░░ define ░░░░ operations among the corresponding ░░░░ classes. ░░░░ we ░░░░ seen, ░░░░ ░░░░ ░░░░ expect ░░░░ from ░░░░ arbitrarily ░░░░ ░░░░ relation. ░░░░ ░░░░ ░░░░ reason ░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ equivalence ░░░░ ░░░░ ░░░░ ░░░░ $2.1$░░░░

#### Properties of the Operations $+$, $\cdot$ on $\Z/n\Z$

░░░░ see where we stand. ░░░░ Chapter $1$ ░░░░ ░░░░ ░░░░ carefully ░░░░ the ░░░░ consisting ░░░░ $\Z$ ░░░░ ░░░░ the ordinary operations $+$ ░░░░ $\cdot$░░░░ ░░░░ ░░░░$2.2$ ░░░░ defined ░░░░ ░░░░ $\Z/n\Z$░░░░ one for every ░░░░ ░░░░ $n$░░░░ ░░░░ in §$2.3$ we ░░░░ these ░░░░ with operations $+$ ░░░░ $\cdot$. ░░░░ the ░░░░ we ░░░░ ░░░░ ░░░░ algebraic ░░░░ by ░░░░ ░░░░ them $\Z$, $\Z/n\Z$, but we ░░░░ ░░░░ these ░░░░ _along with_ the ░░░░ ░░░░ $+$, $\cdot$ ░░░░ have defined. If we ░░░░ ░░░░ ░░░░ the operations, ░░░░ may ░░░░ ░░░░ ░░░░ $(\Z/n\Z, +, \cdot)$░░░░

░░░░ have observed ░░░░ $\Z/0\Z$ is 'a copy ░░░░ $\Z$' ░░░░ $2.8$), so ░░░░ concentrate ░░░░ $\Z/n\Z$ ░░░░ $n > 0$░░░░ These gadgets are ░░░░ ░░░░ ░░░░ all ░░░░ ░░░░ $\Z$░░░░ The ░░░░ of integers $\Z$ is infinite, while we have seen ░░░░ the set $\Z/n\Z$ ░░░░ of exactly $n$ elements (which ░░░░ may ░░░░ $[0]_n, \dots, [n - 1]_n$░░░░ ░░░░ ░░░░ part ░░░░ the content ░░░░ Theorem $2.7$).

░░░░ worth reiterating that $a$ really is $[a]_4$░░░░ For ░░░░ ░░░░ ░░░░ in the ░░░░ ░░░░ ░░░░ ░░░░ last ░░░░ ░░░░ ░░░░ second ░░░░ ░░░░ $1$░░░░ ░░░░ that ░░░░$3 \cdot 3 = 1$░░░░ ░░░░ ░░░░  to ░░░░ ░░░░ ░░░░

$$
[3]_4 \cdot [3]_4 = [1]_4
$$

which of ░░░░ ░░░░ ░░░░ $3 \cdot 3 = 9$░░░░ ░░░░ $[3]_4 \cdot [3]_4 = [9]_4 = [1]_4$ ░░░░ our ░░░░ ░░░░ product ░░░░ congruence classes ░░░░ $2.10$).

░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the operations ░░░░ these ░░░░ ░░░░ ░░░░ seem qualitatively different. For ░░░░ we know that, in $\Z$░░░░

$$
ab = 0 \implies a = 0 \text{ or } b = 0.
$$

░░░░ property is ░░░░ true ░░░░ for ░░░░ $\Z/3\Z$, ░░░░ ░░░░ ░░░░ ░░░░ $[0]_3$ as $0$. ░░░░ ░░░░ could list ░░░░ ░░░░ $ab$ ░░░░ $a \neq 0$ and $b \neq 0$:

$$
[1]_3 \cdot [1]_3 = [1]_3, \quad [1]_3 \cdot [2]_3 = [2]_3, \quad [2]_3 \cdot [1]_3 = [2]_3, \quad [2]_3 \cdot [2]_3 = [1]_3.
$$

and ░░░░ ░░░░ ░░░░ not ░░░░ ░░░░ $[0]_3$ ever appears as the product of two nonzero elements. So from the point of view of this property, $\Z$ and $\Z/3\Z$ are similar. We say, to anticipate a definition we will officially introduce soon (Definition $3.23$), that $\Z$ and $\Z/3\Z$ are both 'integral domains'. But this property is _░░░░ true in all $\Z/n\Z$░░░░ for ░░░░

$$
[2]_4 \cdot [2]_4 = [4]_4 = [0]_4.
$$

░░░░ ░░░░ $[2]_4 \neq [0]_4$░░░░ ░░░░ terms ░░░░ the ░░░░ drawn ░░░░ we're ░░░░ observing that there ░░░░ ░░░░ $0$ in ░░░░ ░░░░ ░░░░ ░░░░ second table, ░░░░ from the ░░░░ ░░░░ ░░░░ the first ░░░░ ░░░░ ░░░░ ░░░░ rare ░░░░ ░░░░ really: ░░░░ example, $[2]_6 \cdot [3]_6 = [6]_6 = [0]_6$, $[3]_{12} \cdot [4]_{12} = [0]_{12}$░░░░ ░░░░ We ░░░░ ░░░░ ░░░░ $\Z/4\Z$░░░░ $\Z/6\Z$, $\Z/12\Z$ are ░░░░ ░░░░ ░░░░ It ░░░░ ░░░░ ░░░░ to find ░░░░ more ░░░░ ░░░░ ░░░░ kind. By the end of the section, ░░░░ ░░░░ ░░░░ ░░░░ thoroughly ░░░░ is going ░░░░

On the ░░░░ ░░░░ there are ░░░░ ░░░░ of ░░░░ ░░░░ these ░░░░ which ░░░░ ░░░░ for $\Z$ ░░░░ for ░░░░ $\Z/n\Z$░░░░ ░░░░ ░░░░ all, $a + b \in \Z$ ░░░░ $a \cdot b \in \Z$ ░░░░ all $a, b \in \Z$ (that is, $\Z$ ░░░░ ░░░░ with ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

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
░░░░ further

$$
\forall a, b \quad a \cdot b = b \cdot a.
$$
In ░░░░ third ░░░░ the element $a'$ ░░░░ what we ░░░░ ░░░░ $-a$░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ in $(2.3)$ ░░░░ names: for example, the first ░░░░ is ░░░░ ░░░░ (of ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ of ░░░░ additive identity', and ░░░░ ░░░░ ░░░░ will ░░░░ ░░░░ to these ░░░░ ░░░░ ░░░░ the appropriately general ░░░░ ░░░░$3.1$░░░░ For now ░░░░ consider ░░░░ following,

**_Theorem $2.13$_:** _For every positive integer $n$, all of these properties hold for $\Z/n\Z$ with $0 = [0]_n$ ░░░░ $1 = [1]_n$._

**_Remark $2.14$_:** In ░░░░ of this, ░░░░ will often ░░░░ $0$ ░░░░ $[0]_n$ and $1$ for $[1]_n$░░░░ ░░░░ is potentially confusing, because ░░░░ two $0$ in '$0 = [0]_n$' ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is an ░░░░ of the ░░░░ we now ░░░░ $0$ ░░░░ $\Z/n\Z$░░░░ ░░░░ second ░░░░ the integer $0$.

With ░░░░ terminology we ░░░░ introduce in §$3.1$, ░░░░ $2.13$ ░░░░ tells us that $\Z/n\Z$ is a 'ring', ░░░░ ░░░░ ░░░░ ░░░░ 'commutative ring'. This ░░░░ proves ░░░░ ░░░░ $2.10$ prescribes that $[a]_n + [b]_n$ and $[a]_n \cdot [b]_n$ are elements ░░░░ $\Z/n\Z$, so 'closure' ░░░░ trivially ░░░░ Every ░░░░ other ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ be easily reduced ░░░░ the ░░░░ ░░░░ in $\Z$. For example, ░░░░ ░░░░ want ░░░░ ░░░░ ░░░░ 'distributivity' ░░░░ in $\Z/n\Z$░░░░

$$
\forall a, b, c \in \Z/n\Z \quad a \cdot (b + c) = a \cdot b + a \cdot c,
$$

we can ░░░░ ░░░░ ░░░░ For all $a, b, c \in \Z/n\Z$░░░░ there ░░░░ integers $k, \ell, m \in \Z$ such that

$$
a = [k]_n, \quad b = [\ell]_n, \quad c = [m]_n.
$$

░░░░ using ░░░░ $2.10$ ░░░░ have

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
░░░░ the equality $\overset{!}{=}$ ░░░░ ░░░░ the same ░░░░ ░░░░ ░░░░ ░░░░ $\Z$░░░░ ░░░░ ░░░░ in ░░░░ ░░░░ ░░░░ ░░░░ proved to ░░░░ ░░░░ $\Z/n\Z$ by ░░░░ the ░░░░ method. ░░░░ long ░░░░ given ░░░░ (without ░░░░ last, ░░░░ ░░░░ will ░░░░ our starting ░░░░ to ░░░░ _rings_. ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ ░░░░ rest ░░░░ ░░░░ ░░░░ an additional property ('commutativity of multiplication') which ░░░░ ░░░░ part of the definition ░░░░ ring. When ░░░░ ░░░░ ░░░░ say that the ring ░░░░ _commutative_. ░░░░ $\Z$ ░░░░ all $\Z/n\Z$ are 'commutative rings'. Incidentally, you know other ░░░░ the sets $\mathbb{Q}$, $\R$░░░░ ░░░░ $\mathbb{C}$ (denoting respectively the sets of _rational_░░░░ _real_, and _complex_ ░░░░ along with the ░░░░ operations $+$ and $\cdot$) all satisfy the properties of ░░░░ rings'.

░░░░ ░░░░ see ░░░░ many ░░░░ properties can be deduced from ░░░░ ones listed ░░░░ $(2.3)$░░░░ ░░░░ ░░░░ such ░░░░ ░░░░ hold ░░░░ all rings. ░░░░ ░░░░ moment we will ░░░░ with $\Z/n\Z$░░░░ ░░░░ examine ░░░░ ░░░░ ░░░░ of the ░░░░ $n$ get magically encoded in ░░░░ of ░░░░ ░░░░ $\Z/n\Z$░░░░

I have ░░░░ pointed out ░░░░ ░░░░ ░░░░ that ░░░░ in $\Z$, that is, ░░░░ ░░░░

$$
ab = 0 \implies a = 0 \text{ or } b = 0,
$$

holds ░░░░ $\Z/n\Z$ for some, ░░░░ not ░░░░ $n$░░░░ ░░░░ ░░░░ $[2]_{10} \cdot [5]_{10} = [10]_{10} = [0]_{10}$░░░░ even though $[2]_{10} \neq [0]_{10}$ and $[5]_{10} \neq [0]_{10}$░░░░

On ░░░░ other ░░░░ ░░░░ ░░░░ 'nice' ░░░░ ░░░░ ░░░░ for some $\Z/n\Z$ and do ░░░░ ░░░░ ░░░░ $\Z$░░░░ You should ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ listed ░░░░ $(2.3)$ include ░░░░ ░░░░ of ░░░░ ░░░░ inverse':

$$
\forall a \; \exists a' \quad a + a' = a' + a = 0.
$$

░░░░ example, the ░░░░ ░░░░ of $2$ is $-2$, ░░░░ $2 + (-2) = (-2) + 2 = 0$. You may ░░░░ have ░░░░ that I _did not_ list a ░░░░ prescribing ░░░░ existence ░░░░ 'multiplicative inverses', ░░░░ would look like ░░░░

$$
\forall a \; \exists a' \quad a \cdot a' = a' \cdot a = 1. \tag{2.4}
$$
It is natural ░░░░ ░░░░ $a$ to not ░░░░ zero, since '$1/0$' ░░░░ ░░░░ exist ░░░░ any ░░░░ ░░░░ However, even with this ░░░░ ░░░░ $(2.4)$ ░░░░ simply ░░░░ true ░░░░ $\Z$░░░░ for example, $2 \neq 0$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ integer $n$ such ░░░░ $2n = 1$░░░░ ░░░░ ░░░░ $(2.4)$ ░░░░ ░░░░ if ░░░░ ░░░░ ░░░░ if $\frac{p}{q}$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $p, q$ are ░░░░ ░░░░ $q \neq 0$░░░░ ░░░░ the rational ░░░░ $\frac{q}{p}$ is its multiplicative inverse: $\frac{p}{q} \cdot \frac{q}{p} = 1$░░░░ ░░░░ $\Z$ does _not_ have a multiplicative ░░░░ in $\Z$, ░░░░ it ░░░░ in $\mathbb{Q}$ (that is, $\frac{1}{2}$░░░░ ░░░░ ░░░░ $(2.4)$ ░░░░ ░░░░ ░░░░ $\mathbb{Q}$, but ░░░░ is not for $\Z$.

░░░░ about $\Z/n\Z$░░░░ It ░░░░ easy ░░░░ check whether $(2.4)$ holds ░░░░ ░░░░ ░░░░ ░░░░ table: this property just says that ░░░░ ░░░░ of ░░░░ ░░░░ with ░░░░ exception ░░░░ the row corresponding to $0$░░░░ must ░░░░ a $1$░░░░ (Why?) ░░░░ ░░░░ $(2.4)$ does _not_ ░░░░ ░░░░ $\Z/4\Z$░░░░ look ░░░░ ░░░░ ░░░░ multiplication ░░░░ ░░░░ ░░░░ that there ░░░░ no $1$ in ░░░░ row ░░░░ to $2$.

░░░░ ░░░░ ░░░░ ░░░░ structure ░░░░ ░░░░ ░░░░ listed in $(2.3)$, ░░░░ ░░░░ commutativity of multiplication, ░░░░ ░░░░ $(2.4)$░░░░ we say that ░░░░ is ░░░░ ░░░░_field_░░░░ ░░░░ ░░░░ ░░░░ ░░░░ more ░░░░ ░░░░ in §$3.3$░░░░ ░░░░ $\Z$ and $\Z/4\Z$ are ░░░░ ░░░░ while $\Z/5\Z$ is a field; and ░░░░ ░░░░ ░░░░ ░░░░ that $\mathbb{Q}$, $\mathbb{R}$, ░░░░ $\mathbb{C}$ are ░░░░ fields.

░░░░ ░░░░ seem that $\Z/n\Z$ satisfies $(2.4)$ ░░░░ some ░░░░ of $n$░░░░ and ░░░░ for others. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ explanation, ░░░░ ░░░░ ░░░░ ░░░░ method to this ░░░░ If you want to ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ what is going on, ░░░░ ░░░░ ░░░░ notes and ░░░░ ░░░░ ░░░░ tables for $\Z/n\Z$ ░░░░ ░░░░ ░░░░ ░░░░ $n$, say $n = 2, \dots, 10$░░░░ List the numbers $n$ for ░░░░ $(2.4)$ is ░░░░ ░░░░ ░░░░ if you ░░░░ ░░░░ ░░░░ pattern.

**_Theorem $2.15$_:** _Let $n > 1$. Then the following assertions are equivalent:_

- _(i) The integer $n$ is prime._

- _(ii) In $\Z/n\Z$, property $(2.2)$ is satisfied: $\forall a, b$ $ab = 0 \implies a = 0$ or $b = 0$._

░░░░ _(iii) In $\Z/n\Z$, property $(2.4)$ is satisfied: if $a \neq 0$, then $a$ has a multiplicative inverse._

_Proof_░░░░

We are ░░░░ to ░░░░ that $(i) \implies (iii) \implies (ii) \implies (i)$.

**$(i) \implies (iii)$:**  
░░░░ ░░░░ $n > 1$ ░░░░ ░░░░ prime (hence irreducible) integer, and ░░░░ $a \in \Z/p\Z$, $a \neq 0$░░░░ We ░░░░ to prove ░░░░ $a$ has ░░░░ multiplicative inverse ░░░░ $\Z/p\Z$.

Let $\ell \in \Z$ ░░░░ ░░░░ ░░░░ for $a$: i.e. $[a]_p = [\ell]_p$. ░░░░ $a \neq 0$, we ░░░░ $[\ell]_p \neq [0]_p$░░░░ ░░░░ is, $p \nmid \ell$░░░░ ░░░░ ░░░░ $1.18$░░░░ this ░░░░ ░░░░ $\gcd(p, \ell) = 1$░░░░ ░░░░ ░░░░ ░░░░ $1.8$, there ░░░░ ░░░░ $q$ and $k$ ░░░░ that

$$
1 = q p + k \ell.
$$

░░░░ 'read this ░░░░ ░░░░ $p$░░░░ ░░░░ $1 = q p + k \ell$, then $[1]_p = [q p + k \ell]_p$ and ░░░░ $2.10$ gives

$$
[1]_p = [q p]_p + [k \ell]_p = [k]_p \cdot [\ell]_p,
$$

since $[q p]_p = [0]_p$, as $p q$ is a multiple ░░░░ $p$░░░░ ░░░░ $a' = [k]_p$░░░░ we have ░░░░ $a' \cdot a = 1$ ░░░░ $\Z/p\Z$ and $a a' = 1$ follows by commutativity. Therefore $a$ does have ░░░░ multiplicative ░░░░ as ░░░░ had to verify.

**$(iii) \implies (ii)$:**  
░░░░ that every nonzero $a \in \Z/n\Z$ has a multiplicative ░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ if $a b = 0$ ░░░░ $\Z/n\Z$░░░░ ░░░░ $a = 0$ or $b = 0$. ░░░░ $a = 0$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ prove. ░░░░ $a \neq 0$░░░░ then $a$ ░░░░ a multiplicative ░░░░ $a'$, ░░░░ assumption. But then

$$
b = 1 \cdot b = (a' \cdot a) \cdot b = a' \cdot (a \cdot b) = a' \cdot 0 = 0
$$
as needed.

**$(ii) \implies (i)$:**  
░░░░ ░░░░ are ░░░░ ░░░░ $a b = 0 \implies a = 0$ ░░░░ $b = 0$, for all $a, b \in \Z/n\Z$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $n$ ░░░░ prime. ░░░░ ░░░░ the ░░░░ ░░░░ of prime ░░░░ Definition $1.19$░░░░ we ░░░░ assume that $n$ divides a product $k m$, ░░░░ show ░░░░ $n$ must ░░░░ $k$ ░░░░ $m$░░░░ ░░░░ ░░░░ ░░░░ if we ░░░░ ░░░░ elements $a = [k]_n$ and $b = [m]_n$, ░░░░ ░░░░ $k$ ░░░░ $m$ ░░░░ $\Z/n\Z$░░░░ Indeed,

$$
a b = [k]_n[m]_n = [k m]_n = [0]_n = 0,
$$
░░░░ $n$ divides $k m$. ░░░░ ░░░░ ░░░░ we ░░░░ that $a = 0$ ░░░░ $b = 0$, that ░░░░

$$
[k]_n = 0 \text{ or } [m]_n = 0,
$$
░░░░ this says ░░░░ ░░░░ $n$ ░░░░ $k$ ░░░░ $n$ divides $m$. $\blacksquare$

Using ░░░░ ░░░░ terminology mentioned ░░░░ with which ░░░░ will ░░░░ more ░░░░ in ░░░░ $3$░░░░ Theorem $2.15$ ░░░░ ░░░░ $n > 1$ is ░░░░ ░░░░ and only ░░░░ $\Z/n\Z$ ░░░░ ░░░░ **integral domain**, and if only if $\Z/n\Z$ is a **field**░░░░

**_Proposition $2.16$_:** _Let $n > 1$ be an integer. Then a class $[k]_n$ ░░░░ ░░░░ ░░░░ ░░░░ in $\Z/n\Z$ ░░░░ ░░░░ only if $\gcd(n, k) = 1$░░░░

_Proof_░░░░  

If $\gcd(n, k) = 1$░░░░ then ░░░░ ░░░░ integers $q$ ░░░░ $k$ such that $q n + k \ell = 1$░░░░ ░░░░ ░░░░ ░░░░

$$
[k]_n[k]_m = [k]_n = [1 - q n]_n = [1]_n.
$$
Since ░░░░ ░░░░ commutative in $\Z/n\Z$, this also ░░░░ $[k]_n[k]_n = [1]_n$, and the conclusion is that $[k]_n$ ░░░░ ░░░░ ░░░░ inverse of $[k]_n$░░░░

░░░░ if $[k]_n$ has a multiplicative inverse in $\Z/n\Z$, then $\gcd(n, k) = 1$. Indeed, let $[k]_n$ be an inverse ░░░░ $[k]_n$, so that $[k]_n[k]_n = [1]_n$; then there ░░░░ a $q$ ░░░░ ░░░░ $1 - k q = n$, so that $1 = q n + k \ell$░░░░ This ░░░░ that $1$ ░░░░ a ░░░░ ░░░░ ░░░░ $n$ and $k$, ░░░░ it ░░░░ that $\gcd(n, k) = 1$ by ░░░░ $1.9$░░░░ $\blacksquare$

**_Remark $2.17$_:** ░░░░ convenient ░░░░ ░░░░ the ░░░░ that $\Z/p\Z$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $p$ is prime is that ░░░░ 'multiplicative ░░░░ ░░░░ holds: if $a \neq 0$ ░░░░ $\Z/p\Z$, then,

$$
a b = a c \implies b = c.
$$
░░░░ if $a b = a c$░░░░ then $a(b - c) = 0$░░░░ ░░░░ if $p$ is ░░░░ ░░░░ follows ░░░░ $b - c = 0$ by part $(ii)$ ░░░░ the theorem. This cancellation does _not_ hold in general. ░░░░ ░░░░ $[2]_6 \cdot [2]_6 = [4]_6 = [2]_6 \cdot [5]_6$, and yet $[2]_6 \neq [5]_6$░░░░

The proof ░░░░ ░░░░ $2.15$ ░░░░ ░░░░ straightforward, ░░░░ quite ░░░░ ░░░░ Notice ░░░░ the ░░░░ ░░░░ _"(iii) $\implies$ (ii)"_ did not really use modular ░░░░ ░░░░ is, considerations ░░░░ specifically ░░░░ do ░░░░ $\Z/n\Z$░░░░ ░░░░ looks ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ relies ░░░░ some ░░░░ ░░░░ ░░░░ properties ░░░░ in $(2.3)$░░░░ ░░░░ indeed, the ░░░░ argument will ░░░░ ░░░░ a substantially more general setting. There ░░░░ two cases ░░░░ ░░░░ ░░░░ ░░░░ in ░░░░ $2.15$░░░░ $n = 0$ ░░░░ $n = 1$░░░░ For $n = 0$░░░░ we ░░░░ from Remark $2.8$ that $\Z/0\Z$ ░░░░ ░░░░ ░░░░ of $\Z$░░░░ under this identification, the operations ░░░░ $\Z/0\Z$ ░░░░ ░░░░ ░░░░ ░░░░ as ░░░░ in $\Z$░░░░ ░░░░ ░░░░ that $(2.2)$ holds ░░░░ $\Z$░░░░ and $(2.4)$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\Z$ ░░░░ an ░░░░ ░░░░ ░░░░ ░░░░ is not ░░░░ ░░░░ In ░░░░ ░░░░ the ░░░░ ░░░░ $\iff$ prime' ░░░░ Theorem $2.15$ does ░░░░ ░░░░

Looking carefully at the proof of ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ this ░░░░ ░░░░ do with ░░░░ ░░░░ that $0$ is ░░░░ ░░░░ integer ░░░░ definition. If $p = 1$, things ░░░░ ░░░░ subtle. ░░░░ noted in §$2.7$, $\Z/1\Z$ ░░░░ of a ░░░░ ░░░░ $[0]_1$. In particular, $[0]_1 = [1]_1$; in ░░░░ ░░░░ $\Z/1\Z$ ░░░░ ░░░░ ░░░░ $(2.4)$░░░░ since the multiplicative ░░░░ ░░░░ stated. ░░░░ ░░░░ ░░░░ this case ░░░░ not be considered in ░░░░ integral ░░░░ ░░░░ ░░░░ field. These ░░░░ ░░░░ $n$ ░░░░ ░░░░ will ░░░░ ░░░░ ░░░░ the more general ░░░░ ░░░░ ░░░░ types ░░░░ structures, as we will ░░░░ in ░░░░$3.3$░░░░

#### Fermat's Little Theorem, and the RSA Encryption System

The ░░░░ ░░░░ learn from ░░░░ $2.15$ ░░░░ ░░░░ rather ░░░░ ░░░░ of a ░░░░ $n$ are ░░░░ in ░░░░ properties of ░░░░ ░░░░ $(\Z/n\Z, +, \cdot)$ ░░░░ we ░░░░ been exploring. ░░░░ following pretty ░░░░ should be seen as a manifestation ░░░░ the ░░░░ motive. We ░░░░ the usual 'power' ░░░░ ░░░░ $[a]_n^e$ stands for the product of $[a]_n$ by ░░░░ $e$ ░░░░ which ░░░░ ░░░░ ░░░░ $2.10$ ░░░░ ░░░░ $[a^e]_n$.

**_Theorem $2.18$ (Fermat's Little Theorem)_**: _Let $a, p$ be integers, with $p$ positive and prime. Then $[a]_p^p = [a]_p$._

░░░░ ░░░░ words, ░░░░ $p$ ░░░░ prime, then $a^p \equiv a \pmod p$. ░░░░ is simply not (necessarily) ░░░░ ░░░░ if $p$ is not ░░░░ for example, $2^4 = 16$ is not congruent to $2$ modulo $4$░░░░ But ░░░░ ░░░░ ░░░░ ░░░░ primes, ░░░░ Theorem $2.18$ states ░░░░ ░░░░ ░░░░ ░░░░ prove ░░░░ ░░░░ result ░░░░ ░░░░ impressive ░░░░ ░░░░ given ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $a = 100$, $p = 13$░░░░ ░░░░ ░░░░ the ░░░░ no computation ░░░░ ░░░░ to ░░░░ that

$$
10000000000000000000000000000 \equiv 100 \pmod{13};
$$

and discover that, ░░░░

$$
10000000000000000000000000000 - 100 = 7692307692307692307692300 \cdot 13,
$$

░░░░ ░░░░ the left-hand ░░░░ ░░░░ a multiple of $13$░░░░ Fermat's ░░░░ ░░░░ is often ░░░░ in the following ░░░░ ░░░░

**_Theorem $2.19$_:** _Let $a, p$ be integers, with $p$ positive and prime, and assume that $p \nmid a$. Then $a^{p-1} \equiv 1 \pmod p$._

This ░░░░ essentially the way ░░░░ himself stated it, in a letter ░░░░ a ░░░░ in $1640$. ░░░░ included the statement of ░░░░ ░░░░ in his ░░░░ but ░░░░ ░░░░ include the ░░░░ ░░░░ ░░░░ was too ░░░░

_Proof of Theorem $2.18$_:  

If $p \mid a$, then $[a]_p = [0]_p$░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ $[0]_p^p = [0]_p$. ░░░░ is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that $p \nmid a$░░░░ and ░░░░ is ░░░░ ░░░░ ░░░░ that $[a]_p^{p - 1} = [1]_p$ in this ░░░░ since ░░░░ ░░░░ ░░░░ follows ░░░░ by multiplying ░░░░ sides by $[a]_p$.

Assume ░░░░ that $p \nmid a$, ░░░░ is, $[a]_p \neq [0]_p$. The clever ░░░░ consists of considering ░░░░ $p - 1$ classes,

$$
[a]_p, \; [2a]_p, \; \dots, \; [(p - 2)a]_p, \; [(p - 1)a]_p.
$$
░░░░ are ░░░░ _different_ from ░░░░ ░░░░ ░░░░ ░░░░ say ░░░░ ░░░░ 'distinct'). ░░░░ since $[a]_p \neq [0]_p$ ░░░░ $p$ is ░░░░

$$
[\ell a]_p = [k a]_p \implies [\ell]_p = [k]_p,
$$
░░░░ ░░░░ ░░░░ $2.17$). ░░░░ ░░░░ ░░░░ of this statement, $[\ell]_p \neq [k]_p$ implies $[\ell a]_p \neq [k a]_p$░░░░ ░░░░ ░░░░ ░░░░ part ░░░░ ░░░░ $2.6$ the ░░░░ $[1]_p, \dots, [p - 1]_p$ are ░░░░ different ░░░░ well, ░░░░ so ░░░░ the classes $[a]_p, \dots, [(p - 1)a]_p$.

But then ░░░░ ░░░░ ░░░░ cleverest part) the ░░░░ ░░░░ in $(2.5)$ must be _the same as the classes_ $[1]_p, \dots, [p - 1]_p$░░░░ _just in a different order_. ░░░░ ░░░░ ░░░░ $2.19$ to ░░░░ this in ░░░░ It ░░░░ that the products of ░░░░ two ░░░░ ░░░░ classes must ░░░░ equal:

$$
[a]_p \cdot [2a]_p \cdot \dots \cdot [(p - 1)a]_p = [1]_p \cdot [2]_p \cdot \dots \cdot [p - 1]_p.
$$

Therefore,

$$
[1 \cdot 2 \cdot \dots \cdot (p - 1) \cdot a^{p - 1}]_p = [1 \cdot 2 \cdot \dots \cdot (p - 1)]_p,
$$

░░░░ is,

$$
[(p - 1)!]_p \cdot [a]_p^{p-1} = [(p - 1)!]_p.
$$

░░░░ it suffices ░░░░ observe that $[(p - 1)!]_p \neq [0]_p$ ░░░░ $p$ is prime and does not ░░░░ ░░░░ of $1, \dots, p - 1$), so ░░░░ cancellation ░░░░ gives,

$$
[a]_p^{p-1} = [1]_p
$$

░░░░ ░░░░ $\blacksquare$

Fermat's ░░░░ theorem ░░░░ actually useful in practice, ░░░░ ░░░░ to encryption and ░░░░ taking the time to explore.

░░░░ we are handed an ░░░░ $n$, ░░░░ ░░░░ ░░░░ an ░░░░ $a$, which ░░░░ be assumed to be ░░░░ the ░░░░ $1 < a < n$░░░░ ░░░░ that $[a]_n^{n-1} \neq [1]_n$, then ░░░░ $2.18$ ░░░░ ░░░░ $n$ is ░░░░ ░░░░ hence ░░░░ ░░░░ composite. Such ░░░░ integer $a$ is ░░░░ ░░░░ ░░░░ the fact that $n$ ░░░░ ░░░░ For example, $2$ ░░░░ a ░░░░ ░░░░ the fact ░░░░ $4$ ░░░░ ░░░░ ░░░░ $2^{4-1} = 8 \not\equiv 1 \pmod 4$. ░░░░ ░░░░ sense, this ░░░░ ░░░░ ░░░░ large integers ░░░░ ░░░░ ░░░░ ░░░░ time, while ░░░░ computation of $[a]_n^{n-1}$ ░░░░ relatively ░░░░ Fermat's ░░░░ is explained ░░░░ in ░░░░$2.8$.

Further, finding a witness is ░░░░ ░░░░ ░░░░ ░░░░ be ░░░░ that most composite numbers $n$ have ░░░░ ░░░░ (roughly) $n/2$ ░░░░ Therefore, if $n$ ░░░░ ░░░░ ░░░░ these ░░░░ numbers, ░░░░ ░░░░ test ░░░░ ░░░░ $10$ random integers between $1$ ░░░░ $n$, then we ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ to $n$ ░░░░ ░░░░ ░░░░ of

$$
1 - \frac{1}{2^{10}} = 0.999\ldots
$$
░░░░ ░░░░ ░░░░ is not ░░░░ computationally ░░░░ ░░░░ tell with ░░░░ ░░░░ ░░░░ ░░░░ confidence ░░░░ ░░░░ number ░░░░ ░░░░ ░░░░ ░░░░

These considerations lead ░░░░ ░░░░ ways ░░░░ produce large prime integers. We ░░░░ generate a ░░░░ integer ░░░░ say, $500$ ░░░░ ░░░░ then ░░░░ refinements of ░░░░ methods ░░░░ essentially ░░░░ whether ░░░░ integer is ░░░░ ░░░░ it ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ generate another ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ one that is ░░░░ As a ░░░░ ░░░░ ░░░░ Prime ░░░░ Theorem (also ░░░░ mentioned ░░░░ the ░░░░ of ░░░░$1.4$░░░░ ░░░░ ░░░░ be ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ a prime less than $n$ ░░░░ $1 / \ln n$░░░░ ░░░░ ░░░░ hundred ░░░░ ░░░░ most will ░░░░ enough ░░░░ find a $500$-digit ░░░░ With current technology, ░░░░ ░░░░ this ░░░░ a ░░░░ of a ░░░░

Why ░░░░ ░░░░ want ░░░░ ░░░░ large ░░░░ ░░░░ ░░░░ a basic ░░░░ in the ░░░░ ░░░░ system, which ░░░░ commonplace ░░░░ a way ░░░░ encode information transmitted ░░░░ the ░░░░ Our ░░░░ is likely using it when ░░░░ do your online banking, for example. ░░░░ ░░░░ for 'Rivest, Shamir, ░░░░ ░░░░ ░░░░ came up with it ░░░░ ░░░░ the $1970$░░░░ ░░░░ should not strike ░░░░ as ░░░░ clever use ░░░░ ░░░░ and modern mathematical ░░░░ but as a ░░░░ ░░░░ of _extremely elementary, ancient mathematics_. Indeed, ░░░░ ░░░░ point we have ░░░░ ░░░░ ░░░░ material in these notes ░░░░ understand how it works, and we do not even really ░░░░ yet ░░░░ ░░░░ _ring_ ░░░░ (Of ░░░░ the fact ░░░░ ░░░░ only ░░░░ elementary ░░░░ makes ░░░░ ░░░░ the ░░░░ impressive.)

░░░░ ░░░░ a ░░░░ ░░░░ ░░░░ system, ░░░░ means ░░░░ ░░░░ ░░░░ encode a ░░░░ ░░░░ 'key' to ░░░░ ░░░░ ░░░░ is published and available ░░░░ ░░░░ cares; ░░░░ is ░░░░ encoded ░░░░ ░░░░ _decoding_ ░░░░ message can in ░░░░ ░░░░ ░░░░ done ░░░░ someone ░░░░ has ░░░░ ░░░░ information. ░░░░ ░░░░ laptop ░░░░ ░░░░ ░░░░ ░░░░ a key that allows ░░░░ bank to encode ░░░░ sensitive ░░░░ and send it back; someone can ░░░░ the ░░░░ ░░░░ the encoded message, ░░░░ will not be able ░░░░ ░░░░ ░░░░ ░░░░ use this information ░░░░ ░░░░ the ░░░░

░░░░ does ░░░░ work? ░░░░ ░░░░ ░░░░ a rough ░░░░ of ░░░░ ░░░░ can ░░░░ ░░░░ ░░░░ integers. ░░░░ show you ░░░░ ░░░░ can ░░░░ implemented, we will use produce ░░░░ largish ░░░░ ░░░░ the ░░░░ explained above:

$$
p = 818428743210989683024895225263, \quad q = 644677944074338849892311039879.
$$

and we ░░░░ ░░░░

$$
n = p q = 527622959544605838546815712346082387453782597046540869959877.
$$
░░░░ takes no ░░░░ ░░░░ all. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ to go ░░░░ ░░░░ ░░░░ $n$ to the individual $p$ and $q$░░░░ _this_ is why this system ░░░░ ░░░░ ░░░░ as we will ░░░░ ░░░░ ░░░░ no harm ░░░░ 'publishing' $n$; $p$ and $q$ will remain ░░░░ ░░░░ I note ░░░░ ░░░░ ░░░░

$$
k = (p - 1)(q - 1)
$$

happens to equal

$$
k = 527622959544605838546815712346461928076649726851362366367436
$$

░░░░ by ░░░░ the Euclidean algorithm ░░░░ ░░░░ ░░░░ to ░░░░ that $\gcd(e, k) = 1$ ░░░░

$$
e = 23847938479384928749387.
$$

░░░░ ░░░░ chose this ░░░░ ░░░░ I ░░░░ typed ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ random digits. ░░░░ ░░░░ ░░░░ 'encryption ░░░░ ░░░░ it ░░░░ be used ░░░░ ░░░░ messages.^4 ░░░░ can publish ░░░░ two ░░░░

$$
n = 527622959544605838546815712346082387453782597046540869959877
$$

$$
e = 23847938479384928749387.
$$

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ can send you information securely. ░░░░ suffices ░░░░ write ░░░░ ░░░░ as one or more ░░░░ $a$░░░░ $1 \leq a < n$. ░░░░ $a$ ░░░░ be encoded ░░░░ computing $[a]_n^e$░░░░ ░░░░ ░░░░ ░░░░ something that can ░░░░ done ░░░░ For ░░░░ if ░░░░ ░░░░ ░░░░ message to ░░░░ ░░░░

$$
a = 1010101010101010101010101010101010,
$$

then ░░░░ ░░░░ ░░░░

$$
b = 16360537946748886409026352514770724213613815940906125836470312,
$$

░░░░ ░░░░ computer assures ░░░░ $[a]_n^e = [b]_n$. ░░░░ ░░░░ day, no one ░░░░ ░░░░ an efficient way to recover $a$ from $b$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $n$ ░░░░ $e$░░░░ So $b$ can ░░░░ transmitted ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ does ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ it.

░░░░ ░░░░ receive $b$░░░░ ░░░░ ░░░░ _you_ ░░░░ my ░░░░ As ░░░░ ░░░░ ░░░░ in ░░░░ $2.16$░░░░ ░░░░ $\gcd(e, k) = 1$░░░░ ░░░░ $e$ ░░░░ a ░░░░ ░░░░ modulo $k$. Chasing the Euclidean algorithm ░░░░ that this inverse is

$$
d = 72444918945559643533015877809753152910803207582951588533695.
$$

(Go ░░░░ and ░░░░ that $[d]_k \cdot [e]_k = [1]_k$ if you don't trust me.) Since you know $d$ (the 'decryption' exponent), it is a very easy matter for _you_ to recover ░░░░ message: lo ░░░░ behold,

$$
[b]_n^d = [1010101010101010101010101010101010]_n,
$$

as ░░░░ computer confirms in a ░░░░ ░░░░ a second.

This ░░░░ look amazing, but of ░░░░ it is ░░░░ ░░░░ ░░░░ we have all ░░░░ ░░░░ needed to understand how it works.

---

**_Theorem 2.19 (RSA algorithm)_**░░░░ _Let $p \neq q$ be positive prime integers, and let:_

- $n = p q$
░░░░ $k = (p - 1)(q - 1)$
░░░░ $e$ ░░░░ an integer that is ░░░░ ░░░░ to $k$
░░░░ $d$ ░░░░ ░░░░ integer ░░░░ ░░░░ $d e \equiv 1 \pmod k$
- $a$ ░░░░ an integer

_Then_

$$
a \equiv b^d \pmod n.
$$

_Proof_░░░░

░░░░ that $b^d \equiv a^{d e} \pmod n$░░░░ so we ░░░░ to prove that $a^{d e} \equiv a \pmod n$░░░░ First, ░░░░ ░░░░ ░░░░ it ░░░░ ░░░░ ░░░░ that,

$$
a^{d e} \equiv a \pmod p \text{ and } a^{d e} \equiv a \pmod q.
$$

░░░░ if this is the ░░░░ ░░░░

$$
p \mid (a^{d e} - a) \quad\text{and}\quad q \mid (a^{d e} - a),
$$

and this ░░░░ ░░░░ $n \mid (a^{d e} - a)$ since $p$ ░░░░ $q$ are relatively prime. Focus ░░░░ the prime $p$░░░░ If $p \mid a$, then both $a$ and $a^{d e}$ are $0 \pmod p$░░░░ ░░░░ ░░░░ ░░░░

$$
a^{d e} \equiv a \pmod p.
$$

Therefore ░░░░ ░░░░ assume that $p \nmid a$.

Since $d e \equiv 1 \pmod k$░░░░ $k$ divides $d e - 1$░░░░ ░░░░ there is ░░░░ positive integer $\ell$ such ░░░░

$$
d e = 1 + k \ell.
$$

Then,

$$
a^{d e} = a^{1 + k \ell} = a \cdot a^{k \ell} = a \cdot a^{(p-1)(q-1)\ell}.
$$

By ░░░░ ░░░░ theorem, $a^{p-1} \equiv 1 \pmod p$░░░░ since $p$ is ░░░░ ░░░░ $p \nmid a$░░░░ Therefore,

$$
a^{d e} = a \cdot (a^{p-1})^{(q-1)\ell} \equiv a \cdot 1^{(q-1)\ell} = a \pmod p,
$$

as needed. ░░░░ proof for $q$ is ░░░░ ░░░░ entirely similar, ░░░░ we ░░░░ ░░░░ $\blacksquare$

░░░░ practical ░░░░ ░░░░ factor a ░░░░ ░░░░ ░░░░ ░░░░ classical, ░░░░ ░░░░ to quantum, computer) are known, ░░░░ ░░░░ question has received a ░░░░ of attention. There is a possibility ░░░░ some ░░░░ clever method exists to ░░░░ an ░░░░ ░░░░ ░░░░ such ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ security of ░░░░ over ░░░░ internet would ░░░░ ░░░░

#### Selected Exercises

##### Ex 2-3

_Prove that if $q \geq 5$ and $q$ is irreducible, then $[q]_6 = [1]_6$ or $[q]_6 = [5]_6$._

_Proof_░░░░

░░░░ $q$ is irreducible, $\gcd(q, 6) = 1$ and ░░░░ have $q = 6k + r$ ░░░░ $0 \leq r \lt 6$. Also, $r$ ░░░░ be $0$, $2$, $3$ ░░░░ $6$ ░░░░ ░░░░ $q$ ░░░░ composite. ░░░░ it ░░░░ ░░░░ ░░░░ ░░░░ $r = 1$ or $r = 5$, and $q$ ░░░░ ░░░░ in either of these ░░░░ classes, and $[q]_6 = [1]_6$ ░░░░ $[q]_6 = [5]_6$░░░░ $\blacksquare$

##### $\triangleright$ Ex 2-4

_Find a proof or a counterexample of the following statement: If $[a]_n \neq [0]_n$, and $[a]_n [b]_n = [a]_n [c]_n$, then $[b]_n = [c]_n$._

_Proof_░░░░

░░░░ counterexamples ░░░░ ░░░░ $n$ is composite. ░░░░ means $\Z/n\Z$ ░░░░ ░░░░ ░░░░ integral domain nor a ░░░░ $\blacksquare$

##### Ex 2-6

_Assume that $[a]_n = [1]_n$. Prove that $\gcd(a, n) = 1$. Find an example showing that the converse is not true._

_Proof_░░░░

If $[a]_n = [1]_n$, then $a \equiv 1 \pmod{n}$░░░░ and $a + (-k)n = 1$. By Corollary $1.9$░░░░ $\gcd(a, n) = 1$░░░░ For the ░░░░ ░░░░ $\gcd(a, n) = 1$ ░░░░ , ░░░░ ░░░░ ░░░░ ░░░░ that $a \equiv 1 \pmod{n}$ must ░░░░ ░░░░ We only need ░░░░ consider $n \gt 2$░░░░ Euler's ░░░░ Function $\phi(n)$ counts ░░░░ ░░░░ coprime to $n$, and ░░░░ ░░░░ $a$ to ░░░░ congruent to $1$ ░░░░ necessitate $\Z/n\Z$ ░░░░ ░░░░ a single equivalence class, which is a contradiction, and ░░░░ assumption that $[a]_n = [1]_n$ for ░░░░ $a$ ░░░░ ░░░░ ░░░░ $\blacksquare$ 

##### $\triangleright$ Ex 2-8

_Find the last digit of $7^{1000000}$._

_Proof_░░░░

░░░░ know ░░░░ any nonnegative ░░░░ modulo $10$ reveals ░░░░ ░░░░ ░░░░ of ░░░░ integer by the ░░░░ ░░░░ integer division. Also, $7$ has order $4$ in $\Z/10\Z$░░░░ that ░░░░ its ░░░░ ░░░░ ░░░░ $4$ steps; $7^{4k} \equiv 1 \pmod{n}$ for all $k$░░░░ ░░░░ $1000000 \equiv 0 \pmod{4}$, ░░░░ follows that ░░░░ ░░░░ ░░░░ must ░░░░ $1$. $\blacksquare$

##### $\triangleright$ Ex 2-9

_Find a congruence class $[a]_7$ in $\Z/7\Z$ ░░░░ ░░░░ ░░░░ ░░░░ $[b]_7$ except $[0]_7$ equals a power of $[a]_7$._

_Proof_░░░░

░░░░ ░░░░ case ░░░░ ░░░░ evaluation shows that $a = 3$ ░░░░ a generator ░░░░ $\Z/7\Z$. $\blacksquare$

##### Ex 2-10

_Let $n \gt 0$ be an odd integer that may be written as the sum of two perfect squares. Prove that $[n]_4=[1]_4$._

_Proof_:

Let $x^2$ and $y^2$ ░░░░ ░░░░ squares such that $x^2 + y^2 = n$ where $n$ is odd. ░░░░ $x$ ░░░░ ░░░░ then $x^2 \equiv 0 \pmod{4}$░░░░ ░░░░ if $x$ is ░░░░ then $x^2 \equiv 1 \pmod{4}$. Since $n$ is odd, ░░░░ ░░░░ ░░░░ options are $[0]_4 + [1]_4 = [1]_4$ and $[1]_4 + [0]_4 = [1]_4$░░░░ therefore $[n]_4 = [1]_4$. $\blacksquare$

##### $\triangleright$ Ex 2-11

_Prove that for all $a \in \Z/n\Z$, $a \cdot 0=0$ (where $0$ stands for $[0]_n$)._

_Proof:_

Since $a \in \Z/n\Z$, we ░░░░ represent ░░░░ ░░░░ ░░░░ ░░░░ $[a]_n$. Then, by the definition of modular arithmetic operations, $[a]_n \cdot [0]_n = [a \cdot 0]_n = [0]_n \equiv 0 \pmod{n}$. $\blacksquare$

##### Ex 2-15

_Let $p \gt 0$ be a prime integer. Prove that the equation $x^2 + x = 0$ has exactly two solutions in $\Z/p\Z$, and find those solutions._

_Proof_:

Since $\Z/p\Z$ is ░░░░ we ░░░░ ░░░░ zero ░░░░ ░░░░ $x(x + 1) = 0 \implies x = 0 \ \text{or} \ (x + 1) = 0 \implies x = -1$░░░░ $\blacksquare$

##### $\triangleright$ Ex 2-18

_Prove that the two formulations of Fermat’s little theorem are equivalent._

_Proof_:

Fermat's Little ░░░░ says $a^{p - 1} \equiv 1 \pmod{p}$ ░░░░ $p$ ░░░░ prime. Also, $\Z/p\Z$ being a field means ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ by $a$ and ░░░░ ░░░░ ░░░░ restatement,$a^{p - 1} \cdot a \equiv 1 \cdot a \pmod{p} \implies a^{p - 1 + 1} \equiv a \pmod{p} \implies a^p \equiv a \pmod{p}$. $\blacksquare$ 

##### $\triangleright$ Ex 2-19  

_(i)_ Compute ░░░░ ░░░░ $[1 \cdot 3]_{11}$, $[2 \cdot 3]_{11}$░░░░ $[3 \cdot 3]_{11}, \dots, [10 \cdot 3]_{11}$ and ░░░░ that ░░░░ ░░░░ the classes $[1]_{11}, \dots, [10]_{11}$, ░░░░ a ░░░░ order. ░░░░ generalization of ░░░░ fact is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ 2.18.)  

_Proof_░░░░

░░░░ multiplying ░░░░ equivalence class by $3$ ░░░░ $\Z/11\Z$, and we ░░░░

$[3]_{11}, [6]_{11}, [9]_{11}, [1]_{11}, [4]_{11}, [7]_{11}, [10]_{11}, [2]_{11}, [5]_{11}, [8]_{11}$░░░░

░░░░ gives us ░░░░ ░░░░ ░░░░ simply ░░░░ a different order. $\blacksquare$

_(ii)_ Compute ░░░░ ░░░░ $[1 \cdot 3]_{12}$, $[2 \cdot 3]_{12}$░░░░ $[3 \cdot 3]_{12}, \dots, [11 \cdot 3]_{12}$ and ░░░░ ░░░░ ░░░░ **do not** equal ░░░░ classes $[1]_{12}, \dots, [11]_{12}$, in ░░░░ ░░░░

_Proof_:

By ░░░░ similar ░░░░ evaluation to ░░░░ ░░░░ ░░░░ prove the ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ because $12$ ░░░░ ░░░░  $\blacksquare$

##### $\triangleright$ Ex 2-20

_Let $n$, $a$, $b_1$░░░░ $b_r$ be integers, with $n \gt 1$ and $1 \lt a \lt n$, $1 \lt b_i \lt n$. Assume that $a$ is ░░░░ witness ░░░░ ░░░░ fact ░░░░ $n$ ░░░░ composite ░░░░ ░░░░ $a^{n - 1} \not\equiv 1 \pmod{n}$) and that $\gcd(a, n) = 1$._

_(i) Prove that if $b_i$ ░░░░ **not** a witness, then $ab_i$ **is** a witness._

_Proof_░░░░

Since $a$ is ░░░░ witness, ░░░░ ░░░░ $a \cdot x \equiv 0 \pmod{n}$ for some non-zero $x \in \Z$. Multiplying by $b_i$, $axb_i \equiv 0 \pmod{n} \implies a(x b_i) \equiv 0 \pmod{n}$. We know that $b_i$ ░░░░ not a ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ if $x \equiv 0 \pmod{n}$. ░░░░ $b_i x \neq 0$, $a b_i \equiv 0 \pmod{n}$ where $ab_i$ ░░░░ ░░░░ compositeness ░░░░ $n$░░░░ $\blacksquare$

_(ii) Prove that if $[b_i]_n, \cdots, [b_r]_n$ are all different, then so are $[ab_1]_n, \cdots, [ab_r]_n$._

_Proof_:

░░░░ the two ░░░░ products ░░░░ ░░░░ $n$░░░░ ░░░░ is, ░░░░ exist two ░░░░ ░░░░ $i \neq j$ such that $ab_i \equiv ab_j \pmod{n}$░░░░ Since $\gcd(a, n) = 1$ guarantees the invertibility ░░░░ $a$ modulo $n$░░░░ ░░░░ can ░░░░ by $a^{-1}$ ░░░░ get $(a \cdot a^{-1}) b_i \equiv (a \cdot a^{-1}) b_j \pmod{n} \implies b_i \equiv b_j \pmod{n}$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $b_i$ and $b_j$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $ab_i \not\equiv ab_j \pmod{n}$. $\blacksquare$

_(iii) Deduce that in this case $n$ has fewer than $n/2$ non-witnesses._

_Proof_:

░░░░ ░░░░ are $k$ ░░░░ ░░░░ that $b_1, \cdots, b_k$ that are not witnesses. By ░░░░ we ░░░░ that ░░░░ ░░░░ $a$ preserves distinctness, ░░░░ $ab_1, \cdots, ab_k$ are ░░░░ ░░░░ ░░░░ ░░░░ have atleast $k$ ░░░░ Also, $\Z/n\Z$ has $n - 1$ non-zero elements. Then, $k + k \leq n - 1 \implies k \leq (n - 1)/2 \implies k \lt n/2$, and ░░░░ have ░░░░ ░░░░ $n/2$ ░░░░ $\blacksquare$








