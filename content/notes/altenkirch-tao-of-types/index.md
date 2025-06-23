---
title: "The Tao of Types"
description: "My notes on Thorsten's book on type theory."
date: 2025-04-17
status: studying
subjects: ["Mathematics", "Computer Science"] 
categories: ["Academic Textbook"]
tags: ["Algebra", "Abstract Algebra", "Type", "Rings", "Groups", "Fields", "Theory", "Thorsten", "Altenkirch", "Curry", "Howard", "Equivalence", "Intuitionistic", "Logic", "Constructive", "Axiomatic"]
bookAuthor: "Thorsten Altenkirch"
---

## Simple Types

░░░░ exploring dependent ░░░░ with all ░░░░ beautiful complexities we'll take a look at ░░░░ simpler, appropriately ░░░░ _simple types_░░░░ starting with ░░░░ most fundamental ░░░░ of all, the ░░░░ ░░░░ $\_\to\_$░░░░ One ░░░░ ░░░░ simple ░░░░ is ░░░░ ░░░░ ░░░░ ░░░░ clear what ░░░░ ░░░░ with. We'll ░░░░ ░░░░ with ░░░░ which ░░░░ for any type, called $\textsf{Set}$ ░░░░ Agda. That is, ░░░░ will ░░░░ _polymorphic_ constructions without introducing a formal ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ will ░░░░ ░░░░ ░░░░ we ░░░░ dependent ░░░░ in our arsenal. ░░░░ of ░░░░ constructions ░░░░ identity $\textsf{id}$ ░░░░ composition $\_ \circ \_$ ░░░░ ░░░░ ░░░░ a first taste of ░░░░ theory.

We will have ░░░░ ░░░░ look ░░░░ $\lambda$-calculus, by which ░░░░ specifically ░░░░ _typed_ $\lambda$-calculus and ░░░░ explore combinatory logic with two ░░░░ ($\textsf{S}$ ░░░░ $\textsf{K}$), ░░░░ the price to pay ░░░░ ░░░░ ░░░░ unreadable ░░░░ ░░░░ ░░░░ worthwhile to ░░░░ about them and we ░░░░ ░░░░ ░░░░ later ░░░░ ░░░░

Functions are ░░░░ all ░░░░ ░░░░ ░░░░ ░░░░ types ░░░░ hence ░░░░ will ░░░░ look ░░░░ ░░░░ ($\_ \uplus  \_$░░░░ ░░░░ ░░░░ ░░░░$\_ \times \_$). ░░░░ ░░░░ will meet some ░░░░ ░░░░ from high school in ░░░░ type-theoretical ░░░░

### Functions

░░░░ Type ░░░░ ░░░░ ░░░░ a fundamental concept. ░░░░ is ░░░░ from set theory ░░░░ functions are viewed as ░░░░ ░░░░ kind of ░░░░ namely relations ░░░░ assign ░░░░ each element of the domain, exactly one element of the codomain ░░░░ output). ░░░░ ░░░░ Theory, ░░░░ is the ░░░░ way ░░░░ ░░░░ start with ░░░░ ░░░░ actually we need ░░░░ to ░░░░ ░░░░ relations ░░░░ ░░░░ relation between $A$ and $B$ ░░░░ a ░░░░ ░░░░ $A$ ░░░░ $B$ ░░░░ the type of ░░░░ 

Intuitively a function between types $\textsf{A}$ ░░░░ $\textsf{B}$ is ░░░░ black box ░░░░ ░░░░ can input ░░░░ of $\textsf{a} : \textsf{A}$ and out ░░░░ elements of $\textsf{f} \ \textsf{a} : \textsf{B}$. ░░░░ that we don't write $f(a)$ ░░░░ ░░░░ in ░░░░ ░░░░ ░░░░ ░░░░ programming languages but ░░░░ save ░░░░ ░░░░ just ░░░░ $\textsf{f} \ \textsf{a}$░░░░ as in ░░░░ programming ░░░░ like Haskell. ░░░░ write $\textsf{f} : \textsf{A} \to \textsf{B}$ ░░░░ ░░░░ ░░░░ $\textsf{f}$ ░░░░ such ░░░░ function.

When we say a _black box_░░░░ ░░░░ mean ░░░░ ░░░░ ░░░░ is, ░░░░ ░░░░ peak into this ░░░░ If ░░░░ ░░░░ us a ░░░░ ░░░░ we can ░░░░ ░░░░ feed ░░░░ input ░░░░ ░░░░ ░░░░ output. ░░░░ ░░░░ ░░░░ way to explore ░░░░ mechanism (sort of a ░░░░ ░░░░ functions). 

░░░░ ░░░░ ░░░░ ░░░░ examples! For the ░░░░ of ░░░░ ░░░░ will use ░░░░ ░░░░ ░░░░ ░░░░ natural ░░░░ $\N = {0, 1, 2, 3, \dots}$ and ░░░░ ░░░░ $\textsf{Bool} = \{\textsf{true}, \textsf{false}\}$ even ░░░░ ░░░░ ░░░░ only ░░░░ ░░░░ later. ░░░░ ░░░░ ░░░░ function which adds $2$ to ░░░░ ░░░░ 

$$
\begin{aligned}
	&\textsf{add2} : \N \to \N \\
    &\textsf{add2} \ \textsf{x} = \textsf{x + 2}
\end{aligned}
$$

To ░░░░ $\textsf{add2}$ we introduce ░░░░ parameter $\textsf{x}$░░░░ Now ░░░░ ░░░░ apply $\textsf{add2}$ ░░░░ a ░░░░ ░░░░ ░░░░ $\textsf{3}$ ░░░░ observe $\textsf{add2 3}$ which is $\textsf{5}$. In ░░░░ first ░░░░ we ░░░░ the parameter $\textsf{x}$ ░░░░ the ░░░░ ░░░░ $\textsf{2}$ ░░░░ then ░░░░ ░░░░ ░░░░ ░░░░ about ░░░░ ░░░░ conclude. ░░░░ ░░░░ step, replacing the ░░░░ ░░░░ the argument, is called $\beta$-reduction.

The ░░░░ above combines ░░░░ ░░░░ ░░░░ ░░░░ function. ░░░░ we ░░░░ want ░░░░ ░░░░ a function ░░░░ ░░░░ it a ░░░░ we ░░░░ ░░░░ $\lambda$-abstraction. That ░░░░ ░░░░ could ░░░░ defined the same function as follows,

$$
\begin{aligned}
&\textsf{add2} : \N \to \N \\
&\textsf{add2} = \lambda \ \textsf{x} \to \textsf{x} + 2 
\end{aligned}
$$

We ░░░░ view ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ abbreviation ░░░░ the ░░░░ We ░░░░ now ░░░░ ░░░░ more detailed derivation ░░░░ ░░░░ differentiate ░░░░ unfolding of ░░░░ ░░░░ ░░░░ $\beta$-reduction.

$$
\begin{aligned}
\textsf{add2 3} &= (\lambda \ \textsf{x} \to \textsf{x} + \textsf{2}) \ \textsf{3} \quad &&\textrm{Unfolding the definition.} \\
				&= 3 + 2 \quad &&\textrm{$\beta$-reduction.} \\
                &= 5 \quad &&\textrm{Calculating the sum.}
\end{aligned}
$$
░░░░ $\lambda$░░░░ we ░░░░ only ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ To ░░░░ ░░░░ ░░░░ with several ░░░░ ░░░░ use _currying_, ░░░░ ░░░░ ░░░░ ░░░░ that returns a ░░░░

$$
\begin{aligned}
&\textsf{add} : \N \to (\N \to \N) \\
&\textsf{add} = \lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y})
\end{aligned}
$$

░░░░ $\textsf{add 3} : \N \to \N$ is the ░░░░ $\lambda \ \textsf{y} \to 3 + \textsf{y}$ that ░░░░ ░░░░ ░░░░ ░░░░ adds $\textsf{3}$░░░░ and $(\textsf{add 3}) \ 5$ ░░░░ to $5 + 3$ and ░░░░ $8$░░░░

