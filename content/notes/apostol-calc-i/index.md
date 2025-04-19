---
title: "Calculus: I"
description: "My notes on Tom Apostol's calculus book."
date: 2023-08-01
status: studying
subjects: ["Mathematics"] 
categories: ["Academic Textbook"]
tags: ["Calculus", "Apostol", "Math", "Integration", "Differentiation", "Linear Spaces", "Derivative", "Integral", "Partial", "Vector", "Linear", "Space"]
bookAuthor: "Tom Apostol"
---

## Introduction

### Part 1: Historical Introduction

#### The Two Basic Concepts of Calculus

The remarkable progress that has been made in science and technology during the last century is due in large part to the development of mathematics. That branch of mathematics known as integral and differential calculus serves as a natural and powerful tool for tackling a variety of problems that arise in:

- _Physics_
- _Astronomy_
- _Engineering_
- _Chemistry_
- _Geology_
- _Biology_
- _Social Sciences_

Calculus is more than a technical tool, it is a collection of fascinating ideas that have interesting thinking human-beings for centuries. These ideas have to do with **speed**, **area**, **volume**, **rate of growth**, **continuity**, **tangent line**, and other myriad concepts. Another remarkable feature of the subject is its unifying power. Most of these ideas can be formulated so that they revolve around two rather specialized problems of a geometric nature. We proceed with a brief description of these problems.

Lets visualize the simpler case concerning the area of a rectangle,$$A = length \cdot width$$
What if we had some arbitrary n-dimensional construct we wished to compute the area or volume for? Consider a curve $C$ which lies above a horizontal base line.

We assume this curve has the property that every vertical line intersects it once at most. The shaded portion of the figure consists of those points which lie below the curve $C$, above the horizontal base, and between two parallel vertical segments joining $C$ to the base. The first fundamental problem of calculus is this, 

_To assign a number which measures the area of this shaded region._

Next, let's consider a line drawn tangent to the curve. The second fundamental problem may be stated as follows,

_To assign a number which measures the steepness of this line._

#### Historical Background

The birth of integral calculus occurred more than two millennia ago when the Greeks attempted to determine areas by a process which they called the **method of exhaustion**. The fundamental idea is simple and can be described as follows.

Given a region whose area is to be determined, we inscribe it in a polygonal region approximating the given region and whose area we can easily compute. Then we choose another polygonal region which provides a better approximation, and we continue the process, taking polygons with more and more sides in an attempt to exhaust the given region. It was used successfully by Archimedes ($287-212 \ \textrm{BCE}$) to find exact formulas for the area of a circle and a few other special figures.

The development of the method of exhaustion beyond the point to which Archimedes carried it had to wait nearly eighteen centuries, until the use of algebraic symbols and techniques became a standard part of mathematics. The elementary algebra that we are familiar with, was completely unknown in Archimedes' time, and it would be next to impossible to extend his method to any general class of regions in a compact manner.

A slow but revolutionary change began in the $16$th century $\mathrm{CE}$ . The cumbersome system of Roman numerals was gradually displaced by the Hindu-Arabic characters used today, the symbols $+$ and $-$ were introduced, and advantages of the decimal notation began to be recognized.

During this same period, the brilliant successes of the Italian mathematicians Tartaglia, Cardano, and Ferrari in finding algebraic solutions of cubic and quartic equations stimulated a great deal of mathematical activity and encouraged the use of the algebraic language and resulted in a revival of interest in the ancient method of exhaustion. A large number of fragmentary results were discovered in the late $16$th century by such pioneers as Cavalieri, Tricelli, Roberval, Fermat, Pascal, and Wallis.

Gradually, the method of exhaustion was transformed into the subject now called integral calculus, a powerful discipline with a large variety of applications, not only to geometrical problems concerned with areas and volumes but also to problems in other sciences. This branch of mathematics, which retained some of the original features of the method of exhaustion, recieved its biggest impetus in the $17$th century, largely due to the efforts of Isaac Newton ($1642-1727$) and Gottfried Leibniz ($1646-1716$), and its development continued well into the $19$th century before the subject was put on a firm mathematical basis by Augustin-Louis Cauchy ($1789-1857$) and Bernhard Riemann ($1826-1866$). Further refinements and extensions of the theory are still being carried out in contemporary mathematics.

#### The Method of Exhaustion for the Area of a Parabolic Segment

Before going about a systematic treatment of integral calculus, it is instructive to apply the method of exhaustion directly to one of the special figures treated by Archimedes himself. The region in question can be described as follows:

If we choose an arbitrary point on the base of this figure and denote its distance from $0$ by $x$, then the vertical distance from this point to the curve is $x^2$. In particular, if the length of the base itself is $b$, the altitude of the figure is $b^2$. The vertical distance from $x$ to the curve is called the "ordinate" at $x$. The curve itself is an example of what is known as a _parabola_. The region bounded by it and the two line segments is called a _parabolic segment_.

Examination of this figure suggests that the area of the parabolic segment is less than half the area of the rectangle. Archimedes made the surprising discovery that the area of the parabolic segment is exactly **one-third** that of the rectangle; that is to say, $A = b^3/3$, where $A$ denotes the area of the parabolic segment. 

It should be pointed out that the parabolic segment shown above is not exactly as Archimedes drew it and the details that follow are not exactly the same as those used by him. Nevertheless, the essential _ideas_ are those of Archimedes; but we present it in modern notation.

The method is simply this: We slice the figure into a number of strips and obtain two approximations to the region, one from below and one from above, by using two sets of rectangles. The area of a parabolic segment is larger than the total area of the inner rectangles but smaller than that of the outer rectangles.

If each strip is further subdivided to obtain a new approximation with a larger number of strips, the total area of the inner rectangles _increases_, whereas the total area of the outer rectangles _decreases_. Archimedes realized that an approximation to the area within any desired degree of accuracy could be obtained by simply taking enough strips.

Let's carry out the actual computations required in this case. For the sake of simplicity, we subdivide the base into $n$ _equal_ parts, each of length $b/n$. The points of subdivision correspond to the following values of $x$,
$$0, \frac{b}{n}, \frac{2b}{n},\cdots,\frac{(n - 1)b}{n}, \frac{nb}{n} = b$$
A typical point of subdivision corresponds to $x = kb/n$, where $k$ takes the successive values $k = 0, 1, 2, 3,..., n$. At each point $kb/n$ we construct the outer rectangle of altitude $(kb/n)^2$. The area of this rectangle is the product of its base and altitude,
$$\frac{b}{n} \left(\frac{kb}{n}\right)^2 = \frac{b^3}{n^3} k^2$$
Let's denote $S_n$ the sum of the areas of all the outer rectangles. Then since the $k$th rectangle has the area $(b^3/n^3) k^2$, we obtain the formula,
$$S_n = \frac{b^3}{n^3} \left[ 1^2 + 2^2 + 3^2 + \cdots + (n-1)^2\right]$$
In the same way, we obtain a formula for the sum $s_n$ of all the inner rectangles,
$$s_n = \frac{b^3}{n^3} \left[ 1^2 + 2^2 + 3^2 + \cdots + n^2\right]$$
This brings us to a very important stage in the calculation. Notice that the factor multiplying $b^3/n^3$ in is the sum of the squares of the first $n$ integers,
$$1^2 + 2^2 + 3^2 + \cdots + n^2$$
The corresponding factor is similar except that the sum has only $n - 1$ terms. For a large value of $n$, the computation of this sum by direct addition of its terms is tedious and inconvenient. Fortunately, there is an interesting identity that we can use to evaluate this sum in a simpler way, namely,
$$1^2 + 2^2 + \cdots + n^2 = \frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6}$$
This identity is valid for every integer $n \geq 1$ and can be proved as follows:

Starting with the formula: $(k + 1)^3 = k^3 + 3k^2 + 3k + 1$, we can rewrite it in the form,
$$3k^2 + 3k + 1 = (k+1)^3 - k^3$$
Taking $k = 1, 2, \cdots, n - 1$, we get $n - 1$ formulas,
$$3\cdot1^2 + 3\cdot1 + 1 = 2^3 - 1^3$$
$$3\cdot2^2 + 3\cdot2 + 1 = 3^3 - 2^3$$

$$\cdot$$

$$\cdot$$

$$3(n - 1)^2 + 3(n - 1) + 1 = n^3 - (n - 1)^3$$
When we add these formulas, all the terms on the right cancel except two and we obtain,
$$3[1^2 + 2^2 + \cdots + (n - 1)^2] + 3[1 + 2 + \cdots + (n - 1)] + (n - 1) = n^3 - 1^3$$
The second sum on the left is the sum of terms in an arithmetic progression and it simplifies to $\frac{1}{2}\cdot n(n - 1)$. Therefore this last equation gives us,
$$1^2 + 2^2 + \cdots + (n - 1)^2 = \frac{n^3}{3} - \frac{n^2}{2} + \frac{n}{6}$$
Adding $n^2$ to both members, we obtain the aforementioned identity.

For our purposes, we do not need the exact expressions given in the right-hand members. All we need are the two _inequalities_ which are valid for every integer $n \ge 1$.
$$1^2 + 2^2 + \cdots + (n - 1)^2 \lt \frac{n^3}{3} < 1^2 + 2^2 + 3^2 + \cdots + n^2$$
These inequalities can be deduced easily by consequences of the previous equations, or they can be proved directly by induction. If we multiply both inequalities by $b^3/n^3$ with those previous equations, we obtain,
$$s_n < \frac{b^3}{3} < S_n$$

for every $n$. The inequalities tell us that $b^3/3$ is a number which lies between $s_n$ and $S_n$ for every $n$. We will now prove that $b^3/3$ is the _only_ number which has this property. In other words, we assert that if $A$ is any number which satisfies the inequalities,

$$s_n < A < S_n$$
for every positive integer $n$, then $A = b^3/3$. It is because of this fact that Archimedes concluded that the area of the parabolic segment is $b^3/3$. To prove that $A = b^3/3$, we use the inequalities. Adding $n^2$ to both sides of the leftmost previous inequality, we obtain,
$$1^2 + 2^2 + \cdots + n^2 \lt \frac{n^3}{3} + n^2$$
Multiplying this by $b^3/n^3$ with the older identity, we find,
$$S_n < \frac{b^3}{3} + \frac{b^3}{n}$$
Similarly, by subtracting $n^2$ from both sides of the rightmost inequality and multiplying by $b^3/n^3$, we get,
$$\frac{b^3}{3} - \frac{b^3}{n} < s_n$$
Therefore, any number $A$ satisfying the inequality must, for every integer $n \ge 1$, also satisfy,
$$\frac{b^3}{3} - \frac{b^3}{n} < A < \frac{b^3}{3} + \frac{b^3}{n}$$
Now, there are only three possibilities:
$$A \gt \frac{b^3}{3}, \quad A \lt \frac{b^3}{3}, \quad A = \frac{b^3}{3}$$
If we show that each of the first two leads to a contradiction, then we must have $A = b^3/3$, since this exhausts all the possibilities. Suppose the inequality $A > b^3/3$ were true. From the second inequality, for every integer $n \ge 1$ we obtain,
$$A - \frac{b^3}{3} \lt \frac{b^3}{n}$$
Since $A - b^3/3$ is positive, we may divide both sides by $A - b^3/3$ and then multiply by $n$ to obtain the equivalent statement for every $n$,
$$n < \frac{b^3}{A - b^3/3}$$
But this inequality is obviously false when $n \ge b^3/(A - b^3/3)$. hence the inequality $A > b^3/3$ leads to a contradiction. By a similar argument, we can show that the inequality $A < b^3/3$ also leads to a contradiction, and therefore we must have $A = b^3/3$, as asserted.

#### Selected Exercises

##### Ex-1

_Apply Archimedes' method to the ordinate at each $x$ being $F$ instead of $x^2$ and demonstrate the principal steps leading to the calculation of the area, where $F$ is,_

* _$F = 2x^2$_

We can take the desired section of the curve and bound it within a rectangle with base-width $b$, and subdivide it into $n$ equal parts where the points of subdivision correspond to,
$$0, \ \dfrac{b}{n}, \ \dfrac{2b}{n}, \ \dfrac{3b}{n}, \ \cdots, \ \dfrac{(n-1)b}{n}, \ \dfrac{nb}{n} = b$$
where a typical point of subdivision is $kb/n$. At each point, we construct an outer rectangle with an altitude $2(kb/n)^2$ with its area being,

