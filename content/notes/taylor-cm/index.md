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

░░░░ three laws of ░░░░ ░░░░ formulated ░░░░ terms of ░░░░ crucial underlying ░░░░ the ░░░░ ░░░░ _space_, _time_░░░░ _mass_, and _force_. ░░░░ begin ░░░░ reviewing ░░░░ and time.

##### Space 

░░░░ ░░░░ $P$ of the ░░░░ ░░░░ we live ░░░░ ░░░░ ░░░░ labeled ░░░░ a position ░░░░ $\bf{r}$ which ░░░░ ░░░░ ░░░░ and ░░░░ of $P$ ░░░░ ░░░░ chosen origin $O$. ░░░░ most ░░░░ ░░░░ ░░░░ identify a ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ are in ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ basis. We ░░░░ do this ░░░░ ░░░░ unit ░░░░ ░░░░ ░░░░ of these coordinate ░░░░
$$\bf{r} = x\bf{\hat{x}} + y\bf{\hat{y}} + z\bf{\hat{z}} \tag{1.1}$$
░░░░ ░░░░ ░░░░ ░░░░ Cartesian ░░░░ ░░░░ ░░░░ $\bf{a} = (1, \ 1, \ 0)$ can be represented as

$$(1 \cdot (1, 0, 0)) + (1 \cdot (0, 1, 0)) + (0 \cdot (0, 0, 1)) = (1, 1, 0) = a$$

##### Differentiation of Vectors

Since ░░░░ ░░░░ ░░░░ physics ░░░░ ░░░░ ░░░░ ░░░░ imply _derivatives_ ░░░░ ░░░░ vectors. ░░░░ simple case being ░░░░ time derivative of ░░░░ vector ░░░░ depends ░░░░ time, ░░░░ e.g. ░░░░ ░░░░ $\bf{v}(t)$ ░░░░ a ░░░░ is the time ░░░░ of the particle's position $\bf{r}(t)$; that is, $\bf{v} = d\bf{r} / dt = \dot{r}$░░░░ Similarly, ░░░░ would then be ░░░░ time ░░░░ ░░░░ ░░░░ ░░░░ $\bf{a} = d\bf{v}/dt = \ddot{r}$░░░░

A ░░░░ ░░░░ is closely analogous ░░░░ that of ░░░░ scalar. Recall ░░░░ if $x(t)$ is a ░░░░ ░░░░ of $t$, then ░░░░ derivative is ░░░░ ░░░░
$$\dfrac{dx}{dt} = \dot{x} = \lim_{\Delta t \rightarrow 0} \dfrac{\Delta x}{\Delta t} \tag{1.2}$$
where $\Delta x = x(t + \Delta t) - x(t)$ ░░░░ ░░░░ change in $x$ ░░░░ the time ░░░░ ░░░░ $t$ ░░░░ $t + \Delta t$. ░░░░ in the ░░░░ way, if $\bf{r}(t)$ ░░░░ any ░░░░ that depends on $t$░░░░ we define ░░░░ ░░░░ as $$\dfrac{d\bf{r}}{dt} = \dot{\bf{r}} = \lim_{\Delta t \rightarrow 0} \dfrac{\Delta \bf{r}}{\Delta t} \tag{1.3}$$
where $$\Delta\bf{r} = \bf{r}(t + \Delta t) - \bf{r}(t) \tag{1.4}$$
░░░░ the ░░░░ change ░░░░ $\bf{r}(t)$░░░░ ░░░░ ░░░░ ░░░░ concerned about the ░░░░ of ░░░░ ░░░░ ░░░░ the moment, ░░░░ ░░░░ presume ░░░░ all vectors ░░░░ ░░░░ ░░░░ differentiable, and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ for ░░░░ along ░░░░ ░░░░ the standard properties of ░░░░ (i.e. differentiation ░░░░ and properties).

░░░░ ░░░░ if $\bf{r}(t)$ and $\bf{s}(t)$ are two ░░░░ ░░░░ functions that depend on $t$, ░░░░ ░░░░ ░░░░ ░░░░ their sum is,

$$
\dfrac{d}{dt}(\bf{r} + \bf{s}) = \dot{\bf{r}} + \dot{\bf{s}} \tag{1.5}
$$
░░░░ ░░░░ $\bf{r}(t)$ is a ░░░░ valued ░░░░ ░░░░ $f(t)$ ░░░░ a ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ $f(t)\bf{r}(t)$ is given ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ product ░░░░

$$
\dfrac{d}{dt}(f\bf{r}) = f\dot{\bf{r}} + \dot{f}\bf{r} \tag{1.6}
$$
░░░░ ░░░░ result worth ░░░░ concerns the ░░░░ of ░░░░ derivative ░░░░ the vector. ░░░░ $\bf{r}$░░░░ with components $x$, $y$░░░░ $z$ ░░░░ the position ░░░░ a ░░░░ ░░░░ and ░░░░ want ░░░░ ░░░░ its ░░░░ $\bf{v} = \dot{\bf{r}}$░░░░ When ░░░░ ░░░░ ░░░░ sum,
$$\bf{r} = x\bf{\hat{x}} + y\bf{\hat{y}} + z\bf{\hat{z}} \tag{1.7}$$░░░░ ░░░░ ░░░░ gives us the sum of the ░░░░ separate derivatives, and ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ of these contain ░░░░ ░░░░ ░░░░ $6$ terms ░░░░ ░░░░ However the ░░░░ vectors $\hat{\bf{x}}$░░░░ $\hat{\bf{y}}$, $\hat{\bf{z}}$ do ░░░░ depend on ░░░░ change with) ░░░░ ░░░░ their ░░░░ are ░░░░ ░░░░ we're left with only ░░░░ ░░░░

$$
\dot{\bf{r}} = \dot{x}\hat{\bf{x}} + \dot{y}\hat{\bf{y}} + \dot{z}\hat{\bf{z}} \tag{1.8}
$$
░░░░ this with ░░░░ standard expansion,

$$
\bf{v} = v_x\hat{\bf{x}} + v_y\hat{\bf{y}} + v_z\hat{\bf{z}} \tag{1.9}
$$
░░░░ ░░░░ ░░░░

$$
v_x = \dot{x}, \quad v_y = \dot{y}, \quad v_z = \dot{z} \tag{1.10}
$$
In words, the Cartesian ░░░░ ░░░░ $\bf{v}$ are ░░░░ ░░░░ ░░░░ of the ░░░░ ░░░░ ░░░░ $\bf{r}$. In many other ░░░░ systems, the ░░░░ unit ░░░░ are ░░░░ ░░░░ and the ░░░░ ░░░░ to 1.10 ░░░░ ░░░░ less transparent.

##### Time 

░░░░ classical view is ░░░░ time is ░░░░ single universal ░░░░ $t$ on ░░░░ all ░░░░ agree. That ░░░░ if ░░░░ ░░░░ ░░░░ ░░░░ with accurate ░░░░ ░░░░ properly synchronized, ░░░░ they will ░░░░ ░░░░ to ░░░░ ░░░░ ░░░░ which any given ░░░░ occurred. ░░░░ know ░░░░ ░░░░ is not ░░░░ ░░░░ to the ░░░░ ░░░░ ░░░░ two observers in relative ░░░░ ░░░░ ░░░░ ░░░░ on ░░░░ times. ░░░░ in ░░░░ domain of classical ░░░░ with all ░░░░ much ░░░░ than $c$, ░░░░ can adopt ░░░░ classical ░░░░ of a ░░░░ ░░░░ time.

##### Reference Frames

Almost every ░░░░ ░░░░ classical ░░░░ ░░░░ a ░░░░ (explicit ░░░░ implicit) ░░░░ ░░░░ ░░░░ frame, ░░░░ ░░░░ ░░░░ ░░░░ of ░░░░ origin ░░░░ axes to label ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ origin ░░░░ ░░░░ ░░░░ ░░░░ difference between two frames may be ░░░░ minor. For ░░░░ ░░░░ may differ ░░░░ ░░░░ their choice of ░░░░ ░░░░ ░░░░ time — what one ░░░░ ░░░░ $t = 0$ the ░░░░ ░░░░ ░░░░ $t' = t_0 \neq 0$.

Or ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ origins ░░░░ ░░░░ ░░░░ ░░░░ but ░░░░ different ░░░░ ░░░░ the ░░░░ spatial axes. ░░░░ carefully choosing ░░░░ ░░░░ ░░░░ ░░░░ advantage of these different possibilities, you can ░░░░ simplify your ░░░░ ░░░░ example, ░░░░ ░░░░ involving blocks sliding ░░░░ inclines, it often ░░░░ to ░░░░ one axis ░░░░ ░░░░ the ░░░░ ░░░░ more important difference ░░░░ ░░░░ ░░░░ frames are in ░░░░ ░░░░ that is, ░░░░ one origin is moving relative to ░░░░ ░░░░ We ░░░░ ░░░░ that not all such frames are physically ░░░░ In ░░░░ special frames, called ░░░░ frames, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ in their ░░░░ simple ░░░░ ░░░░ is because one ░░░░ ░░░░ ░░░░ laws is Newton's first law, the law ░░░░ ░░░░ that these frames ░░░░ called inertial.) ░░░░ a second frame is ░░░░ or ░░░░ relative to an ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ frame ░░░░ non-inertial, ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ particular, ░░░░ laws — do ░░░░ hold ░░░░ ░░░░ standard ░░░░ ░░░░ this ░░░░ frame. ░░░░ ░░░░ ░░░░ that ░░░░ ░░░░ ░░░░ ░░░░ and ░░░░ frames is central to ░░░░ discussion ░░░░ ░░░░ mechanics. It plays an even more ░░░░ role ░░░░ ░░░░ ░░░░ of ░░░░

#### Mass and Force

##### Mass

