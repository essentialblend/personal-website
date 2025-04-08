---
title: "Derivation: Newton's Equation in Polar Coordinates"
date: 2025-04-06
subjects: ["Classical Mechanics"] 
categories: ["Derivations"] 
tags: ["Newton's Second Law", "Coordinate Systems", "Polar Coordinates", "Kinematics"]
description: "Deriving Newton's second law components in 2D polar coordinates using geometric and algebraic methods."
# draft: false
---

With polar coordinates, a position vector can be described in terms of its radial length $r$ and the argument angle $\phi$, counterclockwise to the x-axis. Before proceeding with the derivation, we describe how to convert coordinates between Cartesian and polar coordinates.

$$
\begin{rcases} 
	\begin{align*}	
		x &= r\cos\phi \\
		y &= r\sin\phi 
	\end{align*}
\end{rcases}
\quad \longleftrightarrow \quad
\begin{cases}
	\begin{align*}	
		r &= \sqrt{x^2 + y^2} \\
		\phi &= \arctan{y/x} 
	\end{align*}
\end{cases}\tag{1.1}
$$

We can also express the position vector as a complex number using Euler's equations,

$$z = x + iy = r(\cos\phi + i\sin\phi) = re^{i\phi} \tag{1.2}$$
$$\bar{z} = r(\cos\phi - i\sin\phi) = re^{-i\phi} \tag{1.3}$$

We can add and subtract $1.2$ and $1.3$ respectively to get some important identities,

$$
\begin{aligned}
z + \bar{z} &= re^{i\phi} + re^{-i\phi} \\ \\[0.1pt]
&= r(e^{i\phi} + e^{-i\phi})
\end{aligned}
$$

Since $z + \bar{z} = x + iy + x - iy = 2x$ is purely real, and $x = r\cos\phi$ by $1.1$,

$$
\begin{align*}
2r\cos\phi &= r(e^{i\phi} + e^{-i\phi}) \\ \\[0.1pt]
\tag{1.4} \therefore \quad \cos\phi &= \dfrac{e^{i\phi} + e^{-i\phi}}{2} 
\end{align*}
$$

Similarly, subtracting,

$$
\begin{aligned}
z - \bar{z} = r(e^{i\phi} - e^{-i\phi})
\end{aligned}
$$

Since $z - \bar{z} = 2iy$ is purely imaginary, and $y = r\sin\phi$ by $1.1$,

$$
\begin{align*}
2ir\sin\phi &= r(e^{i\phi} - e^{-i\phi}) \\ \\[0.1pt]
\tag{1.5} \therefore \quad \sin\phi &= \dfrac{e^{i\phi} - e^{-i\phi}}{2i} 
\end{align*}
$$

For completeness, we first derive $e^{i\phi}$. We can use the Maclaurin Series (expansion around $x = 0$),

$$
\begin{aligned}
e^x &= \sum_{n = 0}^{\infty}\dfrac{x^n}{n!} \\ \\[0.1pt] 
\end{aligned}
$$

Substituting $x = i\theta$,

$$
\begin{aligned}
e^{i\theta} &= \sum_{n = 0}^{\infty}\dfrac{(i\theta)^n}{n!} \\ \\[0.1pt]
&= \sum_{k = 0}^{\infty}\dfrac{(-1)^k\theta^{2k}}{(2k)!} + i\left(\sum_{k = 0}^{\infty}\dfrac{(-1)^k \theta^{2k + 1}}{(2k + 1)!}\right) \\ \\[0.1pt]
\tag{1.6} \therefore \quad e^{i\theta} &= \cos\theta + i\sin\theta \quad \blacksquare
\end{aligned}
$$

With this derivation, we conclude with the identities,

$$
\begin{align*}
\tag{1.7} e^{i\phi} &= \cos\phi + i\sin\phi\\
\tag{1.8} e^{-i\phi} &= \cos\phi - i\sin\phi
\end{align*}
$$

Any position vector can be represented as,

$$\bm{r} = r \bm{\hat{r}} \tag{1.9}$$

Let’s consider $\Delta \bm{\hat{r}}$ traced by the vector $r$ as it goes from $t_1$ to $t_2$.

$$
\begin{align*}
\tag{1.10} \Delta \bm{\hat{r}} &\propto \Delta\phi \bm{\hat{\phi}}
\end{align*}
$$

We relate angular change $\Delta \phi$ with time:

$$
\begin{align*}
\dot{\phi} &= \dfrac{d\phi}{dt} \\ \\[0.1pt]
\tag{1.11} \Delta\phi &\approx \dot{\phi} \ \Delta t
\end{align*}
$$

