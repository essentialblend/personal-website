---
title: "Derivation: Newton's Equation in Spherical Coordinates"
date: 2025-04-02
subjects: ["Classical Mechanics"] 
categories: ["Derivations"] 
tags: ["Newton's Second Law", "Coordinate Systems", "Spherical", "Kinematics"]
description: "A derivation of Newton's second law in spherical coordinates."
---

Spherical coordinates enable us to locate a point on a sphere with three coordinates axes: radial ($\hat{\mathbf{r}}$), polar ($\hat{\mathbf{\theta}}$), and azimuthal ($\hat{\mathbf{\phi}}$). We can describe net force as a sum of component forces about these axes,

$$
\mathbf{F} = F_r \hat{\mathbf{r}} + F_{\theta} \hat{\mathbf{\theta}} + F_{\phi} \hat{\mathbf{\phi}}
$$

where the position vector is represented as,

$$
\mathbf{r} = r \hat{\mathbf{r}} \tag{1.1}
$$

We begin by differentiating $(1.1)$,

$$
\begin{align*}
\dfrac{d\mathbf{r}}{dt} &= \dfrac{d}{dt}(r \hat{\mathbf{r}}) \\ \\[0.1pt]
&= \dot{r} \hat{\mathbf{r}} + r \dot{\hat{\mathbf{r}}} \tag{1.2}
\end{align*}
$$

We need $ \dot{\hat{\mathbf{r}}} $. This means, we need to differentiate the unit vector $ \hat{\mathbf{r}} $. We can derive the correct expression for this time-derivative both geometrically and algebraically. We'll proceed with the latter. The unit vectors for spherical coordinates are,

$$
\hat{\mathbf{r}} = \sin \theta \cos \phi \hat{\mathbf{i}} + \sin \theta \sin \phi \hat{\mathbf{j}} + \cos \theta \hat{\mathbf{k}} \tag{1.3}
$$

$$
\hat{\mathbf{\theta}} = \cos \theta \cos \phi \hat{\mathbf{i}} + \cos \theta \sin \phi \hat{\mathbf{j}} - \sin \theta \hat{\mathbf{k}} \tag{1.4}
$$

$$
\hat{\mathbf{\phi}} = -\sin \phi \hat{\mathbf{i}} + \cos \phi \hat{\mathbf{j}} \tag{1.5}
$$

Differentiating $(1.3)$,

$$
\begin{aligned}
  \dfrac{d\hat{\mathbf{r}}}{dt} 
  &= \dfrac{d}{dt}(\sin \theta \cos \phi \hat{\mathbf{i}} + \sin \theta \sin \phi \hat{\mathbf{j}} + \cos \theta \hat{\mathbf{k}}) \\ 
  &= \dfrac{d}{dt}(\sin \theta \cos \phi \hat{\mathbf{i}}) + \dfrac{d}{dt}(\sin \theta \sin \phi \hat{\mathbf{j}}) + \dfrac{d}{dt}(\cos \theta \hat{\mathbf{k}}) \\ 
  &= \left( \dfrac{d}{dt}(\sin \theta \cos \phi)(\hat{\mathbf{i}}) + (\sin \theta \cos \phi)\dfrac{d}{dt}(\hat{\mathbf{i}}) \right) \\ 
  & \qquad + \left( \dfrac{d}{dt}(\sin \theta \sin \phi)(\hat{\mathbf{j}}) + (\sin \theta \sin \phi)\dfrac{d}{dt}(\hat{\mathbf{j}}) \right) \\ 
  & \qquad + \left( \dfrac{d}{dt}(\cos \theta)(\hat{\mathbf{k}}) + (\cos \theta)\dfrac{d}{dt}(\hat{\mathbf{k}}) \right) 
\end{aligned}
$$

Since the coordinate unit vectors $ \hat{\mathbf{i}} $, $ \hat{\mathbf{j}} $, $ \hat{\mathbf{k}} $ don't vary with time, their time derivatives are $ \mathbf{0} $, cancelling the second term in each of the three sub-expressions. Simplifying,

$$
\begin{align*}
    \dfrac{d\hat{\mathbf{r}}}{dt} &= \dfrac{d}{dt}(\sin \theta \cos \phi)(\hat{\mathbf{i}}) + \dfrac{d}{dt}(\sin \theta \sin \phi)(\hat{\mathbf{j}}) + \dfrac{d}{dt}(\cos \theta)(\hat{\mathbf{k}}) \\ \\[0.1pt]
    &= \left(\dfrac{d}{dt}(\sin \theta)(\cos\phi) + (\sin \theta)\dfrac{d}{dt}(\cos \phi)\right)(\hat{\mathbf{i}}) \\
    & \qquad + \left(\dfrac{d}{dt}(\sin \theta)(\sin \phi) + (\sin \theta)\dfrac{d}{dt}(\sin \phi)\right)(\hat{\mathbf{j}}) + \left(\dfrac{d}{dt}(\cos \theta)\right)(\hat{\mathbf{k}}) \\ \\[0.1pt]
    &= (\cos \theta \cos \phi \dot{\theta} - \sin \theta \sin \phi \dot{\phi})(\hat{\mathbf{i}}) + (\sin \phi \cos \theta \dot{\theta} + \sin \theta \cos \phi \dot{\phi})(\hat{\mathbf{j}}) - (\sin \theta \dot{\theta})(\hat{\mathbf{k}}) \\ \\[0.1pt]
    &= (\cos \theta \cos \phi \dot{\theta}\hat{\mathbf{i}} - \sin \theta \sin \phi \dot{\phi}\hat{\mathbf{i}}) + (\sin \phi \cos \theta \dot{\theta} \hat{\mathbf{j}} + \sin \theta \cos \phi \dot{\phi} \hat{\mathbf{j}}) - (\sin \theta \dot{\theta}\hat{\mathbf{k}}) \\ \\[0.1pt]
    &= (\cos \theta \cos \phi \hat{\mathbf{i}} + \cos \theta \sin \phi \hat{\mathbf{j}} - \sin \theta \hat{\mathbf{k}})\dot{\theta} + (- \sin \phi \hat{\mathbf{i}} + \cos \phi \hat{\mathbf{j}}) \sin \theta \dot{\phi}