There ░░░░ ░░░░ syntactic ░░░░ to simplify ░░░░ use of currying: $\to$ is _right-associative_░░░░ hence we can write $\N \to \N \to \N$ for $\N \to (\N \to \N)$ ░░░░ application is _left-associative_ hence ░░░░ can ░░░░ $\textsf{g 3 5}$ ░░░░ $(\textsf{g 3}) \ \textsf{5}$. ░░░░ ░░░░ can combine several $\lambda$░░░░ ░░░░ write $\lambda \ \textsf{x} \ \textsf{y} \to \textsf{x} + \textsf{y}$ for $\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y})$░░░░ ░░░░ the same ░░░░ applies ░░░░ the ░░░░ ░░░░ ░░░░ 

$$
\begin{aligned}
&\textsf{add} : \N \to \N \to \N \\
&\textsf{add} \ \textsf{x} \ \textsf{y} = \textsf{x + y}    
\end{aligned}
$$
Instead ░░░░ returning a ░░░░ we can also have functions that ░░░░ in ░░░░ ░░░░ as ░░░░ called _higher order functions_░░░░ ░░░░ example is,

$$
\begin{aligned}
&\textsf{k} : (\N \to \N) \to \N \\
&\textsf{k h} = \textsf{h 2} + \textsf{h 3} 
\end{aligned}
$$
░░░░ that ░░░░ ░░░░ ░░░░ the brackets in the ░░░░ type. $\textsf{k}$ is a function ░░░░ gets a ░░░░ ░░░░ the natural numbers ░░░░ ░░░░ and returns a ░░░░ What ░░░░ $\textsf{k add2}$░░░░ We can reason ░░░░ ░░░░

$$
\begin{aligned}
\textsf{k add2} &= \textsf{add2 2} + \textsf{add2 3} \\
				&= \textsf{(2 + 2) + (3 + 2)} \\
                &= \textsf{9}
\end{aligned}
$$

### Identity and Composition

Some ░░░░ work ░░░░ ░░░░ type, we ░░░░ ░░░░ _polymorphic_░░░░ ░░░░ example is the ░░░░ function $\textsf{id} : \textsf{A} \to \textsf{A}$ ░░░░ works for every type $\textsf{A} : \textsf{Set}$░░░░ ░░░░ Agda, we can write,

$$
\begin{aligned}
&\textsf{id} : \{\textsf{A} : \textsf{Set}\} \to \textsf{A} \to \textsf{A} \\
&\textsf{id x} = \textsf{x}
\end{aligned}
$$
Writing $\{\textsf{A} : \textsf{Set} \to \dots \}$ indicates ░░░░ ░░░░ ░░░░ ░░░░ for ░░░░ $\textsf{Set}$░░░░ ░░░░ will automatically ░░░░ $\textsf{A}$ ░░░░ is we can just write $\textsf{id 3} : \N$ ░░░░ Agda infers ░░░░ $\textsf{A} = \N$ in ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ it may be necessary ░░░░ instantiate ░░░░ ░░░░ variable ░░░░ in ░░░░ ░░░░ ░░░░ ░░░░ write $\textsf{id} \ \{\N\}$ or in case there are ░░░░ parameters but ░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ $\textsf{id} \ \{\textsf{A} = \N\}$.

We ░░░░ later ░░░░ ░░░░ like $\{\textsf{A} : \textsf{Set} \to \dots\}$ ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we view polymorphism as a ░░░░ ░░░░ ░░░░ we will ░░░░ $\textsf{A} \ \textsf{B} \ \textsf{C} : \textsf{Set}$ ░░░░ indicate ░░░░ types. ░░░░ Agda this ░░░░ ░░░░ ░░░░ by declaring the ░░░░ $\textsf{A}$░░░░ $\textsf{B}$, $\textsf{C}$ of the type $\textsf{Set}$░░░░

$$
\begin{aligned}
\textsf{A} \ \textsf{B} \ \textsf{C} : \textsf{Set}
\end{aligned}
$$
now, we can ░░░░

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} = \textsf{x}
\end{aligned}
$$
░░░░ Agda ░░░░ automatically translate ░░░░ ░░░░ ░░░░ $\{\textsf{A} : \textsf{Set} \} \to \textsf{A} \to \textsf{A}$. We ░░░░ draw ░░░░ picture for ░░░░ ░░░░ function which ░░░░ consists ░░░░ a ░░░░ ░░░░ ░░░░ ░░░░ to the output.

Another ░░░░ ░░░░ ░░░░ ░░░░ given $\textsf{g} : \textsf{A} \to \textsf{B}$ ░░░░ $\textsf{f} : \textsf{B} \to \textsf{C}$░░░░ ░░░░ can construct ░░░░ new function $\textsf{f} \circ \textsf{g} : \textsf{A} \to \textsf{C}$ which ░░░░ the ░░░░ of $\textsf{g}$ into ░░░░ ░░░░ of $\textsf{f}$. 

Composition can also be ░░░░ ░░░░ ░░░░ polymorphic function:

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&(\textsf{f} \circ \textsf{g}) \ \textsf{x} = \textsf{f} \ (\textsf{g} \ \textsf{x})
\end{aligned}
$$
░░░░ Agda, we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ more ░░░░ ░░░░ schemes) by using $\_$ ░░░░ indicate where ░░░░ ░░░░ go. The price ░░░░ ░░░░ for ░░░░ flexibility ░░░░ ░░░░ we ░░░░ to separate any syntactical component with ░░░░ e.e. Agda would ░░░░ $\textsf{f} \circ \textsf{g}$ as one ░░░░

░░░░ ░░░░ an ░░░░ Earlier ░░░░ define the function $\textsf{add2} : \N \to \N$, in ░░░░ ░░░░ ░░░░ as a squaring function,

$$
\begin{aligned}
&\textsf{square} : \N \to \N \\
&\textsf{square} \ \textsf{x} = \textsf{x} * \textsf{x}
\end{aligned}
$$
Now we can ░░░░ $\textsf{square} \circ \textsf{add2} : \N \to \N$░░░░ What is $(\textsf{square} \circ \textsf{add2}) \ \textsf{3}$?

$$
\begin{aligned}
(\textsf{square} \circ \textsf{add2}) \ 3 &= \textsf{square} \ (\textsf{add2 3}) \\
										  &= \textsf{square} \ (\textsf{3 + 2}) \\
                                          &= \textsf{square} \ \textsf{5} \\
                                          &= \textsf{5 * 5} \\
                                          &= \textsf{25}
\end{aligned}
$$
░░░░ corollary evident ░░░░ this example ░░░░ that ░░░░ ░░░░ ░░░░ not ░░░░ what ░░░░ $(\textsf{add2} \circ \textsf{square}) \ \textsf{3}$░░░░

$$
\begin{aligned}
(\textsf{add2} \circ \textsf{square}) \ 3 &= \textsf{add2} \ (\textsf{square 3}) \\
										  &= \textsf{add2} \ (\textsf{3 * 3}) \\
                                          &= \textsf{add2} \ 9 \\
                                          &= \textsf{2 + 9} \\
                                          &= \textsf{11}
\end{aligned}
$$
░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{square} \circ \textsf{add2}$ ░░░░ $\textsf{add2} \circ \textsf{square}$ are different functions. ░░░░ any ░░░░ it ░░░░ always ░░░░ ░░░░ turn around ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ function $\textsf{IsEven} : \N \to \textsf{Bool}$ ░░░░ ░░░░ $\textsf{true}$ ░░░░ ░░░░ ░░░░ is ░░░░ and $\textsf{false}$ ░░░░ Now ░░░░ ░░░░ form $\textsf{isEven} \circ \textsf{square} : \N \to \textsf{Bool}$ but it doesn't make sense to form $\textsf{square} \circ \textsf{isEven}$ ░░░░ ░░░░ ░░░░ of $\textsf{isEven}$ ░░░░ $\textsf{Bool}$ and ░░░░ doesn't match the ░░░░ of $\textsf{square}$ as ░░░░ $\N$░░░░ 

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ twist ░░░░ the order ░░░░ ░░░░ ░░░░ $\_ \circ \_$ which ░░░░ visible in ░░░░ ░░░░ $(\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C})$. Why is it not $(\textsf{A} \to \textsf{B}) \to (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{C})$? And indeed if we evaluate $\textsf{f} \circ \textsf{g}$ ░░░░ first ░░░░ $\textsf{g}$, then $\textsf{f}$░░░░ ░░░░ ░░░░ reason is ░░░░ function application ░░░░ ░░░░ ░░░░ ░░░░ _wrong way_ around, that ░░░░ ░░░░ we evaluate $\textsf{square} \ (\textsf{add2 3})$ we first ░░░░ $\textsf{add2 3}$ and then $\textsf{square 5}$░░░░ ░░░░ ░░░░ actually counterintuitive for ░░░░ who ░░░░ left ░░░░ ░░░░ 

