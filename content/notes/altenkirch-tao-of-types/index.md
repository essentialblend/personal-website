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

Before ░░░░ dependent types with ░░░░ ░░░░ ░░░░ ░░░░ we'll take ░░░░ ░░░░ ░░░░ something ░░░░ ░░░░ ░░░░ _simple types_░░░░ starting ░░░░ ░░░░ ░░░░ ░░░░ type of all, the functon type $\_\to\_$. ░░░░ ░░░░ ░░░░ ░░░░ types is that ░░░░ ░░░░ not ░░░░ what to ░░░░ ░░░░ We'll ░░░░ this with ░░░░ which work ░░░░ any ░░░░ called $\textsf{Set}$ in Agda. That is, ░░░░ will ░░░░ _polymorphic_ ░░░░ without introducing a ░░░░ ░░░░ ░░░░ ░░░░ which ░░░░ ░░░░ do later once we have dependent ░░░░ in our arsenal. ░░░░ of polymorphic constructions ░░░░ ░░░░ $\textsf{id}$ and composition $\_ \circ \_$ ░░░░ ░░░░ ░░░░ a first ░░░░ of ░░░░ ░░░░

░░░░ will ░░░░ ░░░░ ░░░░ ░░░░ at $\lambda$-calculus, ░░░░ ░░░░ we specifically mean _typed_ $\lambda$░░░░ and ░░░░ explore combinatory logic ░░░░ two ░░░░ ($\textsf{S}$ ░░░░ $\textsf{K}$░░░░ but the price to ░░░░ is ░░░░ completely ░░░░ ░░░░ ░░░░ It's worthwhile ░░░░ ░░░░ ░░░░ them and we ░░░░ explore ░░░░ later in depth.

░░░░ ░░░░ ░░░░ ░░░░ there is to simple ░░░░ ░░░░ ░░░░ we ░░░░ also ░░░░ at ░░░░ ░░░░$\_ \uplus  \_$░░░░ ░░░░ ░░░░ ░░░░$\_ \times \_$). ░░░░ ░░░░ will meet some old acquaintances ░░░░ high school ░░░░ a ░░░░ context.

### Functions

░░░░ ░░░░ ░░░░ functions are ░░░░ ░░░░ concept. This is different ░░░░ ░░░░ ░░░░ where ░░░░ are ░░░░ as a special ░░░░ ░░░░ ░░░░ namely ░░░░ that assign to each element ░░░░ the domain, exactly one element of ░░░░ codomain (the ░░░░ In ░░░░ Theory, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ around: ░░░░ start with ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ functions to ░░░░ what relations ░░░░ A ░░░░ ░░░░ $A$ ░░░░ $B$ ░░░░ ░░░░ function ░░░░ $A$ and $B$ to the ░░░░ ░░░░ propositions. 

Intuitively ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{A}$ ░░░░ $\textsf{B}$ ░░░░ a ░░░░ box ░░░░ we ░░░░ ░░░░ elements ░░░░ $\textsf{a} : \textsf{A}$ ░░░░ out come elements of $\textsf{f} \ \textsf{a} : \textsf{B}$░░░░ Notice ░░░░ ░░░░ ░░░░ ░░░░ $f(a)$ ░░░░ ░░░░ in mathematics and in many programming languages but instead save brackets and just write $\textsf{f} \ \textsf{a}$░░░░ as ░░░░ functional programming ░░░░ ░░░░ ░░░░ We write $\textsf{f} : \textsf{A} \to \textsf{B}$ ░░░░ express that $\textsf{f}$ is ░░░░ ░░░░ function.

When we ░░░░ ░░░░ _black box_░░░░ we mean ░░░░ metaphorically, that ░░░░ ░░░░ ░░░░ peak into this ░░░░ If ░░░░ gives ░░░░ a function, all ░░░░ can do is feed it ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ to ░░░░ ░░░░ mechanism (sort ░░░░ a DRM for functions). 

░░░░ look ░░░░ ░░░░ ░░░░ For ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ will ░░░░ ░░░░ types like ░░░░ ░░░░ numbers $\N = {0, 1, 2, 3, \dots}$ ░░░░ ░░░░ ░░░░ $\textsf{Bool} = \{\textsf{true}, \textsf{false}\}$ ░░░░ ░░░░ we ░░░░ only ░░░░ ░░░░ later. Let's ░░░░ ░░░░ ░░░░ ░░░░ adds $2$ to its input. 

$$
\begin{aligned}
	&\textsf{add2} : \N \to \N \\
    &\textsf{add2} \ \textsf{x} = \textsf{x + 2}
\end{aligned}
$$

To ░░░░ $\textsf{add2}$ we ░░░░ ░░░░ ░░░░ $\textsf{x}$. Now we ░░░░ ░░░░ $\textsf{add2}$ to ░░░░ number ░░░░ ░░░░ $\textsf{3}$ and ░░░░ $\textsf{add2 3}$ ░░░░ is $\textsf{5}$. ░░░░ the first ░░░░ we ░░░░ the ░░░░ $\textsf{x}$ with the actual argument $\textsf{2}$ ░░░░ ░░░░ ░░░░ use our ░░░░ ░░░░ addition ░░░░ ░░░░ ░░░░ ░░░░ step, replacing the parameter with ░░░░ argument, ░░░░ called $\beta$-reduction.

The definition above combines naming ░░░░ defining ░░░░ ░░░░ ░░░░ we ust ░░░░ ░░░░ write ░░░░ ░░░░ ░░░░ ░░░░ it ░░░░ ░░░░ we can ░░░░ $\lambda$-abstraction. ░░░░ ░░░░ we ░░░░ have ░░░░ the ░░░░ function ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{add2} : \N \to \N \\
&\textsf{add2} = \lambda \ \textsf{x} \to \textsf{x} + 2 
\end{aligned}
$$

░░░░ can view ░░░░ first ░░░░ ░░░░ ░░░░ abbreviation ░░░░ ░░░░ ░░░░ We can ░░░░ ░░░░ ░░░░ more detailed derivation where we differentiate the unfolding of a definition and $\beta$-reduction.

$$
\begin{aligned}
\textsf{add2 3} &= (\lambda \ \textsf{x} \to \textsf{x} + \textsf{2}) \ \textsf{3} \quad &&\textrm{Unfolding the definition.} \\
				&= 3 + 2 \quad &&\textrm{$\beta$-reduction.} \\
                &= 5 \quad &&\textrm{Calculating the sum.}
\end{aligned}
$$
░░░░ $\lambda$, ░░░░ ░░░░ ░░░░ define ░░░░ with ░░░░ ░░░░ ░░░░ ░░░░ the function with several ░░░░ ░░░░ ░░░░ _currying_, that ░░░░ a ░░░░ that ░░░░ a ░░░░

$$
\begin{aligned}
&\textsf{add} : \N \to (\N \to \N) \\
&\textsf{add} = \lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y})
\end{aligned}
$$

░░░░ $\textsf{add 3} : \N \to \N$ ░░░░ ░░░░ ░░░░ $\lambda \ \textsf{y} \to 3 + \textsf{y}$ ░░░░ ░░░░ ░░░░ function that adds $\textsf{3}$, ░░░░ $(\textsf{add 3}) \ 5$ reduces ░░░░ $5 + 3$ ░░░░ hence $8$.

░░░░ ░░░░ many ░░░░ conventions ░░░░ ░░░░ the ░░░░ ░░░░ currying: $\to$ is _right-associative_, ░░░░ ░░░░ ░░░░ write $\N \to \N \to \N$ for $\N \to (\N \to \N)$ ░░░░ ░░░░ is _left-associative_ hence ░░░░ ░░░░ ░░░░ $\textsf{g 3 5}$ for $(\textsf{g 3}) \ \textsf{5}$░░░░ ░░░░ ░░░░ can combine several $\lambda$░░░░ ░░░░ write $\lambda \ \textsf{x} \ \textsf{y} \to \textsf{x} + \textsf{y}$ for $\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y})$░░░░ Consequently, the same ░░░░ applies for the explicit ░░░░ definition: 

