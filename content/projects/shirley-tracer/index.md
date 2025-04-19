---
title: "Shirley Tracer"
date: 2024-04-01
weight: 2
status: archived
description: "My implementation of the Monte Carlo path tracer created following Peter Shirley's three part series Ray Tracing in One Weekend."
stacks: ["C++"]
repo: https://github.com/essentialblend/weekend-raytracing
---

### Project Details 

A brute force path-traced renderer programmed referencing the [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html) series by Peter Shirley, Trevor David Black, and Steve Hollasch.

{{< figure src="shirley-ii.png" alt="Final render from Book 3" caption="Final render from Book 3 of Ray Tracing in One Weekend." >}}

This was my first go at anything related to offline rendering after spending most of my time learning and implementing rasterization related techniques in OpenGL. I inadvertently ended up preemptively improving certain features, which was pleasant. 

{{< figure src="shirley-i.png" alt="Final render from Book 1" caption="Final render from Book 1 of Ray Tracing in One Weekend." >}}

The first book, and the first half of the second book were intuitive, but the difficulty scaled ridiculously as I began the third due to my utter lack of related prerequisites. This itself took me nearly two months to complete.

### Features

- Monte Carlo Path Tracing.
- Developed from scratch with C++.
- Per pixel multi-sampled anti-aliasing.
- Gamma correction.
- Positionable camera with defocus blur.
- Lambertian, metallic, and dielectric materials.
- Motion blur.
- Axis-aligned Bounding Boxes (AABB) BVH.
- Solid color, image, and noise textures.
- Perlin noise with trilinear interpolation and Hermitian smoothing. 
- Emissive lights.
- Primitives: quads, spheres.
- Volumes.
- Importance Sampling
- Mixed PDFs.

### Third Party Libraries

- [stb_image](https://github.com/nothings/stb/blob/master/stb_image.h)
- [ImageMagick](https://github.com/imagemagick/imagemagick)