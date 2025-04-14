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

Our general goal is the generalization of common algebraic structures; we will try to capture their essence by determining axioms which are responsible for their properties. We start with the set of integers $\mathbb{Z}$, considered along with the two operations of addition $(+)$ and multiplication $(\cdot)$. We will spend some time trying to understand how $\mathbb{Z}$ is put together with respect to these two operations, and we will identify several key properties. We will then take a selection of those properties, the so-called **ring axioms**, and eventually aim at studying all structures that are defined by requiring a set $A$ along with two operations (which will be called $+$ and $\cdot$ even if they may have nothing to do with the conventional $+$ and $\cdot$) to satisfy the ring axioms. These structures will be called **rings**: from this perspective, $\mathbb{Z}$ is a particular example of a ring. Other examples being $\mathbb{Q}$ (_rational_ numbers), $\mathbb{R}$ (_real_ numbers), $\mathbb{C}$ (_complex_ numbers); but many more exist, and most of them have **nothing to do with numbers**. 

We will study **_all_ of them** at once in the sense that we will determine several features that every such structure (as opposed to specific examples like $\mathbb{Z}$ or $\mathbb{Q}$) must have. We will (implicitly) define a **category of rings** by specifying certain types of functions (which we will call **_homomorphisms_**) between rings.

Everything we will see should sound familiar, but the viewpoint may seem unusual at first—the goal will be to single out the key facts that are responsible for **_the way $\mathbb{Z}$ works_.** These facts will be useful in studying other examples, particularly coming from **_modular arithmetic_**, and the study of these examples will guide us in choosing the axioms that we will use in order to define what a ring is.

We will assume familiarity with the basic, elementary-school properties of addition and multiplication between integers along with the notion of **_ordering_** in $\mathbb{Z}$: if $a$ and $b$ are integers, we write $a \leq b$ to mean that $a$ is ‘less than or equal to’ $b$, in the ordinary sense. This ordering satisfies the following axioms with respect to the operations: for example, if $a \leq b$ and $c \geq 0$, then $a+c \leq b+c$.

We will begin by noticing the fact that division behaves rather peculiarly in $\Z$. For example, we can divide $18$ by $3$, getting a quotient of $6$, which is an element of $\mathbb{Z}$. We can also divide $1$ by $2$, but the quotient is not an element of $\mathbb{Z}$: there is no integer $c$ such that $1 = 2c$. We need some terminology to be able to deal with this distinction.

_**Definition $1.1$:**  Let $a, b \in \mathbb{Z}$. We say that ‘$b$ divides $a$’, or ‘$b$ is a divisor of $a$’, or ‘$a$ is a multiple of $b$’, and write $b \mid a$, if there is an integer $c$ such that $a = bc$._

Thus, $3$ ‘divides’ $18$ since $18 = 3 \cdot 6$ and $6$ is an integer; while $2$ does not divide $1$, because $1 = 2 \cdot (1/2)$ but $1/2$ is not an integer. The divisors of $12$ are $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6$, and $\pm 12$. Every integer divides $0$, since $0 = b \cdot c$ for some integer $c$; as it happens, $c = 0$ works. On the other hand, the only integer that $0$ divides is $0$ itself.  

With this understood, we can already record a useful elementary fact.  

_**Lemma $1.2$:** If $b \mid a$ and $a \neq 0$, then $|b| \leq |a|$._

_Proof:_  
Indeed, by definition of divisibility we have $a = bc$ for some integer $c$; in particular, both $b$ and $c$ are nonzero since $a \neq 0$. Since $c \in \mathbb{Z}$ and $c \neq 0$, we have $|c| \geq 1$.  

And then,
$$|a| = |b| \cdot |c| \geq |b| \cdot 1 = |b|$$
as claimed.  

‘Divisibility’ defines an order relation on the set of nonnegative integers. What Lemma $1.2$ says is that, to some extent, this ‘new’ order relation is compatible with the ordinary one $\leq$.  

What if $b$ does not divide $a$? We can still divide $b$ into $a$ (at least if $b \neq 0$), but we have to pay a price: we get a remainder as we do so. Even if this fact is familiar to you, we will look into why it works the way it does, since it is something special about $\mathbb{Z}$—we have no need for this complication when we divide rational numbers, for example. So there must be some special property of $\mathbb{Z}$ which is responsible for this fact.  

This property is in fact a property of the ordering $\leq$ we reviewed a moment ago. It will be responsible for several subtle features of $\mathbb{Z}$; in fact, besides the basic high-school properties of addition and multiplication, it is essentially the one property of $\mathbb{Z}$ that makes it work the way it does. So we focus on it for a moment, before returning to the issue of divisibility.  

As recalled above, $\mathbb{Z}$ comes endowed with an order relation $\leq$. In fact, this is what we call a ‘total ordering’. By this terminology we mean that given any two integers $a$ and $b$, one of three things must be true: $a < b$, or $a = b$, or $a > b$. The same can be said of other sets of numbers, such as the set of rational numbers $\mathbb{Q}$ and the set of real numbers $\mathbb{R}$; but there is something about the ordering relation on $\mathbb{Z}$ that makes it very special. Terminology: $\mathbb{Z}^{\geq 0}$ stands for the set of nonnegative integers:

$$
\mathbb{Z}^{\geq 0} = \{ a \in \mathbb{Z} \mid a \geq 0 \} = \{0, 1, 2, 3, \ldots\}.
$$
Similarly $\mathbb{Z}_{\geq0}$ stands for the set of positive integers, $\mathbb{Q}_{\leq0}$ is the set of nonpositive rational numbers, and so on.) Another name for $\mathbb{Z}_{\geq0}$ is $\mathbb{N}$, the set of _natural numbers_. The fact we need has everything to do with $\mathbb{Z}_{\geq0}$:

_**Fact (Well-ordering principle):** Every nonempty set of nonnegative integers contains a least element._

We can summarize this fact by saying that $\mathbb{Z}_{\geq0}$ is ‘well-ordered’ by the relation $\leq$. A ‘well-ordering’ on a set $S$ is simply an order relation such that every nonempty subset of $S$ has a minimum.

The well-ordering principle should sound reasonable if not outright obvious: if we have many bags of potatoes, there will be one (or more) bags with the least number of potatoes. But whether this is obvious or not is a matter of perspective—if we were to attempt to **define** $\mathbb{Z}$ rigorously, the well-ordering principle for nonnegative integers would be one of the axioms we would explicitly adopt; there is (to my knowledge) no direct way to derive it from more basic properties of the set of integers.

Also note that $\leq$ is not a well-ordering on the set $\mathbb{Q}_{\geq0}$ of nonnegative rationals, or on the set $\mathbb{R}_{\geq0}$ of nonnegative reals. For example, the set of positive rationals is a nonempty subset of $\mathbb{Q}_{\geq0}$, but it does not have a ‘least’ element. (If $q>0$ were such an element, then $q/2$ would be even smaller and still rational and positive, giving a contradiction.) So the well-ordering principle is really a rather special feature of $\mathbb{Z}_{\geq0}$. We will derive several key properties of $\mathbb{Z}$ from it, granting (as we already did above) simple facts about how the ordering $\leq$ behaves with respect to the operations $+, -,$ and $\cdot$.

Even before we see the well-ordering principle in action in ‘algebra’ proper, it is useful to observe that it already plays a role in a specific logical tool with which we are already familiar: the process of induction depends on it. Every proof by induction can be converted into an argument appealing to the well-ordering principle. Why?

This is how induction works. We want to prove a certain property $P(n)$ for all integers $n \geq 0$. Suppose we manage to prove that,

(i) $P(0)$ holds: the property is true for $n = 0$; and  
(ii) the implication $P(n) \implies P(n + 1)$ holds for all $n \geq 0$.

Then induction tells us that indeed, our property $P(n)$ holds for all $n \geq 0$; the ‘seed’ $P(0)$ holds because we have proved it by hand in (i); and then $P(1)$ holds since $P(0)$ holds and we have proved in (ii) that $P(0) \implies P(1)$; and then $P(2)$ holds since $P(1)$ holds and we have proved that $P(1) \implies P(2)$; and then $P(3)$ holds since $P(2)$ holds and we have proved that $P(2) \implies P(3)$; and so on forever.

The problem with this argument is that ‘so on forever’ is not mathematics. There is an alternative argument which is rigorous, once we grant the truth of the well-ordering principle.

_**Induction from the well-ordering principle:** Assume we have established (i) and (ii). We have to prove that $P(n)$ holds for all $n \geq 0$._

_Proof:_
Let $F \subseteq \mathbb{Z}_{\geq 0}$ be the set of nonnegative integers $n$ such that $P(n)$ does not hold; then we have to prove that $F = \emptyset$. We will prove that this is necessarily the case by showing that $F \neq \emptyset$ leads to a contradiction.  

Assume then that our set $F$ is a nonempty set of nonnegative integers. By the well-ordering principle, $F$ has a least element $\ell \in \mathbb{Z}_{\geq 0}$: that is, $P(\ell)$ does not hold, and $\ell$ is the least nonnegative integer with this property.  

By (i) we know that $P(0)$ holds, and therefore $\ell > 0$. Then $n = \ell - 1$ is a nonnegative integer, and $n < \ell$, therefore $P(n)$ holds, since $\ell$ is the least nonnegative integer for which the property does not hold. By (ii), $P(n) \implies P(n + 1)$; so $P(n + 1)$ holds. But $n + 1 = \ell$, so this shows that $P(\ell)$ does hold.  

We have reached a contradiction: $P(\ell)$ would both hold and not hold. Therefore, the assumption that $F \neq \emptyset$ leads to a contradiction, and we must conclude that $F = \emptyset$, as we needed. $\blacksquare$

Several proofs in what follows could be handled by induction or interchangeably by an appeal to the well-ordering principle. Which to use is essentially a matter of taste. We will often resort to the well-ordering principle, to stress that we are really using a specific feature of $\mathbb{Z}$. Also, well-ordering tends towards leaner, rigorous arguments.

#### Division with Remainder in $\Z$

_**Theorem $1.3$:** Let $a, b$ be integers, with $b \neq 0$. Then there exist a unique ‘quotient’ $q \in \mathbb{Z}$ and a unique ‘remainder’ $r \in \mathbb{Z}$ such that:_
$$a = bq + r \quad \text{with} \quad 0 \leq r < |b|.$$
_Proof:_

We can assume that $b > 0$. Indeed, if $b < 0$, we can apply the statement to $-b > 0$ and then flip the sign of $q$ after the fact. Switching the sign of $b$ does not change $|b|$, so the condition on $r$ is unchanged.

Assume then that $b > 0$, and consider all integer linear combinations of $a$ and $b$ of the form $a - bx$ with $x \in \mathbb{Z}$, such that $a - bx \geq 0$. Note that there are nonnegative integers of this type: if $a$ is itself nonnegative, then $a - b \cdot 0 = a$ is nonnegative; and if $a$ is negative, then $a - ba = a(1 - b)$ is nonnegative because $1 - b \leq 0$. Therefore, the set,

$$S = \{a - bx \mid x \in \mathbb{Z}, a - bx \geq 0\}$$  

is a nonempty set of nonnegative integers. By the well-ordering principle, it contains a least element $r$: that is, there is some $x = q$ such that $r = a - bq$ is smaller than any other nonnegative number of the form $a - bx$. I claim that these $q$ and $r$ are the unique numbers whose existence is claimed in the statement. 

Indeed: by construction we have that $a = bq + r$ and that $r \geq 0$. We now have to verify that,

- The expression $r < b$ holds (note that $|b| = b$ since we are assuming $b > 0$).
- The numbers $q$ and $r$ are unique with these properties.

For $(1)$, argue by contradiction. If we had $r \geq b$, then we would have $r - b \geq 0$, and 

$$
0 \leq r - b = (a - bq) - b = a - b(q + 1).
$$
This would show that $r - b$ is an element of $S$, since it is a nonnegative integer linear combination of $a$ and $b$. But that is a contradiction, since $r - b < r$ while $r$ was chosen to be the least element of $S$. Since $r \geq b$ leads to a contradiction, we can conclude that $r < b$ as we claimed.

For $(2)$, assume that $q', r'$ are also integers satisfying the requirement spelled out in the theorem: that is, $a = bq' + r'$, and $0 \leq r' < b$. We will show that necessarily $q = q'$ and $r = r'$ (this is what we mean by stating that $q$ and $r$ are "unique").

Since $a = bq + r = bq' + r'$, we have,

$$
b(q - q') = r' - r
$$
Now, since both $r$ and $r'$ are in the interval $[0, b - 1]$, their difference cannot exceed $b - 1$. In other words, $|r' - r| \leq b - 1$, and in particular $|r' - r| < |b|$. But $(1.1)$ shows that $b$ is a divisor of $r' - r$; if $r' - r \neq 0$, then by Lemma $1.2$ we would necessarily have $|b| \leq |r' - r|$, contradicting the fact that $|b| > |r' - r|$ we observed a moment ago. The only possibility then is that $r' - r = 0$. This shows that $r' = r$, and further $b(q - q') = 0$. Since $b \neq 0$, this implies that $q - q' = 0$, and it follows that $q' = q$. $\blacksquare$

#### Greatest Common Divisors (GCD)

_**Definition $1.5$:** Let $a, b \in \mathbb{Z}$. We say that a nonnegative integer $d$ is the ‘greatest common divisor’ of $a$ and $b$, denoted $\text{gcd}(a, b)$ or simply $(a, b)$ if,_  

- _$d \mid a$ and $d \mid b$;_

- _if $c \mid a$ and $c \mid b$, then $c \mid d$._

If at least one of $a$ and $b$ is not $0$, then $d = \text{gcd}(a, b) \neq 0$. Indeed, $d$ must divide both $a$ and $b$ according to the first requirement in the definition (this makes $d$ a ‘common divisor’), so $d$ cannot be $0$ unless both $a$ and $b$ are $0$—keep in mind that $0$ only divides $0$. The second requirement in the definition says that if $c$ is also a common divisor, then it must divide $d$. By Lemma $1.2$, this implies that $|c| \leq |d|$ if $d \neq 0$, and hence $c \leq d$ since $d$ is nonnegative. Therefore $d$ is the ‘greatest’ (as in ‘largest’) common divisor of $a$ and $b$ if $a$ and $b$ are not both $0$.  

