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

### Selected Exercises

#### Ex-$28$: Prove Conservation of Momentum for a multi-particle system with $N = 3$.

Lets consider a system of $N$ particles, where we label the typical particle with a Greek index $\alpha$ or $\beta$. The mass of particle $\alpha$ is $m_{\alpha}$ and its momentum is $\bf{p_{\alpha}}$. 

For e.g., particle $\alpha$ experiences forces exerted by $\beta$ and $\gamma$ ($\bf{F_{\alpha\beta}}$, $\bf{F_{\alpha\gamma}}$) alongside some net external force $\bf{F^{ext}_{\alpha}}$. Thus the net force on $\alpha$ is,

$$
\bf{F_{\alpha}} = \sum_{\beta \neq \alpha} \bf{F_{\alpha \beta}} + \bf{F^{ext}_{\alpha}}
$$
We also know that $\bf{F} = \dot{\bf{p}} = m\bf{a}$,

$$
\dot{\bf{p_{\alpha}}} = \sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \bf{F^{ext}_{\alpha}}
$$
This expression is valid for all $N$ particles. Now, we consider the total momentum of the system,

$$
\bf{P} = \sum_{\alpha = 1}^{N} \bf{p_{\alpha}}
$$
Differentiating with respect to time and substituting $\dot{\bf{p_{\alpha}}}$

$$
\begin{aligned}
\dot{\bf{P}} &= \sum_{\alpha = 1}^{N} \dot{\bf{p_{\alpha}}} \\
\dot{\bf{P}} &= \sum_{\alpha = 1}^{N} \left(\sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \bf{F^{ext}_{\alpha}}\right) \\
&= \sum_{\alpha = 1}^{N} \sum_{\phi \neq \alpha} \bf{F_{\alpha \phi}} + \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \\
&= \sum_{\alpha} \sum_{\phi \neq \alpha}(\bf{F_{\alpha \phi}} + \bf{F_{\phi \alpha}}) + \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \\\\
\therefore \quad \dot{\bf{P}} = \sum_{\alpha = 1}^{N} \bf{F^{ext}_{\alpha}} \equiv \bf{F^{ext}}
\end{aligned}
$$

This clearly demonstrates that the internal forces of all the particles don't affect the evolution of the total momentum ($\bf{P}$). The rate of change of $\bf{P}$ is determined _only_ by the net _external_ force on the system. In the case where this net external force is zero, $\dot{\bf{P}} = constant$! $\blacksquare$

#### Ex-$31$: Show the converse of the Conservation of Momentum for a 2-particle system. That is, show that $\bf{F_{12}} = \bf{F_{21}}$.

We start with two particles $\alpha$ and $\beta$, the forces acting on them are $\bf{F_{\alpha \beta}}$ and $\bf{F_{\beta \alpha}}$. Excluding any external forces, we have, 

$$
\bf{F} = \bf{F_{\alpha \beta}} + \bf{F_{\beta \alpha}}
$$
We know that $\bf{F} = \dot{\bf{p}}$, we have $\dot{\bf{p_1}} = \bf{F_{\alpha \beta}}$ and $\dot{\bf{p_2}} = \bf{F_{\beta \alpha}}$. The total momentum of this system is then,

$$
\bf{P} = \bf{p_1} + \bf{p_2}
$$
We know that $\bf{\dot{P}} = 0 = constant$, differentiating both sides with respect to $t$,

$$
\begin{aligned}
\frac{d}{dt}(\bf{p_1} + \bf{p_2}) &= 0 \\\\[1pt]
\dot{\bf{p_1}} + \dot{\bf{p_2}} \equiv \bf{F_{\alpha\beta}} + \bf{F_{\beta\alpha}} &= 0 \\\\[1pt]
\therefore \quad \bf{F_{\alpha\beta}} = \bf{- F_{\beta\alpha}} \quad \blacksquare
\end{aligned}
$$

#### Ex-$35$: A golf ball is hit from ground level with speed $v_0$ in a direction that is due east and at an angle $\theta$ above the horizontal. Neglecting air resistance, use Newton’s second law to find the position as a function of time, using coordinates with $x$ measured east, $y$ north, and $z$ vertically up. Find the time for the golf ball to return to the ground and how far it travels in that time.

We need to find $\bf{r_{puck}}(t) = \{\bf{r_x}(t), \ 0, \ \bf{r_z(t)} \}$. We can start with the x-component.

