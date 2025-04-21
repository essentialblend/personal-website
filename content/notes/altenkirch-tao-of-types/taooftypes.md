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

Before exploring dependent types with all its beautiful complexities we'll take a look at something simpler, appropriately named _simple types_, starting with the most fundamental type of all, the functon type $\_\to\_$. One issue with simple types is that it is not clear what to start with. We'll generalize this with constructions which work for any type, called $\textsf{Set}$ in Agda. That is, we will use _polymorphic_ constructions without introducing a formal account for polymorphism which we will do later once we have dependent types in our arsenal. Examples of polymorphic constructions are identity $\textsf{id}$ and composition $\_ \circ \_$ which give us a first taste of category theory.

We will have a superficial look at $\lambda$-calculus, by which we specifically mean _typed_ $\lambda$-calculus and also explore combinatory logic with two combinators ($\textsf{S}$ and $\textsf{K}$), but the price to pay is some completely unreadable combinator code. It's worthwhile to know about them and we will explore them later in depth.

Functions are nmot all there is to simple types and hence we will also look at sums ($\_ \uplus  \_$) and products ($\_ \times \_$). Finally we will meet some old acquaintances from high school in a type-theoretical context.

### Functions

In Type Theory, functions are a fundamental concept. This is different from set theory where functions are viewed as a special kind of relations, namely relations that assign to each element of the domain, exactly one element of the codomain (the output). In Type Theory, it is the other way around: we start with functions and actually we need functions to say what relations are. A relation between $A$ and $B$ is a function from $A$ and $B$ to the type of propositions. 

Intuitively a function between types $\textsf{A}$ and $\textsf{B}$ is a black box where we can input elements of $\textsf{a} : \textsf{A}$ and out come elements of $\textsf{f} \ \textsf{a} : \textsf{B}$. Notice that we don't write $f(a)$ as usual in mathematics and in many programming languages but instead save brackets and just write $\textsf{f} \ \textsf{a}$, as in functional programming languages like Haskell. We write $\textsf{f} : \textsf{A} \to \textsf{B}$ to express that $\textsf{f}$ is such a function.

When we say a _black box_, we mean it metaphorically, that is, we cannot peak into this box. If someone gives us a function, all we can do is feed it input and observe its output. There is no way to explore the mechanism (sort of a DRM for functions). 

Let's look at some examples! For the purpose of illustration, we will use some types like the natural numbers $\N = {0, 1, 2, 3, \dots}$ and the booleans $\textsf{Bool} = \{\textsf{true}, \textsf{false}\}$ even though we will only introduce them later. Let's define a function which adds $2$ to its input. 

$$
\begin{aligned}
	&\textsf{add2} : \N \to \N \\
    &\textsf{add2} \ \textsf{x} = \textsf{x + 2}
\end{aligned}
$$

To define $\textsf{add2}$ we introduce a parameter $\textsf{x}$. Now we can apply $\textsf{add2}$ to a number as in $\textsf{3}$ and observe $\textsf{add2 3}$ which is $\textsf{5}$. In the first step, we replace the parameter $\textsf{x}$ with the actual argument $\textsf{2}$ and then we use our knowledge about addition to conclude. The first step, replacing the parameter with the argument, is called $\beta$-reduction.

The definition above combines naming and defining the function. If we ust want to write a function without giving it a name, we can use $\lambda$-abstraction. That is, we could have defined the same function as follows,

$$
\begin{aligned}
&\textsf{add2} : \N \to \N \\
&\textsf{add2} = \lambda \ \textsf{x} \to \textsf{x} + 2 
\end{aligned}
$$

We can view the first definition as an abbreviation for the second. We can now give a more detailed derivation where we differentiate the unfolding of a definition and $\beta$-reduction.

$$
\begin{aligned}
\textsf{add2 3} &= (\lambda \ \textsf{x} \to \textsf{x} + \textsf{2}) \ \textsf{3} \quad &&\textrm{Unfolding the definition.} \\
				&= 3 + 2 \quad &&\textrm{$\beta$-reduction.} \\
                &= 5 \quad &&\textrm{Calculating the sum.}
\end{aligned}
$$
Using $\lambda$, we can only define functions with one parameter. To define the function with several parameters we use _currying_, that is a function that returns a function,

$$
\begin{aligned}
&\textsf{add} : \N \to (\N \to \N) \\
&\textsf{add} = \lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y})
\end{aligned}
$$

So $\textsf{add 3} : \N \to \N$ is the function $\lambda \ \textsf{y} \to 3 + \textsf{y}$ that is the function that adds $\textsf{3}$, and $(\textsf{add 3}) \ 5$ reduces to $5 + 3$ and hence $8$.

There are many syntactic conventions to simplify the use of currying: $\to$ is _right-associative_, hence we can write $\N \to \N \to \N$ for $\N \to (\N \to \N)$ and application is _left-associative_ hence we can write $\textsf{g 3 5}$ for $(\textsf{g 3}) \ \textsf{5}$. Moreover we can combine several $\lambda$-abstractions and write $\lambda \ \textsf{x} \ \textsf{y} \to \textsf{x} + \textsf{y}$ for $\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y})$. Consequently, the same also applies for the explicit function definition: 

$$
\begin{aligned}
&\textsf{add} : \N \to \N \to \N \\
&\textsf{add} \ \textsf{x} \ \textsf{y} = \textsf{x + y}    
\end{aligned}
$$
Instead of returning a function we can also have functions that take in other functions as inputs, called _higher order functions_. An example is,

$$
\begin{aligned}
&\textsf{k} : (\N \to \N) \to \N \\
&\textsf{k h} = \textsf{h 2} + \textsf{h 3} 
\end{aligned}
$$
Note that we cannot omit the brackets in the function type. $\textsf{k}$ is a function that gets a function on the natural numbers as input and returns a number. What is $\textsf{k add2}$? We can reason as follows,

