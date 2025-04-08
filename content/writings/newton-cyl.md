---
title: "Derivation: Newton's Law in Cylindrical Coordinates"
date: 2023-04-01
subjects: ["Classical Mechanics"] 
categories: ["Derivations"] 
tags: ["Newton's Second Law", "Coordinate Systems", "Cylindrical", "Kinematics"]
description: "A derivation of Newton's second law in cylindrical coordinates."
---

Deriving Newton's equation for cylindrical coordinates is similar to polar coordinates, with both of them sharing radial and angular coordinate axes, but cylindrical coordinates add the $z$ coordinate axis. We can represent force along these coordinates,

$$
\mathbf{F} = F_r \hat{\mathbf{r}} + F_{\phi} \hat{\mathbf{\phi}} + F_{z} \hat{\mathbf{z}} \tag{1.1}
$$

Our position vector is, 

$$
\mathbf{r} = r\hat{\mathbf{r}} + z \hat{\mathbf{z}} \tag{1.2}
$$

where we only need the radial and the $z$ coordinate axes to obtain the magnitude of the vector. Differentiating to get the velocity vector,

$$
\begin{aligned}
    \dfrac{d\mathbf{r}}{dt} &= \dfrac{d}{dt}(r\hat{\mathbf{r}} + z \hat{\mathbf{z}}) \\ \\[0.1pt]
    &= \dfrac{d}{dt}(r\hat{\mathbf{r}}) + \dfrac{d}{dt}(z \hat{\mathbf{z}}) \\ \\[0.1pt]
    &= (\dot{r} \hat{\mathbf{r}} + r \dot{\hat{\mathbf{r}}}) + (\dot{z} \hat{\mathbf{z}} + z \dot{\hat{\mathbf{z}}}) \\ \\[0.1pt]
    &= \dot{r} \hat{\mathbf{r}} + r \dot{\hat{\mathbf{r}}} + \dot{z} \hat{\mathbf{z}} {{-- \text{ since } \dot{\hat{\mathbf{z}}} = \mathbf{0} --}} \\ \\[0.1pt] 
\end{aligned}
$$

We have $ \dot{\hat{\mathbf{r}}} = \dot{\phi}\hat{\mathbf{\phi}} $ ([Eq 1.12 from the polar coordinates derivation](drv_f=ma_polar.md)), giving us the velocity vector, {{%/* Assuming you have a file drv_f=ma_polar.md */%}}

$$
\begin{align*}
    \mathbf{v} &= \dot{r}\hat{\mathbf{r}} + r\dot{\phi}\hat{\mathbf{\phi}} + \dot{z}\hat{\mathbf{z}} \tag{1.3}
\end{align*}
$$

Now we differentiate $(1.3)$ to get the acceleration vector,

$$
\begin{aligned}
    \dfrac{d\mathbf{v}}{dt} &= \dfrac{d}{dt}(\dot{r}\hat{\mathbf{r}} + r\dot{\phi}\hat{\mathbf{\phi}} + \dot{z}\hat{\mathbf{z}}) \\ \\[0.1pt]
    &= \dfrac{d}{dt}(\dot{r}\hat{\mathbf{r}}) + \dfrac{d}{dt}(r\dot{\phi}\hat{\mathbf{\phi}}) + \dfrac{d}{dt}(\dot{z}\hat{\mathbf{z}}) \\ \\[0.1pt]
    &= (\ddot{r} \hat{\mathbf{r}} + \dot{r} \dot{\hat{\mathbf{r}}}) + (\dot{r} \dot{\phi}\hat{\mathbf{\phi}} + r\ddot{\phi}{\hat{\mathbf{\phi}}} + r \dot{\phi}{\dot{\hat{\mathbf{\phi}}}}) + (\ddot{z} \hat{\mathbf{z}} + \dot{z} \dot{\hat{\mathbf{z}}})
\end{aligned}
$$

We have $ \dot{\hat{\mathbf{\phi}}} = -\dot{\phi}\hat{\mathbf{r}} $ ([Eq 1.13 from the polar coordinates derivation](drv_f=ma_polar.md)), substituting and simplifying,

$$
\begin{aligned}
    \mathbf{a} = \dfrac{d\mathbf{v}}{dt} &= (\ddot{r} \hat{\mathbf{r}} + \dot{r} \dot{\phi}\hat{\mathbf{\phi}}) + (\dot{r} \dot{\phi}\hat{\mathbf{\phi}} + r\ddot{\phi}{\hat{\mathbf{\phi}}} - r \dot{\phi}^2 \hat{\mathbf{r}}) + (\ddot{z} \hat{\mathbf{z}}) {{-- \text{ since } \dot{\hat{\mathbf{z}}} = \mathbf{0} --}} \\ \\[0.1pt]
    &= \ddot{r} \hat{\mathbf{r}} - r \dot{\phi}^2 \hat{\mathbf{r}} + \dot{r} \dot{\phi}\hat{\mathbf{\phi}} + \dot{r} \dot{\phi}\hat{\mathbf{\phi}} + r\ddot{\phi}{\hat{\mathbf{\phi}}} + \ddot{z} \hat{\mathbf{z}} \\ \\[0.1pt]
    &= (\ddot{r} - r \dot{\phi}^2)\hat{\mathbf{r}} + (2\dot{r} \dot{\phi} + r\ddot{\phi})\hat{\mathbf{\phi}} + \ddot{z} \hat{\mathbf{z}} 
\end{aligned}
$$

$$
\begin{align*}
\boxed{
\mathbf{F} = m\ddot{\mathbf{r}} \quad \iff \quad F_r \hat{\mathbf{r}} + F_{\phi} \hat{\mathbf{\phi}} + F_{z} \hat{\mathbf{z}} \quad \iff
\quad
    \begin{cases}
        F_r = m(\ddot{r} - r\dot{\phi}^2) \\
        F_\phi = m(2\dot{r}\dot{\phi} + r\ddot{\phi}) \\
        F_z = m\ddot{z} \ 
    \end{cases}
\quad \blacksquare
}
\end{align*}
$$