$$\dfrac{b}{n} \ \cdot \ 2\left(\dfrac{kb}{n}\right)^2 = 2k^2 \dfrac{b^3}{n^3}$$
Now, we concern ourselves with two sums. Let $S_n$ denote the sum of the outer rectangles and $s_n$ the inner ones,
$$S_n = 2\dfrac{b^3}{n^3}(1^2 + 2^2 + \cdots + n^2), \quad s_n = 2\dfrac{b^3}{n^3}[1^2 + 2^2 + \cdots + (n-1)^2$$
We know the identity,
$$1^2 + 2^2 + \cdots + n^2 = \dfrac{n^3}{3} + \dfrac{n^2}{2} + \dfrac{n}{6}$$
We don't need to re-prove it with the cubic, eliminating $n^2$ from both sides and some elementary manipulation yields,
$$1^2 + 2^2 + \cdots + (n - 1)^2 = \dfrac{n^3}{3} - \dfrac{n^2}{2} + \dfrac{n}{6}$$This means,
$$1^2 + 2^2 + \cdots + (n - 1)^2 < \dfrac{n^3}{3} < 1^2 + 2^2 + \cdots + n^2$$is valid for every integer $n \ge 1$. Multiplying both inequalities by $2b^3/n^3$ we obtain,
$$s_n < \dfrac{2b^3}{3} < S_n$$
for every $n$. This inequality tells us that $2b^3/3$ is a number that lies between $s_n$ and $S_n$ for every $n$. To prove that this is the only number with this property, we can assert that $A$ is this number. We proceed by adding $n^2$ to both sides of the leftmost inequality,
$$1^2 + 2^2 + \cdots + n^2 < \dfrac{n^3}{3} + n^2$$
Multiplying this by $2b^3/n^3$, and following a similar procedure for the rightmost inequality we obtain,
$$S_n < \dfrac{2b^3}{3} + \dfrac{2b^3}{n}, \quad \dfrac{2b^3}{3} - \dfrac{2b^3}{n} < s_n$$
Therefore any number satisfying $s_n < A < S_n$ must also satisfy,
$$\dfrac{2b^3}{3} - \dfrac{2b^3}{n} < A < \dfrac{2b^3}{3} + \dfrac{2b^3}{n}$$
for every $n \ge 1$, leaving only three possibilities,
$$A > \dfrac{2b^3}{3}, \quad A < \dfrac{2b^3}{3}, \quad A = \dfrac{2b^3}{3}$$
We can show that the $A = 2b^3/3$ case is true using proof by contradiction. Let's presume $A > 2b^3/3$.  This means,
$$A - \dfrac{2b^3}{3} < \dfrac{2b^3}{n}$$
This leads to a contradiction because the RHS approaches $0$ as $n \to \infty$. We can prove the same for the other case, and therefore must have$A = 2b^3/3$ as asserted.

##### Ex-2

a. _Now, the ordinate is at $x^3$ with the outer and the inner sums being_,

$$S_n = \dfrac{b^4}{n^4}(1^3 + 2^3 + \cdots + n^3), \quad s_n = \dfrac{b^4}{n^4}[1^3 + 2^3 + \cdots + (n - 1)^3]$$

_Use the inequalities (which can be proved by mathematical induction),_

$$1^3 + 2^3 + \cdots + (n - 1)^3 < \dfrac{n^4}{4} < 1^3 + 2^3 + \cdots + n^3$$

_to show that $s_n < b^4/4 < S_n$ for every $n$, and prove that $b^4/4$ is the _only_ number which lies between $s_n$ and $S_n$ for every $n$._

To show that $A = b^4/4$, we begin by adding and subtracting $n^3$ from both sides of the inequalities respectively which yields,
$$1^3 + 2^3 + \cdots + n^3 < \dfrac{n^4}{4} + n^3, \quad \dfrac{n^4}{4} - n^3 < 1^3 + 2^3 + \cdots + (n - 1)^3$$
Multiplying these inequalities by $b^4/n^4$ along with the definitions for $S_n$ and $s_n$ we get,

$$S_n < \dfrac{b^4}{4} + \dfrac{b^4}{n}, \quad \dfrac{b^4}{4} - \dfrac{b^4}{n} < s_n$$
Therefore any number $A$ must also satisfy,
$$\dfrac{b^4}{4} - \dfrac{b^4}{n} < A < \dfrac{b^4}{4} + \dfrac{b^4}{n}$$
for every $n \ge 1$, leaving us only three possibilities,
$$A < \dfrac{b^4}{4}, \quad A > \dfrac{b^4}{4}, \quad A = \dfrac{b^4}{4}$$
All that remains is to show that the first two cases lead to contradictions. Suppose $A < b^4/4$ were true,
$$A - \dfrac{b^4}{4} > -\dfrac{b^4}{n}$$
Rearranging,

$$n > \dfrac{b^4}{b^4/4 - A}$$
But this inequality is obviously false for all $n \le \dfrac{b^4}{b^4/4 - A}$, a similar argument for the other case leaves us with $A = b^4/4$ as asserted.

b. _What number takes the place of $b^4/4$ if the ordinate at each $x$ is at $ax^3 + c$?_

If the ordinate at each $x$ is $ax^3 + c$, that means, each of our rectangular strips span this area for all $n \ge 1$,

$$
\begin{aligned}
&= \dfrac{b}{n}\left[a\left(\dfrac{kb}{n}\right)^3 + c \right] \\ \\[0.1pt]
&= \dfrac{b}{n}\left[a\left(\dfrac{b}{n}\right)^3 k^3 + c \right] \\ \\[0.1pt]
\end{aligned}
$$
This gives us $S_n$ and $s_n$, simplifying one at a time,

$$
\begin{align*}
S_n &= \sum_{k = 1}^{n} \left[\dfrac{b}{n}\left[a\left(\dfrac{b}{n}\right)^3 k^3 + c \right]\right] \\ \\[0.1pt]
&= \dfrac{ab^4}{n^4}\sum_{k = 1}^{n} k^3 + bc \\ \\[0.1pt]
\end{align*}
$$
And similarly, 
$$s_n = \dfrac{ab^4}{n^4}\sum_{k = 1}^{n - 1} k^3 + bc$$
We know this inequality, 

$$\sum_{k = 1}^{n - 1} k^3 < \dfrac{n^4}{4} < \sum_{k = 1}^{n} k^3$$
Multiplying by $ab^4/n^4$ and adding $bc$, 

$$
\begin{align*}
&= \dfrac{ab^4}{n^4}\sum_{k = 1}^{n - 1} k^3 + bc < \dfrac{ab^4}{4} + bc < \dfrac{ab^4}{n^4} \sum_{k = 1}^{n} k^3 + bc \\ \\[0.1pt]
&= s_n < \dfrac{ab^4}{4} + bc < S_n
\end{align*}
$$
We've already shown how we can assert $ab^4/4 + bc$ to be the area of the region ($A$) under the curve, and therefore,
$$A = \dfrac{ab^4}{4} + bc$$
replaces $b^4/4$ when the ordinate at each $x$ is at $ax^3 + c$.

##### Ex-3

_The inequalities I.5 and I.12 are special cases of the more general inequalities,_
$$1^k + 2^k + \cdots + (n - 1)^k < \dfrac{n^{k + 1}}{k + 1} < 1^k + 2^k + \cdots + n^k$$
_that are valid for every integer $n \ge 1$ and $k \ge 1$. Assume the validity of I.13 and generalize the results of Ex-2._

To generalize these inequalities to arbitrary powers, we begin by first computing the area of the rectangle strip we use to approximate the lower and upper sums,
$$\dfrac{b}{n}\left(\dfrac{kb}{n}\right)^p$$
where $p$ represents the arbitrary power we raise to,and our over/under estimations for all $n, \ p \ge 1$ are,
$$s_n = \left(\dfrac{b}{n}\right)^{p + 1} \ \sum_{k = 1}^{n - 1} k^p, \quad S_n = \left(\dfrac{b}{n}\right)^{p + 1} \ \sum_{k = 1}^{n} k^p$$We assume the general inequalities,
$$1^p + 2^p + \cdots + (n - 1)^p \lt \dfrac{n^{p + 1}}{p + 1} \lt 1^p + 2^p + \cdots + n^p$$
Multiplying both sides by $(b/n)^{p + 1}$, we get,
$$s_n < \dfrac{b^{p + 1}}{p + 1} < S_n$$
Generalizing to ordinates of the form $ax^p + c$,
$$\forall a, c \in \Z_{\ge 0}, \ \forall b, p \in \Z_{\ge 1}: A = \dfrac{ab^{p + 1}}{p + 1} + bc$$
#### A Critical Analysis of Archimedes' Method

From these types of calculations, Archimedes concludes that the area of the parabolic segment in question must be $b^3/3$. This fact was generally accepted as a mathematical theorem for nearly $2000$ years before it was realized that one must re-examine the result from a more critical point of view. To understand why anyone would queastion the validity of Archimedes' conclusion, it is necessary to delve into important changes in the recent history of mathematics.

Every branch of knowledge is a collection of ideas described by means of words and symbols, and one cannot understand these ideas unless one knows the exact meanings of the words and symbols used. Certain branches of knowledge, known as _deductive systems_ are different from others in that a number of "undefined" concepts are chosen in advance and all other concepts in the system are defined in terms of these so called _axioms_ or _postulates_. Statements that can then be deduced from these axioms are called _theorems_. The most familiar example of such a system is the Euclidean theory of elementary geometry. Kurt Gödel also teaches us in his _incompleteness theorems_ that we cannot prove the consistency of these axioms within the system itself alongside syntactical incompleteness of any logical/axoimatic systems.

A new and vigorous phase in the development of mathematics began with the advent of algebra (contrasted by geometry pervading mathematical practicalities at the time) in the $16$th century, and the next $300$ years witnessed a flood of important discoveries. As these new discoveries began to recede, a new and more critical period emerged. Mathematicians felt forced to return to the classical ideals of the deductive method in an attempt to put the new mathematics on a firm foundation. This phase of development, which began in the early $19$th century and has continued to the present day, has resulted in a degree of logical purity and abstraction that has surpassed all traditions of Greek science. At the same time, it has brought about a clearer understanding of the foundations of not only calcuus but all of mathematics. 

There are many ways to develop calculus as a deductive system. One possible approach is to take the real numbers as the undefined objects. Some of the rules governing them may be taken as axioms, proceeded by theorems, similar to the Euclidean approach.

Looked at as part of the deductive system of calculus, Archimedes' result about the area of a parabolic segment cannot be accepted as a theorem until a satisfactory definition of area is given first. It is not clear whether Archimedes had ever formulated a precise definition of what he meant by area. He seems to have taken it for granted that every region has an area associated with it. On this assumption he then set out to calculate areas of particular regions. In his calculations he made use of certain facts about area that cannot be proved until we know what is meant by area. For instance, he assumed that if one region lies inside another, the area of the smaller region cannot exceedthat of the larger region. Also, if a region is decomposed into two or more parts,the sum of the areas of the individual parts is equal to the area of the whole region. All these are propertieswe would like area to possess, and we shall insist that any definition of area should imply these properties. It is quite possible that Archimedes himself may have taken area to be an undefined concept and then used the properties we just mentioned as axioms about area.

Today we consider the work of Archimedes as being important not so much because it helps us to compute areas of particular figures, but rather because it suggests a reasonable way to define the concept of area for more or less arbitrary figures. As it turns out, the method of Archimedes suggests a way to define a much more general concept known as the integral. The integral, in turn, is used to compute not only area but also quantities such as arc length, volume, work and others. The area of the parabolic segment may then be stated in the terminology of integral calculus as follows:

$$
    \int_0^b x^2 \, dx = \frac{b^3}{3}
$$
A thorough and complete treatment of either integral or differential calculus depends ultimately on a careful study of the real number system. This study in itself, when carried out in full, is an interesting but somewhat lengthy program that requires a small volume for its complete exposition. Instead, we begin with the real numbers ($\mathbb{R}$) as undefined objects and list a number of fundamental properties of $\mathbb{R}$ which we shall take as axioms. These axioms and someof the simplest theorems that can be deduced from them are discussed in Part 3 of this chapter.

To develop calculus as a complete, formal mathematical theory, it would be necessary to state, in addition to the axioms for the real number system, a list of the various "methods of proof" which would be permitted for the purpose of deducing theorems from the axioms. Every statement in the theory would then have to be justified either as an "established law" (that is, an axiom, a definition, or a previously proved theorem) or as the result of applying one of the acceptable methods of proof to an established law. Fortunately, it is not necessary to proceed in this fashion in order to get a good working knowledge of calculus.

### Part 2: Some Basic Concepts of the Theory of Sets

#### Introduction to Set Theory

In mathematics, the word "set" is used to represent a collection of objects viewed as a single entity. The collections called to mind by such nouns as "flock", "tribe", "crowd" "team", and "electorate" are all examples of sets. The individual objects in the collection are called elements or members of the set, and they are said to belong to or to be contained in the set. The set, in turn, is said to contain or be composed of its elements. 

We shall be interested primarily in sets of mathematical objects: sets of numbers, sets of curves, sets of geometric figures, and so on. In many applications it is convenient to deal with sets in which nothing special is assumed about the nature of the individual objects in the collection. These are called abstract sets. Abstract set theory has been developed to deal with such collections of arbitrary objects, and from this generality the theory derives its power.

The first basic concept that relates one set to another is equality of sets:

_DEFINITION OF SET EQUALITY_: _Two sets A and B are said to be equal (or identical) if they consist of exactly the same elements, in which case we write A = B. If one of the sets contains an element not in the other, we say the sets are unequal and we write $A \neq B$._

#### Subsets

From a given set $S$ we may form new sets, called subsets of $S$. For example, the set consisting of those positive integers less than $10$ which are divisible by $4$ (the set ${4, 8}$) is a subset of the set of all even integers less than $10$. In general, we have the following definition.

DEFINITION OF A SUBSET: _A set $A$ is said to be a subset of a set $B$, and we write_

$$A \subseteq B$$
_whenever every element of A also belongs to B. We also say that A is contained in B or that B contains A. The relation $\subseteq$ is referred to as set inclusion._

The statement $A \subseteq B$ does not rule out the possibility that $B \subseteq A$. In fact, we may have both $A \subseteq B$ and $B \subseteq A$, but this happens only if $A$ and $B$ have the same elements. In other words,

$$A = B \quad \textit{if and only if} \quad A \subseteq B \ \& \ B \subseteq A$$
This theorem is an immediate consequence of the foregoing definitions of equality and inclusion. If $A \subseteq B$ but $A \neq B$, $A$ is a proper subset of $B$; we indicate this by writing $A \subset B$.

In all our applications of set theory, we have a fixed set $S$ given in advance, and we are concerned only with subsets of this given set. The underlying set $S$ may vary from one application to another; it will be referred to as the _universal set_ of each particular discourse. 

The notation: $$\{x \ | \ x \in S  \ \ \text{and} \ \ x \ \text{satisfies} \ P \}$$
will designate the set of all elements $x$ in $S$ which satisfy the property $P$. When the universal set to which we are referring is understood, we omit the reference to $S$ and write simply $\{x \ | \ x \ \text{satisfies} \ P\}$. This is read "the set of all $x$ such that $x$ satisfies $P$." Sets designated in this way are said to be described by a defining property. For example, the set of all positive real numbers could be designated as $\{x \ | \ x \ > \ 0 \}$; the universal set $S$ in this case is understood to be the set of all real numbers. Similarly, the set of all even positive integers ${2,4, 6, \dots}$ can be designated as $\{x \ | \ \text{x is a positive even integer} \}$. Ofcourse,the letter _$x$_ is a dummy and may be replaced by any other convenient symbol. Thus, we may write

$$\{x \ | \ x \gt 0 \} \ = \ \{y \ | \ y \gt 0 \} \ = \ \{t \ | \ t \gt 0 \}$$
and so on. It is possible for a set to contain no elements whatever. This set is called the empty set or the void set, and will be denoted by the symbol $\varnothing$. We will consider $0$ to be a subset of every set. Some people find it helpful to think of a set as analogous to a container (such as a bag or a box) containing certain objects, its elements. The empty set is then analogous to an empty container.

To avoid logical difficulties, we must distinguish between the element $x$ and the set ${x}$ whose only element is $x$. (A box with a hat in it is conceptually distinct from the hat itself.) In particular, the empty set $\varnothing$ is not the same as the set $\{\varnothing\}$. In fact, the empty set $\varnothing$ contains no elements, whereas the set $\{\varnothing\}$ has one element, $\varnothing$. (A box which contains an empty box is not empty.) Sets consisting of exactly one element are sometimes called _one-element sets_. Diagrams often help us visualize relations between sets.

#### Unions, Intersections, Complements

From two given sets $A$ and $B$, we can form a new set called _union_ of $A$ and $B$. This new set is denoted by the symbol
$$A \ \cup \ B$$and is defined as the set of those elements which are in $A$, $B$ or both.

Similarly, the _intersection_ of $A$ and $B$, denoted by $$A \ \cap \ B$$ 
and is defined as the set of those elements common to _both_ $A$ and $B$. 

Two sets are said to be _disjoint_ if they have no elements in common (their intersection is the empty set $\varnothing$), denoted by 
$$A \cap B \ = \varnothing$$

If $A$ and $B$ are sets, the _difference_ $A - B$ (also called the complement of $B$ relative to $A$) is defined to be the set of all elements of $A$ which are not in $B$. Thus, by definition,

$$A - B = \{ x \ | \ x \in A \ \text{and} \ x \notin B \}$$
The operations of union and intersection have many formal similarities to (as well as differences from) ordinary addition and multiplication of real numbers. For example, since there is no question of order involved in the definitions of union and intersection, it follows that both union and intersection operations are

_Associative_: 
$$(A \cup B) \cup C = A \cup (B \cup C)$$
$$(A \cap B) \cap C = A \cap (B \cap C)$$

_Commutative_: 
$$A \cup B = B \cup A$$
$$A \cap B = B \cap A$$
The operations of union and intersection can be extended to finite or infinite collections of sets as follows: Let $\mathscr{F}$ be a nonempty class of sets. The union of all sets $\mathscr{F}$ is defined as the set of those elements which belong to at least one of the sets in $\mathscr{F}$ and is denoted by,

$$\bigcup_{A \in \mathscr{F}} A$$
If $\mathscr{F}$ is a finite collection of sets, say $\mathscr{F} = \{A_1, A_2, \cdots, A_n\}$, 

$$\bigcup_{A \in \mathscr{F}} A = \bigcup_{k = 1}^{n}A_k = A_1 \cup A_2 \cup \cdots \cup A_n$$
Similarly, the intersection is denoted by $\bigcap_{A \in \mathscr{F}} A$ and finite collections are denoted by,
$$\bigcap_{A \in \mathscr{F}} A = \bigcap_{k = 1}^{n}A_k = A_1 \cap A_2 \cap \cdots \cap A_n$$
#### Selected Exercises

##### Ex-1

_Use the roster notation to designate the following sets of real numbers._

1. $A = \set{x | x^2 - 1 = 0}$

    $A = \set{1, -1}$

2. $B = \set{x | (x - 1)^2 = 0}$

    $B = \set{1}$

3. $C = \set{x | x + 8 = 9}$

    $C = \set{1}$

4. $D = \set{x | x^3 - 2x^2 + x = 2}$

    $D = \set{2}$

5. $E = \set{x | (x + 8)^2 = 9^2}$

    $E = \set{-17, 1}$

6. $F = \set{x | (x^2 - 16x)^2 = 17^2}$

    $F = \set{1, -17, -8 - \sqrt{47}, -8 + \sqrt{47}}$

##### Ex-2

_For the sets in Ex-1, note that $B \subseteq A$. List all the inclusion relations that hold among the sets $A, B, C, D, E, F$._

- $A \subseteq A$
- $B \subseteq B$
- $C \subseteq C$
- $D \subseteq D$
- $E \subseteq E$
- $F \subseteq F$

- $B \subseteq A$
- $B \subseteq C$
- $B \subseteq E$
- $B \subseteq F$

- $C \subseteq A$
- $C \subseteq B$
- $C \subseteq E$
- $C \subseteq F$

- $E \subseteq F$

##### Ex-3

_Let $A = \set{1}, B = \set{1, 2}$. Validate the following statements:_

1. $A \subset B$

$A$ is indeed a proper subset of $B$, and this statement is _true_, as since $2 \notin A$, $A \neq B$,  $B \nsubseteq A$ and therefore $A \subset B$.

2. $A \subseteq B$

Follows from the previous statement.

3. $A \in B$

This relation only holds if the set $A$ is contained within $B$. This is clearly not the case and hence _false_.

4. $1 \in A$

This is _true_ as the element $1$ is contained in $A$.

5. $1 \subseteq A$ and $1 \subset B$

Definitionally _false_, as elements are not subsets.

##### Ex-7

_Prove the following properties of set equality._

1. $\set{a, a} = \set{a}$

_Proof:_
Let $A \coloneqq \set{a, a}$, $B \coloneqq \set{a}$. _True_, because $A = B \iff \forall x(x \in A \Longrightarrow x \in B) \land \forall x(x \in B \Longrightarrow x \in A)$.

2. $\set{a, b} = \set{b, a}$

_True_ by similar reasoning to the previous property.

3. $\set{a} = \set{b, c} \iff a = b = c$

Reduces the property akin to the first problem in Ex-7 ($\set{a, a} = \set{a}$).

##### Ex-8

_Prove these set relations: Commutative laws._

1. $A \cup B = B \cup A$

_Proof:_ 
Let $X = A \cup B$ and $Y = B \cup A$. Suppose $x \in X$, this implies $x \in A$ or $x \in B$, which inturn implies $x \in Y$. Since $x \in X$ and $x \in Y$, by definition $X \subseteq Y$. Similarly, $Y \subseteq X$ by identical reasoning. 

Since $X \subseteq Y$ and $Y \subseteq X$, by definition $X = Y$; therefore, $A \cup B = B \cup A$. $\blacksquare$

2. $A \cap B = B \cap A$

_Proof:_ 
Let $X = A \cap B$ and $Y = B \cap A$. Suppose $x \in X$, then we must have $x \in A$ and $x \in B$, which implies $x \in Y$. Since $x \in X$ and $x \in Y$, by definition $X \subseteq Y$. Similarly, $Y \subseteq X$ by identical reasoning.

Since $X \subseteq Y$ and $Y \subseteq X$, by definition $X = Y$; therefore, $A \cap B = B \cap A$. $\blacksquare$

##### Ex-9

_Prove these set relations: Associative laws._

1. $A \cup (B \cup C) = (A \cup B) \cup C$

_Proof:_
- Let $X = A \cup (B \cup C)$ and $Y = (A \cup B) \cup C$. 

- $X = Y \iff (X \subseteq Y) \land (Y \subseteq X)$

- Suppose $x \in X$, then $x \in A$ _or_ $x \in (B \cup C)$. If $x \in A$, then $x \in (A \cup B) \implies x \in (A \cup B) \cup C$. If $x \notin A$, then $x \in (B \cup C)$. If $x \in B$, then $x \in (A \cup B) \implies x \in (A \cup B) \cup C$. If now $x \in C$, then $x \in (B \cup C) \implies x \in (A \cup B) \cup C$.

- $x \in X \land x \in Y \implies X \subseteq Y$. The reverse inclusion follows by identical reasoning, thus $Y \subseteq X$.

- Since $X \subseteq Y$ and $Y \subseteq X$, by definition of set equality, $X = Y$; therefore, $A \cup (B \cup C) = (A \cup B) \cup C$. $\blacksquare$

2. $A \cap (B \cap C) = (A \cap B) \cap C$

_Proof:_
- Let $X = A \cap (B \cap C)$ and $Y = (A \cap B) \cap C$.

- $X = Y \iff (X \subseteq Y) \land (Y \subseteq X)$

- Suppose $x \in X$. Then $x \in A$ _and_ $x \in (B \cap C)$. Since $x \in A$ and $x \in B$, $x \in (A \cap B)$. Also, if $x \in (A \cap B)$ and $x \in C$, then $x \in ((A \cap B) \cap C)$, and we have $x \in Y$.

- $x \in X \land x \in Y \implies X \subseteq Y$. The reverse inclusion follows by identical reasoning, thus $Y \subseteq X$.

- Since $X \subseteq Y$ and $Y \subseteq X$, by definition $X = Y$; therefore, $A \cap (B \cap C) = (A \cap B) \cap C$. $\blacksquare$

##### Ex-10

_Prove these set relations: Distributive laws._

1. $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$

_Proof:_
- Let $X = A \cap (B \cup C)$ and $Y = (A \cap B) \cup (A \cap C)$.

- $X = Y \iff (X \subseteq Y) \land (Y \subseteq X)$

- Suppose $x \in X$, then $x \in A$ _and_ $x \in (B \cup C)$, the latter implies $x \in B$ _or_ $x \in C$. This means either $x \in A$ _and_ $x \in B$ _or_ $x \in A$ _and_ $x \in C$, thus $x \in Y$. Since $x \in X$ and $x \in Y$, by definition $X \subseteq Y$. Also, $Y \subseteq X$ by similar reasoning.

- Since $X \subseteq Y$ and $Y \subseteq X$, by definition $X = Y$; therefore, $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$. $\blacksquare$

2. $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$

_Proof:_
- Let $X = A \cup (B \cap C)$ and $Y = (A \cup B) \cap (A \cup C)$. 

- $X = Y \iff (X \subseteq Y) \land (Y \subseteq X)$

- Suppose $x \in X$, then $x \in A$ _or_ $x \in (B \cap C)$, that is, $x \in B$ _and_ $x \in C$. This implies either $x \in A$ _or_ $x \in B$, _and_ $x \in A$ _or_ $x \in C$, hence, $x \in Y$. Since $x \in X$ and $x \in Y$, by definition $X \subseteq Y$. Also, $Y \subseteq X$ by similar reasoning.

- Since $X \subseteq Y$ and $Y \subseteq X$, by definition $X = Y$; therefore, $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$. $\blacksquare$

### Part 3: A Set of Axioms for the Real Number System

#### Introduction

There are many ways to introduce the real-number system. One popular method is to begin with the positive integers 1, 2, 3, . . and use them as building blocks to construct a more comprehensive system having the properties desired. Briefly, the idea of this method is to take the positive integers as undefined concepts, state some axioms concerning them, and then use the positive integers to build a larger system consisting of the positive rational numbers (quotients of positive integers). The positive rational numbers, in turn, may then be used as a basis for constructing the positive irrational numbers (real numbers like $\sqrt{2}$ and $\pi$ that are not rational). The final step is the introduction of the negative real numbers and zero. The most difficult part of the whole process is the transition from the rational numbers to the irrational numbers. 

Although the need for irrational numbers was apparent to the ancient Greeks from their study of geometry, satisfactory methods for constructing irrational numbers from rational numbers were not introduced until late in the $19$th century. At that time, three different theories were outlined by Karl Weierstrass ($1815-1897$), Georg Cantor ($1845-1918$), and Richard Dedekind ($1831-1916$). In $1889$, the Italian mathematician Guiseppe Peano ($1858-1932$) listed five axioms for the positive integers that could be used as the starting point of the whole construction. A detailed account of this construction, beginning with the Peano postulates and using the method of Dedekind to introduce irrational numbers, may be found in a book by E. Landau, Foundations of Analysis ($1951$). The point of view we shall adopt here is nonconstructive. We shall start rather far out in the process, taking the real numbers themselves as undefined objects satisfying a number of properties that we use as axioms. That is to say, we shall assume there exists a set $\R$ of objects, called real numbers, which satisfy the $10$ axioms listed in the next few sections. All the properties of real numbers can be deduced from the axioms in the list. When the real numbers are defined by a constructive process, the properties we list as axioms must be proved as theorems.

In the axioms that appear below, lower-case letters $a, b, c, \cdots , x, y, z$ represent arbitrary real numbers unless something is said to the contrary. The axioms fall in a natural way into three groups which we refer to as the _field axioms_, the _order axioms_, and the _least-upper bound axiom_ (also called the axiom of continuity or the completeness axiom).

#### The Field Axioms

Along with the set $\mathbb{R}$, we assume the existence of two operations called addition and multiplication, such that for every pair of real numbers $x$ and $y$ we can form the sum of $x$ and $y$, which is another real number denoted by $x + y$, and the product of $x$ and $y$, denoted by $xy$ or by $x \cdot y$. It is assumed that the sum $x + y$ and the product $xy$ are uniquely determined by $x$ and $y$. In other words,given $x$ and $y$, there is exactly one real number $x + y$ and exactly one real number $xy$. We attach no special meanings to the symbols $+$ and $*$, other than those contained in the axioms.

* _Axiom $1$. COMMUTATIVE LAWS_: $x + y = y + x$, $x \cdot y = y \cdot x$.

* _Axiom $2$. ASSOCIATIVE LAWS:_ $x + (y + z) = (x + y) + z$, $x \cdot (y \cdot z) = (x \cdot y) \cdot z$.

* _Axiom $3$. DISTRIBUTIVE LAWS:_ $x \cdot (y + z) = x \cdot y + x \cdot z$.

* _Axiom $4$. EXISTENCE OF IDENTITY ELEMENTS: There exist two distinct real numbers which we denote by $0$ and $1$, such that for every real x we have $x + 0 = x$ and $x \cdot 1 = x$._

* _Axiom $5$. EXISTENCE OF NEGATIVES: For every real number $x \neq 0$, there is a real number y such that $x + y = 0$._

* _Axiom $6$. EXISTENCE OF RECIPROCALS: For every real number $x \neq 0$, there is a real number y such that $x \cdot y = 1$._

From these six axioms we can deduce all the usual laws of elementary algebra. The most of important of which, are collected here as a list of theorems. In all these theorems, the symbols _a, b, c, d_ represent arbitrary real numbers. 

* **_Theorem $1-1$. CANCELLATION LAW FOR ADDITION_**: _If $a + b = a + c$, then $b = c$._
  
* **_Theorem $1-2$. POSSIBILITY OF SUBTRACTION_**. _Given $a$ and $b$, there is exactly one such $x$ such that $a + x = b$. This $x$ is denoted by $b - a$. In particular, $0 - a$ is written simply $-a$ and is called the negative of a._

* **_Theorem $1-3$._** $b - a = b + (-a)$.

* **_Theorem $1-4$._** $-(-a) = a$.

* **_Theorem $1-5$._** $a \cdot (b - c) = (a \cdot b) - (a \cdot c)$.

* **_Theorem $1-6$._** $0 \cdot a = a \cdot 0 = 0$.

* **_Theorem $1-7$: CANCELLATION LAW FOR MULTIPLICATION:_** _If $ab = ac$ and $a \neq 0$, then $b = c$_.

* **_Theorem $1-8$: POSSIBILITY OF DIVISION:_** _Given $a$ and $b$ with $a \neq 0$, there is exactly one $x$, such that $ax = b$. This $x$ is denoted by $b/a$ or $\frac{b}{a}$ and is called the quotient of $b$ and $a$. In particular, $1/a$ is also written $a^-1$ and is called the reciprocal of $a$._

* **_Theorem $1-9$:_** _If $a \neq 0$, then $b/a = b \cdot a^-1$._

* **_Theorem $1-10$:_** _If $a \neq 0$, then ${(a^{-1})}^{-1} = a$._

* **_Theorem $1-11$:_** _If $ab = 0$, then $a = 0$ or $b = 0$._

* **_Theorem $1-12$:_** _$(-a)b = -(ab)$ and $(-a)(-b) = ab$._

* **_Theorem $1-13$:_** _$(a/b) + (c/d) = (ac)\ / \ (bd)$ if $b \neq 0$ and $d \neq 0$._

* **_Theorem $1-14$:_** _$(a/b)\ (c/d) = (ac) \ / \ (bd)$ if $b \neq 0$ and $d \neq 0$._

* **_Theorem $1-15$:_** _$(a/b)\ / \ (c/d) = (ad)\ / \ (bc)$ if $b \neq 0$, $c \neq 0$, $d \neq 0$._

#### Selected Exercises 

##### Ex-1

_Prove the $15$ theorems using Axioms $1$ to $6$._

1. _If $a + b = a + c$, then $b = c$._

_Proof:_
- By Axiom $5$, there exists a unique $y$ such that $a + y = 0$, adding $y$ to both sides,
 $$(a + b) + y = (a + c) + y$$
- By Axiom $1$,
$$y + (a + b) = y + (a + c)$$
- By Axiom $2$,
$$(y + a) + b = (y + a) + c$$
- Applying Axiom $1$ to $y + a$, we get $a + y$, which is $0$, and we have,
$$0 + b = 0 + c$$
- Rearranging by Axiom $1$ again,$$b + 0 = c + 0 \implies b = c \ \blacksquare$$

2. _Given $a$ and $b$, there is a unique $x$ such that $a + x = b$. This $x$ is denoted by $b - a$. In particular, $0 - a$ is written simply $-a$ and is called the negative of $a$._

_Proof:_
- We need to show that there exists an $x$ such that $a + x = b$. We know by Axiom $5$ that $y + a = 0$, adding y to both sides,
$$(a + x) + y = b + y$$
- By Axiom $1$, we swap the operands, and applying Axiom $2$,
$$(y + a) + x = y + b$$
- Since $y + a = 0$, we have $x = y + b$. Hence there exists an $x$. Substituting back into our equation,
$$a + (y + b) = b$$
- Rearranging by Axiom $1$ and $2$, and simplifying as $y + a = 0$, we get $b = b$, thus validating the existence of such $x$. We now need to show that it's unique. Let's presume two solutions of the form,
$$a + x_1 = b, \quad a + x_2 = b$$
- By Theorem $1-1$, we know that $x_1 = x_2$, demonstrating its uniqueness. Now we connect this to our definition for $x = b - a$,
$$b + y = b - a$$
giving us $y = - a$, and our original $x = b + y$ becomes,
$$x = b - a = b + (-a)$$
- In the event $b = 0$, we get $x = -a$ and is called the _negative_ of $a$, hence proved. $\blacksquare$

3. $b - a = b + (- a)$.

- Proved in $2.$

4. $- (- a) = a$.

_Proof:_
- We know by Theorem $1-2$ and Axiom $5$ that $a + (-a) = 0$. By Axiom $5$, we also know that,
$$-(-a) + (- a) = 0$$
- Comparing the two equations,
$$a + (-a) = -(-a) + (-a)$$
- By Axiom $1$ and Theorem $1-1$,
$$a = -(-a)$$
- Hence, proved. $\blacksquare$

5. $a(b - c) = ab - ac$.

_Proof:_
- Working with the left-hand side, we know by Theorem $1-3$ that $b - c = b + (-c)$,
$$a(b + (-c))$$
- By Axiom $3$,
$$a(b + (-c)) = ab + a(-c)$$
- Add zero; $ac + -(ac)$ to facilitate grouping,
$$ab + a(-c) + ac - (ac)$$
- We know that $-c + c = 0$ by Theorem $1-3$,

$$
\begin{align*}
&= ab + a(-c + c) + (-(ac)) \\ \\[0.1pt]
&= ab + a(0) + (-(ac)) \\ \\[0.1pt]
&= ab + (-(ac)) \\ \\[0.1pt]
&= ab - ac \quad \textrm{(Theorem $1-4$, $ab + (-(ac)) = ab - ac$)}
\end{align*}
$$
- Hence, proved. $\blacksquare$

6. $0 \cdot a$ = $a \cdot 0$ = 0.

_Proof:_

$$
\begin{align*}
&= a \cdot (a + (- a)) \quad (\textrm{$a + (-a) = 0$ by Axiom $5$})\\ \\[0.1pt]
&= aa + a(-a) \\ \\[0.1pt]
&= 0 \quad &&(\textrm{Theorem $1-5$})
\end{align*}
$$
- The expression $0 \cdot a$ case holds by identical reasoning, hence proved. $\blacksquare$

7. _If $ab = ac$ and $a \neq 0$, then $b = c$. In particular, this shows that the number $1$ of Axiom $4$ is unique._

_Proof:_
- Since $a \neq 0$, by Axiom $6$, there exists a $y$ such that $a \cdot y = 1$. Multiplying the entire expression by $y$,

$$(ab) \cdot y = (ac) \cdot y$$
- Rearranging by Axiom $1$ and $2$, 

$$
\begin{align*}
y \cdot (ab) &= y \cdot (ac) \\ \\[0.1pt]
(ya) \cdot b &= (ya) \cdot c \\ \\[0.1pt]
1 \cdot b &= 1 \cdot c \\ \\[0.1pt]
b &= c
\end{align*}
$$
Hence, proved. $\blacksquare$

8. _Given $a$ and $b$ with $a \neq 0$, there is exactly one $x$ such that $ax = b$. This $x$ is denoted by $b/a$ or $\dfrac{b}{a}$ and is called the quotient of $b$ and $a$. In particular, $1/a$ is also written $a^{-1}$ and is called the reciprocal of $a$.

_Proof:_
- Since $a \neq 0$, by Axiom $6$ we know that for every $a$ there exists a $y$ such that $ay = 1$, we multiply both sides of the equation by $y$,
$$(ax) y = by$$
- Rearranging the left-hand side by Axiom $1$ and Axiom $2$,

$$
\begin{align*}
y (ax) &= yb \\ \\[0.1pt]
&\implies (ya) x = yb \\ \\[0.1pt]
&\implies x = yb \\ \\[0.1pt]
\end{align*}
$$
confirming that such an $x$ satisfies the equation. Now, we know that $x = b / a$, using the first three axioms to simplify, we obtain

$$
\begin{align*}
\dfrac{b}{a} &= y b \\ \\[0.1pt]
&\implies y = \dfrac{1}{a} \\ \\[0.1pt]
&\implies y = a^{-1}
\end{align*}
$$
where by definition $b/a = yb = a^{-1}b$. Hence, $a (a^{-1} b) = b$. $\blacksquare$

9. _If $a \neq 0$, then $b/a = b \cdot a^{-1}$._

Proved in $8$.

10. _If $a \neq 0$, then $(a^{-1})^{-1} = a$._

_Proof:_

- By Axiom $6$, $a^{-1}$ is a number such that $a \cdot a^{-1} = 1$. Then, for $(a^{-1})^{-1}$,
$$a^{-1} \cdot (a^{-1})^{-1} = 1$$
- Comparing both equations,
$$a \cdot a^{-1} = a^{-1} \cdot (a^{-1})^{-1}$$
- Rearranging the left-hand side by Axiom $1$, and by Theorem $1-7$,
$$a = (a^{-1})^{-1}$$
hence, proved. $\blacksquare$

11. _If $ab = 0$, then $a = 0$ or $b = 0$._

_Proof:_
- We need to show that either $a = 0$ or $b = 0$.

- If $a = 0$, then $0 \cdot b = 0$ holds by Theorem $1-6$.

- If $a \neq 0$, then by Axiom $6$ (and Theorem $1-8$), we know that an $a^{-1}$ exists. We multiply both sides by $a^{-1}$,

$$
\begin{align*}
(ab) \cdot a^{-1} &= 0 \cdot a^{-1} \\ \\[0.1pt]
&\implies (a^{-1} a) b = 0 \quad &&&&(\textrm{Axiom $1$ and Axiom $2$}) \\ \\[0.1pt]
&\implies b = 0 \quad &&&&(\textrm{Axiom $6$, $a^{-1}a = 1$})
\end{align*}
$$
Hence, proved. $\blacksquare$

12. $(-a)b = -(ab)$ and $(-a)(-b) = ab$.

_Proof:_

- Considering the $(-a)b = -(ab)$ case,

$$
\begin{align*}
&= (-a)b + ab + (-(ab)) \quad &&&&(\textrm{Adding zero.}) \\ \\[0.1pt]
&\implies b(-a + a) + (-(ab)) \\ \\[0.1pt]
&\implies b(0) + (-(ab)) \\ \\[0.1pt]
&\implies -(ab)
\end{align*}
$$
- Using this result for the second case,

$$
\begin{align*}
&= -(a \cdot (-b)) \\ \\[0.1pt]
&\implies -((-b) \cdot a) \quad &&&&(\textrm{Axiom $1$}) \\ \\[0.1pt]
&\implies -(-(ba)) \quad &&&&(\textrm{$(-a)b = -(ab)$}) \\ \\[0.1pt]
&\implies ab \quad &&&&(\textrm{Theorem $1-4$ and Axiom $1$}) \\ \\[0.1pt]
\end{align*}
$$
hence, proved. $\blacksquare$

13. $(a/b) + (c/d) = (ad + bc)/(bd)$ if $b \neq 0$ and $d \neq 0$.

_Proof:_
- Working with the left-hand side, we re-write the expression by Theorem $1-9$,
$$ab^{-1} + cd^{-1}$$
- Multiplying by $1 = bd \cdot (bd)^{-1}$,

$$
\begin{align*}
&= bd (bd)^{-1} (ab^{-1} + cd^{-1}) \\ \\[0.1pt]
&\implies (bd)^{-1} (ab^{-1}bd + cd^{-1}db) \quad &&&&(\textrm{Distributing $bd$.}) \\ \\[0.1pt]
&\implies (ad + bc) (bd)^{-1}
\end{align*}
$$
hence, proved. $\blacksquare$

14. $(a/b)(c/d) = (ac)/(bd)$ if $b \neq 0$, $c \neq 0$, and $d \neq 0$.

_Proof:_
- By Theorem $1-8$, since $b \neq 0$ and $d \neq 0$, $(bd)^{-1}$ exists, and the left-hand side is,
$$ab^{-1} cd^{-1}$$
- Multiplying by $1 = bd (bd)^{-1}$,

$$
\begin{align*}
&= (bd (bd)^{-1}) (ab^{-1}cd^{-1}) \\ \\[0.1pt]
&\implies acb^{-1}b b^{-1}dd^{-1}d^{-1} \\ \\[0.1pt]
&\implies ac(1) b^{-1} d^{-1} (1) \\ \\[0.1pt]
&\implies ac b^{-1} d^{-1} \\ \\[0.1pt]
&\implies \dfrac{ac}{bd}
\end{align*}
$$
hence, proved. $\blacksquare$

15. $(a/b)/(c/d) = (ad)/(bc)$ if $b \neq 0$, $c \neq 0$, and $d \neq 0$.

_Proof:_

- By Theorem $1-8$, since $b$, $c$, and $d$ are not equal to zero, their inverses, specifically $(bc)^{-1}$ and $(cd^{-1})^{-1}$ exists,

$$
\begin{align*}
&= ab^{-1}(cd^{-1})^{-1} (bc)(bc)^{-1}\\ \\[0.1pt]
&\implies (ab^{-1}bc)(cd^{-1})^{-1} (bc)^{-1} \\ \\[0.1pt]
&\implies (ac)(c^{-1}(d^{-1})^{-1}) (bc)^{-1} \\ \\[0,1pt]
&\implies (ac)(c^{-1}(d)) (bc)^{-1} \quad &&&&\textrm{(Theorem $1-10$, $(d^{-1})^{-1} = d$)} \\ \\[0.1pt]
&\implies \dfrac{ad}{bc}
\end{align*}
$$
hence, proved. $\blacksquare$

#### The Order Axioms

This group of axioms has to do with a concept which establishes an ordering among $\mathbb{R}$. This ordering enables us to make statements about one real number being larger or smaller than another. We choose to introduce the order properties as a set of axioms about a new undefined concept called _positiveness_ and then to define terms like less than and greater than in terms of positiveness. We shall assume that there exists a certain subset $\mathbb{R}^+ \subset \mathbb{R}$, called the set of positive numbers, which satisfies the following three order axioms:

* _Axiom $7$. If $x$ and $y$ are in $\mathbb{R}^+$, so are $x + y$ and $x \cdot y$._

* _Axiom $8$. For every real $x \neq 0$, either $x \in \mathbb{R}^+$ or $-x \in \mathbb{R}^+$, but not both._

* _Axiom $9$._ $0 \notin \mathbb{R}^+$.

Now, we can define the symbols $\gt$, $\lt$, $\geq$, $\leq$, as follows:

$$
\begin{align*}
& x \lt y \text{ means that } y - x \text{ is positive}. \\
& y \gt x \text{ means that } x < y. \\
& x \leq y \text{ means that either } x \lt y \text{ or } x = y. \\
& y \geq x \text{ means that } x \leq y.
    \end{align*}
$$

From these order axioms, we can derive all the usual rules for calculating with inequalities. The most important of these are listed here as theorems.

* _**Theorem $1-16$. TRICHOTOMY LAW:** For arbitrary real numbers a and b, exactly one of the three relations $a \lt b$, $b \lt a$, $a = b$ holds._

* _**Theorem $1-17$. TRANSITIVE LAW:** If $a \lt b$ and $b < c$, then $a < c$._

* _**Theorem $1-18$:** If $a \lt b$, then $a + c \lt b + c$._

* _**Theorem $1-19$:** If $a \lt b$ and $c \gt 0$, then $ac \lt bc$._

* _**Theorem $1-20$**: If $a \neq 0$, then $a^2 \gt 0$._

* _**Theorem $1-21$**: $1 \gt 0$._

* _**Theorem $1-22$**: If $a \lt b$ and $c \lt 0$, then $ac \gt bc$._

* _**Theorem $1-23$**: If $a \lt b$, then $-a \gt -b$. In particular, if $a \lt 0$, then $-a \gt 0$._

* _**Theorem $1-24$:** If $ab \gt 0$, then both $a$ and $b$ are positive or both are negative._

* _**Theorem 1-25:** If $a \lt c$ and $b \lt d$, then $a + b \lt c + d$._

#### Selected Exercises

##### Ex-1

_Prove Theorems $1-16$ to $1-25$ using only currently proven axioms and theorems._

1. $1-16$: _For arbitrary reals $a$ and $b$, exactly one of these three relations holds, $a \lt b$, $a \gt b$, $a = b$.

_Proof:_
- If $b - a = 0$, then $a - b = 0$, which means $a = b$. By Axiom $9$, we cannot have $a \gt b$ or $b \gt a$.
- If $x \neq 0$, by Axiom $8$, we can _only_ have one of these two cases, $a \gt b$ or $b > a$.

2. $1-17$: _If $a < b$ and $b < c$, then $a < c$._

_Proof:_
- We can prove this by contradiction. Suppose $a = c$. We know that $a \lt b$, then $c \lt b$ also. But we're also given $b \lt c$. This leads to a contradiction, and by Theorem $1-16$, $a \lt c$. $\blacksquare$

3. $1-18$: _If $a \lt b$, then $a + c \lt b + c$._

_Proof:_
- If $a < b$, then $b - a > 0$. Let $x = a + c$ and $y = b + c$. Then, $$y - x = (b + c) - (a + c)$$
which simplifies to $y - x = b - a$. We already know that $b - a \gt 0$, then $y - x \gt 0$ , and $x \lt y$. $\blacksquare$

4. $1-19$: _If $a \lt b$ and $c \gt 0$, then $ac \lt bc$._

_Proof:_
- If $a \lt b$, by definition, $b - a \gt 0$. Multiplying both sides by $c$,
  
$$
\begin{align*}
c(b - a) &\gt 0 \cdot c \\ \\[0.1pt]
&\implies cb - ca \gt 0 \\ \\[0.1pt]
&\implies cb \gt ca
\end{align*}
$$
hence, proved. $\blacksquare$

5. $1-20:$ _If $a \neq 0$, then $a^2 \gt 0$._

_Proof:_

- We can prove this by contradiction. Say $a^2 = 0$. Then $a = 0$. But we already know that $a \neq 0$, then $a^2 \gt 0$ or $a^2 \lt 0$.
- But no real number $a$ exists such that $a^2 \lt 0$ because $a$ is either positive or negative. Squaring in both cases leads to a positive real number _greater_ than zero; therefore, $a^2 \gt 0$. $\blacksquare$

6. $1-21:$ $1 \gt 0$.

_Proof:_

- Suppose $1 \lt 0$. Then $0 - 1$ must be greater than $0$, but clearly, $-1 \ngtr 0$, hence this contradiction along with $1 \neq 0$ shows that $1 \gt 0$ by trichotomy. $\blacksquare$

7. $1-22$: _If $a \lt b$ and $c \lt 0$, then $ac \gt bc$._

_Proof:_

- If $a \lt b$, then $b - a \gt 0$ by definition. Also, $c \lt 0$ implies $-c > 0$ and $-c x \gt 0$ where x is an arbitrary positive real. Multiplying both sides,
$$(-c)(b - a) \gt -c (0)$$
- Using field axioms,
$$-bc + ac \gt 0 \implies ac \gt bc$$
hence, proved. $\blacksquare$

8. $1-23$: _If $a \lt b$, then $-a \gt -b$. In particular, if $a \lt 0$, then $-a \gt 0$._

_Proof:_
- If $a \lt b$, then $b - a \gt 0$ by definition of $\lt$. Then clearly, $-a > -b$.
- If $a \lt 0$, then $0 - a > 0 \implies -a \gt 0$. $\blacksquare$ 

9. Theorem $1-24$: _If $ab \gt 0$, then both $a$ and $b$ are positive or both are negative._

_Proof:_
- By Theorem $1-6$, we know that neither $a$ nor $b$ can be $0$. Now, suppose $a \in \R^{+}$, then,
$$ab \gt 0 \implies -(ab) \lt 0$$
- Since, $a$ is positive and by definition of the inequalities,
$$a(-b) \lt 0 \implies -b \lt 0 \implies b \gt 0$$
hence, both $a$ and $b$ must be greater than zero. We can show the other case by identical reasoning, hence proved. $\blacksquare$

10. Theorem $1-25$: _If $a \lt c$ and $b \lt d$, then $a + b \lt c + d$._

_Proof:_
- If $a \lt c$, then $c - a \gt 0$ and similarly $d - b \gt 0$ and by Axiom $7$,
$$(c - a) + (d - b) \gt 0$$
- Rearranging,

$$(c + d) - (a + b) \gt 0$$
and, $c + d \gt a + b$. $\blacksquare$

#### Integers and Rational Numbers

There exist certain subsets of $\mathbb{R}$ which are distinguished because they have special properties not shared by all real numbers. We shall discuss two such subsets, the _integers_ and the _rational numbers_.

To introduce the positive integers we begin with the number $1$, whose existence is guaranteed by Axiom $4$. The number $1 + 1$ is denoted by $2$, the number $2 + 1$ by $3$, and so on. The numbers $1, 2, 3, . . . ,$ obtained in this way by repeated addition of $1$ are all positive, and they are called the positive integers. Strictly speaking, this description of the positive integers is not entirely complete because we have not explained in detail what we mean by the expressions "and so on" or "repeated addition of $1$." 

Although the intuitive meaning of these expressions may seem clear, in a careful treatment of the real-number system it is necessary to give a more precise definition of the positive integers. There are many ways to do this. One convenient method is to first introduce the notion of an _inductive set_.

DEFINITION OF AN INDUCTIVE SET: _A set of $\mathbb{R}$ is called an inductive set if it has the following two properties:_

1. _The number $1$ is in the set._
2. _For every $x$ in the set, the number $x + 1$ is also in the set._

For example, $\mathbb{R}$ is an inductive set. So is the set $\mathbb{R}^+$. Now we define the positive integers to be those real numbers which belong to every inductive set. 

DEFINITION OF POSITIVE INTEGERS: _A real number is called a positive integer if it belongs to every inductive set_.

The negatives of the positive integers are called the _negative integers_. The positive integers, together with negative integers and zero, form a set $\mathbb{Z}$ which we call simply the _set of integers_.

Quotients of integers $a/b$ (where $\neq 0$) are called _rational numbers_. The set of rational numbers, denoted by $\mathbb{Q}$, contains $\mathbb{Z}$ as a subset. We must take note that all the field axioms and the order axioms are satisfied by $\mathbb{Q}$. For this reason, we say that $\mathbb{Q}$ is an _ordered field_. Real numbers that are not in $\mathbb{Q}$ are called _irrational_. 

#### Upper Bound of a Set, Maximum Element, Least Upper Bound (Supremum)

The nine axioms listed above contain all the properties of real numbers usually discussed in elementary algebra. There is another axiom of fundamental importance in calculus that is ordinarily not discussed in elementary algebra courses. This axiom (or some property equivalent to it) is used to establish the existence of irrational numbers.

Irrational numbers arise in elementary algebra when we try to solve certain quadratic equations. For example,it is desirable to have a real number $x$ such that $x^2 = 2$. From the nine axioms above, we cannot prove that such an $x$ exists in $\mathbb{R}$, because these nine axioms are also satisfied by $\mathbb{Q}$, and there is no rational number $x$ whose square is $2$.

Axiom $10$ allows us to introduce irrational numbers in the real-number system, and it gives the real-number system a property of continuity that is a keystone in the logical structure of calculus. Before we describe Axiom $10$, it is convenient to introduce some more terminology and notation. Suppose $S$ is a nonempty set of real numbers and suppose there is a number $B$ such that,
$$x \leq B$$
for every $x$ in $S$. Then $S$ is said to be _bounded above_ by $B$. The number $B$ is called an _upper bound_ for $S$. We say _an_ upper bound because every number greater than $B$ will also be an upper bound. If an upper bound $B$ is also a member of $S$, then $B$ is called the _largest member_ or the _maximum element_ of $S$. There can be at most one such $B$. If it exists, we write, $$B = max \ S$$
Thus, $B = max \ S$ if $B \in S$ and $x \leq B$ for a.l $x$ in $S$. A set with no upper bound is said to be _unbounded above_. Here are some examples:

* _Ex 1: Let $S$ be the set of all positive real numbers. This set is unbounded above. It has no upper bounds and it has no maximum element._

* _Ex 2: Let $S$ be the set of all real $x$ satisfying $0 \leq x \leq 1$. This set is bounded above by $1$, which is also its maximum element._

* _Ex 3: Let $T$ be the set of all real satisfying $0 \leq x \lt 1$. This is like the set in Ex $2$, except that the point $1$ is not included. This set is bounded above by $1$, but it has no maximum element._

Some sets, like in Ex $3$, are bounded above but have no maximum element. For these sets there is a concept which takes the place of the maximum element. This is called the _least upper bound_ of the set and is defined as follows:

DEFINITION OF LEAST UPPER BOUND: _A number $B$ is called a least upper bound of a non-empty set $S$ if $B$ has the following two properties:_

1. _$B$ is an upper bound for $S$_.

2. _No number less than $B$ is an upper bound for $S$._

If $S$ has a maximum element, this maximum is also a least upper bound for $S$. But if $S$ does not have a maximum element, it may still have a least upper bound. In Ex $3$ above, the number $1$ is a least upper bound for $T$ although $T$ has no maximum element.

* _**Theorem $1-26$:** Two different numbers cannot be least upper bounds for the same set._

Proof: Suppose that $B$ and $C$ are two least upper bounds for a set $S$. Property $2$ implies that $C \geq B$ since $B$ is a least upper bound; similarly, $B \geq C$ since $C$ is a least upper bound. Hence we have $B = C$.

This theorem tells us that if there is a least upper bound for a set $S$, there is only one and we make speak of _the_ least upper bound. It is more consisely also referred to as a _supremum_, abbreviated _sup_. We adopt this convention and write $$B = sup \ S$$ to express the fact that $B$ is the least upper bound, or supremum, of $S$.

#### The Least Upper Bound Axiom (Completeness Axiom)

* _Axiom $10$: Every nonempty set $S$ of real numbers which is bounded above has a supremum; that is, there is a real number $B$ such that $B = \sup S$._

We emphasize once more that the supremum of $S$ need not be a member of $S$. In fact, $\sup S$ belongs to $S$ if and only if $S$ has a maximum element, in which case $\max S = \sup S$.

Definitions of the terms _lower bound, bounded below, smallest member (or minimum element)_ may be similarly formulated. If $S$ has a minimum element, we denote it by $\min S$.

A number $L$ is called a _greatest lower bound (or infimum)_ of $S$ if (a) $L$ is a lower bound for $S$, and (b) no number greater than $L$ is a lower bound for $S$. The infimum of $S$, when it exists, is uniquely determined and we denote it by $\inf S$. If $S$ has a minimum element, then $\min S = \inf S$.

Using Axiom $10$, we can prove the following,

* _**Theorem $1-27$:** Every nonempty set $S$ that is bounded below has a greatest lower bound; that is, there is a real number $L$ such that $L = \inf S$._

_Proof:_ Let $-S$ denote the set of negatives of numbers in $S$. Then $-S$ is non-empty and bounded above. Axiom $10$ tells us that there is a number $B$ which is a supremum for $-S$. It is easy to verify that $-B = \inf S$.

Let us refer once more to the examples in the foregoing section. In Ex $1$, the set of all positive real numbers, the number $0$ is the infimum of $S$. This set has no minimum element. In Ex $2$ and $3$, the number $0$ is the minimum element.

In all these examples it was easy to decide whether or not the set $S$ was bounded above or below, and it was also easy to determine the numbers $\sup S$ and $\inf S$. The next example shows that it may be difficult to determine whether upper or lower bounds exist.

Ex $4$: Let $S$ be the set of all numbers of the form $(1 + 1/n)^n$, where $n = 1, 2, 3, \ldots$. For example, taking $n = 1, 2, 3$, we find that the numbers $2, \frac{9}{4}$, and $\frac{64}{27}$ are in $S$. Every number in the set is greater than $1$, so the set is bounded below and hence has an infimum. 

With a little effort we can show that $2$ is the smallest element of $S$ so $\inf S = 2$. The set $S$ is also bounded above, although this fact is not as easy to prove. Once we know that $S$ is bounded above, Axiom $10$ tells us that there is a number which is the supremum of $S$. In this case it is not easy to determine the value of $\sup S$ from the description of $S$. In a later chapter, we will learn that $\sup S$ is an irrational number approximately equal to $2.718$. It is an important number in calculus called the Euler number $e$.

#### The Archimedean Property of the Real-number System

* _**Theorem $1-28$:** The set $\mathbf{P}$ of positive integers $1, 2, 3, \cdots$ is unbounded above._

_Proof:_
Assume $\mathbf{P}$ is bounded above. We shall show that this leads to a contradiction. Since $\mathbf{P}$ is nonempty, Axiom $10$ tells us that $\mathbf{P}$ has a least upper bound, say $b$. The number $b - 1$, being less than $b$, cannot be an upper bound for $\mathbf{P}$. Hence, there is at least one positive integer $n$ such that $n > b - 1$. For this $n$ we have $n + 1 > b$. Since $n + 1$ is in $\mathbf{P}$, this contradicts the fact that $b$ is an upper bound for $\mathbf{P}$.

As corollaries of Theorem $1-28$, we immediately obtain the following consequences:

* _**Theorem $1-29$**:  For every real $x$ there exists a positive integer $n$ such that $n > x_.
 
_Proof:_ If this were not so, some $x$ would be an upper bound for $\mathbf{P}$, contradicting Theorem $1-28$.

* _**Theorem $1-30$:**  If $x > 0$ and if $y$ is an arbitrary real number, there exists a positive integer $n$ such that $nx > y$._

_Proof:_ Apply Theorem $1-29$ with $x$ replaced by $y/x$.

The property described in Theorem $1-30$ is called the Archimedean property of the real-number system. Geometrically it means that any line segment, no matter how long, may be covered by a finite number of line segments of a given positive length, no matter how small. In other words, a small ruler used often enough can measure arbitrarily large distances. Archimedes realized that this was a fundamental property of the straight line and stated it explicitly as one of the axioms of geometry. In the $19$th and $20$th centuries, non-Archimedean geometries have been constructed in which this axiom is rejected.

From the Archimedean property, we can prove the following theorem, which will be useful in our discussion of integral calculus.

* _**Theorem $1-31$:** If three real numbers $a$, $x$, and $y$ satisfy the inequalities,_

$$
a \le x \le a + \frac{y}{n}
$$
_for every integer $n \ge 1$, then $x = a$._

_Proof:_ If $x > a$, Theorem $1-30$ tells us that there is a positive integer $n$ satisfying $n(x - a) > y$, contradicting ($1.14$). Hence we cannot have $x > a$, so we must have $x = a$.

#### Fundamental Properties of the Supremum and Infimum

This section discusses three fundamental properties of the supremum and infimum that we shall use in our development of calculus. The first property states that any set of numbers with a supremum contains points arbitrarily close to its supremum; similarly, a set with an infimum contains points arbitrarily close to its infimum.

* _**Theorem $1-32$:** Let $h$ be a given positive number and let $S$ be a set of real numbers._

- _If $S$ has a supremum, then for some $x$ in $S$ we have,_
$$x > \sup S - h$$

- _If $S$ has an infimum, then for some $x$ in $S$ we have,_
$$x < \inf S + h$$
Proof of 1: If we had $x \le \sup S - h$ for all $x$ in $S$, then $\sup S - h$ would be an upper bound for $S$ smaller than its least upper bound. Therefore we must have $x > \sup S - h$ for at least one $x$ in $S$. This proves (a). The proof of (b) is similar.

* _**Theorem $1-33$. ADDITIVE PROPERTY**: Given nonempty subsets $A$ and $B$ of $\mathbb{R}$, let $C$ denote the set_
$$C = \{a + b \mid a \in A, b \in B\}$$
- _If each of $A$ and $B$ has a supremum, then $C$ has a supremum, and_
$$\sup C = \sup A + \sup B$$

- _If each of $A$ and $B$ has an infimum, then $C$ has an infimum, and_
$$\inf C = \inf A + \inf B$$

_Proof:_ Assume each of $A$ and $B$ has a supremum. If $c \in C$, then $c = a + b$, where $a \in A$ and $b \in B$. Therefore $c \le \sup A + \sup B$; so $\sup A + \sup B$ is an upper bound for $C$. This shows that $C$ has a supremum and that,
$$\sup C \le \sup A + \sup B$$
Now let $n$ be any positive integer. By Theorem 1-32 (with $h = 1/n$) there is an $a$ in $A$ and a $b$ in $B$ such that,
$$a > \sup A - \frac{1}{n}, \quad b > \sup B - \frac{1}{n}$$
Adding these inequalities, we obtain,
$$a + b > \sup A + \sup B - \frac{2}{n}, \quad \text{or} \quad \sup A + \sup B < a + b + \frac{2}{n} \le \sup C + \frac{2}{n},$$

since $a + b \le \sup C$. Therefore we have shown that,
$$\sup C \le \sup A + \sup B < \sup C + \frac{2}{n}$$for every integer $n \ge 1$. By Theorem $1-31$, we must have $\sup C = \sup A + \sup B$. This proves $1$), and the proof of $2$) is similar.

