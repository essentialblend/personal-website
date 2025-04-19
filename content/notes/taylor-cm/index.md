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

Newton's three laws of motion are formulated in terms of four crucial underlying concepts: the notions of _space_, _time_, _mass_, and _force_. We begin by reviewing space and time.

##### Space 

Each point $P$ of the three-dimensional space we live in can be labeled by a position vector $\bf{r}$ which specifies the distance and direction of $P$ from a chosen origin $O$. The most natural way to identify a vector is in terms of its components, which are in the directions formed by our orthonormal basis. We can do this by introducing unit vectors for each of these coordinate axes.
$$\bf{r} = x\bf{\hat{x}} + y\bf{\hat{y}} + z\bf{\hat{z}} \tag{1.1}$$
For example, in traditional Cartesian coordinates, the vector $\bf{a} = (1, \ 1, \ 0)$ can be represented as

$$(1 \cdot (1, 0, 0)) + (1 \cdot (0, 1, 0)) + (0 \cdot (0, 0, 1)) = (1, 1, 0) = a$$

##### Differentiation of Vectors

Since most laws of physics involve vectors, they also imply _derivatives_ of these vectors. A simple case being the time derivative of a vector that depends on time, for e.g. the velocity $\bf{v}(t)$ of a particle is the time derivative of the particle's position $\bf{r}(t)$; that is, $\bf{v} = d\bf{r} / dt = \dot{r}$. Similarly, acceleration would then be the time derivative of the velocity, $\bf{a} = d\bf{v}/dt = \ddot{r}$.

A vector derivative is closely analogous to that of a scalar. Recall that if $x(t)$ is a scalar function of $t$, then its derivative is defined as,
$$\dfrac{dx}{dt} = \dot{x} = \lim_{\Delta t \rightarrow 0} \dfrac{\Delta x}{\Delta t} \tag{1.2}$$
where $\Delta x = x(t + \Delta t) - x(t)$ is the change in $x$ as the time advances from $t$ to $t + \Delta t$. Exactly in the same way, if $\bf{r}(t)$ is any vector that depends on $t$, we define its derivative as $$\dfrac{d\bf{r}}{dt} = \dot{\bf{r}} = \lim_{\Delta t \rightarrow 0} \dfrac{\Delta \bf{r}}{\Delta t} \tag{1.3}$$
where $$\Delta\bf{r} = \bf{r}(t + \Delta t) - \bf{r}(t) \tag{1.4}$$
is the corresponding change in $\bf{r}(t)$. We are not concerned about the existence of this limit for the moment, we can presume that all vectors we encounter are differentiable, and we can take this limit's existence for granted along with all the standard properties of derivatives (i.e. differentiation rules and properties).

For example, if $\bf{r}(t)$ and $\bf{s}(t)$ are two vector valued functions that depend on $t$, then the derivative of their sum is,

$$
\dfrac{d}{dt}(\bf{r} + \bf{s}) = \dot{\bf{r}} + \dot{\bf{s}} \tag{1.5}
$$
Similarly, if $\bf{r}(t)$ is a vector valued function, and $f(t)$ is a scalar valued function, then the derivative of the product $f(t)\bf{r}(t)$ is given by the appropriate version of the product rule,

$$
\dfrac{d}{dt}(f\bf{r}) = f\dot{\bf{r}} + \dot{f}\bf{r} \tag{1.6}
$$
One more result worth mentioning concerns the components of the derivative of the vector. Suppose $\bf{r}$, with components $x$, $y$, $z$ is the position of a moving particle, and we want to know its velocity $\bf{v} = \dot{\bf{r}}$. When we differentiate the sum,
$$\bf{r} = x\bf{\hat{x}} + y\bf{\hat{y}} + z\bf{\hat{z}} \tag{1.7}$$the rule (1.5) gives us the sum of the three separate derivatives, and by the product rule (1.6) each of these contain two terms, with $6$ terms in total. However the unit vectors $\hat{\bf{x}}$, $\hat{\bf{y}}$, $\hat{\bf{z}}$ do not depend on (or change with) time, so their derivatives are zero, and we're left with only three terms.

$$
\dot{\bf{r}} = \dot{x}\hat{\bf{x}} + \dot{y}\hat{\bf{y}} + \dot{z}\hat{\bf{z}} \tag{1.8}
$$
Comparing this with the standard expansion,