$$
\begin{aligned}
\textsf{k add2} &= \textsf{add2 2} + \textsf{add2 3} \\
				&= \textsf{(2 + 2) + (3 + 2)} \\
                &= \textsf{9}
\end{aligned}
$$

### Identity and Composition

Some functions work for any type, we call them _polymorphic_. An example is the identity function $\textsf{id} : \textsf{A} \to \textsf{A}$ which works for every type $\textsf{A} : \textsf{Set}$. In Agda, we can write,

$$
\begin{aligned}
&\textsf{id} : \{\textsf{A} : \textsf{Set}\} \to \textsf{A} \to \textsf{A} \\
&\textsf{id x} = \textsf{x}
\end{aligned}
$$
Writing $\{\textsf{A} : \textsf{Set} \to \dots \}$ indicates that the function works for every $\textsf{Set}$. Agda will automatically instantiate $\textsf{A}$ that is we can just write $\textsf{id 3} : \N$ and Agda infers that $\textsf{A} = \N$ in this case. In some cases it may be necessary to instantiate the type variable explicitly, in this case, we can write $\textsf{id} \ \{\N\}$ or in case there are many parameters but we only want to instantiate a specific one we write $\textsf{id} \ \{\textsf{A} = \N\}$.

We will later explain types like $\{\textsf{A} : \textsf{Set} \to \dots\}$ which are actually instances of dependent types. In the moment we view polymorphism as a mathematical notion, and we will use $\textsf{A} \ \textsf{B} \ \textsf{C} : \textsf{Set}$ to indicate variable types. In Agda this can be achieved by declaring the variables $\textsf{A}$, $\textsf{B}$, $\textsf{C}$ of the type $\textsf{Set}$,

$$
\begin{aligned}
\textsf{A} \ \textsf{B} \ \textsf{C} : \textsf{Set}
\end{aligned}
$$
now, we can write,

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} = \textsf{x}
\end{aligned}
$$
and Agda will automatically translate the type into $\{\textsf{A} : \textsf{Set} \} \to \textsf{A} \to \textsf{A}$. We can draw a picture for the identity function which simply consists of a wire from the input to the output.

Another example is function composition: given $\textsf{g} : \textsf{A} \to \textsf{B}$ and $\textsf{f} : \textsf{B} \to \textsf{C}$, we can construct a new function $\textsf{f} \circ \textsf{g} : \textsf{A} \to \textsf{C}$ which feeds the output of $\textsf{g}$ into the input of $\textsf{f}$. 

Composition can also be defined as a polymorphic function:

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&(\textsf{f} \circ \textsf{g}) \ \textsf{x} = \textsf{f} \ (\textsf{g} \ \textsf{x})
\end{aligned}
$$
In Agda, we can define infix functions (and indeed more complicated syntactic schemes) by using $\_$ to indicate where the arguments go. The price we pay for this flexibility is that we have to separate any syntactical component with spaces, e.e. Agda would read $\textsf{f} \circ \textsf{g}$ as one identifier.

Let's do an example. Earlier we define the function $\textsf{add2} : \N \to \N$, in the same vein as a squaring function,

$$
\begin{aligned}
&\textsf{square} : \N \to \N \\
&\textsf{square} \ \textsf{x} = \textsf{x} * \textsf{x}
\end{aligned}
$$
Now we can construct $\textsf{square} \circ \textsf{add2} : \N \to \N$. What is $(\textsf{square} \circ \textsf{add2}) \ \textsf{3}$?

$$
\begin{aligned}
(\textsf{square} \circ \textsf{add2}) \ 3 &= \textsf{square} \ (\textsf{add2 3}) \\
										  &= \textsf{square} \ (\textsf{3 + 2}) \\
                                          &= \textsf{square} \ \textsf{5} \\
                                          &= \textsf{5 * 5} \\
                                          &= \textsf{25}
\end{aligned}
$$
A corollary evident from this example is that function composition is not commutative, what is $(\textsf{add2} \circ \textsf{square}) \ \textsf{3}$?

$$
\begin{aligned}
(\textsf{add2} \circ \textsf{square}) \ 3 &= \textsf{add2} \ (\textsf{square 3}) \\
										  &= \textsf{add2} \ (\textsf{3 * 3}) \\
                                          &= \textsf{add2} \ 9 \\
                                          &= \textsf{2 + 9} \\
                                          &= \textsf{11}
\end{aligned}
$$
Hence we can see that $\textsf{square} \circ \textsf{add2}$ and $\textsf{add2} \circ \textsf{square}$ are different functions. In any case it isn't always possible to turn around composition. Assume as given a function $\textsf{IsEven} : \N \to \textsf{Bool}$ that returns $\textsf{true}$ if the input is even, and $\textsf{false}$ otherwise. Now we can form $\textsf{isEven} \circ \textsf{square} : \N \to \textsf{Bool}$ but it doesn't make sense to form $\textsf{square} \circ \textsf{isEven}$ because the output of $\textsf{isEven}$ is $\textsf{Bool}$ and that doesn't match the input of $\textsf{square}$ as its $\N$. 

One may also notice that there is a strange twist in the order of arguments to $\_ \circ \_$ which is visible in its type $(\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C})$. Why is it not $(\textsf{A} \to \textsf{B}) \to (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{C})$? And indeed if we evaluate $\textsf{f} \circ \textsf{g}$ we first evaluate $\textsf{g}$, then $\textsf{f}$. However, the reason is that function application is already written the _wrong way_ around, that is, when we evaluate $\textsf{square} \ (\textsf{add2 3})$ we first evaluate $\textsf{add2 3}$ and then $\textsf{square 5}$, which is actually counterintuitive for those who read left to right. 