* _**Theorem $1-34$:** Given two nonempty subsets $S$ and $T$ of $\mathbb{R}$ such that
$$s \le t$$ 
for every $s$ in $S$ and every $t$ in $T$. Then $S$ has a supremum, and $T$ has an infimum, and they satisfy the inequality,_
$$\sup S \le \inf T$$
_Proof:_ Each $t$ in $T$ is an upper bound for $S$. Therefore $S$ has a supremum which satisfies the inequality $\sup S \le t$ for all $t$ in $T$.

Hence $\sup S$ is a lower bound for $T$, so $T$ has an infimum which cannot be less than $\sup S$. In other words, we have $\sup S \le \inf T$, as asserted.

#### Selected Exercises*
_Note: Deferred towards revision._

#### Existence of Square Roots of Nonnegative $\mathbb{R}$

It was pointed out earlier that the equation $x^2 = 2$ has no solutions among the rational numbers. With the help of Axiom $10$, we can prove that the equation $x^2 = a$ has a solution among the real numbers if $a \ge 0$. Each such $x$ is called a square root of $a$. 

First, let us see what we can say about square roots without using Axiom $10$. Negative numbers cannot have square roots because if $x^2 = a$, then $a$, being a square, must be nonnegative (by Theorem $1-20$). Moreover, if $a = 0$, then $x = 0$ is the only square root (by Theorem $1-11$). Suppose, then, that $a > 0$. If $x^2 = a$, then $x \ne 0$ and $(-x)^2 = a$, so both $x$ and its negative are square roots. In other words, if $a$ has a square root, then it has two square roots, one positive and one negative. Also, it has at most two because if $x^2 = a$ and $y^2 = a$, then $x^2 = y^2$ and $(x - y)(x + y) = 0$, and so, by Theorem $1-11$, either $x = y$ or $x = -y$. Thus, if $a$ has a square root, it has exactly two.