We know that the motion is along the $x$ and $z$ axis. Newton’s second law is $\bf{F_x} = m\bf{a_x}$. As there’s no acceleration along the x-axis,
$$\bf{a_x} = 0 \implies {\bf{F_x} = 0 \quad \& \quad \frac{d\bf{v}}{dt} = constant}$$
Since the initial velocity along the $x$ axis is $v_0$, we have an angle $\theta$ from the horizontal plane, and we know that $\dot{\bf{v}} = constant$, we begin constructing our velocity function for the $x$ component. $$\bf{v_x(t)} = v_0 \cos(\theta)$$
Integrating again to get $\bf{r_x(t)}$,

$$
\begin{aligned}
\int{\bf{v_x(t)} \ dt} &= \int{v_0 \cos(\theta)} \ dt \\
r_x(t) &= v_0 \cos(\theta) \ t + C
\end{aligned}
$$
Presuming origin at $(0, 0)$, $\bf{r_x}(0) = 0$, we get $C = x_0 = 0$, we have our desired function $r_x(t)$,

$$
r_x(t) = v_0 \cos(\theta) \ t
$$
Now, getting to the z-component,

Similar to the x-component, we know that initial velocity, accounting for $\theta$ is $v_0 \sin(\theta)$. We also have the gravitational force accelerating the ball along the $-z$ axis, that makes $\bf{F_z} = -mg$. We can now solve our differential equation.

$$
\begin{aligned}
F_z &= m a_z \\
-mg &= m \dot{v_z} \\
\dot{v_z} &= -g \\
\end{aligned}
$$

Integrating both sides with respect to time,

$$
\begin{aligned}
\int{\dot{v_z}} \ dt &= \int{-g} \ dt \\
v_z(t) &= -gt + C \\ 
\end{aligned}
$$

If at $t = 0$, $v_z(0) = v_0 \sin(\theta)$, then $C = v_0 \sin(\theta)$. We now have our final equation for velocity along the z-component,

$$
v_z(t) = -gt + v_0 \sin(\theta) \\
$$
Integrating again with respect to time gives us our desired function $r_z(t)$,

$$
\begin{aligned}
\int{\bf{v_z(t)}} \ dt &= \int{(-gt + v_0 \sin(\theta))} \ dt \\
r_z(t) &= \int{-gt} \ dt + \int{v_0 \sin(\theta)} \ dt \\
r_z(t) &= -\frac{1}{2} g t^2 + C_1 + v_0 \sin(\theta)\ t + C_2 \\
\end{aligned}
$$

If at $t = 0$, $r_z(t) = 0$, and $C = C_1 + C_2$ then, $C = 0$, and our final equation is,

$$
r_z(t) = -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \\ \\
\therefore \quad r_{puck}(t) = \{v_0 \cos(\theta) \ t, \ -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \} \quad \blacksquare
$$

Now, we need to find $t$ at which the ball hits the ground. We can start with $r_z(t)$, and substitute it with $0$,

$$
\begin{aligned}
r_z(t) &= -\frac{1}{2} g t^2 + v_0 \sin(\theta)\ t \\
0 &= t(-\frac{1}{2} g t + v_0 \sin(\theta)) \\\\
\therefore \quad t = 0 \text{\quad or \quad} t = \frac{2 v_0 \sin(\theta)}{g} \quad \blacksquare
\end{aligned}
$$
Let the $t > 0$ solution be $t_{post}$, to find the distance traversed as it hits the ground after being hit, we plug $t_{post}$ to our equation for the x-component.

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

Sticking to traditional 2D Cartesian coordinates, we represent the bundle's position as a function of time $(\bm{r_{y}(t)})$. 

The bundle falls down from height $h$, so $\bm{F_y} = -mg$...

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
Since $v_y(0) = 0$, $C = 0$, and we have $\bm{v_y(t)} = -gt$. We integrate again to find $r_{y}(t)$,

$$
\begin{aligned}
\int{\bm{v_y(t)}} \ dt &= \int{-gt} \ dt \\
\bm{r_y(t)} &= -\frac{1}{2}gt^2 + C\\
\end{aligned}
$$
In the special case $t = 0$, $\bm{r_y(t)} = h \ \implies \ C = h$, giving us our final equation for $\bm{r_y(t)}$,

$$\therefore \quad \bm{r_y(t)} = -\frac{1}{2}gt^2 + h \quad \blacksquare$$