### $\lambda$-calculus

As we discussed, we can view the explicit definition of a function like,

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&(\textsf{f} \circ \textsf{g}) \ \textsf{x} = \textsf{f} \ (\textsf{g x}) \\
\end{aligned}
$$
is a shorthand for an explicit definition using $\lambda$-terms,

$$
\begin{aligned}
&\_ \circ \_ : (\textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&\_ \circ \_  = \lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f} \ \textsf{(g x)}
\end{aligned}
$$
And since unfolding definitions is standard practice in mathematics and else-where, we concentrate on what happens to $\lambda$-terms.

When we form a $\lambda$-term we are using variables. Hence beginners often ask _What is the type of a variable?_ The answer is that we assume that we are given a type of any variable, this is often called the (_typing_) context. The other cases are _application_ and $\lambda$-abstraction,

- **variable**: A variable $\textsf{x}$ has the type we have assumed for it in-context.
- **application**: Given a term $\textsf{M} : \textsf{A} \to \textsf{B}$ and a term $\textsf{N} : \textsf{A}$, we can form a term $\textsf{M N : B}$.
- **abstraction**: Given a variable $\textsf{x}$ if from assuming $\textsf{x} : \textsf{A}$ we can show that $\textsf{M : B}$, then we we can form $\lambda \ \textsf{x} \to \textsf{M} : \textsf{A} \to \textsf{B}$.

This covers the _pure_ $\lambda$-terms which don't use constructions which are specific to datatypes like $\N$ and $\textsf{Bool}$ or standard in-context function types.

$\beta$-equality means that we can reduce an application of a $\lambda$-abstraction to an argument by substituting the variable with the argument, that is,

$$(\lambda \ \textsf{x} \to \textsf{M}) \ \textsf{N} = \textsf{M}[\textsf{x} \coloneqq \textsf{N}]$$

where $\textsf{M}[\textsf{x} \coloneqq \textsf{N}]$ is $\textsf{M}$ with all occurences of $\textsf{x}$ replaced by $\textsf{N}$.

Actually, it is a bit more complicated. We certainly do not want to replace bound variables, that is $(\lambda \ \textsf{x} \to (\lambda \ \textsf{x} \to \textsf{x})) \ 3$ should just be $\lambda \ \textsf{x} \to \textsf{x}$ and not $\lambda \ \textsf{x} \to \textsf{3}$. We remedy this by saying that $\textsf{M}[\textsf{x} \coloneqq \textsf{N}]$ is $\textsf{M}$ with all _free_ occurences of $\textsf{x}$ replaced by $\textsf{N}$. An occurence is free if unbound.

We are not done! Consider $\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y})$ and let's say we have a variable $\textsf{y}$ lying around. What is $(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x + y}) ) \ \textsf{y}$? If we mechanically replace $\textsf{x}$ with $\textsf{y}$, we obtain $\lambda \ \textsf{y} \to \textsf{y + y}$. This is wrong because the $\textsf{y}$ represents the bound variable $\textsf{y}$ and not the top-level $\textsf{y}$. This is called _variable capture_ and must be avoided.

But then what is  $(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y}))\ \textsf{y}$?  

Here we introduce another equality, $\alpha$-equivalence, which says that bound variables can be consistently replaced, i.e. $\lambda \ \textsf{y} \to \textsf{x} + \textsf{y} = \lambda \ \textsf{z} \to \textsf{x} + \textsf{z}$.  

Using this, we can avoid capture by replacing the bound variable $\textsf{y}$ — avoiding capture. That is,$(\lambda \ \textsf{x} \to (\lambda \ \textsf{y} \to \textsf{x} + \textsf{y})) = \lambda \ \textsf{x} \to \textsf{x} + \textsf{z}$. Note that any variable but $\textsf{y}$ would work here.

There is yet another equation, $\eta$-equality, which is motivated by the idea of extensionality — that two functions which are equal when applied to the same argument should be considered equal.

In pure $\lambda$-calculus, this is obtained by adding the following equation:  

Assume $\textsf{M} : \textsf{A} \to \textsf{B}$, and given a variable $\textsf{x} : \textsf{A}$ which does not appear free in $\textsf{M}$, then,

$$
\lambda \ \textsf{x} \to \textsf{M}\ \textsf{x} = \textsf{M}
$$
Reading it from right to left, it means that if you want to show that two functions $\textsf{M}$ and $\textsf{N}$ are equal, it is enough to show that $\textsf{M}\ \textsf{x} = \textsf{N}\ \textsf{x}$ where $\textsf{x}$ is a variable which does not appear in $\textsf{M}$ or $\textsf{N}$ because,

$$
\begin{aligned}
\textsf{M} &= \lambda \ \textsf{x} \to \textsf{M}\ \textsf{x} \\
           &= \lambda \ \textsf{x} \to \textsf{N}\ \textsf{x} \\
           &= \textsf{N}
\end{aligned}
$$

As an example, we use $\eta$-equality to show that $\textsf{f} \circ \textsf{id} = \textsf{f}$,

$$
\begin{aligned}
\textsf{f} \circ \textsf{id} &= \lambda \ \textsf{x} \to \textsf{f}\ (\textsf{id}\ \textsf{x}) \\
                             &= \lambda \ \textsf{x} \to \textsf{f}\ \textsf{x} \\
                             &= \textsf{f}
\end{aligned}
$$
### Combinatory Logic

The polymorphic functions from section 2.2, $\textsf{id}$ and $\_ \circ \_$, are also called combinators. We are going to introduce two combinators in this section, called $\textsf{S}$ and $\textsf{K}$, which are _functionally complete_. This means that every function which we can write in (pure) $\lambda$-calculus can be written just using these two combinators.  