$$
\begin{aligned}
&\textsf{add} : \N \to \N \to \N \\
&\textsf{add} \ \textsf{x} \ \textsf{y} = \textsf{x + y}    
\end{aligned}
$$
░░░░ ░░░░ ░░░░ a function we can ░░░░ have ░░░░ ░░░░ ░░░░ in other ░░░░ as ░░░░ called _higher order functions_. ░░░░ example ░░░░

$$
\begin{aligned}
&\textsf{k} : (\N \to \N) \to \N \\
&\textsf{k h} = \textsf{h 2} + \textsf{h 3} 
\end{aligned}
$$
Note ░░░░ we cannot ░░░░ the ░░░░ in the ░░░░ type. $\textsf{k}$ ░░░░ a function that gets a ░░░░ ░░░░ ░░░░ ░░░░ numbers as input ░░░░ ░░░░ a number. ░░░░ ░░░░ $\textsf{k add2}$? We ░░░░ reason as ░░░░

$$
\begin{aligned}
\textsf{k add2} &= \textsf{add2 2} + \textsf{add2 3} \\
				&= \textsf{(2 + 2) + (3 + 2)} \\
                &= \textsf{9}
\end{aligned}
$$

### Identity and Composition

Some functions ░░░░ for any ░░░░ ░░░░ call ░░░░ _polymorphic_░░░░ ░░░░ ░░░░ ░░░░ the identity ░░░░ $\textsf{id} : \textsf{A} \to \textsf{A}$ ░░░░ ░░░░ for ░░░░ type $\textsf{A} : \textsf{Set}$. ░░░░ Agda, we can ░░░░

$$
\begin{aligned}
&\textsf{id} : \{\textsf{A} : \textsf{Set}\} \to \textsf{A} \to \textsf{A} \\
&\textsf{id x} = \textsf{x}
\end{aligned}
$$
Writing $\{\textsf{A} : \textsf{Set} \to \dots \}$ ░░░░ ░░░░ the function ░░░░ for every $\textsf{Set}$░░░░ Agda ░░░░ ░░░░ ░░░░ $\textsf{A}$ ░░░░ ░░░░ we ░░░░ just ░░░░ $\textsf{id 3} : \N$ ░░░░ Agda ░░░░ ░░░░ $\textsf{A} = \N$ in this case. ░░░░ ░░░░ ░░░░ it ░░░░ be necessary ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ explicitly, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{id} \ \{\N\}$ ░░░░ in case ░░░░ are ░░░░ parameters ░░░░ we only ░░░░ to instantiate a ░░░░ one ░░░░ ░░░░ $\textsf{id} \ \{\textsf{A} = \N\}$░░░░

░░░░ ░░░░ ░░░░ explain types ░░░░ $\{\textsf{A} : \textsf{Set} \to \dots\}$ ░░░░ ░░░░ actually ░░░░ ░░░░ dependent ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ notion, ░░░░ we ░░░░ use $\textsf{A} \ \textsf{B} \ \textsf{C} : \textsf{Set}$ to indicate variable ░░░░ In ░░░░ ░░░░ can ░░░░ ░░░░ by ░░░░ ░░░░ ░░░░ $\textsf{A}$░░░░ $\textsf{B}$, $\textsf{C}$ of ░░░░ type $\textsf{Set}$░░░░

$$
\begin{aligned}
\textsf{A} \ \textsf{B} \ \textsf{C} : \textsf{Set}
\end{aligned}
$$
now, ░░░░ ░░░░ write,

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} = \textsf{x}
\end{aligned}
$$
and Agda will automatically ░░░░ ░░░░ type into $\{\textsf{A} : \textsf{Set} \} \to \textsf{A} \to \textsf{A}$. We ░░░░ ░░░░ a ░░░░ for the ░░░░ ░░░░ ░░░░ simply ░░░░ of ░░░░ ░░░░ from the input ░░░░ the ░░░░

Another example ░░░░ ░░░░ composition: given $\textsf{g} : \textsf{A} \to \textsf{B}$ and $\textsf{f} : \textsf{B} \to \textsf{C}$░░░░ we can construct ░░░░ ░░░░ ░░░░ $\textsf{f} \circ \textsf{g} : \textsf{A} \to \textsf{C}$ ░░░░ ░░░░ the output of $\textsf{g}$ ░░░░ the input of $\textsf{f}$░░░░ 

Composition ░░░░ ░░░░ be ░░░░ as ░░░░ polymorphic ░░░░

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&(\textsf{f} \circ \textsf{g}) \ \textsf{x} = \textsf{f} \ (\textsf{g} \ \textsf{x})
\end{aligned}
$$
In ░░░░ we can define ░░░░ ░░░░ ░░░░ indeed ░░░░ complicated syntactic schemes) ░░░░ ░░░░ $\_$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ The ░░░░ ░░░░ ░░░░ ░░░░ this ░░░░ is ░░░░ ░░░░ have ░░░░ separate any syntactical ░░░░ with spaces, e.e. ░░░░ would read $\textsf{f} \circ \textsf{g}$ as one identifier.

░░░░ do an ░░░░ ░░░░ ░░░░ define ░░░░ function $\textsf{add2} : \N \to \N$░░░░ ░░░░ the ░░░░ vein ░░░░ a squaring ░░░░

$$
\begin{aligned}
&\textsf{square} : \N \to \N \\
&\textsf{square} \ \textsf{x} = \textsf{x} * \textsf{x}
\end{aligned}
$$
Now we can ░░░░ $\textsf{square} \circ \textsf{add2} : \N \to \N$. What is $(\textsf{square} \circ \textsf{add2}) \ \textsf{3}$?

$$
\begin{aligned}
(\textsf{square} \circ \textsf{add2}) \ 3 &= \textsf{square} \ (\textsf{add2 3}) \\
										  &= \textsf{square} \ (\textsf{3 + 2}) \\
                                          &= \textsf{square} \ \textsf{5} \\
                                          &= \textsf{5 * 5} \\
                                          &= \textsf{25}
\end{aligned}
$$
A corollary ░░░░ from ░░░░ ░░░░ is that function ░░░░ ░░░░ not commutative, ░░░░ ░░░░ $(\textsf{add2} \circ \textsf{square}) \ \textsf{3}$░░░░

$$
\begin{aligned}
(\textsf{add2} \circ \textsf{square}) \ 3 &= \textsf{add2} \ (\textsf{square 3}) \\
										  &= \textsf{add2} \ (\textsf{3 * 3}) \\
                                          &= \textsf{add2} \ 9 \\
                                          &= \textsf{2 + 9} \\
                                          &= \textsf{11}
\end{aligned}
$$
░░░░ we can see that $\textsf{square} \circ \textsf{add2}$ and $\textsf{add2} \circ \textsf{square}$ are ░░░░ functions. ░░░░ any case it isn't ░░░░ ░░░░ ░░░░ ░░░░ around ░░░░ Assume as given ░░░░ ░░░░ $\textsf{IsEven} : \N \to \textsf{Bool}$ that ░░░░ $\textsf{true}$ if the ░░░░ is even, ░░░░ $\textsf{false}$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{isEven} \circ \textsf{square} : \N \to \textsf{Bool}$ but ░░░░ ░░░░ make ░░░░ ░░░░ ░░░░ $\textsf{square} \circ \textsf{isEven}$ ░░░░ ░░░░ output of $\textsf{isEven}$ is $\textsf{Bool}$ and ░░░░ doesn't match ░░░░ ░░░░ ░░░░ $\textsf{square}$ ░░░░ its $\N$░░░░ 