##### (b) How far before the raft (measured horizontally) must the pilot drop the bundle if it is to hit the raft? What is this distance if $\bm{v_0} = 50 \  \mathrm{m/s}$, $h = 100 \ \mathrm{m}$, and $g \approx 10 \ \mathrm{m/s^2}$? 

To determine how soon we need to drop the bundle so that it reaches the raft, it serves to first calculate how much time it will actually take to hit the ground in general. We can do this by using our equation for $\bm{r_y(t)}$ and solving for $t$.

$$
\begin{aligned}
\frac{1}{2}gt^2 &= h \\
t &= \sqrt{\frac{2h}{g}} \\
\end{aligned}
$$
Substituting given values,

$$
\begin{aligned}
t &= \sqrt{\frac{200 \ \mathrm{m}}{10 \ \mathrm{m/s^2}}} \\\\
\therefore \quad t = 4.47 \ \mathrm{s}
\end{aligned}
$$
We know that the plane travels at an initial (and constant) velocity of $\bm{v_0} = 50 \ \mathrm{m / s}$, we integrate with respect to time to get the position function,

$$
\begin{aligned}
\int{\bm{v_x(t)}} \ dt &= \int{v_0} \ dt \\
\bm{r_x(t)} &= \bm{v_0} t + C
\end{aligned}
$$
In the case $t = 0$, we can presume $\bm{r_x(0)} = 0 \ \implies \ C = 0$, 

$$\therefore \quad \bm{r_x(t)} = \bm{v_0}t$$
Plugging in $t = 4.47 \ \mathrm{s}$, we get,

$$
\begin{aligned}
\bm{r_x(4.47)} = 50 \ \mathrm{m / s} \cdot 4.47 \ \mathrm{s} \\ \\
\therefore \quad \bm{r_x(4.47)} = 223.5 \ \mathrm{m} \quad \blacksquare
\end{aligned}
$$
The plane needs to drop the bundle $223.5 \ \mathrm{m}$ before the raft's actual position along the x-axis.

##### (c) Within what interval of time $(\pm \ \Delta t)$ must the pilot drop the bundle if it is to land within $\pm \ 10 \ m$ of the raft?

With $\bm{r_x(4.47)} = 223.5 \ \mathrm{m}$, we want to find the time delta for which the bundle lands between $213.5 \ \mathrm{m}$ and $233.5 \ \mathrm{m}$, using our equation for $\bm{r_x(t)}$,

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
Therefore, the plane must drop it between $\pm \ 0.2 \ \mathrm{s}$ to ensure a $\pm \ 10 \ \mathrm{m}$ coverage. $\blacksquare$

#### Ex-$37$: A student kicks a frictionless puck with initial speed $\bm{v_0}$, so that it slides straight up a plane that is inclined at an angle $\theta$ above the horizontal. 

##### (a) Write down Newton's second law for the puck and solve to give its position as a function of time.

We take x-axis along the incline of the slope, y-axis orthogonal to x (along the slope normal pointing outwards), and z-axis orthogonal to x and y, forming our orthonormal basis.

The total force acting on the puck is $\bm{F_{net}} = N + mg$, where $\bm{N} = (0, \ N, \ 0)$ and $\bm{g} = (-g \sin(\theta), \ -g\cos(\theta))$, we have our component forces.

$$
\begin{aligned}
\bf{F} = m\ddot{r} \implies \begin{cases}
	m\ddot{x} &= -mg\sin\theta \\
	m\ddot{y} &= N - mg\cos\theta \\
	m\ddot{z} &= 0
\end{cases}
\end{aligned}
$$
Since $\ddot{z} = \dot{z} = 0$, $z = 0$ for all $t$. The normal force adjusts against gravity, so $\ddot{y} = \dot{y} = y = 0$, and we only need to evaluate the position function for the x-component. We can integrate twice to get $r_x(t)$.

$$
\begin{aligned}
\int{\int{m\ddot{r}}} \ dt \ dt &= \int{\int{-mg\sin\theta}} \ dt \ dt \\ \\[1pt]
\int{\int{\ddot{r}}} \ dt \ dt &= \int{\int{-g\sin\theta}} \ dt \ dt \\ \\[1pt]
\int{\dot{r}} \ dt &= \int{(-g\sin\theta t + C_1)} \ dt \\ \\[1pt]
\bm{r_x(t)} &= -\frac{1}{2}gt^2\sin\theta + C_1t + C_2 \\ 
\end{aligned}
$$
At $t = 0$, $x(0) = 0$, giving us $C_2 = r_0$. Now we differentiate with respect to time, to get $C_1$.