This applies only to pure functions which do not refer to other datatypes (like $\mathbb{N}$ or $\textsf{Bool}$), which would require additional combinators. We are going to show this by providing a translation from $\lambda$-terms into terms only using combinators, which means that we can eliminate all variables. In a way, combinators are a form of functional machine code and they have indeed been used for compilation.

We start with $\textsf{K}$, which introduces constant functions,

$$
\begin{aligned}
&\textsf{K} : \textsf{A} \to \textsf{B} \to \textsf{A} \\
&\textsf{K} \ \textsf{x} \ \textsf{y} = \textsf{x}
\end{aligned}
$$

So for example $\textsf{K} \ 2 : \textsf{B} \to \mathbb{N}$ is the function that will always return $2$. Note that this function is still polymorphic, it works for any type $\textsf{B}$.

The other combinator is $\textsf{S}$, which generalizes composition, given types $\textsf{A}$, $\textsf{B}$, $\textsf{C}$,

$$
\begin{aligned}
&\textsf{S} : (\textsf{A} \to \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B}) \to (\textsf{A} \to \textsf{C}) \\
&\textsf{S} \ \textsf{f} \ \textsf{g} \ \textsf{x} = \textsf{f} \ \textsf{x} \ (\textsf{g} \ \textsf{x})
\end{aligned}
$$

$\textsf{S}$ is similar to $\_ \circ \_$, but the first function gets to see not only the result of the second but also the original input. So for example $\textsf{S} \ (\lambda \ \textsf{x} \to \textsf{x} + \textsf{y}) \ (\lambda \ \textsf{x} \to 2 * \textsf{x})$ is the same as $\lambda \ \textsf{x} \to \textsf{x} + 2 * \textsf{x}$.

We can derive $\textsf{id}$ (which is usually written $\textsf{I}$ in combinatory logic) from $\textsf{S}$ and $\textsf{K}$. The idea is that we can derive it from $\textsf{S}$ by replacing the first argument $\textsf{f}$ with $\textsf{K}$, with this obtaining $\textsf{S} \ \textsf{K} = \lambda \ \textsf{g} \to \textsf{K} \ (\textsf{g} \ \textsf{x}) = \lambda \ \textsf{g} \to \textsf{x}$. To get the identity we can substitute $\textsf{g}$ with any function. The simplest choice is $\textsf{K}$, i.e. we can form $\textsf{S} \ \textsf{K} \ \textsf{K} = \textsf{I}$. This might seem like a bit of a technical problem, given a type $\textsf{A}$ we would like to define,

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} = \textsf{S K K}
\end{aligned}
$$
Actually Agda is going to complain because it cannot infer the argument $\textsf{B}$ for the 2nd $\textsf{K}$ — indeed we can use any type here. The simplest choice is $\textsf{A}$ and we need to tell Agda this explicitly,

$$
\begin{aligned}
&\textsf{id} : \textsf{A} \to \textsf{A} \\
&\textsf{id} \ \{\textsf{A}\} = \textsf{S K} \ (\textsf{K} \ \{ \textsf{B} = \textsf{A} \})
\end{aligned}
$$
We will now show that every pure lambda term can be translated into combinatory logic.  
I will do this informally — we will later use Agda itself to give a formal proof of this theorem.

Now let’s do composition as an example. We can write $\_ \circ \_$ as a pure $\lambda$-term,

$$
\_ \circ \_ = \lambda \ \textsf{f} \ \textsf{g} \ \textsf{x} \to \textsf{f} \ (\textsf{g x})
$$
Actually for our purposes it is better to expand the shorthand for repeated $\lambda$-abstraction,

$$
\_ \circ \_ = \lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f} \ (\textsf{g x})
$$
Our strategy is to eliminate the $\lambda$s from inside out, that is first we translate $\lambda \ \textsf{x} \to \textsf{f} \ (\textsf{g x})$ into combinators. This term will still contain the variables $\textsf{f}$ and $\textsf{g}$. However, next we abstract $\textsf{g}$ and then $\textsf{f}$ to obtain a term using only combinators that contains no variables.

The terms which appear during the translation are terms which have no $\lambda$-abstractions but may contain variables, applications, and the combinators $\textsf{S}$ and $\textsf{K}$. We are going to construct $\lambda \ \textsf{x} \to \textsf{M}$ by looking at each of the possible cases,

* **M = x**: In this case clearly $\lambda \ \textsf{x} \to \textsf{x} = \textsf{id}$, which we have already obtained as $\textsf{S K K}$.

* **M = y**: If the variable is different from $\textsf{x}$ we have a function $\lambda \ \textsf{x} \to \textsf{y}$ which is a constant function, that is $\textsf{K y}$.

* **M = M₁ M₂**: In this case we use the assumption that we know already how to translate  
  $\lambda \ \textsf{x} \to \textsf{M}_1$ and $\lambda \ \textsf{x} \to \textsf{M}_2$. Now we have,

$$
  \begin{aligned}
  \lambda \ \textsf{x} \to \textsf{M} &= \lambda \ \textsf{x} \to \textsf{M}_1\ \textsf{M}_2 \\
                                     &= \textsf{S} \ (\lambda \ \textsf{x} \to \textsf{M}_1) \ (\lambda \ \textsf{x} \to \textsf{M}_2)
  \end{aligned}
  $$
  which explains the need for $\textsf{S}$.

* **M = K**: Clearly $\lambda \ \textsf{x} \to \textsf{K}$ is just a constant function returning $\textsf{K}$, hence $\textsf{K K}$.

* **M = S**: As above, $\lambda \ \textsf{x} \to \textsf{S}$ is just $\textsf{K S}$.