░░░░ may also notice that ░░░░ ░░░░ a strange twist ░░░░ ░░░░ order ░░░░ ░░░░ to $\_ \circ \_$ which is ░░░░ ░░░░ its ░░░░ $(\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C})$. Why is ░░░░ ░░░░ $(\textsf{A} \to \textsf{B}) \to (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{C})$░░░░ ░░░░ ░░░░ if we evaluate $\textsf{f} \circ \textsf{g}$ ░░░░ ░░░░ ░░░░ $\textsf{g}$, ░░░░ $\textsf{f}$. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ written the _wrong way_ ░░░░ that ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{square} \ (\textsf{add2 3})$ we first evaluate $\textsf{add2 3}$ ░░░░ ░░░░ $\textsf{square 5}$, ░░░░ is actually counterintuitive ░░░░ those who ░░░░ left ░░░░ ░░░░ 

### $\lambda$-calculus

As we discussed, ░░░░ ░░░░ view ░░░░ explicit ░░░░ ░░░░ a function like,

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&(\textsf{f} \circ \textsf{g}) \ \textsf{x} = \textsf{f} \ (\textsf{g x}) \\
\end{aligned}
$$
░░░░ ░░░░ ░░░░ for an explicit definition using $\lambda$-terms,

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&\_ \circ \_  = \lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f} \ \textsf{(g x)}
\end{aligned}
$$
And ░░░░ unfolding definitions is standard practice ░░░░ mathematics ░░░░ else-where, we ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$░░░░

░░░░ ░░░░ form ░░░░ $\lambda$-term ░░░░ ░░░░ ░░░░ variables. ░░░░ beginners often ░░░░ _What is the type of a variable?_ ░░░░ answer ░░░░ ░░░░ ░░░░ assume ░░░░ we ░░░░ ░░░░ ░░░░ type ░░░░ ░░░░ ░░░░ this is ░░░░ called ░░░░ ░░░░_typing_) ░░░░ The other cases ░░░░ _application_ ░░░░ $\lambda$-abstraction,

░░░░ **variable**░░░░ A variable $\textsf{x}$ has ░░░░ ░░░░ we ░░░░ assumed for ░░░░ in-context.
- **application**░░░░ Given a ░░░░ $\textsf{M} : \textsf{A} \to \textsf{B}$ ░░░░ ░░░░ term $\textsf{N} : \textsf{A}$, we ░░░░ form ░░░░ ░░░░ $\textsf{M N : B}$.
░░░░ **abstraction**: ░░░░ a ░░░░ $\textsf{x}$ if ░░░░ ░░░░ $\textsf{x} : \textsf{A}$ ░░░░ can ░░░░ that $\textsf{M : B}$░░░░ then ░░░░ we ░░░░ ░░░░ $\lambda \ \textsf{x} \to \textsf{M} : \textsf{A} \to \textsf{B}$.

This ░░░░ the _pure_ $\lambda$-terms which don't use ░░░░ which ░░░░ specific to datatypes like $\N$ ░░░░ $\textsf{Bool}$ or standard ░░░░ ░░░░ types.

$\beta$-equality means that ░░░░ ░░░░ reduce ░░░░ ░░░░ of ░░░░ $\lambda$-abstraction to an argument ░░░░ ░░░░ the variable with the ░░░░ ░░░░ is,

$$(\lambda \ \textsf{x} \to \textsf{M}) \ \textsf{N} = \textsf{M}[\textsf{x} \coloneqq \textsf{N}]$$

░░░░ $\textsf{M}[\textsf{x} \coloneqq \textsf{N}]$ is $\textsf{M}$ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{x}$ replaced ░░░░ $\textsf{N}$.

░░░░ ░░░░ ░░░░ ░░░░ bit ░░░░ ░░░░ We certainly do ░░░░ ░░░░ ░░░░ ░░░░ bound ░░░░ ░░░░ is $(\lambda \ \textsf{x} \to (\lambda \ \textsf{x} \to \textsf{x})) \ 3$ ░░░░ ░░░░ ░░░░ $\lambda \ \textsf{x} \to \textsf{x}$ and ░░░░ $\lambda \ \textsf{x} \to \textsf{3}$. We ░░░░ ░░░░ by ░░░░ that $\textsf{M}[\textsf{x} \coloneqq \textsf{N}]$ ░░░░ $\textsf{M}$ with ░░░░ _free_ ░░░░ of $\textsf{x}$ ░░░░ by $\textsf{N}$. ░░░░ occurence ░░░░ free ░░░░ unbound.

░░░░ ░░░░ not ░░░░ ░░░░ $\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y})$ and ░░░░ say we have ░░░░ ░░░░ $\textsf{y}$ lying ░░░░ What ░░░░ $(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y}) ) \ \textsf{y}$? ░░░░ we ░░░░ ░░░░ $\textsf{x}$ ░░░░ $\textsf{y}$, ░░░░ ░░░░ $\lambda \ \textsf{y} \to \textsf{y + y}$░░░░ ░░░░ is ░░░░ because ░░░░ $\textsf{y}$ ░░░░ the ░░░░ ░░░░ $\textsf{y}$ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{y}$. ░░░░ is called _variable capture_ ░░░░ ░░░░ be avoided.

But then ░░░░ ░░░░  $(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y}))\ \textsf{y}$░░░░  

░░░░ we ░░░░ ░░░░ equality, $\alpha$-equivalence, ░░░░ ░░░░ that ░░░░ variables ░░░░ ░░░░ consistently ░░░░ i.e. $\lambda \ \textsf{y} \to \textsf{x} + \textsf{y} = \lambda \ \textsf{z} \to \textsf{x} + \textsf{z}$.  

Using ░░░░ ░░░░ ░░░░ avoid ░░░░ ░░░░ replacing the bound variable $\textsf{y}$ — avoiding capture. That ░░░░$(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y})) = \lambda \ \textsf{x} \to \textsf{x} + \textsf{z}$. Note that ░░░░ variable ░░░░ $\textsf{y}$ ░░░░ ░░░░ here.

░░░░ ░░░░ yet another ░░░░ $\eta$░░░░ ░░░░ is motivated ░░░░ ░░░░ ░░░░ ░░░░ extensionality ░░░░ that ░░░░ ░░░░ which ░░░░ ░░░░ when ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ should be considered equal.

In pure $\lambda$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the following equation:  

░░░░ $\textsf{M} : \textsf{A} \to \textsf{B}$, ░░░░ ░░░░ a variable $\textsf{x} : \textsf{A}$ which ░░░░ ░░░░ appear ░░░░ in $\textsf{M}$, ░░░░

$$
\lambda \ \textsf{x} \to \textsf{M}\ \textsf{x} = \textsf{M}
$$
░░░░ ░░░░ from right ░░░░ left, ░░░░ means that if ░░░░ want ░░░░ show that two ░░░░ $\textsf{M}$ and $\textsf{N}$ are ░░░░ ░░░░ ░░░░ ░░░░ to show ░░░░ $\textsf{M}\ \textsf{x} = \textsf{N}\ \textsf{x}$ ░░░░ $\textsf{x}$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ not appear ░░░░ $\textsf{M}$ ░░░░ $\textsf{N}$ because,

$$
\begin{aligned}
\textsf{M} &= \lambda \ \textsf{x} \to \textsf{M}\ \textsf{x} \\
           &= \lambda \ \textsf{x} \to \textsf{N}\ \textsf{x} \\
           &= \textsf{N}
\end{aligned}
$$