### $\lambda$-calculus

As ░░░░ discussed, ░░░░ ░░░░ ░░░░ the explicit ░░░░ of a ░░░░ ░░░░

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&(\textsf{f} \circ \textsf{g}) \ \textsf{x} = \textsf{f} \ (\textsf{g x}) \\
\end{aligned}
$$
is ░░░░ ░░░░ for an ░░░░ ░░░░ using $\lambda$░░░░

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&\_ \circ \_  = \lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f} \ \textsf{(g x)}
\end{aligned}
$$
░░░░ since unfolding ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ mathematics ░░░░ ░░░░ we concentrate on what happens to $\lambda$-terms.

░░░░ we form ░░░░ $\lambda$-term we ░░░░ using variables. Hence beginners often ░░░░ _What is the type of a variable?_ The answer ░░░░ that ░░░░ assume that ░░░░ ░░░░ given a ░░░░ of any ░░░░ this is often ░░░░ the (_typing_░░░░ context. ░░░░ other cases are _application_ and $\lambda$-abstraction,

- **variable**: A ░░░░ $\textsf{x}$ has the ░░░░ ░░░░ ░░░░ assumed ░░░░ it in-context.
- **application**░░░░ ░░░░ ░░░░ term $\textsf{M} : \textsf{A} \to \textsf{B}$ and a term $\textsf{N} : \textsf{A}$, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{M N : B}$░░░░
░░░░ **abstraction**░░░░ Given ░░░░ ░░░░ $\textsf{x}$ ░░░░ from assuming $\textsf{x} : \textsf{A}$ ░░░░ ░░░░ ░░░░ that $\textsf{M : B}$░░░░ ░░░░ we we ░░░░ form $\lambda \ \textsf{x} \to \textsf{M} : \textsf{A} \to \textsf{B}$░░░░

░░░░ covers ░░░░ _pure_ $\lambda$░░░░ which ░░░░ ░░░░ constructions ░░░░ are specific to datatypes ░░░░ $\N$ and $\textsf{Bool}$ or standard in-context function types.

$\beta$-equality ░░░░ ░░░░ ░░░░ can reduce ░░░░ ░░░░ of a $\lambda$-abstraction ░░░░ ░░░░ ░░░░ by substituting the ░░░░ with ░░░░ argument, ░░░░ ░░░░

$$(\lambda \ \textsf{x} \to \textsf{M}) \ \textsf{N} = \textsf{M}[\textsf{x} \coloneqq \textsf{N}]$$

░░░░ $\textsf{M}[\textsf{x} \coloneqq \textsf{N}]$ ░░░░ $\textsf{M}$ ░░░░ all ░░░░ ░░░░ $\textsf{x}$ replaced by $\textsf{N}$.

Actually, ░░░░ is ░░░░ bit more complicated. We ░░░░ ░░░░ not ░░░░ to replace ░░░░ variables, ░░░░ ░░░░ $(\lambda \ \textsf{x} \to (\lambda \ \textsf{x} \to \textsf{x})) \ 3$ should just be $\lambda \ \textsf{x} \to \textsf{x}$ ░░░░ not $\lambda \ \textsf{x} \to \textsf{3}$░░░░ We ░░░░ ░░░░ by saying that $\textsf{M}[\textsf{x} \coloneqq \textsf{N}]$ is $\textsf{M}$ ░░░░ all _free_ ░░░░ of $\textsf{x}$ replaced ░░░░ $\textsf{N}$░░░░ An occurence ░░░░ free ░░░░ ░░░░

░░░░ are not done! ░░░░ $\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y})$ and let's say ░░░░ have ░░░░ ░░░░ $\textsf{y}$ lying ░░░░ ░░░░ is $(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y}) ) \ \textsf{y}$░░░░ If ░░░░ ░░░░ replace $\textsf{x}$ ░░░░ $\textsf{y}$░░░░ ░░░░ ░░░░ $\lambda \ \textsf{y} \to \textsf{y + y}$. This ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{y}$ represents the ░░░░ variable $\textsf{y}$ and not ░░░░ ░░░░ $\textsf{y}$░░░░ ░░░░ is called _variable capture_ ░░░░ ░░░░ ░░░░ avoided.

But ░░░░ ░░░░ is  $(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y}))\ \textsf{y}$?  

Here ░░░░ introduce ░░░░ equality, $\alpha$-equivalence, ░░░░ ░░░░ that ░░░░ variables can be consistently ░░░░ ░░░░ $\lambda \ \textsf{y} \to \textsf{x} + \textsf{y} = \lambda \ \textsf{z} \to \textsf{x} + \textsf{z}$░░░░  

Using this, ░░░░ can avoid capture by replacing the ░░░░ variable $\textsf{y}$ — ░░░░ ░░░░ That ░░░░$(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y})) = \lambda \ \textsf{x} \to \textsf{x} + \textsf{z}$. Note that any ░░░░ but $\textsf{y}$ would work ░░░░

There is yet ░░░░ ░░░░ $\eta$░░░░ ░░░░ ░░░░ motivated ░░░░ ░░░░ idea ░░░░ extensionality — ░░░░ ░░░░ functions which ░░░░ equal when ░░░░ to ░░░░ same argument should be ░░░░ equal.

░░░░ pure $\lambda$░░░░ this is ░░░░ by ░░░░ ░░░░ following ░░░░  

Assume $\textsf{M} : \textsf{A} \to \textsf{B}$░░░░ and given a variable $\textsf{x} : \textsf{A}$ which ░░░░ not ░░░░ ░░░░ ░░░░ $\textsf{M}$, then,

$$
\lambda \ \textsf{x} \to \textsf{M}\ \textsf{x} = \textsf{M}
$$
Reading it ░░░░ right ░░░░ ░░░░ ░░░░ ░░░░ that ░░░░ you want to ░░░░ that two ░░░░ $\textsf{M}$ ░░░░ $\textsf{N}$ ░░░░ equal, it is ░░░░ ░░░░ show ░░░░ $\textsf{M}\ \textsf{x} = \textsf{N}\ \textsf{x}$ ░░░░ $\textsf{x}$ is a variable ░░░░ ░░░░ not ░░░░ in $\textsf{M}$ or $\textsf{N}$ because,

$$
\begin{aligned}
\textsf{M} &= \lambda \ \textsf{x} \to \textsf{M}\ \textsf{x} \\
           &= \lambda \ \textsf{x} \to \textsf{N}\ \textsf{x} \\
           &= \textsf{N}
\end{aligned}
$$

░░░░ an example, we use $\eta$░░░░ to show ░░░░ $\textsf{f} \circ \textsf{id} = \textsf{f}$,

$$
\begin{aligned}
\textsf{f} \circ \textsf{id} &= \lambda \ \textsf{x} \to \textsf{f}\ (\textsf{id}\ \textsf{x}) \\
                             &= \lambda \ \textsf{x} \to \textsf{f}\ \textsf{x} \\
                             &= \textsf{f}
\end{aligned}
$$
### Combinatory Logic

░░░░ polymorphic ░░░░ from section 2.2, $\textsf{id}$ ░░░░ $\_ \circ \_$, ░░░░ ░░░░ called combinators. We are going to introduce ░░░░ ░░░░ in this ░░░░ called $\textsf{S}$ ░░░░ $\textsf{K}$░░░░ which are _functionally complete_. ░░░░ ░░░░ ░░░░ every ░░░░ ░░░░ we can write ░░░░ ░░░░ $\lambda$-calculus can ░░░░ ░░░░ just using these two combinators.  