Ok, let’s apply the translation to our example $\lambda \ \textsf{f} \to \lambda \ \textsf{g} \to \lambda \ \textsf{x} \to \textsf{f (g x)}$. We start with,

$$
\begin{aligned}
\lambda \ \textsf{x} \to \textsf{f (g x)} 
  &= \textsf{S} \ (\lambda \ \textsf{x} \to \textsf{f}) \ (\lambda \ \textsf{x} \to \textsf{g x}) \\
  &= \textsf{S} \ (\textsf{K f}) \ (\textsf{S} \ (\lambda \ \textsf{x} \to \textsf{g}) \ (\lambda \ \textsf{x} \to \textsf{x})) \\
  &= \textsf{S} \ (\textsf{K f}) \ (\textsf{S} \ (\textsf{K g}) \ \textsf{id})
\end{aligned}
$$
Before proceeding, let’s introduce some optimisations to avoid truly gigantic terms. So for example, we can see that $\lambda \ \textsf{x} \to \textsf{g x}$ is just $\textsf{g}$ using $\eta$. Another optimisation is that if the variable $\textsf{x}$ does not appear in $\textsf{M}$, then $\lambda \ \textsf{x} \to \textsf{M}$ is just $\textsf{K M}$ and there is no need to go through $\textsf{M}$.  

Using these optimisations, we translate $\_ \circ \_$ in one go,

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
While this term is comparatively small, it is still hard to understand. The point of combinators is rather to show that we can avoid all the complications involving variables and just get away with $\textsf{S}$ and $\textsf{K}$ instead.

### Products and Sums

So far we have only encountered the function type. In this section we will get to know some more basic type formers,

- **products**: Written $A \times B$, and also called cartesian product. In basic mathematics we use products to represent coordinate systems, like $(1, 1) : \mathbb{R} \times \mathbb{R}$.

- **sums**: In Agda we write $A \uplus B$, we might prefer $A + B$ but this clashes with $+$ on numbers. They are also called disjoint unions and coproducts.

Actually let’s start with sums which are less common in conventional mathematics but more common in Type Theory and functional programming.

#### Sums

Sums are necessary to represent alternatives. We have one thing or another. To define sums we use the $\textsf{\textbf{data}}$ constructor,

$$
\begin{aligned}
&\textsf{data}\ \uplus\ (\textsf{A} \ \textsf{B} : \textsf{Set}) : \textsf{Set} \ \textsf{where}\\
&\quad \textsf{inj}_1 : \textsf{A} \to \textsf{A} \ \uplus\ \textsf{B}\\
&\quad \textsf{inj}_2 : \textsf{B} \to \textsf{A} \ \uplus\ \textsf{B}
\end{aligned}
$$

This says that an element of $A \uplus B$ is either $\textsf{inj}_1\ \textsf{a}$ where $\textsf{a} : A$ or it is $\textsf{inj}_2\ \textsf{b}$ where $\textsf{b} : B$.

A simple example is that if in a form you can either fill in your order number (`OrdNum`) or your customer reference (`CustRef`) we can represent this as $\textsf{OrdNum} \uplus \textsf{CustRef}$. Note that even if we use the same numeric value—say 1704—for both, we can always be sure which is meant by writing $\textsf{inj}_1\ 1704$ (if it’s an order number) or $\textsf{inj}_2\ 1704$ (if it’s a customer reference).

The symbol for sums in Agda is a bit strange: it combines the set‑theoretic union $\cup$ and the plus sign $+$, giving $\uplus$. We'd prefer to just write $+$ but that clashes with numeric addition.

How are $\cup$ and $\uplus$ related? Indeed, there is no operation $\cup$ on types—$\cup$ is an **intensional** operator whose meaning depends on your choice of representation. For example, let  
$A = \{a,b\}$ and $B = \{0,1,2\}$. Then,

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

$A' \cup B$ has only 3 elements, while $A' \uplus B$ has 5—so $\uplus$ is **representation‑insensitive**, a property that all operations definable in Type Theory (and hence in Agda) share.

What can we do with $\uplus$? A useful general combinator is $\textsf{case}$ that performs case analysis.  
We can define it using _pattern matching_,

$$
\begin{aligned}
&\textsf{case} : (\textsf{A} \to \textsf{C}) \to (\textsf{B} \to \textsf{C}) \to \textsf{A} \uplus \textsf{B} \to \textsf{C} \\
&\textsf{case}\ \textsf{f}\ \textsf{g}\ (\textsf{inj}_1\ \textsf{a}) = \textsf{f a} \\
&\textsf{case}\ \textsf{f}\ \textsf{g}\ (\textsf{inj}_2\ \textsf{b}) = \textsf{g b}
\end{aligned}
$$
$\textsf{case}$ chooses between two functions: $\textsf{f}$ knows how to handle $\textsf{A}$, and $\textsf{g}$ knows how to handle $\textsf{B}$.

Going back to our example with the order form $(\textsf{OrdNum} \uplus \textsf{CustRef})$:  
If we have a function to look up an order using the order number  $\textsf{lookupOrdNum} : \textsf{OrdNum} \to \textsf{Order}$ and a function $\textsf{lookupCustRef} : \textsf{CustRef} \to \textsf{Order}$  
we can use $\textsf{case}$ to combine them,

$$
\textsf{case}\ \textsf{lookupOrdNum}\ \textsf{lookupCustRef} : \textsf{OrdNum} \uplus \textsf{CustRef} \to \textsf{Order}
$$
#### Products

We define products as a special case of a _record type_,

$$
\begin{aligned}
&\textsf{\textbf{record}}\ \_ \textsf{×} \_ \ (\textsf{A}\ \textsf{B} : \textsf{Set})\ :\ \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{field}} \\
&\quad\quad \textsf{proj}_1\ :\ \textsf{A} \\
&\quad\quad \textsf{proj}_2\ :\ \textsf{B}
\end{aligned}
$$