As ░░░░ ░░░░ ░░░░ ░░░░ $\eta$░░░░ to show that $\textsf{f} \circ \textsf{id} = \textsf{f}$,

$$
\begin{aligned}
\textsf{f} \circ \textsf{id} &= \lambda \ \textsf{x} \to \textsf{f}\ (\textsf{id}\ \textsf{x}) \\
                             &= \lambda \ \textsf{x} \to \textsf{f}\ \textsf{x} \\
                             &= \textsf{f}
\end{aligned}
$$
### Combinatory Logic

The polymorphic ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{id}$ and $\_ \circ \_$, are ░░░░ ░░░░ combinators. ░░░░ ░░░░ ░░░░ to introduce two ░░░░ ░░░░ this section, ░░░░ $\textsf{S}$ ░░░░ $\textsf{K}$░░░░ which ░░░░ _functionally complete_. This means that every ░░░░ ░░░░ we can ░░░░ ░░░░ (pure) $\lambda$-calculus can ░░░░ ░░░░ just using these ░░░░ ░░░░  

This ░░░░ ░░░░ to ░░░░ functions ░░░░ ░░░░ not refer ░░░░ other datatypes ░░░░ $\mathbb{N}$ or $\textsf{Bool}$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ combinators. We are going ░░░░ ░░░░ this ░░░░ providing a translation from $\lambda$-terms into terms only using combinators, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ variables. ░░░░ a ░░░░ combinators ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ code and ░░░░ have indeed been used ░░░░ compilation.

We start ░░░░ $\textsf{K}$, which introduces constant functions,

$$
\begin{aligned}
&\textsf{K} : \textsf{A} \to \textsf{B} \to \textsf{A} \\
&\textsf{K} \ \textsf{x} \ \textsf{y} = \textsf{x}
\end{aligned}
$$

░░░░ for example $\textsf{K} \ 2 : \textsf{B} \to \mathbb{N}$ is ░░░░ ░░░░ that will ░░░░ ░░░░ $2$░░░░ Note that this function is ░░░░ ░░░░ ░░░░ ░░░░ for any ░░░░ $\textsf{B}$.

░░░░ other combinator ░░░░ $\textsf{S}$░░░░ ░░░░ generalizes composition, ░░░░ ░░░░ $\textsf{A}$░░░░ $\textsf{B}$░░░░ $\textsf{C}$░░░░

$$
\begin{aligned}
&\textsf{S} : (\textsf{A} \to \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&\textsf{S} \ \textsf{f} \ \textsf{g} \ \textsf{x} = \textsf{f} \ \textsf{x} \ (\textsf{g} \ \textsf{x})
\end{aligned}
$$

$\textsf{S}$ is similar ░░░░ $\_ \circ \_$, ░░░░ ░░░░ first ░░░░ ░░░░ to see not only ░░░░ ░░░░ of ░░░░ second ░░░░ ░░░░ ░░░░ original ░░░░ So for example $\textsf{S} \ (\lambda \ \textsf{x} \to \textsf{x} + \textsf{y}) \ (\lambda \ \textsf{x} \to 2 * \textsf{x})$ is the same as $\lambda \ \textsf{x} \to \textsf{x} + 2 * \textsf{x}$░░░░

░░░░ ░░░░ derive $\textsf{id}$ (which is usually ░░░░ $\textsf{I}$ in combinatory logic) ░░░░ $\textsf{S}$ ░░░░ $\textsf{K}$░░░░ The idea ░░░░ that ░░░░ ░░░░ ░░░░ ░░░░ from $\textsf{S}$ by ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{f}$ with $\textsf{K}$░░░░ with this obtaining $\textsf{S} \ \textsf{K} = \lambda \ \textsf{g} \to \textsf{K} \ (\textsf{g} \ \textsf{x}) = \lambda \ \textsf{g} \to \textsf{x}$. ░░░░ ░░░░ the identity ░░░░ can substitute $\textsf{g}$ ░░░░ any function. The simplest ░░░░ ░░░░ $\textsf{K}$, i.e. ░░░░ can ░░░░ $\textsf{S} \ \textsf{K} \ \textsf{K} = \textsf{I}$. This might seem like a ░░░░ of ░░░░ technical problem, ░░░░ a ░░░░ $\textsf{A}$ we would ░░░░ to ░░░░

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} = \textsf{S K K}
\end{aligned}
$$
░░░░ ░░░░ is ░░░░ ░░░░ complain because it ░░░░ ░░░░ ░░░░ argument $\textsf{B}$ for the ░░░░ $\textsf{K}$ ░░░░ indeed we can use any ░░░░ ░░░░ ░░░░ ░░░░ choice ░░░░ $\textsf{A}$ and we need to ░░░░ Agda ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} \ \{\textsf{A}\} = \textsf{S K} \ (\textsf{K} \ \{ \textsf{B} = \textsf{A} \})
\end{aligned}
$$
We will ░░░░ ░░░░ that ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ be ░░░░ ░░░░ ░░░░ logic.  
I ░░░░ ░░░░ this ░░░░ ░░░░ we ░░░░ later ░░░░ ░░░░ itself ░░░░ ░░░░ ░░░░ formal ░░░░ of ░░░░ ░░░░

░░░░ let’s ░░░░ ░░░░ as an example. ░░░░ ░░░░ ░░░░ $\_ \circ \_$ ░░░░ a pure $\lambda$░░░░

$$
\_ \circ \_ = \lambda \ \textsf{f} \ \textsf{g} \ \textsf{x} \to \textsf{f} \ (\textsf{g x})
$$
Actually for our ░░░░ it ░░░░ ░░░░ to expand the ░░░░ ░░░░ ░░░░ $\lambda$-abstraction,

$$
\_ \circ \_ = \lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f} \ (\textsf{g x})
$$
░░░░ strategy is to eliminate ░░░░ $\lambda$s ░░░░ inside ░░░░ ░░░░ ░░░░ first we ░░░░ $\lambda \ \textsf{x} \to \textsf{f} \ (\textsf{g x})$ into ░░░░ This term will still ░░░░ the ░░░░ $\textsf{f}$ ░░░░ $\textsf{g}$░░░░ However, next ░░░░ ░░░░ $\textsf{g}$ and then $\textsf{f}$ ░░░░ ░░░░ ░░░░ ░░░░ using only ░░░░ ░░░░ contains ░░░░ ░░░░

The terms which appear during ░░░░ translation ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$-abstractions but may ░░░░ ░░░░ applications, and ░░░░ ░░░░ $\textsf{S}$ ░░░░ $\textsf{K}$. ░░░░ ░░░░ going to ░░░░ $\lambda \ \textsf{x} \to \textsf{M}$ by ░░░░ ░░░░ each ░░░░ ░░░░ possible cases,

* **M = x**: In this ░░░░ ░░░░ $\lambda \ \textsf{x} \to \textsf{x} = \textsf{id}$░░░░ which we ░░░░ ░░░░ obtained as $\textsf{S K K}$.

* **M = y**: ░░░░ the variable is different from $\textsf{x}$ we have a function $\lambda \ \textsf{x} \to \textsf{y}$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is $\textsf{K y}$.

* **M = M₁ M₂**: In ░░░░ case we use ░░░░ ░░░░ ░░░░ we know ░░░░ how to ░░░░  
  $\lambda \ \textsf{x} \to \textsf{M}_1$ and $\lambda \ \textsf{x} \to \textsf{M}_2$. ░░░░ ░░░░ ░░░░

$$
  \begin{aligned}
  \lambda \ \textsf{x} \to \textsf{M} &= \lambda \ \textsf{x} \to \textsf{M}_1\ \textsf{M}_2 \\
                                     &= \textsf{S} \ (\lambda \ \textsf{x} \to \textsf{M}_1) \ (\lambda \ \textsf{x} \to \textsf{M}_2)
  \end{aligned}
  $$
  ░░░░ ░░░░ the need ░░░░ $\textsf{S}$░░░░