$$
\begin{aligned}
\frac{dr_x(t)}{dt} &= \frac{d}{dt}\left(-\frac{1}{2}gt^2\sin\theta + C_1t + r_0 \right) \\ \\[1pt]
v_x(t) &= -gt\sin\theta + C_1 \\
\end{aligned}
$$
At $t = 0$, $v_x(0) = v_0$, giving us $C_1 = v_0$, giving us our final equation,

$$\therefore \quad r_x(t) = -\frac{1}{2}gt^2\sin\theta + v_0t + r_0 \quad \blacksquare$$

##### (b) How long will the puck take to return to its starting point?

Simplifying $r_x(t)$, ignoring the t = 0 case

$$
\begin{aligned}
r_x(t) &= \left(v_0 - \frac{1}{2} g \sin(\theta) t\right) \\\\
\therefore \quad t &= \frac{2 v_0}{g \sin(\theta)} \quad \blacksquare
\end{aligned}
$$

#### Ex-$39$: A ball is thrown with initial speed $\bm{v_0}$ up an inclined plane. The plane is inclined at an angle $\phi$ above the horizontal, and the ball's initial velocity is at an angle $\theta$ above the plane. Choose axes with $x$ measured up the slope, $y$ normal to the slope, and $z$ across it. 

##### Write down Newton's second law using these axes and find the ball's position as a function of time.

Since we are concerned with a kind of projectile motion, not sliding motion in contact with the slope, $N$ is redundant. The motion is also only along the $x$ and $y$ axis, so $\dot{z} = z = 0$ for all $t$. Once the ball is thrown, only its own weight acts on it, so $\bm{g} = (-g\sin\phi, \ -g\cos\phi)$, giving us our equations for the two components,

$$
\begin{aligned}
F_x &= m \ddot{r}_x \\
-mg\sin\phi &= m\ddot{r}_x \\
\ddot{r}_x &= -g\sin\phi 
\end{aligned}
$$
And similarly, $F_y = m\ddot{r}_y$, and $\ddot{r}_y = -g\cos\phi$. We integrate twice to get the position functions $r_x(t)$ and $r_y(t)$. Starting with $r_x(t)$,

$$
\begin{aligned}
\int{\int{\ddot{r}_x \ dt} \ dt} &= \int{\int{(-g\sin\phi) \ dt} \ dt} \\
\int{\dot{r}_x} \ dt &= \int{(-g\sin\phi t + C_1) \ dt} \\
r_x(t) &= -\frac{1}{2}gt^2\sin\phi + C_1t + C_2 \\
\end{aligned}
$$
At $t = 0$, $r_x(0) = 0$, giving us $C_2 = 0$. We need to solve for $C_1$ by differentiating $r_x(t)$ to get $v_x(t)$ and then substituting with initial conditions,

$$
\begin{aligned}
\dot{r} &= \frac{d}{dt}\left(-\frac{1}{2}gt^2\sin\phi + C_1t \right) \\
v_x(t) &= -\frac{1}{2} gt\sin\phi + C_1 \\
\end{aligned}
$$
At $t = 0$, $v_x(0) = v_0 \cos\theta \ \implies \ C_1 = v_0 \cos\theta$, giving us our final equation for $r_x(t)$,

$$r_x(t) = -\frac{1}{2}gt^2\sin\phi + v_0t\cos\theta$$
Repeating the previous steps exactly for the y-component, we can evaluate $r_y(t) = -\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta$. We now have our ball's position as a function of time,

$$\therefore \quad \bm{r_{ball}}(t) = (-\frac{1}{2}gt^2\sin\phi + v_0t\cos\theta, \ -\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta) \quad \blacksquare$$

##### Show that the ball lands a distance $R = 2v_0^2 \sin(\theta) \cos(\theta + \phi) / (g \cos^2(\phi)$ from its launch point.

The ball lands at a certain distance when $r_y(t) = 0$, so we substitute and solve for $t$,

$$
\begin{aligned}
-\frac{1}{2}gt^2\cos\phi + v_0t\sin\theta &= 0 \\
\frac{1}{2}gt\cos\phi &= v_0\sin\theta \\
t &= \frac{2v_0\sin\theta}{g\cos\phi} \\
\end{aligned}
$$
Now, we substitute this into $r_x(t)$, to get $R$,

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