The existence of at least one square root can be deduced from an important theorem in calculus known as the intermediate-value theorem for continuous functions, but it may be instructive to see how the existence of a square root can be proved directly from Axiom $10$.

* _**Theorem $1-35$: Every nonnegative real number $a$ has a unique nonnegative square root._

Note: If $a \ge 0$, we denote its nonnegative square root by $a^{1/2}$ or by $\sqrt{a}$. If $a > 0$, the negative square root is $-a^{1/2}$ or $-\sqrt{a}$.

_Proof:_ 
- If $a = 0$, then 0 is the only square root.

- Assume, then, that $a > 0$. Let $S$ be the set of all positive $x$ such that $x^2 \le a$. Since $(1 + a)^2 > a$, the number $1 + a$ is an upper bound for $S$. Also, $S$ is nonempty because the number $a/(1 + a)$ is in $S$; in fact, $a^2 \le a(1 + a)^2$ and hence $a^2/(1 + a)^2 \le a$.

- By Axiom 10, $S$ has a least upper bound which we shall call $b$. Note that $b \ge a/(1 + a)$ so $b > 0$. There are only three possibilities: $b^2 > a$, $b^2 < a$, or $b^2 = a$.

- Suppose $b^2 > a$ and let $c = b - (b^2 - a)/(2b) = \frac{1}{2}(b + a/b)$. Then $0 < c < b$ and $c^2 = b^2 - (b^2 - a) + (b^2 - a)^2/(4b^2) = a + (b^2 - a)^2/(4b^2) > a$. Therefore $c^2 > x^2$ for each $x$ in $S$, and hence $c > x$ for each $x$ in $S$. This means that $c$ is an upper bound for $S$. Since $c < b$, we have a contradiction because $b$ was the least upper bound for $S$. Therefore the inequality $b^2 > a$ is impossible.