* **M = K**: Clearly $\lambda \ \textsf{x} \to \textsf{K}$ ░░░░ ░░░░ a constant function returning $\textsf{K}$░░░░ ░░░░ $\textsf{K K}$.

* **M = S**: As above, $\lambda \ \textsf{x} \to \textsf{S}$ ░░░░ ░░░░ $\textsf{K S}$.

Ok, ░░░░ ░░░░ ░░░░ translation ░░░░ ░░░░ ░░░░ $\lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f (g x)}$. We ░░░░ ░░░░

$$
\begin{aligned}
\lambda \ \textsf{x} \to \textsf{f (g x)} 
  &= \textsf{S} \ (\lambda \ \textsf{x} \to \textsf{f}) \ (\lambda \ \textsf{x} \to \textsf{g x}) \\
  &= \textsf{S} \ (\textsf{K f}) \ (\textsf{S} \ (\lambda \ \textsf{x} \to \textsf{g}) \ (\lambda \ \textsf{x} \to \textsf{x})) \\
  &= \textsf{S} \ (\textsf{K f}) \ (\textsf{S} \ (\textsf{K g}) \ \textsf{id})
\end{aligned}
$$
Before proceeding, ░░░░ ░░░░ ░░░░ ░░░░ to ░░░░ truly gigantic ░░░░ ░░░░ for ░░░░ ░░░░ can ░░░░ ░░░░ $\lambda \ \textsf{x} \to \textsf{g x}$ ░░░░ just $\textsf{g}$ ░░░░ $\eta$░░░░ Another ░░░░ is that ░░░░ the variable $\textsf{x}$ ░░░░ not ░░░░ ░░░░ $\textsf{M}$░░░░ then $\lambda \ \textsf{x} \to \textsf{M}$ is ░░░░ $\textsf{K M}$ ░░░░ there is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{M}$░░░░  

░░░░ these optimisations, we translate $\_ \circ \_$ in one go,

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
░░░░ ░░░░ term is ░░░░ small, ░░░░ ░░░░ ░░░░ hard to understand. The point of ░░░░ is rather ░░░░ show that ░░░░ can avoid all the complications ░░░░ ░░░░ and just ░░░░ away ░░░░ $\textsf{S}$ and $\textsf{K}$ instead.

### Products and Sums

So ░░░░ ░░░░ have only ░░░░ ░░░░ function type. In ░░░░ ░░░░ we will get ░░░░ ░░░░ ░░░░ more basic ░░░░ formers,

░░░░ **products**: ░░░░ $A \times B$, and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ basic mathematics we ░░░░ ░░░░ to represent ░░░░ systems, like $(1, 1) : \mathbb{R} \times \mathbb{R}$░░░░

░░░░ **sums**░░░░ ░░░░ Agda we ░░░░ $A \uplus B$, we might ░░░░ $A + B$ ░░░░ ░░░░ ░░░░ ░░░░ $+$ ░░░░ ░░░░ ░░░░ are ░░░░ called ░░░░ ░░░░ and ░░░░

░░░░ let’s ░░░░ ░░░░ ░░░░ ░░░░ are less common ░░░░ conventional mathematics ░░░░ ░░░░ common in ░░░░ Theory ░░░░ functional programming.

#### Sums

░░░░ ░░░░ necessary ░░░░ ░░░░ alternatives. We ░░░░ ░░░░ ░░░░ ░░░░ another. To define sums ░░░░ ░░░░ ░░░░ $\textsf{\textbf{data}}$ ░░░░

$$
\begin{aligned}
&\textsf{data}\ \uplus\ (\textsf{A} \ \textsf{B} : \textsf{Set}) : \textsf{Set} \ \textsf{where}\\
&\quad \textsf{inj}_1 : \textsf{A} \to \textsf{A} \ \uplus\ \textsf{B}\\
&\quad \textsf{inj}_2 : \textsf{B} \to \textsf{A} \ \uplus\ \textsf{B}
\end{aligned}
$$

This says that ░░░░ element of $A \uplus B$ ░░░░ ░░░░ $\textsf{inj}_1\ \textsf{a}$ where $\textsf{a} : A$ or it is $\textsf{inj}_2\ \textsf{b}$ ░░░░ $\textsf{b} : B$░░░░

░░░░ ░░░░ ░░░░ ░░░░ that ░░░░ in ░░░░ form you can ░░░░ ░░░░ in ░░░░ ░░░░ ░░░░ ░░░░`OrdNum`░░░░ or ░░░░ customer ░░░░ ░░░░`CustRef`) ░░░░ can ░░░░ ░░░░ ░░░░ $\textsf{OrdNum} \uplus \textsf{CustRef}$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ use the ░░░░ ░░░░ value—say 1704—for both, we can ░░░░ be ░░░░ ░░░░ ░░░░ meant by ░░░░ $\textsf{inj}_1\ 1704$ (if it’s an order number) or $\textsf{inj}_2\ 1704$ (if ░░░░ a customer reference).

The ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ strange: it ░░░░ the ░░░░ ░░░░ $\cup$ and ░░░░ ░░░░ ░░░░ $+$, ░░░░ $\uplus$░░░░ We'd prefer ░░░░ just ░░░░ $+$ but ░░░░ ░░░░ with ░░░░ addition.

░░░░ ░░░░ $\cup$ and $\uplus$ related? ░░░░ ░░░░ is no ░░░░ $\cup$ ░░░░ ░░░░$\cup$ is an **intensional** ░░░░ whose ░░░░ ░░░░ on ░░░░ choice of ░░░░ ░░░░ ░░░░ let  
$A = \{a,b\}$ ░░░░ $B = \{0,1,2\}$░░░░ ░░░░

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

$A' \cup B$ has only ░░░░ ░░░░ while $A' \uplus B$ has 5—so $\uplus$ ░░░░ **representation‑insensitive**, a property that all ░░░░ definable in ░░░░ Theory (and ░░░░ ░░░░ Agda) ░░░░

░░░░ can we ░░░░ ░░░░ $\uplus$? A ░░░░ general combinator ░░░░ $\textsf{case}$ ░░░░ ░░░░ ░░░░ ░░░░  
We can define ░░░░ ░░░░ _pattern matching_░░░░

$$
\begin{aligned}
&\textsf{case} : (\textsf{A} \to \textsf{C}) \to (\textsf{B} \to \textsf{C}) \to \textsf{A} \uplus \textsf{B} \to \textsf{C} \\
&\textsf{case}\ \textsf{f}\ \textsf{g}\ (\textsf{inj}_1\ \textsf{a}) = \textsf{f a} \\
&\textsf{case}\ \textsf{f}\ \textsf{g}\ (\textsf{inj}_2\ \textsf{b}) = \textsf{g b}
\end{aligned}
$$
$\textsf{case}$ ░░░░ ░░░░ two ░░░░ $\textsf{f}$ ░░░░ ░░░░ to handle $\textsf{A}$, and $\textsf{g}$ knows ░░░░ to handle $\textsf{B}$.

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ order form $(\textsf{OrdNum} \uplus \textsf{CustRef})$:  
If ░░░░ have ░░░░ ░░░░ to look ░░░░ ░░░░ order using ░░░░ ░░░░ number  $\textsf{lookupOrdNum} : \textsf{OrdNum} \to \textsf{Order}$ and ░░░░ ░░░░ $\textsf{lookupCustRef} : \textsf{CustRef} \to \textsf{Order}$  
we ░░░░ ░░░░ $\textsf{case}$ ░░░░ ░░░░ ░░░░