that is, we specify the projections, which are functions with the types,

$$
\begin{aligned}
&\textsf{proj}_1\ :\ \textsf{A} \, \textsf{×} \, \textsf{B} \to \textsf{A} \\
&\textsf{proj}_2\ :\ \textsf{A} \, \textsf{×} \, \textsf{B} \to \textsf{B}
\end{aligned}
$$

We can construct elements of $\textsf{A} \textsf{×} \textsf{B}$ by specifying what the result is when applying projections.  
This is called _copattern matching_. For example, we can use this to define the pairing constructor, which in Agda is just the $\_ \ , \_$, that is, one doesn’t have to put brackets around the tuple,

$$
\begin{aligned}
&\_ , \_ \ :\ \textsf{A} \to \textsf{B} \to \textsf{A} \ \textsf{×} \ \textsf{B} \\
&\textsf{proj}_1\ (\textsf{a},\ \textsf{b})\ =\ \textsf{a} \\
&\textsf{proj}_2\ (\textsf{a},\ \textsf{b})\ =\ \textsf{b}
\end{aligned}
$$

We can derive the constructor automatically by adding the constructor keyword to the record definition,

$$
\begin{aligned}
&\textsf{\textbf{record}}\ \_ \textsf{×} \_ \ (\textsf{A}\ \textsf{B} : \textsf{Set})\ :\ \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{constructor}}\ \_ , \_ \\
&\quad \textsf{\textbf{field}} \\
&\quad\quad \textsf{proj}_1\ :\ \textsf{A} \\
&\quad\quad \textsf{proj}_2\ :\ \textsf{B}
\end{aligned}
$$

What can we do with products? We derive a function $\textsf{curry}$ that turns a function from products into a curried function,

$$
\begin{aligned}
&\textsf{curry}\ :\ (\textsf{A} \ \textsf{×} \ \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{B} \to \textsf{C}) \\
&\textsf{curry}\ \textsf{f}\ =\ \lambda \ \textsf{a}\ \textsf{b} \to \textsf{f}\ (\textsf{a},\ \textsf{b})
\end{aligned}
$$

We can also do the reverse and translate a curried function back into one on products,

$$
\begin{aligned}
&\textsf{uncurry}\ :\ (\textsf{A} \to \textsf{B} \to \textsf{C}) \to (\textsf{A} \ \textsf{×} \ \textsf{B} \to \textsf{C}) \\
&\textsf{uncurry}\ \textsf{g}\ =\ \lambda \ \textsf{x} \to \textsf{g}\ (\textsf{proj}_1\ \textsf{x})\ (\textsf{proj}_2\ \textsf{x})
\end{aligned}
$$
Indeed, the two functions are inverse to each other — that is, $\textsf{curry}\ (\textsf{uncurry}\ \textsf{g})\ =\ \textsf{g}$ and   $\textsf{uncurry}\ (\textsf{curry}\ \textsf{f})\ =\ \textsf{f}$. The first equation follows from what we already know.

$$
\begin{aligned}
&\textsf{curry}\ (\textsf{uncurry}\ \textsf{g}) \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{uncurry} \ \textsf{g} \ (\textsf{a},\ \textsf{b}) \quad &&\textrm{Unfolding $\textsf{curry}$} \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{g} \ (\textsf{proj}_1 \ (\textsf{a},\ \textsf{b})) \ (\textsf{proj}_2 \ (\textsf{a},\ \textsf{b})) \quad &&\textrm{Unfolding $\textsf{uncurry}$} \\
&= \lambda \ \textsf{a} \ \textsf{b} \to \textsf{g} \ \textsf{a} \ \textsf{b} \quad &&\textrm{Evaluating projections} \\
&= \textsf{g} \quad &&\textrm{Use $\eta$ twice}
\end{aligned}
$$
For the 2nd equation we need an $\eta$-equality for products which says that $(\textsf{proj}_1\ \textsf{x},\ \textsf{proj}_2\ \textsf{x}) = \textsf{x}$. This is also called _surjective pairing_,

$$
\begin{aligned}
&\textsf{uncurry}\ (\textsf{curry}\ \textsf{f}) \\
&= \lambda \ \textsf{x} \to \textsf{curry}\ \textsf{f}\ (\textsf{proj}_1\ \textsf{x})\ (\textsf{proj}_2\ \textsf{x}) \quad &&\textrm{Unfolding $\textsf{uncurry}$} \\
&= \lambda \ \textsf{x} \to \textsf{f}\ (\textsf{proj}_1\ \textsf{x},\ \textsf{proj}_2\ \textsf{x}) \quad &&\textrm{Unfolding $\textsf{curry}$} \\
&= \lambda \ \textsf{x} \to \textsf{f}\ \textsf{x} \quad &&\textrm{Surjective pairing} \\
&= \textsf{f} \quad &&\textrm{$\eta$ for functions} 
\end{aligned}
$$
This shows that the type of functions over products and curried functions are equivalent.  
Most functional programmers prefer to work with curried functions.

#### Strong Sums (?)

We can try to play a similar game for coproducts. First of all, using a product we can uncurry case,

$$
\begin{aligned}
&\textsf{case-c} : (\textsf{A} \to \textsf{C}) \times (\textsf{B} \to \textsf{C}) \to \textsf{A} \uplus \textsf{B} \to \textsf{C} \\
&\textsf{case-c} = \textsf{uncurry}\ \textsf{case}
\end{aligned}
$$
and hence the inverse of case is,