\end{align*}
$$

Substituting $(1.4)$ and $(1.5)$ back to get $ \dot{\hat{\mathbf{r}}} $,

$$
\dot{\hat{\mathbf{r}}} = \hat{\mathbf{\theta}}\dot{\theta} + \sin \theta \hat{\mathbf{\phi}} \dot{\phi} \tag{1.6}
$$

With this time-derivative, we can proceed by substituting $(1.6)$ back into $(1.2)$ and simplifying,

$$
\mathbf{v} = \dot{r} \hat{\mathbf{r}} + r\dot{\theta}\hat{\mathbf{\theta}} + r \sin \theta \dot{\phi} \hat{\mathbf{\phi}} \tag{1.7}
$$

Now, we differentiate $(1.7)$ to get the acceleration vector $\mathbf{a} = d\mathbf{v}/dt $,

$$
\begin{aligned} 
  \mathbf{a} = \frac{d\mathbf{v}}{dt} 
  &= \frac{d}{dt} \left( \dot{r} \hat{\mathbf{r}} + r \dot{\theta} \hat{\mathbf{\theta}} + r \sin\theta \dot{\phi} \hat{\mathbf{\phi}} \right) \\ 
  &= \frac{d}{dt} \left( \dot{r} \hat{\mathbf{r}} \right) + \frac{d}{dt} \left( r \dot{\theta} \hat{\mathbf{\theta}} \right) + \frac{d}{dt} \left( r \sin\theta \dot{\phi} \hat{\mathbf{\phi}} \right) \\ 
  &= \left( \ddot{r} \hat{\mathbf{r}} + \dot{r} \dot{\hat{\mathbf{r}}} \right) \\ 
  & \qquad + \left( \dot{r} \dot{\theta} \hat{\mathbf{\theta}} + r \ddot{\theta} \hat{\mathbf{\theta}} + r \dot{\theta} \dot{\hat{\mathbf{\theta}}} \right) \\ 
  & \qquad + \left( \dot{r} \sin\theta \dot{\phi} \hat{\mathbf{\phi}} + r \cos\theta \dot{\theta} \dot{\phi} \hat{\mathbf{\phi}} + r \sin\theta \ddot{\phi} \hat{\mathbf{\phi}} + r \sin\theta \dot{\phi} \dot{\hat{\mathbf{\phi}}} \right) \\ 
  &= \ddot{r} \hat{\mathbf{r}} 
    + \dot{r} \left( \hat{\mathbf{\theta}}\dot{\theta} + \sin\theta \dot{\phi} \hat{\mathbf{\phi}} \right) 
    + \dot{r} \dot{\theta} \hat{\mathbf{\theta}} + r \ddot{\theta} \hat{\mathbf{\theta}} 
    + r \dot{\theta} \left( -\dot{\theta} \hat{\mathbf{r}} + \cos\theta \dot{\phi} \hat{\mathbf{\phi}} \right) \\
    & \qquad + \dot{r} \sin\theta \dot{\phi} \hat{\mathbf{\phi}} + r \cos\theta \dot{\theta} \dot{\phi} \hat{\mathbf{\phi}} + r \sin\theta \ddot{\phi} \hat{\mathbf{\phi}} \\
    & \qquad + r \sin\theta \dot{\phi} \left( -\sin\theta \dot{\phi} \hat{\mathbf{r}} - \cos\theta \dot{\phi} \hat{\mathbf{\theta}} \right) \\ 
    &= \left( \ddot{r} - r \dot{\theta}^2 - r \sin^2\theta \dot{\phi}^2 \right) \hat{\mathbf{r}} \\ 
    & \qquad + \left( r \ddot{\theta} + 2 \dot{r} \dot{\theta} - r \sin\theta \cos\theta \dot{\phi}^2 \right) \hat{\mathbf{\theta}} \\ 
    & \qquad + \left( r \sin\theta \ddot{\phi} + 2 \dot{r} \sin\theta \dot{\phi} + 2 r \cos\theta \dot{\theta} \dot{\phi} \right) \hat{\mathbf{\phi}} \tag{1.8}
\end{aligned}
$$

With the required components for $ \mathbf{a} $, we can finally express Newton's equation of motion in spherical coordinates as a net component sum over these coordinate axes,

$$
\begin{align*}
\boxed{
\mathbf{F} = m\mathbf{a} \, \iff \, F_r \hat{\mathbf{r}} + F_{\theta} \hat{\mathbf{\theta}} + F_{\phi} \hat{\mathbf{\phi}} \, \iff
\,
  \begin{cases}
      F_r = m(\ddot{r} - r \dot{\theta}^2 - r \dot{\phi}^2 \sin^2\theta) \\
      F_\theta = m(r \ddot{\theta} + 2 \dot{r} \dot{\theta} - r \dot{\phi}^2 \sin\theta \cos\theta) \\
      F_\phi = m(r \sin\theta \ddot{\phi} + 2 \dot{r} \sin\theta \dot{\phi} + 2 r \cos\theta \dot{\theta} \dot{\phi}) 
  \end{cases}
\, \blacksquare
}
\end{align*}
$$