It is clear that the gcd exists: if you have two integers $a$ and $b$, not both equal to $0$, then you can simply list the divisors of $a$, list the divisors of $b$, and then $\text{gcd}(a, b)$ is simply the largest integer in the intersection of these two sets.  

**Example $1.6$** To find that $\text{gcd}(30, -42) = 6$, we can list all divisors of $30$:
$$-30, -15, -10, -6, -5, -3, -2, -1, 1, 2, 3, 5, 6, 10, 15, 30$$ and all divisors of $-42$:  $$-42, -21, -14, -7, -6, -3, -2, -1, 1, 2, 3, 6, 7, 14, 21, 42$$ and then note that $6$ is the largest integer that occurs in both lists.  

Beware, however, that this method to find a gcd is extremely inefficient: finding the divisors of an integer is a time-consuming business, and if the integer is largish (say, a few thousand digits) then its factorization may take current algorithms longer than the age of the universe to be carried out on the fastest imaginable digital computers. We will soon encounter a very efficient alternative to the ‘inspection’ method given above (Theorem $1.14$).  

_**Remark $1.7$:**_ One may wonder why we have not replaced the second requirement with something like if $c \mid a$ and $c \mid b$, then $c \leq d$, which would seem to justify the terminology ‘greatest common divisor’ in a more direct way. (This may be the definition one may have previously encountered with this notion.) The main reason is that when we recast this notion for more general ‘rings’, the relation of divisibility will be available, while the (perhaps) simpler relation $\leq$ will not. Also, Definition $1.5$ makes good sense for all possible integers $a, b$, including the case $a = b = 0$: in this case, since every number divides $0$, the second requirement says that every integer divides $\text{gcd}(0, 0)$. Since $0$ is the only number divisible by everything, this tells us that $\text{gcd}(0, 0) = 0$ according to Definition $1.5$. Even in this case, $\text{gcd}(a, b)$ is ‘greatest’; but with respect to the divisibility relation from Ex $1.2$ rather than the ordinary order relation $\leq$.

_**Theorem $1.8$:** Let $a, b$ be integers. Then the greatest common divisor $d = \text{gcd}(a, b)$ is an integer linear combination of $a$ and $b$. That is, there exist integers $m$ and $n$ such that,_  $$d = ma + nb$$In fact, if $a$ and $b$ are not both $0$, then $\text{gcd}(a, b)$ is the smallest positive linear combination of $a$ and $b$.

For example, $\text{gcd}(30, -42) = 6$. The theorem then tells us that there must be integers $m$ and $n$ such that $30m - 42n = 6$. Does this seem ‘obvious'? A couple of attempts quickly yield $m = 3$, $n = 2$, which give,$$3 \cdot 30 - 2 \cdot (-42) = 90 - 84 = 6.$$Notice that it is clear that the integers $m$ and $n$ are not going to be unique, since if,  $$d = ma + nb,$$ then also,  $$d = (m - b)a + (n + a)b,$$
$$d = (m + ba) + (n - ab),$$  and so on. For instance,  
$$(3 + 42) \cdot 30 - (2 + 30) \cdot 42 = 45 \cdot 30 - 32 \cdot 42 = 1350 - 1344 = 6.$$  Therefore $m = 45, n = 32$ also work in our example. Doing this type of experimentation is excellent practice, but it is kind of clear that mindless arithmetic will not prove the theorem in general. The missing ingredient is the well-ordering principle, and the beginning of the proof will remind you of the beginning of the proof of Theorem $1.3$.

_Proof:_ 

If $a = b = 0$, then $\text{gcd}(a, b) = \text{gcd}(0, 0) = 0$, which is a linear combination of $a$ and $b$ (because $0 = 1 \cdot 0 + 1 \cdot 0$). Therefore, we may assume that $a$ and $b$ are not both $0$. Consider all linear combinations $ma + nb$ of $a$ and $b$. I claim that some of them are positive. Indeed, take $m = a, n = b$; then,  $$ma + nb = a^2 + b^2,$$
and this number is positive since $a$ and $b$ are not both $0$. Therefore, the set,$$S = \{ma + nb \mid m \in \mathbb{Z}, n \in \mathbb{Z}, \text{ and } ma + nb > 0\}$$is nonempty. This is the standard setting to apply the well-ordering principle: since $S$ is a nonempty set of nonnegative integers, it must have a least element. Let $d$ be this least element, and let $m$ and $n$ be integers such that $d = ma + nb$. That is, $d$ is the smallest positive linear combination of $a$ and $b$. We are going to verify that $d$ is the $\text{gcd}$ of $a$ and $b$, and this will prove the theorem.

Since $d \in S$, then $d > 0$: so $d$ is nonnegative and not equal to $0$. In order to prove that $d$ is the $\text{gcd}$ of $a$ and $b$, we have to prove that

(i) $d \mid a$ and $d \mid b$; and  

(ii) if $c \mid a$ and $c \mid b$, then $c \mid d$.

If $a = 0$, $d \mid a$ is automatic. If $a \neq 0$, we can use division with remainder: by Theorem $1.3$, we know that there exist integers $q$ and $r$ such that,  $$a = dq + r,$$  with $0 \leq r < d$. Note that,  $$r = a - dq = a - (ma + nb)q = a(1 - m) + b(-nq).$$  This shows that $r$ is a linear combination of $a$ and $b$. Can it be an element of $S$? No! Because $r < d$, and $d$ has been chosen to be the smallest element of $S$. But then $r$ cannot be positive, since $r$ is a linear combination of $a$ and $b$, and $S$ contains all **positive** linear combinations of $a$ and $b$. Since $r \geq 0$ and $r$ is not positive, it follows that $r = 0$. This proves that $a = dq$, showing that $d \mid a$.

By essentially the same argument, we can deduce that $d \mid b$. (The roles of $a$ and $b$ are interchangeable.) This takes care of (i).

We still have to prove (ii). Suppose we have a common divisor $c$ of $a$ and $b$: $c \mid a$ and $c \mid b$. Then we have $a = uc, b = vc$ for some integers $u$ and $v$. This gives,  $$d = ma + nb = m(uc) + n(vc) = (mu + nv)c$$  and proves that $c \mid d$, as we needed. $\blacksquare$

Theorem $1.8$ has nice, if somewhat technical, applications. Here is one.

_**Corollary $1.9$:** Let $a, b$ be integers. Then $\text{gcd}(a, b) = 1$ if and only if $1$ may be expressed as a linear combination of $a$ and $b$._

_Proof:_ 

If $\text{gcd}(a, b) = 1$, then the number $1$ may be expressed as a linear combination of $a$ and $b$ by Theorem $1.8$. On the other hand, if $1$ may be expressed as a linear combination of $a$ and $b$, then $1$ is necessarily the **smallest positive** linear combination of $a$ and $b$, because $1$ is the smallest positive integer. It follows that $\text{gcd}(a, b) = 1$, again as a consequence of Theorem $1.8$. $\blacksquare$

_**Definition $1.10$:**  We say that $a$ and $b$ are **relatively prime** if $\text{gcd}(a, b) = 1$._

For example, $3$ and $7$ are relatively prime. It follows that **every** integer is a linear combination of $3$ and $7$: indeed, $1$ is a linear combination, and a multiple of a linear combination is a linear combination. For example, if we consider a random integer, say,  $$173233884731,$$  then, a small computation yields,  $$173233884731 = 866191923655 \cdot 3 + (-346476769462) \cdot 7$$
_**Corollary $1.11$:** Let $a$, $b$, $c$ be integers. If $a \mid bc$ and $\gcd{(a, b)} = 1$, then $a \mid c$._ 

_Proof:_ 

By Theorem $1.8$,  $$1 = ma + nb$$  
for some integers $m$ and $n$. Multiply by $c$, $$c = 1 \cdot c = (ma + nb)c = mac + nbc = (mc)a + n(bc).$$  Now the hypothesis tells us that $a \mid bc$, so $bc = ra$ for some integer $r$. Then,  $$c = (mc)a + n(ra) = (mc + nr)a,$$  and this shows that $a \mid c$ as needed. $\blacksquare$

_**Remark $1.12$:** The hypothesis that $\gcd(a,b)=1$ is necessary. For example, we have that $10 \mid (6\cdot5)$, and yet $10$ divides neither $6$ nor $5$. This is not contradicting the statement, since $\gcd(10,6)=2\neq1$._

Next we come back to the question of how we could compute the gcd of two numbers more efficiently than just applying the definition (as we did at the beginning of this section). Given two integers $a$ and $b$, we may assume that $b\neq0$ (if $b=0$, then $\gcd(a,b)=a$, so there is nothing to “compute”). We can then apply division with remainder repeatedly, like this:

$$
\begin{align*}
a &= bq_0 + r_0 \quad 0 \leq r_0 \lt b \\ \\[0.1pt]
b &= r_0q_1 + r_1 \quad 0\leq r_1 \lt r_0 \\ \\[0.1pt]
r_0 &= r_1 q_2 + r_2 \quad 0 \leq r_2 \lt r_1
\end{align*}
$$
We can keep going so long as the remainder of the last division is not $0$. Since at each step the remainder decreases and remains nonnegative, at some point it must become $0$:

$$
\begin{align*}
r_{n - 2} &= r_{n - 1} q_n + r_n \quad 0 \leq r_n \lt r_{n - 1} \\ \\[0.1pt]
r_{n - 1} &= r_nq_{n + 1} + 0
\end{align*}
$$
**Example $1.13$:** Let’s run this procedure with $a = 30$, $b = -42$ (cf. Example $1.6$):

$$
\begin{align*}
30 &= -42 \cdot 0 + 30 \\ \\[0.1pt]
-42 &= 30 \cdot (-2) + 18 \\ \\[0.1pt]
30 &= 18 \cdot 1 + 12 \\ \\[0.1pt]
18 &= 12 \cdot 1 + 6 \\ \\[0.1pt]
12 &= 6 \cdot 2 + 0
\end{align*}
$$
The last nonzero remainder is $6$, and we had observed that $\gcd(30, -42) = 6$. This is not a coincidence!

_**Theorem $1.14$ (Euclidean algorithm):** Let $a$, $b$ be integers, with $b \neq 0$. Then, with notation as above, $\gcd(a,b)$ equals the last nonzero remainder $r_n$._

More explicitly: let $r_{-2} = a$ and $r_{-1} = b$; for $i \geq 0$, let $r_i$ be the remainder of the division of $r_{i-2}$ by $r_{i-1}$. Then there is an integer $n$ such that $r_n \neq 0$ and $r_{n+1} = 0$, and $\gcd(a,b) = r_n$.

Applying the Euclidean algorithm to two integers only requires being able to carry out the division with remainder, which is very fast. No factorization is required!

Theorem $1.14$ is perhaps easier to prove than it may seem, once we understand the following statement. 

_**Lemma $1.15$:** Let $a, b, q, r$ be integers, with $b \neq 0$, and assume that $a = bq + r$. Then,_
$$\text{gcd}(a, b) = \text{gcd}(b, r).$$ _Proof:_  

It is enough to prove that the pairs $a$ and $b$, $b$ and $r$ have the same common divisors: then the largest among the common divisors will be the gcd of both $(a, b)$ and $(b, r)$, proving the statement.  

Let $c$ be a common divisor of $a$ and $b$: $c \mid a$ and $c \mid b$. Then $a = cs$, $b = ct$ for some integers $s$ and $t$ . It follows that,  $$r = a - bq = cs - ctq = c(s - tq),$$  and this shows that $c \mid r$. Since we already have that $c \mid b$, we see that $c$ is a common divisor of $b$ and $r$. One applies the same technique to show that if $c$ is a common divisor of $b$ and $r$, then it is a common divisor of $a$ and $b$. 

Why does Lemma $1.15$ imply Theorem $1.14$? In the situation described above, the lemma tells us that,$$\text{gcd}(a, b) = \text{gcd}(b, r_0) = \text{gcd}(r_0, r_1) = \dots = \text{gcd}(r_{n-1}, r_n) = \text{gcd}(r_n, 0) = r_n,$$  and this is precisely what Theorem $1.14$ claims.  

_**Remark $1.16$:** If necessary, one can chase the Euclidean algorithm backwards and find integers $m, n$ such that $\text{gcd}(a, b) = ma + nb$. Rather than giving a formal description of this process, let’s see how it works in Example $1.13$. The fourth (i.e., second-to-last) line in the “algorithm” tells us,_
$$\text{gcd}(30, -42) = 6 = 18 - 12 \cdot 1 = 18 - 12.$$According to the third line, $12 = 30 - 18$, so this says,
$$\text{gcd}(30, -42) = 18 - (30 - 18) = 2 \cdot 18 - 30.$$According to the second line, $18 = -42 - 30 \cdot (-2)$, therefore,  $$\text{gcd}(30, -42) = 2 \cdot (-42 - 30 \cdot (-2)) - 30 = 3 \cdot 30 + 2 \cdot (-42),$$and we see that $m = 3$, $n = 2$ work.

#### The Fundamental Theorem of Arithmetic

Everything we have done so far assumed familiarity with the ordinary operations of addition and multiplication in $\mathbb{Z}$. You may feel that addition is a simpler business than multiplication, and there are technical reasons why this is indeed the case. Everything about addition boils down to the number $1$: every positive integer can be obtained by adding $1$ to itself a number of times; and if you allow subtractions, then you can ‘generate’ every integer from $1$. The number $1$ is the one brick you need to build the whole of $\mathbb{Z}$, if you can only use addition. (We will see in due time ($§10.2$) that this makes the group $(\mathbb{Z},+)$ ‘cyclic’.) From this point of view, multiplication is clearly a different story: we cannot obtain every integer by multiplying a fixed number by itself. Even if you allow division, one number won’t do. As it happens, however, again we can build the whole of $\mathbb{Z}$ with multiplication, but we need many more bricks—an infinite number of them.