$$
\textsf{case}\ \textsf{lookupOrdNum}\ \textsf{lookupCustRef} : \textsf{OrdNum} \uplus \textsf{CustRef} \to \textsf{Order}
$$
#### Products

We define ░░░░ ░░░░ ░░░░ ░░░░ case of ░░░░ _record type_░░░░

$$
\begin{aligned}
&\textsf{\textbf{record}}\ \_ \textsf{×} \_ \ (\textsf{A}\ \textsf{B} : \textsf{Set})\ :\ \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{field}} \\
&\quad\quad \textsf{proj}_1\ :\ \textsf{A} \\
&\quad\quad \textsf{proj}_2\ :\ \textsf{B}
\end{aligned}
$$

that is, ░░░░ specify the projections, ░░░░ ░░░░ functions ░░░░ ░░░░ types,

$$
\begin{aligned}
&\textsf{proj}_1\ :\ \textsf{A} \, \textsf{×} \, \textsf{B} \to \textsf{A} \\
&\textsf{proj}_2\ :\ \textsf{A} \, \textsf{×} \, \textsf{B} \to \textsf{B}
\end{aligned}
$$

We ░░░░ ░░░░ elements ░░░░ $\textsf{A} \textsf{×} \textsf{B}$ ░░░░ specifying ░░░░ the result is ░░░░ applying ░░░░  
This ░░░░ ░░░░ _copattern matching_░░░░ ░░░░ example, ░░░░ can use this to ░░░░ the ░░░░ ░░░░ which ░░░░ Agda ░░░░ just the $\_ \ , \_$░░░░ ░░░░ is, ░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ around the ░░░░

$$
\begin{aligned}
&\_ , \_ \ :\ \textsf{A} \to \textsf{B} \to \textsf{A} \ \textsf{×} \ \textsf{B} \\
&\textsf{proj}_1\ (\textsf{a},\ \textsf{b})\ =\ \textsf{a} \\
&\textsf{proj}_2\ (\textsf{a},\ \textsf{b})\ =\ \textsf{b}
\end{aligned}
$$

We can derive ░░░░ constructor automatically ░░░░ adding ░░░░ constructor ░░░░ to the record definition,

$$
\begin{aligned}
&\textsf{\textbf{record}}\ \_ \textsf{×} \_ \ (\textsf{A}\ \textsf{B} : \textsf{Set})\ :\ \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{constructor}}\ \_ , \_ \\
&\quad \textsf{\textbf{field}} \\
&\quad\quad \textsf{proj}_1\ :\ \textsf{A} \\
&\quad\quad \textsf{proj}_2\ :\ \textsf{B}
\end{aligned}
$$

░░░░ ░░░░ ░░░░ do ░░░░ products? ░░░░ ░░░░ a ░░░░ $\textsf{curry}$ that ░░░░ a function ░░░░ ░░░░ ░░░░ ░░░░ curried ░░░░

$$
\begin{aligned}
&\textsf{curry}\ :\ (\textsf{A} \ \textsf{×} \ \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B} \to \textsf{C}) \\
&\textsf{curry}\ \textsf{f}\ =\ \lambda \ \textsf{a}\ \textsf{b} \to \textsf{f}\ (\textsf{a},\ \textsf{b})
\end{aligned}
$$

░░░░ can also do the reverse ░░░░ ░░░░ ░░░░ ░░░░ function back into ░░░░ on products,

$$
\begin{aligned}
&\textsf{uncurry}\ :\ (\textsf{A} \to \textsf{B} \to \textsf{C}) \to (\textsf{A} \ \textsf{×} \ \textsf{B} \to \textsf{C}) \\
&\textsf{uncurry}\ \textsf{g}\ =\ \lambda \ \textsf{x} \to \textsf{g}\ (\textsf{proj}_1\ \textsf{x})\ (\textsf{proj}_2\ \textsf{x})
\end{aligned}
$$
░░░░ ░░░░ two functions ░░░░ ░░░░ ░░░░ ░░░░ other ░░░░ that ░░░░ $\textsf{curry}\ (\textsf{uncurry}\ \textsf{g})\ =\ \textsf{g}$ ░░░░   $\textsf{uncurry}\ (\textsf{curry}\ \textsf{f})\ =\ \textsf{f}$. ░░░░ first ░░░░ follows ░░░░ ░░░░ we already ░░░░

$$
\begin{aligned}
&\textsf{curry}\ (\textsf{uncurry}\ \textsf{g}) \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{uncurry} \ \textsf{g} \ (\textsf{a},\ \textsf{b}) \quad &&\textrm{Unfolding $\textsf{curry}$} \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{g} \ (\textsf{proj}_1 \ (\textsf{a},\ \textsf{b})) \ (\textsf{proj}_2 \ (\textsf{a},\ \textsf{b})) \quad &&\textrm{Unfolding $\textsf{uncurry}$} \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{g} \ \textsf{a} \ \textsf{b} \quad &&\textrm{Evaluating projections} \\
&= \textsf{g} \quad &&\textrm{Use $\eta$ twice}
\end{aligned}
$$
For ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ an $\eta$░░░░ for ░░░░ which ░░░░ ░░░░ $(\textsf{proj}_1\ \textsf{x},\ \textsf{proj}_2\ \textsf{x}) = \textsf{x}$░░░░ ░░░░ is ░░░░ called _surjective pairing_,

$$
\begin{aligned}
&\textsf{uncurry}\ (\textsf{curry}\ \textsf{f}) \\
&= \lambda \ \textsf{x} \to \textsf{curry}\ \textsf{f}\ (\textsf{proj}_1\ \textsf{x})\ (\textsf{proj}_2\ \textsf{x}) \quad &&\textrm{Unfolding $\textsf{uncurry}$} \\
&= \lambda \ \textsf{x} \to \textsf{f}\ (\textsf{proj}_1\ \textsf{x},\ \textsf{proj}_2\ \textsf{x}) \quad &&\textrm{Unfolding $\textsf{curry}$} \\
&= \lambda \ \textsf{x} \to \textsf{f}\ \textsf{x} \quad &&\textrm{Surjective pairing} \\
&= \textsf{f} \quad &&\textrm{$\eta$ for functions} 
\end{aligned}
$$
This ░░░░ that ░░░░ type of ░░░░ ░░░░ products and ░░░░ functions are ░░░░  
Most ░░░░ ░░░░ ░░░░ ░░░░ work ░░░░ curried functions.

#### Strong Sums (?)

We can try to play ░░░░ ░░░░ ░░░░ for ░░░░ ░░░░ ░░░░ ░░░░ using ░░░░ ░░░░ ░░░░ can ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{case-c} : (\textsf{A} \to \textsf{C}) \times (\textsf{B} \to \textsf{C}) \to \textsf{A} \uplus \textsf{B} \to \textsf{C} \\
&\textsf{case-c} = \textsf{uncurry}\ \textsf{case}
\end{aligned}
$$
and hence the inverse of ░░░░ is,

$$
\begin{aligned}
&\textsf{uncase} : (\textsf{A} \uplus \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{C}) \times (\textsf{B} \to \textsf{C}) \\
&\textsf{uncase}\ \textsf{h} = (\lambda \ \textsf{a} \to \textsf{h} \ (\textsf{inj}_1\ \textsf{a}) ,\ \lambda \ \textsf{b} \to \textsf{h} \ (\textsf{inj}_2\ \textsf{b}))
\end{aligned}
$$
We would ░░░░ that the functions ░░░░ inverse to each ░░░░ that is,

$$
\textsf{case-c} \circ \textsf{uncase} = \textsf{id} \quad \text{and} \quad \textsf{uncase} \circ \textsf{case-c} = \textsf{id}
$$
The first ░░░░ ░░░░ ░░░░ show,