░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ do ░░░░ refer to other datatypes (like $\mathbb{N}$ ░░░░ $\textsf{Bool}$░░░░ which ░░░░ require ░░░░ ░░░░ We ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ providing a ░░░░ from $\lambda$-terms into ░░░░ ░░░░ using combinators, ░░░░ means that we can eliminate all ░░░░ ░░░░ a way, ░░░░ are ░░░░ form of ░░░░ ░░░░ code ░░░░ they ░░░░ ░░░░ been used ░░░░ ░░░░

░░░░ ░░░░ with $\textsf{K}$░░░░ which ░░░░ constant functions,

$$
\begin{aligned}
&\textsf{K} : \textsf{A} \to \textsf{B} \to \textsf{A} \\
&\textsf{K} \ \textsf{x} \ \textsf{y} = \textsf{x}
\end{aligned}
$$

░░░░ for ░░░░ $\textsf{K} \ 2 : \textsf{B} \to \mathbb{N}$ is ░░░░ function ░░░░ ░░░░ ░░░░ return $2$. Note that this function ░░░░ still polymorphic, ░░░░ ░░░░ ░░░░ any ░░░░ $\textsf{B}$░░░░

░░░░ ░░░░ combinator ░░░░ $\textsf{S}$, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{A}$░░░░ $\textsf{B}$, $\textsf{C}$░░░░

$$
\begin{aligned}
&\textsf{S} : (\textsf{A} \to \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&\textsf{S} \ \textsf{f} \ \textsf{g} \ \textsf{x} = \textsf{f} \ \textsf{x} \ (\textsf{g} \ \textsf{x})
\end{aligned}
$$

$\textsf{S}$ ░░░░ similar to $\_ \circ \_$░░░░ ░░░░ ░░░░ first ░░░░ gets ░░░░ see ░░░░ only ░░░░ result of ░░░░ second but also ░░░░ ░░░░ input. So for ░░░░ $\textsf{S} \ (\lambda \ \textsf{x} \to \textsf{x} + \textsf{y}) \ (\lambda \ \textsf{x} \to 2 * \textsf{x})$ is the same as $\lambda \ \textsf{x} \to \textsf{x} + 2 * \textsf{x}$░░░░

░░░░ can ░░░░ $\textsf{id}$ ░░░░ is ░░░░ ░░░░ $\textsf{I}$ ░░░░ ░░░░ logic) ░░░░ $\textsf{S}$ and $\textsf{K}$. ░░░░ idea ░░░░ ░░░░ we can ░░░░ it from $\textsf{S}$ by replacing ░░░░ first ░░░░ $\textsf{f}$ with $\textsf{K}$, with this ░░░░ $\textsf{S} \ \textsf{K} = \lambda \ \textsf{g} \to \textsf{K} \ (\textsf{g} \ \textsf{x}) = \lambda \ \textsf{g} \to \textsf{x}$. To get the ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{g}$ ░░░░ any ░░░░ The ░░░░ ░░░░ is $\textsf{K}$░░░░ ░░░░ ░░░░ can form $\textsf{S} \ \textsf{K} \ \textsf{K} = \textsf{I}$. ░░░░ might seem like ░░░░ bit of a technical ░░░░ given a ░░░░ $\textsf{A}$ ░░░░ would ░░░░ to ░░░░

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} = \textsf{S K K}
\end{aligned}
$$
Actually Agda ░░░░ going to ░░░░ ░░░░ it cannot ░░░░ the ░░░░ $\textsf{B}$ ░░░░ ░░░░ 2nd $\textsf{K}$ ░░░░ indeed we can use any ░░░░ ░░░░ The simplest ░░░░ is $\textsf{A}$ and ░░░░ ░░░░ ░░░░ tell Agda ░░░░ explicitly,

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} \ \{\textsf{A}\} = \textsf{S K} \ (\textsf{K} \ \{ \textsf{B} = \textsf{A} \})
\end{aligned}
$$
░░░░ will now show ░░░░ every pure lambda ░░░░ ░░░░ be ░░░░ into combinatory logic.  
░░░░ will do this informally — we will ░░░░ use ░░░░ ░░░░ to give ░░░░ formal ░░░░ ░░░░ ░░░░ ░░░░

░░░░ ░░░░ do composition ░░░░ an ░░░░ ░░░░ ░░░░ write $\_ \circ \_$ as ░░░░ pure $\lambda$░░░░

$$
\_ \circ \_ = \lambda \ \textsf{f} \ \textsf{g} \ \textsf{x} \to \textsf{f} \ (\textsf{g x})
$$
Actually for our purposes it is ░░░░ to expand ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$░░░░

$$
\_ \circ \_ = \lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f} \ (\textsf{g x})
$$
Our strategy is ░░░░ ░░░░ ░░░░ $\lambda$░░░░ ░░░░ inside out, ░░░░ is ░░░░ we ░░░░ $\lambda \ \textsf{x} \to \textsf{f} \ (\textsf{g x})$ into ░░░░ This term ░░░░ still contain the variables $\textsf{f}$ ░░░░ $\textsf{g}$. However, next we abstract $\textsf{g}$ ░░░░ then $\textsf{f}$ ░░░░ obtain a term using only ░░░░ ░░░░ contains no ░░░░

The terms ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ which ░░░░ no $\lambda$-abstractions ░░░░ may contain variables, applications, ░░░░ the ░░░░ $\textsf{S}$ ░░░░ $\textsf{K}$. ░░░░ ░░░░ ░░░░ ░░░░ construct $\lambda \ \textsf{x} \to \textsf{M}$ by looking ░░░░ ░░░░ of ░░░░ ░░░░ cases,

* **M = x**: ░░░░ this case ░░░░ $\lambda \ \textsf{x} \to \textsf{x} = \textsf{id}$, which ░░░░ ░░░░ ░░░░ obtained as $\textsf{S K K}$.

* **M = y**: If the ░░░░ ░░░░ ░░░░ from $\textsf{x}$ we ░░░░ ░░░░ ░░░░ $\lambda \ \textsf{x} \to \textsf{y}$ ░░░░ ░░░░ ░░░░ constant function, that is $\textsf{K y}$░░░░

* **M = M₁ M₂**: In ░░░░ ░░░░ we use the assumption ░░░░ ░░░░ know ░░░░ how ░░░░ translate  
  $\lambda \ \textsf{x} \to \textsf{M}_1$ and $\lambda \ \textsf{x} \to \textsf{M}_2$. Now ░░░░ have,

$$
  \begin{aligned}
  \lambda \ \textsf{x} \to \textsf{M} &= \lambda \ \textsf{x} \to \textsf{M}_1\ \textsf{M}_2 \\
                                     &= \textsf{S} \ (\lambda \ \textsf{x} \to \textsf{M}_1) \ (\lambda \ \textsf{x} \to \textsf{M}_2)
  \end{aligned}
  $$
  ░░░░ ░░░░ the need ░░░░ $\textsf{S}$░░░░

* **M = K**: ░░░░ $\lambda \ \textsf{x} \to \textsf{K}$ ░░░░ ░░░░ ░░░░ constant ░░░░ ░░░░ $\textsf{K}$, ░░░░ $\textsf{K K}$.

* **M = S**: As ░░░░ $\lambda \ \textsf{x} \to \textsf{S}$ ░░░░ just $\textsf{K S}$░░░░

Ok, let’s apply the translation ░░░░ ░░░░ ░░░░ $\lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f (g x)}$. We start with,

$$
\begin{aligned}
\lambda \ \textsf{x} \to \textsf{f (g x)} 
  &= \textsf{S} \ (\lambda \ \textsf{x} \to \textsf{f}) \ (\lambda \ \textsf{x} \to \textsf{g x}) \\
  &= \textsf{S} \ (\textsf{K f}) \ (\textsf{S} \ (\lambda \ \textsf{x} \to \textsf{g}) \ (\lambda \ \textsf{x} \to \textsf{x})) \\
  &= \textsf{S} \ (\textsf{K f}) \ (\textsf{S} \ (\textsf{K g}) \ \textsf{id})