_**Definition $1.17$:** An integer $p$ is ‘irreducible’ if $p\neq\pm 1$ and the only divisors of $p$ are $\pm 1,\pm p$. An integer $\neq 0,\neq\pm 1$ is ‘reducible’ or ‘composite’ if it is not irreducible._

(Note that $0$ and $\pm 1$ are neither irreducible nor composite according to this definition.)

For example, $10$ is not irreducible (thus, it is a composite integer): indeed, $2$ is a divisor of $10$ that does not equal $\pm 1,\pm 10$. The first few irreducible positive integers are,$$2,3,5,7,11,13,17,19,23,29,31,37,41,43,\dots$$One straightforward way to generate the list of irreducible positive integers is the Sieve of Eratosthenes: list all integers $\geq 2$, then cross out all multiples of $2$ bigger than $2$, then all multiples of $3$ bigger than $3$, and so on: cross out all multiples of the integers that have not been crossed out yet. We get,$$2\ 3\ 5\ \cancel{6}\ 7\ \cancel{9}\ 11\ \cancel{12}\ 13\ \cancel{15}\ 17\ \cancel{18}\ 19\ \cancel{21}\ \dots$$It should be clear that the integers that are not crossed out are all and only the positive irreducible integers.

We will see that every integer can be written as a product of irreducible integers, and further that this can be done in an essentially unique way. Before we get there, we have to look into this definition a little more carefully. Here is a consequence which relates Definition $1.17$ with the material covered in $§1.3$.

_**Lemma $1.18$:**: Assume that $p$ is an irreducible integer and that $b$ is not a multiple of $p$. Then $b$ and $p$ are relatively prime, that is, $\text{gcd}(p,b)=1$._

_Proof:_  

If $c$ is a common divisor of $p$ and $b$, then in particular $c=\pm 1$ or $c=\pm p$, since $c\mid p$ and $p$ is irreducible. Since $c$ is also a divisor of $b$, and $p$ is not a divisor of $b$ by hypothesis, we deduce that necessarily $c=\pm 1$. This is true of all common divisors of $p$ and $b$, so it is in particular true for $\text{gcd}(p,b)$. Since $\text{gcd}(p,b)\geq 0$, the only possibility is $\text{gcd}(p,b)=1$.

This is already interesting. If $p$ is irreducible, and $b$ is not a multiple of $p$, we now know that there exist integers $m$ and $n$ such that $mp+nb=1$. Was this obvious? Did not appear to be the case, but it is now, since we have proved Lemma $1.18$ and established Corollary $1.9$ earlier.

_**Definition $1.19$:** An integer $p$ is _prime_ if $p \neq \pm 1$ and whenever $p$ divides the product $bc$ of two integers $b$, $c$, then $p$ divides $b$ or $p$ divides $c$._

For example, $10$ is not prime: indeed, $10$ divides $30 = 6 \cdot 5$, even if $10$ divides neither $6$ nor $5$. On the other hand, $0$ is prime according to Definition $1.19$.

_Caveat:_ This is an unusual choice; most references do not include $0$ as a prime integer, and this inclusion may even be viewed as distasteful. we make this nonstandard choice to align with some terminology involving ideals, which we will encounter in $§6.1$; and this convention will enable us to occasionally state sharper statements (cf. Examples $3.30$ and $6.6$).

_Remark 1.20:_ 

- In mathematics, _or_ is not exclusive. The definition allows for the possibility that $p$ may divide _both_ $b$ and $c$.

- It follows from the definition that if $p$ is prime, and $p$ divides a product of several integers $a_i : p | a_1 \cdots a_s$, then $p$ must divide (at least) one of the integers $a_i$.

_**Theorem $1.21$:** Let $p \in \Z$, $p \neq 0$. Then $p$ is prime if and only if it is irreducible._

_Proof:_ 
If $p = \pm 1$, then it's not prime (nor irreducible), so our hypothesis holds. Then, we need to concern ourselves with integers which are not $0$ nor $\pm 1$. To prove our biconditional, we need to prove the direct and converse implications, that is, 

- _Direct implication: If $p$ is prime, then it's irreducible._
- _Converse implication: If $p$ is irreducible, then it must be prime._

For the direct implication, let $p$ be prime and $d \mid p$, where $d$ is a divisor of $p$. Then,$$p = dq$$But then $p$ divides $dq$ (since $dq = 1 \cdot p$ in this case), and since $p$ is prime we can deduce that $p \mid d$ or $p \mid q$. If $p \mid d$, then we have that both $d \mid p$ and $p \mid d$; by Lemma $1.2$, in this case we have that $|d| \leq |p|$ or $|p| \leq |d|$. Then we can conclude $|d| = |p|$, that is, $d = \pm p$. 

On the other hand, if $p \mid q$, then there exists an integer $e$ such that $q = ep$. In this case, $p = dq = dep$, and hence $p(de - 1) = 0$. Since $p \neq 0$, we deduce $de - 1 = 0$, that is, $de = 1$. Then $d$ divides $1$, and this implies $d = \pm 1$. Summarizing, we have shown that if $d \mid p$, then $d = \pm p$ or $d = \pm 1$, and this shows that $p$ is irreducible, as we needed.

For the converse, we assume that $p$ is irreducible; so its divisors are precisely $\pm 1$ and $\pm p$. In order to prove that $p$ is prime, we assume that $p \mid bc$ and have to show that $p \mid b$ or $p \mid c$. If $p$ happens to divide $b$, we have nothing to prove, so we may assume that $p$ does not divide $b$, and we have to prove that in this case $p$ necessarily divides $c$. By Lemma $1.18$, we have that $\gcd(p, b) = 1$. But then $p$ must indeed divide $c$, by Corollary $1.11$. $\blacksquare$

There are reasons for making a distinction between _irreducible_ and _prime_, considering that these two notions are almost identical, as we have just proved. We could adopt the convention (as many do) of simply avoiding $0$ when dealing with prime integers, and then _prime_ and _irreducible_ would be synonyms. I prefer otherwise: it does not seem necessary to treat $0$ as a “special” number in this context. More importantly, the reason to avoid identifying the notions of ‘irreducible’ and ‘prime’ is that when we view these notions from a more general perspective later on ($§6.2$), we will discover that they are indeed substantially different. There are **rings** in which the analogues of Definitions $1.17$ and $1.19$ are really non-equivalent notions, even for nonzero elements. As it happens, nonzero prime elements are always irreducible in “integral domains”, but the converse will not be true in general. Somehow, the first part of the proof of Theorem $1.21$ will generalize broadly, but the second part will not, unless the ring is very special. The ring $\mathbb{Z}$ is very special!

The next theorem is also an expression of how special $\mathbb{Z}$ is. It is so important that it is called the **fundamental theorem of arithmetic**. It is the formalization of the claim we explored earlier, to the effect that the multiplicative structure of $\mathbb{Z}$ is built on infinitely many bricks. The bricks are precisely the prime/irreducible integers.

_**Theorem $1.22$ (Fundamental Theorem of Arithmetic):** Every integer $n \neq 0, \pm 1$ is a product of finitely many irreducible integers: $\forall n \in \mathbb{Z}, n \neq 0, n \neq \pm 1$, there exist irreducible integers $q_1, \dots, q_r$ such that,_

$$
n = q_1 \cdots q_r.
$$
_Further, this factorization is unique in the sense that if,_

$$
n = q_1 \cdots q_r = p_1 \cdots p_s,
$$
_with all $q_i, p_j$ irreducible, then necessarily $s = r$ and after reordering the factors we have $p_1 = \pm q_1, p_2 = \pm q_2, \dots, p_r = \pm q_r$._

_**Remark $1.23$:** As mentioned in this statement, an expression such as ($1.2$) is called a “factorization”, and specifically a **factorization into irreducibles**, or **prime factorization**. The statement does not exclude that $r = 1$: this happens precisely when $n = q_1$ is itself irreducible. We could in fact even agree that the “empty product” equals $1$ (it is not unreasonable to do so), and then we would have that even $n = 1$ has an irreducible factorization: the factorization consisting of no factors(!), corresponding to $r = 0$._

Incidentally, note that the statement of this theorem would be quite a bit more awkward if we had not ruled out $\pm 1$ in our definition of “irreducible”. If we allowed $1$ as an “irreducible factor”, then we could include any number of such factors in any factorization, and the uniqueness part of the statement would simply not be true.

_Proof of Theorem $1.22$:_ 
It is enough to prove the statement for positive integers $n$, since we can incorporate signs in the factors. Let’s first deal with the **existence** of factorizations for integers $n > 1$, and then with the **uniqueness** of the factorization.

Both existence and uniqueness are consequences of the well-ordering principle. For existence, let

$$
S = \{n \in \mathbb{Z}, n > 1 \mid n \text{ is not a product of finitely many irreducibles}\}.
$$
We have to prove that $S$ is empty: this will show that every integer $n > 1$ does have a factorization into irreducibles.

By contradiction, let’s assume that $S$ is not empty. In this case $S$ is a nonempty set of nonnegative integers, therefore $S$ has a least element by the well-ordering principle. Let this integer be $n$.

Since $n \in S$, $n$ is not a product of irreducibles and in particular $n$ is not irreducible itself. Then $n$ has divisors other than $\pm 1, \pm n$: that is, $n = ab$ for some integers $a, b$ different from $\pm 1, \pm n$. We may assume both $a$ and $b$ are positive, since $n$ is positive. Since $a \mid n$ and $b \mid n$, and neither is $1$, we have that $1 < a < n$ and $1 < b < n$ (We are again using Lemma $1.2$!) But $n$ is the smallest integer in $S$, so $a \notin S$ and $b \notin S$. This tells us that both $a$ and $b$ do have factorizations into irreducibles:

$$
a = q_1 \cdots q_u, \quad b = q'_1 \cdots q'_v
$$
for irreducible integers $q_i, q'_j$. We have reached a contradiction, because this would imply that,

$$
n = q_1 \cdots q_u \cdot q'_1 \cdots q'_v,
$$
saying that $n$ _does_ have a factorization into irreducibles—this would mean that $n \notin S$, while $n$ was an element of $S$ to begin with. Thus, our assumption that $S$ be nonempty leads to a contradiction. It follows that $S$ is empty, and this proves the first part of the theorem: every integer $\neq 0, \pm 1$ has factorizations.

Now we have to deal with uniqueness. If $n$ and the factors $q_i$ are all _positive_, then ‘uniqueness’ just means that the factorization ($1.2$) is unique up to the order of the factors. This is what we will show; the general case follows easily from this.

Well, assume that that is not necessarily the case, and let $T$ be the set of nonnegative integers $n$ for which the factorization is not unique: so we are assuming that $T$ is nonempty, and we would like to derive a contradiction from this assumption.

By now, the pattern should be evident. By definition, $T$ is a set of nonnegative integers. If $T$ is nonempty, then it has a _minimum_ $n$ by the _well-ordering principle_: that is, the factorization of $n$ is not unique, but the factorization of any integer smaller than $n$ _is_ unique. Write two distinct factorizations for $n$:

$$
n = q_1 \cdots q_r = p_1 \cdots p_s,
$$
with all $q_i, p_j$ irreducible and positive. Both $r$ and $s$ are $\geq 1$, since $n$ is not equal to $1$. We are assuming that these two factorizations are _not_ the same up to reordering, and we aim at reaching a contradiction.

Look at ($1.3$): it tells us in particular that $p_1$ divides the product $q_1 \cdots q_r$. Since $p_1$ is irreducible, it is prime by Theorem $1.21$, and therefore (cf. Remark $1.20$) it must divide one of the integers $q_i$. After rearranging the factors $q_i$, we may assume that $p_1$ divides $q_1$. 

Next, $q_1$ is itself irreducible, so its divisors are $\pm 1, \pm q_1$. Since $p_1$ is irreducible, it is not equal to $\pm 1$; and since we have established that $p_1$ is a divisor of $q_1$, necessarily $p_1 = \pm q_1$. Both $q_1$ and $p_1$ are positive, so we can conclude that $p_1 = q_1$.

At this point we can rewrite ($1.3$) as,

$$
n = q_1 \cdot q_2 \cdots q_r = q_1 \cdot p_2 \cdots p_s.
$$
By cancellation ($q_1 \neq 0$) it follows that,

$$
q_2 \cdots q_r = p_2 \cdots p_s.
$$

But this number equals the integer $n / q_1$, and in particular it is less than $n$. Since $n$ was the least positive integer for which the factorization was not unique, the factorization is unique for $n / q_1$. This implies that $r - 1 = s - 1$ and $q_i = p_i$ for $i \geq 2$ up to reordering. We had already established that $q_1 = p_1$, so it follows that $r = s$ and $q_i = p_i$ for $i \geq 1$, up to reordering. This says that the two factorizations presented in ($1.3$) do coincide, contradicting our assumption.

Summarizing, the assumption that $T \neq \emptyset$ leads to a contradiction. Therefore necessarily $T = \emptyset$, that is, the factorization is unique for all $n > 1$, and we are done. $\blacksquare$

The fact that the _Fundamental Theorem of Arithmetic_ is true tells us that $\mathbb{Z}$ is rather special. When we learn a bit of the language of rings, we will recognize that this theorem tells us that $\mathbb{Z}$ is a _UFD_ (‘unique factorization domain’). This means that $\mathbb{Z}$ is a domain (a rather nice type of ring) in which every element admits a factorization into irreducibles, and further that this factorization is unique in a suitable sense, as spelled out in Theorem $1.22$. We will glance at more general UFDs in $§6.4$.

If you have paid close attention to the argument, you may have noticed that we did not need to use Theorem $1.21$ in the proof of the second part. In $\mathbb{Z}$, the existence of factorizations only depends on the notion of irreducibility, while the **uniqueness** requires knowing that irreducibles are prime. This is a facet of the more general theory of factorization in rings.