$$
\begin{aligned}
&\textsf{uncase}\ (\textsf{case-c}\ \textsf{f}) \\
&= (\lambda \ \textsf{a} \to \textsf{case-c}\ \textsf{f}\ (\textsf{inj}_1\ \textsf{a}),\ \lambda \ \textsf{b} \to \textsf{case-c}\ \textsf{f}\ (\textsf{inj}_2\ \textsf{b})) \quad &&\textrm{Unfold $\textsf{uncase}$}\\
&= (\lambda \ \textsf{a} \to \textsf{proj}_1\ \textsf{f}\ \textsf{a},\ \lambda \ \textsf{b} \to \textsf{proj}_2\ \textsf{f}\ \textsf{b}) \quad &&\textrm{Unfold $\textsf{case-c}$ and $\textsf{case}$} \\
&= (\textsf{proj}_1\ \textsf{f},\ \textsf{proj}_2\ \textsf{f}) \quad &&\textrm{$\eta$ twice}\\
&= \textsf{f} \quad &&\textrm{Surjective pairing}
\end{aligned}
$$
░░░░ ░░░░ 2nd equality ░░░░ hold ░░░░ Agda. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ using ░░░░ equality $\_ \equiv \_$░░░░ ░░░░ ░░░░ are ░░░░ ░░░░ introduce later. The ░░░░ $\_ = \_$ ░░░░ have been ░░░░ here when talking _about_ $\lambda$-terms ░░░░ ░░░░ **definitional equality**░░░░

Indeed, ░░░░ $\eta$-laws ░░░░ ░░░░ and surjective pairing ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ _definitional equality_ ░░░░ ░░░░ are mainly introduced ░░░░ ░░░░ The corresponding ░░░░ ░░░░ other types (e.g. natural numbers) ░░░░ ░░░░ decidability ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ for a language like ░░░░

It ░░░░ ░░░░ (though not ░░░░ ░░░░ ░░░░ add $\eta$░░░░ for $\_ + \_$░░░░ ░░░░ this ░░░░ usually ░░░░ ░░░░ ░░░░ it would quickly ░░░░ ░░░░ ░░░░ exponential blow-up in case trees ░░░░ ░░░░ computationally too ░░░░

#### Finite Types

The ░░░░ $\_ \textsf{×} \_$ ░░░░ have introduced handles the ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ use ░░░░ several times to ░░░░ more components, ░░░░ ░░░░ $\textsf{A} \ × \ \textsf{B} \ × \ \textsf{C}$░░░░ In ░░░░ it ░░░░ better ░░░░ use ░░░░ ░░░░ ░░░░ more meaningful field names ░░░░ $\textsf{proj}_1$, ░░░░

However, ░░░░ interesting case ░░░░ ░░░░ by binary ░░░░ ░░░░ the nullary ░░░░ ░░░░ ░░░░ type.  
In ░░░░ this ░░░░ ░░░░ ░░░░ $\top$ and can be ░░░░ as a record with no ░░░░

$$
\begin{aligned}
&\textsf{record}\ \top : \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{constructor}}\ \textsf{tt}
\end{aligned}
$$
It ░░░░ ░░░░ element $\textsf{tt} : \top$░░░░

We can ░░░░ ░░░░ same game with ░░░░ ░░░░ ░░░░ the ░░░░ sum, ░░░░ is a ░░░░ with ░░░░ injections,

$$
\begin{aligned}
&\textsf{data}\ \bot : \textsf{Set}\ \textsf{\textbf{where}}
\end{aligned}
$$

The empty ░░░░ is ░░░░ ░░░░ type; ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ no elements. ░░░░ version ░░░░ case for the empty type ░░░░ ░░░░ useful,

$$
\begin{aligned}
&\textsf{case}_\bot : \{\textsf{A} : \textsf{Set}\} \to \textsf{⊥} \to \textsf{A} \\
&\textsf{case}_\bot\ ()
\end{aligned}
$$

We ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\bot$ ░░░░ Agda marks ░░░░ ░░░░ $()$ which means this ░░░░ analysis has ░░░░ ░░░░ left ░░░░ ░░░░ is fine — we ░░░░ never ░░░░ ░░░░ ░░░░ because ░░░░ isn’t an ░░░░ in the empty ░░░░

We ░░░░ ░░░░ ░░░░ unit ░░░░ $\top$ and sums $\uplus$ ░░░░ ░░░░ some finite ░░░░ ░░░░ example, $\textsf{Two} : \textsf{Set}$ is a ░░░░ with ░░░░ elements,

$$
\begin{aligned}
&\textsf{Two} : \textsf{Set} \\
&\textsf{Two} = \top \uplus \top
\end{aligned}
$$
░░░░ are the elements,

$$
\begin{aligned}
&\textsf{zero}_2 : \textsf{Two} \\
&\textsf{zero}_2 = \textsf{inj}_1\ \textsf{tt} \\
&\textsf{one}_2 : \textsf{Two} \\
&\textsf{one}_2 = \textsf{inj}_2\ \textsf{tt}
\end{aligned}
$$

░░░░ can ░░░░ ░░░░ ░░░░ element ░░░░ ░░░░ ░░░░ construct ░░░░ a type ░░░░ 3 elements,

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

░░░░ ░░░░ already in ░░░░ ░░░░ of products, ░░░░ ░░░░ it ░░░░ ░░░░ ░░░░ to ░░░░ $\textsf{\textbf{data}}$ to define ░░░░ ░░░░

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

How many ░░░░ ░░░░ ░░░░ $\textsf{Two} \uplus \textsf{Three}$? An ░░░░ is $\textsf{inj}_2\ \textsf{one}_2$░░░░ ░░░░ ░░░░ the ░░░░ between $\textsf{inj}_1$ and $\textsf{inj}_2$ ░░░░ ░░░░ we choose $\textsf{inj}_1$ we get 2 options, and if we choose $\textsf{inj}_2$ ░░░░ get ░░░░ ░░░░ So we ░░░░ $2 + 3 = 5$ ░░░░ elements,

$$\textsf{inj}_1\ \textsf{zero}_2, \ \textsf{inj}_1\ \textsf{one}_2, \ \textsf{inj}_2\ \textsf{zero}_3, \ \textsf{inj}_2\ \textsf{one}_3, \ \textsf{inj}_2\, \ \textsf{two}_3$$     

░░░░ ░░░░ ░░░░ ░░░░ has $n$ ░░░░ and ░░░░ ░░░░ $m$ elements, then $A \uplus B$ has $n + m$ elements.

How many elements ░░░░ in $\textsf{Two} \textsf{×} \textsf{Three}$? ░░░░ ░░░░ ░░░░ ░░░░ $\textsf{one}_2 , \textsf{two}_3$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ 2 independent ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $2 \times 3 = 6$ ░░░░

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



In general, if A has $n$ ░░░░ and B has $m$ elements, ░░░░ $\textsf{A} \times \textsf{B}$ ░░░░ $\textsf{m} \times \textsf{n}$ ░░░░

░░░░ ░░░░ the function type? How many elements are ░░░░ $\textsf{Two} \to \textsf{Three}$? Here ░░░░ ░░░░ typical example,

$$
\begin{aligned}
&\textsf{foo} : \textsf{Two} \to \textsf{Three} \\
&\textsf{foo}\ \textsf{zero}_2 = \textsf{two}_3 \\
&\textsf{foo}\ \textsf{one}_2 = \textsf{one}_3
\end{aligned}
$$

░░░░ can ░░░░ any such function ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ 3 ░░░░ ░░░░ ░░░░ case, ░░░░ $3 \times 3 = 3^2 = 9$ ░░░░ Now unlike products ░░░░ sums, function types are ░░░░ ░░░░

