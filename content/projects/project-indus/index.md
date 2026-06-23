---
title: "Indus"
date: 2024-04-01
weight: 2
status: ongoing
description: "My ongoing implementation of an offline pathtraced renderer based on PBRT."
stacks: ["C++"]
repo: https://github.com/essentialblend/project-indus
gallery:
  - image: "images/indus-400spp.png"
    alt: "A high-sample Indus render of coated-diffuse and dielectric spheres with depth of field"
    caption: "1080p · 400 samples per pixel · dielectric and coated-diffuse materials, Fresnel transport, and depth of field."
  - image: "images/indus-169spp.png"
    alt: "An Indus render of animated spheres exhibiting motion blur and depth of field"
    caption: "1080p · 169 samples per pixel · animated primitives, shutter-time motion blur, and depth of field."
  - image: "images/indus-progressive-render.gif"
    alt: "The Indus SFML preview progressively displaying a path-traced render"
    caption: "Progressive image-tile rendering in the SFML preview, with sample-wave updates and live progress feedback."
---

Indus is an experimental, multithreaded CPU path tracer written in modern C++. It is my long-term attempt to understand physically based rendering by implementing its constituent systems from first principles, guided primarily by *Physically Based Rendering* and the *Ray Tracing in One Weekend* series.

A small showcase of its current material, camera, sampling, and image-reconstruction features:

{{< projectgallery id="indus-showcase" >}}

Rather than targeting production use, Indus serves as a learning and research renderer: a place to translate mathematical and graphics theory into working systems, study their interactions, and progressively replace simplified implementations with more rigorous ones.

## Current Features

- Modular renderer architecture built with C++ modules and configurable engine systems.
- Unidirectional path tracing with configurable path depth and Russian roulette termination.
- Progressive rendering in expanding sample waves.
- Custom multithreaded image-tile scheduler and worker pool.
- Surface-area-heuristic BVH construction with flattened, cache-friendly traversal.
- Static, transformed, and animated geometric primitives.
- Time-sampled rays and animated transforms for motion blur.
- Perspective camera with configurable field of view, aperture, focal distance, and depth of field.
- Independent and jittered-stratified pixel samplers.
- PCG32-based random-number generation, with an additional LCG implementation.
- Lambertian diffuse, ideal dielectric, and GGX coated-diffuse materials.
- Fresnel reflection and transmission for dielectric surfaces.
- Box and Gaussian reconstruction filters with importance-sampled filter distributions.
- Robust sphere intersections using interval arithmetic and floating-point-aware ray offsets.
- Linear RGB film accumulation and standards-compliant sRGB output encoding.
- Progressive SFML preview with compact and detailed HUD modes.
- Runtime diagnostics for ray counts, BVH traversal, intersections, memory usage, render time, and system utilization.
- PNG output with automatically generated render metadata in filenames.

The rendering core is written from scratch. SFML is used for the live display and HUD, while `stb_image_write` handles PNG output.

## Current Scope

The current executable renders a programmatically constructed sphere scene inspired from my very first renderer's render-scene (from Peter Shirley's rendering tutorial) containing diffuse, dielectric, and coated-diffuse surfaces, including animated objects for testing motion blur.

Several important systems remain future work, including explicit lights and emissive geometry, next-event estimation and multiple importance sampling, meshes, textures, scene loading, spectral and volumetric transport, realistic camera models, ray differentials, adaptive sampling, and denoising.

Indus remains an ongoing learning project rather than a finished renderer that I periodically work on piece by piece as I learn new features and paradigms.