As a consequence of Theorem $1.22$, every positive integer $\neq 1$ determines a well-defined set of positive irreducibles, possibly appearing with multiplicity; for example, the irreducible factorization $12 = 2 \cdot 2 \cdot 3$ tells us that $12$ determines the ‘multiset’ consisting of $2, 2, 3$. By the uniqueness part, the product of no other collection of irreducibles equals $12$. Dealing with negative integers is no harder: we could, for example, insist that exactly one of the irreducible factors is taken with a negative sign.

Putting it yet another way, we can write any positive integer $n$ as follows ($1.5$):

$$
n = 2^{v_2} 3^{v_3} 5^{v_5} 7^{v_7} 11^{v_{11}} \cdots
$$
where the ‘infinite product’ on the right consists of powers of all the irreducible elements, and only finitely many of the exponents $v_i$ are not equal to $0$. For example, $12$ is obtained by letting $v_2 = 2, v_3 = 1$, and setting all other exponents $v_i$ to $0$. We can even do this when $n$ equals $1$: this case corresponds to choosing all the exponents to be $0$. The content of the Fundamental Theorem of Arithmetic is that **every** positive integer $n$ can be expressed in this way, and that the ordered list of exponents $(v_2, v_3, v_5, \dots)$ is determined _uniquely_ by $n$.

As an application, we get a different point of view on divisibility and on greatest common divisors. First, if $n$ is given as in (1.5) and another positive integer $c$ is given by,

$$
c = 2^{r_2} 3^{r_3} 5^{r_5} 7^{r_7} 11^{r_{11}} \cdots,
$$
then $c \mid n$ if and only if $r_i \leq v_i$ for all $i$. This gives us a way to write down all divisors of a given integer, with the following useful consequence.

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
If $c = 2^{\gamma_2} 3^{\gamma_3} 5^{\gamma_5} \cdots$ is a common divisor of $a$ and $b$, as observed above, we must have $\gamma_i \leq \alpha_i$ and $\gamma_i \leq \beta_i$ for all $i$.

Since $\delta_i = \min(\alpha_i, \beta_i)$ is indeed $\leq \alpha_i$ and $\leq \beta_i$, we see that,

$$
d = 2^{\delta_2} 3^{\delta_3} 5^{\delta_5} \cdots
$$
is a common divisor of $a$ and $b$, giving requirement (i) in Definition 1.5. Further, we note that if $\gamma_i$ is less than both $\alpha_i$ and $\beta_i$, then $\gamma_i < \min(\alpha_i, \beta_i) = \delta_i$. This implies that every common divisor of $a$ and $b$ divides $d$, and shows that $d$ also satisfies requirement (ii) in Definition $1.5$. $\blacksquare$

Essentially the same argument will show that the _least common multiple_ (lcm) is similarly obtained by taking exponents $\max(\alpha_i, \beta_i)$. (The ‘least common multiple’ of $a$ and $b$ is what it says it should be: a number $\ell$ that is a multiple of $a$ and a multiple of $b$, and such that every common multiple of $a$ and $b$ is a multiple of $\ell$.)

Of course this is again _not_ a fast way to compute gcds; the Euclidean algorithm (cf. Theorem 1.14) is much faster. In practice, finding the irreducible factorization of an integer is computationally expensive. The best algorithms known for factorizations would run on _quantum computers_, and practical quantum computers are not around yet (but that may change soon).

In any case, we can note the following simple consequence of these considerations.

_**Corollary $1.27$:** Two nonzero integers $a, b$ are relatively prime if and only if they have no common irreducible factor._

_Proof:_ 

Write,

$$
a = \pm 2^{\alpha_2} 3^{\alpha_3} 5^{\alpha_5} \cdots, \quad b = \pm 2^{\beta_2} 3^{\beta_3} 5^{\beta_5} \cdots
$$
as above.

By Proposition 1.25, $a$ and $b$ are relatively prime, that is, $\gcd(a, b) = 1$, precisely when $\min(\alpha_i, \beta_i) = 0$ for all $i$, that is, if and only if $\alpha_i = 0$ or $\beta_i = 0$ for all $i$. This means precisely that $a$ and $b$ have no common irreducible factor. $\blacksquare$

Prime numbers are still very mysterious. A few things can be said in general:

- There are infinitely many of them. Find out why as an exercise (Exercise $1.26$ to be precise); you will again be in the company of Euclid, who is credited with the first proof of this fact, and you will use the Fundamental Theorem in the process.

- If $\pi(n)$ denotes the number of positive primes less than or equal to $n$ (so $\pi(1) = 0, \pi(2) = 1, \pi(3) = 2, \pi(4) = 2, \pi(5) = 3$, etc.), then as $n \to \infty$, $\pi(n)$ grows at the same rate as $n / \ln n$. More precisely, $\lim_{n \to \infty} \frac{\pi(n)}{n / \ln n} = 1$. This is the so-called **Prime Number Theorem.** _Do not try this as an exercise, it is too hard._

- The **Riemann hypothesis** is one of the most important open problems in mathematics, and it amounts to a sophisticated conjecture on the distribution of primes.

#### Selected Exercises

_The exercises marked $\triangleright$ are particularly important for later developments._

##### Ex 1-1

_Find an example illustrating why the hypothesis that $a \neq 0$ is necessary in the statement of Lemma $1.2$._

_Proof:_

The lemma states that if $b \mid a$ and $a \neq 0$, then $|b| \leq |a|$. If $b \mid a$, then $a = bc \mid c \in \Z$. If $a = 0$, $0 = b \cdot 0$ holds trivially for all $b$. But $|b| \leq 0$ is only possible if $b = 0$ and our inequality won't hold for other values of $b$. Hence $a \neq 0$.

##### $\triangleright$ Ex 1-2

_Prove that divisibility is an order relation on the set $\Z^{\geq 0}$ of nonnegative integers. That is, prove that for all positive integers $a$, $b$, $c$:_

- $a \mid a$;
- if $a \mid b$ and $b \mid c$, then $a \mid c$;
- if $a \mid b$ and $b \mid a$, then $a = b$.

_Is this order relation a **total ordering**? Does it have a _maximum_? That is, is there an integer $m$ such that $\forall a \in \Z^{\geq 0}, \ a \mid m$?_

_Proof:_

If $a \mid a$, by definition, there must exist a $c$ such that $a = ac$, which results in $c = 1$. Thus $a \mid a$.
If $a \mid b$, $b = aq$, and if $b \mid c$, then $c = br$. Then, $c = aqr$ implies $c = a \cdot (qr)$ and we have $a \mid c$.
If $a \mid b$, then $|a| \leq |b|$, and similarly, $|b| \leq |a|$, thus $a = b$.

To check whether divisiblity conforms to total-ordering, we need to show that for any two nonnegative integers $a$ and $b$, one of $a \mid b$ or $b \mid a$ _must_ hold. Suppose $a$ and $b$ are prime, then $a \nmid b$, nor $b \nmid a$. Thus, we do not have total-ordering. $\blacksquare$

##### Ex 1-3

_Show that $\Z$ is not well-ordered by $\leq$._

_Proof:_

$\Z$ with the order relation $\leq$ is total-ordered. But it fails the second case, where every non-empty subset has a least element, because well-ordering principle only applies to $\Z^{\geq 0}$, that is, there are subsets which do not have a least element ($\inf S = \min S$) such as the set of all negative integers. Hence we cannot have well-ordering. $\blacksquare$

##### Ex 1-4

_Prove that for all $a \in \Z$, $\gcd{(a, 0)} = |a|$._

_Proof:_

If $a = 0$, then $\gcd{(0, 0)} = 0$. If $a \lt 0$, the divisors of the negative $a$ are the same as that of $|a|$, and divisibility with $|a|$ remains unaffected. So we consider $a \gt 0$. Since $0$ divides all integers, and $a \gt 0$, only divisors of $a$ account for the commonality. Since $a$ is its own greatest divisor, $\gcd{(a, 0)} = |a|$. $\blacksquare$   

##### Ex 1-5

_Prove that every odd integer is either of the form $4k + 1$ or of the form $4k + 3$ for some integer $k$._

_Proof:_

By definition, an integer may be represented as $a = bq + r$. Then in this case, $a = 4k + r$ where $0 \leq r \lt 4$. This means, $r$ can be only be one of $0$, $1$, $2$ or $3$. If $r = 0$, then $a = 4k$ for all $k$, and thus isn't odd. If $r = 2$, we similarly have $a = 4k + 2 = 2(2k + 1)$ and $a$ isn't odd. Then only $a = 4k + 1$ and $a = 4k + 3$ remain, where $(4k + 1) \mod 2 = 1$ and $(4k + 3) \mod 2 = 1$. Hence, $4k + 1$ or $4k + 3$ are the only way we can represent odd integers. And since integer division is unique, we cover all odd integers. $\blacksquare$

##### Ex 1-6

_Prove that the cube of an integer $a$ has to be exactly one of these forms: $9k$ or $9k + 1$ or $9k + 8$ for some integer $k$._

_Proof:_

We know by definition that if $a = 9k + r$, then $0 \leq r \lt 9$, this means, $r$ can only contain values ranging from $0$ to $8$. Now we need to show that when we cube $a$, $r$ can only be one of $0$, $1$ or $8$. We can check the cases, 

- $a^3 = (9k + 0)^3 \implies r = 0$
- $a^3 = (9k + 1)^3 \implies r = 1$
- $a^3 = (9k + 2)^3 \implies r = 8$

and so on, confirming that $r$ is only one of $0$, $1$, or $8$. Thus, every cube is of the form $9k$, $9k + 1$ or $9k + 8$. $\blacksquare$

##### Ex 1-7 

_Prove that there is no integer $a$ such that the last digit of $a^2$ is $2$._

_Proof:_

Since the square of any integer only depends on its last (or right-most) digit, we only need to check for cases from $0$ to $9$. Suppose we represent an integer $a = 10q + r$ where $r \leq 0 \lt 9$ by definition of integer division. Squaring both sides, we get $a^2 = (10q)^2 + 20qr + r^2$, which simplifies to $10(10q^2 +2qr) + r^2$, where the last digit is undoubtedly decided by $r^2$. A simple case by case evaluation confirms that for all $r$ in $[0, 9]$, $r^2 \neq 2$, and hence the last digit of $a^2$ for any integer $a$ can never be $2$. $\blacksquare$

##### $\triangleright$ Ex 1-8

_Let $n$ be a positive integer, and let $a$ and $b$ be integers. Prove that $a$ and $b$ have the same remainder when divided by $n$ if and only if $a − b = nk$ for some integer $k$._

_Proof:_

Dividing $a$ and $b$ by $n$, we have $a = np_a + r_a$ and $b = np_b + r_b$. We need to show that $(r_a = r_b) \iff (a - b = nk)$. We first show the direct implication. Subtracting $b$ from $a$ gives us $a - b = n(p_a - p_b) + r_a - r_b$. Since we have $r_a = r_b$, $r_a - r_b = 0$ and we have $a - b = n(p_a - p_b)$. We have shown that $a - b = nk$ where $k = (p_a - p_b)$. For the converse, if we have $a  - b = nk$, this means $n(p_a - p_b) + (r_a - r_b) = nk$ and $r_a - r_b$ must also be a multiple of $n$. Then, we have $r_a - r_b = cn$. Since both remainders must be less than $n$, their difference must be too, and the only way this equation holds is if $c = 0$, and we have $r_a = r_b$. $\blacksquare$

##### $\triangleright$ Ex 1-10

_Suppose $\gcd(a,b) = 1$. Prove that if $a \mid c$ and $b \mid c$, then $ab \mid c$._

_Proof:_

If $a \mid c$, we have $c = ak_a$ and similarly, $c = bk_b$. We need to show that $ab \mid c$. We know that $ma + nb = 1$. Multiplying by $c$ gets us $mac + nbc = c$, and $ma^2k_a + nb^2k_b = c$. We need to show that the two terms are divisible by $ab$. $ma^2k_a$ has a factor of $a$ and clearly is divisble by $a$. Also, $(b \mid c) \implies (b \mid a^2k_a) \implies (b \mid m \cdot a^2k_a)$, hence $ma^2k_a$ is divisble by $a \cdot b$, so is the second term by identical reasoning, hence $ab \mid c$. $\blacksquare$

##### Ex 1-11

_Prove that if $a \mid (b + c)$ and $\gcd(b,c) = 1$, then $\gcd(a,b) = 1$._

_Proof:_

We can prove this by contradiction. Suppose $\gcd(a, b) \neq 1$, then we must have some integer $d \gt 1$ such that $d \mid a$ and $d \mid b$, and we have $d \mid (b + c)$. But since $d \mid (b + c - b) \implies d \mid c$, and we have both $d \mid b$ and $d \mid c$, but this cannot be because we already know that $\gcd(b, c) = 1$, and $\gcd(a,b) \neq 1$ leads to a contradiction, hence $\gcd(a,b) = 1$. $\blacksquare$

##### Ex 1-12

_Prove that if $\gcd(a,c) = 1$ and $\gcd(b,c) = 1$, then $\gcd(ab,c) = 1$._

_Proof:_

If $\gcd(ab,c) \neq 1$, $ab$ and $c$ aren't coprime, and since we know by hypothesis and definition of gcd that $a$, $b$ and $c$ are not $0$, we must have a common divisor $d$ such that $d \mid ab$ and $d \mid c$, where $d \gt 1$. We need to show that $d \gt 1$ leads to a contradiction and that $d = 1$ is the only valid solution. Since $d \mid ab$, divisibility must spread atleast to one of $a$ or $b$ due to their common prime factors by the FTA. If $d \mid a$, then we'd have both $d \mid a$ and $d \mid c$ contradicting $\gcd(a, c) = 1$, and similarly $\gcd(b, c) = 1$. Hence $\gcd(ab, c) = 1$. $\blacksquare$

##### Ex 1-15

_Prove that if $c \mid ab$ and $\gcd(a,c) = d$, then $c \mid db$._

_Proof:_