- Suppose $b^2 < a$. Since $b > 0$, we may choose a positive number $c$ such that $c < b$ and such that $c < (a - b^2)/(3b)$. Then we have
$$(b + c)^2 = b^2 + c^2 + 2bc < b^2 + 3bc < b^2 + (a - b^2) = a.$$
- Therefore $b + c$ is in $S$. Since $b + c > b$, this contradicts the fact that $b$ is an upper bound for $S$. Therefore the inequality $b^2 < a$ is impossible, and the only remaining alternative is $b^2 = a$.

#### Roots of Higher Order. Rational Powers

The least upper-bound axiom can also be used to show the existence of roots of higher order. For example, if $n$ is a positive odd integer, then for each real $x$ there is exactly one real $y$ such that $y^n = x$. This $y$ is called the $n$th root of $x$ and is denoted by
$$y = x^{1/n} \quad \text{or} \quad y = \sqrt[n]{x}.$$

When $n$ is even, the situation is slightly different. In this case, if $x$ is negative, there is no real $y$ such that $y^n = x$ because $y^n \ge 0$ for all real $y$. However, if $x$ is positive, it can be shown that there is one and only one positive $y$ such that $y^n = x$. This $y$ is called the positive $n$th root of $x$ and is denoted by the symbols in (I.15). Since $n$ is even, $(-y)^n = y^n$ and hence each $x > 0$ has two real $n$th roots, $y$ and $-y$. However, the symbols $x^{1/n}$ and $\sqrt[n]{x}$ are reserved for the positive $n$th root. We do not discuss the proofs of these statements here because they will be deduced later as consequences of the intermediate-value theorem for continuous functions (see Section $3.10$).

