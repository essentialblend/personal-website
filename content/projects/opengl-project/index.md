---
title: "OpenGL Graphics Programming Project"
date: 2023-06-01
weight: 4
status: archived
description: "My final coursework that demonstrates various graphics programming techniques with OpenGL and C++."
stacks: ["OpenGL", "C++"]
repo: https://github.com/essentialblend/openGLgfxDemo
---

### Introduction

This graphics programming demo was part of the final coursework for the COMP3011 Computer Graphics module at the University of Nottingham in 2023. The requirements by means of core features were fairly fundamental, so I took the opportunity of going beyond, learned and implemented many new features I found gratifying.

<figure>
    <video controls style="max-width: 100%; height: auto;">
      <source src="opengl-demo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <figcaption><p>A short video showcasing many of the features implemented in this demo.</p></figcaption>
</figure>

Even though I think I did achieve most of the features as I intended, the code quality is beyond subpar given everything I learned since then, so it's archived.

{{< figure src="ogl-ii.png" alt="Showcase Image" caption="A simple implementation of post-process crepuscular rays." >}}

### Features

{{< figure src="ogl-i.png" alt="Showcase Image" caption="Day night cycles, shadows, sky cubemaps." >}}

- OpenGL fundamentals (buffer/array objects, shaders, instanced rendering, textures) following best practices as provided by Khronos, wherever possible.
- Simple .obj parser and working with models.
- Blinn-Phong lighting, and shadow mapping for point, spot, and directional sources.
- Maps (normals, emissive) etc.
- Sky cubemaps with day-night cycles, and accompanying light properties to achieve an atmosphere without resorting to advanced techniques.
- Screen-space post process effects i.e., god-rays, fog.

{{< figure src="ogl-iii.png" alt="Showcase Image" caption="Generated terrains with various maps." >}}