---
title: "Theorem of the Month: Euler's Identity"
date: 2025-04-12
summary: "Perhaps one of the most beautiful equations in mathematics that connects five mathematical constants."
outputs: []
type: theorem
---

Euler's formula states that for any real number $x$:

$$ e^{ix} = \cos x + i \sin x $$

This remarkable connection between the exponential function and trigonometry can be visualized by considering the power series expansions of $e^z$, $\cos x$, and $\sin x$:

$$ e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \frac{z^4}{4!} + \dots $$
$$ \cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots $$
$$ \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots $$

Now, let $z = ix$. Substituting into the series for $e^z$ and grouping real and imaginary terms (remembering $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, etc.):

$$ e^{ix} = \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots\right) + i\left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots\right) $$

We see that the terms in the parentheses are exactly the series for $\cos x$ and $\sin x$, respectively. To obtain Euler's identity specifically, we set $x = \pi$. Since $\cos \pi = -1$ and $\sin \pi = 0$:

$$ e^{i\pi} = \cos \pi + i \sin \pi = -1 + i(0) = -1 $$

Rearranging this gives the elegant identity:

$$ e^{i\pi} + 1 = 0 \quad \blacksquare$$ 