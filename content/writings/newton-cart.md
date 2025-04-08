---
title: "Derivation: Newton's Equation in Cartesian Coordinates"
date: 2024-04-04
subjects: ["Classical Mechanics"] 
categories: ["Derivations"] 
tags: ["Newton's Second Law", "Derivation", "Coordinate Systems", "Cartesian", "Kinematics"]
description: "Deriving and generalizing Newton's second law components in Cartesian coordinates."
---

We represent a position in n-dimensional Cartesian space using vectors,

$$
\tag{1.1} \mathbf{r} = \sum_{k = 0}^{n - 1} l_k  \hat{\mathbf{i}}_k  
$$

where the coefficients $l_k$ vary over time. We can represent the net force in terms of the unit axes,

$$
\mathbf{F} = \sum_{k = 0}^{n - 1}F_k \hat{\mathbf{i}}_k = m \sum_{k = 0}^{n - 1}\ddot{l}_k \hat{\mathbf{i}}_k = m\ddot{\mathbf{r}}
$$

Since acceleration is the second derivative of the position with respect to time, we differentiate $(1.1)$ first to get the velocity,

$$
\begin{aligned}
\dfrac{d\mathbf{r}}{dt} &= \dot{\mathbf{r}} = \dfrac{d}{dt}\left(\sum_{k = 0}^{n - 1} l_k \hat{\mathbf{i}}_k\right) \\ \\[0.1pt]
&= \sum_{k = 0}^{n - 1}\dfrac{d}{dt}(l_k \hat{\mathbf{i}}_k) \\
\end{aligned}
$$

Applying the product rule ($\frac{d}{dt}(fg) = \dot{f}g + f\dot{g}$) and simplifying. Since the coordinate vectors $ \hat{\mathbf{i}}_k $ do not vary with time, their derivatives $ \frac{d\hat{\mathbf{i}}_k}{dt} $ are $ \mathbf{0} $, with $n - 1$ terms to spare.

$$
\begin{aligned}
= \sum_{k = 0}^{n - 1} \left(\dfrac{dl_k}{dt}\hat{\mathbf{i}}_k + l_k\dfrac{d\hat{\mathbf{i}}_k}{dt}\right)
\end{aligned}
$$

$$
\tag{1.2} \therefore \quad \mathbf{v}(t) = \sum_{k = 0}^{n - 1}(\dot{l}_k \hat{\mathbf{i}}_k)
$$

where $\dot{l}_k$ is the time derivative of $l_k$ $(dl_k/dt)$. Similarly, we differentiate $ \mathbf{v}(t) $ to get $ \mathbf{a}(t) $,

$$
\begin{aligned}
\dfrac{d\mathbf{v}}{dt} &= \dot{\mathbf{v}} = \dfrac{d}{dt}\sum_{k = 0}^{n - 1}(\dot{l}_k \hat{\mathbf{i}}_k)
\end{aligned}
$$

$$
\therefore \quad \mathbf{a}(t) = \sum_{k = 0}^{n - 1}(\ddot{l}_k \hat{\mathbf{i}}_k) \tag{1.3}
$$

Finally, we have

$$
\boxed{\mathbf{F} = m\ddot{\mathbf{r}} \quad \iff \quad \sum_{k = 0}^{n - 1}F_k \hat{\mathbf{i}}_k \quad \iff \quad m\sum_{k = 0}^{n - 1}\ddot{r}_k\hat{\mathbf{i}}_k \quad \blacksquare}
$$