\end{aligned}
$$
Before ░░░░ let’s introduce some optimisations to ░░░░ ░░░░ ░░░░ terms. ░░░░ ░░░░ example, we can see ░░░░ $\lambda \ \textsf{x} \to \textsf{g x}$ ░░░░ just $\textsf{g}$ ░░░░ $\eta$. ░░░░ ░░░░ ░░░░ that if the variable $\textsf{x}$ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{M}$░░░░ then $\lambda \ \textsf{x} \to \textsf{M}$ is just $\textsf{K M}$ and there ░░░░ no need ░░░░ go through $\textsf{M}$░░░░  

░░░░ these optimisations, we ░░░░ $\_ \circ \_$ in one go,

$$
\begin{aligned}
\lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f (g x)} 
  &= \lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \textsf{S} (\lambda \ \textsf{x} \to \textsf{f}) (\lambda \ \textsf{x} \to \textsf{g x}) \\
  &= \lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \textsf{S (K f) g} \\
  &= \lambda \ \textsf{f} \to \textsf{S (K f)} \\
  &= \textsf{S} (\lambda \ \textsf{f} \to \textsf{S}) (\lambda \ \textsf{f} \to \textsf{K f}) \\
  &= \textsf{S (K S) K}
\end{aligned}
$$
While ░░░░ term is ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ to understand. The ░░░░ of ░░░░ is ░░░░ ░░░░ show ░░░░ ░░░░ can avoid ░░░░ ░░░░ complications involving variables ░░░░ ░░░░ get away ░░░░ $\textsf{S}$ ░░░░ $\textsf{K}$ ░░░░

### Products and Sums

░░░░ far we ░░░░ only encountered ░░░░ function ░░░░ In ░░░░ ░░░░ we ░░░░ get ░░░░ ░░░░ some more ░░░░ type formers,

░░░░ **products**░░░░ Written $A \times B$, and ░░░░ ░░░░ ░░░░ product. In basic ░░░░ ░░░░ ░░░░ ░░░░ to represent ░░░░ systems, like $(1, 1) : \mathbb{R} \times \mathbb{R}$░░░░

░░░░ **sums**░░░░ ░░░░ Agda ░░░░ ░░░░ $A \uplus B$, we might ░░░░ $A + B$ but this clashes ░░░░ $+$ ░░░░ numbers. ░░░░ are ░░░░ ░░░░ disjoint ░░░░ and coproducts.

░░░░ let’s start ░░░░ ░░░░ ░░░░ are ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ but ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ and functional programming.

#### Sums

Sums ░░░░ necessary to represent alternatives. ░░░░ ░░░░ one ░░░░ ░░░░ another. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{\textbf{data}}$ ░░░░

$$
\begin{aligned}
&\textsf{data}\ \uplus\ (\textsf{A} \ \textsf{B} : \textsf{Set}) : \textsf{Set} \ \textsf{where}\\
&\quad \textsf{inj}_1 : \textsf{A} \to \textsf{A} \ \uplus\ \textsf{B}\\
&\quad \textsf{inj}_2 : \textsf{B} \to \textsf{A} \ \uplus\ \textsf{B}
\end{aligned}
$$

░░░░ says that ░░░░ element of $A \uplus B$ ░░░░ either $\textsf{inj}_1\ \textsf{a}$ where $\textsf{a} : A$ or it is $\textsf{inj}_2\ \textsf{b}$ where $\textsf{b} : B$.

A ░░░░ ░░░░ ░░░░ that ░░░░ ░░░░ ░░░░ form ░░░░ can either ░░░░ ░░░░ your order ░░░░ ░░░░`OrdNum`░░░░ ░░░░ your ░░░░ ░░░░ ░░░░`CustRef`░░░░ ░░░░ ░░░░ ░░░░ this ░░░░ $\textsf{OrdNum} \uplus \textsf{CustRef}$░░░░ Note ░░░░ ░░░░ if we use ░░░░ same ░░░░ ░░░░ ░░░░ ░░░░ we can ░░░░ be sure which ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{inj}_1\ 1704$ (if it’s an order number) or $\textsf{inj}_2\ 1704$ ░░░░ ░░░░ ░░░░ customer reference).

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is a bit strange: ░░░░ ░░░░ the ░░░░ union $\cup$ and the plus ░░░░ $+$░░░░ giving $\uplus$. ░░░░ prefer ░░░░ just write $+$ but ░░░░ ░░░░ with numeric ░░░░

░░░░ ░░░░ $\cup$ ░░░░ $\uplus$ related? Indeed, there ░░░░ no operation $\cup$ ░░░░ ░░░░$\cup$ ░░░░ an **intensional** ░░░░ ░░░░ ░░░░ depends ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░  
$A = \{a,b\}$ and $B = \{0,1,2\}$░░░░ Then,

$$
\begin{aligned}
A \cup B   &= \{a, b, 0, 1, 2\} \\
A \uplus B &= \{\textsf{inj}_1\ \textsf{a},\ \textsf{inj}_1\ \textsf{b},\ \textsf{inj}_2\ \textsf{0},\ \textsf{inj}_2\ \textsf{1},\ \textsf{inj}_2\ \textsf{2}\}
\end{aligned}
$$
$$
\begin{aligned}
A' \cup B   &= \{0,1,2\}\\
A' \uplus B&= \{\textsf{inj}_1\,0,\ \textsf{inj}_1\,1,\ \textsf{inj}_2\,0,\ \textsf{inj}_2\,1,\ \textsf{inj}_2\,2\}
\end{aligned}
$$

$A' \cup B$ has only 3 elements, while $A' \uplus B$ has ░░░░ $\uplus$ is **representation‑insensitive**░░░░ ░░░░ property that ░░░░ operations definable ░░░░ ░░░░ Theory (and ░░░░ ░░░░ Agda) ░░░░

What ░░░░ ░░░░ do with $\uplus$? ░░░░ ░░░░ general combinator ░░░░ $\textsf{case}$ ░░░░ performs ░░░░ analysis.  
░░░░ can ░░░░ ░░░░ using _pattern matching_,

$$
\begin{aligned}
&\textsf{case} : (\textsf{A} \to \textsf{C}) \to (\textsf{B} \to \textsf{C}) \to \textsf{A} \uplus \textsf{B} \to \textsf{C} \\
&\textsf{case}\ \textsf{f}\ \textsf{g}\ (\textsf{inj}_1\ \textsf{a}) = \textsf{f a} \\
&\textsf{case}\ \textsf{f}\ \textsf{g}\ (\textsf{inj}_2\ \textsf{b}) = \textsf{g b}
\end{aligned}
$$
$\textsf{case}$ ░░░░ ░░░░ two ░░░░ $\textsf{f}$ knows ░░░░ ░░░░ ░░░░ $\textsf{A}$░░░░ and $\textsf{g}$ ░░░░ how ░░░░ ░░░░ $\textsf{B}$.

░░░░ back ░░░░ ░░░░ ░░░░ with ░░░░ ░░░░ form $(\textsf{OrdNum} \uplus \textsf{CustRef})$:  
░░░░ ░░░░ ░░░░ ░░░░ function to ░░░░ ░░░░ an ░░░░ using the order number  $\textsf{lookupOrdNum} : \textsf{OrdNum} \to \textsf{Order}$ and ░░░░ ░░░░ $\textsf{lookupCustRef} : \textsf{CustRef} \to \textsf{Order}$  
we ░░░░ ░░░░ $\textsf{case}$ to combine them,

$$
\textsf{case}\ \textsf{lookupOrdNum}\ \textsf{lookupCustRef} : \textsf{OrdNum} \uplus \textsf{CustRef} \to \textsf{Order}
$$
#### Products

░░░░ ░░░░ ░░░░ as ░░░░ ░░░░ ░░░░ ░░░░ a _record type_░░░░

