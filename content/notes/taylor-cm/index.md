---
title: "Classical Mechanics"
description: "My notes on R Taylor's classical mechanics textbook."
date: 2024-08-01
status: studying
subjects: ["Mathematics", "Physics"] 
categories: ["Academic Textbook"]
tags: ["Calculus", "Classical", "Integration", "Differentiation", "Linear Spaces", "Derivative", "Integral", "Partial", "Vector", "Linear", "Space", "Mechanics", "Newton", "Newtonian", "Lagrangian", "Lagrange", "Hamilton", "Energy", "Work", "Force", "Galileo", "Kinematics", "Dynamics", "Momentum"]
bookAuthor: "R Taylor"
---

## Part I: Essentials

### Newton's Laws of Motion

#### Space and Time

░░░░ three ░░░░ of motion are ░░░░ in ░░░░ ░░░░ four ░░░░ underlying ░░░░ ░░░░ ░░░░ ░░░░ _space_░░░░ _time_░░░░ _mass_░░░░ ░░░░ _force_░░░░ ░░░░ ░░░░ by ░░░░ ░░░░ ░░░░ ░░░░

##### Space 

░░░░ ░░░░ $P$ of the three-dimensional ░░░░ we live ░░░░ can ░░░░ labeled ░░░░ ░░░░ position ░░░░ $\bf{r}$ ░░░░ ░░░░ the distance ░░░░ direction ░░░░ $P$ ░░░░ ░░░░ ░░░░ ░░░░ $O$. ░░░░ most ░░░░ way to ░░░░ a ░░░░ ░░░░ in ░░░░ ░░░░ its ░░░░ ░░░░ ░░░░ ░░░░ the directions ░░░░ by ░░░░ orthonormal basis. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ introducing unit vectors for each of ░░░░ coordinate ░░░░
$$\bf{r} = x\bf{\hat{x}} + y\bf{\hat{y}} + z\bf{\hat{z}} \tag{1.1}$$
For ░░░░ in traditional Cartesian coordinates, ░░░░ ░░░░ $\bf{a} = (1, \ 1, \ 0)$ can ░░░░ ░░░░ as

$$(1 \cdot (1, 0, 0)) + (1 \cdot (0, 1, 0)) + (0 \cdot (0, 0, 1)) = (1, 1, 0) = a$$

##### Differentiation of Vectors

Since most laws of physics ░░░░ ░░░░ ░░░░ also imply _derivatives_ of ░░░░ vectors. A simple ░░░░ ░░░░ ░░░░ time ░░░░ of a vector ░░░░ depends on ░░░░ for ░░░░ the velocity $\bf{v}(t)$ ░░░░ ░░░░ particle ░░░░ the time ░░░░ of the particle's ░░░░ $\bf{r}(t)$░░░░ that is, $\bf{v} = d\bf{r} / dt = \dot{r}$. Similarly, acceleration would then ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ velocity, $\bf{a} = d\bf{v}/dt = \ddot{r}$░░░░

░░░░ vector ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that of ░░░░ ░░░░ Recall that ░░░░ $x(t)$ is ░░░░ scalar ░░░░ ░░░░ $t$, ░░░░ ░░░░ derivative is ░░░░ ░░░░
$$\dfrac{dx}{dt} = \dot{x} = \lim_{\Delta t \rightarrow 0} \dfrac{\Delta x}{\Delta t} \tag{1.2}$$
░░░░ $\Delta x = x(t + \Delta t) - x(t)$ ░░░░ ░░░░ ░░░░ ░░░░ $x$ ░░░░ the ░░░░ ░░░░ from $t$ to $t + \Delta t$. ░░░░ in the same ░░░░ if $\bf{r}(t)$ ░░░░ any ░░░░ ░░░░ ░░░░ ░░░░ $t$, ░░░░ ░░░░ ░░░░ derivative ░░░░ $$\dfrac{d\bf{r}}{dt} = \dot{\bf{r}} = \lim_{\Delta t \rightarrow 0} \dfrac{\Delta \bf{r}}{\Delta t} \tag{1.3}$$
where $$\Delta\bf{r} = \bf{r}(t + \Delta t) - \bf{r}(t) \tag{1.4}$$
░░░░ the corresponding ░░░░ in $\bf{r}(t)$. ░░░░ are ░░░░ concerned about ░░░░ ░░░░ ░░░░ ░░░░ limit for ░░░░ ░░░░ ░░░░ can presume ░░░░ all ░░░░ ░░░░ encounter are ░░░░ ░░░░ we can take this ░░░░ existence ░░░░ granted along with ░░░░ the ░░░░ ░░░░ of ░░░░ (i.e. ░░░░ rules ░░░░ ░░░░

░░░░ example, if $\bf{r}(t)$ ░░░░ $\bf{s}(t)$ are two ░░░░ valued ░░░░ ░░░░ depend on $t$, then the ░░░░ ░░░░ ░░░░ sum is,

$$
\dfrac{d}{dt}(\bf{r} + \bf{s}) = \dot{\bf{r}} + \dot{\bf{s}} \tag{1.5}
$$
Similarly, if $\bf{r}(t)$ ░░░░ ░░░░ ░░░░ ░░░░ function, ░░░░ $f(t)$ is ░░░░ scalar valued function, ░░░░ ░░░░ derivative of ░░░░ product $f(t)\bf{r}(t)$ is given by the ░░░░ ░░░░ of ░░░░ product rule,

$$
\dfrac{d}{dt}(f\bf{r}) = f\dot{\bf{r}} + \dot{f}\bf{r} \tag{1.6}
$$
One more ░░░░ ░░░░ mentioning concerns the components ░░░░ the ░░░░ of the vector. Suppose $\bf{r}$, ░░░░ ░░░░ $x$░░░░ $y$, $z$ is ░░░░ position ░░░░ a moving particle, and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\bf{v} = \dot{\bf{r}}$. ░░░░ we differentiate the sum,
$$\bf{r} = x\bf{\hat{x}} + y\bf{\hat{y}} + z\bf{\hat{z}} \tag{1.7}$$░░░░ ░░░░ (1.5) ░░░░ us the sum ░░░░ ░░░░ ░░░░ ░░░░ derivatives, and by ░░░░ product ░░░░ ░░░░ each ░░░░ these ░░░░ ░░░░ terms, with $6$ ░░░░ in total. ░░░░ ░░░░ ░░░░ ░░░░ $\hat{\bf{x}}$░░░░ $\hat{\bf{y}}$, $\hat{\bf{z}}$ ░░░░ not ░░░░ on (or change with) time, so ░░░░ derivatives are ░░░░ ░░░░ ░░░░ left ░░░░ ░░░░ three terms.

$$
\dot{\bf{r}} = \dot{x}\hat{\bf{x}} + \dot{y}\hat{\bf{y}} + \dot{z}\hat{\bf{z}} \tag{1.8}
$$
░░░░ ░░░░ ░░░░ the ░░░░ ░░░░

$$
\bf{v} = v_x\hat{\bf{x}} + v_y\hat{\bf{y}} + v_z\hat{\bf{z}} \tag{1.9}
$$
░░░░ ░░░░ that,

$$
v_x = \dot{x}, \quad v_y = \dot{y}, \quad v_z = \dot{z} \tag{1.10}
$$
In ░░░░ the ░░░░ components ░░░░ $\bf{v}$ are just ░░░░ derivatives of the corresponding ░░░░ ░░░░ $\bf{r}$. In ░░░░ other ░░░░ ░░░░ the ░░░░ ░░░░ vectors ░░░░ not constant, and the result ░░░░ ░░░░ 1.10 ░░░░ ░░░░ ░░░░ ░░░░

##### Time 

░░░░ ░░░░ view ░░░░ that time ░░░░ ░░░░ single ░░░░ ░░░░ $t$ on ░░░░ all ░░░░ ░░░░ That ░░░░ ░░░░ ░░░░ observers ░░░░ equipped ░░░░ ░░░░ ░░░░ all properly ░░░░ ░░░░ ░░░░ ░░░░ agree ░░░░ ░░░░ the time ░░░░ ░░░░ ░░░░ given event ░░░░ ░░░░ ░░░░ that this ░░░░ ░░░░ correct: ░░░░ to ░░░░ ░░░░ ░░░░ relativity, ░░░░ ░░░░ ░░░░ relative motion ░░░░ ░░░░ agree ░░░░ all ░░░░ Nevertheless, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ much less ░░░░ $c$░░░░ ░░░░ ░░░░ ░░░░ the classical ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░

##### Reference Frames

Almost every ░░░░ ░░░░ classical mechanics ░░░░ a choice ░░░░ or implicit) of ░░░░ reference frame, that ░░░░ a choice of spatial origin and ░░░░ to ░░░░ positions, and ░░░░ ░░░░ of ░░░░ ░░░░ to ░░░░ ░░░░ The difference ░░░░ two ░░░░ ░░░░ ░░░░ quite ░░░░ ░░░░ instance, they ░░░░ ░░░░ only in ░░░░ choice of ░░░░ ░░░░ of ░░░░ — ░░░░ ░░░░ frame ░░░░ $t = 0$ the other ░░░░ label $t' = t_0 \neq 0$░░░░

░░░░ the ░░░░ frames ░░░░ ░░░░ the same origins ░░░░ ░░░░ ░░░░ time, ░░░░ have different orientations ░░░░ the three spatial axes. By carefully ░░░░ ░░░░ reference frame, ░░░░ ░░░░ ░░░░ these ░░░░ possibilities, ░░░░ ░░░░ sometimes ░░░░ your work. ░░░░ ░░░░ ░░░░ problems involving ░░░░ ░░░░ down ░░░░ ░░░░ often helps to ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ slope. A ░░░░ important difference ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ relative motion; ░░░░ ░░░░ when one ░░░░ ░░░░ moving relative to the other. ░░░░ ░░░░ ░░░░ ░░░░ not ░░░░ ░░░░ ░░░░ are physically equivalent? ░░░░ certain special ░░░░ called inertial ░░░░ ░░░░ basic laws hold true in ░░░░ standard, ░░░░ form. ░░░░ ░░░░ ░░░░ one of these basic ░░░░ ░░░░ ░░░░ ░░░░ law, ░░░░ ░░░░ of ░░░░ that ░░░░ ░░░░ are called ░░░░ If a ░░░░ ░░░░ is accelerating or rotating relative ░░░░ an ░░░░ ░░░░ then this second ░░░░ is ░░░░ ░░░░ ░░░░ basic ░░░░ — in particular, ░░░░ laws — do not ░░░░ in their ░░░░ ░░░░ in ░░░░ ░░░░ frame. ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ distinction between inertial ░░░░ ░░░░ frames ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ classical ░░░░ It ░░░░ ░░░░ ░░░░ ░░░░ explicit ░░░░ in the ░░░░ ░░░░ ░░░░

#### Mass and Force

##### Mass

The ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ object's inertia—its resistance ░░░░ ░░░░ accelerated: A ░░░░ ░░░░ is ░░░░ to ░░░░ and its mass ░░░░ ░░░░ ░░░░ little ░░░░ ░░░░ easy ░░░░ accelerate, and ░░░░ mass ░░░░ small. To make ░░░░ natural ideas quantitative we ░░░░ to define ░░░░ unit of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ for ░░░░ the mass ░░░░ ░░░░ ░░░░ in ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ agreed unit ░░░░ mass ░░░░
the kilogram and is defined arbitrarily to ░░░░ the mass ░░░░ a ░░░░ of platinum—iridium ░░░░ ░░░░ the ░░░░ Bureau ░░░░ Weights and Measures outside ░░░░ To ░░░░ the mass ░░░░ any ░░░░ ░░░░ we ░░░░ a ░░░░ of comparing ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ be ░░░░ ░░░░ an ░░░░ balance. The two ░░░░ ░░░░ ░░░░ compared ░░░░ fastened ░░░░ ░░░░ ░░░░ ░░░░ of a ░░░░ ░░░░ rod, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ pull at ░░░░ ░░░░ If the masses ░░░░ ░░░░ ░░░░ will ░░░░ equally ░░░░ ░░░░ rod ░░░░ ░░░░ ░░░░ without rotating; ░░░░ the ░░░░ are unequal, ░░░░ more massive one ░░░░ ░░░░ less, ░░░░ ░░░░ rod will rotate ░░░░ ░░░░ ░░░░ off. ░░░░ beauty of ░░░░ ░░░░ balance ░░░░ ░░░░ it ░░░░ ░░░░ ░░░░ ░░░░ of mass ░░░░ ░░░░ ░░░░ based directly on the notion of ░░░░ ░░░░ ░░░░ to being ░░░░ In ░░░░ an ░░░░ balance ░░░░ be ░░░░ ░░░░ to ░░░░ and it is fortunate that there ░░░░ much ░░░░ ways ░░░░ compare ░░░░ of which the ░░░░ ░░░░ ░░░░ weigh ░░░░ ░░░░ ░░░░ two objects have ░░░░ same ░░░░ if and ░░░░ if ░░░░ ░░░░ the ░░░░ weight (when ░░░░ ░░░░ ░░░░ ░░░░ place), ░░░░ a simple, ░░░░ way to check whether two ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ weigh them ░░░░ see if ░░░░ weights ░░░░ ░░░░