$$
\bf{v} = v_x\hat{\bf{x}} + v_y\hat{\bf{y}} + v_z\hat{\bf{z}} \tag{1.9}
$$
we see that,

$$
v_x = \dot{x}, \quad v_y = \dot{y}, \quad v_z = \dot{z} \tag{1.10}
$$
In words, the Cartesian components of $\bf{v}$ are just the derivatives of the corresponding components of $\bf{r}$. In many other coordinate systems, the coordinate unit vectors are not constant, and the result corresponding to 1.10 is much less transparent.

##### Time 

The classical view is that time is a single universal parameter $t$ on which all observers agree. That is, if all observers are equipped with accurate clocks, all properly synchronized, then they will agree as to the time at which any given event occurred. We know that this is not correct: according to the theory of relativity, two observers in relative motion do not agree on all times. Nevertheless, in the domain of classical mechanics, with all speeds much less than $c$, we can adopt the classical view of a single universal time.

##### Reference Frames

Almost every problem in classical mechanics involves a choice (explicit or implicit) of a reference frame, that is, a choice of spatial origin and axes to label positions, and a choice of temporal origin to measure times. The difference between two frames may be quite minor. For instance, they may differ only in their choice of the origin of time — what one frame labels $t = 0$ the other may label $t' = t_0 \neq 0$.