$$
\begin{aligned}
&\textsf{\textbf{record}}\ \_ \textsf{×} \_ \ (\textsf{A}\ \textsf{B} : \textsf{Set})\ :\ \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{field}} \\
&\quad\quad \textsf{proj}_1\ :\ \textsf{A} \\
&\quad\quad \textsf{proj}_2\ :\ \textsf{B}
\end{aligned}
$$

░░░░ is, ░░░░ ░░░░ ░░░░ projections, ░░░░ are ░░░░ with the ░░░░

$$
\begin{aligned}
&\textsf{proj}_1\ :\ \textsf{A} \, \textsf{×} \, \textsf{B} \to \textsf{A} \\
&\textsf{proj}_2\ :\ \textsf{A} \, \textsf{×} \, \textsf{B} \to \textsf{B}
\end{aligned}
$$

░░░░ ░░░░ ░░░░ elements of $\textsf{A} \textsf{×} \textsf{B}$ by ░░░░ what the result ░░░░ when ░░░░ ░░░░  
░░░░ ░░░░ ░░░░ _copattern matching_░░░░ ░░░░ example, we can use ░░░░ to define ░░░░ pairing ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ the $\_ \ , \_$, that ░░░░ ░░░░ doesn’t ░░░░ to ░░░░ ░░░░ ░░░░ the ░░░░

$$
\begin{aligned}
&\_ , \_ \ :\ \textsf{A} \to \textsf{B} \to \textsf{A} \ \textsf{×} \ \textsf{B} \\
&\textsf{proj}_1\ (\textsf{a},\ \textsf{b})\ =\ \textsf{a} \\
&\textsf{proj}_2\ (\textsf{a},\ \textsf{b})\ =\ \textsf{b}
\end{aligned}
$$

░░░░ can ░░░░ ░░░░ constructor automatically ░░░░ adding the constructor ░░░░ to ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{\textbf{record}}\ \_ \textsf{×} \_ \ (\textsf{A}\ \textsf{B} : \textsf{Set})\ :\ \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{constructor}}\ \_ , \_ \\
&\quad \textsf{\textbf{field}} \\
&\quad\quad \textsf{proj}_1\ :\ \textsf{A} \\
&\quad\quad \textsf{proj}_2\ :\ \textsf{B}
\end{aligned}
$$

What ░░░░ we do with ░░░░ We ░░░░ ░░░░ ░░░░ $\textsf{curry}$ that ░░░░ a function ░░░░ ░░░░ ░░░░ a curried ░░░░

$$
\begin{aligned}
&\textsf{curry}\ :\ (\textsf{A} \ \textsf{×} \ \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B} \to \textsf{C}) \\
&\textsf{curry}\ \textsf{f}\ =\ \lambda \ \textsf{a}\ \textsf{b} \to \textsf{f}\ (\textsf{a},\ \textsf{b})
\end{aligned}
$$

░░░░ can also do the reverse and translate ░░░░ curried ░░░░ ░░░░ into one on ░░░░

$$
\begin{aligned}
&\textsf{uncurry}\ :\ (\textsf{A} \to \textsf{B} \to \textsf{C}) \to (\textsf{A} \ \textsf{×} \ \textsf{B} \to \textsf{C}) \\
&\textsf{uncurry}\ \textsf{g}\ =\ \lambda \ \textsf{x} \to \textsf{g}\ (\textsf{proj}_1\ \textsf{x})\ (\textsf{proj}_2\ \textsf{x})
\end{aligned}
$$
Indeed, the two ░░░░ ░░░░ inverse to ░░░░ other ░░░░ that ░░░░ $\textsf{curry}\ (\textsf{uncurry}\ \textsf{g})\ =\ \textsf{g}$ and   $\textsf{uncurry}\ (\textsf{curry}\ \textsf{f})\ =\ \textsf{f}$. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ what ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{curry}\ (\textsf{uncurry}\ \textsf{g}) \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{uncurry} \ \textsf{g} \ (\textsf{a},\ \textsf{b}) \quad &&\textrm{Unfolding $\textsf{curry}$} \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{g} \ (\textsf{proj}_1 \ (\textsf{a},\ \textsf{b})) \ (\textsf{proj}_2 \ (\textsf{a},\ \textsf{b})) \quad &&\textrm{Unfolding $\textsf{uncurry}$} \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{g} \ \textsf{a} \ \textsf{b} \quad &&\textrm{Evaluating projections} \\
&= \textsf{g} \quad &&\textrm{Use $\eta$ twice}
\end{aligned}
$$
For ░░░░ 2nd equation ░░░░ ░░░░ ░░░░ $\eta$-equality ░░░░ ░░░░ which says that $(\textsf{proj}_1\ \textsf{x},\ \textsf{proj}_2\ \textsf{x}) = \textsf{x}$. ░░░░ is also ░░░░ _surjective pairing_░░░░

$$
\begin{aligned}
&\textsf{uncurry}\ (\textsf{curry}\ \textsf{f}) \\
&= \lambda \ \textsf{x} \to \textsf{curry}\ \textsf{f}\ (\textsf{proj}_1\ \textsf{x})\ (\textsf{proj}_2\ \textsf{x}) \quad &&\textrm{Unfolding $\textsf{uncurry}$} \\
&= \lambda \ \textsf{x} \to \textsf{f}\ (\textsf{proj}_1\ \textsf{x},\ \textsf{proj}_2\ \textsf{x}) \quad &&\textrm{Unfolding $\textsf{curry}$} \\
&= \lambda \ \textsf{x} \to \textsf{f}\ \textsf{x} \quad &&\textrm{Surjective pairing} \\
&= \textsf{f} \quad &&\textrm{$\eta$ for functions} 
\end{aligned}
$$
This ░░░░ that ░░░░ type ░░░░ functions over ░░░░ ░░░░ ░░░░ ░░░░ are ░░░░  
░░░░ functional programmers ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

#### Strong Sums (?)

░░░░ can ░░░░ to play ░░░░ similar game for coproducts. First of all, using ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{case-c} : (\textsf{A} \to \textsf{C}) \times (\textsf{B} \to \textsf{C}) \to \textsf{A} \uplus \textsf{B} \to \textsf{C} \\
&\textsf{case-c} = \textsf{uncurry}\ \textsf{case}
\end{aligned}
$$
and hence ░░░░ ░░░░ of ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{uncase} : (\textsf{A} \uplus \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{C}) \times (\textsf{B} \to \textsf{C}) \\
&\textsf{uncase}\ \textsf{h} = (\lambda \ \textsf{a} \to \textsf{h} \ (\textsf{inj}_1\ \textsf{a}) ,\ \lambda \ \textsf{b} \to \textsf{h} \ (\textsf{inj}_2\ \textsf{b}))
\end{aligned}
$$
░░░░ would hope that the functions ░░░░ ░░░░ to ░░░░ ░░░░ that is,

$$
\textsf{case-c} \circ \textsf{uncase} = \textsf{id} \quad \text{and} \quad \textsf{uncase} \circ \textsf{case-c} = \textsf{id}
$$
░░░░ first one we ░░░░ show,

$$
\begin{aligned}
&\textsf{uncase}\ (\textsf{case-c}\ \textsf{f}) \\
&= (\lambda \ \textsf{a} \to \textsf{case-c}\ \textsf{f}\ (\textsf{inj}_1\ \textsf{a}),\ \lambda \ \textsf{b} \to \textsf{case-c}\ \textsf{f}\ (\textsf{inj}_2\ \textsf{b})) \quad &&\textrm{Unfold $\textsf{uncase}$}\\
&= (\lambda \ \textsf{a} \to \textsf{proj}_1\ \textsf{f}\ \textsf{a},\ \lambda \ \textsf{b} \to \textsf{proj}_2\ \textsf{f}\ \textsf{b}) \quad &&\textrm{Unfold $\textsf{case-c}$ and $\textsf{case}$} \\
&= (\textsf{proj}_1\ \textsf{f},\ \textsf{proj}_2\ \textsf{f}) \quad &&\textrm{$\eta$ twice}\\
&= \textsf{f} \quad &&\textrm{Surjective pairing}
\end{aligned}
$$
However, the 2nd equality doesn’t ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ can prove ░░░░ ░░░░ propositional ░░░░ $\_ \equiv \_$, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ introduce later. ░░░░ equality $\_ = \_$ we have been ░░░░ here when ░░░░ _about_ $\lambda$-terms ░░░░ ░░░░ **definitional equality**.

