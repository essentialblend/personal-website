---
title: "Proof: Conservation of Momentum"
date: 2025-03-06
subjects: ["Classical Mechanics"] 
categories: ["Derivations"] 
tags: ["Newton's Third Law", "Coordinate Systems", "Cylindrical", "Kinematics"]
description: "A simple proof demonstrating conservation of momentum."
---

We need to show that the net force ($\mathbf{F}$) applied on an object is proportional to the rate of change of that object's momentum with respect to time ($\dot{\mathbf{p}}$).

We know Newton's second law: $\mathbf{F} = m\mathbf{a}$, and $\mathbf{p} = m \mathbf{v}$.

Differentiating $\mathbf{p} = m \mathbf{v}$ with respect to $t$, presuming constant mass ($m$) yields,

$$
\begin{aligned}
\frac{d\mathbf{p}}{dt} = \dot{\mathbf{p}} &= \frac{d}{dt}(m\mathbf{v}) \\ \\[0.1pt]
&= m \ \frac{d\mathbf{v}}{dt} \\ \\[0.1pt]
&= m\mathbf{a} \\ \\[0.1pt]
\therefore \quad \mathbf{F} &= \dot{\mathbf{p}} \quad \blacksquare
\end{aligned}
$$

With this lemma, we can proceed with the main proof.

Suppose we have a system with point particles $p_1$ and $p_2$, exerting forces $\mathbf{F}_{21}$ and $\mathbf{F}_{12}$, on each other.

We also approximate any external forces on these two particles as $\mathbf{F}^{\text{ext}}_1$ and $\mathbf{F}^{\text{ext}}_2$,

$$
\begin{aligned}
\mathbf{F}_{p_1} &= \mathbf{F}_{12} + \mathbf{F}^{\text{ext}}_1 \\ \\[0.1pt]
\mathbf{F}_{p_2} &= \mathbf{F}_{21} + \mathbf{F}^{\text{ext}}_2
\end{aligned}
$$

By the lemma $\mathbf{F} = \dot{\mathbf{p}}$,

$$
\begin{aligned}
\mathbf{F}_{p_1} &= \dot{\mathbf{p}}_1 \\\\
\mathbf{F}_{p_2} &= \dot{\mathbf{p}}_2
\end{aligned}
$$

The total momentum of our two-particle system is:

$$
\mathbf{P}_{\text{total}} = \mathbf{p}_1 + \mathbf{p}_2
$$

Differentiating with respect to time yields,

$$
\begin{aligned}
\dot{\mathbf{P}}_{\text{total}} &= \dot{\mathbf{p}}_1 + \dot{\mathbf{p}}_2 \\ \\[0.1pt]
&= \mathbf{F}_{12} + \mathbf{F}_{21} + \mathbf{F}^{\text{ext}}_1 + \mathbf{F}^{\text{ext}}_2
\end{aligned}
$$

Since $\mathbf{F}_{12} = -\mathbf{F}_{21}$, their sum cancels out. Letting the total external force be $\mathbf{F}_{\text{ext}} = \mathbf{F}^{\text{ext}}_1 + \mathbf{F}^{\text{ext}}_2$, we have:

$$
\dot{\mathbf{P}}_{\text{total}} = \mathbf{F}_{\text{ext}}
$$

This important result shows that the rate of change of total momentum ($\dot{\mathbf{P}}_{\text{total}}$) in a two-particle system is determined solely by the net external force.

In the special case where $\mathbf{F}_{\text{ext}} = 0$, we conclude:

$$
\dot{\mathbf{P}}_{\text{total}} = 0 \quad \Rightarrow \quad \mathbf{P}_{\text{total}} = \text{constant} \quad \blacksquare
$$