If $\gcd(a, c) = d$, then $a = dq_a$ and $c = dq_c$. Then, $dq_c \mid dq_ab$. Since $\gcd(q_c, q_a) = 1$, $q_c \mid b$, and we must have $b = q_c k$. Multiplying both sides by $d$ yields $db = dq_ck = ck$ and we've shown that $c \mid db$. $\blacksquare$

##### $\triangleright$ Ex 1-17

_Prove that if $p$ is prime, and $p$ divides a product of integers $a_1, \cdots , a_s$, then $p$ divides one of the integers $a_i$. (this fact looks reasonable, but can you prove it ‘formally’? Try induction, or another use of the well-ordering principle.)_

_Proof:_

Let $F$ be a set of elements $s \in \Z^{\gt 0}$ such that none of the factors from the product $a_1 \cdots a_s$ are divisible by $p$ (but the product itself is). We will show that $F = \empty$ by contradiction. Suppose $F$ isn't empty, then by the well-ordering principle, there must exist a positive integer $s_{min}$ such that none of the terms from the product $a_1 \cdots a_{s_{min}}$ are divisible by $p$. 
Thus we have $[p \mid (a_1 \cdots a_{s_{min}})] \implies [p \mid (a_1 \cdots a_{s_{min} - 1}) \cdot a_{s_{min}}]$. This means, $p$ must divide atleast one of $a_{s_{min}}$ or $(a_1 \cdots a_{s_{min} - 1})$. If $p \mid a_{s_{min}}$, we already have a contradiction because by construction of $F$ we know that $p$ does not divide any of the terms from $a_1$ to $a_{s_{min}}$. If $p$ then divides $a_1 \cdots a_{s_{min} - 1}$, then $s_{min} - 1$ would be part of $F$, again leading to a contradiction because $s_{min}$ is the minimum element in $F$. Thus $F$ must be empty and $p$ must divide one of $a_1 \cdots a_s$. $\blacksquare$   

##### $\triangleright$ Ex 1-21

_Let_

$$n = 2^{\nu_{2}} 3^{\nu_{3}} 5^{\nu_{5}} 7^{\nu_{7}} \dots$$
$$c = 2^{\gamma_{2}} 3^{\gamma_{3}} 5^{\gamma_{5}} 7^{\gamma_{7}} \dots$$
_be positive integers. Prove that $c \mid n$ if and only if $\gamma_i \leq \nu_i$ for all $i$._

_Proof:_

We know that $c \mid n$, then $n = ck$ for some $k \in \Z^{\gt 0}$. Since $n$ and $c$ are positive integers, $k$ cannot introduce any negative exponents, and the only way this holds is if $\gamma_i \leq \nu_i$, and the forward implication holds. For the converse, we know that $\gamma_i \leq \nu_i$, and we need to show that $c \mid n$. If $c \mid n$ then we must have some positive $k$ such that $n = ck$. And since $\gamma_i \leq \nu_i$, we can construct $k = 2^{\nu_2 -\gamma_2}3^{\nu_3 -\gamma_3} \cdots$  and our proposition holds. $\blacksquare$

### Modular Arithmetic 

#### Equivalence Relations and Quotients

Now that we have a clearer picture on how $\Z$ is put together, we can examine other structures which share many features with it, and that in fact are derived from it. These will also be examples of _rings_; they will help us decide which properties we want to abstract into the official definition of a _ring_.

These new examples will be constructed by endowing with operations (which will still be denoted with $+$ and $\cdot$, as in the case of the integers) sets obtained as 'quotients of $\Z$ by certain equivalence relations'.

**_Reminder on equivalence relations:_** The notions of 'equivalence relation' and 'partition' are worth reviewing. 

- A relation $\sim$ on a set $A$ is an 'equivalence' relation if it is _reflexive_, _symmetric_, and _transitive_. These properties generalize properties that hold for the $=$ relation; equality maybe viewed as _the_ prototypical (albeit trivial) example of an equivalence relation.

- If we have an equivalence relation $\sim$ on a set $A$, then we can construct a new set, often denoted by $A/{\sim}$: this set is called the 'partition determined by $\sim$ on $A$, or the 'quotient' of $A$ 'modulo' $\sim$. The elements of the set $A/{\sim}$ are the 'equivalence classes' determined by $\sim$. The equivalence class of $a \in A$ is the set $\left[a\right]_{\sim}$ consisting of all elements of $A$ which are in relation with $a$: that is,

$$[a]_{\sim} = \{b \in A \mid a \sim b\}$$

One verifies that the equivalence classes are disjoint subsets of $A$ whose union is the whole of $A$.

- The function $\pi : A \to (A/{\sim})$ defined by setting $\pi(a) = [a]_{\sim}$ is surjective, and $\pi(a) = \pi(b) \iff a \sim b$.

- This last property completely describes the quotient $A/{\sim}$, in the sense that if we have a surjective function $f: A \to B$ such that $f(a) = f(b) \iff a \sim b$, then there automatically is a one-to-one correspondence between $A/{\sim}$ and $B$. In fact, in this case there is an 'induced function' $\tilde{f}: (A/{\sim}) \to B$, defined by setting $\tilde{f}([a]_{\sim}) = f(a)$, which turns out to be injective and surjective.

#### Congruence mod $n$

Many different equivalence relations may be defined on $\mathbb{Z}$. Here are the ones we want to study more carefully. In the following definition, $n\mathbb{Z}$ denotes the set of multiples of $n$:

$$
n\mathbb{Z} := \{ nk \;|\; k \in \mathbb{Z} \} = \{\dots, -2n, -n, 0, n, 2n, \dots\}
$$
**_Definition $2.1$_:** _Let $n \geq 0$ be an integer, and let $a, b \in \Z$. We say that '$a$ is congruent to $b$ modulo $n$', denoted $a \equiv b \pmod{n}$ if $b - a \in n\Z$._

In other words, two integers $a$ and $b$ are congruent modulo $n$ if $n$ divides the difference $b - a$. In symbols:

$$
a \equiv b \pmod{n} \iff n \;|\; (b - a)
$$
**_Remark $2.2$_:** We could define congruence modulo negative integers as well; but the relations corresponding to $n$ and $-n$ coincide, because $n\Z = (-n)\Z$, so we may as well take $n \geq 0$. Also note that 'congruence modulo $0$' is simply the relation $=$. Indeed, $0\Z = \{0\}$ so the requirement that $b - a \in 0\Z$ simply means that $a = b$.

It is an easy exercise to verify that, for $n$ positive, $n \;|\; (b - a)$ if and only if $a$ and $b$ have the same remainder after division by $n$: this fact makes it particularly easy to verify that the relation introduced in Definition $2.1$ is an _equivalence relation_. Suppose $a \equiv b \pmod{n}$; then by definition there exists an integer $k$ such that $b - a = nk$. Suppose $b \equiv c \pmod{n}$; then by definition there exists an integer $\ell$ such that $c - b = n\ell$. But then,

$$
c - a = (c - b) + (b - a) = nk + n\ell = n(k + \ell)
$$
and this shows that $c - a \in n\Z$, proving that $a \equiv c \pmod{n}$.

Now that we have one equivalence relation in $\Z$ for every $n \geq 0$, we can consider the corresponding equivalence classes. For any nonnegative integer $n$ and any integer $a$, we denote by $[a]_n$ the equivalence class of $a$ with respect to the relation of congruence modulo $n$. Explicitly:

$$
\begin{align*}
[a]_n &= \{b \in \Z \mid a \equiv b \pmod{n}\} = \{b \in \Z \mid n \text{ divides } (b - a)\} \\ \\[0.1pt]
&= \{b = a + nk \mid k \in \Z\}
\end{align*}
$$

We call $[a]_n$ the 'congruence class' of $a$ mod $n$, and we say that $a$ is a 'representative' of $[a]_n$. An alternative notation for the same set is $a + n\Z$, which is a shorthand for the last description of $[a]_n$ given above.

From the general facts about equivalence relations and partitions recalled in §$2.1$, we know that two equivalence classes $[a]_n$, $[b]_n$ for a fixed $n$ are either the same or disjoint. In fact, we know that

$$
[a]_n = [b]_n \iff a \equiv b \pmod{n}
$$

so whatever information is carried by the congruence relation, it is also packaged in its equivalence classes (that is, in the congruence classes). We do not need to do any work to verify this, since it is something that is true for every equivalence relation.

Congruence classes for a fixed $n$ form a _partition_ of $\Z$; that is, in each case we have a selection of subsets of $\Z$ with the property that every element of $\Z$ appears in exactly one subset. The numbers $-4$ and $5$ are not congruent mod $2$, and indeed they are in different congruence classes. These equalities are _really_ equalities: $[-4]_3$ and $[2]_3$ are quite simply the same subset of $\Z$; this subset just happens to have several different names.

Now that we have an equivalence relation on a set, we can consider the corresponding partition as a set in its own right. Its elements are the equivalence classes — in our case, the subsets $[a]_n$ of $\Z$. This is a powerful idea: we consider a whole subset of $\Z$ as a single element of a new set.

**_Definition $2.5$_:** _For any integer $n \geq 0$ we denote by $\Z/n\Z$ the set of congruence classes mod $n$ in $\Z$. This set is called the 'quotient of $\Z$ modulo $n\Z$', or simply '$\Z$ mod $n$'._

Other popular notations are $\Z/\equiv_n$, $\Z/(n)$, $\Z/n$, or $\Z_n$; this latter is used particularly frequently, and that is a pity because this notation means something else in a different context ($\Z_p$ is the set of '$p$-adic numbers', which are something else entirely). We will just use the notation $\Z/n\Z$.

Summarizing, the elements of $\Z/n\Z$ are of the form $[a]_n$, for some integer $a$. Please get used to the fact that $[a]_n$ is _not_ itself an integer. That is, we must resist the temptation to think of $\Z/n\Z$ as a subset of $\Z$. The sets $\Z$ and $\Z/n\Z$ are closely related, but not the same. We will come back to this (Ex $4.19$).

Each _element_ of $\Z/n\Z$ may be viewed as a subset of $\Z$; but the _set_ $\Z/n\Z$ of such elements should not be viewed as a subset of $\Z$. The element $[2]_3$ of the set $\Z/3\Z$ is not a fancy new name for the number $2$: indeed, the number $2$ is not the same as the number $5$, and yet $[2]_3$ and $[5]_3$ really _are_ the same element of $\Z/3\Z$, because they are the same subset of $\Z$.

Thinking of an entity such as $[5]_3$ both as a subset of $\Z$ and as an element of the set $\Z/3\Z$ requires a certain amount of mathematical sophistication; we should have gotten used to this strange idea in our first encounter with equivalence relations. In any case, we now have a brand new set $\Z/n\Z$ for every nonnegative integer $n$, and we want to study it.

The first question we can ask is 'how big' $\Z/n\Z$ is. For example, we saw in Ex $2.3$ and $2.4$ that $\Z/2\Z$ consists of _two_ elements, which we could denote by $[0]_2$ and $[1]_2$, and that $\Z/3\Z$ consists of _three_ elements, which we could denote by $[0]_3$, $[1]_3$, and $[2]_3$ (or also by $[-6]_3$, $[7]_3$, and $[5]_3$ if we felt like it: this is the same list). Let's summarize in a statement something that should be clear at this point. Recall from §$1.2$ that $\Z$ is endowed with a _division with remainder_: if $n > 0$, we can divide any integer $a$ by $n$, with a remainder $r$ such that $0 \leq r < n$.

**_Lemma $2.6$_:** _Let $n$ be a positive integer._

- _Let $a \in \Z$, and let $r$ be the remainder after division of $a$ by $n$. Then $[a]_n = [r]_n$._  
- _The classes $[0]_n, [1]_n, \dots, [n - 1]_n$ are all distinct._

_Proof_:

First point: If $a = nq + r$, then $a - r = nq \in n\Z$, therefore $a \equiv r \pmod{n}$, and this implies $[a]_n = [r]_n$ by definition of congruence classes.

Second point: Let's verify that if $0 \leq r_1 < n$ and $0 \leq r_2 < n$, and $[r_1]_n = [r_2]_n$, then $r_1 = r_2$: this is a spelled-out version of the statement. If $0 \leq r_1 < n$ and $0 \leq r_2 < n$, then $0 \leq |r_2 - r_1| < n$. If now $[r_1]_n = [r_2]_n$, then $n \mid (r_2 - r_1)$.

If $|r_2 - r_1| \neq 0$, this implies $n \leq |r_2 - r_1| < n$, a contradiction. (using the helpful Lemma $1.2$ again.) This contradiction shows that necessarily $|r_2 - r_1| = 0$, that is, $r_1 = r_2$ as needed. $\blacksquare$

The following statement is then an immediate consequence.

**_Theorem $2.7$_:** _For all positive integers $n$, the set $\Z/n\Z$ consists of exactly $n$ elements:_

$$
[0]_n, [1]_n, \dots, [n - 1]_n.
$$

_Proof_:  

By the first point in the lemma every class agrees with one of these, and by the second point these elements of $\Z/n\Z$ are all different from each other. $\blacksquare$

 The choice $[0]_n, [1]_n, \dots, [n - 1]_n$, while reasonable looking, is only one of infinitely many viable choices. We can label the elements of $\Z/5\Z$ by $[160]_5$, $[-324]_5$, $[175]_5$, $[48]_5$, and $[-4329349871]_5$ if we feel like it; despite appearances, this is _precisely_ the same list as the more conventional-looking $[0]_5, [1]_5, [2]_5, [3]_5$, and $[4]_5$. The conventional choice has the psychological advantage of being memorable, but that is all there is to it.

As an extreme example, there is _only one_ element in $\Z/1\Z$, which we could denote $[a]_1$ for any integer $a$ whatsoever. There is absolutely no way to distinguish $[0]_1$ from $[1]_1$ (or $[-23493851298371298319238983459485945874349857943857397498]_1$).