Indeed, the $\eta$-laws for ░░░░ ░░░░ ░░░░ pairing is ░░░░ ░░░░ ░░░░ notion ░░░░ _definitional equality_ — they ░░░░ ░░░░ introduced ░░░░ convenience. The corresponding laws ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ numbers) ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ not ░░░░ ░░░░ for a language like ░░░░

It ░░░░ ░░░░ (though ░░░░ ░░░░ straightforward) to add $\eta$░░░░ ░░░░ $\_ + \_$░░░░ ░░░░ this is usually ░░░░ ░░░░ because it ░░░░ quickly lead ░░░░ an exponential ░░░░ in ░░░░ trees ░░░░ become computationally too ░░░░

#### Finite Types

The ░░░░ $\_ \textsf{×} \_$ we ░░░░ ░░░░ handles ░░░░ binary case ░░░░ products. We can ░░░░ ░░░░ ░░░░ ░░░░ to handle ░░░░ components, ░░░░ in $\textsf{A} \ × \ \textsf{B} \ × \ \textsf{C}$. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ use records ░░░░ ░░░░ more ░░░░ field ░░░░ ░░░░ $\textsf{proj}_1$░░░░ etc.

However, ░░░░ interesting case ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ nullary ░░░░ or ░░░░ ░░░░  
░░░░ ░░░░ ░░░░ is denoted ░░░░ $\top$ ░░░░ can ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ no ░░░░

$$
\begin{aligned}
&\textsf{record}\ \top : \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{constructor}}\ \textsf{tt}
\end{aligned}
$$
It has one element $\textsf{tt} : \top$░░░░

We ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ with ░░░░ ░░░░ derive ░░░░ empty sum, ░░░░ is a ░░░░ ░░░░ no injections,

$$
\begin{aligned}
&\textsf{data}\ \bot : \textsf{Set}\ \textsf{\textbf{where}}
\end{aligned}
$$

░░░░ ░░░░ ░░░░ is the ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░ no ░░░░ A version of ░░░░ ░░░░ the empty ░░░░ ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{case}_\bot : \{\textsf{A} : \textsf{Set}\} \to \textsf{⊥} \to \textsf{A} \\
&\textsf{case}_\bot\ ()
\end{aligned}
$$

We ░░░░ ░░░░ any ░░░░ for $\bot$ — Agda ░░░░ ░░░░ ░░░░ $()$ which means this ░░░░ analysis ░░░░ ░░░░ intentionally ░░░░ empty. ░░░░ ░░░░ fine — we ░░░░ never ░░░░ this function because ░░░░ ░░░░ an ░░░░ ░░░░ ░░░░ empty ░░░░

We ░░░░ use ░░░░ unit ░░░░ $\top$ and ░░░░ $\uplus$ to construct some finite ░░░░ ░░░░ ░░░░ $\textsf{Two} : \textsf{Set}$ is ░░░░ type ░░░░ 2 ░░░░

$$
\begin{aligned}
&\textsf{Two} : \textsf{Set} \\
&\textsf{Two} = \top \uplus \top
\end{aligned}
$$
Here are the ░░░░

$$
\begin{aligned}
&\textsf{zero}_2 : \textsf{Two} \\
&\textsf{zero}_2 = \textsf{inj}_1\ \textsf{tt} \\
&\textsf{one}_2 : \textsf{Two} \\
&\textsf{one}_2 = \textsf{inj}_2\ \textsf{tt}
\end{aligned}
$$

We ░░░░ add one more ░░░░ to ░░░░ ░░░░ ░░░░ Three, ░░░░ type ░░░░ ░░░░ elements,

$$
\begin{aligned}
&\textsf{Three} : \textsf{Set} \\
&\textsf{Three} = \top \uplus \textsf{Two} \\
&\textsf{zero}_3 : \textsf{Three} \\
&\textsf{zero}_3 = \textsf{inj}_1\ \textsf{tt} \\
&\textsf{one}_3 : \textsf{Three} \\
&\textsf{one}_3 = \textsf{inj}_2\ \textsf{zero}_2 \\
&\textsf{two}_3 : \textsf{Three} \\
&\textsf{two}_3 = \textsf{inj}_2\ \textsf{one}_2
\end{aligned}
$$

However, as already ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ practice it is usually preferable to use $\textsf{\textbf{data}}$ to ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{\textbf{data}}\ \textsf{Two}\ :\ \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{zero}_2\ \textsf{one}_2\ :\ \textsf{Two}
\end{aligned}
$$

$$
\begin{aligned}
&\textsf{\textbf{data}} \ \textsf{Three}\ :\ \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{zero}_3\ \textsf{one}_3\ \textsf{two}_3\ :\ \textsf{Three}
\end{aligned}
$$

░░░░ many elements are ░░░░ $\textsf{Two} \uplus \textsf{Three}$░░░░ An example ░░░░ $\textsf{inj}_2\ \textsf{one}_2$. ░░░░ is ░░░░ choice ░░░░ $\textsf{inj}_1$ and $\textsf{inj}_2$ — if we ░░░░ $\textsf{inj}_1$ we get 2 options, and if we choose $\textsf{inj}_2$ ░░░░ get ░░░░ ░░░░ ░░░░ we ░░░░ $2 + 3 = 5$ ░░░░ elements,

$$\textsf{inj}_1\ \textsf{zero}_2, \ \textsf{inj}_1\ \textsf{one}_2, \ \textsf{inj}_2\ \textsf{zero}_3, \ \textsf{inj}_2\ \textsf{one}_3, \ \textsf{inj}_2\, \ \textsf{two}_3$$     

In ░░░░ ░░░░ ░░░░ ░░░░ $n$ ░░░░ ░░░░ B ░░░░ $m$ ░░░░ ░░░░ $A \uplus B$ has $n + m$ ░░░░

░░░░ many elements ░░░░ in $\textsf{Two} \textsf{×} \textsf{Three}$? ░░░░ typical ░░░░ is $\textsf{one}_2 , \textsf{two}_3$░░░░ ░░░░ ░░░░ construct ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ for ░░░░ ░░░░ ░░░░ and ░░░░ ░░░░ the ░░░░ so $2 \times 3 = 6$ elements,

{{< rawHtml >}}
<table class="SF_KATEX_TABLE">
  <tr>
    <td>$\textsf{zero}_2, \ \textsf{zero}_3$</td>
    <td>$\textsf{zero}_2, \ \textsf{one}_3$</td>
    <td>$\textsf{zero}_2, \ \textsf{two}_3$</td>
  </tr>
  <tr>
    <td>$\textsf{one}_2, \ \textsf{zero}_3$</td>
    <td>$\textsf{one}_2, \ \textsf{one}_3$</td>
    <td>$\textsf{one}_2, \ \textsf{two}_3$</td>
  </tr>
</table>
{{< /rawHtml >}}



In ░░░░ ░░░░ A has $n$ ░░░░ ░░░░ ░░░░ ░░░░ $m$ elements, then $\textsf{A} \times \textsf{B}$ ░░░░ $\textsf{m} \times \textsf{n}$ ░░░░

What about the ░░░░ ░░░░ ░░░░ ░░░░ elements ░░░░ in $\textsf{Two} \to \textsf{Three}$? ░░░░ is ░░░░ typical example,

$$
\begin{aligned}
&\textsf{foo} : \textsf{Two} \to \textsf{Three} \\
&\textsf{foo}\ \textsf{zero}_2 = \textsf{two}_3 \\
&\textsf{foo}\ \textsf{one}_2 = \textsf{one}_3
\end{aligned}
$$

We can define ░░░░ ░░░░ function ░░░░ pattern matching: we ░░░░ ░░░░ choices ░░░░ each case, ░░░░ $3 \times 3 = 3^2 = 9$ ░░░░ ░░░░ unlike products ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ symmetric.