Substitute into $1.10$:

$$
\begin{align*}
\Delta \bm{\hat{r}} &\approx \dot{\phi} \Delta t \bm{\hat{\phi}}
\end{align*}
$$

Taking the limit,

$$
\begin{align*}
\lim_{\Delta t \rightarrow 0} \dfrac{\Delta \bm{\hat{r}}}{\Delta t} &\approx \lim_{\Delta t \rightarrow 0} \dfrac{\dot{\phi} \Delta t \bm{\hat{\phi}}}{\Delta t} \\ \\[0.1pt]
\tag{1.12} \therefore \quad \dfrac{d\bm{\hat{r}}}{dt} = \bm{\dot{\hat{r}}} &= \dot{\phi}\bm{\hat{\phi}}
\end{align*}
$$

For $\bm{\dot{\hat{\phi}}}$:

$$
\begin{align*}
\tag{1.13} \bm{\dot{\hat{\phi}}} = \dfrac{d\bm{\hat{\phi}}}{dt} = - \dot{\phi}\bm{\hat{r}}
\end{align*}
$$

Express unit vectors in Cartesian form:

$$
\begin{align*}
\tag{1.14} \bm{\hat{r}} &= \cos\phi \bm{\hat{i}} + \sin\phi \bm{\hat{j}} \\
\tag{1.15} \bm{\hat{\phi}} &= - \sin\phi \bm{\hat{i}} + \cos\phi \bm{\hat{j}}
\end{align*}
$$

Differentiate $1.14$:

$$
\begin{align*}
\dfrac{d\bm{\hat{r}}}{dt} &= \dfrac{d}{dt}(\cos\phi \bm{\hat{i}} + \sin\phi \bm{\hat{j}}) \\
&= -\sin\phi \dot{\phi} \bm{\hat{i}} + \cos\phi \dot{\phi} \bm{\hat{j}} \\
&= \dot{\phi}(-\sin\phi \bm{\hat{i}} + \cos\phi \bm{\hat{j}})
\end{align*}
$$

Final forms:

$$
\begin{align*}
\bm{\dot{\hat{r}}} &= \dot{\phi} \bm{\hat{\phi}} \\ \\[0.1pt]
\bm{\dot{\hat{\phi}}} &= -\dot{\phi} \bm{\hat{r}}
\end{align*}
$$

Now differentiate the position vector:

$$
\begin{align*}
\bm{r} &= r \bm{\hat{r}} \\
\dfrac{d\bm{r}}{dt} &= \bm{\dot{r}} \bm{\hat{r}} + r \dot{\bm{\hat{r}}}
\end{align*}
$$

Substitute $1.12$:

$$
\tag{1.16} \bm{v} = \dot{\bm{r}} \bm{\hat{r}} + r \dot{\phi} \bm{\hat{\phi}} 
$$

Now differentiate velocity to get acceleration:

$$
\begin{align*}
\dfrac{d\bm{v}}{dt} &= \ddot{\bm{r}}\bm{\hat{r}} + \dot{\bm{r}}\bm{\dot{\hat{r}}} + \dot{r}\dot{\phi} \bm{\hat{\phi}} + r\ddot{\phi}\bm{\hat{\phi}} + r\dot{\phi}\bm{\dot{\hat{\phi}}} \\
&= \ddot{\bm{r}}\bm{\hat{r}} - r\dot{\phi}^2\bm{\hat{r}} + 2\dot{\bm{r}}\dot{\phi} \bm{\hat{\phi}} + r\ddot{\phi}\bm{\hat{\phi}} \\
\therefore \quad \bm{a} &= (\ddot{\bm{r}} - r\dot{\phi}^2)\bm{\hat{r}} + (2\dot{\bm{r}}\dot{\phi} + r\ddot{\phi})\bm{\hat{\phi}}
\end{align*}
$$

Finally, express Newton's second law in polar components:

$$
\begin{align*}
\boxed{
\bm{F} = m\bm{\ddot{r}} \quad \iff \quad
F_r \bm{\hat{r}} + F_{\phi} \bm{\hat{\phi}} \quad \iff \quad
\begin{cases}
F_r = m(\ddot{\bm{r}} - r\dot{\phi}^2) \\
F_\phi = m(2\dot{\bm{r}}\dot{\phi} + r\ddot{\phi}) \ 
\end{cases}
\quad \blacksquare
}
\end{align*}
$$