We need to differentiate $R$ with respect to $\theta$, and set it to $0$ to find the maximum range.

$$
\begin{aligned}
\frac{d}{d\theta}(\frac{2v_0^2 \sin \theta \cos(\theta + \phi)}{g \cos^2 \phi}) &= \dot{R}  \\ \\[1pt]
\frac{d}{d\theta}(\frac{2v_0^2 \sin \theta \cos(\theta + \phi)}{g \cos^2 \phi}) &= 0 \\ \\[1pt]
\frac{2v_0^2}{g\cos^2\phi} \frac{d}{d\theta} \ (\sin\theta\cos(\theta + \phi)) &= 0 \\ \\[1pt]
\frac{2v\_0^2}{g \cos^2(\phi)} \left( \cos(\theta) \cos(\theta + \phi) - \sin(\theta) \sin(\theta + \phi) \right) &= 0 \\ \\[1pt]
\frac{2v\_0^2}{g \cos^2(\phi)} \cos(2\theta + \phi) &= 0
\end{aligned}
$$
Simplifying,

$$
\begin{aligned}
    \cos(2\theta + \phi) &= 0 \\ \\[1pt]
    2\theta + \phi &= \frac{\pi}{2} + n\pi \quad (\text{for } n \in \mathbb{Z}) \\ \\[1pt]
    2\theta &= \frac{\pi}{2} - \phi + n\pi \\ \\[1pt]
    \theta &= \frac{\pi}{4} - \frac{\phi}{2} + \frac{n\pi}{2}
\end{aligned}
$$
Taking $n =  0$ to get the first solution, we get $\theta = \frac{\pi}{4} - \frac{\phi}{2}$. Substituting this to $R$,

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

The cannon is only affected by its weight, and gravity only affects the y-component, we have $g_y = -g \implies F_y = -mg$. We only need to integrate twice to get $r_y(t)$,

$$
\begin{aligned}
F_y &= -mg \\
m\ddot{r_y} &= -mg \\
\ddot{r_y} &= -g \\
\dot{r_y} &= -gt + C_1 \\
r_y(t) &= -\frac{1}{2}gt^2 + C_1t + C_2 \\ 
\end{aligned}
$$
At $t = 0$, presuming $r_y(0) = 0$, we need to find $C_1$. The cannon is shot initially at an angle $\theta$ with some velocity $v_0$,

$$
\begin{aligned}
v_y(t) &= -gt + C_1 \\
C_1 &= v_0\sin\theta\\\\
\therefore \quad r_y(t) = -\frac{1}{2}gt^2 + v_0\sin\theta \ t \\
\end{aligned}
$$
Since there's no force acting on the x-component, we only have the velocity to deal with, so $r_x(t) = v_0\cos\theta \ t$ (derived exactly like $r_y(t)$), giving us our cannonball's position function,
$$\therefore \quad \bm{r_{cball}}(t) = (v_0\cos\theta \ t, \ -\frac{1}{2}gt^2 + v_0\sin\theta \ t) \quad \blacksquare$$

##### (b) Let $r(t)$ denote the ball's distance from the cannon. What is the largest possible value of $\theta$ if $r(t)$ is to increase throughout the ball's flight? [Hint: Using your solution to (a) you can write down $r^2$ as $x^2 + y^2$ , and then find the condition that $r^2$ is always increasing.]

Starting with $\bm{r_{cball}}^2(t)$, we differentiate 

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
To find the condition for $\bm{\dot{r}^2_{cball}}$ to be always increasing, we need the derivative to be positive for all $t > 0$, meaning, there can be no real roots. The condition for no real roots necessitates the discriminant being less than $0$($b^2 - 4ac \lt 0$). 

We have $b^2 = (3v_0g\sin\theta)^2$, $a = g^2$, and $c = 2v_0^2$, solving for $\theta$,

$$
\begin{aligned}
(3v_0g\sin\theta)^2 - 4g^2(2v_0^2) &< 0 \\ \\[0.5pt]
9v_0^2g^2\sin^2\theta - 8g^2v_0^2 &< 0 \\ \\[0.5pt]
v_0^2g^2(9\sin^2\theta - 8) &< 0 \\ \\[0.5pt]
\end{aligned}
$$
Dividing both sides by $v_0^2g^2$, and simplifying, we get our final value for $\theta$,

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