░░░░ ░░░░ methods for comparing ░░░░ we ░░░░ ░░░░ set up a scheme to measure ░░░░ ░░░░ ░░░░ we can ░░░░ ░░░░ ░░░░ ░░░░ of standard ░░░░ each ░░░░ checked ░░░░ ░░░░ ░░░░ $1 \ \mathrm{kg}$ mass ░░░░ ░░░░ ░░░░ inertial ░░░░ gravitational balance. ░░░░ ░░░░ can ░░░░ multiples ░░░░ ░░░░ ░░░░ the kilogram, again ░░░░ ░░░░ with our balance. ░░░░ check ░░░░ $2 \ \mathrm{kg}$ ░░░░ ░░░░ ░░░░ ░░░░ of the ░░░░ ░░░░ ░░░░ $1 \ \mathrm{kg}$ masses placed ░░░░ on the ░░░░ ░░░░ ░░░░ check two half-kg masses by ░░░░ that ░░░░ masses ░░░░ ░░░░ and that together ░░░░ balance ░░░░ $1 \ \mathrm{kg}$ mass; ░░░░ so on.) Finally, we can ░░░░ ░░░░ unknown ░░░░ by putting ░░░░ ░░░░ ░░░░ end ░░░░ the ░░░░ ░░░░ loading ░░░░ masses ░░░░ the ░░░░ ░░░░ until ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░

##### Force

░░░░ informal notion ░░░░ force as ░░░░ ░░░░ ░░░░ pull is a surprisingly ░░░░ starting point. ░░░░ two ░░░░ tasks are ░░░░ then, ░░░░ all ░░░░ forces and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ adopt ░░░░ ░░░░ (abbreviated $\bf{N}$) defined ░░░░ the ░░░░ ░░░░ any ░░░░ ░░░░ ░░░░ ░░░░ a ░░░░ kilogram mass ░░░░ an acceleration of $1 \ \mathrm{m / s^2}$░░░░ 

We ░░░░ ░░░░ describe ░░░░ direction as one ░░░░ of ░░░░ resultant ░░░░ ░░░░ is, ░░░░ direction in which ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ force is ░░░░ ░░░░ ░░░░

░░░░ ░░░░ ░░░░ study Newton's three ░░░░ of ░░░░

#### Newton's First and Second Laws; Inertial Frames

In this chapter, we ░░░░ Newton's ░░░░ ░░░░ they apply to ░░░░ ░░░░ ░░░░ point ░░░░ ░░░░ particle, is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ with mass, ░░░░ ░░░░ size, that can move ░░░░ space ░░░░ has ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ It can have translational ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ of internal vibrations of ░░░░ Naturally, the laws ░░░░ motion ░░░░ ░░░░ ░░░░ point ░░░░ ░░░░ for ░░░░ ░░░░ and ░░░░ ░░░░ reason ░░░░ we start with point masses. 

_Newton's First Law_░░░░ **In the absence of forces, a particle moves with constant velocity $\bf{v}$.**

_Newton's Second Law_░░░░ **For any particle of mass $m$, the net force $\bf{F}$ on the particle is always equal to the mass $m$ times the particle's acceleration.**
$$\bf{F} = m\bf{a} \tag{1.11}$$
░░░░ ░░░░ ░░░░ the second ░░░░ of position over ░░░░ ░░░░ ░░░░ state this as ░░░░ second ░░░░ ░░░░ ░░░░
$$\bf{F} = m\bf{a} = m\ddot{\bf{r}} \tag{1.12}$$
░░░░ ░░░░ ░░░░ can be ░░░░ ░░░░ terms ░░░░ ░░░░ ░░░░ _momentum_░░░░ ░░░░ as, $$\bf{p} = m\bf{v} \tag{1.13}$$
░░░░ in ░░░░ mechanics, we ░░░░ for ░░░░ that the ░░░░ $m$ remains constant, so that,

$$
\dot{\bf{p}} = m\bf{\dot{v}} = m\bf{a}
$$
$$\therefore \quad \bf{F} = \bf{\dot{p}} \tag{1.14}$$

##### Differential Equations

░░░░ ░░░░ ░░░░ ░░░░ form $m\bf{\ddot{r}} = \bf{F}$, Newton's second law is ░░░░ ░░░░ ░░░░ for the ░░░░ position $\bf{r}(t)$░░░░ That is, it ░░░░ an equation ░░░░ the ░░░░ ░░░░ $\bf{r}(t)$ that involves ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ can be ░░░░ as, ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░ ░░░░ a physicist's ░░░░ is spent solving ░░░░ equations. In ░░░░ most of ░░░░ problems in ░░░░ ░░░░ involve differential ░░░░ ░░░░ ░░░░ Newton's ░░░░ law ░░░░ its ░░░░ in the ░░░░ and Hamiltonian forms of mechanics. ░░░░ ░░░░ widely ░░░░ ░░░░ difficulty. Some ░░░░ so easy to ░░░░ that ░░░░ scarcely ░░░░ them. For example, consider ░░░░ second law ░░░░ ░░░░ particle ░░░░ to move along the $x$ ░░░░ and ░░░░ to ░░░░ constant force $\bf{F}_0$░░░░

$$\ddot{x}(t) = \dfrac{\bf{F}_0}{m}$$
░░░░ is a second order ░░░░ ░░░░ ░░░░ $x(t)$ ░░░░ ░░░░ function of $t$░░░░ To solve it, ░░░░ ░░░░ need to ░░░░ ░░░░

$$
\begin{aligned}
\int{\int{\ddot{x}(t)} \ dt} \ dt &= \int{\int{\dfrac{\bf{F}_0}{m}} \ dt} \ dt \\ \\[0.5pt]
\int{\dot{x}(t)} \ dt &= \int{\left(v_0 + \dfrac{\bf{F}_0}{m}t\right)} \ dt \\
\end{aligned}
$$
The ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ velocity ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ velocity, and ░░░░ ░░░░ ░░░░ ░░░░ the position

$$x(t) = x_0 + v_0t + \dfrac{\bf{F}_0}{2m}t^2$$

░░░░ ░░░░ ░░░░ ░░░░ of integration ░░░░ the ░░░░ ░░░░ position.

##### Inertial Frames

░░░░ the face of ░░░░ Newton's second law includes ░░░░ first: If there ░░░░ ░░░░ forces ░░░░ an ░░░░ ░░░░ $\bf{F} = 0$ and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\bf{a} = 0$, which ░░░░ ░░░░ first law. ░░░░ is, however, ░░░░ important ░░░░ ░░░░ the first law has ░░░░ ░░░░ role to ░░░░ ░░░░ laws ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ conceivable reference frames. To ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ first law and imagine ░░░░ reference ░░░░ — we'll call ░░░░ $\mathscr{S}$ ░░░░ in ░░░░ the ░░░░ law is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\mathscr{S}$ has its ░░░░ ░░░░ ░░░░ fixed relative ░░░░ ░░░░ earth's ░░░░ then, to ░░░░ excellent approximation, ░░░░ first ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ with respect to ░░░░ frame $\mathscr{S}$: ░░░░ ░░░░ ░░░░ ░░░░ on ░░░░ smooth ░░░░ surface is subject to zero force ░░░░ in accordance ░░░░ the ░░░░ law, ░░░░ moves ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ law of ░░░░ holds, ░░░░ call $\mathscr{S}$ an inertial ░░░░ ░░░░ we consider ░░░░ second ░░░░ $\mathscr{S'}$ ░░░░ ░░░░ moving relative ░░░░ $\mathscr{S}$ ░░░░ ░░░░ ░░░░ and ░░░░ not rotating, ░░░░ the ░░░░ puck ░░░░ also be ░░░░ ░░░░ move with ░░░░ velocity relative to $\mathscr{S'}$. ░░░░ is, the ░░░░ $\mathscr{S'}$ is ░░░░ ░░░░

If, however, we ░░░░ a third frame $\mathscr{S"}$ ░░░░ is ░░░░ relative to $\mathscr{S}$, then, ░░░░ viewed from $\mathscr{S"}$░░░░ the puck ░░░░ be seen to ░░░░ ░░░░ (in ░░░░ ░░░░ direction). ░░░░ ░░░░ the accelerating ░░░░ $\mathscr{S"}$ the law ░░░░ inertia ░░░░ not ░░░░ ░░░░ we ░░░░ ░░░░ $\mathscr{S"}$ is non-inertial. I ░░░░ ░░░░ that there is nothing mysterious ░░░░ ░░░░ ░░░░ Indeed ░░░░ ░░░░ a matter ░░░░ experience. The ░░░░ $\mathscr{S'}$ ░░░░ ░░░░ a frame ░░░░ to a high-speed train traveling smoothly at constant speed along ░░░░ straight track, and ░░░░ friction-less puck, an ░░░░ ░░░░ placed on the floor of ░░░░ ░░░░ as in Figure ░░░░ As seen ░░░░ ░░░░ train ░░░░ $\mathscr{S'}$), the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ and remains at rest, ░░░░ ░░░░ with the first law. ░░░░ ░░░░ from the ░░░░ ░░░░ $\mathscr{S}$░░░░ ░░░░ ░░░░ ░░░░ is moving with ░░░░ ░░░░ velocity as ░░░░ ░░░░ ░░░░ ░░░░ to do ░░░░ ░░░░ in obedience ░░░░ the ░░░░ ░░░░

But now ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ on ░░░░ ░░░░ train ░░░░ $\mathscr{S"}$) ░░░░ is accelerating ░░░░ ░░░░ this ░░░░ accelerates ░░░░ ░░░░ ice cube ░░░░ ░░░░ behind, and, ░░░░ to $\mathscr{S"}$, ░░░░ ice ░░░░ accelerates backward, even though ░░░░ ░░░░ no ░░░░ force. Clearly the frame $\mathscr{S"}$ is ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ two laws can hold in $\mathscr{S"}$. A similar ░░░░ ░░░░ hold ░░░░ the frame $\mathscr{S"}$ ░░░░ been ░░░░ to a ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ subject ░░░░ ░░░░ net ░░░░ would ░░░░ ░░░░ ░░░░ ░░░░ straight ░░░░ as ░░░░ in $\mathscr{S"}$░░░░ ░░░░ ░░░░ laws ░░░░ ░░░░ hold.

░░░░ Newton's ░░░░ laws ░░░░ only in the ░░░░ inertial (non-accelerating and ░░░░ reference frames. ░░░░ ░░░░ of science ░░░░ the ░░░░ that the first ░░░░ should ░░░░ ░░░░ to ░░░░ these ░░░░ frames — ░░░░ ░░░░ frame $\mathscr{S}$ is ░░░░ if ░░░░ that ░░░░ ░░░░ subject to ░░░░ ░░░░ are ░░░░ ░░░░ move with ░░░░ ░░░░ ░░░░ to $\mathscr{S}$. ░░░░ ░░░░ the ░░░░ frames ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ ░░░░ can ░░░░ ░░░░ as ░░░░ ░░░░ ░░░░ that the second law holds ░░░░ these same ░░░░ ░░░░

### The Third Law and Conservation of Momentum

Newton's first two laws concern the ░░░░ ░░░░ ░░░░ single ░░░░ to applied forces. The ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ different issue: Every force on ░░░░ ░░░░ ░░░░ involves a ░░░░ ░░░░ — the object ░░░░ ░░░░ ░░░░ ░░░░ The ░░░░ is hit ░░░░ the ░░░░ the cart is ░░░░ by the horse, and ░░░░ ░░░░ ░░░░ ░░░░ much is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ common sense, ░░░░ third ░░░░ ░░░░ ░░░░ beyond ░░░░ ░░░░ experience. Newton ░░░░ ░░░░ if an ░░░░ $1$ exerts a ░░░░ on ░░░░ object $2$░░░░ then ░░░░ $2$ ░░░░ ░░░░ a ░░░░ (the "reaction" force) ░░░░ ░░░░ object $1$. This ░░░░ ░░░░ natural: ░░░░ ░░░░ push ░░░░ against ░░░░ wall, ░░░░ ░░░░ ░░░░ ░░░░ to convince yourself that ░░░░ wall ░░░░ ░░░░ a ░░░░ back on you, ░░░░ which you would undoubtedly fall over. The aspect ░░░░ ░░░░ ░░░░ ░░░░ which ░░░░ goes beyond our normal perceptions is this:

According ░░░░ ░░░░ ░░░░ ░░░░ the reaction force ░░░░ ░░░░ $2$ ░░░░ object $1$ is ░░░░ equal and ░░░░ ░░░░ the original ░░░░ ░░░░ $1$ on $2$░░░░ If we introduce ░░░░ ░░░░ $\bf{F}_{21}$ to denote the force ░░░░ on object $2$ by ░░░░ $1$, ░░░░ third law can be ░░░░ ░░░░ compactly:

_Newton's Third Law_: **If object $1$ exerts a force $\bf{F}_{21}$ on object $2$, then object $2$ always exerts a reaction force $\bf{F}_{12}$ on object $1$:** $$\bf{F}_{12} = - \bf{F}_{21} \tag{1.15}$$

### Proof for the Conservation of Momentum

░░░░ need ░░░░ ░░░░ that ░░░░ ░░░░ force ($\bf{F}$░░░░ ░░░░ ░░░░ an object ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ of ░░░░ object's ░░░░ with ░░░░ ░░░░ ░░░░ ($\bf{\dot{p}}$░░░░

Newton's second law: $\bf{F} = m\bf{a}$, ░░░░ $\bf{p} = m \bf{v}$.

░░░░ both sides ░░░░ $\bf{p} = m \bf{v}$ ░░░░ ░░░░ ░░░░ $t$, ░░░░ constant ░░░░$m$):

$$
\begin{aligned}
\frac{d\bf{p}}{dt} = \dot{\bf{p}} &= \frac{d}{dt}(m\bf{v})\\
&= m \ \frac{dv}{dt} \\
&= m \bf{a}\\\\
\therefore \quad \bf{F} = \dot{\bf{p}}
\end{aligned}
$$
░░░░ ░░░░ ░░░░ ░░░░ can ░░░░ with ░░░░ ░░░░ proof.

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $p_1$ and $p_2$, exerting ░░░░ ░░░░ ░░░░ ░░░░ other $\bf{F_{21}}$ and $\bf{F_{12}}$ respectively. 

░░░░ approximate any and ░░░░ ░░░░ ░░░░ on ░░░░ two ░░░░ ░░░░ $\bf{F^{ext}_{1}}$ and $\bf{F^{ext}_{2}}$. ░░░░ ░░░░

$$
\begin{aligned}
\bf{F}_{p_1} = \bf{F}_{12} + \bf{F}^{ext}_1 \\\\
\bf{F}_{p_2} = \bf{F}_{21} + \bf{F}^{ext}_2
\end{aligned}
$$

░░░░ $\bf{F} = \dot{\bf{p}}$,

$$
\begin{aligned}
\bf{F}_{p_1} = \bf{\dot{p}}_1\\\\
\bf{F}_{p_2} = \bf{\dot{p}}_2
\end{aligned}
$$
The ░░░░ momentum ░░░░ our 2-particle ░░░░ ░░░░

$$
\bf{P}_{t} = \bf{p}_1 + \bf{p}_2 \\
$$

░░░░ both ░░░░ ░░░░ respect to time,

$$
\begin{aligned}
\dot{\bf{P}_{t}} &= \dot{\bf{p}_1} + \dot{\bf{p}_2}\\ \\[0.5pt]
\dot{\bf{P}_{t}} &= \bf{F_{12}} + \bf{F_{21}} + F^{ext}_1 + F^{ext}_2 \\
\end{aligned}
$$
░░░░ $\bf{F_{12}} = - \bf{F_{21}}$░░░░ and combining external forces with $\bf{F_{ext}}$,

$$
\dot{\bf{P}_{t}} = \bf{F}_{ext}
$$
This ░░░░ result ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░$\dot{\bf{P}}_{t}$░░░░ of ░░░░ two-particle ░░░░ is ░░░░ only to the ░░░░ ░░░░ being acted upon ░░░░ particles. 

In the special ░░░░ $\bf{F}_{ext} = 0$░░░░

$$\dot{\bf{P}}_{t} = constant \quad \blacksquare$$

░░░░ ░░░░ law ░░░░ intimately ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ conservation of momentum. 
░░░░ the ░░░░ ░░░░ external ░░░░ the ░░░░ ░░░░ of our ░░░░ ░░░░ ░░░░ constant - a result ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░

##### Validity of Newton's Third Law

T.B.D ░░░░ covering ░░░░

### Newton's Second Law in Cartesian Coordinates

Of Newton's three ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ use ░░░░ ░░░░ is ░░░░ ░░░░ which is ░░░░ ░░░░ ░░░░ the equation ░░░░ ░░░░ As ░░░░ ░░░░ seen, the first ░░░░ theoretically ░░░░ ░░░░ define what we mean ░░░░ ░░░░ frames but is usually of ░░░░ practical use beyond this. ░░░░ ░░░░ ░░░░ is crucially ░░░░ ░░░░ sorting out the internal ░░░░ ░░░░ a ░░░░ ░░░░ but, once ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the second ░░░░ is what we actually use to ░░░░ the ░░░░ ░░░░ the object ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ particular, ░░░░ many simple ░░░░ the forces are known ░░░░ ░░░░ found, and, ░░░░ ░░░░ ░░░░ ░░░░ second law ░░░░ ░░░░ we ░░░░ for solving the ░░░░ We ░░░░ know that, $$\bf{F} = m\ddot{\bf{r}}$$
░░░░ a second order ░░░░ differential equation for ░░░░ position ░░░░ $\bf{r}$ ░░░░ ░░░░ function of ░░░░ $t$. In ░░░░ ░░░░ problem, ░░░░ forces ░░░░ comprise $\bf{F}$ ░░░░ ░░░░ ░░░░ our job is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ for $\bf{r}(t)$, ░░░░ we have to ░░░░ it to ░░░░ some of the forces. The ░░░░ ░░░░ to ░░░░ such equations ░░░░ ░░░░ always ░░░░ resolve ░░░░ vectors ░░░░ their ░░░░ ░░░░ ░░░░ our ░░░░ coordinate ░░░░ 

░░░░ ░░░░ this in action by ░░░░ Newton's ░░░░ law in ░░░░ ░░░░ for ░░░░ conceptually ░░░░ case. The ░░░░ force ░░░░ be ░░░░ ░░░░

$$\bf{F} = F_x\hat{\bf{x}} + F_y\hat{\bf{y}} + F_z\hat{\bf{z}} \tag{1.19}$$
and the ░░░░ ░░░░ $\bf{r}$ ░░░░ 