**_Remark $2.8$_:** If $n = 0$, we can still make sense of the quotient, i.e., of $\Z/0\Z$. In this case the congruence relation is just equality (Remark $2.2$), so the equivalence class $[a]_0$ of an integer $a$ consists of the single element $a$: $[a]_0 = \{a\}$. Therefore, the set $\Z/0\Z$ is just a copy of $\Z$ itself. In this sense $\Z$ may be viewed as one of the structures $\Z/n\Z$, that is, the special case $n = 0$. For $n \neq 0$, the set $\Z/n\Z$ is _finite_, as we proved in Theorem $2.7$.

#### Algebra in $\Z/n\Z$

This is a text on _algebra_, so we should try to do some algebra on the new sets $\Z/n\Z$. We can do this by virtue of simple compatibilities of the congruence relation with respect to the ordinary operations $+$, $\cdot$ in $\Z$.

The first question we can ask is 'how big' $\Z/n\Z$ is. For example, we saw in Ex $2.3$ and $2.4$ that $\Z/2\Z$ consists of _two_ elements, which we could denote by $[0]_2$ and $[1]_2$, and that $\Z/3\Z$ consists of _three_ elements, which we could denote by $[0]_3$, $[1]_3$, and $[2]_3$ (or also by $[-6]_3$, $[7]_3$, and $[5]_3$ if we felt like it: this is the same list). Let's summarize in a statement something that should be clear at this point. Recall from §$1.2$ that $\Z$ is endowed with a _division with remainder_: if $n > 0$, we can divide any integer $a$ by $n$, with a remainder $r$ such that $0 \leq r < n$.

**_Lemma $2.9$_:** _Let $n \geq 0$ be an integer, and let $a, a', b, b'$ be integers._

- _(i) If $a \equiv a' \pmod{n}$ and $b \equiv b' \pmod{n}$,_  

$$a + b \equiv a' + b' \pmod{n}$$

- _(ii)_  

$$a \cdot b \equiv a' \cdot b' \pmod{n}$$

_Proof_:

Since $a \equiv a' \pmod{n}$ and $b \equiv b' \pmod{n}$, there exist integers $k$ and $\ell$ such that

$$
a' - a = nk, \quad b' - b = n\ell.
$$

Then

$$
(a' + b') - (a + b) = a' - a + b' - b = nk + n\ell = n(k + \ell).
$$

This shows that $n \mid (a' + b') - (a + b)$, that is, $a + b \equiv a' + b' \pmod{n}$, and proves (i).

With the same notation,

$$
a'b' - ab = (a + nk)(b + n\ell) - ab = ab + na\ell + nkb + n^2k\ell - ab
$$

$$
= n(a\ell + bk + nk\ell)
$$

showing that $n \mid a'b' - ab$, that is, $a \cdot b \equiv a' \cdot b' \pmod{n}$, giving (ii). $\blacksquare$

Armed with Lemma $2.9$, we can make two important definitions: we define a notion of 'addition' and of 'multiplication' on the set $\Z/n\Z$, for every $n$.

**_Definition $2.10$_:** _Let $n \geq 0$ be an integer, and let $[a]_n$, $[b]_n$ be elements of $\Z/n\Z$. We define_

$$
\begin{align*}
[a]_n + [b]_n &:= [a + b]_n, \\ \\[0.1pt]
[a]_n \cdot [b]_n &:= [a \cdot b]_n.
\end{align*}
$$

_(Note: The symbols $+$, $\cdot$ on the right-hand side are the familiar addition and multiplication in $\Z$; the symbols $+$, $\cdot$ on the left-hand side are the new operations we are defining in $\Z/n\Z$.)_

This may look perfectly reasonable, but there is an important subtlety, which is worth noticing. Take $n = 2$ to deal with a small example. Then according $2.10$ we have (for instance)

$$
[0]_2 + [1]_2 = [1]_2.
$$

The elements $[0]_2$, $[1]_2$ are the two subsets in the partition determined by the congruence relation mod $2$: as we saw in Ex $2.3$,

$$
\begin{align*}
[0]_2 &= \{\dots, -6, -4, -2, 0, 2, 4, 6, \dots\} = \{0 + 2k \mid k \in \Z\}, \\ \\[0.1pt]
[1]_2 &= \{\dots, -5, -3, -1, 1, 3, 5, 7, \dots\} = \{1 + 2k \mid k \in \Z\}.
\end{align*}
$$

Whether we decide to call the first class $[0]_1$ or $[-2]_1$ cannot affect the result of an operation depending on this class: the operation should depend on the _class_ itself, not on our mood of the moment on how we decide to call the class. In other words, a viable definition should not depend on the representatives one chooses in order to apply it.

Now we see in what sense Definition $2.10$ is subtle. We claim that the problem just detected with the equivalence relation does _not_ affect Definition $2.10$: the proposed operations $+$, $\cdot$ in $\Z/n\Z$ are 'well-defined'. Our definition relies on the operations being well-defined.

Is this obvious? Nearly so, but only because we wisely took care of some preparatory work in Lemma $2.9$. we'll formalize the statement as follows.

**_Claim $2.12$_:** _The operations defined in Definition $2.10$ do not depend on the choice of the representatives. That is: if $n \geq 0$ is an integer, and $[a]_n = [a']_n$, $[b]_n = [b']_n$, then_

- _(i)_ $[a]_n + [b]_n = [a' + b']_n,$

- _(ii)_ $[a]_n \cdot [b]_n = [a' \cdot b']_n.$

_Proof_:  

This is no more and no less than a restatement of Lemma $2.9$. $\blacksquare$

The preceding discussion may look exceedingly long-winded, but the issue of whether a notion is 'well-defined' is very important. It is easy to become a little sloppy on this point, which can lead very quickly to nonsensical statements. What we hopefully understand now is that the relations of 'congruence mod $n$' are very special, because they are compatible with the ordinary operations among integers in such a way that they allow us to define analogous operations among the corresponding congruence classes. As we have seen, one should not expect this from an arbitrarily chosen equivalence relation. 

The issue of whether a notion is ‘well-defined’ is very important. It is easy to become a little sloppy on this point, which can lead very quickly to nonsensical statements. What we hopefully under stand now is that the relations of ‘congruence mod n’ are very special, because they are compatible with the ordinary operations among integers in such a way that they allow us to define analogous operations among the corresponding congruence classes. As we have seen, one should not expect this from an arbitrarily chosen equivalence relation. This is the reason why we focus on the particular equivalence relations introduced in Definition $2.1$.

#### Properties of the Operations $+$, $\cdot$ on $\Z/n\Z$

Let's see where we stand. In Chapter $1$ we looked rather carefully at the 'structure' consisting of $\Z$ along with the ordinary operations $+$ and $\cdot$. In §$2.2$ we defined new structures $\Z/n\Z$, one for every nonnegative integer $n$, and in §$2.3$ we endowed these structures with operations $+$ and $\cdot$. By the way, we refer to these algebraic objects by still calling them $\Z$, $\Z/n\Z$, but we really intend these sets _along with_ the natural operations $+$, $\cdot$ we have defined. If we need to emphasize the operations, we may use the notation $(\Z/n\Z, +, \cdot)$.

We have observed that $\Z/0\Z$ is 'a copy of $\Z$' (Remark $2.8$), so we concentrate on $\Z/n\Z$ for $n > 0$. These gadgets are all different, and all different from $\Z$. The set of integers $\Z$ is infinite, while we have seen that the set $\Z/n\Z$ consists of exactly $n$ elements (which we may denote $[0]_n, \dots, [n - 1]_n$; this is part of the content of Theorem $2.7$).

It's worth reiterating that $a$ really is $[a]_4$. For example, the entry in the rightmost column of the last line of the second table is $1$, signifying that '$3 \cdot 3 = 1$'. We are  to interpret this as

$$
[3]_4 \cdot [3]_4 = [1]_4
$$

which of course is true: $3 \cdot 3 = 9$, therefore $[3]_4 \cdot [3]_4 = [9]_4 = [1]_4$ by our definition of product of congruence classes (Definition $2.10$).

It is important to note that there are properties of the operations in these different sets which seem qualitatively different. For example: we know that, in $\Z$,

$$
ab = 0 \implies a = 0 \text{ or } b = 0.
$$

This property is also true in, for example, $\Z/3\Z$, if we think of $[0]_3$ as $0$. Indeed, we could list all products $ab$ where $a \neq 0$ and $b \neq 0$:

$$
[1]_3 \cdot [1]_3 = [1]_3, \quad [1]_3 \cdot [2]_3 = [2]_3, \quad [2]_3 \cdot [1]_3 = [2]_3, \quad [2]_3 \cdot [2]_3 = [1]_3.
$$

and it just does not happen that $[0]_3$ ever appears as the product of two nonzero elements. So from the point of view of this property, $\Z$ and $\Z/3\Z$ are similar. We say, to anticipate a definition we will officially introduce soon (Definition $3.23$), that $\Z$ and $\Z/3\Z$ are both 'integral domains'. But this property is _not_ true in all $\Z/n\Z$: for example,

$$
[2]_4 \cdot [2]_4 = [4]_4 = [0]_4.
$$

even though $[2]_4 \neq [0]_4$. In terms of the tables drawn above, we're just observing that there is a $0$ in the middle of the second table, away from the first row and the first column. Is this a rare phenomenon? Not really: for example, $[2]_6 \cdot [3]_6 = [6]_6 = [0]_6$, $[3]_{12} \cdot [4]_{12} = [0]_{12}$, etc. We can say that $\Z/4\Z$, $\Z/6\Z$, $\Z/12\Z$ are not 'integral domains'. It is very easy to find plenty more examples of this kind. By the end of the section, we will understand very thoroughly what is going on.

On the other hand, there are a bunch of properties of these operations which do hold for $\Z$ and for all $\Z/n\Z$. First of all, $a + b \in \Z$ and $a \cdot b \in \Z$ for all $a, b \in \Z$ (that is, $\Z$ is 'closed' with respect to these operations); then

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
and further

$$
\forall a, b \quad a \cdot b = b \cdot a.
$$
In the third property, the element $a'$ is what we usually call $-a$. Many of the properties listed in $(2.3)$ have names: for example, the first one is called 'associativity' (of addition), the second is the 'existence of an additive identity', and so on. We will come back to these properties soon, in the appropriately general context (§$3.1$). For now let's consider the following,

**_Theorem $2.13$_:** _For every positive integer $n$, all of these properties hold for $\Z/n\Z$ with $0 = [0]_n$ and $1 = [1]_n$._

**_Remark $2.14$_:** In view of this, we will often write $0$ for $[0]_n$ and $1$ for $[1]_n$. This is potentially confusing, because the two $0$ in '$0 = [0]_n$' mean different things: the first is an element of the set we now call $0$ in $\Z/n\Z$; the second is the integer $0$.

With the terminology we will introduce in §$3.1$, Theorem $2.13$ simply tells us that $\Z/n\Z$ is a 'ring', and in fact a 'commutative ring'. This theorem proves itself! Definition $2.10$ prescribes that $[a]_n + [b]_n$ and $[a]_n \cdot [b]_n$ are elements of $\Z/n\Z$, so 'closure' is trivially satisfied. Every single other item in the list can be easily reduced to the corresponding property in $\Z$. For example, if we want to prove the 'distributivity' law in $\Z/n\Z$,

$$
\forall a, b, c \in \Z/n\Z \quad a \cdot (b + c) = a \cdot b + a \cdot c,
$$

we can argue as follows. For all $a, b, c \in \Z/n\Z$, there are integers $k, \ell, m \in \Z$ such that

$$
a = [k]_n, \quad b = [\ell]_n, \quad c = [m]_n.
$$

Then using Definition $2.10$ we have

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
where the equality $\overset{!}{=}$ holds because the same 'distributivity' law holds in $\Z$. Every property in the list can be proved to hold in $\Z/n\Z$ by precisely the same method. The long list given above (without the last, lone item) will be our starting point to define _rings_. The last item is separated from the rest because it is an additional property ('commutativity of multiplication') which is not part of the definition of ring. When it holds, we say that the ring is _commutative_. Therefore, $\Z$ and all $\Z/n\Z$ are 'commutative rings'. Incidentally, you know other examples: the sets $\mathbb{Q}$, $\R$, and $\mathbb{C}$ (denoting respectively the sets of _rational_, _real_, and _complex_ numbers, along with the ordinary operations $+$ and $\cdot$) all satisfy the properties of 'commutative rings'.

We will see that many other properties can be deduced from the ones listed in $(2.3)$, and all such properties will hold for all rings. For the moment we will stay with $\Z/n\Z$, and examine how some features of the integer $n$ get magically encoded in properties of the ring $\Z/n\Z$.

I have already pointed out that one property that holds in $\Z$, that is, the implication

$$
ab = 0 \implies a = 0 \text{ or } b = 0,
$$

holds in $\Z/n\Z$ for some, but not all, $n$. For example, $[2]_{10} \cdot [5]_{10} = [10]_{10} = [0]_{10}$, even though $[2]_{10} \neq [0]_{10}$ and $[5]_{10} \neq [0]_{10}$.

On the other hand, there are 'nice' properties that hold for some $\Z/n\Z$ and do not hold for $\Z$. You should have noticed that the properties listed in $(2.3)$ include the existence of an 'additive inverse':

$$
\forall a \; \exists a' \quad a + a' = a' + a = 0.
$$

For example, the additive inverse of $2$ is $-2$, since $2 + (-2) = (-2) + 2 = 0$. You may also have noticed that I _did not_ list a property prescribing the existence of 'multiplicative inverses', which would look like this:

$$
\forall a \; \exists a' \quad a \cdot a' = a' \cdot a = 1. \tag{2.4}
$$
It is natural to require $a$ to not equal zero, since '$1/0$' does not exist in any reasonable context. However, even with this natural requirement, $(2.4)$ is simply not true in $\Z$: for example, $2 \neq 0$ and yet there is no integer $n$ such that $2n = 1$. By contrast, $(2.4)$ is verified if you allow 'fractions': if $\frac{p}{q}$ is a rational number (that is, $p, q$ are integers, and $q \neq 0$), then the rational number $\frac{q}{p}$ is its multiplicative inverse: $\frac{p}{q} \cdot \frac{q}{p} = 1$. So $\Z$ does _not_ have a multiplicative inverse in $\Z$, but it does in $\mathbb{Q}$ (that is, $\frac{1}{2}$). More generally, $(2.4)$ is satisfied for $\mathbb{Q}$, but it is not for $\Z$.

