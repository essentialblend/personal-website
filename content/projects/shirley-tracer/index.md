---
title: "ShirleyTracer"
date: 2024-04-01
weight: 2
status: archived
description: "An archived C++ path tracer built while working through the Ray Tracing in One Weekend series."
stacks: ["C++"]
repo: https://github.com/essentialblend/shirleytracer/tree/main
gallery:
  - image: "shirley-ii.png"
    alt: "Final Cornell-box render from ShirleyTracer"
    caption: "Final Cornell-box render from the completed book-three implementation."
  - image: "shirley-i.png"
    alt: "Earlier book-one ShirleyTracer render"
    caption: "Earlier book-one render: 1920 x 1080, 150 samples per pixel, 150 maximum bounces."
---

ShirleyTracer is an archived C++ path tracer built while working through Peter Shirley, Trevor David Black, and Steve Hollasch's [_Ray Tracing in One Weekend_](https://raytracing.github.io/) series.

It was my first substantial offline-rendering project after earlier work in real-time OpenGL rasterisation. The goal was not to design a production renderer, but to implement the sequence of ideas in the books directly enough that I could understand the mechanics of ray generation, scattering, recursive light transport, texture lookup, acceleration, volumetric media, and importance sampling from the ground up.

The `main` branch now contains the completed book-three implementation. Earlier branches are preserved as checkpoints through the series.