$$\bf{r} = x\hat{\bf{x}} + y\hat{\bf{y}} + z\hat{\bf{z}} \tag{1.20}$$
As noted in [Section 1.1](#space-and-time), this expansion ░░░░ $\bf{r}$ in ░░░░ of its ░░░░ components ░░░░ ░░░░ ░░░░ to differentiate because ░░░░ unit vectors $\bf{\hat{x}}$░░░░ $\bf{\hat{y}}$, ░░░░ $\bf{\hat{z}}$ are constant. Thus we can differentiate (1.20) twice ░░░░ ░░░░ the simple result,

$$\bf{\ddot{r}} = \ddot{x} \bf{\hat{x}} + \ddot{y} \bf{\hat{y}} + \ddot{z} \bf{\hat{z}} \tag{1.21}$$
░░░░ is, ░░░░ ░░░░ Cartesian ░░░░ of $\bf{\ddot{r}}$ ░░░░ just ░░░░ ░░░░ derivatives ░░░░ ░░░░ ░░░░ coordinates $x$░░░░ $y$░░░░ $z$ of $\bf{r}$ ░░░░ the second ░░░░ then becomes,

$$F_x\bf{\hat{x}} + F_y\bf{\hat{y}} + F_z\bf{\hat{z}} = m\ddot{x}\bf{\hat{x}} + m\ddot{y}\bf{\hat{y}} + m\ddot{z}\bf{\hat{z}} \tag{1.22}$$ Resolving this equation into its three separate components, we see that $F_x$ has to equal $m\ddot{x}$ and similarly for ░░░░ $y$ ░░░░ $z$ components. That ░░░░ in Cartesian coordinates, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ ░░░░ ░░░░ separate equations:

$$
\bf{F} = m\bf{\ddot{r}} \iff \begin{cases}
F_x = m\ddot{x}\\
F_y = m\ddot{y}\\
F_z = m\ddot{z}\\
\end{cases} \tag{1.23}
$$
This ░░░░ ░░░░ in ░░░░ coordinates for Newton's ░░░░ ░░░░ ░░░░ three ░░░░ is ░░░░ to three ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ We ░░░░ generalize this derivation for ░░░░ ░░░░

░░░░ represent ░░░░ ░░░░ ░░░░ n-dimensional Cartesian ░░░░ ░░░░ ░░░░

$$
\tag{1.1} \bf{r} = \sum_{k = 0}^{n - 1} l_k  \bf{\hat{i}_k}  
$$

░░░░ ░░░░ ░░░░ $l_k$ ░░░░ over ░░░░ We can represent the ░░░░ ░░░░ in ░░░░ ░░░░ ░░░░ unit ░░░░

$$\bf{F} = \sum_{k = 0}^{n - 1}F_k \bf{\hat{i}_k} = m \sum_{k = 0}^{n - 1}\ddot{l}_k \bf{\hat{i}_k} = m\bf{\ddot{r}}$$
Since acceleration ░░░░ the second derivative of ░░░░ ░░░░ ░░░░ ░░░░ to ░░░░ we ░░░░ $1.1$ first to get ░░░░ velocity,

$$
\begin{aligned}
\dfrac{d\bf{r}}{dt} &= \bf{\dot{r}} = \dfrac{d}{dt}\left(\sum_{k = 0}^{n - 1} l_k \bf{\hat{i}_k}\right) \\ \\[0.1pt]
&= \sum_{k = 0}^{n - 1}\dfrac{d}{dt}(l_k \bf{\hat{i}_k}) \\
\end{aligned}
$$
Applying the ░░░░ ░░░░ ($\frac{d}{dt}(fg) = \dot{f}g + f\dot{g}$░░░░ and simplifying. ░░░░ the coordinate vectors do not vary with time, their ░░░░ are $0$░░░░ ░░░░ $n - 1$ terms to ░░░░

$$
\begin{aligned}
= \sum_{k = 0}^{n - 1} \left(\dfrac{dl_k}{dt}\bf{\hat{i}_k} + l_k\dfrac{d\bf{\hat{i}_k}}{dt}\right)
\end{aligned}
$$
$$\tag{1.2} \therefore \quad \bf{v}(t) = \sum_{k = 0}^{n - 1}(\dot{l}_k \bf{\hat{i}_k})$$

░░░░ $\dot{l}_k$ is the time derivative of $l_k$ $(dl_k/dt)$. ░░░░ ░░░░ differentiate $\bf{v}(t)$ ░░░░ get $\bf{a}(t)$,

$$
\begin{aligned}
	\dfrac{d\bf{v}}{dt} &= \bf{\dot{v}} = \dfrac{d}{dt}\sum_{k = 0}^{n - 1}(\dot{l}_k \bf{\hat{i}_k})
\end{aligned}
$$
$$\therefore \quad \bf{a}(t) = \sum_{k = 0}^{n - 1}(\ddot{l}_k \bf{\hat{i}_k}) \tag{1.3}$$
░░░░ we have$$\boxed{\bf{F} = m\bf{\ddot{r}} \quad \iff \quad \sum_{k = 0}^{n - 1}F_k \bf{\hat{i}_k} \quad \iff \quad m\sum_{k = 0}^{n - 1}\ddot{r}_k\bf{\hat{i}_k} \quad \blacksquare}$$

### Two-Dimensional Polar Coordinates

░░░░ ░░░░ coordinates have ░░░░ merit of simplicity, we ░░░░ going ░░░░ ░░░░ that it is almost impossible ░░░░ ░░░░ ░░░░ problems ░░░░ the use ░░░░ various non-Cartesian ░░░░ systems. To illustrate ░░░░ complexities ░░░░ non-Cartesian coordinates, ░░░░ ░░░░ ░░░░ ░░░░ form of ░░░░ second ░░░░ in ░░░░ ░░░░ ░░░░ ░░░░ polar coordinates. ░░░░ ░░░░ using ░░░░ two rectangular coordinates $x$░░░░ $y$░░░░ we label the ░░░░ ░░░░ a particle ░░░░ its distance $r$ ░░░░ the origin and the angle $\phi$ measured counter-clockwise ░░░░ ░░░░ $x$░░░░

░░░░ ░░░░ coordinates, a position ░░░░ ░░░░ be described in terms of ░░░░ radial ░░░░ $r$ ░░░░ ░░░░ argument ░░░░ $\phi$, ░░░░ ░░░░ ░░░░ x-axis. Before proceeding with ░░░░ ░░░░ we ░░░░ ░░░░ to convert ░░░░ between ░░░░ and polar coordinates.

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

░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ vector as ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░$$z = x + iy = r(\cos\phi + i\sin\phi) = re^{-i\phi} \tag{1.2}$$and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ complex ░░░░ is,$$\bar{z} = r(\cos\phi - i\sin\phi) = re^{-i\phi} \tag{1.3}$$░░░░ ░░░░ add and subtract $1.2$ and $1.3$ ░░░░ ░░░░ get ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
z + \bar{z} &= re^{i\phi} + re^{-i\phi} \\ \\[0.1pt]
&= r(e^{i\phi} + e^{-i\phi})
\end{aligned}
$$

Since $z + \bar{z} = x + iy + x - iy = 2x$ ░░░░ purely real, ░░░░ $x = r\cos\phi$ ░░░░ $1.1$░░░░

$$
\begin{align*}
2r\cos\phi &= r(e^{i\phi} + e^{-i\phi}) \\ \\[0.1pt]
\tag{1.4} \therefore \quad \cos\phi &= \dfrac{e^{i\phi} + e^{-i\phi}}{2} 
\end{align*}
$$

░░░░ ░░░░

$$
\begin{aligned}
z - \bar{z} = r(e^{i\phi} - e^{-i\phi})
\end{aligned}
$$

Since $z - \bar{z} = 2iy$ ░░░░ purely imaginary, and $y = r\sin\phi$ by $1.1$,

$$
\begin{align*}
2ir\sin\phi &= r(e^{i\phi} - e^{-i\phi}) \\ \\[0.1pt]
\tag{1.5} \therefore \quad \sin\phi &= \dfrac{e^{i\phi} - e^{-i\phi}}{2i} 
\end{align*}
$$

Along ░░░░ ░░░░ ░░░░ ░░░░ bridging ░░░░ ░░░░ trigonometry ░░░░ ░░░░ be derived ░░░░ many ways, ░░░░ of ░░░░ being a Taylor series expansion ░░░░ $e^x$. ░░░░ ░░░░ ░░░░ first ░░░░ $e^{i\phi}$. We ░░░░ ░░░░ the Maclaurin ░░░░ ░░░░ around $x = 0$░░░░

$$
\begin{aligned}
e^x &= \sum_{n = 0}^{\infty}\dfrac{x^n}{n!} \\ \\[0.1pt] 
\end{aligned}
$$

░░░░ $x = i\theta$░░░░

$$
\begin{aligned}
	e^{i\theta} &= \sum_{n = 0}^{\infty}\dfrac{(i\theta)^n}{n!} \\ \\[0.1pt]
\end{aligned}
$$

When we ░░░░ ░░░░ ░░░░ up with alternating (odd ░░░░ ░░░░ terms where ░░░░ $i^2 = 1$ ░░░░ out. ░░░░ ░░░░ $n = 2k$░░░░

$$
\begin{aligned}
	&= \sum_{k = 0}^{\infty}\dfrac{(i\theta)^{2k}}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{(i\theta)^{2k + 1}}{(2k + 1)!} \\ \\[0.1pt]
	&= \sum_{k = 0}^{\infty}\dfrac{(i^{2k}\theta^{2k})}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{(i^{2k + 1}\theta^{2k + 1})}{(2k + 1)!} \\ \\[0.1pt]
	&= \sum_{k = 0}^{\infty}\dfrac{(-1)^k\theta^{2k}}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{i(-1)^k \theta^{2k + 1}}{(2k + 1)!} \\ \\[0.1pt]
\end{aligned}
$$

░░░░ two terms ░░░░ ░░░░ series expansions ░░░░ $\cos\theta$ and $\sin\theta$ ░░░░ 

$$
\begin{align*}
	&= \sum_{k = 0}^{\infty}\dfrac{(-1)^k\theta^{2k}}{(2k)!} + i\left(\sum_{k = 0}^{\infty}\dfrac{(-1)^k \theta^{2k + 1}}{(2k + 1)!}\right) \\ \\[0.1pt]
\tag{1.6} \therefore \quad e^{i\theta} &= \cos\theta + i\sin\theta \quad \blacksquare
\end{align*}
$$

░░░░ ░░░░ derivation, we ░░░░ ░░░░ the ░░░░

$$
\begin{align*}
\tag{1.7} e^{i\phi} &= \cos\phi + i\sin\phi\\
\tag{1.8} e^{-i\phi} &= \cos\phi - i\sin\phi\\
\end{align*}
$$

░░░░ to ░░░░ Cartesian derivation, we ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ velocity and ░░░░ (as $\bf{F} = m \bf{a}$░░░░ ░░░░ position vector can be represented ░░░░$$\bf{r} = r \bf{\hat{r}} \tag{1.9}$$
where $r$ ░░░░ ░░░░ ░░░░ distance, ░░░░ $\bf{\hat{r}}$ is the unit vector in ░░░░ ░░░░ ░░░░ $r$. When we differentiate, ░░░░ ░░░░ pick ░░░░ terms ░░░░ derivatives for $\bf{\hat{r}}$ and $\bf{\hat{\phi}}$. ░░░░ ░░░░ ░░░░ turn ░░░░ attention ░░░░ finding ░░░░ We first ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ discuss an alternate algebraic ░░░░

░░░░ ░░░░ $\Delta \bf{\hat{r}}$ from fig. ░░░░ ░░░░ ░░░░ the ░░░░ $r$ ░░░░ it ░░░░ ░░░░ $t_1$ to $t_2$. ░░░░ unit ░░░░ $\bf{\hat{r}}$ points in different directions. Since ░░░░ ░░░░ of ░░░░ ░░░░ vector ░░░░ ░░░░ change, we sweep ░░░░ ░░░░ along ░░░░ direction ░░░░ $\bf{\hat{\phi}}$░░░░ which ░░░░ ░░░░ to ░░░░ ░░░░ $\Delta \bf{\hat{r}}$ as $\Delta t \rightarrow 0$░░░░ We ░░░░ ░░░░ ░░░░ ░░░░ that $\Delta\bf{\hat{r}}$ is ░░░░ ░░░░ $\Delta\phi$ along $\bf{\hat{\phi}}$,

$$
\begin{align*}
\tag{1.10} \Delta \bf{\hat{r}} &\propto \Delta\phi \bf{\hat{\phi}}\\
\end{align*}
$$

We need to ░░░░ this angular ░░░░ $\Delta \phi$ ░░░░ time, ░░░░ the case ░░░░ ░░░░ $\Delta t$░░░░ ░░░░ ░░░░

$$
\begin{align*}
	\dot{\phi} &= \dfrac{d\phi}{dt} \\ \\[0.1pt]
	\tag{1.11} \Delta\phi &\approx \dot{\phi} \ \Delta t
\end{align*}
$$

░░░░ $1.11$ back ░░░░ $1.10$░░░░

$$
\begin{align*}
\Delta \bf{\hat{r}} &\approx \dot{\phi} \Delta t \bf{\hat{\phi}}
\end{align*}
$$

░░░░ the ░░░░ $\Delta t \rightarrow 0$ $\iff$ $\Delta \bf{\hat{r}}/\Delta t \rightarrow d\bf{\hat{r}}/dt$░░░░ ░░░░ ░░░░ sides ░░░░ $\Delta t$ ░░░░ ░░░░ the ░░░░ of $\bf{\hat{r}}$ that we ░░░░

$$
\begin{align*}
\lim_{\Delta t \rightarrow 0} \dfrac{\Delta \bf{\hat{r}}}{\Delta t} &\approx \lim_{\Delta t \rightarrow 0} \dfrac{\dot{\phi} \Delta t \bf{\hat{\phi}}}{\Delta t} \\ \\[0.1pt]
\tag{1.12} \therefore \quad \dfrac{d\bf{\hat{r}}}{dt} = \bf{\dot{\hat{r}}} &= \dot{\phi}\bf{\hat{\phi}}
\end{align*}
$$

░░░░ can use the ░░░░ ░░░░ argument ░░░░ ░░░░ $\bf{\dot{\hat{\phi}}}$, ░░░░ ░░░░ $\bf{\hat{\phi}}$ ░░░░ ░░░░ to $\bf{\hat{r}}$ ░░░░ it rotates counterclockwise ░░░░ $-\bf{\hat{r}}$, we ░░░░

$$
\begin{align*}
\tag{1.13} \dfrac{d\bf{\hat{\phi}}}{dt} &= \bf{\dot{\hat{\phi}}} = - \dot{\phi}\bf{\hat{r}}
\end{align*}
$$

░░░░ we turn ░░░░ an ░░░░ ░░░░ ░░░░ for ░░░░ ░░░░ derivative $\bf{\dot{\hat{r}}}$░░░░ ░░░░ ░░░░ ░░░░ $\bf{\hat{r}}$ and $\bf{\hat{\phi}}$ in ░░░░ of ░░░░ Cartesian counterparts $\bf{\hat{i}}$ ░░░░ $\bf{\hat{j}}$, ░░░░ evident from the geometry,

$$
\begin{align*}
	\tag{1.14} \bf{\hat{r}} &= \cos\phi \bf{\hat{i}} + \sin\phi \bf{\hat{j}} \\
	\tag{1.15} \bf{\hat{\phi}} &= - \sin\phi \bf{\hat{i}} + \cos\phi\bf{\hat{j}}
\end{align*}
$$

Differentiating $1.14$,

$$
\begin{align*}
\dfrac{d\bf{\hat{r}}}{dt} &= \dfrac{d}{dt}(\cos\phi \bf{\hat{i}} + \sin\phi \bf{\hat{j}}) \\ \\[0.1pt]
&= \dfrac{d}{dt}(\cos\phi \bf{\hat{i}}) + \dfrac{d}{dt}(\sin\phi \bf{\hat{j}}) \\ \\[0.1pt]
&= \dfrac{d\cos\phi}{dt}\bf{\hat{i}} + \dfrac{d\sin\phi}{dt} \bf{\hat{j}} \\ \\[0.1pt]
&= -\sin\phi \dot{\phi} \bf{\hat{i}} + \cos\phi \dot{\phi} \bf{\hat{j}} \\ \\[0.1pt]
&= \dot{\phi}(-\sin\phi \bf{\hat{i}} + \cos\phi \bf{\hat{j}}) \\ \\[0.1pt]
\end{align*}
$$

░░░░ $1.14$ back ░░░░ ░░░░ $\bf{\dot{\hat{r}}}$. ░░░░ the ░░░░ ░░░░ ░░░░ $\bf{\dot{\hat{\phi}}}$, we get ░░░░ ░░░░ equations from $1.12$ ░░░░ $1.13$░░░░

$$
\begin{align*}
\bf{\dot{\hat{r}}} &= \dot{\phi} \bf{\hat{\phi}} \\ \\[0.1pt]
\bf{\dot{\hat{\phi}}} &= -\dot{\phi} \bf{\hat{r}}
\end{align*}
$$

Now, having ░░░░ ░░░░ ░░░░ both algebraically and ░░░░ ░░░░ can ░░░░ to ░░░░ main ░░░░ ░░░░ $1.9$ ░░░░ ░░░░ Newton's ░░░░ ░░░░ in polar coordinates.

$$
\begin{align*}
	\bf{r} &= r \bf{\hat{r}} \\ \\[0.1pt]
	\dfrac{d\bf{r}}{dt} &= \dfrac{d(r \bf{\hat{r}})}{dt} \\ \\[0.1pt]
	&= \bf{\dot{r}} \bf{\hat{r}} + r \dot{\bf{\hat{r}}}
\end{align*}
$$

░░░░ ░░░░ equation for $\dot{\bf{\hat{r}}}$ from $1.12$░░░░

$$
\begin{align*}
\tag{1.16} \bf{v} = \dot{\bf{r}} \bf{\hat{r}} + r \dot{\phi} \bf{\hat{\phi}} 
\end{align*}
$$

░░░░ ░░░░ evaluate the velocity over ░░░░ ░░░░ ░░░░ $\bf{v}_r = \bf{\dot{r}}$ and $\bf{v}_\phi = r\dot{\phi}$░░░░ Now we ░░░░ $1.16$ to ░░░░ $\bf{\ddot{r}}$, 

$$
\begin{align*}
\dfrac{d\bf{v}}{dt} &= \dfrac{d}{dt}(\dot{\bf{r}} \bf{\hat{r}} + r \dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \dfrac{d}{dt}(\dot{\bf{r}} \bf{\hat{r}}) + \dfrac{d}{dt}(r \dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\bf{\dot{\hat{r}}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\dfrac{d}{dt}(\dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\bf{\dot{\hat{r}}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} + r\dot{\phi}\bf{\dot{\hat{\phi}}}
\end{align*}
$$

Substituting ░░░░ derivatives ░░░░ $1.12$ and $1.13$,

$$
\begin{align*}
	&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} + r\dot{\phi}(-\dot{\phi} \bf{\hat{r}}) \\ \\[0.1pt]
	&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} - r\dot{\phi}^2\bf{\hat{r}} \\ \\[0.1pt]
	&= \ddot{\bf{r}}\bf{\hat{r}} - r\dot{\phi}^2\bf{\hat{r}} + 2\dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} \\ \\[0.1pt]
	\therefore \quad \bf{a} &= (\ddot{\bf{r}} - r\dot{\phi}^2)\bf{\hat{r}} + (2\dot{\bf{r}}\dot{\phi} + r\ddot{\phi})\bf{\hat{\phi}}
\end{align*}
$$

░░░░ ░░░░ ░░░░ acceleration ░░░░ the ░░░░ ░░░░ coordinates. Since we can represent ░░░░ net force $\bf{F}$ as a sum of component forces along our orthonormal ░░░░

$$
\begin{align*}
\boxed{\bf{F} = m\bf{\ddot{r}} \quad \iff \quad F_r \bf{\hat{r}} + F_{\phi} \bf{\hat{\phi}} \quad \iff
\quad
	\begin{cases}
		F_r = m(\ddot{\bf{r}} - r\dot{\phi}^2) \\
		F_\phi = m(2\dot{\bf{r}}\dot{\phi} + r\ddot{\phi}) \ 
	\end{cases}
\quad \blacksquare
}
\end{align*}
$$

### Selected Exercises

#### Ex-$28$: Prove Conservation of Momentum for a multi-particle system with $N = 3$.

Lets consider ░░░░ ░░░░ of $N$ particles, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ index $\alpha$ or $\beta$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\alpha$ ░░░░ $m_{\alpha}$ and its momentum is $\bf{p_{\alpha}}$. 

For ░░░░ particle $\alpha$ ░░░░ forces exerted ░░░░ $\beta$ ░░░░ $\gamma$ ($\bf{F_{\alpha\beta}}$, $\bf{F_{\alpha\gamma}}$░░░░ alongside ░░░░ ░░░░ ░░░░ ░░░░ $\bf{F^{ext}_{\alpha}}$. Thus ░░░░ net force on $\alpha$ ░░░░

$$
\bf{F_{\alpha}} = \sum_{\beta \neq \alpha} \bf{F_{\alpha \beta}} + \bf{F^{ext}_{\alpha}}
$$
░░░░ ░░░░ ░░░░ ░░░░ $\bf{F} = \dot{\bf{p}} = m\bf{a}$,

$$
\dot{\bf{p_{\alpha}}} = \sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \bf{F^{ext}_{\alpha}}
$$
░░░░ expression ░░░░ ░░░░ for all $N$ ░░░░ ░░░░ ░░░░ consider ░░░░ total momentum of the ░░░░

$$
\bf{P} = \sum_{\alpha = 1}^{N} \bf{p_{\alpha}}
$$
░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ substituting $\dot{\bf{p_{\alpha}}}$

$$
\begin{aligned}
\dot{\bf{P}} &= \sum_{\alpha = 1}^{N} \dot{\bf{p_{\alpha}}} \\
\dot{\bf{P}} &= \sum_{\alpha = 1}^{N} \left(\sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \bf{F^{ext}_{\alpha}}\right) \\
&= \sum_{\alpha = 1}^{N} \sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \\
&= \sum_{\alpha} \sum_{\phi \neq \alpha}(\bf{F_{\alpha \phi}} + \bf{F_{\phi \alpha}}) + \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \\\\
\therefore \quad \dot{\bf{P}} = \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \equiv \bf{F^{ext}}
\end{aligned}
$$

This ░░░░ ░░░░ that the internal forces of ░░░░ the ░░░░ don't ░░░░ the evolution ░░░░ the ░░░░ ░░░░ ░░░░$\bf{P}$). The ░░░░ of change of $\bf{P}$ ░░░░ determined _only_ by ░░░░ ░░░░ _external_ force on ░░░░ system. ░░░░ the ░░░░ ░░░░ ░░░░ net external ░░░░ ░░░░ ░░░░ $\dot{\bf{P}} = constant$! $\blacksquare$

#### Ex-$31$: Show the converse of the Conservation of Momentum for a 2-particle system. That is, show that $\bf{F_{12}} = \bf{F_{21}}$.

░░░░ ░░░░ ░░░░ two particles $\alpha$ ░░░░ $\beta$, the ░░░░ ░░░░ ░░░░ them ░░░░ $\bf{F_{\alpha \beta}}$ and $\bf{F_{\beta \alpha}}$. Excluding any external forces, ░░░░ ░░░░ 

$$
\bf{F} = \bf{F_{\alpha \beta}} + \bf{F_{\beta \alpha}}
$$
We ░░░░ ░░░░ $\bf{F} = \dot{\bf{p}}$░░░░ ░░░░ have $\dot{\bf{p_1}} = \bf{F_{\alpha \beta}}$ and $\dot{\bf{p_2}} = \bf{F_{\beta \alpha}}$░░░░ The ░░░░ ░░░░ of this system is then,

$$
\bf{P} = \bf{p_1} + \bf{p_2}
$$
We ░░░░ ░░░░ $\bf{\dot{P}} = 0 = constant$, differentiating ░░░░ sides with respect to $t$,

$$
\begin{aligned}
\frac{d}{dt}(\bf{p_1} + \bf{p_2}) &= 0 \\\\[1pt]
\dot{\bf{p_1}} + \dot{\bf{p_2}} \equiv \bf{F_{\alpha\beta}} + \bf{F_{\beta\alpha}} &= 0 \\\\[1pt]
\therefore \quad \bf{F_{\alpha\beta}} = \bf{- F_{\beta\alpha}} \quad \blacksquare
\end{aligned}
$$

#### Ex-$35$: A golf ball is hit from ground level with speed $v_0$ in a direction that is due east and at an angle $\theta$ above the horizontal. Neglecting air resistance, use Newton’s second law to find the position as a function of time, using coordinates with $x$ measured east, $y$ north, and $z$ vertically up. Find the time for the golf ball to return to the ground and how far it travels in that time.

We ░░░░ to find $\bf{r_{puck}}(t) = \{\bf{r_x}(t), \ 0, \ \bf{r_z(t)} \}$░░░░ ░░░░ can start with ░░░░ ░░░░

░░░░ know that ░░░░ ░░░░ is along ░░░░ $x$ and $z$ ░░░░ Newton’s second law ░░░░ $\bf{F_x} = m\bf{a_x}$. As ░░░░ ░░░░ ░░░░ along ░░░░ ░░░░
$$\bf{a_x} = 0 \implies {\bf{F_x} = 0 \quad \& \quad \frac{d\bf{v}}{dt} = constant}$$
░░░░ the ░░░░ ░░░░ ░░░░ the $x$ ░░░░ ░░░░ $v_0$, we have an angle $\theta$ from the horizontal plane, and we know that $\dot{\bf{v}} = constant$, we begin constructing our velocity function for the $x$ component. $$\bf{v_x(t)} = v_0 \cos(\theta)$$
░░░░ ░░░░ ░░░░ get $\bf{r_x(t)}$,

$$
\begin{aligned}
\int{\bf{v_x(t)} \ dt} &= \int{v_0 \cos(\theta)} \ dt \\
r_x(t) &= v_0 \cos(\theta) \ t + C
\end{aligned}
$$
░░░░ origin at $(0, 0)$, $\bf{r_x}(0) = 0$, we get $C = x_0 = 0$░░░░ ░░░░ ░░░░ our desired function $r_x(t)$░░░░

$$
r_x(t) = v_0 \cos(\theta) \ t
$$
░░░░ ░░░░ to ░░░░ z-component,

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ know ░░░░ ░░░░ velocity, accounting ░░░░ $\theta$ ░░░░ $v_0 \sin(\theta)$. We also have the gravitational force accelerating the ball along the $-z$ axis, that makes $\bf{F_z} = -mg$░░░░ ░░░░ ░░░░ now solve our ░░░░ ░░░░

$$
\begin{aligned}
F_z &= m a_z \\
-mg &= m \dot{v_z} \\
\dot{v_z} &= -g \\
\end{aligned}
$$

Integrating ░░░░ ░░░░ ░░░░ respect to time,

$$
\begin{aligned}
\int{\dot{v_z}} \ dt &= \int{-g} \ dt \\
v_z(t) &= -gt + C \\ 
\end{aligned}
$$

░░░░ at $t = 0$, $v_z(0) = v_0 \sin(\theta)$░░░░ ░░░░ $C = v_0 \sin(\theta)$. We now ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ along ░░░░ z-component,

$$
v_z(t) = -gt + v_0 \sin(\theta) \\
$$
Integrating again with respect to time gives ░░░░ our desired function $r_z(t)$░░░░

$$
\begin{aligned}
\int{\bf{v_z(t)}} \ dt &= \int{(-gt + v_0 \sin(\theta))} \ dt \\
r_z(t) &= \int{-gt} \ dt + \int{v_0 \sin(\theta)} \ dt \\
r_z(t) &= -\frac{1}{2} g t^2 + C_1 + v_0 \sin(\theta)\ t + C_2 \\
\end{aligned}
$$

If at $t = 0$, $r_z(t) = 0$, and $C = C_1 + C_2$ then, $C = 0$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

$$
r_z(t) = -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \\ \\
\therefore \quad r_{puck}(t) = \{v_0 \cos(\theta) \ t, \ -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \} \quad \blacksquare
$$

Now, ░░░░ ░░░░ ░░░░ ░░░░ $t$ at which the ball hits the ground. We can ░░░░ with $r_z(t)$, and substitute ░░░░ with $0$,

$$
\begin{aligned}
r_z(t) &= -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \\
0 &= t(-\frac{1}{2} g t + v_0 \sin(\theta)) \\\\
\therefore \quad t = 0 \text{\quad or \quad} t = \frac{2 v_0 \sin(\theta)}{g} \quad \blacksquare
\end{aligned}
$$
░░░░ the $t > 0$ solution be $t_{post}$, to find the distance traversed as it hits the ground after being hit, we plug $t_{post}$ to ░░░░ equation ░░░░ ░░░░ x-component.

$$
\begin{aligned}
r_x(t_{\text{post}}) &= v_0 \cos(\theta) \, t_{\text{post}} \\
&= v_0 \cos(\theta) \left(\frac{2 v_0 \sin(\theta)}{g}\right) \\
&= \frac{2 v_0^2 \sin(\theta) \cos(\theta)}{g} \\\\
\therefore \quad r_x(t_{\text{post}}) = \frac{v_0^2 \sin(2\theta)}{g} \quad \blacksquare
\end{aligned}
$$

#### Ex-$36$: A plane, which is flying horizontally at a constant speed $v_0$ and at a height $h$ above the sea, must drop a bundle of supplies to a castaway on a small raft. 

##### (a) Write down Newton's second law for the bundle as it falls from the plane, assuming you can neglect air resistance. Solve your equations to give the bundle's position in flight as a function of time $t$. 

░░░░ ░░░░ ░░░░ 2D ░░░░ coordinates, ░░░░ represent the bundle's position as a function of ░░░░ $(\bm{r_{y}(t)})$░░░░ 

░░░░ bundle ░░░░ down from height $h$░░░░ ░░░░ $\bm{F_y} = -mg$░░░░

$$
\begin{aligned}
-mg &= m\bm{a_y} \\
\bm{a_y} &= -g \\
\end{aligned}
$$
Integrating both sides with respect to $t$,

$$
\begin{aligned}
\int{\bm{a_y}} \ dt = \int{-g} \ dt \\
\bm{v_y(t)} = -gt + C \\
\end{aligned}
$$
Since $v_y(0) = 0$, $C = 0$, and we have $\bm{v_y(t)} = -gt$░░░░ ░░░░ ░░░░ ░░░░ to find $r_{y}(t)$,

$$
\begin{aligned}
\int{\bm{v_y(t)}} \ dt &= \int{-gt} \ dt \\
\bm{r_y(t)} &= -\frac{1}{2}gt^2 + C\\
\end{aligned}
$$
░░░░ the ░░░░ case $t = 0$, $\bm{r_y(t)} = h \ \implies \ C = h$, giving us our final equation for $\bm{r_y(t)}$,

$$\therefore \quad \bm{r_y(t)} = -\frac{1}{2}gt^2 + h \quad \blacksquare$$

##### (b) How far before the raft (measured horizontally) must the pilot drop the bundle if it is to hit the raft? What is this distance if $\bm{v_0} = 50 \  \mathrm{m/s}$, $h = 100 \ \mathrm{m}$, and $g \approx 10 \ \mathrm{m/s^2}$? 

To determine how ░░░░ ░░░░ ░░░░ ░░░░ drop the ░░░░ so ░░░░ ░░░░ reaches the raft, it ░░░░ to first calculate ░░░░ much time it ░░░░ actually take to hit ░░░░ ground ░░░░ general. ░░░░ can do this ░░░░ ░░░░ ░░░░ equation for $\bm{r_y(t)}$ and ░░░░ for $t$░░░░

$$
\begin{aligned}
\frac{1}{2}gt^2 &= h \\
t &= \sqrt{\frac{2h}{g}} \\
\end{aligned}
$$
Substituting ░░░░ ░░░░

$$
\begin{aligned}
t &= \sqrt{\frac{200 \ \mathrm{m}}{10 \ \mathrm{m/s^2}}} \\\\
\therefore \quad t = 4.47 \ \mathrm{s}
\end{aligned}
$$
░░░░ ░░░░ that the plane ░░░░ ░░░░ an ░░░░ ░░░░ constant) velocity of $\bm{v_0} = 50 \ \mathrm{m / s}$, ░░░░ integrate ░░░░ ░░░░ to ░░░░ to ░░░░ the position ░░░░

$$
\begin{aligned}
\int{\bm{v_x(t)}} \ dt &= \int{v_0} \ dt \\
\bm{r_x(t)} &= \bm{v_0} t + C
\end{aligned}
$$
░░░░ the case $t = 0$, we ░░░░ presume $\bm{r_x(0)} = 0 \ \implies \ C = 0$░░░░ 

$$\therefore \quad \bm{r_x(t)} = \bm{v_0}t$$
Plugging in $t = 4.47 \ \mathrm{s}$, we ░░░░

$$
\begin{aligned}
\bm{r_x(4.47)} = 50 \ \mathrm{m / s} \cdot 4.47 \ \mathrm{s} \\ \\
\therefore \quad \bm{r_x(4.47)} = 223.5 \ \mathrm{m} \quad \blacksquare
\end{aligned}
$$
The plane ░░░░ ░░░░ ░░░░ the ░░░░ $223.5 \ \mathrm{m}$ before the raft's ░░░░ position along the x-axis.

##### (c) Within what interval of time $(\pm \ \Delta t)$ must the pilot drop the bundle if it is to land within $\pm \ 10 \ m$ of the raft?

░░░░ $\bm{r_x(4.47)} = 223.5 \ \mathrm{m}$, we want to find the time delta for which the bundle lands between $213.5 \ \mathrm{m}$ and $233.5 \ \mathrm{m}$, using our equation for $\bm{r_x(t)}$░░░░

$$
\begin{aligned}
\bm{v_0} t &= 213.5 \ \mathrm{m} \\ \\[2pt]
t &= \frac{213.5 \mathrm{m}}{50 \ \mathrm{m / s}} \\ \\[2pt]
t &= 4.27 \ \mathrm{s}
\end{aligned}
$$
$$
\begin{aligned}
\bm{v_0} t &= 233.5 \ \mathrm{m} \\ \\[2pt]
t &= \frac{233.5 \mathrm{m}}{50 \ \mathrm{m / s}} \\ \\[2pt]
t &= 4.67 \ \mathrm{s}
\end{aligned}
$$
Therefore, ░░░░ ░░░░ must ░░░░ ░░░░ between $\pm \ 0.2 \ \mathrm{s}$ to ░░░░ a $\pm \ 10 \ \mathrm{m}$ ░░░░ $\blacksquare$

#### Ex-$37$: A student kicks a frictionless puck with initial speed $\bm{v_0}$, so that it slides straight up a plane that is inclined at an angle $\theta$ above the horizontal. 

##### (a) Write down Newton's second law for the puck and solve to give its position as a function of time.

We ░░░░ ░░░░ ░░░░ ░░░░ incline of the slope, ░░░░ orthogonal ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ normal ░░░░ ░░░░ ░░░░ z-axis orthogonal to x and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

The ░░░░ ░░░░ ░░░░ on the puck ░░░░ $\bm{F_{net}} = N + mg$░░░░ ░░░░ $\bm{N} = (0, \ N, \ 0)$ ░░░░ $\bm{g} = (-g \sin(\theta), \ -g\cos(\theta))$░░░░ we ░░░░ ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
\bf{F} = m\ddot{r} \implies \begin{cases}
	m\ddot{x} &= -mg\sin\theta \\
	m\ddot{y} &= N - mg\cos\theta \\
	m\ddot{z} &= 0
\end{cases}
\end{aligned}
$$
Since $\ddot{z} = \dot{z} = 0$, $z = 0$ for ░░░░ $t$░░░░ ░░░░ ░░░░ force ░░░░ against gravity, ░░░░ $\ddot{y} = \dot{y} = y = 0$, ░░░░ we only need to evaluate the ░░░░ function for ░░░░ x-component. We can integrate ░░░░ ░░░░ ░░░░ $r_x(t)$.

$$
\begin{aligned}
\int{\int{m\ddot{r}}} \ dt \ dt &= \int{\int{-mg\sin\theta}} \ dt \ dt \\ \\[1pt]
\int{\int{\ddot{r}}} \ dt \ dt &= \int{\int{-g\sin\theta}} \ dt \ dt \\ \\[1pt]
\int{\dot{r}} \ dt &= \int{(-g\sin\theta t + C_1)} \ dt \\ \\[1pt]
\bm{r_x(t)} &= -\frac{1}{2}gt^2\sin\theta + C_1t + C_2 \\ 
\end{aligned}
$$
At $t = 0$, $x(0) = 0$, giving us $C_2 = r_0$. Now we ░░░░ with ░░░░ to ░░░░ ░░░░ ░░░░ $C_1$░░░░

$$
\begin{aligned}
\frac{dr_x(t)}{dt} &= \frac{d}{dt}\left(-\frac{1}{2}gt^2\sin\theta + C_1t + r_0 \right) \\ \\[1pt]
v_x(t) &= -gt\sin\theta + C_1 \\
\end{aligned}
$$
░░░░ $t = 0$░░░░ $v_x(0) = v_0$, ░░░░ us $C_1 = v_0$, ░░░░ us our final ░░░░

$$\therefore \quad r_x(t) = -\frac{1}{2}gt^2\sin\theta + v_0t + r_0 \quad \blacksquare$$

##### (b) How long will the puck take to return to its starting point?

Simplifying $r_x(t)$, ░░░░ ░░░░ ░░░░ = 0 ░░░░

$$
\begin{aligned}
r_x(t) &= \left(v_0 - \frac{1}{2} g \sin(\theta) t\right) \\\\
\therefore \quad t &= \frac{2 v_0}{g \sin(\theta)} \quad \blacksquare
\end{aligned}
$$

#### Ex-$39$: A ball is thrown with initial speed $\bm{v_0}$ up an inclined plane. The plane is inclined at an angle $\phi$ above the horizontal, and the ball's initial velocity is at an angle $\theta$ above the plane. Choose axes with $x$ measured up the slope, $y$ normal to the slope, and $z$ across it. 

##### Write down Newton's second law using these axes and find the ball's position as a function of time.

░░░░ ░░░░ are concerned ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ not sliding ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $N$ is redundant. ░░░░ motion is also ░░░░ along the $x$ and $y$ ░░░░ ░░░░ $\dot{z} = z = 0$ for ░░░░ $t$. Once ░░░░ ball is ░░░░ ░░░░ its ░░░░ weight acts ░░░░ ░░░░ ░░░░ $\bm{g} = (-g\sin\phi, \ -g\cos\phi)$░░░░ giving us our ░░░░ for ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
F_x &= m \ddot{r}_x \\
-mg\sin\phi &= m\ddot{r}_x \\
\ddot{r}_x &= -g\sin\phi 
\end{aligned}
$$
And ░░░░ $F_y = m\ddot{r}_y$, and $\ddot{r}_y = -g\cos\phi$. We integrate twice to get the position functions $r_x(t)$ ░░░░ $r_y(t)$. Starting with $r_x(t)$░░░░

$$
\begin{aligned}
\int{\int{\ddot{r}_x \ dt} \ dt} &= \int{\int{(-g\sin\phi) \ dt} \ dt} \\
\int{\dot{r}_x} \ dt &= \int{(-g\sin\phi t + C_1) \ dt} \\
r_x(t) &= -\frac{1}{2}gt^2\sin\phi + C_1t + C_2 \\
\end{aligned}
$$
░░░░ $t = 0$░░░░ $r_x(0) = 0$, giving us $C_2 = 0$. We need ░░░░ solve for $C_1$ by differentiating $r_x(t)$ ░░░░ ░░░░ $v_x(t)$ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
\dot{r} &= \frac{d}{dt}\left(-\frac{1}{2}gt^2\sin\phi + C_1t \right) \\
v_x(t) &= -\frac{1}{2} gt\sin\phi + C_1 \\
\end{aligned}
$$
At $t = 0$░░░░ $v_x(0) = v_0 \cos\theta \ \implies \ C_1 = v_0 \cos\theta$░░░░ ░░░░ us ░░░░ final equation ░░░░ $r_x(t)$,

$$r_x(t) = -\frac{1}{2}gt^2\sin\phi + v_0t\cos\theta$$
░░░░ ░░░░ ░░░░ steps exactly for ░░░░ y-component, ░░░░ ░░░░ evaluate $r_y(t) = -\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta$░░░░ We ░░░░ ░░░░ our ball's ░░░░ as a function ░░░░ ░░░░

$$\therefore \quad \bm{r_{ball}}(t) = (-\frac{1}{2}gt^2\sin\phi + v_0t\cos\theta, \ -\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta) \quad \blacksquare$$

##### Show that the ball lands a distance $R = 2v_0^2 \sin(\theta) \cos(\theta + \phi) / (g \cos^2(\phi)$ from its launch point.

░░░░ ball ░░░░ ░░░░ ░░░░ certain distance when $r_y(t) = 0$░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ $t$░░░░

$$
\begin{aligned}
-\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta &= 0 \\
\frac{1}{2}gt\cos\phi &= v_0\sin\theta \\
t &= \frac{2v_0\sin\theta}{g\cos\phi} \\
\end{aligned}
$$
Now, we ░░░░ this into $r_x(t)$, ░░░░ ░░░░ $R$,

$$
\begin{aligned}
r_x(\frac{2v_0\sin\theta}{g\cos\phi}) &= \left(-\frac{1}{2}gt\sin\phi + v_0\cos\theta\right) t \\ \\[1pt]
&= \left(-\frac{v_0g\sin\theta\sin\phi}{g\cos\phi} + v_0\cos\theta\right) \frac{2v_0\sin\theta}{g\cos\phi} \\ \\[1pt]
&= (- v_0\sin\theta\tan\phi + v_0\cos\theta) \frac{2v_0\sin\theta}{g\cos\phi} \\ \\[1pt]
&= \frac{2v_0^2\sin\theta(\cos\theta - \sin\theta\tan\phi)}{g\cos\phi} \\ \\[1pt]
&= \left(\frac{v_0 \sin \theta \sin \phi}{g \cos \phi} + v_0 \cos \theta \right) \frac{2v_0 \sin \theta}{g \cos \phi} \\ \\[1pt]
&= \frac{2v_0^2 \sin \theta (\cos \theta - \sin \theta \tan \phi)}{g \cos \phi} \\ \\[1pt]
&= \frac{2v_0^2 \sin \theta \cos(\theta + \phi)}{g \cos^2 \phi} \\ \\[1pt]
&= R \quad \blacksquare 
\end{aligned}
$$

##### Show that for given $v_0$ and $\phi$, the maximum possible range up the inclined plane is $R_{max} = v_0^2 / [g(1 + \sin(\phi))]$.

We ░░░░ to differentiate $R$ ░░░░ respect ░░░░ $\theta$, ░░░░ set it ░░░░ $0$ ░░░░ find the maximum ░░░░

$$
\begin{aligned}
\frac{d}{d\theta}(\frac{2v_0^2 \sin \theta \cos(\theta + \phi)}{g \cos^2 \phi}) &= \dot{R}  \\ \\[1pt]
\frac{d}{d\theta}(\frac{2v_0^2 \sin \theta \cos(\theta + \phi)}{g \cos^2 \phi}) &= 0 \\ \\[1pt]
\frac{2v_0^2}{g\cos^2\phi} \frac{d}{d\theta} \ (\sin\theta\cos(\theta + \phi)) &= 0 \\ \\[1pt]
\frac{2v\_0^2}{g \cos^2(\phi)} \left( \cos(\theta) \cos(\theta + \phi) - \sin(\theta) \sin(\theta + \phi) \right) &= 0 \\ \\[1pt]
\frac{2v\_0^2}{g \cos^2(\phi)} \cos(2\theta + \phi) &= 0
\end{aligned}
$$
░░░░

$$
\begin{aligned}
    \cos(2\theta + \phi) &= 0 \\ \\[1pt]
    2\theta + \phi &= \frac{\pi}{2} + n\pi \quad (\text{for } n \in \mathbb{Z}) \\ \\[1pt]
    2\theta &= \frac{\pi}{2} - \phi + n\pi \\ \\[1pt]
    \theta &= \frac{\pi}{4} - \frac{\phi}{2} + \frac{n\pi}{2}
\end{aligned}
$$
░░░░ $n =  0$ to get the ░░░░ ░░░░ we ░░░░ $\theta = \frac{\pi}{4} - \frac{\phi}{2}$. ░░░░ ░░░░ ░░░░ $R$,

$$
\begin{aligned}
R &= \frac{2v_0^2 \sin\left(\frac{\pi}{4} - \frac{\phi}{2}\right) \cos\left(\left(\frac{\pi}{4} - \frac{\phi}{2}\right) + \phi\right)}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{2v_0^2 \left(\sin\left(\frac{\pi}{4}\right) \cos\left(\frac{\phi}{2}\right) - \cos\left(\frac{\pi}{4}\right) \sin\left(\frac{\phi}{2}\right)\right) \left(\cos\left(\frac{\pi}{4}\right) \cos\left(\frac{\phi}{2}\right) + \sin\left(\frac{\pi}{4}\right) \sin\left(\frac{\phi}{2}\right)\right)}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{2v_0^2 \left(\frac{\sqrt{2}}{2} \cos\left(\frac{\phi}{2}\right) - \frac{\sqrt{2}}{2} \sin\left(\frac{\phi}{2}\right)\right) \left(\frac{\sqrt{2}}{2} \cos\left(\frac{\phi}{2}\right) + \frac{\sqrt{2}}{2} \sin\left(\frac{\phi}{2}\right)\right)}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{2v_0^2 \left(\frac{\sqrt{2}}{2} \left(\cos\left(\frac{\phi}{2}\right) - \sin\left(\frac{\phi}{2}\right)\right)\right) \left(\frac{\sqrt{2}}{2} \left(\cos\left(\frac{\phi}{2}\right) + \sin\left(\frac{\phi}{2}\right)\right)\right)}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{2v_0^2 \frac{\sqrt{2}}{2} \left(\cos\left(\frac{\phi}{2}\right) - \sin\left(\frac{\phi}{2}\right)\right) \frac{\sqrt{2}}{2} \left(\cos\left(\frac{\phi}{2}\right) + \sin\left(\frac{\phi}{2}\right)\right)}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{2v_0^2 \frac{1}{2} \left(\cos^2\left(\frac{\phi}{2}\right) - \sin^2\left(\frac{\phi}{2}\right)\right)}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{2v_0^2 \frac{1}{2} \left(\cos^2\left(\frac{\phi}{2}\right) - \sin^2\left(\frac{\phi}{2}\right)\right)}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{v_0^2 \left(\cos^2\left(\frac{\phi}{2}\right) - \sin^2\left(\frac{\phi}{2}\right)\right)}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{v_0^2 (1 - \sin(\phi))}{g \cos^2(\phi)} \\ \\[1pt]
&= \frac{v_0^2}{[g(1 + \sin\phi)]} \\ \\[1pt]
&= R_{max} \quad \blacksquare
\end{aligned}
$$

#### Ex-$40$: A cannon shoots a ball at an angle $\theta$ above the horizontal ground. 

##### (a) Neglecting air resistance, use Newton's second law to find the ball's position as a function of time. (Use axes with $x$ measured horizontally and $y$ vertically.) 

The ░░░░ ░░░░ only affected ░░░░ its weight, ░░░░ ░░░░ only ░░░░ ░░░░ y-component, ░░░░ ░░░░ $g_y = -g \implies F_y = -mg$. ░░░░ ░░░░ need to integrate twice ░░░░ ░░░░ $r_y(t)$,

$$
\begin{aligned}
F_y &= -mg \\
m\ddot{r_y} &= -mg \\
\ddot{r_y} &= -g \\
\dot{r_y} &= -gt + C_1 \\
r_y(t) &= -\frac{1}{2}gt^2 + C_1t + C_2 \\ 
\end{aligned}
$$
At $t = 0$, ░░░░ $r_y(0) = 0$, we need to find $C_1$░░░░ ░░░░ cannon ░░░░ ░░░░ initially ░░░░ an ░░░░ $\theta$ with ░░░░ velocity $v_0$░░░░

$$
\begin{aligned}
v_y(t) &= -gt + C_1 \\
C_1 &= v_0\sin\theta\\\\
\therefore \quad r_y(t) = -\frac{1}{2}gt^2 + v_0\sin\theta \ t \\
\end{aligned}
$$
░░░░ ░░░░ ░░░░ force acting on ░░░░ ░░░░ ░░░░ only ░░░░ the ░░░░ to ░░░░ ░░░░ so $r_x(t) = v_0\cos\theta \ t$ (derived exactly like $r_y(t)$░░░░ giving ░░░░ our ░░░░ position ░░░░
$$\therefore \quad \bm{r_{cball}}(t) = (v_0\cos\theta \ t, \ -\frac{1}{2}gt^2 + v_0\sin\theta \ t) \quad \blacksquare$$

##### (b) Let $r(t)$ denote the ball's distance from the cannon. What is the largest possible value of $\theta$ if $r(t)$ is to increase throughout the ball's flight? [Hint: Using your solution to (a) you can write down $r^2$ as $x^2 + y^2$ , and then find the condition that $r^2$ is always increasing.]

░░░░ ░░░░ $\bm{r_{cball}}^2(t)$, we ░░░░ 

$$
\begin{aligned}
\bm{r^2_{cball}}(t) &= (v_0\cos\theta \ t)^2 + \left(-\frac{1}{2}gt^2 + v_0\sin\theta \ t\right)^2 \\ \\[1pt]
\bm{\dot{r^2}_{cball}}(t) &= \frac{d}{dt}\left((v_0^2\cos^2\theta \ t^2) + (\frac{1}{4} g^2 t^4 - v_0 g \sin(\theta) t^3 + v_0^2 \sin^2(\theta) t^2)\right) \\ \\[1pt]
&= \frac{d}{dt} \left(v_0^2 \cos^2(\theta) t^2 + \frac{1}{4} g^2 t^4 - v_0 g \sin(\theta) t^3 + v_0^2 \sin^2(\theta) t^2\right) \\ \\[1pt]
&= \frac{d}{dt}\left(\frac{1}{4} g^2 t^4 - v_0 g \sin(\theta) t^3 + v_0^2 (\cos^2(\theta) + \sin^2(\theta)) t^2\right) \\ \\[1pt]
&= \frac{d}{dt}\left(\frac{1}{4} g^2 t^4 - v_0 g \sin(\theta) t^3 + v_0^2 t^2\right) \\ \\[1pt]
&= g^2 t^3 - 3 v_0 g \sin(\theta) t^2 + 2 v_0^2 t
\end{aligned}
$$
To find ░░░░ ░░░░ for $\bm{\dot{r}^2_{cball}}$ ░░░░ ░░░░ always increasing, ░░░░ ░░░░ ░░░░ ░░░░ to ░░░░ positive for ░░░░ $t > 0$░░░░ meaning, ░░░░ can ░░░░ ░░░░ real roots. The ░░░░ for ░░░░ real roots ░░░░ the discriminant ░░░░ ░░░░ than $0$($b^2 - 4ac \lt 0$). 

░░░░ have $b^2 = (3v_0g\sin\theta)^2$, $a = g^2$, and $c = 2v_0^2$, ░░░░ ░░░░ $\theta$░░░░

$$
\begin{aligned}
(3v_0g\sin\theta)^2 - 4g^2(2v_0^2) &< 0 \\ \\[0.5pt]
9v_0^2g^2\sin^2\theta - 8g^2v_0^2 &< 0 \\ \\[0.5pt]
v_0^2g^2(9\sin^2\theta - 8) &< 0 \\ \\[0.5pt]
\end{aligned}
$$
░░░░ ░░░░ ░░░░ by $v_0^2g^2$░░░░ and simplifying, we get ░░░░ ░░░░ value ░░░░ $\theta$,

$$
\begin{aligned}
9\sin^2\theta - 8 &< 0 \\ \\[0.5pt]
\sin^2\theta &< \frac{8}{9} \\ \\[0.5pt]
\sin\theta &< \sqrt{\dfrac{8}{9}} \\ \\[0.5pt]
\theta &< \arcsin{\sqrt{\dfrac{8}{9}}} \\ \\ \\[0.5pt]
\therefore \quad \theta <\approx 70.5^\circ \quad \blacksquare
\end{aligned}
$$

#### Ex-$41$: An astronaut in gravity-free space is twirling a mass m on the end of a string of length $R$ in a circle, with constant angular velocity $\omega$. Write down Newton's second law in polar coordinates and find the tension in the string.

░░░░ know that $\omega = \dot{\phi}$░░░░ ░░░░ find ░░░░ ░░░░ ░░░░ the string we ░░░░ $\vec{F}_r = m(\ddot{r} - r\omega^2)$░░░░

░░░░ $R$ ░░░░ ░░░░ $\ddot{r} = 0$░░░░ and ░░░░ $\omega$ is ░░░░ ░░░░ ░░░░ ░░░░ equation ░░░░ ░░░░ 

$$
\begin{aligned}
F_r &= m(\ddot{r} - r\omega^2) \\
&= m(0 - R\omega^2) \\
&= -mR\omega^2 \\ \\
\therefore \quad T = mR\omega^2 \quad \blacksquare 
\end{aligned}
$$

#### Ex-$42$: Prove that the transformations from rectangular to polar coordinates and vice versa are given by the four equations. Explain why the equation for $\theta$ is not quite complete and give a complete version.

░░░░ $x = r \cos\theta$ and $y = r \sin\theta$

Lets ░░░░ ░░░░ unit ░░░░ ░░░░ $r = 1$). Then, ░░░░ ░░░░ $\cos\theta = \dfrac{x}{r}$ and $\sin\theta = \dfrac{y}{r} \quad \blacksquare$

░░░░ $r = \sqrt{x^2 + y^2}$ ░░░░ $\theta = \tan^{-1}(\dfrac{y}{x})$ 

Substituting ░░░░ from a,

$$
\begin{aligned}
r &= \sqrt{x^2 + y^2} \\
&= \sqrt{(r\cos\theta)^2 + (r\sin\theta)^2} \\
&= \sqrt{r^2(\cos^2\theta + \sin^2\theta)} \\
&= \sqrt{r^2 \cdot 1} \\
&= r \quad \blacksquare
\end{aligned}
$$
Since $\arctan$ ░░░░ distinguish ░░░░ quadrants, ░░░░ ░░░░ to apply ░░░░ ░░░░

░░░░ $x > 0$, $\theta = arctan(y/x)$.
If $x < 0$░░░░ $\theta = \arctan(y/x) + \pi$.
If $x = 0$ and $y > 0$, $\theta = \pi / 2$░░░░
If $x = 0$ ░░░░ $y < 0$, $\theta$ ░░░░ $-\pi/2 \quad \blacksquare$

#### Ex-$43$:

##### (a) Prove that the unit vector r of two-dimensional polar coordinates is equal to $$\hat{\bm{r}} = \hat{\bm{x}}cos\phi + \hat{\bm{y}} sin\phi$$and find a corresponding expression for $\hat{\bm{\phi}}$.

░░░░ ░░░░ that a ░░░░ $(r, \ \phi)$ in polar-coordinates is ░░░░ to ░░░░ ░░░░ $(x, \ y)$ ░░░░ 

$$
x = r \cos \phi \\
y = r \sin \phi
$$
In ░░░░ if some position vector $\vec{r}$ is represented by $$\bm{r} = \bm{r}_x \bm{\hat{x}} + \bm{r}_y\bm{\hat{y}}$$
Then we can ░░░░ ░░░░ unit ░░░░ as 

$$
\begin{aligned}
\hat{\bm{r}} &= \dfrac{\bm{r}}{|\bm{r}|} \\ \\[0.5pt]
&= \dfrac{\bm{r}_x\bm{\hat{x}} + \bm{r}_y\bm{\hat{y}}}{\sqrt{\bm{r}_x^2 + \bm{r}_y^2}} \\ \\[0.5pt]
\end{aligned}
$$
░░░░ relations,

$$
\begin{aligned}
&= \dfrac{\bm{r}_x \cos\phi \bm{\hat{x}} + \bm{r}_y \cos\phi \bm{\hat{y}}}{r \sqrt{\cos^2\phi + \sin^2\phi}} \\ \\ \\[0.5pt]
\therefore \quad \cos\phi\bm{\hat{x}} + \sin\phi\bm{\hat{y}} \quad \blacksquare
\end{aligned}
$$
░░░░ $\hat{\bm{r}}$ $90^\circ$ counter-clockwise, ░░░░ get

$$\hat{\bm{\phi}} = -\sin\phi\hat{\bm{x}} + \cos\phi\bm{\hat{y}} \quad \blacksquare$$

##### (b) Assuming that $\phi$ depends on the time $t$, differentiate your answers in 1-43a to give an alternative proof of the results (1.42) and (1.46) for the time derivatives of $\hat{\bm{r}}$ and $\hat{\bm{\phi}}$.

We ░░░░ to ░░░░ $\bm{\dot{\hat{r}}}$ ░░░░ $\bm{\dot{\hat{\phi}}}$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ and treating $\phi$ as $\phi(t)$,

$$
\begin{aligned}
\frac{d\hat{\bm{r}}}{dt} &= \frac{d}{dt}(\cos\phi\bm{\hat{x}} + \sin\phi\bm{\hat{y}}) \\ \\[0.5pt]
&= (-\sin\phi \dot{\phi})\bm{\hat{x}} + (\cos\phi \dot{\phi})\bm{\hat{y}} \\ \\[0.5pt]
&= \dot{\phi}(-\sin\phi\bm{\hat{x}} + \cos\phi\bm{\hat{y}}) \\ \\
\therefore \quad \dot{\hat{r}} = \dot{\phi}\bm{\hat{\phi}} \quad \blacksquare
\end{aligned}
$$
Now, we ░░░░ ░░░░ $\bm{\dot{\hat{\phi}}}$,

$$
\begin{aligned}
\frac{d\hat{\bm{\phi}}}{dt} &= \frac{d}{dt}(-\sin\phi\bm{\hat{x}} + \cos\phi\bm{\hat{y}}) \\ \\[0.5pt]
&= (-\cos\phi \dot{\phi})\bm{\hat{x}} + (-\sin\phi \dot{\phi})\bm{\hat{y}} \\ \\[0.5pt]
&= -\dot{\phi}(\cos\phi\bm{\hat{x}} + \sin\phi\bm{\hat{y}}) \\ \\
\therefore \quad \dot{\hat{\phi}} = -\dot{\phi}\hat{r} \quad \blacksquare
\end{aligned}
$$

#### Ex-$45$: Prove that if $\bm{v}(t)$ is any vector that depends on time (for example the velocity of a moving particle) but which has constant magnitude, then $\bm{\dot{v}}(t)$ is orthogonal to $\bm{v}(t)$. Prove the converse that if $\bm{\dot{v}}(t)$ is orthogonal to $\bm{v}(t)$, then $|\bm{v}(t)|$ is constant. [Hint: Consider the derivative of $\bm{v}^2$.] This is a very handy result. It explains why, in two-dimensional polars, $\bm{\dot{\hat{r}}}$ has to be in the direction of $\bm{\hat{\phi}}$ and vice versa. It also shows that the speed of a charged particle in a magnetic field is constant, since the acceleration is perpendicular to the velocity.

If $|\bm{v}(t)|$ is constant, $|\bm{v^2}(t)|$ is ░░░░ as ░░░░ alongside all ░░░░ derivatives. We ░░░░ with its ░░░░

$$
\begin{aligned}
\dfrac{d}{dt}\bm{v^2}(t) &= \dfrac{d}{dt}(\bm{v}(t) \cdot \bm{v}(t)) \\ \\[0.5pt]
&= \dfrac{d\bm{v}(t)}{dt} \cdot \bm{v}(t) + \bm{v}(t) \cdot \dfrac{d\bm{v}(t)}{dt} \\ \\[0.5pt]
&= \bm{\dot{v}}(t) \cdot \bm{v}(t) + \bm{v}(t) \cdot \bm{\dot{v}}(t) \\ \\[0.5pt]
&= 2(\bm{\dot{v}}(t) \cdot \bm{v}(t)) 
\end{aligned} 
$$

░░░░ $\dot{v^2}(t) = 0$,

$$
\begin{aligned}
2(\bm{\dot{v}}(t) \cdot \bm{v}(t)) &= 0 \\ \\[0.5pt]
\bm{\dot{v}}(t) \cdot \bm{v}(t) &= 0 \\ \\
\end{aligned}
$$

░░░░ ░░░░ $\bm{\dot{v}}(t) \cdot \bm{v}(t) = 0$, $\bm{\dot{v}}(t)$ is orthogonal to $\bm{v}(t)$░░░░ $\blacksquare$

Taking ░░░░ look ░░░░ our ░░░░ ░░░░ $\dot{v^2}(t)$, we can ░░░░ ░░░░ ░░░░ gives ░░░░ $\dot{v^2}(t) = 0 \ \implies \dot{v}(t) = 0 \ \implies |\bm{v}(t)| = constant \quad \blacksquare$

#### Ex-$47$: Let the position of a point $P$ in three dimensions be given by the vector $\bm{r} = (x, \ y, \ z)$ in Cartesian coordinates. The same position can be specified by cylindrical polar coordinates, $(\rho, \ \phi,\ z)$ which are defined as follows: Let $P'$ denote the projection of $P$ onto the xy plane; that is, $P'$ has Cartesian coordinates $(x, y, 0)$. Then $\rho$ and $\phi$ are defined as the two-dimensional polar coordinates of $P'$ in the $xy$ plane, while $z$ is the third Cartesian coordinate, unchanged. 

##### (a) Make a sketch to illustrate the three cylindrical coordinates. Give expressions for $\rho$, $\phi$, $z$ in terms of the Cartesian coordinates $x$, $y$, $z$. Explain in words what $\rho$ is ("$\rho$ is the distance of $P$ from $?$"). There are many variants in notation. For instance, some people use $r$ instead of $\rho$. Explain why this use of $\bm{r}$ is unfortunate. 

░░░░ traditional right-handed coordinates, we ░░░░ ░░░░ $\rho$ ░░░░$z$ remains untouched) 

$$\rho = \sqrt{x^2 + y^2} \quad \blacksquare$$

░░░░ $\phi$░░░░ we need to consider ░░░░ ░░░░ as well,

$$\phi = \arctan(y / x) \quad \blacksquare$$

##### (b) Describe the three unit vectors $\hat{\bm{\rho}}, \ \hat{\bm{\phi}}, \ \hat{\bm{z}}$ and write the expansion of the position vector $\bm{r}$ in terms of these unit vectors. 

$\hat{\bm{\rho}}$ points ░░░░ ░░░░ $z$ ░░░░ ░░░░ ░░░░ ░░░░ $P$░░░░ ░░░░ ░░░░ ░░░░ $xy$░░░░ $\hat{\bm{\phi}}$ ░░░░ ░░░░ unit vector tangential to the ░░░░ $xy$-slice along the ░░░░ of motion. $\hat{\bm{z}}$ ░░░░ ░░░░ Then,

$$\bm{r} = \rho \hat{\bm{\rho}} + z \hat{\bm{z}} \quad \blacksquare$$

##### (c) Differentiate your last answer twice to find the cylindrical components of the acceleration $\bm{a} = \ddot{\bm{r}}$ of the particle. To do this, you will need to know the time derivatives of $\hat{\bm{\rho}}$ and $\hat{\bm{\phi}}$.

We ░░░░ to differentiate $\bm{r}$ ░░░░

$$
\begin{aligned}
\dfrac{d^2\bm{r}}{dt^2} = \ddot{\bm{r}} &= \dfrac{d^2}{dt^2}(\rho \hat{\bm{\rho}} + z \hat{\bm{z}}) \\ \\[0.5pt]
\end{aligned}
$$

░░░░ start with $\bm{r}$,

$$
\begin{aligned}
\dot{\bm{r}} &= \dfrac{d}{dt}(\rho \hat{\bm{\rho}} + z \hat{\bm{z}}) \\ \\[0.5pt]
&= (\dot{\rho}\hat{\bm{\rho}} + \rho \dot{\hat{\bm{\rho}}} + \dot{z}\hat{\bm{z}} + z \dot{\hat{\bm{z}}}) \\ \\[0.5pt]
\end{aligned}
$$

We need $\dot{\hat{\bm{\rho}}}$ and $\dot{\hat{\bm{\phi}}}$, ░░░░ ░░░░ $\dot{\hat{\bm{\rho}}}$░░░░

$$
\begin{aligned}
\dot{\hat{\bm{\rho}}} &= \frac{d}{dt} (\cos \phi \, \hat{\bm{x}} + \sin \phi \, \hat{\bm{y}}) \\ \\[0.5pt]
&= \frac{d (\cos \phi)}{dt} \, \hat{\bm{x}} + \frac{d (\sin \phi)}{dt} \, \hat{\bm{y}} \\ \\[0.5pt]
&= -\sin \phi \, \dot{\phi} \, \hat{\bm{x}} + \cos \phi \, \dot{\phi} \, \hat{\bm{y}} \\ \\[0.5pt]
&= \dot{\phi} \, (-\sin \phi \, \hat{\bm{x}} + \cos \phi \, \hat{\bm{y}}) \\ \\[0.5pt]
&= \dot{\phi} \, \hat{\bm{\phi}}
\end{aligned}
$$

░░░░ 

$$\sin\phi \bm{\hat{x}} + \cos \phi \bm{\hat{y}} = \hat{\bm{\phi}} \quad \implies \quad \dot{\hat{\bm{\rho}}} = \dot{\phi} \bm{\hat{\phi}}$$

now ░░░░ ░░░░ ░░░░ $\dot{\hat{\bm{\phi}}}$░░░░

$$
\begin{aligned}
\dot{\hat{\bm{\phi}}} &= \frac{d}{dt} (-\sin \phi \, \hat{\bm{x}} + \cos \phi \, \hat{\bm{y}}) \\ \\[0.5pt]
&= \frac{d (-\sin \phi)}{dt} \, \hat{\bm{x}} + \frac{d (\cos \phi)}{dt} \, \hat{\bm{y}} \\ \\[0.5pt]
&= -\cos \phi \, \dot{\phi} \, \hat{\bm{x}} - \sin \phi \, \dot{\phi} \, \hat{\bm{y}} \\ \\[0.5pt]
&= \dot{\phi} \, (-\cos \phi \, \hat{\bm{x}} - \sin \phi \, \hat{\bm{y}}) \\ \\[0.5pt]
&= \dot{\phi} \, (-\cos \phi \, \hat{\bm{x}} - \sin \phi \, \hat{\bm{y}}) \\ \\[0.5pt]
&= -\dot{\phi} \, (\cos \phi \, \hat{\bm{x}} + \sin \phi \, \hat{\bm{y}}) \\ \\[0.5pt]
&= -\dot{\phi} \, \hat{\bm{\rho}}
\end{aligned}
$$
░░░░ getting ░░░░ to ░░░░ and ░░░░

$$
\begin{aligned}
\ddot{\bm{r}} &= \frac{d}{dt} (\dot{\rho} \hat{\rho} + \rho \dot{\phi} \hat{\phi} + \dot{z} \hat{z}) \\ \\[0.5pt]
&= \frac{d}{dt} (\dot{\rho} \hat{\rho}) + \frac{d}{dt} (\rho \dot{\phi} \hat{\phi}) + \frac{d}{dt} (\dot{z} \hat{z}) \\ \\[0.5pt]
&= (\ddot{\rho} \hat{\rho} + \dot{\rho} \dot{\phi} \hat{\phi}) + (\dot{\rho} \dot{\phi} \hat{\phi} + \rho \ddot{\phi} \hat{\phi} - \rho \dot{\phi}^2 \hat{\rho}) + \ddot{z} \hat{z} \\ \\
\therefore \quad \ddot{\bm{r}} = (\ddot{\rho} - \rho \dot{\phi}^2) \hat{\bm{\rho}} + (2 \dot{\rho} \dot{\phi} + \rho \ddot{\phi}) \hat{\bm{\phi}} + \ddot{z} \hat{\bm{z}} \quad \blacksquare
\end{aligned}
$$

#### Ex-$49$: Imagine two concentric cylinders, centered on the vertical $z$ axis, with radii $R ± \epsilon$, where $\epsilon$ is very small. A small frictionless puck of thickness $2\epsilon$ is inserted between the two cylinders, so that it can be considered a point mass that can move freely at a fixed distance from the vertical axis. If we use cylindrical polar coordinates $(\rho, \ \phi, \ z)$ for its position (1.47), then $\rho$ is fixed at $\rho = R$. while $\phi$ and $z$ can vary at will. Write down and solve Newton's second law for the general motion of the puck, including the effects of gravity. Describe the puck's motion.

░░░░ conditions: $\rho$ ░░░░ $R$ ░░░░ $\dot{\rho}$ = $\ddot{\rho}$ = $0$░░░░

The ░░░░ ░░░░ force is ░░░░ $F = -mg\hat{\bm{z}}$

Using ░░░░ cylindrical coordinate acceleration from ░░░░ ░░░░ ░░░░
$$\ddot{\mathbf{r}} = (\ddot{\rho} - \rho \dot{\phi}^2) \hat{\boldsymbol{\rho}} + (2 \dot{\rho} \dot{\phi} + \rho \ddot{\phi}) \hat{\boldsymbol{\phi}} + \ddot{z} \hat{\mathbf{z}}$$
░░░░ ░░░░ our ░░░░ conditions:
$$\ddot{\bm{r}} = -R \dot{\phi}^2 \hat{\bm{\rho}} + R \ddot{\phi} \hat{\bm{\phi}} + \ddot{z} \hat{\bm{z}}$$