If $r$ is a positive rational number, say $r = m/n$, where $m$ and $n$ are positive integers, we define $x^r$ to be $(x^m)^{1/n}$, the $n$th root of $x^m$, whenever this exists. If $x \ne 0$, we define $x^{-r} = 1/x^r$ whenever $x^r$ is defined. From these definitions, it is easy to verify that the usual laws of exponents are valid for rational exponents: $x^r \cdot x^s = x^{r+s}$, $(x^r)^s = x^{rs}$, and $(xy)^r = x^r y^r.$

#### Representation of Real Numbers by Decimals

A real number of the form,
$$r = a_0 + \frac{a_1}{10} + \frac{a_2}{10^2} + \cdots + \frac{a_n}{10^n},$$
where $a_0$ is a nonnegative integer and $a_1, a_2, \ldots, a_n$ are integers satisfying $0 \le a_i \le 9$, is usually written more briefly as follows:
$$r = a_0 . a_1 a_2 \cdots a_n.$$
This is said to be a finite decimal representation of $r$. For example,
$$\frac{1}{2} = \frac{5}{10} = 0.5 , \quad \frac{1}{50} = \frac{2}{10^2} = 0.02 , \quad \frac{29}{4} = 7 + \frac{2}{10} + \frac{5}{10^2} = 7.25 .$$
Real numbers like these are necessarily rational and, in fact, they all have the form $r = a/10^n$, where $a$ is an integer. However, not all rational numbers can be expressed with finite decimal representations. For example, if $\frac{1}{3}$ could be so expressed, then we would have $\frac{1}{3} = a/10^n$ or $3a = 10^n$ for some integer $a$. But this is impossible since $3$ is not a factor of any power of $10$.

Nevertheless, we can approximate an arbitrary real number $x > 0$ to any desired degree of accuracy by a sum of the form shown above, if we take $n$ large enough. The reason for this may be seen by the following geometric argument: If $x$ is not an integer, then $x$ lies between two consecutive integers, say $a_0 < x < a_0 + 1$. The segment joining $a_0$ and $a_0 + 1$ may be subdivided into ten equal parts. If $x$ is not one of the subdivision points, then $x$ must lie between two consecutive subdivision points. This gives us a pair of inequalities of the form
$$a_0 + \frac{a_1}{10} < x < a_0 + \frac{a_1 + 1}{10} ,$$
where $a_1$ is an integer $(0 \le a_1 \le 9)$. Next we divide the segment joining $a_0 + a_1/10$ and $a_0 + (a_1 + 1)/10$ into ten equal parts (each of length $10^{-2}$) and continue the process. If after a finite number of steps a subdivision point coincides with $x$, then $x$ is a number of the form shown above. Otherwise the process continues indefinitely, and it generates an infinite set of integers $a_1, a_2, a_3, \ldots$. In this case, we say that $x$ has the infinite decimal representation
$$x = a_0.a_1a_2a_3\cdots$$

At the $n$th stage, $x$ satisfies the inequalities
$$a_0 + \frac{a_1}{10} + \cdots + \frac{a_n}{10^n} < x < a_0 + \frac{a_1}{10} + \cdots + \frac{a_n + 1}{10^n}.$$
This gives us two approximations to $x$, one from above and one from below, by finite decimals that differ by $10^{-n}$. Therefore we can achieve any desired degree of accuracy in our approximations by taking $n$ large enough.

When $x = \frac{1}{3}$, it is easy to verify that $a_0 = 0$ and $a_n = 3$ for all $n \ge 1$, and hence the corresponding infinite decimal expansion is
$$\frac{1}{3} = 0.333\cdots.$$
Every irrational number has an infinite decimal representation. For example, when $x = \sqrt{2}$ we may calculate by trial and error as many digits in the expansion as we wish. Thus, $\sqrt{2}$ lies between $1.4$ and $1.5$, because $(1.4)^2 < 2 < (1.5)^2$. Similarly, by squaring and comparing with $2$, we find the following further approximations:
$$1.41 < \sqrt{2} < 1.42 , \quad 1.414 < \sqrt{2} < 1.415 , \quad 1.4142 < \sqrt{2} < 1.4143 .$$
Note that the foregoing process generates a succession of intervals of lengths $10^{-1}, 10^{-2}, 10^{-3}, \ldots$, each contained in the preceding and each containing the point $x$. This is an example of what is known as a sequence of _nested intervals_, a concept that is sometimes used as a basis for constructing the irrational numbers from the rational numbers.