We know that $\omega = \dot{\phi}$. To find the tension in the string we use $\vec{F}_r = m(\ddot{r} - r\omega^2)$.

Since $R$ is constant, $\ddot{r} = 0$, and since $\omega$ is constant, we apply the equation and substitute, 

$$
\begin{aligned}
F_r &= m(\ddot{r} - r\omega^2) \\
&= m(0 - R\omega^2) \\
&= -mR\omega^2 \\ \\
\therefore \quad T = mR\omega^2 \quad \blacksquare 
\end{aligned}
$$

#### Ex-$42$: Prove that the transformations from rectangular to polar coordinates and vice versa are given by the four equations. Explain why the equation for $\theta$ is not quite complete and give a complete version.

a) $x = r \cos\theta$ and $y = r \sin\theta$

Lets take a unit circle (where $r = 1$). Then, by definition, $\cos\theta = \dfrac{x}{r}$ and $\sin\theta = \dfrac{y}{r} \quad \blacksquare$

b) $r = \sqrt{x^2 + y^2}$ and $\theta = \tan^{-1}(\dfrac{y}{x})$ 

Substituting definitions from a,

$$
\begin{aligned}
r &= \sqrt{x^2 + y^2} \\
&= \sqrt{(r\cos\theta)^2 + (r\sin\theta)^2} \\
&= \sqrt{r^2(\cos^2\theta + \sin^2\theta)} \\
&= \sqrt{r^2 \cdot 1} \\
&= r \quad \blacksquare
\end{aligned}
$$
Since $\arctan$ doesn't distinguish between quadrants, we need to apply some conditions,

If $x > 0$, $\theta = arctan(y/x)$.
If $x < 0$, $\theta = \arctan(y/x) + \pi$.
If $x = 0$ and $y > 0$, $\theta = \pi / 2$.
If $x = 0$ and $y < 0$, $\theta$ = $-\pi/2 \quad \blacksquare$

#### Ex-$43$:

##### (a) Prove that the unit vector r of two-dimensional polar coordinates is equal to $$\hat{\bm{r}} = \hat{\bm{x}}cos\phi + \hat{\bm{y}} sin\phi$$and find a corresponding expression for $\hat{\bm{\phi}}$.

We know that a point $(r, \ \phi)$ in polar-coordinates is related to Cartesian coordinates $(x, \ y)$ by: 

$$
x = r \cos \phi \\
y = r \sin \phi
$$
In general if some position vector $\vec{r}$ is represented by $$\bm{r} = \bm{r}_x \bm{\hat{x}} + \bm{r}_y\bm{\hat{y}}$$
Then we can represent its unit vector as 

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
Rotating $\hat{\bm{r}}$ $90^\circ$ counter-clockwise, we get

$$\hat{\bm{\phi}} = -\sin\phi\hat{\bm{x}} + \cos\phi\bm{\hat{y}} \quad \blacksquare$$

##### (b) Assuming that $\phi$ depends on the time $t$, differentiate your answers in 1-43a to give an alternative proof of the results (1.42) and (1.46) for the time derivatives of $\hat{\bm{r}}$ and $\hat{\bm{\phi}}$.

We need to find $\bm{\dot{\hat{r}}}$ and $\bm{\dot{\hat{\phi}}}$. Starting with the former and treating $\phi$ as $\phi(t)$,

$$
\begin{aligned}
\frac{d\hat{\bm{r}}}{dt} &= \frac{d}{dt}(\cos\phi\bm{\hat{x}} + \sin\phi\bm{\hat{y}}) \\ \\[0.5pt]
&= (-\sin\phi \dot{\phi})\bm{\hat{x}} + (\cos\phi \dot{\phi})\bm{\hat{y}} \\ \\[0.5pt]
&= \dot{\phi}(-\sin\phi\bm{\hat{x}} + \cos\phi\bm{\hat{y}}) \\ \\
\therefore \quad \dot{\hat{r}} = \dot{\phi}\bm{\hat{\phi}} \quad \blacksquare
\end{aligned}
$$
Now, we proceed to $\bm{\dot{\hat{\phi}}}$,

$$
\begin{aligned}
\frac{d\hat{\bm{\phi}}}{dt} &= \frac{d}{dt}(-\sin\phi\bm{\hat{x}} + \cos\phi\bm{\hat{y}}) \\ \\[0.5pt]
&= (-\cos\phi \dot{\phi})\bm{\hat{x}} + (-\sin\phi \dot{\phi})\bm{\hat{y}} \\ \\[0.5pt]
&= -\dot{\phi}(\cos\phi\bm{\hat{x}} + \sin\phi\bm{\hat{y}}) \\ \\
\therefore \quad \dot{\hat{\phi}} = -\dot{\phi}\hat{r} \quad \blacksquare
\end{aligned}
$$