What about $\Z/n\Z$? It is easy to check whether $(2.4)$ holds by examining a multiplication table: this property just says that every row of the table, with the exception of the row corresponding to $0$, must contain a $1$. (Why?) For example, $(2.4)$ does _not_ hold in $\Z/4\Z$: look back at the multiplication table, and note that there is no $1$ in the row corresponding to $2$.

For conciseness, when a structure satisfying the properties listed in $(2.3)$, including the commutativity of multiplication, also satisfies $(2.4)$, we say that structure is a '_field_'. (We will give a more official definition in §$3.3$.) Thus, $\Z$ and $\Z/4\Z$ are not fields, while $\Z/5\Z$ is a field; and the reader can verify that $\mathbb{Q}$, $\mathbb{R}$, and $\mathbb{C}$ are also fields.

It would seem that $\Z/n\Z$ satisfies $(2.4)$ for some values of $n$, and not for others. Is this just a random fact defying any sensible explanation, or is there a method to this madness? If you want to gain some personal intuition for what is going on, put away these notes and construct the multiplication tables for $\Z/n\Z$ for several positive integers $n$, say $n = 2, \dots, 10$. List the numbers $n$ for which $(2.4)$ is satisfied, and see if you can detect a pattern.

**_Theorem $2.15$_:** _Let $n > 1$. Then the following assertions are equivalent:_

- _(i) The integer $n$ is prime._

- _(ii) In $\Z/n\Z$, property $(2.2)$ is satisfied: $\forall a, b$ $ab = 0 \implies a = 0$ or $b = 0$._

- _(iii) In $\Z/n\Z$, property $(2.4)$ is satisfied: if $a \neq 0$, then $a$ has a multiplicative inverse._

_Proof_:

We are going to argue that $(i) \implies (iii) \implies (ii) \implies (i)$.

**$(i) \implies (iii)$:**  
Assume that $n > 1$ is a prime (hence irreducible) integer, and let $a \in \Z/p\Z$, $a \neq 0$. We have to prove that $a$ has a multiplicative inverse in $\Z/p\Z$.

Let $\ell \in \Z$ be a representative for $a$: i.e. $[a]_p = [\ell]_p$. Since $a \neq 0$, we have $[\ell]_p \neq [0]_p$, that is, $p \nmid \ell$. By Lemma $1.18$, this implies that $\gcd(p, \ell) = 1$; therefore, by Theorem $1.8$, there exist integers $q$ and $k$ such that

$$
1 = q p + k \ell.
$$

Now 'read this identity modulo $p$': if $1 = q p + k \ell$, then $[1]_p = [q p + k \ell]_p$ and Definition $2.10$ gives

$$
[1]_p = [q p]_p + [k \ell]_p = [k]_p \cdot [\ell]_p,
$$

since $[q p]_p = [0]_p$, as $p q$ is a multiple of $p$. Letting $a' = [k]_p$, we have that $a' \cdot a = 1$ in $\Z/p\Z$ and $a a' = 1$ follows by commutativity. Therefore $a$ does have a multiplicative inverse, as we had to verify.

**$(iii) \implies (ii)$:**  
Assume that every nonzero $a \in \Z/n\Z$ has a multiplicative inverse. We have to verify that if $a b = 0$ in $\Z/n\Z$, then $a = 0$ or $b = 0$. If $a = 0$, then there is nothing to prove. If $a \neq 0$, then $a$ has a multiplicative inverse $a'$, by assumption. But then