How many elements are in $\textsf{Three} \to \textsf{Two}$░░░░ Here again is a ░░░░ ░░░░

$$
\begin{aligned}
&\textsf{bar} : \textsf{Three} \to \textsf{Two} \\
&\textsf{bar}\ \textsf{zero}_3 = \textsf{zero}_2 \\
&\textsf{bar}\ \textsf{one}_3 = \textsf{one}_2 \\
&\textsf{bar}\ \textsf{two}_3 = \textsf{zero}_2
\end{aligned}
$$

There are 3 cases because ░░░░ are 3 elements ░░░░ $\textsf{Three}$░░░░ ░░░░ ░░░░ each ░░░░ we have a choice ░░░░ 2, hence we have $2 \times 2 \times 2 = 2^3 = 8$ ░░░░

░░░░ these ░░░░ ░░░░ ░░░░ see ░░░░ in general ░░░░ A has $n$ ░░░░ ░░░░ B ░░░░ $m$ ░░░░ ░░░░ $A \to B$ has $m^n$ ░░░░ ░░░░ in mathematics the function ░░░░ ░░░░ ░░░░ written as an exponential, ░░░░ is $A \to B$ is ░░░░ as $B^A$.

░░░░ ░░░░ have shown ░░░░ types $A \times B \to C$ ░░░░ $A \to B \to C$ ░░░░ equivalent ░░░░ ░░░░ and ░░░░ Writing ░░░░ ░░░░ exponential ░░░░ we find ░░░░ ░░░░ ░░░░ ░░░░ high ░░░░

$$
C^{A \times B} = (C^B)^A
$$

Similarly, with strong coproducts we ░░░░ ░░░░ that $(A \to C) \times (B \to C)$ ░░░░ $A \uplus B \to C$ are equivalent (via $\textsf{case-c}$ and $\textsf{uncase}$). ░░░░ ░░░░ write $+$ ░░░░ $\uplus$, ░░░░ ░░░░ ░░░░ ░░░░ well-known ░░░░

$$
C^A \times C^B = C^{A + B}
$$

### History

$\lambda$-calculus was invented by ░░░░ ░░░░ ░░░░ used ░░░░ in papers ░░░░ formal logic ░░░░ ░░░░ 1930s. The ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$ ░░░░ by ░░░░ Church ░░░░ ░░░░ graphical notation where ░░░░ connected the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ variable. But the typesetter ░░░░ was not only ░░░░ ░░░░ but ░░░░ ░░░░ went ░░░░ and ░░░░ _Sorry Professor, I can’t do that. But this looks a bit like a $\lambda$. Is it ok if I use just this?_

Church realised that ░░░░ ░░░░ the ░░░░ ░░░░ his ░░░░ was ░░░░ he could define ░░░░ ░░░░ ░░░░ functions, ░░░░ ░░░░ ░░░░ ░░░░ _fix point combinator_ ░░░░ allows to ░░░░ the ░░░░ of ░░░░ ░░░░ ░░░░ general ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ point ░░░░ negation? To avoid ░░░░ ░░░░ of problems Church ░░░░ ░░░░ ░░░░ typed $\lambda$░░░░

Church had two ░░░░ types, $\iota$ ░░░░ ░░░░ ░░░░ _iota_) ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ greek letter $\omicron$ ░░░░ it ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ o) ░░░░ ░░░░ ░░░░ motivated ░░░░ his intended application ░░░░ ░░░░ ░░░░ We will ░░░░ consider ░░░░ fixed ░░░░ ░░░░ ░░░░ types but a ░░░░ ░░░░ ░░░░ type ░░░░

The ░░░░ $\lambda$░░░░ is ░░░░ useful as ░░░░ ░░░░ ░░░░ language ░░░░ is an alternative ░░░░ ░░░░ machines. Indeed ░░░░ ░░░░ Turing ░░░░ Church ░░░░ realised that ░░░░ ░░░░ and $\lambda$░░░░ ░░░░ ░░░░ same set of computable ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ to all ░░░░ mechanism is ░░░░ as the ░░░░ ░░░░

░░░░ many papers about typed $\lambda$-calculus one ░░░░ ░░░░ the ░░░░ $\lambda$░░░░ and then ░░░░ a ░░░░ system ░░░░ ░░░░ as ░░░░ way of assigning types to untyped terms. ░░░░ do ░░░░ ░░░░ ░░░░ view ░░░░ ░░░░ perhaps too syntactic ░░░░ ░░░░ typed ░░░░ as ░░░░ We ░░░░ this _intrinsic typing_. ░░░░ ░░░░ ░░░░ true if ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$-terms we ░░░░ ░░░░ some point think ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ also ░░░░ ░░░░ ░░░░ about strings, ░░░░ ░░░░ ░░░░ ░░░░ will ░░░░ ░░░░ ░░░░ these ░░░░ ░░░░

Combinatory logic ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$░░░░ ░░░░ Moses Schönfinkel ░░░░ ░░░░ 1920s. Again his ░░░░ ░░░░ ░░░░ ░░░░ logic and ░░░░ ░░░░ ░░░░ combinators ░░░░ a nice ░░░░ ░░░░ avoid the complexities ░░░░ ░░░░ ░░░░ ░░░░ also the ░░░░ of Haskell Curry ░░░░ ░░░░ ░░░░ logic ░░░░ or ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ now. Some ░░░░ say ░░░░ the ░░░░ ░░░░ _currying_ ░░░░ ░░░░ with several ░░░░ which is named ░░░░ ░░░░ should have been ░░░░ _schönfinkeln_ but ░░░░ ░░░░ caught ░░░░

To understand our presentation ░░░░ ░░░░ ░░░░ sums better (also called coproducts) ░░░░ needs to ░░░░ ░░░░ category ░░░░ Category ░░░░ ░░░░ basically an ░░░░ ░░░░ ░░░░ algebra ░░░░ was introduced by ░░░░ MacLane ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ mainly from pure mathematics, algebraic ░░░░ ░░░░ later it was realised that category theory ░░░░ also ░░░░ ░░░░ for ░░░░ computer ░░░░ One important ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that a ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ _cartesian closed categories_░░░░ corresponds ░░░░ to ░░░░ $\lambda$-calculus. ░░░░ the categorical ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ function ░░░░ are characterised ░░░░ the ░░░░ ░░░░ ░░░░ the ░░░░ features of ░░░░ theory is ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░_duality_░░░░ ░░░░ it turns out that the ░░░░ ░░░░ ░░░░ dual) ░░░░ products are sums or ░░░░ ░░░░ we have introduced ░░░░ ░░░░ ░░░░ ░░░░ useful.

At ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ image of functions is? This is ░░░░ ░░░░ story but ░░░░ short ░░░░ is that ░░░░ isn’t ░░░░ ░░░░ we assume that ░░░░ ░░░░ one, ░░░░ ░░░░ collapses: all $\lambda$░░░░ are ░░░░

$\lambda$░░░░ ░░░░ ░░░░ for programming, ░░░░ ░░░░ precise in _functional programming_. Indeed the ░░░░ ░░░░ programming language, ░░░░ (The oldest is ░░░░ was developed ░░░░ ░░░░ ░░░░ in ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\lambda$-calculus. ░░░░ types ░░░░ introduced, ░░░░ component of the ░░░░ LCF ░░░░ ░░░░_Logic for computable functions_░░░░ ░░░░ languages like ░░░░ ░░░░ ░░░░ Haskell ░░░░ ░░░░ ░░░░ ░░░░ modern instances of ░░░░ functional languages ░░░░ Agda’s syntax ░░░░ ░░░░ has ░░░░ influenced by ░░░░