#### Ex-$45$: Prove that if $\bm{v}(t)$ is any vector that depends on time (for example the velocity of a moving particle) but which has constant magnitude, then $\bm{\dot{v}}(t)$ is orthogonal to $\bm{v}(t)$. Prove the converse that if $\bm{\dot{v}}(t)$ is orthogonal to $\bm{v}(t)$, then $|\bm{v}(t)|$ is constant. [Hint: Consider the derivative of $\bm{v}^2$.] This is a very handy result. It explains why, in two-dimensional polars, $\bm{\dot{\hat{r}}}$ has to be in the direction of $\bm{\hat{\phi}}$ and vice versa. It also shows that the speed of a charged particle in a magnetic field is constant, since the acceleration is perpendicular to the velocity.

If $|\bm{v}(t)|$ is constant, $|\bm{v^2}(t)|$ is constant as well alongside all its derivatives. We start with its derivative,

$$
\begin{aligned}
\dfrac{d}{dt}\bm{v^2}(t) &= \dfrac{d}{dt}(\bm{v}(t) \cdot \bm{v}(t)) \\ \\[0.5pt]
&= \dfrac{d\bm{v}(t)}{dt} \cdot \bm{v}(t) + \bm{v}(t) \cdot \dfrac{d\bm{v}(t)}{dt} \\ \\[0.5pt]
&= \bm{\dot{v}}(t) \cdot \bm{v}(t) + \bm{v}(t) \cdot \bm{\dot{v}}(t) \\ \\[0.5pt]
&= 2(\bm{\dot{v}}(t) \cdot \bm{v}(t)) 
\end{aligned} 
$$

Since $\dot{v^2}(t) = 0$,

$$
\begin{aligned}
2(\bm{\dot{v}}(t) \cdot \bm{v}(t)) &= 0 \\ \\[0.5pt]
\bm{\dot{v}}(t) \cdot \bm{v}(t) &= 0 \\ \\
\end{aligned}
$$

Hence, since $\bm{\dot{v}}(t) \cdot \bm{v}(t) = 0$, $\bm{\dot{v}}(t)$ is orthogonal to $\bm{v}(t)$. $\blacksquare$

Taking a look at our result for $\dot{v^2}(t)$, we can substitute, and that gives us $\dot{v^2}(t) = 0 \ \implies \dot{v}(t) = 0 \ \implies |\bm{v}(t)| = constant \quad \blacksquare$

#### Ex-$47$: Let the position of a point $P$ in three dimensions be given by the vector $\bm{r} = (x, \ y, \ z)$ in Cartesian coordinates. The same position can be specified by cylindrical polar coordinates, $(\rho, \ \phi,\ z)$ which are defined as follows: Let $P'$ denote the projection of $P$ onto the xy plane; that is, $P'$ has Cartesian coordinates $(x, y, 0)$. Then $\rho$ and $\phi$ are defined as the two-dimensional polar coordinates of $P'$ in the $xy$ plane, while $z$ is the third Cartesian coordinate, unchanged. 

##### (a) Make a sketch to illustrate the three cylindrical coordinates. Give expressions for $\rho$, $\phi$, $z$ in terms of the Cartesian coordinates $x$, $y$, $z$. Explain in words what $\rho$ is ("$\rho$ is the distance of $P$ from $?$"). There are many variants in notation. For instance, some people use $r$ instead of $\rho$. Explain why this use of $\bm{r}$ is unfortunate. 

Using traditional right-handed coordinates, we can express $\rho$ ($z$ remains untouched) 

$$\rho = \sqrt{x^2 + y^2} \quad \blacksquare$$

For $\phi$, we need to consider the quadrant as well,

$$\phi = \arctan(y / x) \quad \blacksquare$$

##### (b) Describe the three unit vectors $\hat{\bm{\rho}}, \ \hat{\bm{\phi}}, \ \hat{\bm{z}}$ and write the expansion of the position vector $\bm{r}$ in terms of these unit vectors. 