$$
b = 1 \cdot b = (a' \cdot a) \cdot b = a' \cdot (a \cdot b) = a' \cdot 0 = 0
$$
as needed.

**$(ii) \implies (i)$:**  
Now we are assuming that $a b = 0 \implies a = 0$ or $b = 0$, for all $a, b \in \Z/n\Z$, and we have to prove that $n$ is prime. We use the very definition of prime integer, Definition $1.19$: we will assume that $n$ divides a product $k m$, and show that $n$ must divide $k$ or $m$. This is straightforward if we consider the elements $a = [k]_n$ and $b = [m]_n$, determined by $k$ and $m$ in $\Z/n\Z$. Indeed,

$$
a b = [k]_n[m]_n = [k m]_n = [0]_n = 0,
$$
since $n$ divides $k m$. By our assumption, we have that $a = 0$ or $b = 0$, that is,

$$
[k]_n = 0 \text{ or } [m]_n = 0,
$$
and this says precisely that $n$ divides $k$ or $n$ divides $m$. $\blacksquare$

Using the fancy terminology mentioned earlier, with which we will deal more extensively in Chapter $3$, Theorem $2.15$ says that $n > 1$ is prime if and only if $\Z/n\Z$ is an **integral domain**, and if only if $\Z/n\Z$ is a **field**.

**_Proposition $2.16$_:** _Let $n > 1$ be an integer. Then a class $[k]_n$ has a multiplicative inverse in $\Z/n\Z$ if and only if $\gcd(n, k) = 1$._

_Proof_:  

If $\gcd(n, k) = 1$, then there exist integers $q$ and $k$ such that $q n + k \ell = 1$. It follows that

$$
[k]_n[k]_m = [k]_n = [1 - q n]_n = [1]_n.
$$
Since multiplication is commutative in $\Z/n\Z$, this also implies $[k]_n[k]_n = [1]_n$, and the conclusion is that $[k]_n$ is a multiplicative inverse of $[k]_n$.

Conversely, if $[k]_n$ has a multiplicative inverse in $\Z/n\Z$, then $\gcd(n, k) = 1$. Indeed, let $[k]_n$ be an inverse to $[k]_n$, so that $[k]_n[k]_n = [1]_n$; then there is a $q$ such that $1 - k q = n$, so that $1 = q n + k \ell$. This shows that $1$ is a linear combination of $n$ and $k$, and it follows that $\gcd(n, k) = 1$ by Corollary $1.9$. $\blacksquare$

**_Remark $2.17$_:** A convenient consequence of the fact that $\Z/p\Z$ is an integral domain when $p$ is prime is that a 'multiplicative cancellation' law holds: if $a \neq 0$ in $\Z/p\Z$, then,

$$
a b = a c \implies b = c.
$$
Indeed, if $a b = a c$, then $a(b - c) = 0$, and if $p$ is prime it follows that $b - c = 0$ by part $(ii)$ of the theorem. This cancellation does _not_ hold in general. For example, $[2]_6 \cdot [2]_6 = [4]_6 = [2]_6 \cdot [5]_6$, and yet $[2]_6 \neq [5]_6$.

The proof of Theorem $2.15$ is rather straightforward, but quite interesting nevertheless. Notice that the proof of _"(iii) $\implies$ (ii)"_ did not really use modular arithmetic (that is, considerations having specifically to do with $\Z/n\Z$); it looks like a formal manipulation that only relies on some of the basic properties listed in $(2.3)$. And indeed, the same argument will work in a substantially more general setting. There are two cases that are not contemplated in Theorem $2.15$: $n = 0$ and $n = 1$. For $n = 0$, we know from Remark $2.8$ that $\Z/0\Z$ is a 'copy' of $\Z$: under this identification, the operations on $\Z/0\Z$ are clearly the same as those in $\Z$. We know that $(2.2)$ holds in $\Z$, and $(2.4)$ does not; in other words, $\Z$ is an integral domain but it is not a field. In this case, the equivalence 'field $\iff$ prime' in Theorem $2.15$ does not hold.

Looking carefully at the proof of the theorem, we will realize that this has to do with the fact that $0$ is a prime integer by definition. If $p = 1$, things get more subtle. As noted in §$2.7$, $\Z/1\Z$ consists of a single element, $[0]_1$. In particular, $[0]_1 = [1]_1$; in other words, $\Z/1\Z$ cannot have property $(2.4)$, since the multiplicative inverse is stated. As a result, this case should not be considered in an integral domain or a field. These hypotheses about $n$ being prime will be part of the more general theory of these types of structures, as we will see in §$3.3$.

#### Fermat's Little Theorem, and the RSA Encryption System

The lesson we learn from Theorem $2.15$ is that rather sophisticated features of a number $n$ are reflected in algebraic properties of the structure $(\Z/n\Z, +, \cdot)$ that we have been exploring. The following pretty statement should be seen as a manifestation of the same motive. We adopt the usual 'power' notation: so, $[a]_n^e$ stands for the product of $[a]_n$ by itself $e$ times, which according to Definition $2.10$ must equal $[a^e]_n$.

**_Theorem $2.18$ (Fermat's Little Theorem)_**: _Let $a, p$ be integers, with $p$ positive and prime. Then $[a]_p^p = [a]_p$._

In other words, if $p$ is prime, then $a^p \equiv a \pmod p$. This is simply not (necessarily) the case if $p$ is not prime: for example, $2^4 = 16$ is not congruent to $2$ modulo $4$. But it is true for primes, as Theorem $2.18$ states and as we will prove below. The result looks quite impressive in any given example with largish numbers. For instance, take $a = 100$, $p = 13$: (then by the theorem) no computation is needed to conclude that

$$
10000000000000000000000000000 \equiv 100 \pmod{13};
$$

and discover that, indeed

$$
10000000000000000000000000000 - 100 = 7692307692307692307692300 \cdot 13,
$$

confirming that the left-hand side is a multiple of $13$. Fermat's little theorem is often stated in the following equivalent formulation.

**_Theorem $2.19$_:** _Let $a, p$ be integers, with $p$ positive and prime, and assume that $p \nmid a$. Then $a^{p-1} \equiv 1 \pmod p$._

This is essentially the way Fermat himself stated it, in a letter to a friend in $1640$. Fermat included the statement of the theorem in his letter, but did not include the proof; allegedly, it was too long.

_Proof of Theorem $2.18$_:  

If $p \mid a$, then $[a]_p = [0]_p$, and the statement is that $[0]_p^p = [0]_p$. This is true. So we may assume that $p \nmid a$, and it is enough to prove that $[a]_p^{p - 1} = [1]_p$ in this case, since the stated formula follows then by multiplying both sides by $[a]_p$.

Assume then that $p \nmid a$, that is, $[a]_p \neq [0]_p$. The clever step consists of considering the $p - 1$ classes,

$$
[a]_p, \; [2a]_p, \; \dots, \; [(p - 2)a]_p, \; [(p - 1)a]_p.
$$
These are all _different_ from one another (we can say they are 'distinct'). Indeed, since $[a]_p \neq [0]_p$ and $p$ is prime,

$$
[\ell a]_p = [k a]_p \implies [\ell]_p = [k]_p,
$$
by cancellation (Remark $2.17$). By the contrapositive of this statement, $[\ell]_p \neq [k]_p$ implies $[\ell a]_p \neq [k a]_p$. By the second part of Lemma $2.6$ the classes $[1]_p, \dots, [p - 1]_p$ are all different as well, and so are the classes $[a]_p, \dots, [(p - 1)a]_p$.

But then (this is the cleverest part) the classes listed in $(2.5)$ must be _the same as the classes_ $[1]_p, \dots, [p - 1]_p$, _just in a different order_. (Work out Exercise $2.19$ to see this in action.) It follows that the products of the two sets of classes must be equal:

$$
[a]_p \cdot [2a]_p \cdot \dots \cdot [(p - 1)a]_p = [1]_p \cdot [2]_p \cdot \dots \cdot [p - 1]_p.
$$

Therefore,

$$
[1 \cdot 2 \cdot \dots \cdot (p - 1) \cdot a^{p - 1}]_p = [1 \cdot 2 \cdot \dots \cdot (p - 1)]_p,
$$

that is,

$$
[(p - 1)!]_p \cdot [a]_p^{p-1} = [(p - 1)!]_p.
$$

Finally, it suffices to observe that $[(p - 1)!]_p \neq [0]_p$ (since $p$ is prime and does not divide any of $1, \dots, p - 1$), so applying cancellation again gives,

$$
[a]_p^{p-1} = [1]_p
$$

as needed. $\blacksquare$

Fermat's little theorem is actually useful in practice, for applications to encryption and worth taking the time to explore.

If we are handed an integer $n$, and we find an integer $a$, which may be assumed to be in the range $1 < a < n$, such that $[a]_n^{n-1} \neq [1]_n$, then Theorem $2.18$ guarantees that $n$ is not prime, hence it is composite. Such an integer $a$ is said to 'witness' the fact that $n$ is composite. For example, $2$ is a witness of the fact that $4$ is composite, since $2^{4-1} = 8 \not\equiv 1 \pmod 4$. In this sense, this is remarkable: factoring large integers takes an unpractically long time, while the computation of $[a]_n^{n-1}$ is relatively fast. Fermat's test is explained below in §$2.8$.

Further, finding a witness is relatively easy: it can be shown that most composite numbers $n$ have at least (roughly) $n/2$ witnesses. Therefore, if $n$ is one of these composite numbers, and we test (for example) $10$ random integers between $1$ and $n$, then we are going to find a witness to $n$ with a probability of

$$
1 - \frac{1}{2^{10}} = 0.999\ldots
$$
Bottom line: it is not too computationally expensive to tell with a high degree of confidence whether a number is prime or composite.

These considerations lead to practical ways to produce large prime integers. We can generate a random integer with, say, $500$ digits, and then use refinements of these methods to essentially determine whether this integer is prime; if it is not, we throw it away and generate another random integer, and keep going until we get one that is prime. As a consequence of the Prime Number Theorem (also briefly mentioned at the end of §$1.4$) it can be shown that the probability of finding a prime less than $n$ is $1 / \ln n$, so several hundred tries at most will be enough to find a $500$-digit prime. With current technology, doing all this takes a fraction of a second.

Why do we want to construct large primes? This is a basic ingredient in the 'RSA encryption' system, which is commonplace as a way to encode information transmitted through the Internet. Our laptop is likely using it when we do your online banking, for example. RSA stands for 'Rivest, Shamir, and Adleman', who came up with it back in the $1970$s. It should not strike one as a clever use of sophisticated and modern mathematical tools; but as a clever use of _extremely elementary, ancient mathematics_. Indeed, at this point we have already covered enough material in these notes to understand how it works, and we do not even really know yet what a _ring_ is! (Of course, the fact that it only uses elementary mathematics makes RSA all the more impressive.)

RSA is a 'public key' encryption system, which means that everybody can encode a message: the 'key' to encode a message is published and available to whomever cares; so is the encoded message. Nevertheless, _decoding_ the message can in practice only be done by someone who has some extra information. Thus, our laptop can send your bank a key that allows the bank to encode some sensitive information and send it back; someone can intercept the key and the encoded message, but will not be able (with current technology) to use this information to recover the message.

How does this work? Above we gave a rough explanation of how one can produce large prime integers. To show you how this can be implemented, we will use produce two largish primes, using the method explained above:

$$
p = 818428743210989683024895225263, \quad q = 644677944074338849892311039879.
$$

and we multiply them:

$$
n = p q = 527622959544605838546815712346082387453782597046540869959877.
$$
This takes no time at all. And yet, no one knows how to go equally fast from $n$ to the individual $p$ and $q$: _this_ is why this system works so well, as we will see. There is no harm in 'publishing' $n$; $p$ and $q$ will remain secret. Next, I note that the number

$$
k = (p - 1)(q - 1)
$$

happens to equal

$$
k = 527622959544605838546815712346461928076649726851362366367436
$$

and by using the Euclidean algorithm it is easy to verify that $\gcd(e, k) = 1$ if

$$
e = 23847938479384928749387.
$$

I again chose this number randomly: I just typed very fast a bunch of random digits. This is the 'encryption exponent', and it will be used to encode messages.^4 We can publish the two integers

$$
n = 527622959544605838546815712346082387453782597046540869959877
$$

$$
e = 23847938479384928749387.
$$

Now your bank, or anyone else in fact, can send you information securely. It suffices to write this information as one or more integers $a$, $1 \leq a < n$. Each $a$ will be encoded by computing $[a]_n^e$, which is again something that can be done quickly. For example, if my Very Secret message to you is

$$
a = 1010101010101010101010101010101010,
$$

then I will send

$$
b = 16360537946748886409026352514770724213613815940906125836470312,
$$

since (my computer assures me) $[a]_n^e = [b]_n$. To this day, no one has found an efficient way to recover $a$ from $b$, given only the knowledge of $n$ and $e$. So $b$ can be transmitted in the open, and it does not matter if someone intercepts it.

So you receive $b$. How do _you_ recover my message? As we have seen in Proposition $2.16$, since $\gcd(e, k) = 1$, then $e$ has a multiplicative inverse modulo $k$. Chasing the Euclidean algorithm reveals that this inverse is

$$
d = 72444918945559643533015877809753152910803207582951588533695.
$$

(Go ahead and verify that $[d]_k \cdot [e]_k = [1]_k$ if you don't trust me.) Since you know $d$ (the 'decryption' exponent), it is a very easy matter for _you_ to recover the message: lo and behold,

$$
[b]_n^d = [1010101010101010101010101010101010]_n,
$$

as my computer confirms in a fraction of a second.

This should look amazing, but of course it is no coincidence, and we have all the tools needed to understand how it works.

---

**_Theorem 2.19 (RSA algorithm)_**: _Let $p \neq q$ be positive prime integers, and let:_

- $n = p q$
- $k = (p - 1)(q - 1)$
- $e$ be an integer that is relatively prime to $k$
- $d$ be an integer such that $d e \equiv 1 \pmod k$
- $a$ be an integer

_Then_

$$
a \equiv b^d \pmod n.
$$

_Proof_:

Note that $b^d \equiv a^{d e} \pmod n$; so we have to prove that $a^{d e} \equiv a \pmod n$. First, I note that it suffices to prove that,

$$
a^{d e} \equiv a \pmod p \text{ and } a^{d e} \equiv a \pmod q.
$$

Indeed, if this is the case, then,

$$
p \mid (a^{d e} - a) \quad\text{and}\quad q \mid (a^{d e} - a),
$$

and this implies that $n \mid (a^{d e} - a)$ since $p$ and $q$ are relatively prime. Focus on the prime $p$. If $p \mid a$, then both $a$ and $a^{d e}$ are $0 \pmod p$, and in particular,

$$
a^{d e} \equiv a \pmod p.
$$

Therefore we may assume that $p \nmid a$.

Since $d e \equiv 1 \pmod k$, $k$ divides $d e - 1$. Therefore there is a positive integer $\ell$ such that,

$$
d e = 1 + k \ell.
$$

Then,

$$
a^{d e} = a^{1 + k \ell} = a \cdot a^{k \ell} = a \cdot a^{(p-1)(q-1)\ell}.
$$

By Fermat's little theorem, $a^{p-1} \equiv 1 \pmod p$, since $p$ is prime and $p \nmid a$. Therefore,

$$
a^{d e} = a \cdot (a^{p-1})^{(q-1)\ell} \equiv a \cdot 1^{(q-1)\ell} = a \pmod p,
$$

as needed. The proof for $q$ is of course entirely similar, and we are done. $\blacksquare$

No practical methods to factor a large integer (on a classical, as opposed to quantum, computer) are known, and this question has received a lot of attention. There is a possibility that some fiendishly clever method exists to factor an integer quickly. If such a method were discovered, the security of communications over the internet would be compromised.

#### Selected Exercises

##### Ex 2-3

_Prove that if $q \geq 5$ and $q$ is irreducible, then $[q]_6 = [1]_6$ or $[q]_6 = [5]_6$._

_Proof_:

If $q$ is irreducible, $\gcd(q, 6) = 1$ and we have $q = 6k + r$ where $0 \leq r \lt 6$. Also, $r$ cannot be $0$, $2$, $3$ or $6$ because then $q$ is composite. Then it must be that either $r = 1$ or $r = 5$, and $q$ must be in either of these two classes, and $[q]_6 = [1]_6$ or $[q]_6 = [5]_6$. $\blacksquare$

##### $\triangleright$ Ex 2-4

_Find a proof or a counterexample of the following statement: If $[a]_n \neq [0]_n$, and $[a]_n [b]_n = [a]_n [c]_n$, then $[b]_n = [c]_n$._

_Proof_:

Clean counterexamples hold when $n$ is composite. This means $\Z/n\Z$ is not an integral domain nor a field. $\blacksquare$

##### Ex 2-6

_Assume that $[a]_n = [1]_n$. Prove that $\gcd(a, n) = 1$. Find an example showing that the converse is not true._

_Proof_:

If $[a]_n = [1]_n$, then $a \equiv 1 \pmod{n}$, and $a + (-k)n = 1$. By Corollary $1.9$, $\gcd(a, n) = 1$. For the converse, assume $\gcd(a, n) = 1$ , , and suppose for contradiction that $a \equiv 1 \pmod{n}$ must always hold. We only need to consider $n \gt 2$. Euler's Totient Function $\phi(n)$ counts distinct elements coprime to $n$, and for all $a$ to be congruent to $1$ would necessitate $\Z/n\Z$ having only a single equivalence class, which is a contradiction, and our assumption that $[a]_n = [1]_n$ for all $a$ must be false. $\blacksquare$ 

##### $\triangleright$ Ex 2-8

_Find the last digit of $7^{1000000}$._

_Proof_:

We know that any nonnegative integer modulo $10$ reveals the last digit of that integer by the definition of integer division. Also, $7$ has order $4$ in $\Z/10\Z$, that is, its powers cycle every $4$ steps; $7^{4k} \equiv 1 \pmod{n}$ for all $k$. Since $1000000 \equiv 0 \pmod{4}$, it follows that the last digit must be $1$. $\blacksquare$

##### $\triangleright$ Ex 2-9

_Find a congruence class $[a]_7$ in $\Z/7\Z$ such that every class $[b]_7$ except $[0]_7$ equals a power of $[a]_7$._

_Proof_:

A simple case by case evaluation shows that $a = 3$ is a generator for $\Z/7\Z$. $\blacksquare$

##### Ex 2-10

_Let $n \gt 0$ be an odd integer that may be written as the sum of two perfect squares. Prove that $[n]_4=[1]_4$._

_Proof_:

Let $x^2$ and $y^2$ be perfect squares such that $x^2 + y^2 = n$ where $n$ is odd. If $x$ is even, then $x^2 \equiv 0 \pmod{4}$, and if $x$ is odd, then $x^2 \equiv 1 \pmod{4}$. Since $n$ is odd, the only valid options are $[0]_4 + [1]_4 = [1]_4$ and $[1]_4 + [0]_4 = [1]_4$, therefore $[n]_4 = [1]_4$. $\blacksquare$

##### $\triangleright$ Ex 2-11

_Prove that for all $a \in \Z/n\Z$, $a \cdot 0=0$ (where $0$ stands for $[0]_n$)._

_Proof:_

Since $a \in \Z/n\Z$, we can represent its equivalence class as $[a]_n$. Then, by the definition of modular arithmetic operations, $[a]_n \cdot [0]_n = [a \cdot 0]_n = [0]_n \equiv 0 \pmod{n}$. $\blacksquare$

##### Ex 2-15

_Let $p \gt 0$ be a prime integer. Prove that the equation $x^2 + x = 0$ has exactly two solutions in $\Z/p\Z$, and find those solutions._

_Proof_:

Since $\Z/p\Z$ is prime, we have no zero divisors, then $x(x + 1) = 0 \implies x = 0 \ \text{or} \ (x + 1) = 0 \implies x = -1$. $\blacksquare$

##### $\triangleright$ Ex 2-18

_Prove that the two formulations of Fermat’s little theorem are equivalent._

_Proof_:

Fermat's Little Theorem says $a^{p - 1} \equiv 1 \pmod{p}$ where $p$ is prime. Also, $\Z/p\Z$ being a field means we can multiply both sides by $a$ and we have the restatement,$a^{p - 1} \cdot a \equiv 1 \cdot a \pmod{p} \implies a^{p - 1 + 1} \equiv a \pmod{p} \implies a^p \equiv a \pmod{p}$. $\blacksquare$ 

##### $\triangleright$ Ex 2-19  

_(i)_ Compute the classes $[1 \cdot 3]_{11}$, $[2 \cdot 3]_{11}$, $[3 \cdot 3]_{11}, \dots, [10 \cdot 3]_{11}$ and confirm that these are the classes $[1]_{11}, \dots, [10]_{11}$, in a different order. (A generalization of this fact is used in the proof of Theorem 2.18.)  

_Proof_:

We're multiplying each equivalence class by $3$ in $\Z/11\Z$, and we have,

$[3]_{11}, [6]_{11}, [9]_{11}, [1]_{11}, [4]_{11}, [7]_{11}, [10]_{11}, [2]_{11}, [5]_{11}, [8]_{11}$,

which gives us the original classes simply in a different order. $\blacksquare$

_(ii)_ Compute the classes $[1 \cdot 3]_{12}$, $[2 \cdot 3]_{12}$, $[3 \cdot 3]_{12}, \dots, [11 \cdot 3]_{12}$ and observe that these **do not** equal the classes $[1]_{12}, \dots, [11]_{12}$, in any order.

_Proof_:

By a similar case-by-case evaluation to (i), we can prove the validity of the proposition. This is because $12$ is composite.  $\blacksquare$

##### $\triangleright$ Ex 2-20

_Let $n$, $a$, $b_1$,..., $b_r$ be integers, with $n \gt 1$ and $1 \lt a \lt n$, $1 \lt b_i \lt n$. Assume that $a$ is a witness to the fact that $n$ is composite (that is, $a^{n - 1} \not\equiv 1 \pmod{n}$) and that $\gcd(a, n) = 1$._

_(i) Prove that if $b_i$ is **not** a witness, then $ab_i$ **is** a witness._

_Proof_:

Since $a$ is a witness, we have $a \cdot x \equiv 0 \pmod{n}$ for some non-zero $x \in \Z$. Multiplying by $b_i$, $axb_i \equiv 0 \pmod{n} \implies a(x b_i) \equiv 0 \pmod{n}$. We know that $b_i$ is not a witness, then the expression holds only if $x \equiv 0 \pmod{n}$. Since $b_i x \neq 0$, $a b_i \equiv 0 \pmod{n}$ where $ab_i$ witnesses the compositeness of $n$. $\blacksquare$

_(ii) Prove that if $[b_i]_n, \cdots, [b_r]_n$ are all different, then so are $[ab_1]_n, \cdots, [ab_r]_n$._

_Proof_:

Suppose the two distinct products collide modulo $n$, that is, there exist two integral indices $i \neq j$ such that $ab_i \equiv ab_j \pmod{n}$. Since $\gcd(a, n) = 1$ guarantees the invertibility of $a$ modulo $n$, we can multiply by $a^{-1}$ and get $(a \cdot a^{-1}) b_i \equiv (a \cdot a^{-1}) b_j \pmod{n} \implies b_i \equiv b_j \pmod{n}$, but this leads to a contradiction since $b_i$ and $b_j$ were supposed to be distinct, hence $ab_i \not\equiv ab_j \pmod{n}$. $\blacksquare$

_(iii) Deduce that in this case $n$ has fewer than $n/2$ non-witnesses._

_Proof_:

Suppose there are $k$ elements such that $b_1, \cdots, b_k$ that are not witnesses. By (ii), we know that multiplication by $a$ preserves distinctness, meaning $ab_1, \cdots, ab_k$ are also distinct and we have atleast $k$ witnesses. Also, $\Z/n\Z$ has $n - 1$ non-zero elements. Then, $k + k \leq n - 1 \implies k \leq (n - 1)/2 \implies k \lt n/2$, and we have fewer than $n/2$ non-witnesses. $\blacksquare$