Or the two frames may have the same origins of space and time, but have different orientations of the three spatial axes. By carefully choosing your reference frame, taking advantage of these different possibilities, you can sometimes simplify your work. For example, in problems involving blocks sliding down inclines, it often helps to choose one axis pointing down the slope. A more important difference arises when two frames are in relative motion; that is, when one origin is moving relative to the other. We shall find that not all such frames are physically equivalent? In certain special frames, called inertial frames, the basic laws hold true in their standard, simple form. (It is because one of these basic laws is Newton's first law, the law of inertia, that these frames are called inertial.) If a second frame is accelerating or rotating relative to an inertial frame, then this second frame is non-inertial, and the basic laws — in particular, Newton's laws — do not hold in their standard form in this second frame. We shall find that the distinction between inertial and non-inertial frames is central to our discussion of classical mechanics. It plays an even more explicit role in the theory of relativity.

#### Mass and Force

##### Mass

The mass of an object characterizes the object's inertia—its resistance to being accelerated: A big boulder is hard to accelerate, and its mass is large. A little stone is easy to accelerate, and its mass is small. To make these natural ideas quantitative we have to define a unit of mass and then give a prescription for measuring the mass of any object in terms of the chosen unit. The internationally agreed unit of mass is
the kilogram and is defined arbitrarily to be the mass of a chunk of platinum—iridium stored at the International Bureau of Weights and Measures outside Paris. To measure the mass of any other object, we need a means of comparing masses. In principle, this can be done with an inertial balance. The two objects to be compared are fastened to the opposite ends of a light, rigid rod, which is then given a sharp pull at its midpoint. If the masses are equal, they will accelerate equally and the rod will move off without rotating; if the masses are unequal, the more massive one will accelerate less, and the rod will rotate as it moves off. The beauty of the inertial balance is that it gives us a method of mass comparison that is based directly on the notion of mass as resistance to being accelerated. In practice, an inertial balance would be very awkward to use, and it is fortunate that there are much easier ways to compare masses, of which the easiest is to weigh the objects. Since two objects have the same mass if and only if they have the same weight (when weighed at the same place), and a simple, practical way to check whether two masses are equal is simply to weigh them and see if their weights are equal.

Armed with methods for comparing masses, we can easily set up a scheme to measure arbitrary masses. First, we can build a large number of standard kilograms, each one checked against the original $1 \ \mathrm{kg}$ mass using either the inertial or gravitational balance. Next, we can build multiples and fractions of the kilogram, again checking them with our balance. (We check a $2 \ \mathrm{kg}$ mass on one end of the balance against two $1 \ \mathrm{kg}$ masses placed together on the other end; we check two half-kg masses by verifying that their masses are equal and that together they balance a $1 \ \mathrm{kg}$ mass; and so on.) Finally, we can measure an unknown mass by putting it on one end of the balance and loading known masses on the other end until they balance to any desired precision.

##### Force

The informal notion of force as a push or pull is a surprisingly good starting point. The two main tasks are to then, identify all the forces and then measure them. We can adopt the Newton (abbreviated $\bf{N}$) defined as the magnitude of any single force that accelerates a standard kilogram mass with an acceleration of $1 \ \mathrm{m / s^2}$. 

We can similarly describe the direction as one that of the resultant acceleration, that is, the direction in which the body sets off once force is exerted upon it.

Now we can study Newton's three laws of motion.

#### Newton's First and Second Laws; Inertial Frames

In this chapter, we discuss Newton's laws as they apply to point masses. A point mass, or particle, is a convenient fiction, an object with mass, but no size, that can move through space but has no internal degrees of freedom. It can have translational kinetic energy but no energy of rotation or of internal vibrations of deformations. Naturally, the laws of motion are simpler for point particles than for extended bodies, and is the reason why we start with point masses. 

_Newton's First Law_: **In the absence of forces, a particle moves with constant velocity $\bf{v}$.**

_Newton's Second Law_: **For any particle of mass $m$, the net force $\bf{F}$ on the particle is always equal to the mass $m$ times the particle's acceleration.**
$$\bf{F} = m\bf{a} \tag{1.11}$$
Since acceleration is the second derivative of position over time, we can state this as a second order differential equation,
$$\bf{F} = m\bf{a} = m\ddot{\bf{r}} \tag{1.12}$$
The second law can be rephrased in terms of the particle's _momentum_, defined as, $$\bf{p} = m\bf{v} \tag{1.13}$$
Since in classical mechanics, we take for granted that the mass $m$ remains constant, so that,

$$
\dot{\bf{p}} = m\bf{\dot{v}} = m\bf{a}
$$
$$\therefore \quad \bf{F} = \bf{\dot{p}} \tag{1.14}$$

##### Differential Equations

When written in the form $m\bf{\ddot{r}} = \bf{F}$, Newton's second law is a differential equation for the particle's position $\bf{r}(t)$. That is, it is an equation for the unknown function $\bf{r}(t)$ that involves derivatives of the unknown function. Almost all the laws of physics are, or can be cast as, differential equations, and a huge proportion of a physicist's time is spent solving these equations. In particular, most of the problems in this book involve differential equations — either Newton's second law or its counterparts in the Lagrangian and Hamiltonian forms of mechanics. These vary widely in their difficulty. Some are so easy to solve that one scarcely notices them. For example, consider Newton's second law for a particle confined to move along the $x$ axis and subject to a constant force $\bf{F}_0$,

$$\ddot{x}(t) = \dfrac{\bf{F}_0}{m}$$
This is a second order differential equation for $x(t)$ as a function of $t$. To solve it, we only need to integrate twice,

$$
\begin{aligned}
\int{\int{\ddot{x}(t)} \ dt} \ dt &= \int{\int{\dfrac{\bf{F}_0}{m}} \ dt} \ dt \\ \\[0.5pt]
\int{\dot{x}(t)} \ dt &= \int{\left(v_0 + \dfrac{\bf{F}_0}{m}t\right)} \ dt \\
\end{aligned}
$$
The first integration gives us the velocity where the constant of integration is the particle's initial velocity, and a second integration gives the position

$$x(t) = x_0 + v_0t + \dfrac{\bf{F}_0}{2m}t^2$$

where the second constant of integration is the particle's initial position.

##### Inertial Frames

On the face of it, Newton's second law includes his first: If there are no forces on an object, then $\bf{F} = 0$ and the second law (1.12) implies that $\bf{a} = 0$, which is the first law. There is, however, an important subtlety, and the first law has an important role to play. Newton's laws cannot be true in all conceivable reference frames. To see this, consider just the first law and imagine a reference frame — we'll call it $\mathscr{S}$ — in which the first law is true. For example, if the frame $\mathscr{S}$ has its origin and axes fixed relative to the earth's surface, then, to an excellent approximation, the first law (the law of inertia) holds with respect to the frame $\mathscr{S}$: A friction-less puck placed on a smooth horizontal surface is subject to zero force and, in accordance with the first law, it moves with constant velocity. Because the law of inertia holds, we call $\mathscr{S}$ an inertial frame. If we consider a second frame $\mathscr{S'}$ which is moving relative to $\mathscr{S}$ with constant velocity and is not rotating, then the same puck will also be observed to move with constant velocity relative to $\mathscr{S'}$. That is, the frame $\mathscr{S'}$ is also inertial.

If, however, we consider a third frame $\mathscr{S"}$ that is accelerating relative to $\mathscr{S}$, then, as viewed from $\mathscr{S"}$, the puck will be seen to be accelerating (in the opposite direction). Relative to the accelerating frame $\mathscr{S"}$ the law of inertia does not hold, and we say that $\mathscr{S"}$ is non-inertial. I should emphasize that there is nothing mysterious about this result. Indeed it is a matter of experience. The frame $\mathscr{S'}$ could be a frame attached to a high-speed train traveling smoothly at constant speed along a straight track, and the friction-less puck, an ice cube placed on the floor of the train, as in Figure 1.4. As seen from the train (frame $\mathscr{S'}$), the ice cube is at rest and remains at rest, in accord with the first law. As seen from the ground (frame $\mathscr{S}$), the ice cube is moving with the same velocity as the train and continues to do so, again in obedience to the first law.

But now consider conducting the same experiment on a second train (frame $\mathscr{S"}$) that is accelerating forward. As this train accelerates forward, the ice cube is left behind, and, relative to $\mathscr{S"}$, the ice cube accelerates backward, even though subject to no net force. Clearly the frame $\mathscr{S"}$ is non-inertial, and neither of the first two laws can hold in $\mathscr{S"}$. A similar conclusion would hold if the frame $\mathscr{S"}$ had been attached to a rotating merry-go-round. A friction-less puck, subject to zero net force, would not move in a straight line as seen in $\mathscr{S"}$, and Newton's laws would not hold.

Evidently Newton's two laws hold only in the special, inertial (non-accelerating and non-rotating) reference frames. Most philosophers of science take the view that the first law should be used to identify these inertial frames — a reference frame $\mathscr{S}$ is inertial if objects that are clearly subject to no forces are seen to move with constant velocity relative to $\mathscr{S}$. Having identified the inertial frames by means of Newton's first law, we can then claim as an experimental fact that the second law holds in these same inertial frames.

### The Third Law and Conservation of Momentum

Newton's first two laws concern the response of a single object to applied forces. The third law addresses a quite different issue: Every force on an object inevitably involves a second object — the object that exerts the force. The nail is hit by the hammer, the cart is pulled by the horse, and so on. While this much is no doubt a matter of common sense, the third law goes considerably beyond our everyday experience. Newton realized that if an object $1$ exerts a force on another object $2$, then object $2$ always exerts a force (the "reaction" force) back on object $1$. This seems quite natural: If you push hard against a wall, it is fairly easy to convince yourself that the wall is exerting a force back on you, without which you would undoubtedly fall over. The aspect of the third law which certainly goes beyond our normal perceptions is this:

According to the third law, the reaction force of object $2$ on object $1$ is always equal and opposite to the original force of $1$ on $2$. If we introduce the notation $\bf{F}_{21}$ to denote the force exerted on object $2$ by object $1$, Newton's third law can be stated very compactly:

_Newton's Third Law_: **If object $1$ exerts a force $\bf{F}_{21}$ on object $2$, then object $2$ always exerts a reaction force $\bf{F}_{12}$ on object $1$:** $$\bf{F}_{12} = - \bf{F}_{21} \tag{1.15}$$

### Proof for the Conservation of Momentum

We need to show that the net force ($\bf{F}$) applied on an object is proportional to the rate of change of that object's momentum with respect to time ($\bf{\dot{p}}$).

Newton's second law: $\bf{F} = m\bf{a}$, and $\bf{p} = m \bf{v}$.

Differentiating both sides of $\bf{p} = m \bf{v}$ with respect to $t$, presuming constant mass($m$):

$$
\begin{aligned}
\frac{d\bf{p}}{dt} = \dot{\bf{p}} &= \frac{d}{dt}(m\bf{v})\\
&= m \ \frac{dv}{dt} \\
&= m \bf{a}\\\\
\therefore \quad \bf{F} = \dot{\bf{p}}
\end{aligned}
$$
With this lemma, we can proceed with the main proof.

We imagine two point particles $p_1$ and $p_2$, exerting a force on each other $\bf{F_{21}}$ and $\bf{F_{12}}$ respectively. 

We approximate any and all external forces on these two particles as $\bf{F^{ext}_{1}}$ and $\bf{F^{ext}_{2}}$. We have,

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
The total momentum in our 2-particle system is,

$$
\bf{P}_{t} = \bf{p}_1 + \bf{p}_2 \\
$$

Differentiating both sides with respect to time,

$$
\begin{aligned}
\dot{\bf{P}_{t}} &= \dot{\bf{p}_1} + \dot{\bf{p}_2}\\ \\[0.5pt]
\dot{\bf{P}_{t}} &= \bf{F_{12}} + \bf{F_{21}} + F^{ext}_1 + F^{ext}_2 \\
\end{aligned}
$$
Since $\bf{F_{12}} = - \bf{F_{21}}$, and combining external forces with $\bf{F_{ext}}$,

$$
\dot{\bf{P}_{t}} = \bf{F}_{ext}
$$
This important result demonstrates that the rate of change of momentum ($\dot{\bf{P}}_{t}$) of our two-particle system, is proportional only to the external force(s) being acted upon both particles. 

In the special case $\bf{F}_{ext} = 0$,

$$\dot{\bf{P}}_{t} = constant \quad \blacksquare$$

Newton's third law is intimately related to the law of conservation of momentum. 
In the absence of external forces, the total momentum of our two-particle system is constant - a result called the principle of conservation of momentum.

##### Validity of Newton's Third Law

T.B.D after covering electromagnetism.

### Newton's Second Law in Cartesian Coordinates

Of Newton's three laws, the one that we actually use the most is the second, which is often described as the equation of motion. As we have seen, the first is theoretically important to define what we mean by inertial frames but is usually of no practical use beyond this. The third law is crucially important in sorting out the internal forces in a multi-particle system, but, once we know the forces involved, the second law is what we actually use to calculate the motion of the object or objects of interest. In particular, in many simple problems the forces are known or easily found, and, in this case, the second law is all we need for solving the problem. We already know that, $$\bf{F} = m\ddot{\bf{r}}$$
is a second order vector differential equation for the position vector $\bf{r}$ as a function of time $t$. In the prototypical problem, the forces that comprise $\bf{F}$ are given, and our job is to solve this differential equation for $\bf{r}(t)$, and we have to use it to find some of the forces. The simplest way to solve such equations is almost always to resolve the vectors into their components relative to our desired coordinate system. 

Lets see this in action by deriving Newton's second law in Cartesian coordinates, for a conceptually simple case. The net force can be written as,

$$\bf{F} = F_x\hat{\bf{x}} + F_y\hat{\bf{y}} + F_z\hat{\bf{z}} \tag{1.19}$$
and the position vector $\bf{r}$ as 

$$\bf{r} = x\hat{\bf{x}} + y\hat{\bf{y}} + z\hat{\bf{z}} \tag{1.20}$$
As noted in [Section 1.1](#space-and-time), this expansion of $\bf{r}$ in terms of its Cartesian components is especially easy to differentiate because the unit vectors $\bf{\hat{x}}$, $\bf{\hat{y}}$, and $\bf{\hat{z}}$ are constant. Thus we can differentiate (1.20) twice to get the simple result,

$$\bf{\ddot{r}} = \ddot{x} \bf{\hat{x}} + \ddot{y} \bf{\hat{y}} + \ddot{z} \bf{\hat{z}} \tag{1.21}$$
That is, the three Cartesian components of $\bf{\ddot{r}}$ are just the appropriate derivatives of the three coordinates $x$, $y$, $z$ of $\bf{r}$ and the second law then becomes,

$$F_x\bf{\hat{x}} + F_y\bf{\hat{y}} + F_z\bf{\hat{z}} = m\ddot{x}\bf{\hat{x}} + m\ddot{y}\bf{\hat{y}} + m\ddot{z}\bf{\hat{z}} \tag{1.22}$$ Resolving this equation into its three separate components, we see that $F_x$ has to equal $m\ddot{x}$ and similarly for the $y$ and $z$ components. That is in Cartesian coordinates, the single vector equation 1.30 is equivalent to the three separate equations:

$$
\bf{F} = m\bf{\ddot{r}} \iff \begin{cases}
F_x = m\ddot{x}\\
F_y = m\ddot{y}\\
F_z = m\ddot{z}\\
\end{cases} \tag{1.23}
$$
This elegant result in Cartesian coordinates for Newton's second law in three dimensions is equivalent to three one-dimensional versions of the same law. We can generalize this derivation for n-dimensional systems.

We represent a position in n-dimensional Cartesian space using vectors,

$$
\tag{1.1} \bf{r} = \sum_{k = 0}^{n - 1} l_k  \bf{\hat{i}_k}  
$$

where the coefficients $l_k$ vary over time. We can represent the net force in terms of the unit axes,

$$\bf{F} = \sum_{k = 0}^{n - 1}F_k \bf{\hat{i}_k} = m \sum_{k = 0}^{n - 1}\ddot{l}_k \bf{\hat{i}_k} = m\bf{\ddot{r}}$$
Since acceleration is the second derivative of the position with respect to time, we differentiate $1.1$ first to get the velocity,

$$
\begin{aligned}
\dfrac{d\bf{r}}{dt} &= \bf{\dot{r}} = \dfrac{d}{dt}\left(\sum_{k = 0}^{n - 1} l_k \bf{\hat{i}_k}\right) \\ \\[0.1pt]
&= \sum_{k = 0}^{n - 1}\dfrac{d}{dt}(l_k \bf{\hat{i}_k}) \\
\end{aligned}
$$
Applying the product rule ($\frac{d}{dt}(fg) = \dot{f}g + f\dot{g}$) and simplifying. Since the coordinate vectors do not vary with time, their derivatives are $0$, with $n - 1$ terms to spare.

$$
\begin{aligned}
= \sum_{k = 0}^{n - 1} \left(\dfrac{dl_k}{dt}\bf{\hat{i}_k} + l_k\dfrac{d\bf{\hat{i}_k}}{dt}\right)
\end{aligned}
$$
$$\tag{1.2} \therefore \quad \bf{v}(t) = \sum_{k = 0}^{n - 1}(\dot{l}_k \bf{\hat{i}_k})$$

where $\dot{l}_k$ is the time derivative of $l_k$ $(dl_k/dt)$. Similarly, we differentiate $\bf{v}(t)$ to get $\bf{a}(t)$,

$$
\begin{aligned}
	\dfrac{d\bf{v}}{dt} &= \bf{\dot{v}} = \dfrac{d}{dt}\sum_{k = 0}^{n - 1}(\dot{l}_k \bf{\hat{i}_k})
\end{aligned}
$$
$$\therefore \quad \bf{a}(t) = \sum_{k = 0}^{n - 1}(\ddot{l}_k \bf{\hat{i}_k}) \tag{1.3}$$
Finally, we have$$\boxed{\bf{F} = m\bf{\ddot{r}} \quad \iff \quad \sum_{k = 0}^{n - 1}F_k \bf{\hat{i}_k} \quad \iff \quad m\sum_{k = 0}^{n - 1}\ddot{r}_k\bf{\hat{i}_k} \quad \blacksquare}$$

### Two-Dimensional Polar Coordinates

While Cartesian coordinates have the merit of simplicity, we are going to find that it is almost impossible to solve certain problems without the use of various non-Cartesian coordinate systems. To illustrate the complexities of non-Cartesian coordinates, let us consider the form of Newton's second law in a two-dimensional setting using polar coordinates. Instead of using the two rectangular coordinates $x$, $y$, we label the position of a particle with its distance $r$ from the origin and the angle $\phi$ measured counter-clockwise about the $x$-axis.

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

We can also express the position vector as a complex number using Euler's equations,$$z = x + iy = r(\cos\phi + i\sin\phi) = re^{-i\phi} \tag{1.2}$$and the complex conjugate of this complex number is,$$\bar{z} = r(\cos\phi - i\sin\phi) = re^{-i\phi} \tag{1.3}$$We can add and subtract $1.2$ and $1.3$ resp. to get some important identities,

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

Along with Euler's important identities bridging analysis and trigonometry which can be derived in many ways, easiest of them being a Taylor series expansion of $e^x$. For completeness, we first derive $e^{i\phi}$. We can use the Maclaurin Series (expansion around $x = 0$),

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

When we expand, we end up with alternating (odd and even) terms where the $i^2 = 1$ cancels out. We replace $n = 2k$,

$$
\begin{aligned}
	&= \sum_{k = 0}^{\infty}\dfrac{(i\theta)^{2k}}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{(i\theta)^{2k + 1}}{(2k + 1)!} \\ \\[0.1pt]
	&= \sum_{k = 0}^{\infty}\dfrac{(i^{2k}\theta^{2k})}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{(i^{2k + 1}\theta^{2k + 1})}{(2k + 1)!} \\ \\[0.1pt]
	&= \sum_{k = 0}^{\infty}\dfrac{(-1)^k\theta^{2k}}{(2k)!} + \sum_{k = 0}^{\infty}\dfrac{i(-1)^k \theta^{2k + 1}}{(2k + 1)!} \\ \\[0.1pt]
\end{aligned}
$$

These two terms are Taylor series expansions for $\cos\theta$ and $\sin\theta$ respectively, 

$$
\begin{align*}
	&= \sum_{k = 0}^{\infty}\dfrac{(-1)^k\theta^{2k}}{(2k)!} + i\left(\sum_{k = 0}^{\infty}\dfrac{(-1)^k \theta^{2k + 1}}{(2k + 1)!}\right) \\ \\[0.1pt]
\tag{1.6} \therefore \quad e^{i\theta} &= \cos\theta + i\sin\theta \quad \blacksquare
\end{align*}
$$

With this derivation, we conclude with the identities,

$$
\begin{align*}
\tag{1.7} e^{i\phi} &= \cos\phi + i\sin\phi\\
\tag{1.8} e^{-i\phi} &= \cos\phi - i\sin\phi\\
\end{align*}
$$

Akin to the Cartesian derivation, we differentiate the position vector to get velocity and acceleration (as $\bf{F} = m \bf{a}$). Any position vector can be represented as,$$\bf{r} = r \bf{\hat{r}} \tag{1.9}$$
where $r$ is the radial distance, and $\bf{\hat{r}}$ is the unit vector in the direction of $r$. When we differentiate, we will pick up terms involving derivatives for $\bf{\hat{r}}$ and $\bf{\hat{\phi}}$. So we first turn our attention towards finding these. We first derive these geometrically, and then discuss an alternate algebraic derivation.

Lets consider $\Delta \bf{\hat{r}}$ from fig. b traced by the vector $r$ as it goes from $t_1$ to $t_2$. The unit vector $\bf{\hat{r}}$ points in different directions. Since the length of this unit vector does not change, we sweep an arc along the direction of $\bf{\hat{\phi}}$, which approximately reduces to the tangent $\Delta \bf{\hat{r}}$ as $\Delta t \rightarrow 0$. We begin with the observation that $\Delta\bf{\hat{r}}$ is proportional to $\Delta\phi$ along $\bf{\hat{\phi}}$,

$$
\begin{align*}
\tag{1.10} \Delta \bf{\hat{r}} &\propto \Delta\phi \bf{\hat{\phi}}\\
\end{align*}
$$

We need to relate this angular change $\Delta \phi$ with time, in the case of infinitesimal $\Delta t$, we have

$$
\begin{align*}
	\dot{\phi} &= \dfrac{d\phi}{dt} \\ \\[0.1pt]
	\tag{1.11} \Delta\phi &\approx \dot{\phi} \ \Delta t
\end{align*}
$$

Substituting $1.11$ back into $1.10$,

$$
\begin{align*}
\Delta \bf{\hat{r}} &\approx \dot{\phi} \Delta t \bf{\hat{\phi}}
\end{align*}
$$

In the limit $\Delta t \rightarrow 0$ $\iff$ $\Delta \bf{\hat{r}}/\Delta t \rightarrow d\bf{\hat{r}}/dt$, dividing both sides by $\Delta t$ gives us the time-derivative of $\bf{\hat{r}}$ that we need,

$$
\begin{align*}
\lim_{\Delta t \rightarrow 0} \dfrac{\Delta \bf{\hat{r}}}{\Delta t} &\approx \lim_{\Delta t \rightarrow 0} \dfrac{\dot{\phi} \Delta t \bf{\hat{\phi}}}{\Delta t} \\ \\[0.1pt]
\tag{1.12} \therefore \quad \dfrac{d\bf{\hat{r}}}{dt} = \bf{\dot{\hat{r}}} &= \dot{\phi}\bf{\hat{\phi}}
\end{align*}
$$

We can use the exact same argument to find $\bf{\dot{\hat{\phi}}}$, and since $\bf{\hat{\phi}}$ is orthogonal to $\bf{\hat{r}}$ as it rotates counterclockwise towards $-\bf{\hat{r}}$, we have

$$
\begin{align*}
\tag{1.13} \dfrac{d\bf{\hat{\phi}}}{dt} &= \bf{\dot{\hat{\phi}}} = - \dot{\phi}\bf{\hat{r}}
\end{align*}
$$

Now, we turn to an alternate algebraic derivation for the time derivative $\bf{\dot{\hat{r}}}$. We can represent $\bf{\hat{r}}$ and $\bf{\hat{\phi}}$ in terms of their Cartesian counterparts $\bf{\hat{i}}$ and $\bf{\hat{j}}$, as evident from the geometry,

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

Substituting $1.14$ back we get $\bf{\dot{\hat{r}}}$. Following the same process for $\bf{\dot{\hat{\phi}}}$, we get the equivalent equations from $1.12$ and $1.13$,

$$
\begin{align*}
\bf{\dot{\hat{r}}} &= \dot{\phi} \bf{\hat{\phi}} \\ \\[0.1pt]
\bf{\dot{\hat{\phi}}} &= -\dot{\phi} \bf{\hat{r}}
\end{align*}
$$

Now, having evaluated these derivatives both algebraically and geometrically, we can return to our main proof, differentiating $1.9$ to derive Newton's second equation in polar coordinates.

$$
\begin{align*}
	\bf{r} &= r \bf{\hat{r}} \\ \\[0.1pt]
	\dfrac{d\bf{r}}{dt} &= \dfrac{d(r \bf{\hat{r}})}{dt} \\ \\[0.1pt]
	&= \bf{\dot{r}} \bf{\hat{r}} + r \dot{\bf{\hat{r}}}
\end{align*}
$$

Substituting our equation for $\dot{\bf{\hat{r}}}$ from $1.12$,

$$
\begin{align*}
\tag{1.16} \bf{v} = \dot{\bf{r}} \bf{\hat{r}} + r \dot{\phi} \bf{\hat{\phi}} 
\end{align*}
$$

We can evaluate the velocity over the polar components, $\bf{v}_r = \bf{\dot{r}}$ and $\bf{v}_\phi = r\dot{\phi}$. Now we differentiate $1.16$ to get $\bf{\ddot{r}}$, 

$$
\begin{align*}
\dfrac{d\bf{v}}{dt} &= \dfrac{d}{dt}(\dot{\bf{r}} \bf{\hat{r}} + r \dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \dfrac{d}{dt}(\dot{\bf{r}} \bf{\hat{r}}) + \dfrac{d}{dt}(r \dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\bf{\dot{\hat{r}}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\dfrac{d}{dt}(\dot{\phi} \bf{\hat{\phi}}) \\ \\[0.1pt]
&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\bf{\dot{\hat{r}}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} + r\dot{\phi}\bf{\dot{\hat{\phi}}}
\end{align*}
$$

Substituting the derivatives from $1.12$ and $1.13$,

$$
\begin{align*}
	&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} + r\dot{\phi}(-\dot{\phi} \bf{\hat{r}}) \\ \\[0.1pt]
	&= \ddot{\bf{r}}\bf{\hat{r}} + \dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + \dot{r}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} - r\dot{\phi}^2\bf{\hat{r}} \\ \\[0.1pt]
	&= \ddot{\bf{r}}\bf{\hat{r}} - r\dot{\phi}^2\bf{\hat{r}} + 2\dot{\bf{r}}\dot{\phi} \bf{\hat{\phi}} + r\ddot{\phi}\bf{\hat{\phi}} \\ \\[0.1pt]
	\therefore \quad \bf{a} &= (\ddot{\bf{r}} - r\dot{\phi}^2)\bf{\hat{r}} + (2\dot{\bf{r}}\dot{\phi} + r\ddot{\phi})\bf{\hat{\phi}}
\end{align*}
$$

giving us our acceleration along the two polar coordinates. Since we can represent the net force $\bf{F}$ as a sum of component forces along our orthonormal basis,

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