$$
\begin{aligned}
&\textsf{uncase} : (\textsf{A} \uplus \textsf{B} \to \textsf{C}) \to (\textsf{A} \to \textsf{C}) \times (\textsf{B} \to \textsf{C}) \\
&\textsf{uncase}\ \textsf{h} = (\lambda \ \textsf{a} \to \textsf{h} \ (\textsf{inj}_1\ \textsf{a}) ,\ \lambda \ \textsf{b} \to \textsf{h} \ (\textsf{inj}_2\ \textsf{b}))
\end{aligned}
$$
We would hope that the functions are inverse to each other, that is,

$$
\textsf{case-c} \circ \textsf{uncase} = \textsf{id} \quad \text{and} \quad \textsf{uncase} \circ \textsf{case-c} = \textsf{id}
$$
The first one we can show,

$$
\begin{aligned}
&\textsf{uncase}\ (\textsf{case-c}\ \textsf{f}) \\
&= (\lambda \ \textsf{a} \to \textsf{case-c}\ \textsf{f}\ (\textsf{inj}_1\ \textsf{a}),\ \lambda \ \textsf{b} \to \textsf{case-c}\ \textsf{f}\ (\textsf{inj}_2\ \textsf{b})) \quad &&\textrm{Unfold $\textsf{uncase}$}\\
&= (\lambda \ \textsf{a} \to \textsf{proj}_1\ \textsf{f}\ \textsf{a},\ \lambda \ \textsf{b} \to \textsf{proj}_2\ \textsf{f}\ \textsf{b}) \quad &&\textrm{Unfold $\textsf{case-c}$ and $\textsf{case}$} \\
&= (\textsf{proj}_1\ \textsf{f},\ \textsf{proj}_2\ \textsf{f}) \quad &&\textrm{$\eta$ twice}\\
&= \textsf{f} \quad &&\textrm{Surjective pairing}
\end{aligned}
$$
However, the 2nd equality doesn’t hold in Agda. Actually we can prove it using propositional equality $\_ \equiv \_$, which we are going to introduce later. The equality $\_ = \_$ we have been considering here when talking _about_ $\lambda$-terms is called **definitional equality**.

Indeed, the $\eta$-laws for functions and surjective pairing is already extending the notion of _definitional equality_ — they are mainly introduced for convenience. The corresponding laws for other types (e.g. natural numbers) would destroy decidability and hence not be useful for a language like Agda.

It is possible (though not entirely straightforward) to add $\eta$-laws for $\_ + \_$, but this is usually avoided, mainly because it would quickly lead to an exponential blow-up in case trees and become computationally too costly.

#### Finite Types

The operation $\_ \textsf{×} \_$ we have introduced handles the binary case of products. We can use it several times to handle more components, as in $\textsf{A} \ × \ \textsf{B} \ × \ \textsf{C}$. In practice it is better to use records which have more meaningful field names than $\textsf{proj}_1$, etc.

However, one interesting case not covered by binary products is the nullary product or unit type.  
In Agda this is denoted as $\top$ and can be defined as a record with no fields,

$$
\begin{aligned}
&\textsf{record}\ \top : \textsf{Set}\ \textsf{\textbf{where}} \\
&\quad \textsf{\textbf{constructor}}\ \textsf{tt}
\end{aligned}
$$
It has one element $\textsf{tt} : \top$.

We can play the same game with sums and derive the empty sum, that is a sum with no injections,

$$
\begin{aligned}
&\textsf{data}\ \bot : \textsf{Set}\ \textsf{\textbf{where}}
\end{aligned}
$$

The empty sum is the empty type; it is a type with no elements. A version of case for the empty type is quite useful,

$$
\begin{aligned}
&\textsf{case}_\bot : \{\textsf{A} : \textsf{Set}\} \to \textsf{⊥} \to \textsf{A} \\
&\textsf{case}_\bot\ ()
\end{aligned}
$$

We don’t need any cases for $\bot$ — Agda marks this by $()$ which means this case analysis has been intentionally left empty. This is fine — we can never run this function because there isn’t an element in the empty type.

We can use the unit type $\top$ and sums $\uplus$ to construct some finite types. For example, $\textsf{Two} : \textsf{Set}$ is a type with 2 elements,

$$
\begin{aligned}
&\textsf{Two} : \textsf{Set} \\
&\textsf{Two} = \top \uplus \top
\end{aligned}
$$
Here are the elements,

$$
\begin{aligned}
&\textsf{zero}_2 : \textsf{Two} \\
&\textsf{zero}_2 = \textsf{inj}_1\ \textsf{tt} \\
&\textsf{one}_2 : \textsf{Two} \\
&\textsf{one}_2 = \textsf{inj}_2\ \textsf{tt}
\end{aligned}
$$

We can add one more element to Two to construct Three, a type with 3 elements,

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

However, as already in the case of products, in practice it is usually preferable to use $\textsf{\textbf{data}}$ to define labelled sums,

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

How many elements are in $\textsf{Two} \uplus \textsf{Three}$? An example is $\textsf{inj}_2\ \textsf{one}_2$. There is the choice between $\textsf{inj}_1$ and $\textsf{inj}_2$ — if we choose $\textsf{inj}_1$ we get 2 options, and if we choose $\textsf{inj}_2$ we get 3 options. So we have $2 + 3 = 5$ total elements,

$$\textsf{inj}_1\ \textsf{zero}_2, \ \textsf{inj}_1\ \textsf{one}_2, \ \textsf{inj}_2\ \textsf{zero}_3, \ \textsf{inj}_2\ \textsf{one}_3, \ \textsf{inj}_2\, \ \textsf{two}_3$$     

In general, if A has $n$ elements and B has $m$ elements, then $A \uplus B$ has $n + m$ elements.