$\hat{\bm{\rho}}$ points from the $z$ axis to our point $P$, parallel to our $xy$-slice. $\hat{\bm{\phi}}$ represents the unit vector tangential to the circular $xy$-slice along the direction of motion. $\hat{\bm{z}}$ remains untouched. Then,

$$\bm{r} = \rho \hat{\bm{\rho}} + z \hat{\bm{z}} \quad \blacksquare$$

##### (c) Differentiate your last answer twice to find the cylindrical components of the acceleration $\bm{a} = \ddot{\bm{r}}$ of the particle. To do this, you will need to know the time derivatives of $\hat{\bm{\rho}}$ and $\hat{\bm{\phi}}$.

We need to differentiate $\bm{r}$ twice,

$$
\begin{aligned}
\dfrac{d^2\bm{r}}{dt^2} = \ddot{\bm{r}} &= \dfrac{d^2}{dt^2}(\rho \hat{\bm{\rho}} + z \hat{\bm{z}}) \\ \\[0.5pt]
\end{aligned}
$$

We start with $\bm{r}$,

$$
\begin{aligned}
\dot{\bm{r}} &= \dfrac{d}{dt}(\rho \hat{\bm{\rho}} + z \hat{\bm{z}}) \\ \\[0.5pt]
&= (\dot{\rho}\hat{\bm{\rho}} + \rho \dot{\hat{\bm{\rho}}} + \dot{z}\hat{\bm{z}} + z \dot{\hat{\bm{z}}}) \\ \\[0.5pt]
\end{aligned}
$$

We need $\dot{\hat{\bm{\rho}}}$ and $\dot{\hat{\bm{\phi}}}$, starting with $\dot{\hat{\bm{\rho}}}$...

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

now we get to $\dot{\hat{\bm{\phi}}}$,

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
Now, getting back to differentiation and substituting,

$$
\begin{aligned}
\ddot{\bm{r}} &= \frac{d}{dt} (\dot{\rho} \hat{\rho} + \rho \dot{\phi} \hat{\phi} + \dot{z} \hat{z}) \\ \\[0.5pt]
&= \frac{d}{dt} (\dot{\rho} \hat{\rho}) + \frac{d}{dt} (\rho \dot{\phi} \hat{\phi}) + \frac{d}{dt} (\dot{z} \hat{z}) \\ \\[0.5pt]
&= (\ddot{\rho} \hat{\rho} + \dot{\rho} \dot{\phi} \hat{\phi}) + (\dot{\rho} \dot{\phi} \hat{\phi} + \rho \ddot{\phi} \hat{\phi} - \rho \dot{\phi}^2 \hat{\rho}) + \ddot{z} \hat{z} \\ \\
\therefore \quad \ddot{\bm{r}} = (\ddot{\rho} - \rho \dot{\phi}^2) \hat{\bm{\rho}} + (2 \dot{\rho} \dot{\phi} + \rho \ddot{\phi}) \hat{\bm{\phi}} + \ddot{z} \hat{\bm{z}} \quad \blacksquare
\end{aligned}
$$

#### Ex-$49$: Imagine two concentric cylinders, centered on the vertical $z$ axis, with radii $R ± \epsilon$, where $\epsilon$ is very small. A small frictionless puck of thickness $2\epsilon$ is inserted between the two cylinders, so that it can be considered a point mass that can move freely at a fixed distance from the vertical axis. If we use cylindrical polar coordinates $(\rho, \ \phi, \ z)$ for its position (1.47), then $\rho$ is fixed at $\rho = R$. while $\phi$ and $z$ can vary at will. Write down and solve Newton's second law for the general motion of the puck, including the effects of gravity. Describe the puck's motion.

Given conditions: $\rho$ = $R$ (constant), $\dot{\rho}$ = $\ddot{\rho}$ = $0$.

The only external force is gravity: $F = -mg\hat{\bm{z}}$

Using the cylindrical coordinate acceleration from our previous derivation:
$$\ddot{\mathbf{r}} = (\ddot{\rho} - \rho \dot{\phi}^2) \hat{\boldsymbol{\rho}} + (2 \dot{\rho} \dot{\phi} + \rho \ddot{\phi}) \hat{\boldsymbol{\phi}} + \ddot{z} \hat{\mathbf{z}}$$
Simplifying with our given conditions:
$$\ddot{\bm{r}} = -R \dot{\phi}^2 \hat{\bm{\rho}} + R \ddot{\phi} \hat{\bm{\phi}} + \ddot{z} \hat{\bm{z}}$$