The mass of an object characterizes the object's ░░░░ resistance to being ░░░░ ░░░░ big boulder is hard to accelerate, ░░░░ its mass is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ easy to accelerate, and ░░░░ ░░░░ is ░░░░ ░░░░ make these ░░░░ ░░░░ quantitative we have to ░░░░ ░░░░ ░░░░ ░░░░ mass ░░░░ ░░░░ give ░░░░ prescription ░░░░ ░░░░ the mass ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ chosen ░░░░ The ░░░░ ░░░░ unit of ░░░░ is
░░░░ kilogram ░░░░ is defined arbitrarily ░░░░ be ░░░░ mass of a chunk of ░░░░ stored ░░░░ the ░░░░ Bureau of Weights and Measures ░░░░ ░░░░ ░░░░ measure the mass of ░░░░ ░░░░ object, we ░░░░ a means ░░░░ ░░░░ ░░░░ ░░░░ principle, ░░░░ can ░░░░ ░░░░ with an ░░░░ balance. ░░░░ ░░░░ objects ░░░░ ░░░░ compared are fastened ░░░░ ░░░░ opposite ░░░░ ░░░░ ░░░░ light, rigid ░░░░ ░░░░ ░░░░ ░░░░ given ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ equal, ░░░░ will accelerate equally and ░░░░ ░░░░ ░░░░ ░░░░ off without ░░░░ ░░░░ ░░░░ masses are ░░░░ the ░░░░ ░░░░ one ░░░░ ░░░░ less, ░░░░ ░░░░ ░░░░ ░░░░ rotate ░░░░ ░░░░ moves ░░░░ The beauty ░░░░ the ░░░░ ░░░░ is ░░░░ it gives us ░░░░ ░░░░ of ░░░░ comparison ░░░░ is ░░░░ directly on the notion of mass ░░░░ ░░░░ to ░░░░ ░░░░ In ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ be ░░░░ ░░░░ to ░░░░ ░░░░ it ░░░░ fortunate that there ░░░░ much easier ░░░░ to compare ░░░░ ░░░░ which ░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ objects. Since ░░░░ ░░░░ ░░░░ the ░░░░ ░░░░ if ░░░░ only ░░░░ ░░░░ have the same weight (when ░░░░ at the ░░░░ ░░░░ ░░░░ ░░░░ simple, ░░░░ way to check whether ░░░░ masses are ░░░░ ░░░░ ░░░░ to ░░░░ them ░░░░ ░░░░ if ░░░░ ░░░░ ░░░░ equal.

Armed with methods ░░░░ comparing masses, we can easily set ░░░░ ░░░░ scheme ░░░░ measure ░░░░ masses. First, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of standard kilograms, each ░░░░ ░░░░ ░░░░ ░░░░ original $1 \ \mathrm{kg}$ ░░░░ using ░░░░ ░░░░ inertial ░░░░ gravitational balance. ░░░░ we ░░░░ ░░░░ multiples ░░░░ fractions ░░░░ the kilogram, again ░░░░ ░░░░ with our ░░░░ (We ░░░░ a $2 \ \mathrm{kg}$ mass ░░░░ one ░░░░ ░░░░ ░░░░ balance ░░░░ ░░░░ $1 \ \mathrm{kg}$ masses placed together on ░░░░ other ░░░░ ░░░░ ░░░░ two half-kg masses by verifying that their ░░░░ are equal and ░░░░ ░░░░ they balance a $1 \ \mathrm{kg}$ ░░░░ and so ░░░░ ░░░░ ░░░░ ░░░░ measure ░░░░ unknown mass by ░░░░ it on one ░░░░ of ░░░░ balance and ░░░░ known ░░░░ ░░░░ ░░░░ other end until ░░░░ ░░░░ ░░░░ any ░░░░ precision.

##### Force

The ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ push ░░░░ ░░░░ is a ░░░░ ░░░░ starting ░░░░ The two main tasks are to ░░░░ ░░░░ ░░░░ ░░░░ forces and ░░░░ ░░░░ ░░░░ ░░░░ can adopt the Newton (abbreviated $\bf{N}$) ░░░░ as the ░░░░ of any single force ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ an acceleration ░░░░ $1 \ \mathrm{m / s^2}$░░░░ 

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ as ░░░░ that ░░░░ the ░░░░ acceleration, ░░░░ is, the direction ░░░░ which the ░░░░ sets off ░░░░ ░░░░ ░░░░ ░░░░ upon it.

Now we ░░░░ ░░░░ Newton's ░░░░ ░░░░ of ░░░░

#### Newton's First and Second Laws; Inertial Frames

░░░░ ░░░░ ░░░░ ░░░░ discuss Newton's laws as they apply to point ░░░░ A point ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ fiction, ░░░░ ░░░░ ░░░░ ░░░░ but ░░░░ ░░░░ that ░░░░ ░░░░ ░░░░ space ░░░░ ░░░░ no ░░░░ ░░░░ of ░░░░ ░░░░ can have ░░░░ kinetic energy but ░░░░ energy ░░░░ rotation ░░░░ of ░░░░ vibrations ░░░░ deformations. ░░░░ the ░░░░ of ░░░░ are ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ for ░░░░ ░░░░ ░░░░ is the reason why ░░░░ start with ░░░░ ░░░░ 

_Newton's First Law_: **In the absence of forces, a particle moves with constant velocity $\bf{v}$.**

_Newton's Second Law_░░░░ **For any particle of mass $m$, the net force $\bf{F}$ on the particle is always equal to the mass $m$ times the particle's acceleration.**
$$\bf{F} = m\bf{a} \tag{1.11}$$
░░░░ ░░░░ is the second ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ we can ░░░░ this as a second ░░░░ differential ░░░░
$$\bf{F} = m\bf{a} = m\ddot{\bf{r}} \tag{1.12}$$
The ░░░░ ░░░░ can be ░░░░ in terms of ░░░░ particle's _momentum_, ░░░░ ░░░░ $$\bf{p} = m\bf{v} \tag{1.13}$$
Since ░░░░ ░░░░ mechanics, ░░░░ take ░░░░ ░░░░ ░░░░ the mass $m$ ░░░░ ░░░░ so ░░░░

$$
\dot{\bf{p}} = m\bf{\dot{v}} = m\bf{a}
$$
$$\therefore \quad \bf{F} = \bf{\dot{p}} \tag{1.14}$$

##### Differential Equations

░░░░ ░░░░ in ░░░░ ░░░░ $m\bf{\ddot{r}} = \bf{F}$░░░░ Newton's ░░░░ law ░░░░ a ░░░░ ░░░░ for ░░░░ particle's position $\bf{r}(t)$░░░░ That is, it is ░░░░ ░░░░ for the ░░░░ ░░░░ $\bf{r}(t)$ that involves ░░░░ ░░░░ ░░░░ ░░░░ function. ░░░░ all the laws of ░░░░ are, or ░░░░ be cast ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ huge proportion of a ░░░░ ░░░░ ░░░░ spent ░░░░ these ░░░░ In particular, ░░░░ ░░░░ the problems ░░░░ this book involve differential ░░░░ — ░░░░ Newton's second ░░░░ or ░░░░ counterparts ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ mechanics. ░░░░ ░░░░ ░░░░ in their ░░░░ Some ░░░░ ░░░░ ░░░░ ░░░░ solve ░░░░ one scarcely ░░░░ them. ░░░░ ░░░░ ░░░░ ░░░░ second ░░░░ ░░░░ a ░░░░ confined ░░░░ ░░░░ ░░░░ ░░░░ $x$ axis and ░░░░ to a ░░░░ force $\bf{F}_0$,

$$\ddot{x}(t) = \dfrac{\bf{F}_0}{m}$$
░░░░ is a ░░░░ ░░░░ differential equation for $x(t)$ as a function of $t$░░░░ ░░░░ solve it, we ░░░░ ░░░░ to integrate ░░░░

$$
\begin{aligned}
\int{\int{\ddot{x}(t)} \ dt} \ dt &= \int{\int{\dfrac{\bf{F}_0}{m}} \ dt} \ dt \\ \\[0.5pt]
\int{\dot{x}(t)} \ dt &= \int{\left(v_0 + \dfrac{\bf{F}_0}{m}t\right)} \ dt \\
\end{aligned}
$$
░░░░ first ░░░░ ░░░░ ░░░░ the velocity ░░░░ the constant ░░░░ ░░░░ is the ░░░░ initial ░░░░ and ░░░░ second integration gives the ░░░░

$$x(t) = x_0 + v_0t + \dfrac{\bf{F}_0}{2m}t^2$$

where ░░░░ ░░░░ constant of integration ░░░░ the particle's ░░░░ position.

##### Inertial Frames

On the ░░░░ of ░░░░ ░░░░ second law ░░░░ ░░░░ ░░░░ If there ░░░░ no forces on an object, ░░░░ $\bf{F} = 0$ and ░░░░ ░░░░ ░░░░ (1.12) implies that $\bf{a} = 0$░░░░ ░░░░ ░░░░ the first ░░░░ There is, ░░░░ an important ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ important role to ░░░░ Newton's ░░░░ cannot ░░░░ true in ░░░░ conceivable ░░░░ ░░░░ To see ░░░░ ░░░░ ░░░░ the first ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░ — ░░░░ call it $\mathscr{S}$ ░░░░ in ░░░░ the first law ░░░░ true. For ░░░░ if ░░░░ ░░░░ $\mathscr{S}$ has its origin ░░░░ ░░░░ fixed relative to the earth's surface, ░░░░ to ░░░░ excellent approximation, ░░░░ first law ░░░░ law ░░░░ ░░░░ ░░░░ ░░░░ respect to the ░░░░ $\mathscr{S}$: A friction-less puck placed ░░░░ ░░░░ ░░░░ ░░░░ surface is subject ░░░░ zero ░░░░ ░░░░ in accordance ░░░░ ░░░░ first law, ░░░░ ░░░░ with constant ░░░░ Because the ░░░░ of ░░░░ holds, ░░░░ call $\mathscr{S}$ an ░░░░ ░░░░ If ░░░░ consider ░░░░ ░░░░ ░░░░ $\mathscr{S'}$ which ░░░░ ░░░░ ░░░░ to $\mathscr{S}$ ░░░░ constant ░░░░ ░░░░ is not ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ will ░░░░ be ░░░░ ░░░░ move with ░░░░ velocity relative to $\mathscr{S'}$░░░░ ░░░░ is, the ░░░░ $\mathscr{S'}$ ░░░░ ░░░░ inertial.

░░░░ however, ░░░░ ░░░░ ░░░░ third frame $\mathscr{S"}$ that ░░░░ accelerating relative ░░░░ $\mathscr{S}$░░░░ ░░░░ as viewed ░░░░ $\mathscr{S"}$, ░░░░ puck ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ (in the ░░░░ direction). ░░░░ ░░░░ the accelerating ░░░░ $\mathscr{S"}$ ░░░░ law ░░░░ inertia ░░░░ not ░░░░ and ░░░░ ░░░░ ░░░░ $\mathscr{S"}$ ░░░░ non-inertial. I should emphasize that there is ░░░░ ░░░░ about ░░░░ ░░░░ Indeed ░░░░ is ░░░░ ░░░░ ░░░░ experience. ░░░░ frame $\mathscr{S'}$ could ░░░░ ░░░░ frame attached to a ░░░░ ░░░░ traveling ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ straight ░░░░ ░░░░ the friction-less puck, an ░░░░ cube placed on the ░░░░ ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ seen ░░░░ ░░░░ ░░░░ ░░░░ $\mathscr{S'}$), the ░░░░ cube is at ░░░░ ░░░░ ░░░░ ░░░░ rest, in ░░░░ with the ░░░░ ░░░░ As seen ░░░░ ░░░░ ground ░░░░ $\mathscr{S}$), the ice ░░░░ ░░░░ moving with the ░░░░ velocity ░░░░ the ░░░░ and ░░░░ ░░░░ ░░░░ so, again in obedience ░░░░ ░░░░ ░░░░ law.

But ░░░░ consider ░░░░ the same ░░░░ ░░░░ a second ░░░░ ░░░░ $\mathscr{S"}$░░░░ ░░░░ ░░░░ accelerating ░░░░ As ░░░░ train ░░░░ ░░░░ ░░░░ ░░░░ cube ░░░░ left behind, and, ░░░░ to $\mathscr{S"}$, ░░░░ ice ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ subject ░░░░ ░░░░ net ░░░░ Clearly ░░░░ frame $\mathscr{S"}$ is ░░░░ and neither of ░░░░ ░░░░ two laws can ░░░░ ░░░░ $\mathscr{S"}$. A ░░░░ conclusion ░░░░ hold if ░░░░ frame $\mathscr{S"}$ ░░░░ been attached ░░░░ a rotating merry-go-round. ░░░░ friction-less ░░░░ subject to zero ░░░░ force, ░░░░ ░░░░ ░░░░ in a ░░░░ ░░░░ ░░░░ seen in $\mathscr{S"}$░░░░ and Newton's ░░░░ ░░░░ not ░░░░

░░░░ ░░░░ ░░░░ laws hold only in the ░░░░ ░░░░ (non-accelerating ░░░░ ░░░░ ░░░░ frames. Most philosophers ░░░░ science take the ░░░░ that the ░░░░ ░░░░ ░░░░ be used ░░░░ identify these inertial frames ░░░░ ░░░░ reference frame $\mathscr{S}$ is inertial ░░░░ objects ░░░░ are ░░░░ ░░░░ to ░░░░ forces are seen ░░░░ move with constant velocity relative ░░░░ $\mathscr{S}$░░░░ ░░░░ identified the inertial ░░░░ by means ░░░░ ░░░░ first law, ░░░░ ░░░░ then ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ that the ░░░░ law holds in these same ░░░░ frames.

### The Third Law and Conservation of Momentum

░░░░ first two ░░░░ concern the response ░░░░ a ░░░░ object ░░░░ ░░░░ ░░░░ The ░░░░ ░░░░ addresses a ░░░░ different ░░░░ ░░░░ force ░░░░ an ░░░░ ░░░░ involves a second ░░░░ — the ░░░░ ░░░░ ░░░░ ░░░░ force. ░░░░ nail is hit ░░░░ the hammer, the cart is pulled by the ░░░░ and ░░░░ on. ░░░░ ░░░░ much is no ░░░░ ░░░░ matter ░░░░ common ░░░░ ░░░░ ░░░░ law goes considerably ░░░░ our ░░░░ experience. Newton realized ░░░░ if an ░░░░ $1$ ░░░░ a force ░░░░ another ░░░░ $2$, ░░░░ ░░░░ $2$ ░░░░ ░░░░ ░░░░ force (the "reaction" force) back on object $1$░░░░ This seems quite natural: If ░░░░ ░░░░ ░░░░ against ░░░░ wall, it ░░░░ ░░░░ ░░░░ to ░░░░ ░░░░ that the wall is ░░░░ a ░░░░ ░░░░ on you, ░░░░ which ░░░░ ░░░░ undoubtedly fall ░░░░ ░░░░ aspect ░░░░ the ░░░░ law ░░░░ ░░░░ ░░░░ beyond our normal perceptions ░░░░ ░░░░

░░░░ ░░░░ the third law, ░░░░ ░░░░ force of ░░░░ $2$ ░░░░ object $1$ ░░░░ always ░░░░ and ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ of $1$ on $2$░░░░ ░░░░ ░░░░ introduce ░░░░ ░░░░ $\bf{F}_{21}$ ░░░░ denote ░░░░ force ░░░░ ░░░░ ░░░░ $2$ ░░░░ ░░░░ $1$░░░░ Newton's third ░░░░ can ░░░░ ░░░░ ░░░░ compactly:

_Newton's Third Law_░░░░ **If object $1$ exerts a force $\bf{F}_{21}$ on object $2$, then object $2$ always exerts a reaction force $\bf{F}_{12}$ on object $1$:** $$\bf{F}_{12} = - \bf{F}_{21} \tag{1.15}$$

### Proof for the Conservation of Momentum

░░░░ need ░░░░ show ░░░░ ░░░░ ░░░░ ░░░░ ($\bf{F}$░░░░ ░░░░ ░░░░ ░░░░ object ░░░░ proportional to the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ object's momentum ░░░░ respect ░░░░ time ░░░░$\bf{\dot{p}}$░░░░

░░░░ ░░░░ ░░░░ $\bf{F} = m\bf{a}$, ░░░░ $\bf{p} = m \bf{v}$.

Differentiating both ░░░░ of $\bf{p} = m \bf{v}$ ░░░░ respect ░░░░ $t$░░░░ presuming constant mass($m$░░░░

$$
\begin{aligned}
\frac{d\bf{p}}{dt} = \dot{\bf{p}} &= \frac{d}{dt}(m\bf{v})\\
&= m \ \frac{dv}{dt} \\
&= m \bf{a}\\\\
\therefore \quad \bf{F} = \dot{\bf{p}}
\end{aligned}
$$
With this lemma, we ░░░░ ░░░░ ░░░░ the main ░░░░

We ░░░░ two point ░░░░ $p_1$ and $p_2$░░░░ exerting ░░░░ force on each ░░░░ $\bf{F_{21}}$ and $\bf{F_{12}}$ ░░░░ 

We approximate ░░░░ and ░░░░ external forces on ░░░░ ░░░░ particles as $\bf{F^{ext}_{1}}$ and $\bf{F^{ext}_{2}}$. We have,

$$
\begin{aligned}
\bf{F}_{p_1} = \bf{F}_{12} + \bf{F}^{ext}_1 \\\\
\bf{F}_{p_2} = \bf{F}_{21} + \bf{F}^{ext}_2
\end{aligned}
$$

By $\bf{F} = \dot{\bf{p}}$,

$$
\begin{aligned}
\bf{F}_{p_1} = \bf{\dot{p}}_1\\\\
\bf{F}_{p_2} = \bf{\dot{p}}_2
\end{aligned}
$$
The ░░░░ ░░░░ ░░░░ our ░░░░ system is,

$$
\bf{P}_{t} = \bf{p}_1 + \bf{p}_2 \\
$$

░░░░ both ░░░░ ░░░░ ░░░░ to ░░░░

$$
\begin{aligned}
\dot{\bf{P}_{t}} &= \dot{\bf{p}_1} + \dot{\bf{p}_2}\\ \\[0.5pt]
\dot{\bf{P}_{t}} &= \bf{F_{12}} + \bf{F_{21}} + F^{ext}_1 + F^{ext}_2 \\
\end{aligned}
$$
Since $\bf{F_{12}} = - \bf{F_{21}}$░░░░ ░░░░ combining external forces with $\bf{F_{ext}}$,

$$
\dot{\bf{P}_{t}} = \bf{F}_{ext}
$$
░░░░ important ░░░░ demonstrates ░░░░ ░░░░ rate of change of momentum ░░░░$\dot{\bf{P}}_{t}$░░░░ ░░░░ our ░░░░ system, ░░░░ proportional ░░░░ to ░░░░ external ░░░░ ░░░░ acted upon ░░░░ ░░░░ 

░░░░ the special case $\bf{F}_{ext} = 0$,

$$\dot{\bf{P}}_{t} = constant \quad \blacksquare$$

Newton's ░░░░ law ░░░░ intimately ░░░░ ░░░░ the ░░░░ ░░░░ conservation of momentum. 
In ░░░░ ░░░░ ░░░░ external ░░░░ ░░░░ total momentum of ░░░░ two-particle system ░░░░ ░░░░ - a ░░░░ ░░░░ ░░░░ principle ░░░░ ░░░░ ░░░░ ░░░░

##### Validity of Newton's Third Law

░░░░ ░░░░ covering electromagnetism.

### Newton's Second Law in Cartesian Coordinates

Of Newton's three laws, ░░░░ one ░░░░ we ░░░░ use ░░░░ ░░░░ ░░░░ the second, which is ░░░░ described as ░░░░ equation ░░░░ ░░░░ ░░░░ ░░░░ have ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ to define ░░░░ we ░░░░ ░░░░ ░░░░ ░░░░ but ░░░░ ░░░░ of ░░░░ ░░░░ ░░░░ beyond ░░░░ The ░░░░ ░░░░ ░░░░ crucially important in sorting ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ system, ░░░░ ░░░░ ░░░░ know ░░░░ ░░░░ ░░░░ the second law is what ░░░░ actually use to calculate ░░░░ motion of the ░░░░ ░░░░ ░░░░ of interest. ░░░░ particular, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ are known ░░░░ easily found, ░░░░ in ░░░░ ░░░░ the second ░░░░ ░░░░ all ░░░░ ░░░░ for ░░░░ the problem. We already know ░░░░ $$\bf{F} = m\ddot{\bf{r}}$$
░░░░ ░░░░ ░░░░ ░░░░ vector differential ░░░░ for the ░░░░ ░░░░ $\bf{r}$ as ░░░░ ░░░░ of ░░░░ $t$. ░░░░ ░░░░ ░░░░ problem, ░░░░ ░░░░ ░░░░ ░░░░ $\bf{F}$ are ░░░░ and ░░░░ ░░░░ ░░░░ to ░░░░ this ░░░░ ░░░░ for $\bf{r}(t)$░░░░ and we ░░░░ to ░░░░ it ░░░░ ░░░░ some of the ░░░░ ░░░░ simplest way ░░░░ ░░░░ such ░░░░ is almost ░░░░ to resolve the ░░░░ into their components relative to our desired ░░░░ system. 

░░░░ see this in ░░░░ by ░░░░ ░░░░ second ░░░░ in ░░░░ coordinates, ░░░░ ░░░░ conceptually simple ░░░░ ░░░░ net force ░░░░ ░░░░ written as,

$$\bf{F} = F_x\hat{\bf{x}} + F_y\hat{\bf{y}} + F_z\hat{\bf{z}} \tag{1.19}$$
and ░░░░ position vector $\bf{r}$ as 

$$\bf{r} = x\hat{\bf{x}} + y\hat{\bf{y}} + z\hat{\bf{z}} \tag{1.20}$$
░░░░ noted in ░░░░ ░░░░ this ░░░░ of $\bf{r}$ ░░░░ ░░░░ of its ░░░░ ░░░░ is especially ░░░░ ░░░░ differentiate because ░░░░ ░░░░ ░░░░ $\bf{\hat{x}}$, $\bf{\hat{y}}$, ░░░░ $\bf{\hat{z}}$ are ░░░░ ░░░░ ░░░░ can differentiate (1.20) twice ░░░░ get the simple result,

$$\bf{\ddot{r}} = \ddot{x} \bf{\hat{x}} + \ddot{y} \bf{\hat{y}} + \ddot{z} \bf{\hat{z}} \tag{1.21}$$
░░░░ ░░░░ the three ░░░░ components ░░░░ $\bf{\ddot{r}}$ are ░░░░ ░░░░ ░░░░ ░░░░ of the three ░░░░ $x$░░░░ $y$░░░░ $z$ of $\bf{r}$ ░░░░ the ░░░░ ░░░░ ░░░░ becomes,

$$F_x\bf{\hat{x}} + F_y\bf{\hat{y}} + F_z\bf{\hat{z}} = m\ddot{x}\bf{\hat{x}} + m\ddot{y}\bf{\hat{y}} + m\ddot{z}\bf{\hat{z}} \tag{1.22}$$ Resolving this equation into its three separate components, we see that $F_x$ has ░░░░ ░░░░ $m\ddot{x}$ ░░░░ similarly for the $y$ ░░░░ $z$ components. ░░░░ is in Cartesian coordinates, ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ is equivalent to the ░░░░ separate ░░░░

$$
\bf{F} = m\bf{\ddot{r}} \iff \begin{cases}
F_x = m\ddot{x}\\
F_y = m\ddot{y}\\
F_z = m\ddot{z}\\
\end{cases} \tag{1.23}
$$
This elegant ░░░░ in ░░░░ ░░░░ for ░░░░ ░░░░ ░░░░ ░░░░ three ░░░░ is equivalent to ░░░░ ░░░░ ░░░░ of ░░░░ ░░░░ law. We ░░░░ ░░░░ this ░░░░ for ░░░░ systems.

░░░░ ░░░░ a position ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ vectors,

$$
\tag{1.1} \bf{r} = \sum_{k = 0}^{n - 1} l_k  \bf{\hat{i}_k}  
$$

where the ░░░░ $l_k$ vary over ░░░░ ░░░░ can ░░░░ ░░░░ net ░░░░ in terms ░░░░ the unit ░░░░

$$\bf{F} = \sum_{k = 0}^{n - 1}F_k \bf{\hat{i}_k} = m \sum_{k = 0}^{n - 1}\ddot{l}_k \bf{\hat{i}_k} = m\bf{\ddot{r}}$$
Since acceleration is ░░░░ ░░░░ derivative of the ░░░░ ░░░░ respect ░░░░ time, we ░░░░ $1.1$ first ░░░░ ░░░░ the ░░░░

$$
\begin{aligned}
\dfrac{d\bf{r}}{dt} &= \bf{\dot{r}} = \dfrac{d}{dt}\left(\sum_{k = 0}^{n - 1} l_k \bf{\hat{i}_k}\right) \\ \\[0.1pt]
&= \sum_{k = 0}^{n - 1}\dfrac{d}{dt}(l_k \bf{\hat{i}_k}) \\
\end{aligned}
$$
░░░░ ░░░░ product ░░░░ ░░░░$\frac{d}{dt}(fg) = \dot{f}g + f\dot{g}$) and ░░░░ ░░░░ the ░░░░ ░░░░ do not ░░░░ with ░░░░ ░░░░ ░░░░ ░░░░ $0$, with $n - 1$ terms ░░░░ ░░░░

$$
\begin{aligned}
= \sum_{k = 0}^{n - 1} \left(\dfrac{dl_k}{dt}\bf{\hat{i}_k} + l_k\dfrac{d\bf{\hat{i}_k}}{dt}\right)
\end{aligned}
$$
$$\tag{1.2} \therefore \quad \bf{v}(t) = \sum_{k = 0}^{n - 1}(\dot{l}_k \bf{\hat{i}_k})$$

░░░░ $\dot{l}_k$ is the time derivative of $l_k$ $(dl_k/dt)$. Similarly, ░░░░ differentiate $\bf{v}(t)$ ░░░░ ░░░░ $\bf{a}(t)$,

$$
\begin{aligned}
	\dfrac{d\bf{v}}{dt} &= \bf{\dot{v}} = \dfrac{d}{dt}\sum_{k = 0}^{n - 1}(\dot{l}_k \bf{\hat{i}_k})
\end{aligned}
$$
$$\therefore \quad \bf{a}(t) = \sum_{k = 0}^{n - 1}(\ddot{l}_k \bf{\hat{i}_k}) \tag{1.3}$$
░░░░ ░░░░ ░░░░$$\boxed{\bf{F} = m\bf{\ddot{r}} \quad \iff \quad \sum_{k = 0}^{n - 1}F_k \bf{\hat{i}_k} \quad \iff \quad m\sum_{k = 0}^{n - 1}\ddot{r}_k\bf{\hat{i}_k} \quad \blacksquare}$$

### Two-Dimensional Polar Coordinates

░░░░ Cartesian ░░░░ ░░░░ the merit of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ find ░░░░ ░░░░ ░░░░ almost impossible to solve ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ non-Cartesian coordinate ░░░░ To ░░░░ the complexities of ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the ░░░░ of ░░░░ second ░░░░ ░░░░ ░░░░ two-dimensional ░░░░ ░░░░ polar ░░░░ Instead ░░░░ using the two rectangular ░░░░ $x$, $y$, ░░░░ ░░░░ the position of a ░░░░ with ░░░░ distance $r$ from ░░░░ origin ░░░░ ░░░░ ░░░░ $\phi$ ░░░░ counter-clockwise about ░░░░ $x$░░░░

With ░░░░ coordinates, ░░░░ ░░░░ ░░░░ ░░░░ be described ░░░░ terms ░░░░ ░░░░ ░░░░ length $r$ ░░░░ the ░░░░ angle $\phi$░░░░ ░░░░ to ░░░░ x-axis. ░░░░ ░░░░ ░░░░ the ░░░░ we describe ░░░░ to convert ░░░░ ░░░░ ░░░░ and polar ░░░░

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

We can ░░░░ express ░░░░ position ░░░░ as a complex ░░░░ using Euler's ░░░░$$z = x + iy = r(\cos\phi + i\sin\phi) = re^{-i\phi} \tag{1.2}$$░░░░ ░░░░ ░░░░ conjugate of ░░░░ ░░░░ ░░░░ ░░░░$$\bar{z} = r(\cos\phi - i\sin\phi) = re^{-i\phi} \tag{1.3}$$░░░░ ░░░░ ░░░░ and ░░░░ $1.2$ and $1.3$ resp. ░░░░ get some important ░░░░

$$
\begin{aligned}
z + \bar{z} &= re^{i\phi} + re^{-i\phi} \\ \\[0.1pt]
&= r(e^{i\phi} + e^{-i\phi})
\end{aligned}
$$

░░░░ $z + \bar{z} = x + iy + x - iy = 2x$ is purely ░░░░ and $x = r\cos\phi$ ░░░░ $1.1$░░░░

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

░░░░ $z - \bar{z} = 2iy$ ░░░░ ░░░░ ░░░░ ░░░░ $y = r\sin\phi$ by $1.1$░░░░

$$
\begin{align*}
2ir\sin\phi &= r(e^{i\phi} - e^{-i\phi}) \\ \\[0.1pt]
\tag{1.5} \therefore \quad \sin\phi &= \dfrac{e^{i\phi} - e^{-i\phi}}{2i} 
\end{align*}
$$

░░░░ ░░░░ Euler's important ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ways, easiest of them being ░░░░ Taylor ░░░░ ░░░░ of $e^x$░░░░ For ░░░░ ░░░░ first ░░░░ $e^{i\phi}$░░░░ ░░░░ can use ░░░░ Maclaurin ░░░░ ░░░░ around $x = 0$),

$$
\begin{aligned}
e^x &= \sum_{n = 0}^{\infty}\dfrac{x^n}{n!} \\ \\[0.1pt] 
\end{aligned}
$$

Substituting $x = i\theta$,

$$
\begin{aligned}
	e^{i\theta} &= \sum_{n = 0}^{\infty}\dfrac{(i\theta)^n}{n!} \\ \\[0.1pt]
\end{aligned}
$$

░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ with ░░░░ ░░░░ and even) ░░░░ where ░░░░ $i^2 = 1$ ░░░░ out. We ░░░░ $n = 2k$,

$$
\begin{aligned}
	&= \sum_{k = 0}^{\infty}\dfrac{(i\theta)^{2k}}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{(i\theta)^{2k + 1}}{(2k + 1)!} \\ \\[0.1pt]
	&= \sum_{k = 0}^{\infty}\dfrac{(i^{2k}\theta^{2k})}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{(i^{2k + 1}\theta^{2k + 1})}{(2k + 1)!} \\ \\[0.1pt]
	&= \sum_{k = 0}^{\infty}\dfrac{(-1)^k\theta^{2k}}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{i(-1)^k \theta^{2k + 1}}{(2k + 1)!} \\ \\[0.1pt]
\end{aligned}
$$

░░░░ two ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ for $\cos\theta$ ░░░░ $\sin\theta$ respectively, 

$$
\begin{align*}
	&= \sum_{k = 0}^{\infty}\dfrac{(-1)^k\theta^{2k}}{(2k)!} + i\left(\sum_{k = 0}^{\infty}\dfrac{(-1)^k \theta^{2k + 1}}{(2k + 1)!}\right) \\ \\[0.1pt]
\tag{1.6} \therefore \quad e^{i\theta} &= \cos\theta + i\sin\theta \quad \blacksquare
\end{align*}
$$

░░░░ ░░░░ ░░░░ ░░░░ conclude ░░░░ ░░░░ ░░░░

$$
\begin{align*}
\tag{1.7} e^{i\phi} &= \cos\phi + i\sin\phi\\
\tag{1.8} e^{-i\phi} &= \cos\phi - i\sin\phi\\
\end{align*}
$$

Akin ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ the position ░░░░ ░░░░ ░░░░ ░░░░ and ░░░░ (as $\bf{F} = m \bf{a}$░░░░ ░░░░ position ░░░░ can ░░░░ ░░░░ as,$$\bf{r} = r \bf{\hat{r}} \tag{1.9}$$
░░░░ $r$ is ░░░░ radial distance, and $\bf{\hat{r}}$ ░░░░ the unit vector in ░░░░ direction ░░░░ $r$. ░░░░ we differentiate, ░░░░ ░░░░ ░░░░ up terms involving ░░░░ for $\bf{\hat{r}}$ ░░░░ $\bf{\hat{\phi}}$░░░░ So ░░░░ ░░░░ ░░░░ ░░░░ attention towards ░░░░ ░░░░ We ░░░░ ░░░░ these geometrically, and ░░░░ discuss ░░░░ alternate algebraic derivation.

Lets ░░░░ $\Delta \bf{\hat{r}}$ from fig. ░░░░ ░░░░ ░░░░ the ░░░░ $r$ as ░░░░ goes from $t_1$ to $t_2$░░░░ The unit vector $\bf{\hat{r}}$ points in different ░░░░ ░░░░ the length ░░░░ this ░░░░ ░░░░ does not ░░░░ we ░░░░ an arc along the direction of $\bf{\hat{\phi}}$, ░░░░ ░░░░ reduces ░░░░ the ░░░░ $\Delta \bf{\hat{r}}$ ░░░░ $\Delta t \rightarrow 0$░░░░ ░░░░ begin ░░░░ ░░░░ ░░░░ ░░░░ $\Delta\bf{\hat{r}}$ ░░░░ ░░░░ ░░░░ $\Delta\phi$ along $\bf{\hat{\phi}}$,

$$
\begin{align*}
\tag{1.10} \Delta \bf{\hat{r}} &\propto \Delta\phi \bf{\hat{\phi}}\\
\end{align*}
$$

We ░░░░ to relate this angular ░░░░ $\Delta \phi$ with ░░░░ in ░░░░ case ░░░░ infinitesimal $\Delta t$░░░░ ░░░░ have

$$
\begin{align*}
	\dot{\phi} &= \dfrac{d\phi}{dt} \\ \\[0.1pt]
	\tag{1.11} \Delta\phi &\approx \dot{\phi} \ \Delta t
\end{align*}
$$

░░░░ $1.11$ ░░░░ ░░░░ $1.10$░░░░

$$
\begin{align*}
\Delta \bf{\hat{r}} &\approx \dot{\phi} \Delta t \bf{\hat{\phi}}
\end{align*}
$$

In ░░░░ limit $\Delta t \rightarrow 0$ $\iff$ $\Delta \bf{\hat{r}}/\Delta t \rightarrow d\bf{\hat{r}}/dt$░░░░ ░░░░ ░░░░ sides by $\Delta t$ ░░░░ ░░░░ the ░░░░ ░░░░ $\bf{\hat{r}}$ ░░░░ ░░░░ need,

$$
\begin{align*}
\lim_{\Delta t \rightarrow 0} \dfrac{\Delta \bf{\hat{r}}}{\Delta t} &\approx \lim_{\Delta t \rightarrow 0} \dfrac{\dot{\phi} \Delta t \bf{\hat{\phi}}}{\Delta t} \\ \\[0.1pt]
\tag{1.12} \therefore \quad \dfrac{d\bf{\hat{r}}}{dt} = \bf{\dot{\hat{r}}} &= \dot{\phi}\bf{\hat{\phi}}
\end{align*}
$$

░░░░ can ░░░░ the ░░░░ ░░░░ ░░░░ to ░░░░ $\bf{\dot{\hat{\phi}}}$, ░░░░ ░░░░ $\bf{\hat{\phi}}$ ░░░░ ░░░░ ░░░░ $\bf{\hat{r}}$ as it rotates ░░░░ towards $-\bf{\hat{r}}$, we ░░░░

$$
\begin{align*}
\tag{1.13} \dfrac{d\bf{\hat{\phi}}}{dt} &= \bf{\dot{\hat{\phi}}} = - \dot{\phi}\bf{\hat{r}}
\end{align*}
$$

░░░░ we ░░░░ to an alternate algebraic derivation for the ░░░░ ░░░░ $\bf{\dot{\hat{r}}}$░░░░ We ░░░░ ░░░░ $\bf{\hat{r}}$ and $\bf{\hat{\phi}}$ ░░░░ terms ░░░░ ░░░░ Cartesian counterparts $\bf{\hat{i}}$ ░░░░ $\bf{\hat{j}}$, ░░░░ evident from the ░░░░

$$
\begin{align*}
	\tag{1.14} \bf{\hat{r}} &= \cos\phi \bf{\hat{i}} + \sin\phi \bf{\hat{j}} \\
	\tag{1.15} \bf{\hat{\phi}} &= - \sin\phi \bf{\hat{i}} + \cos\phi\bf{\hat{j}}
\end{align*}
$$

░░░░ $1.14$,

$$
\begin{align*}
\dfrac{d\bf{\hat{r}}}{dt} &= \dfrac{d}{dt}(\cos\phi \bf{\hat{i}} + \sin\phi \bf{\hat{j}}) \\ \\[0.1pt]
&= \dfrac{d}{dt}(\cos\phi \bf{\hat{i}}) + \dfrac{d}{dt}(\sin\phi \bf{\hat{j}}) \\ \\[0.1pt]
&= \dfrac{d\cos\phi}{dt}\bf{\hat{i}} + \dfrac{d\sin\phi}{dt} \bf{\hat{j}} \\ \\[0.1pt]
&= -\sin\phi \dot{\phi} \bf{\hat{i}} + \cos\phi \dot{\phi} \bf{\hat{j}} \\ \\[0.1pt]
&= \dot{\phi}(-\sin\phi \bf{\hat{i}} + \cos\phi \bf{\hat{j}}) \\ \\[0.1pt]
\end{align*}
$$

░░░░ $1.14$ ░░░░ we ░░░░ $\bf{\dot{\hat{r}}}$░░░░ Following ░░░░ same process ░░░░ $\bf{\dot{\hat{\phi}}}$░░░░ ░░░░ ░░░░ ░░░░ equivalent ░░░░ from $1.12$ ░░░░ $1.13$░░░░

$$
\begin{align*}
\bf{\dot{\hat{r}}} &= \dot{\phi} \bf{\hat{\phi}} \\ \\[0.1pt]
\bf{\dot{\hat{\phi}}} &= -\dot{\phi} \bf{\hat{r}}
\end{align*}
$$

Now, ░░░░ ░░░░ ░░░░ derivatives both ░░░░ and ░░░░ ░░░░ can ░░░░ to our ░░░░ ░░░░ differentiating $1.9$ ░░░░ ░░░░ ░░░░ second ░░░░ in polar coordinates.

$$
\begin{align*}
	\bf{r} &= r \bf{\hat{r}} \\ \\[0.1pt]
	\dfrac{d\bf{r}}{dt} &= \dfrac{d(r \bf{\hat{r}})}{dt} \\ \\[0.1pt]
	&= \bf{\dot{r}} \bf{\hat{r}} + r \dot{\bf{\hat{r}}}
\end{align*}
$$

Substituting our equation for $\dot{\bf{\hat{r}}}$ ░░░░ $1.12$░░░░

$$
\begin{align*}
\tag{1.16} \bf{v} = \dot{\bf{r}} \bf{\hat{r}} + r \dot{\phi} \bf{\hat{\phi}} 
\end{align*}
$$

We ░░░░ evaluate the velocity ░░░░ ░░░░ polar components, $\bf{v}_r = \bf{\dot{r}}$ and $\bf{v}_\phi = r\dot{\phi}$. Now ░░░░ differentiate $1.16$ ░░░░ get $\bf{\ddot{r}}$, 

$$
\begin{align*}
\dfrac{d\bf{v}}{dt} &= \dfrac{d}{dt}(\dot{\bf{r}} \bf{\hat{r}} + r \dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \dfrac{d}{dt}(\dot{\bf{r}} \bf{\hat{r}}) + \dfrac{d}{dt}(r \dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\bf{\dot{\hat{r}}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\dfrac{d}{dt}(\dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\bf{\dot{\hat{r}}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} + r\dot{\phi}\bf{\dot{\hat{\phi}}}
\end{align*}
$$

░░░░ ░░░░ ░░░░ ░░░░ $1.12$ ░░░░ $1.13$,

$$
\begin{align*}
	&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} + r\dot{\phi}(-\dot{\phi} \bf{\hat{r}}) \\ \\[0.1pt]
	&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} - r\dot{\phi}^2\bf{\hat{r}} \\ \\[0.1pt]
	&= \ddot{\bf{r}}\bf{\hat{r}} - r\dot{\phi}^2\bf{\hat{r}} + 2\dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} \\ \\[0.1pt]
	\therefore \quad \bf{a} &= (\ddot{\bf{r}} - r\dot{\phi}^2)\bf{\hat{r}} + (2\dot{\bf{r}}\dot{\phi} + r\ddot{\phi})\bf{\hat{\phi}}
\end{align*}
$$

giving us our acceleration along the two polar coordinates. Since we can ░░░░ ░░░░ ░░░░ force $\bf{F}$ ░░░░ a sum of ░░░░ forces ░░░░ ░░░░ orthonormal basis,

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

Lets ░░░░ ░░░░ ░░░░ ░░░░ $N$ particles, where ░░░░ label ░░░░ ░░░░ ░░░░ with a Greek index $\alpha$ or $\beta$░░░░ The mass of ░░░░ $\alpha$ is $m_{\alpha}$ and its momentum is $\bf{p_{\alpha}}$░░░░ 

░░░░ e.g., particle $\alpha$ ░░░░ ░░░░ exerted by $\beta$ and $\gamma$ ($\bf{F_{\alpha\beta}}$, $\bf{F_{\alpha\gamma}}$░░░░ ░░░░ some net external ░░░░ $\bf{F^{ext}_{\alpha}}$. ░░░░ the net force ░░░░ $\alpha$ ░░░░

$$
\bf{F_{\alpha}} = \sum_{\beta \neq \alpha} \bf{F_{\alpha \beta}} + \bf{F^{ext}_{\alpha}}
$$
We also know that $\bf{F} = \dot{\bf{p}} = m\bf{a}$,

$$
\dot{\bf{p_{\alpha}}} = \sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \bf{F^{ext}_{\alpha}}
$$
This ░░░░ ░░░░ valid for all $N$ ░░░░ ░░░░ ░░░░ consider ░░░░ ░░░░ momentum ░░░░ ░░░░ ░░░░

$$
\bf{P} = \sum_{\alpha = 1}^{N} \bf{p_{\alpha}}
$$
Differentiating ░░░░ ░░░░ to ░░░░ and ░░░░ $\dot{\bf{p_{\alpha}}}$

$$
\begin{aligned}
\dot{\bf{P}} &= \sum_{\alpha = 1}^{N} \dot{\bf{p_{\alpha}}} \\
\dot{\bf{P}} &= \sum_{\alpha = 1}^{N} \left(\sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \bf{F^{ext}_{\alpha}}\right) \\
&= \sum_{\alpha = 1}^{N} \sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \\
&= \sum_{\alpha} \sum_{\phi \neq \alpha}(\bf{F_{\alpha \phi}} + \bf{F_{\phi \alpha}}) + \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \\\\
\therefore \quad \dot{\bf{P}} = \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \equiv \bf{F^{ext}}
\end{aligned}
$$

This ░░░░ demonstrates ░░░░ the internal forces of ░░░░ the ░░░░ don't affect the ░░░░ ░░░░ the ░░░░ momentum ░░░░$\bf{P}$░░░░ ░░░░ ░░░░ of change ░░░░ $\bf{P}$ is determined _only_ by the ░░░░ _external_ ░░░░ on ░░░░ ░░░░ In the case ░░░░ this net external force is ░░░░ $\dot{\bf{P}} = constant$! $\blacksquare$

#### Ex-$31$: Show the converse of the Conservation of Momentum for a 2-particle system. That is, show that $\bf{F_{12}} = \bf{F_{21}}$.

We ░░░░ with two particles $\alpha$ and $\beta$░░░░ the forces acting ░░░░ them ░░░░ $\bf{F_{\alpha \beta}}$ and $\bf{F_{\beta \alpha}}$. Excluding ░░░░ ░░░░ forces, we ░░░░ 

$$
\bf{F} = \bf{F_{\alpha \beta}} + \bf{F_{\beta \alpha}}
$$
░░░░ know that $\bf{F} = \dot{\bf{p}}$░░░░ we ░░░░ $\dot{\bf{p_1}} = \bf{F_{\alpha \beta}}$ ░░░░ $\dot{\bf{p_2}} = \bf{F_{\beta \alpha}}$. The ░░░░ ░░░░ of this system is then,

$$
\bf{P} = \bf{p_1} + \bf{p_2}
$$
░░░░ ░░░░ ░░░░ $\bf{\dot{P}} = 0 = constant$░░░░ differentiating ░░░░ ░░░░ ░░░░ respect to $t$░░░░

$$
\begin{aligned}
\frac{d}{dt}(\bf{p_1} + \bf{p_2}) &= 0 \\\\[1pt]
\dot{\bf{p_1}} + \dot{\bf{p_2}} \equiv \bf{F_{\alpha\beta}} + \bf{F_{\beta\alpha}} &= 0 \\\\[1pt]
\therefore \quad \bf{F_{\alpha\beta}} = \bf{- F_{\beta\alpha}} \quad \blacksquare
\end{aligned}
$$

#### Ex-$35$: A golf ball is hit from ground level with speed $v_0$ in a direction that is due east and at an angle $\theta$ above the horizontal. Neglecting air resistance, use Newton’s second law to find the position as a function of time, using coordinates with $x$ measured east, $y$ north, and $z$ vertically up. Find the time for the golf ball to return to the ground and how far it travels in that time.

░░░░ need to find $\bf{r_{puck}}(t) = \{\bf{r_x}(t), \ 0, \ \bf{r_z(t)} \}$. ░░░░ can ░░░░ ░░░░ ░░░░ x-component.

We ░░░░ ░░░░ ░░░░ ░░░░ is ░░░░ ░░░░ $x$ ░░░░ $z$ axis. ░░░░ ░░░░ ░░░░ ░░░░ $\bf{F_x} = m\bf{a_x}$. ░░░░ ░░░░ ░░░░ acceleration ░░░░ the ░░░░
$$\bf{a_x} = 0 \implies {\bf{F_x} = 0 \quad \& \quad \frac{d\bf{v}}{dt} = constant}$$
Since the initial ░░░░ ░░░░ ░░░░ $x$ axis ░░░░ $v_0$, we have an angle $\theta$ from the horizontal plane, and we know that $\dot{\bf{v}} = constant$, we begin constructing our velocity function for the $x$ component. $$\bf{v_x(t)} = v_0 \cos(\theta)$$
Integrating again ░░░░ get $\bf{r_x(t)}$,

$$
\begin{aligned}
\int{\bf{v_x(t)} \ dt} &= \int{v_0 \cos(\theta)} \ dt \\
r_x(t) &= v_0 \cos(\theta) \ t + C
\end{aligned}
$$
Presuming origin ░░░░ $(0, 0)$░░░░ $\bf{r_x}(0) = 0$, we get $C = x_0 = 0$░░░░ we ░░░░ our desired function $r_x(t)$,

$$
r_x(t) = v_0 \cos(\theta) \ t
$$
░░░░ ░░░░ ░░░░ the z-component,

░░░░ ░░░░ ░░░░ ░░░░ we ░░░░ ░░░░ ░░░░ velocity, accounting ░░░░ $\theta$ is $v_0 \sin(\theta)$. We also have the gravitational force accelerating the ball along the $-z$ axis, that makes $\bf{F_z} = -mg$░░░░ ░░░░ can now solve our differential ░░░░

$$
\begin{aligned}
F_z &= m a_z \\
-mg &= m \dot{v_z} \\
\dot{v_z} &= -g \\
\end{aligned}
$$

Integrating both sides ░░░░ ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
\int{\dot{v_z}} \ dt &= \int{-g} \ dt \\
v_z(t) &= -gt + C \\ 
\end{aligned}
$$

░░░░ at $t = 0$░░░░ $v_z(0) = v_0 \sin(\theta)$░░░░ then $C = v_0 \sin(\theta)$. ░░░░ ░░░░ have ░░░░ ░░░░ equation for velocity along the ░░░░

$$
v_z(t) = -gt + v_0 \sin(\theta) \\
$$
░░░░ again with ░░░░ ░░░░ time gives ░░░░ our desired ░░░░ $r_z(t)$░░░░

$$
\begin{aligned}
\int{\bf{v_z(t)}} \ dt &= \int{(-gt + v_0 \sin(\theta))} \ dt \\
r_z(t) &= \int{-gt} \ dt + \int{v_0 \sin(\theta)} \ dt \\
r_z(t) &= -\frac{1}{2} g t^2 + C_1 + v_0 \sin(\theta)\ t + C_2 \\
\end{aligned}
$$

If ░░░░ $t = 0$░░░░ $r_z(t) = 0$, and $C = C_1 + C_2$ ░░░░ $C = 0$░░░░ ░░░░ ░░░░ ░░░░ equation is,

$$
r_z(t) = -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \\ \\
\therefore \quad r_{puck}(t) = \{v_0 \cos(\theta) \ t, \ -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \} \quad \blacksquare
$$

░░░░ we need to ░░░░ $t$ ░░░░ which the ░░░░ ░░░░ ░░░░ ground. ░░░░ can ░░░░ with $r_z(t)$░░░░ ░░░░ substitute it ░░░░ $0$░░░░

$$
\begin{aligned}
r_z(t) &= -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \\
0 &= t(-\frac{1}{2} g t + v_0 \sin(\theta)) \\\\
\therefore \quad t = 0 \text{\quad or \quad} t = \frac{2 v_0 \sin(\theta)}{g} \quad \blacksquare
\end{aligned}
$$
░░░░ ░░░░ $t > 0$ ░░░░ be $t_{post}$, to find the distance traversed as it hits the ground after being hit, we plug $t_{post}$ to our ░░░░ ░░░░ the x-component.

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

░░░░ ░░░░ traditional ░░░░ ░░░░ coordinates, ░░░░ represent the ░░░░ ░░░░ ░░░░ a ░░░░ ░░░░ time $(\bm{r_{y}(t)})$░░░░ 

░░░░ bundle ░░░░ down ░░░░ height $h$░░░░ so $\bm{F_y} = -mg$...

$$
\begin{aligned}
-mg &= m\bm{a_y} \\
\bm{a_y} &= -g \\
\end{aligned}
$$
Integrating both sides with ░░░░ to $t$,

$$
\begin{aligned}
\int{\bm{a_y}} \ dt = \int{-g} \ dt \\
\bm{v_y(t)} = -gt + C \\
\end{aligned}
$$
Since $v_y(0) = 0$, $C = 0$, and we have $\bm{v_y(t)} = -gt$. ░░░░ ░░░░ again ░░░░ find $r_{y}(t)$░░░░

$$
\begin{aligned}
\int{\bm{v_y(t)}} \ dt &= \int{-gt} \ dt \\
\bm{r_y(t)} &= -\frac{1}{2}gt^2 + C\\
\end{aligned}
$$
In ░░░░ ░░░░ case $t = 0$, $\bm{r_y(t)} = h \ \implies \ C = h$, giving us our final equation for $\bm{r_y(t)}$,

$$\therefore \quad \bm{r_y(t)} = -\frac{1}{2}gt^2 + h \quad \blacksquare$$

##### (b) How far before the raft (measured horizontally) must the pilot drop the bundle if it is to hit the raft? What is this distance if $\bm{v_0} = 50 \  \mathrm{m/s}$, $h = 100 \ \mathrm{m}$, and $g \approx 10 \ \mathrm{m/s^2}$? 

░░░░ determine ░░░░ ░░░░ we ░░░░ to ░░░░ the bundle ░░░░ ░░░░ it ░░░░ the ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ calculate how much time ░░░░ ░░░░ actually take to hit the ░░░░ ░░░░ general. We ░░░░ ░░░░ ░░░░ by ░░░░ our equation ░░░░ $\bm{r_y(t)}$ ░░░░ ░░░░ ░░░░ $t$░░░░

$$
\begin{aligned}
\frac{1}{2}gt^2 &= h \\
t &= \sqrt{\frac{2h}{g}} \\
\end{aligned}
$$
Substituting given ░░░░

$$
\begin{aligned}
t &= \sqrt{\frac{200 \ \mathrm{m}}{10 \ \mathrm{m/s^2}}} \\\\
\therefore \quad t = 4.47 \ \mathrm{s}
\end{aligned}
$$
We ░░░░ that ░░░░ plane ░░░░ ░░░░ an ░░░░ ░░░░ constant) velocity of $\bm{v_0} = 50 \ \mathrm{m / s}$░░░░ we integrate ░░░░ ░░░░ ░░░░ time ░░░░ get the position function,

$$
\begin{aligned}
\int{\bm{v_x(t)}} \ dt &= \int{v_0} \ dt \\
\bm{r_x(t)} &= \bm{v_0} t + C
\end{aligned}
$$
In ░░░░ case $t = 0$, we can ░░░░ $\bm{r_x(0)} = 0 \ \implies \ C = 0$, 

$$\therefore \quad \bm{r_x(t)} = \bm{v_0}t$$
Plugging ░░░░ $t = 4.47 \ \mathrm{s}$░░░░ ░░░░ get,

$$
\begin{aligned}
\bm{r_x(4.47)} = 50 \ \mathrm{m / s} \cdot 4.47 \ \mathrm{s} \\ \\
\therefore \quad \bm{r_x(4.47)} = 223.5 \ \mathrm{m} \quad \blacksquare
\end{aligned}
$$
The plane ░░░░ to drop ░░░░ bundle $223.5 \ \mathrm{m}$ ░░░░ ░░░░ ░░░░ actual ░░░░ ░░░░ the x-axis.

##### (c) Within what interval of time $(\pm \ \Delta t)$ must the pilot drop the bundle if it is to land within $\pm \ 10 \ m$ of the raft?

░░░░ $\bm{r_x(4.47)} = 223.5 \ \mathrm{m}$, we want to find the time delta for which the bundle lands between $213.5 \ \mathrm{m}$ and $233.5 \ \mathrm{m}$, using our equation for $\bm{r_x(t)}$,

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
Therefore, ░░░░ plane ░░░░ ░░░░ ░░░░ between $\pm \ 0.2 \ \mathrm{s}$ to ░░░░ ░░░░ $\pm \ 10 \ \mathrm{m}$ ░░░░ $\blacksquare$

#### Ex-$37$: A student kicks a frictionless puck with initial speed $\bm{v_0}$, so that it slides straight up a plane that is inclined at an angle $\theta$ above the horizontal. 

##### (a) Write down Newton's second law for the puck and solve to give its position as a function of time.

We take x-axis ░░░░ the ░░░░ ░░░░ the ░░░░ y-axis orthogonal ░░░░ ░░░░ (along ░░░░ slope ░░░░ pointing outwards), and z-axis ░░░░ ░░░░ ░░░░ ░░░░ y, forming ░░░░ ░░░░ ░░░░

The ░░░░ force acting ░░░░ the puck is $\bm{F_{net}} = N + mg$, ░░░░ $\bm{N} = (0, \ N, \ 0)$ and $\bm{g} = (-g \sin(\theta), \ -g\cos(\theta))$, ░░░░ have ░░░░ component forces.

$$
\begin{aligned}
\bf{F} = m\ddot{r} \implies \begin{cases}
	m\ddot{x} &= -mg\sin\theta \\
	m\ddot{y} &= N - mg\cos\theta \\
	m\ddot{z} &= 0
\end{cases}
\end{aligned}
$$
░░░░ $\ddot{z} = \dot{z} = 0$░░░░ $z = 0$ ░░░░ all $t$. The ░░░░ force adjusts ░░░░ gravity, so $\ddot{y} = \dot{y} = y = 0$, and ░░░░ only need to evaluate the ░░░░ function ░░░░ ░░░░ ░░░░ We ░░░░ ░░░░ ░░░░ to ░░░░ $r_x(t)$░░░░

$$
\begin{aligned}
\int{\int{m\ddot{r}}} \ dt \ dt &= \int{\int{-mg\sin\theta}} \ dt \ dt \\ \\[1pt]
\int{\int{\ddot{r}}} \ dt \ dt &= \int{\int{-g\sin\theta}} \ dt \ dt \\ \\[1pt]
\int{\dot{r}} \ dt &= \int{(-g\sin\theta t + C_1)} \ dt \\ \\[1pt]
\bm{r_x(t)} &= -\frac{1}{2}gt^2\sin\theta + C_1t + C_2 \\ 
\end{aligned}
$$
░░░░ $t = 0$, $x(0) = 0$░░░░ ░░░░ us $C_2 = r_0$░░░░ ░░░░ ░░░░ ░░░░ with ░░░░ to ░░░░ ░░░░ ░░░░ $C_1$░░░░

$$
\begin{aligned}
\frac{dr_x(t)}{dt} &= \frac{d}{dt}\left(-\frac{1}{2}gt^2\sin\theta + C_1t + r_0 \right) \\ \\[1pt]
v_x(t) &= -gt\sin\theta + C_1 \\
\end{aligned}
$$
░░░░ $t = 0$░░░░ $v_x(0) = v_0$░░░░ ░░░░ ░░░░ $C_1 = v_0$, ░░░░ us ░░░░ final equation,

$$\therefore \quad r_x(t) = -\frac{1}{2}gt^2\sin\theta + v_0t + r_0 \quad \blacksquare$$

##### (b) How long will the puck take to return to its starting point?

░░░░ $r_x(t)$, ░░░░ the t ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
r_x(t) &= \left(v_0 - \frac{1}{2} g \sin(\theta) t\right) \\\\
\therefore \quad t &= \frac{2 v_0}{g \sin(\theta)} \quad \blacksquare
\end{aligned}
$$

#### Ex-$39$: A ball is thrown with initial speed $\bm{v_0}$ up an inclined plane. The plane is inclined at an angle $\phi$ above the horizontal, and the ball's initial velocity is at an angle $\theta$ above the plane. Choose axes with $x$ measured up the slope, $y$ normal to the slope, and $z$ across it. 

##### Write down Newton's second law using these axes and find the ball's position as a function of time.

░░░░ ░░░░ ░░░░ concerned ░░░░ a kind ░░░░ projectile motion, ░░░░ sliding motion ░░░░ ░░░░ with ░░░░ ░░░░ $N$ is ░░░░ The ░░░░ ░░░░ ░░░░ only along ░░░░ $x$ ░░░░ $y$ ░░░░ so $\dot{z} = z = 0$ for ░░░░ $t$. Once the ball ░░░░ thrown, ░░░░ ░░░░ own weight acts on ░░░░ so $\bm{g} = (-g\sin\phi, \ -g\cos\phi)$░░░░ giving ░░░░ our ░░░░ ░░░░ ░░░░ two ░░░░

$$
\begin{aligned}
F_x &= m \ddot{r}_x \\
-mg\sin\phi &= m\ddot{r}_x \\
\ddot{r}_x &= -g\sin\phi 
\end{aligned}
$$
░░░░ ░░░░ $F_y = m\ddot{r}_y$░░░░ and $\ddot{r}_y = -g\cos\phi$. We integrate twice to get the position functions $r_x(t)$ ░░░░ $r_y(t)$. Starting with $r_x(t)$░░░░

$$
\begin{aligned}
\int{\int{\ddot{r}_x \ dt} \ dt} &= \int{\int{(-g\sin\phi) \ dt} \ dt} \\
\int{\dot{r}_x} \ dt &= \int{(-g\sin\phi t + C_1) \ dt} \\
r_x(t) &= -\frac{1}{2}gt^2\sin\phi + C_1t + C_2 \\
\end{aligned}
$$
░░░░ $t = 0$, $r_x(0) = 0$, giving us $C_2 = 0$. We ░░░░ ░░░░ ░░░░ for $C_1$ by differentiating $r_x(t)$ ░░░░ get $v_x(t)$ and ░░░░ substituting ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
\dot{r} &= \frac{d}{dt}\left(-\frac{1}{2}gt^2\sin\phi + C_1t \right) \\
v_x(t) &= -\frac{1}{2} gt\sin\phi + C_1 \\
\end{aligned}
$$
At $t = 0$░░░░ $v_x(0) = v_0 \cos\theta \ \implies \ C_1 = v_0 \cos\theta$, ░░░░ us ░░░░ final equation for $r_x(t)$░░░░

$$r_x(t) = -\frac{1}{2}gt^2\sin\phi + v_0t\cos\theta$$
Repeating ░░░░ ░░░░ steps exactly ░░░░ the y-component, we ░░░░ ░░░░ $r_y(t) = -\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta$░░░░ We ░░░░ ░░░░ our ball's ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ time,

$$\therefore \quad \bm{r_{ball}}(t) = (-\frac{1}{2}gt^2\sin\phi + v_0t\cos\theta, \ -\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta) \quad \blacksquare$$

##### Show that the ball lands a distance $R = 2v_0^2 \sin(\theta) \cos(\theta + \phi) / (g \cos^2(\phi)$ from its launch point.

The ░░░░ ░░░░ at a certain distance ░░░░ $r_y(t) = 0$, so ░░░░ ░░░░ and solve ░░░░ $t$░░░░

$$
\begin{aligned}
-\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta &= 0 \\
\frac{1}{2}gt\cos\phi &= v_0\sin\theta \\
t &= \frac{2v_0\sin\theta}{g\cos\phi} \\
\end{aligned}
$$
░░░░ ░░░░ substitute this into $r_x(t)$░░░░ ░░░░ get $R$,

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

░░░░ ░░░░ to differentiate $R$ ░░░░ respect to $\theta$, and ░░░░ it to $0$ ░░░░ find ░░░░ ░░░░ range.

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
Taking $n =  0$ ░░░░ get ░░░░ ░░░░ ░░░░ we get $\theta = \frac{\pi}{4} - \frac{\phi}{2}$. Substituting ░░░░ to $R$,

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

The ░░░░ is ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ only ░░░░ the y-component, we have $g_y = -g \implies F_y = -mg$. ░░░░ only need to integrate twice to get $r_y(t)$░░░░

$$
\begin{aligned}
F_y &= -mg \\
m\ddot{r_y} &= -mg \\
\ddot{r_y} &= -g \\
\dot{r_y} &= -gt + C_1 \\
r_y(t) &= -\frac{1}{2}gt^2 + C_1t + C_2 \\ 
\end{aligned}
$$
░░░░ $t = 0$░░░░ ░░░░ $r_y(0) = 0$, we need to find $C_1$. The cannon ░░░░ shot ░░░░ ░░░░ an angle $\theta$ with ░░░░ ░░░░ $v_0$,

$$
\begin{aligned}
v_y(t) &= -gt + C_1 \\
C_1 &= v_0\sin\theta\\\\
\therefore \quad r_y(t) = -\frac{1}{2}gt^2 + v_0\sin\theta \ t \\
\end{aligned}
$$
Since there's no ░░░░ acting on the x-component, we ░░░░ have the ░░░░ to deal ░░░░ so $r_x(t) = v_0\cos\theta \ t$ ░░░░ ░░░░ ░░░░ $r_y(t)$░░░░ giving us ░░░░ ░░░░ ░░░░ function,
$$\therefore \quad \bm{r_{cball}}(t) = (v_0\cos\theta \ t, \ -\frac{1}{2}gt^2 + v_0\sin\theta \ t) \quad \blacksquare$$

##### (b) Let $r(t)$ denote the ball's distance from the cannon. What is the largest possible value of $\theta$ if $r(t)$ is to increase throughout the ball's flight? [Hint: Using your solution to (a) you can write down $r^2$ as $x^2 + y^2$ , and then find the condition that $r^2$ is always increasing.]

░░░░ with $\bm{r_{cball}}^2(t)$░░░░ ░░░░ differentiate 

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
To ░░░░ the ░░░░ for $\bm{\dot{r}^2_{cball}}$ ░░░░ be ░░░░ increasing, ░░░░ need the derivative to be ░░░░ for all $t > 0$, ░░░░ ░░░░ can be ░░░░ ░░░░ roots. ░░░░ condition ░░░░ no ░░░░ ░░░░ ░░░░ the discriminant being less ░░░░ $0$░░░░$b^2 - 4ac \lt 0$). 

░░░░ ░░░░ $b^2 = (3v_0g\sin\theta)^2$, $a = g^2$, and $c = 2v_0^2$░░░░ solving ░░░░ $\theta$░░░░

$$
\begin{aligned}
(3v_0g\sin\theta)^2 - 4g^2(2v_0^2) &< 0 \\ \\[0.5pt]
9v_0^2g^2\sin^2\theta - 8g^2v_0^2 &< 0 \\ \\[0.5pt]
v_0^2g^2(9\sin^2\theta - 8) &< 0 \\ \\[0.5pt]
\end{aligned}
$$
░░░░ both ░░░░ ░░░░ $v_0^2g^2$, and simplifying, ░░░░ ░░░░ ░░░░ final value ░░░░ $\theta$░░░░

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

░░░░ know ░░░░ $\omega = \dot{\phi}$░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ string ░░░░ use $\vec{F}_r = m(\ddot{r} - r\omega^2)$░░░░

░░░░ $R$ ░░░░ constant, $\ddot{r} = 0$░░░░ ░░░░ ░░░░ $\omega$ ░░░░ constant, ░░░░ ░░░░ ░░░░ ░░░░ and substitute, 

$$
\begin{aligned}
F_r &= m(\ddot{r} - r\omega^2) \\
&= m(0 - R\omega^2) \\
&= -mR\omega^2 \\ \\
\therefore \quad T = mR\omega^2 \quad \blacksquare 
\end{aligned}
$$

#### Ex-$42$: Prove that the transformations from rectangular to polar coordinates and vice versa are given by the four equations. Explain why the equation for $\theta$ is not quite complete and give a complete version.

a) $x = r \cos\theta$ ░░░░ $y = r \sin\theta$

░░░░ ░░░░ ░░░░ unit circle (where $r = 1$). ░░░░ by ░░░░ $\cos\theta = \dfrac{x}{r}$ and $\sin\theta = \dfrac{y}{r} \quad \blacksquare$

░░░░ $r = \sqrt{x^2 + y^2}$ ░░░░ $\theta = \tan^{-1}(\dfrac{y}{x})$ 

░░░░ definitions ░░░░ ░░░░

$$
\begin{aligned}
r &= \sqrt{x^2 + y^2} \\
&= \sqrt{(r\cos\theta)^2 + (r\sin\theta)^2} \\
&= \sqrt{r^2(\cos^2\theta + \sin^2\theta)} \\
&= \sqrt{r^2 \cdot 1} \\
&= r \quad \blacksquare
\end{aligned}
$$
Since $\arctan$ doesn't distinguish between ░░░░ ░░░░ need ░░░░ ░░░░ ░░░░ conditions,

If $x > 0$░░░░ $\theta = arctan(y/x)$░░░░
If $x < 0$, $\theta = \arctan(y/x) + \pi$.
░░░░ $x = 0$ ░░░░ $y > 0$░░░░ $\theta = \pi / 2$.
░░░░ $x = 0$ and $y < 0$, $\theta$ = $-\pi/2 \quad \blacksquare$

#### Ex-$43$:

##### (a) Prove that the unit vector r of two-dimensional polar coordinates is equal to $$\hat{\bm{r}} = \hat{\bm{x}}cos\phi + \hat{\bm{y}} sin\phi$$and find a corresponding expression for $\hat{\bm{\phi}}$.

We know ░░░░ ░░░░ point $(r, \ \phi)$ in ░░░░ is related ░░░░ ░░░░ coordinates $(x, \ y)$ ░░░░ 

$$
x = r \cos \phi \\
y = r \sin \phi
$$
In ░░░░ if ░░░░ ░░░░ vector $\vec{r}$ is ░░░░ ░░░░ $$\bm{r} = \bm{r}_x \bm{\hat{x}} + \bm{r}_y\bm{\hat{y}}$$
Then we can represent ░░░░ unit vector as 

$$
\begin{aligned}
\hat{\bm{r}} &= \dfrac{\bm{r}}{|\bm{r}|} \\ \\[0.5pt]
&= \dfrac{\bm{r}_x\bm{\hat{x}} + \bm{r}_y\bm{\hat{y}}}{\sqrt{\bm{r}_x^2 + \bm{r}_y^2}} \\ \\[0.5pt]
\end{aligned}
$$
Substituting relations,

$$
\begin{aligned}
&= \dfrac{\bm{r}_x \cos\phi \bm{\hat{x}} + \bm{r}_y \cos\phi \bm{\hat{y}}}{r \sqrt{\cos^2\phi + \sin^2\phi}} \\ \\ \\[0.5pt]
\therefore \quad \cos\phi\bm{\hat{x}} + \sin\phi\bm{\hat{y}} \quad \blacksquare
\end{aligned}
$$
Rotating $\hat{\bm{r}}$ $90^\circ$ ░░░░ we ░░░░

$$\hat{\bm{\phi}} = -\sin\phi\hat{\bm{x}} + \cos\phi\bm{\hat{y}} \quad \blacksquare$$

##### (b) Assuming that $\phi$ depends on the time $t$, differentiate your answers in 1-43a to give an alternative proof of the results (1.42) and (1.46) for the time derivatives of $\hat{\bm{r}}$ and $\hat{\bm{\phi}}$.

░░░░ ░░░░ to find $\bm{\dot{\hat{r}}}$ and $\bm{\dot{\hat{\phi}}}$. ░░░░ with ░░░░ former ░░░░ ░░░░ $\phi$ ░░░░ $\phi(t)$░░░░

$$
\begin{aligned}
\frac{d\hat{\bm{r}}}{dt} &= \frac{d}{dt}(\cos\phi\bm{\hat{x}} + \sin\phi\bm{\hat{y}}) \\ \\[0.5pt]
&= (-\sin\phi \dot{\phi})\bm{\hat{x}} + (\cos\phi \dot{\phi})\bm{\hat{y}} \\ \\[0.5pt]
&= \dot{\phi}(-\sin\phi\bm{\hat{x}} + \cos\phi\bm{\hat{y}}) \\ \\
\therefore \quad \dot{\hat{r}} = \dot{\phi}\bm{\hat{\phi}} \quad \blacksquare
\end{aligned}
$$
░░░░ we ░░░░ ░░░░ $\bm{\dot{\hat{\phi}}}$░░░░

$$
\begin{aligned}
\frac{d\hat{\bm{\phi}}}{dt} &= \frac{d}{dt}(-\sin\phi\bm{\hat{x}} + \cos\phi\bm{\hat{y}}) \\ \\[0.5pt]
&= (-\cos\phi \dot{\phi})\bm{\hat{x}} + (-\sin\phi \dot{\phi})\bm{\hat{y}} \\ \\[0.5pt]
&= -\dot{\phi}(\cos\phi\bm{\hat{x}} + \sin\phi\bm{\hat{y}}) \\ \\
\therefore \quad \dot{\hat{\phi}} = -\dot{\phi}\hat{r} \quad \blacksquare
\end{aligned}
$$

#### Ex-$45$: Prove that if $\bm{v}(t)$ is any vector that depends on time (for example the velocity of a moving particle) but which has constant magnitude, then $\bm{\dot{v}}(t)$ is orthogonal to $\bm{v}(t)$. Prove the converse that if $\bm{\dot{v}}(t)$ is orthogonal to $\bm{v}(t)$, then $|\bm{v}(t)|$ is constant. [Hint: Consider the derivative of $\bm{v}^2$.] This is a very handy result. It explains why, in two-dimensional polars, $\bm{\dot{\hat{r}}}$ has to be in the direction of $\bm{\hat{\phi}}$ and vice versa. It also shows that the speed of a charged particle in a magnetic field is constant, since the acceleration is perpendicular to the velocity.

░░░░ $|\bm{v}(t)|$ ░░░░ ░░░░ $|\bm{v^2}(t)|$ is ░░░░ as ░░░░ alongside all ░░░░ derivatives. ░░░░ start ░░░░ ░░░░ derivative,

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

Hence, ░░░░ $\bm{\dot{v}}(t) \cdot \bm{v}(t) = 0$, $\bm{\dot{v}}(t)$ ░░░░ ░░░░ ░░░░ $\bm{v}(t)$. $\blacksquare$

Taking ░░░░ ░░░░ at our ░░░░ ░░░░ $\dot{v^2}(t)$░░░░ ░░░░ can ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ $\dot{v^2}(t) = 0 \ \implies \dot{v}(t) = 0 \ \implies |\bm{v}(t)| = constant \quad \blacksquare$

#### Ex-$47$: Let the position of a point $P$ in three dimensions be given by the vector $\bm{r} = (x, \ y, \ z)$ in Cartesian coordinates. The same position can be specified by cylindrical polar coordinates, $(\rho, \ \phi,\ z)$ which are defined as follows: Let $P'$ denote the projection of $P$ onto the xy plane; that is, $P'$ has Cartesian coordinates $(x, y, 0)$. Then $\rho$ and $\phi$ are defined as the two-dimensional polar coordinates of $P'$ in the $xy$ plane, while $z$ is the third Cartesian coordinate, unchanged. 

##### (a) Make a sketch to illustrate the three cylindrical coordinates. Give expressions for $\rho$, $\phi$, $z$ in terms of the Cartesian coordinates $x$, $y$, $z$. Explain in words what $\rho$ is ("$\rho$ is the distance of $P$ from $?$"). There are many variants in notation. For instance, some people use $r$ instead of $\rho$. Explain why this use of $\bm{r}$ is unfortunate. 

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ express $\rho$ ($z$ ░░░░ untouched) 

$$\rho = \sqrt{x^2 + y^2} \quad \blacksquare$$

For $\phi$, we ░░░░ to consider ░░░░ ░░░░ as ░░░░

$$\phi = \arctan(y / x) \quad \blacksquare$$

##### (b) Describe the three unit vectors $\hat{\bm{\rho}}, \ \hat{\bm{\phi}}, \ \hat{\bm{z}}$ and write the expansion of the position vector $\bm{r}$ in terms of these unit vectors. 

$\hat{\bm{\rho}}$ ░░░░ ░░░░ ░░░░ $z$ ░░░░ to ░░░░ ░░░░ $P$░░░░ ░░░░ to ░░░░ $xy$-slice. $\hat{\bm{\phi}}$ ░░░░ the ░░░░ vector tangential ░░░░ the ░░░░ $xy$░░░░ along the ░░░░ of motion. $\hat{\bm{z}}$ remains untouched. Then,

$$\bm{r} = \rho \hat{\bm{\rho}} + z \hat{\bm{z}} \quad \blacksquare$$

##### (c) Differentiate your last answer twice to find the cylindrical components of the acceleration $\bm{a} = \ddot{\bm{r}}$ of the particle. To do this, you will need to know the time derivatives of $\hat{\bm{\rho}}$ and $\hat{\bm{\phi}}$.

░░░░ ░░░░ to differentiate $\bm{r}$ twice,

$$
\begin{aligned}
\dfrac{d^2\bm{r}}{dt^2} = \ddot{\bm{r}} &= \dfrac{d^2}{dt^2}(\rho \hat{\bm{\rho}} + z \hat{\bm{z}}) \\ \\[0.5pt]
\end{aligned}
$$

We ░░░░ with $\bm{r}$░░░░

$$
\begin{aligned}
\dot{\bm{r}} &= \dfrac{d}{dt}(\rho \hat{\bm{\rho}} + z \hat{\bm{z}}) \\ \\[0.5pt]
&= (\dot{\rho}\hat{\bm{\rho}} + \rho \dot{\hat{\bm{\rho}}} + \dot{z}\hat{\bm{z}} + z \dot{\hat{\bm{z}}}) \\ \\[0.5pt]
\end{aligned}
$$

We ░░░░ $\dot{\hat{\bm{\rho}}}$ ░░░░ $\dot{\hat{\bm{\phi}}}$, starting with $\dot{\hat{\bm{\rho}}}$░░░░

$$
\begin{aligned}
\dot{\hat{\bm{\rho}}} &= \frac{d}{dt} (\cos \phi \, \hat{\bm{x}} + \sin \phi \, \hat{\bm{y}}) \\ \\[0.5pt]
&= \frac{d (\cos \phi)}{dt} \, \hat{\bm{x}} + \frac{d (\sin \phi)}{dt} \, \hat{\bm{y}} \\ \\[0.5pt]
&= -\sin \phi \, \dot{\phi} \, \hat{\bm{x}} + \cos \phi \, \dot{\phi} \, \hat{\bm{y}} \\ \\[0.5pt]
&= \dot{\phi} \, (-\sin \phi \, \hat{\bm{x}} + \cos \phi \, \hat{\bm{y}}) \\ \\[0.5pt]
&= \dot{\phi} \, \hat{\bm{\phi}}
\end{aligned}
$$

Since 

$$\sin\phi \bm{\hat{x}} + \cos \phi \bm{\hat{y}} = \hat{\bm{\phi}} \quad \implies \quad \dot{\hat{\bm{\rho}}} = \dot{\phi} \bm{\hat{\phi}}$$

░░░░ ░░░░ get ░░░░ $\dot{\hat{\bm{\phi}}}$░░░░

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
░░░░ getting ░░░░ ░░░░ ░░░░ ░░░░ ░░░░

$$
\begin{aligned}
\ddot{\bm{r}} &= \frac{d}{dt} (\dot{\rho} \hat{\rho} + \rho \dot{\phi} \hat{\phi} + \dot{z} \hat{z}) \\ \\[0.5pt]
&= \frac{d}{dt} (\dot{\rho} \hat{\rho}) + \frac{d}{dt} (\rho \dot{\phi} \hat{\phi}) + \frac{d}{dt} (\dot{z} \hat{z}) \\ \\[0.5pt]
&= (\ddot{\rho} \hat{\rho} + \dot{\rho} \dot{\phi} \hat{\phi}) + (\dot{\rho} \dot{\phi} \hat{\phi} + \rho \ddot{\phi} \hat{\phi} - \rho \dot{\phi}^2 \hat{\rho}) + \ddot{z} \hat{z} \\ \\
\therefore \quad \ddot{\bm{r}} = (\ddot{\rho} - \rho \dot{\phi}^2) \hat{\bm{\rho}} + (2 \dot{\rho} \dot{\phi} + \rho \ddot{\phi}) \hat{\bm{\phi}} + \ddot{z} \hat{\bm{z}} \quad \blacksquare
\end{aligned}
$$

#### Ex-$49$: Imagine two concentric cylinders, centered on the vertical $z$ axis, with radii $R ± \epsilon$, where $\epsilon$ is very small. A small frictionless puck of thickness $2\epsilon$ is inserted between the two cylinders, so that it can be considered a point mass that can move freely at a fixed distance from the vertical axis. If we use cylindrical polar coordinates $(\rho, \ \phi, \ z)$ for its position (1.47), then $\rho$ is fixed at $\rho = R$. while $\phi$ and $z$ can vary at will. Write down and solve Newton's second law for the general motion of the puck, including the effects of gravity. Describe the puck's motion.

Given conditions: $\rho$ = $R$ (constant), $\dot{\rho}$ ░░░░ $\ddot{\rho}$ ░░░░ $0$.

░░░░ only ░░░░ ░░░░ ░░░░ gravity: $F = -mg\hat{\bm{z}}$

░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░ previous ░░░░
$$\ddot{\mathbf{r}} = (\ddot{\rho} - \rho \dot{\phi}^2) \hat{\boldsymbol{\rho}} + (2 \dot{\rho} \dot{\phi} + \rho \ddot{\phi}) \hat{\boldsymbol{\phi}} + \ddot{z} \hat{\mathbf{z}}$$
░░░░ with our ░░░░ conditions:
$$\ddot{\bm{r}} = -R \dot{\phi}^2 \hat{\bm{\rho}} + R \ddot{\phi} \hat{\bm{\phi}} + \ddot{z} \hat{\bm{z}}$$