How many elements are in $\textsf{Two} \textsf{×} \textsf{Three}$? A typical example is $\textsf{one}_2 , \textsf{two}_3$. Here we construct a pair — we have 2 independent choices for the first component and 3 for the second, so $2 \times 3 = 6$ elements,

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



In general, if A has $n$ elements and B has $m$ elements, then $\textsf{A} \times \textsf{B}$ has $\textsf{m} \times \textsf{n}$ elements.

What about the function type? How many elements are in $\textsf{Two} \to \textsf{Three}$? Here is a typical example,

$$
\begin{aligned}
&\textsf{foo} : \textsf{Two} \to \textsf{Three} \\
&\textsf{foo}\ \textsf{zero}_2 = \textsf{two}_3 \\
&\textsf{foo}\ \textsf{one}_2 = \textsf{one}_3
\end{aligned}
$$

We can define any such function by pattern matching: we have 3 choices in each case, hence $3 \times 3 = 3^2 = 9$ elements. Now unlike products and sums, function types are not symmetric.

How many elements are in $\textsf{Three} \to \textsf{Two}$? Here again is a typical example:

$$
\begin{aligned}
&\textsf{bar} : \textsf{Three} \to \textsf{Two} \\
&\textsf{bar}\ \textsf{zero}_3 = \textsf{zero}_2 \\
&\textsf{bar}\ \textsf{one}_3 = \textsf{one}_2 \\
&\textsf{bar}\ \textsf{two}_3 = \textsf{zero}_2
\end{aligned}
$$

There are 3 cases because there are 3 elements in $\textsf{Three}$, and in each case we have a choice of 2, hence we have $2 \times 2 \times 2 = 2^3 = 8$ elements.

From these examples we can see that in general if A has $n$ elements and B has $m$ elements, then $A \to B$ has $m^n$ elements. Indeed, in mathematics the function type is often written as an exponential, that is $A \to B$ is written as $B^A$.

Previously, we have shown that types $A \times B \to C$ and $A \to B \to C$ are equivalent (via curry and uncurry). Writing this in exponential notation we find an old friend from high school,

$$
C^{A \times B} = (C^B)^A
$$

Similarly, with strong coproducts we would have that $(A \to C) \times (B \to C)$ and $A \uplus B \to C$ are equivalent (via $\textsf{case-c}$ and $\textsf{uncase}$). If we write $+$ for $\uplus$, we arrive at another well-known equation:

$$
C^A \times C^B = C^{A + B}
$$

### History

$\lambda$-calculus was invented by Alonzo Church who used it in papers about formal logic in the 1930s. The story goes that the use of $\lambda$ arose by accident: Church used a graphical notation where he connected the binding and the usage of a variable. But the typesetter (this was not only before LaTeX but before computers) went back and said, _Sorry Professor, I can’t do that. But this looks a bit like a $\lambda$. Is it ok if I use just this?_

Church realised that one of the problems of his calculus was that he could define too many weird functions, including the so called _fix point combinator_ which allows to compute the fixpoint of any function by general recursion. But what is the fix point of negation? To avoid this sort of problems Church also invented the typed $\lambda$-calculus.

Church had two primitive types, $\iota$ (the greek letter _iota_) standing for individuals and o (the greek letter $\omicron$ but it is the same as an o) standing for propositions, motivated by his intended application to formal logic. We will not consider any fixed set of base types but a view them as type variables.

The untyped $\lambda$-calculus is still useful as a universal programming language which is an alternative to Turing machines. Indeed when Alan Turing visited Church they realised that Turing machines and $\lambda$-calculus compute the same set of computable functions. The generalisation of this observation to all computational mechanism is known as the Church-Turing thesis.

In many papers about typed $\lambda$-calculus one starts with the untyped $\lambda$-calculus and then introduces a type system on top, as a way of assigning types to untyped terms. We do not follow this view which is perhaps too syntactic and consider typed terms as primitive. We call this _intrinsic typing_. Yes, it is true if we have to implement $\lambda$-terms we will at some point think about untyped terms but we also need to think about strings, characters etc but we will not talk about these implementation details.

Combinatory logic was originally invented before $\lambda$-calculus by Moses Schönfinkel in the 1920s. Again his interest was in formal logic and he realised that combinators are a nice way to avoid the complexities of variables. This was also the motivation of Haskell Curry who reinvented combinatory logic more or less in the form we know it now. Some people say that the idea of _currying_ a function with several arguments which is named after Curry, should have been called _schönfinkeln_ but this never caught on.

To understand our presentation of products and sums better (also called coproducts) one needs to know about category theory. Category theory is basically an abstract form of algebra which was introduced by Saunders MacLane and others. Their motivation came mainly from pure mathematics, algebraic topology. However, later it was realised that category theory is also extremely useful for theoretical computer science. One important observation was Joachim Lambek’s observation that a fundamental notion in category theory, _cartesian closed categories_, corresponds exactly to typed $\lambda$-calculus. In the categorical account products are already built-in and function types are characterised by the curry-uncurry-equivalence. One of the beautiful features of category theory is the presence of a mirror (_duality_) and it turns out that the mirror image (the dual) of products are sums or coproducts as we have introduced which are also extremely useful.

At this point one may onewonder what the mirror image of functions is? This is a longer story but the short answer is that there isn’t one. If we assume that there is one, the theory collapses: all $\lambda$-terms are equal.

$\lambda$-calculus is important for programming, to be precise in _functional programming_. Indeed the 2nd oldest programming language, LISP (The oldest is FORTRAN) was developed by John McCarthy in the late 1950s and was inspired by the (untyped) $\lambda$-calculus. Later types were introduced, a component of the Edinburgh LCF project (_Logic for computable functions_). Nowadays languages like Haskell (named after Haskell curry) and CAML are modern instances of typed functional languages and Agda’s syntax and semantics has been influenced by them.