Since we shall do very little with decimals in this book, we shall not develop their properties in any further detail except to mention how decimal expansions may be defined analytically with the help of the least-upper-bound axiom.

If $x$ is a given positive real number, let $a_0$ denote the largest integer $\le x$. Having chosen $a_0$, we let $a_1$ denote the largest integer such that
$$a_0 + \frac{a_1}{10} \le x .$$

More generally, having chosen $a_0 , a_1 , \ldots , a_{n-1}$, we let $a_n$ denote the largest integer such that,
$$a_0 + \frac{a_1}{10} + \frac{a_2}{10^2} + \cdots + \frac{a_n}{10^n} \le x .$$

Let $S$ denote the set of all numbers,
$$a_0 + \frac{a_1}{10} + \frac{a_2}{10^2} + \cdots + \frac{a_n}{10^n}$$
obtained in this way for $n = 0, 1, 2, \ldots$. Then $S$ is nonempty and bounded above, and it is easy to verify that $x$ is actually the least upper bound of $S$. The integers $a_0 , a_1 , a_2 , \ldots$ so obtained may be used to define a decimal expansion of $x$ if we write
$$x = a_0.a_1a_2a_3 \cdots$$
to mean that the $n$th digit $a_n$ is the largest integer satisfying 1.17. For example, if $x = \frac{1}{8}$, we find $a_0 = 0, a_1 = 1, a_2 = 2, a_3 = 5$, and $a_n = 0$ for all $n \ge 4$. Therefore we may write
$$\frac{1}{8} = 0.125000\cdots.$$

If in 1.17 we replace the inequality sign $\le$ by $<$, we obtain a slightly different definition of decimal expansions. The least upper bound of all numbers of the form is again $x$, although the integers $a_0 , a_1 , a_2 , \ldots$ need not be the same as those which satisfy the form previously demonstrated. For example, if this second definition is applied to $x = \frac{1}{8}$, we find $a_0 = 0, a_1 = 1, a_2 = 2, a_3 = 4$, and $a_n = 9$ for all $n \ge 4$. This leads to the infinite decimal representation
$$\frac{1}{8} = 0.124999\cdots.$$

The fact that a real number might have two different decimal representations is merely a reflection of the fact that two different sets of real numbers can have the same supremum.

### Part 4: Mathematical Induction, Summation Notation, and Related Topics

#### An Example of a Proof by Mathematical Induction

There is no _largest integer_ because when we add 1 to an integer $k$, we obtain $k+1$, which is larger than $k$. Nevertheless, starting with the number 1, we can reach any positive integer whatever in a finite number of steps, passing successively from $k$ to $k+1$ at each step. This is the basis for a type of reasoning that mathematicians call **proof by induction**.

We shall illustrate the use of this method by proving the pair of inequalities used in the previous section discussing the computation of the area of a parabolic segment, namely:

$$
1^2 + 2^2 + \cdots + (n-1)^2 < \frac{n^3}{3} < 1^2 + 2^2 + \cdots + n^2.
$$

Consider the leftmost inequality first, and let us refer to this formula as $A(n)$ (an assertion involving $n$). It is easy to verify this assertion directly for the first few values of $n$. Thus, for example, when $n$ takes the values $1$, $2$, and $3$, the assertion becomes

$$A(1): 0 < \frac{1^3}{3}, \quad A(2): 1^2 < \frac{2^3}{3}, \quad A(3): 1^2 + 2^2 < \frac{3^3}{3}$$
provided we agree to interpret the sum on the left as $0$ when $n=1$. 

Our object is to prove that $A(n)$ is true for every positive integer $n$. The procedure is as follows: Assume the assertion has been proved for a particular value of $n$, say for $n=k$. That is, assume we have proved

$$
A(k): 1^2 + 2^2 + \cdots + (k-1)^2 < \frac{k^3}{3}.
$$

Now using this, we shall deduce the corresponding result for $k+1$:

$$
A(k+1): 1^2 + 2^2 + \cdots + k^2 < \frac{(k+1)^3}{3}.
$$

Start with $A(k)$ and add $k^2$ to both sides. This gives the inequality

$$
1^2 + 2^2 + \cdots + k^2 < \frac{k^3}{3} + k^2.
$$

To obtain $A(k+1)$ as a consequence of this, it suffices to show that

$$
\frac{k^3}{3} + k^2 < \frac{(k+1)^3}{3}.
$$

But this follows at once from the equation,

$$
\frac{(k+1)^3}{3} = \frac{k^3}{3} + k^2 + k + \frac{1}{3}.
$$

Therefore we have shown that $A(k+1)$ follows from $A(k)$. Now, since $A(1)$ has been verified directly, we conclude that $A(2)$ is also true. Knowing that $A(2)$ is true, we conclude that $A(3)$ is true, and so on. Since every integer can be reached in this way, $A(n)$ is true for all positive integers $n$.

The rightmost inequality can be proved in the same way.

#### The Principle of Mathematical Induction

It serves to be explicit about the importance of understanding the pattern of the foregoing proof. First we proved the assertion $A(n)$ for $n=1$. Next we showed that if the assertion is true for a particular integer, then it is also true for the next integer. From this, we concluded that the assertion is true for all positive integers.

The idea of induction may be illustrated in many non-mathematical ways. For example, imagine a row of toy soldiers, numbered consecutively, and suppose they are so arranged that if any one of them falls, say the one labeled $k$, it will knock over the next one, labeled $k+1$. Then anyone can visualize what would happen if soldier number $1$ were toppled backward. It is also clear that if a later soldier were knocked over first, say the one labeled $n_1$, then all soldiers behind him would fall. This illustrates a slight generalization of the method of induction which can be described in the following way.

**Method of proof by induction.** Let $A(n)$ be an assertion involving an integer $n$. We conclude that $A(n)$ is true for every $n \geq n_1$ if we can perform the following two steps:

- Prove that $A(n_1)$ is true.  

- Let $k$ be an arbitrary but fixed integer $\geq n_1$. Assume that $A(k)$ is true and prove that $A(k+1)$ is also true.  

In actual practice $n_1$ is usually $1$. The logical justification for this method of proof is the following theorem about real numbers.

_**Theorem: $1-36$:** Principle of Mathematical Induction. Let $S$ be a set of positive integers which has the following two properties:_  

1. _The number 1 is in the set $S$._  

2. _If an integer $k$ is in $S$, then so is $k+1$._  

_Then every positive integer is in the set $S$._

_Proof:_  

Properties $1$ and $2$ tell us that $S$ is an inductive set. But the positive integers were defined to be exactly those real numbers which belong to every inductive set. Therefore $S$ contains every positive integer.

Whenever we carry out a proof of an assertion $A(n)$ for all $n \geq 1$ by mathematical induction, we are applying Theorem $1-36$ to the set $S$ of all the integers for which the assertion is true. If we want to prove that $A(n)$ is true only for all $n \geq n_1$, we apply the theorem to the set of $n$ for which $A(n+n_1-1)$ is true.

#### The Well-Ordering Principle

There is another important property of the positive integers, called the well-ordering principle, that is also used as a basis for proofs by induction. It can be stated as follows.

_**Theorem: $1-37$: Well-Ordering Principle.** Every nonempty set of positive integers contains a smallest member._

Note that the well-ordering principle refers to sets of positive integers. The theorem is not true for arbitrary sets of integers. For example, the set of all integers has no smallest member.

The well-ordering principle can be deduced from the principle of induction. We conclude this section with an example showing how the well-ordering principle can be used to prove theorems about positive integers.

Let $A(n)$ denote the following assertion:

$$
A(n): 1^2 + 2^2 + \cdots + n^2 = \frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6}.
$$

Again, we note that $A(1)$ is true, since

$$
1^2 = \frac{1^3}{3} + \frac{1^2}{2} + \frac{1}{6}.
$$

Now there are only two possibilities. We have either  

1. $A(n)$ is true for every positive integer $n$, or  

2. there is at least one positive integer $n$ for which $A(n)$ is false.

We shall prove that alternative ($2$) leads to a contradiction. Assume ($2$) holds. Then by the well-ordering principle, there must be a smallest positive integer, say $k$, for which $A(k)$ is false. (We apply the well-ordering principle to the set of all positive integers $n$ for which $A(n)$ is false. Statement ($2$) says that this set is nonempty.) This $k$ must be greater than $1$, because we have verified that $A(1)$ is true. Also, the assertion must be true for $k-1$, since $k$ was the smallest integer for which $A(k)$ is false; therefore we may write

$$
A(k-1): 1^2 + 2^2 + \cdots + (k-1)^2 = \frac{(k-1)^3}{3} + \frac{(k-1)^2}{2} + \frac{k-1}{6}.
$$

Adding $k^2$ to both sides and simplifying the right-hand side, we find

$$
1^2 + 2^2 + \cdots + k^2 = \frac{k^3}{3} + \frac{k^2}{2} + \frac{k}{6}.
$$

But this equation states that $A(k)$ is true; therefore we have a contradiction, because $k$ is an integer for which $A(k)$ is false. In other words, statement ($2$) leads to a contradiction. Therefore ($1$) holds, and this proves that the identity in question is valid for all values of $n \geq 1$. 

A proof like this which makes use of the well-ordering principle is also referred to as a proof by induction. Of course, the proof by induction described above begins with the validity of $A(1)$ and then passes from $A(k)$ to $A(k+1)$.

#### Selected Exercises

##### Ex-1 

_Prove the following formulas by induction:_

1. $1 + 2 + 3 + \cdots + n = n(n + 1)/2$.

_Proof:_

- For the base case $n = 1$, the identity holds. $1(1 + 1)/2 \implies 2/2 \implies 1$.
- For the inductive case, we assume it holds for some arbitrary $k >= 1$ and show that it holds for $k + 1$,
$$\sum_{i = 1}^{k} i = \dfrac{k(k + 1)}{2} \quad \textrm{(Induction Hypothesis)}$$
- Then for $k + 1$, we need to show that,
$$\sum_{i = 1}^{k + 1} i = \dfrac{(k + 1)(k + 2)}{2}$$
- Working with the left-hand side,

$$
\begin{align*}
\sum_{i = 1}^{k + 1} i &= \sum_{i = 1}^{k} i + (k + 1) \\ \\[0.1pt]
&\implies \dfrac{k(k + 1)}{2} + (k + 1) \\ \\[0.1pt]
&\implies \dfrac{(k + 1)(k + 2)}{2}  
\end{align*}
$$
matching the right-hand side. Hence, holding for all $n$. $\blacksquare$

2. $1 + 3 + 5 + \cdots + (2n - 1) = n^2$

_Proof:_

- The base case holds, $n^2 = 1^2 = 1$.

- For the inductive case, we assume it holds for some $k$, and show that it must hold for $k + 1$,

$$\sum_{n = 1}^{k + 1} (2n - 1) = (k + 1)^2$$ 
- Working with the left-hand side,

$$
\begin{align*}
\sum_{n = 1}^{k + 1} (2n - 1) &= \sum_{n = 1}^{k} (2n - 1) + (2(k + 1) - 1) \\ \\[0.1pt]
&\implies k^2 + 2k + 1 \\ \\[0.1pt]
&\implies (k + 1)^2
\end{align*}
$$
matching the right-hand side. Hence, holding for all $n$. $\blacksquare$

3. $1^3 + 2^3 + 3^3 + \cdots + n^3 = (1 + 2 + 3 + \cdots + n)^2$

_Proof:_

- The base case $n = 1$ holds, $1^3 = 1^2 = 1$.

- For the inductive case, we assume that the identity holds for some $k$, and show that it must hold for $k + 1$,

$$
\begin{align*}
\sum_{n = 1}^{k + 1} n^3 &= \left(\sum_{n = 1}^{k + 1} n \right)^2 \implies \left(\dfrac{(k + 1)(k + 2)}{2}\right)^2 \implies \dfrac{(k + 1)^2 (k + 2)^2}{4}
\end{align*}
$$

- Working with the left-hand side,

$$
\begin{align*}
\sum_{n = 1}^{k + 1} n^3 &\implies \sum_{n = 1}^{k} n^3 + (k + 1)^3 \\ \\[0.1pt]
&\implies \left(\sum_{n = 1}^{k} n \right)^2 + (k + 1)^3 \\ \\[0.1pt]
&\implies \left(\dfrac{k(k + 1)}{2} \right)^2 + (k + 1)^3 \\ \\[0.1pt]
&\implies \left(\dfrac{k^2(k + 1)^2}{4}\right) + (k + 1)^3 \\ \\[0.1pt]
&\implies \left(k + 1\right)^2 \left(\dfrac{k^2}{4} + (k + 1)\right) \\ \\[0.1pt]
&\implies \left(k + 1\right)^2 \left(\dfrac{k^2 + 4k + 4}{4}\right) \\ \\[0.1pt]
&\implies \dfrac{(k + 1)^2 (k + 2)^2}{4}
\end{align*}
$$
which matches the right-hand side. Hence, proved. $\blacksquare$ 

4. $1^3 + 2^3 + \cdots + (n - 1)^3 < n^4/4 < 1^3 + 2^3 + \cdots + n^3$

_Proof:_

- The base case $n = 1$ trivially holds. $0 < 1/4 < 1$.

- Now, we assume that the inequalities hold for some $n$ and show that it must hold for $n + 1$. Splitting the inequalities, we work on one at a time.

- With the left-most inequality we need to show that,
$$\sum_{i = 1}^{n} i^3 < \dfrac{(n + 1)^4}{4}$$
- Working with the left-hand side using the induction hypothesis,