> This repository records an early stage of my graphics-programming path. It is useful as evidence of the rendering concepts I implemented and studied, but the C++ structure is not representative of my current engineering standards.
>
> My current renderer work continues in [Indus](https://github.com/essentialblend/project-indus), a multithreaded C++23 CPU path tracer with a more deliberate renderer architecture, BSDF system, SAH BVH acceleration, progressive preview, concurrent scheduling, and runtime instrumentation.

## Gallery

{{< projectgallery id="shirley-showcase" >}}

## At a glance

<div class="SF_PROJECT_GLANCE">
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Rendering model</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Recursive Monte Carlo path tracing following the Shirley book series.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Geometry</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Spheres, quads, translated/rotated objects, object lists, and BVH nodes.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Acceleration</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Axis-aligned bounding boxes and BVH traversal.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Materials</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Lambertian diffuse, metal, dielectric, diffuse emissive, and isotropic media scattering.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Textures</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Solid colour, checker, image-backed texture loading, and procedural Perlin noise.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Camera and image</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Positionable camera, defocus blur, motion blur, anti-aliasing, gamma-corrected PPM/PNG output.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Lighting</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Emissive geometry, explicit light lists, cosine PDFs, object PDFs, sphere PDFs, and mixed PDFs.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Volumes</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Constant-density participating media for smoke/fog-like effects.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Runtime</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Optional row-segmented multithreaded rendering using <code>std::thread</code>.</span>
  </div>
</div>

## What I implemented

### Ray tracing core

- Ray, vector, point, colour, and interval primitives.
- Recursive radiance evaluation with configurable maximum depth.
- Per-pixel stochastic sampling for anti-aliasing.
- Gamma-corrected colour output.
- Scene traversal through a common hittable/world-object interface.
- Hit records carrying intersection point, surface normal, material, texture coordinates, and front-face orientation.

### Camera and image generation

- Configurable image dimensions, samples per pixel, and maximum bounce depth.
- Camera placement through look-from, look-at, up-vector, field-of-view, and focus-distance controls.
- Thin-lens defocus blur through disk sampling.
- Motion blur through time-sampled rays and moving objects.
- PPM image output with ImageMagick conversion to PNG.
- Optional multithreaded rendering by splitting image rows across hardware threads.

### Materials and scattering

- Lambertian diffuse scattering with cosine-weighted behaviour.
- Fuzzy metallic reflection.
- Dielectric reflection/refraction with Schlick-style Fresnel approximation.
- Diffuse emissive materials for light-emitting geometry.
- Isotropic scattering for constant-density participating media.
- Scatter records that separate attenuation, emitted radiance, specular paths, and PDF-driven scattering.

### Geometry and acceleration

- Sphere geometry, including static and moving spheres.
- Quad geometry used for Cornell-box style scenes and area lights.
- Translation and Y-axis rotation wrappers for scene objects.
- Axis-aligned bounding boxes for objects and object collections.
- BVH construction over hittable objects to reduce intersection cost.

### Textures and procedural detail

- Constant-colour textures.
- Checker textures.
- Image-backed textures using `stb_image`.
- Perlin noise with shuffled permutation tables.
- Turbulence-style procedural noise used for marble-like surfaces.

### Direct lighting and importance sampling

- Explicit light-object lists passed into the camera render path.
- Probability-density interfaces for direction sampling.
- Cosine hemisphere PDFs for diffuse scattering.
- Object PDFs for sampling directions towards hittable light geometry.
- Sphere PDFs and mixed PDFs.
- Mixture sampling between material scattering and light sampling to reduce noise in direct-light scenes.

### Volumes

- Constant-density medium wrapper around boundary geometry.
- Exponential-distance sampling through media.
- Isotropic scattering material for smoke/fog-like effects.
- Cornell-box style experimentation with volumetric objects.

## Rendering flow

At a high level, the completed implementation renders each frame like this:

```text
Build scene and light list
        |
        v
Configure camera and sampling parameters
        |
        v
Split image into row ranges for worker threads
        |
        v
For each pixel sample:
  generate camera ray with lens/time samples
        |
        v
Trace ray through world/BVH
        |
        +--> miss: return background radiance
        |
        +--> hit emissive surface: accumulate emitted radiance
        |
        +--> hit scattering surface/medium:
               sample material and/or light PDF
               update attenuation and recurse
        |
        v
Average samples, gamma correct, write image
        |
        v
Convert PPM output to PNG through ImageMagick
```

## Source layout

The project is primarily header-driven and organised around small renderer components:

```text
src/
  main.cpp                         Scene selection and executable entry point
  dep/stb_image.h                  Third-party image loader
  headers/base/                    Ray, vector, camera, material, texture, PDF, BVH, AABB, utility code
  headers/materials/               Lambertian, metal, dielectric, emissive, and isotropic materials
  headers/textures/                Solid colour, checker, image, and noise textures
  headers/world_objects/           Spheres, quads, volumes, transforms, and object collections
```

## Building

The project was developed on Windows with Visual Studio.

### Requirements

- Visual Studio with C++ desktop-development support.
- C++20-capable MSVC toolchain for the current code style and standard library use.
- ImageMagick available on `PATH` if you want automatic PPM-to-PNG conversion through the existing `magick convert image.ppm render.png` call.

The repository includes the Visual Studio solution and project files used during development.

### Visual Studio

1. Clone the repository.
2. Open `WeekendRT.sln`.
3. Select an `x64` configuration.
4. Build and run the executable.

The active scene is selected in `src/main.cpp` by choosing which render function is called.

## Project context

This was the project that gave me my first working mental model of offline rendering. It made the basic path-tracing loop concrete: camera rays, intersections, material scattering, emitted light, random sampling, recursive radiance estimates, and image accumulation.

It also exposed the limits of simply following a tutorial architecture. By the end of the third book I had implemented many important rendering features, but I also understood that I needed stronger foundations in modern C++, numerical robustness, sampling theory, acceleration structures, and renderer design. That gap is what eventually led me to build [Indus](https://github.com/essentialblend/project-indus) as a more independent renderer project.

## Status

This repository is archived and not under active development.

It is retained as a record of my first complete path-tracing study project and as a milestone between my earlier OpenGL work and my current physically based rendering work in Indus.

## References and third-party software

Primary reference:

- Peter Shirley, Trevor David Black, and Steve Hollasch, [_Ray Tracing in One Weekend_ series](https://raytracing.github.io/).

Third-party software:

- Sean Barrett's [`stb_image`](https://github.com/nothings/stb) for image texture loading.
- [ImageMagick](https://imagemagick.org/) for converting generated PPM images to PNG.