░░░░ ░░░░ ░░░░ are in $\textsf{Three} \to \textsf{Two}$░░░░ ░░░░ ░░░░ is a typical ░░░░

$$
\begin{aligned}
&\textsf{bar} : \textsf{Three} \to \textsf{Two} \\
&\textsf{bar}\ \textsf{zero}_3 = \textsf{zero}_2 \\
&\textsf{bar}\ \textsf{one}_3 = \textsf{one}_2 \\
&\textsf{bar}\ \textsf{two}_3 = \textsf{zero}_2
\end{aligned}
$$

░░░░ ░░░░ ░░░░ cases because there are ░░░░ ░░░░ ░░░░ $\textsf{Three}$, and in each case ░░░░ have a choice of 2, ░░░░ ░░░░ ░░░░ $2 \times 2 \times 2 = 2^3 = 8$ ░░░░

░░░░ these ░░░░ we can ░░░░ that ░░░░ ░░░░ if A has $n$ elements ░░░░ B ░░░░ $m$ ░░░░ then $A \to B$ ░░░░ $m^n$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ type ░░░░ often written ░░░░ an ░░░░ that ░░░░ $A \to B$ ░░░░ ░░░░ ░░░░ $B^A$░░░░

Previously, ░░░░ have shown that types $A \times B \to C$ ░░░░ $A \to B \to C$ ░░░░ equivalent ░░░░ curry and uncurry). ░░░░ ░░░░ in ░░░░ ░░░░ ░░░░ ░░░░ an ░░░░ friend ░░░░ high school,

$$
C^{A \times B} = (C^B)^A
$$

Similarly, ░░░░ strong ░░░░ we ░░░░ ░░░░ ░░░░ $(A \to C) \times (B \to C)$ ░░░░ $A \uplus B \to C$ ░░░░ equivalent (via $\textsf{case-c}$ and $\textsf{uncase}$). ░░░░ ░░░░ ░░░░ $+$ ░░░░ $\uplus$░░░░ ░░░░ arrive ░░░░ another well-known equation:

$$
C^A \times C^B = C^{A + B}
$$

### History

$\lambda$-calculus ░░░░ ░░░░ by ░░░░ ░░░░ ░░░░ ░░░░ it ░░░░ papers ░░░░ formal ░░░░ in ░░░░ 1930s. The ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of $\lambda$ ░░░░ ░░░░ accident: ░░░░ used a ░░░░ notation where ░░░░ ░░░░ ░░░░ ░░░░ and the usage ░░░░ a variable. But ░░░░ typesetter ░░░░ was ░░░░ only ░░░░ LaTeX but ░░░░ ░░░░ went back ░░░░ ░░░░ _Sorry Professor, I can’t do that. But this looks a bit like a $\lambda$. Is it ok if I use just this?_

░░░░ realised ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ was that he ░░░░ define ░░░░ many weird functions, ░░░░ the ░░░░ called _fix point combinator_ which allows ░░░░ compute the fixpoint ░░░░ ░░░░ function by general ░░░░ But ░░░░ is the ░░░░ point ░░░░ negation? To ░░░░ ░░░░ sort ░░░░ problems ░░░░ also invented ░░░░ typed $\lambda$░░░░

Church had ░░░░ primitive types, $\iota$ (the greek letter _iota_) ░░░░ for ░░░░ and ░░░░ (the ░░░░ letter $\omicron$ but it ░░░░ the ░░░░ ░░░░ an ░░░░ standing ░░░░ propositions, motivated by his intended ░░░░ to formal logic. ░░░░ will ░░░░ consider ░░░░ fixed ░░░░ ░░░░ base ░░░░ ░░░░ a ░░░░ ░░░░ as type ░░░░

The ░░░░ $\lambda$-calculus ░░░░ still useful as a ░░░░ programming language ░░░░ ░░░░ an ░░░░ to ░░░░ ░░░░ ░░░░ when ░░░░ ░░░░ ░░░░ Church ░░░░ ░░░░ ░░░░ Turing machines ░░░░ $\lambda$░░░░ compute ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of this ░░░░ to ░░░░ computational mechanism ░░░░ known as ░░░░ ░░░░ thesis.

In ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$-calculus ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$-calculus ░░░░ ░░░░ ░░░░ a type system on top, as a ░░░░ of ░░░░ ░░░░ to untyped terms. ░░░░ do not follow this ░░░░ which is perhaps too syntactic and ░░░░ ░░░░ ░░░░ as ░░░░ ░░░░ call this _intrinsic typing_░░░░ Yes, it ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ to ░░░░ $\lambda$-terms ░░░░ ░░░░ ░░░░ ░░░░ point think about untyped ░░░░ but ░░░░ also need to ░░░░ ░░░░ ░░░░ characters ░░░░ ░░░░ ░░░░ will ░░░░ talk about these implementation ░░░░

Combinatory ░░░░ ░░░░ ░░░░ invented ░░░░ $\lambda$-calculus ░░░░ ░░░░ Schönfinkel in the ░░░░ ░░░░ his interest was in formal logic and he realised ░░░░ combinators ░░░░ a ░░░░ way to ░░░░ the complexities ░░░░ variables. This ░░░░ also the ░░░░ ░░░░ ░░░░ Curry who reinvented combinatory logic ░░░░ ░░░░ ░░░░ in the ░░░░ ░░░░ know ░░░░ ░░░░ Some people ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ _currying_ a ░░░░ with several ░░░░ which ░░░░ ░░░░ after ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ _schönfinkeln_ ░░░░ this ░░░░ caught on.

To understand our ░░░░ ░░░░ products ░░░░ sums ░░░░ (also called ░░░░ one needs to ░░░░ ░░░░ ░░░░ theory. Category theory ░░░░ basically an abstract form ░░░░ ░░░░ which was ░░░░ ░░░░ Saunders ░░░░ ░░░░ others. Their ░░░░ came ░░░░ ░░░░ ░░░░ ░░░░ algebraic ░░░░ However, later ░░░░ was ░░░░ ░░░░ ░░░░ theory ░░░░ also extremely ░░░░ for ░░░░ ░░░░ ░░░░ One ░░░░ ░░░░ was Joachim ░░░░ observation ░░░░ a fundamental ░░░░ ░░░░ ░░░░ ░░░░ _cartesian closed categories_░░░░ corresponds exactly ░░░░ typed $\lambda$-calculus. In ░░░░ categorical account products are ░░░░ built-in ░░░░ ░░░░ ░░░░ ░░░░ characterised ░░░░ the ░░░░ One ░░░░ the beautiful ░░░░ of ░░░░ theory is the presence of a ░░░░ ░░░░_duality_) and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ products are ░░░░ ░░░░ ░░░░ as we ░░░░ introduced which are ░░░░ ░░░░ ░░░░

░░░░ this ░░░░ one ░░░░ ░░░░ ░░░░ the mirror ░░░░ of functions is? ░░░░ is ░░░░ longer ░░░░ but ░░░░ ░░░░ answer is that there isn’t one. ░░░░ ░░░░ assume that ░░░░ ░░░░ one, ░░░░ ░░░░ collapses: all $\lambda$░░░░ are ░░░░

$\lambda$░░░░ ░░░░ important for ░░░░ ░░░░ be precise ░░░░ _functional programming_. Indeed the 2nd ░░░░ ░░░░ language, ░░░░ (The ░░░░ is FORTRAN) ░░░░ ░░░░ by ░░░░ McCarthy in ░░░░ ░░░░ 1950s and was ░░░░ ░░░░ ░░░░ (untyped) $\lambda$-calculus. ░░░░ ░░░░ were ░░░░ a component of ░░░░ Edinburgh ░░░░ project (_Logic for computable functions_). ░░░░ ░░░░ ░░░░ Haskell (named after Haskell curry) ░░░░ ░░░░ ░░░░ modern instances of ░░░░ functional ░░░░ ░░░░ Agda’s ░░░░ ░░░░ semantics ░░░░ been influenced ░░░░ ░░░░