$$
\begin{align*}
\sum_{i = 1}^{n} i^3 &= \sum_{i = 1}^{n - 1} i^3 + n^3 \\ \\[0.1pt]
&\implies \sum_{i = 1}^{n - 1} i^3 + n^3 < \dfrac{n^4}{4} + n^3 \\ \\[0.1pt]
&\implies \sum_{i = 1}^{n} i^3 < \dfrac{n^4}{4} + n^3 \\ \\[0.1pt]
\end{align*}
$$
- Now we have the two inequalities to compare, and it is relatively easy to simplify and deduce,
$$\dfrac{n^4}{4} + n^3 \lt \dfrac{(n + 1)^4}{4}$$
- Hence,

$$\sum_{i = 1}^{n} i^3 \lt \dfrac{(n + 1)^4}{4}$$
- We can prove the right-most inequality by identical reasoning. Hence, proved. $\blacksquare$

##### Ex-2

_Note that,_

$$
\begin{align*}
1 &= 1 \\ \\[0.1pt]
1 - 4 &= -(1 + 2), \\ \\[0.1pt]
1 - 4 + 9 &= 1 + 2 + 3, \\ \\[0.1pt]
1 - 4 + 9 - 16 &= -(1 + 2 + 3 + 4)
\end{align*}
$$
_Guess the general law suggested and prove it by induction._

_Proof:_

- We can guess the general law,

$$\sum_{i = 1}^{n} (-1)^{i + 1} i^2 = \left(-1\right)^{n + 1}\left(\sum_{i = 1}^{n} i\right)$$

- The base case $n = 1$ holds, $(-1^{1 + 1} 1^2 = (-1)^{1 + 1} 1) \implies 1 = 1$.

- For the inductive case, we assume the identity holds for some $n$, and show that it must hold for $n + 1$,

$$\sum_{i = 1}^{n + 1} (-1)^{i + 1} i^2 = \left(-1\right)^{n + 2}\left(\sum_{i = 1}^{n + 1} i\right)$$ 
- Working with the left-hand side,

$$
\begin{align*}
\sum_{i = 1}^{n + 1} (-1)^{i + 1} i^2 &= \left(\sum_{i = 1}^{n} (-1)^{i + 1} i^2\right) + (-1)^{n + 2} (n + 1)^2 \\ \\[0.1pt]
&\implies \left(-1\right)^{n + 1}\left(\sum_{i = 1}^{n} i\right) + (-1)^{n + 2} (n + 1)^2 \\ \\[0.1pt]
&\implies \left(-1\right)^{n + 1} \left[\left(\sum_{i = 1}^{n} i \right) - (n + 1)^2\right] \\ \\[0.1pt]
&\implies \left(-1\right)^{n + 1} \left[\left(\dfrac{n(n + 1)}{2}\right) - (n + 1)^2\right] \\ \\[0.1pt]
&\implies \left(-1\right)^{n + 1} \left[(n + 1)\left(\left(\dfrac{n}{2}\right) - (n + 1)\right)\right] \\ \\[0.1pt]
&\implies \left(-1\right)^{n + 1} \left[(n + 1)\left(\dfrac{-n - 2}{2}\right)\right] \\ \\[0.1pt]
&\implies \left(-1\right)^{n + 2} \left(\dfrac{(n + 1) (n + 2)}{2}\right) \\ \\[0.1pt]
&\implies \left(-1\right)^{n + 2}\left(\sum_{i = 1}^{n + 1} i\right)
\end{align*}
$$
and this matches the right-hand side. Hence, proved. $\blacksquare$

##### Ex-3

_Note that,_

$$
\begin{align*}
1 + \dfrac{1}{2} &= 2 - \dfrac{1}{2} \\ \\[0.1pt]
1 + \dfrac{1}{2} + \dfrac{1}{4} &= 2 - \dfrac{1}{4} \\ \\[0.1pt]
1 + \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} &= 2 - \dfrac{1}{8}
\end{align*}
$$
_Guess the general law suggested and prove it by induction._

_Proof:_

- The general law is of the form,

$$1 + \sum_{i = 1}^{n} \dfrac{1}{2^i} = 2 - \dfrac{1}{2^n}$$
- The base case $n = 1$ holds,
$$1 + \dfrac{1}{2^1} = 2 - \dfrac{1}{2^1} \implies \dfrac{3}{2}$$
- Now by the induction hypothesis we assume the $n$ case, and show that the $n + 1$ case holds. We need to show that,
$$1 + \sum_{i = 1}^{n + 1} \dfrac{1}{2^{i}} = 2 - \dfrac{1}{2^{n + 1}}$$
- Working with the left-hand side,

$$
\begin{align*}
&= 1 + \sum_{i = 1}^{n}\dfrac{1}{2^i} + \dfrac{1}{2^{n + 1}} \\ \\[0.1pt]
&\implies \left(2 - \dfrac{1}{2^n}\right) + \dfrac{1}{2^{n + 1}} \\ \\[0.1pt]
&\implies 2 - \dfrac{1}{2^n} + \dfrac{1}{2^{1}2^{n}} \\ \\[0.1pt]
&\implies 2− \dfrac{1}{2^{n+1}}
\end{align*}
$$
This matches the right-hand side. Hence, proved. $\blacksquare$

##### Ex-8

_Given positive real numbers $a_1, a_2, \cdots, a_n$ such that $a_n \lt ca_{n - 1}$ for all $n \gt 2$, where $c$ is a fixed positive number, use induction to prove that $a_n \leq a_1c^{n - 1}$ for all $n \geq 1$._

_Proof:_

- The base case $n = 1$ holds as $(a_n = a_1) \implies a_1 \leq a_1$.

- Now we assume the $n$ case, and show the $n + 1$ case,
$$a_{n + 1} \leq a_1c^{n}$$

- Working with the first inequality, we add $1$ to $n$,
$$a_{n + 1} \lt ca_{n}$$

- Substituting our hypothesis back,

$$
\begin{align*}
a_{n + 1} &\lt c (a_1 c^{n - 1}) \\ \\[0.1pt]
&\implies a_1 c^{n}
\end{align*}
$$
This matches the right-hand side of our $n + 1$ case. Hence, proved. $\blacksquare$ 

##### Ex-9

_Prove the following statement by induction: If a line of unit length is given, then a line of length $\sqrt{n}$ can be constructed with straightedge and compass for each positive integer n._

_Proof:_

- Suppose we have two tools at our disposal. A unit length, and a line of length $n$.

- The base case $n = 1$ trivially holds as $\sqrt{1} = 1$. For the inductive case, we show that a line of length $\sqrt{n}$ is constructible, by showing that a line of length $\sqrt{n + 1}$ is.

- We can construct a line of length $n$, match it with a perpendicular line of length $1$, giving us a hypotenuse of $\sqrt{n + 1}$ by the Pythagorean Theorem.

- Hence $\sqrt{n}$ is constructible. $\blacksquare$

##### Ex-10

_For every integer $n \geq 0$, there exist nonnegative integers $q$ and $r$ such that,_
$$n = qb + r, \quad 0 \leq r \lt b$$
_Proof:_

- For the base case $n = 0$, $q = r = 0$ and the identity holds.

- For the inductive case, we assume the identity holds for $n$ and show that it holds for $n + 1$,
$$n + 1 = q'b + r', \quad 0 \leq r' \lt b$$
- Working with the hypothesis and adding $1$ to both sides,
$$n + 1 = qb + r + 1$$

- Now, $r + 1$ is either less or equal to $b$, if the former, then the equation holds,

$$n + 1 = qb + (r + 1), \quad r' \coloneqq r + 1$$
- If $r + 1 = b$, the remainder overflows and we reset $r'$ and increment $q$,
$$n + 1 = (q + 1)b + 0$$
- Since both cases satisfy our conditions, the identity holds for all $n$. $\blacksquare$

#### Proof of the Well-Ordering Principle

Let $T$ be a nonempty collection of positive integers. We want to prove that $T$ has a smallest member, that is, that there is a positive integer $t_0$ in $T$ such that $t_0 \leq t$ for all $t \in T$.

Suppose $T$ has no smallest member. We shall show that this leads to a contradiction. The integer $1$ cannot be in $T$ (otherwise it would be the smallest member of $T$). Let $S$ denote the collection of all positive integers $n$ such that $n < t$ for all $t \in T$. Now $1$ is in $S$ because $1 < t$ for all $t \in T$.

Next, let $k$ be a positive integer in $S$. Then $k < t$ for all $t \in T$. We shall prove that $k + 1$ is also in $S$. If this were not so, then for some $t_1$ in $T$ we would have $t_1 \leq k + 1$. Since $T$ has no smallest member, there is an integer $t_2$ in $T$ such that $t_2 < t_1$, and hence $t_2 < k + 1$. But this means that $t_2 \leq k$, contradicting the fact that $k < t$ for all $t \in T$. Therefore $k + 1$ is in $S$.

By the induction principle, $S$ contains all positive integers. Since $T$ is nonempty, there is a positive integer $t$ in $T$. But this $t$ must also be in $S$ (since $S$ contains all positive integers). It follows from the definition of $S$ that $t < t$, which is a contradiction.

Therefore, the assumption that $T$ has no smallest member leads to a contradiction. It follows that $T$ must have a smallest member, and in turn, this proves that the well-ordering principle is a consequence of the principle of induction.

#### Absolute Values and the Triangle Inequality

Calculations with inequalities arise quite frequently in calculus. They are of particular importance in dealing with the notion of absolute value. If $x$ is a real number, the absolute value of $x$ is a nonnegative real number denoted by $|x|$ and defined as follows:

$$
|x| =
\begin{cases} 
x & \text{if } x \geq 0, \\
-x & \text{if } x < 0.
\end{cases}
$$

Note that $-|x| \leq x \leq |x|$. When real numbers are represented geometrically on a real axis, the number $|x|$ is called the distance of $x$ from $0$. If $a > 0$ and if a point $x$ lies between $-a$ and $a$, then $|x|$ is nearer to $0$ than $a$ is. The analytic statement of this fact is given by the following theorem.

_**Theorem $1-38$:** If $a > 0$, then $|x| \leq a$ if and only if $-a \leq x \leq a$._  

_Proof_ 

- There are two statements to prove: first, that the inequality $|x| \leq a$ implies the two inequalities $-a \leq x \leq a$ and, conversely, that $-a \leq x \leq a$ implies $|x| \leq a$.

- Suppose $|x| \leq a$. Then we also have $-a \leq -|x|$. But either $x = |x|$ or $x = -|x|$, and hence $-a \leq -|x| \leq x \leq |x| \leq a$. This proves the first statement.

- To prove the converse, assume $-a \leq x \leq a$. Then if $x \geq 0$, we have $|x| = x \leq a$, whereas if $x < 0$, we have $|x| = -x \leq a$. In either case, we have $|x| \leq a$, and this completes the proof.

_As a consequence of Theorem $1-38$, it is easy to derive an important inequality which states that the absolute value of a sum of two real numbers cannot exceed the sum of their absolute values._

_**Theorem $1-39$**: For arbitrary real numbers $x$ and $y$, we have $|x + y| \leq |x| + |y|$._  

_Note: This property is called the triangle inequality, because when it is generalized to vectors it states that the length of any side of a triangle is less than or equal to the sum of the lengths of the other two sides._

_Proof:_ 

- Adding the inequalities $-|x| \leq x \leq |x|$ and $-|y| \leq y \leq |y|$, we obtain:

$$
-(|x| + |y|) \leq x + y \leq |x| + |y|,
$$
and hence, by Theorem $1-38$, we conclude that $|x + y| \leq |x| + |y|$. If we take $x = a - c$ and $y = c - b$, then $x + y = a - b$ and the triangle inequality becomes:

$$
|a - b| \leq |a - c| + |b - c|.
$$

This form of the triangle inequality is often used in practice. Using mathematical induction, we may extend the triangle inequality as follows:

_**Theorem $1-40$:** For arbitrary real numbers $a_1, a_2, \dots, a_n$, we have $\left|\sum_{k=1}^n a_k \right| \leq \sum_{k=1}^n |a_k|$._  

_Proof:_ 

- When $n = 1$, the inequality is trivial, and when $n = 2$, it is the triangle inequality. Assume, then, that it is true for $n$ real numbers. Then for $n + 1$ real numbers $a_1, a_2, \dots, a_{n+1}$, we have:

$$
\left|\sum_{k=1}^{n+1} a_k\right| = \left|\sum_{k=1}^n a_k + a_{n+1}\right| \leq \left|\sum_{k=1}^n a_k\right| + |a_{n+1}| \leq \sum_{k=1}^n |a_k| + |a_{n+1}| = \sum_{k=1}^{n+1} |a_k|.
$$

- Hence the theorem is true for $n + 1$ numbers if it is true for $n$. By induction, it is true for every positive integer $n$.

_The next theorem describes an important inequality that we shall use later in connection with our study of vector algebra._

_**Theorem $1-41$:** The Cauchy-Schwarz Inequality. If $a_1, \dots, a_n$ and $b_1, \dots, b_n$ are arbitrary real numbers, we have:_

$$
\left(\sum_{k=1}^n a_k b_k\right)^2 \leq \left(\sum_{k=1}^n a_k^2\right)\left(\sum_{k=1}^n b_k^2\right).
$$
_The equality sign holds if and only if there is a real number $x$ such that $a_k x + b_k = 0$ for each $k = 1, 2, \dots, n$._

_Proof:_ 

- We have $\sum_{k=1}^n (a_k x + b_k)^2 \geq 0$ for every real $x$ because a sum of squares can never be negative. This may be written in the form:

$$
Ax^2 + 2Bx + C \geq 0,
$$
where:

$$
A = \sum_{k=1}^n a_k^2, \quad B = \sum_{k=1}^n a_k b_k, \quad C = \sum_{k=1}^n b_k^2.
$$
We wish to prove that $B^2 \leq AC$. If $A = 0$, then each $a_k = 0$, so $B = 0$ and the result is trivial. If $A \neq 0$, we may complete the square and write:

$$
Ax^2 + 2Bx + C = A\left(x + \frac{B}{A}\right)^2 + \frac{AC - B^2}{A}.
$$
The right side has its smallest value when $x = -B/A$. Putting $x = -B/A$, we obtain $B^2 \leq AC$.

