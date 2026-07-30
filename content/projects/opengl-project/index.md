---
title: "OpenGL Real-Time Rendering Demo"
date: 2023-12-01
weight: 4
status: archived
description: "A real-time graphics scene developed in C++, OpenGL, and GLSL for my MSc Computer Graphics coursework."
stacks: ["OpenGL", "C++", "GLSL"]
repo: https://github.com/essentialblend/openGLgfxDemo/tree/main
gallery:
  - image: "ogl-i.png"
    alt: "OpenGL demo scene with day-night lighting, shadows, and skybox rendering"
    caption: "Day-night lighting, shadow mapping, sky cubemaps, and mapped scene assets."
  - image: "ogl-ii.png"
    alt: "OpenGL demo scene showing screen-space crepuscular rays"
    caption: "A simple implementation of post-process crepuscular rays using framebuffer-based screen-space processing."
  - image: "ogl-iii.png"
    alt: "OpenGL demo terrain with mapped materials"
    caption: "Procedural terrain with mapped materials, generated geometry, and scene lighting."
---

A real-time graphics scene developed in C++, OpenGL, and GLSL for my MSc Computer Graphics coursework at the University of Nottingham in late 2023.

The assessed requirements were comparatively modest, so I used the project as an opportunity to explore a broader range of real-time rendering techniques and combine them into a single interactive scene. The result includes custom model loading, mapped materials, dynamic lighting, shadow mapping, procedural terrain, framebuffer-based post-processing, and a screen-space volumetric-light effect.

> This project was completed in late 2023 while I was still relatively new to both C++ and real-time graphics programming. I have preserved it substantially as submitted because it documents the breadth of OpenGL, GLSL, and rendering techniques I explored, but its C++ structure and implementation style are not representative of my current engineering standards.
>
> Since completing this project, I have studied modern C++ much more rigorously and applied that work in [Indus](https://github.com/essentialblend/project-indus), a multithreaded C++23 CPU path tracer built around physically based rendering. Indus includes a modular renderer architecture, custom mathematical and geometric foundations, BSDF-based light transport, SAH BVH acceleration, progressive rendering, concurrent scheduling, and detailed runtime instrumentation. It is the best representation of my current C++ design and programming ability.

## Demo

<figure>
  <video controls preload="metadata" style="max-width: 100%; height: auto;">
    <source src="opengl-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><p>A short recorded demonstration of the interactive OpenGL scene.</p></figcaption>
</figure>

## Gallery

{{< projectgallery id="opengl-showcase" >}}

## At a glance

<div class="SF_PROJECT_GLANCE">
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Graphics API</span>
    <span class="SF_PROJECT_GLANCE_IMPL">OpenGL core profile with GLFW and GLAD.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Shading</span>
    <span class="SF_PROJECT_GLANCE_IMPL">GLSL vertex and fragment shaders with Blinn-Phong lighting.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Materials</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Diffuse, specular, normal, ambient-occlusion, roughness, and emissive maps.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Geometry</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Custom OBJ loading and procedurally generated terrain.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Lighting</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Directional and point-light shading with a dynamic day-night presentation.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Shadows</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Directional shadow mapping with percentage-closer filtering.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Post-processing</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Off-screen framebuffer rendering and screen-space effects.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Environment</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Skybox rendering and animated lighting conditions.</span>
  </div>
  <div class="SF_PROJECT_GLANCE_ROW">
    <span class="SF_PROJECT_GLANCE_AREA">Resource handling</span>
    <span class="SF_PROJECT_GLANCE_IMPL">Wrapper types for selected OpenGL buffer and framebuffer objects.</span>
  </div>
</div>

## What I implemented

### Real-time rendering pipeline

- OpenGL context creation and interactive window management using GLFW.
- OpenGL function loading through GLAD.
- GLSL shader loading, compilation, program linking, activation, and uniform updates.
- Vertex-array, vertex-buffer, element-buffer, framebuffer, and renderbuffer handling.
- Indexed mesh rendering and texture-backed material data.
- Camera movement and view/projection transformations.
- OpenGL debug-context output for API, shader, portability, performance, and undefined-behaviour messages.

### Geometry and asset loading

- A custom parser for Wavefront OBJ geometry.
- Construction of indexed vertex and triangle data.
- Per-vertex positions, texture coordinates, normals, tangents, and bitangents.
- Tangent-space basis generation for normal-mapped surfaces.
- Separate scene geometry and procedurally generated terrain geometry.

### Lighting and materials

- Directional-light and point-light shading.
- Blinn-Phong diffuse and specular response.
- Distance attenuation for point lights.
- Support for:
  - diffuse maps;
  - specular maps;
  - tangent-space normal maps;
  - ambient-occlusion maps;
  - roughness-driven shininess;
  - emissive maps.
- Dynamic interpolation of lighting and environmental properties across the day-night presentation.

### Shadow mapping

- Rendering the scene from the light's point of view into a depth framebuffer.
- Transformation of world-space fragments into light space.
- Slope-sensitive depth bias to reduce shadow acne.
- Percentage-closer filtering over neighbouring depth samples to soften shadow edges.
- A dedicated depth-map visualisation path used while developing and debugging the effect.

### Procedural terrain

- Two-dimensional Perlin noise generated from a shuffled permutation table.
- Fractal Brownian motion using multiple noise octaves.
- Height-field mesh generation from the resulting noise values.
- Procedural triangle-index construction.
- Averaged vertex normals derived from terrain faces.
- Tangent and bitangent calculation for mapped terrain shading.

### Framebuffers and post-processing

- Rendering the main scene into an off-screen framebuffer.
- Full-screen-quad processing of the rendered scene.
- Separate occlusion and effect buffers for screen-space light shafts.
- A radial screen-space sampling pass that accumulates illumination towards the projected light position.
- Final combination of the main scene and volumetric-light contribution.
- Experimental image-space processing and gamma-handling work.

### Environment and presentation

- Cubemap skybox rendering.
- A moving sun/light direction.
- Interpolated sky and lighting properties used to create a changing atmosphere.
- Animated scene elements and an explorable camera.
- Visual debugging helpers for light direction and intermediate rendering data.

## Rendering flow

At a high level, each frame follows this structure:

```text
Input and camera update
        |
        v
Update sun, lighting, and scene state
        |
        +--> Render light-space depth map
        |
        +--> Render main scene to off-screen framebuffer
        |
        +--> Render occlusion information for light shafts
        |
        +--> Evaluate screen-space radial light effect
        |
        v
Composite scene and post-process result
        |
        v
Present final image
```

The project was primarily an exercise in understanding how the individual stages of a rasterisation renderer interact: CPU-side scene and resource management, GPU buffer state, coordinate-space transformations, shader inputs, depth rendering, material evaluation, and image-space composition.

## Project structure

```text
src/
  FinalProjectCW3.cpp       Main application, scene setup, and render loop
  Headers/                  Camera, shader, model-loading, terrain, and utility code
  openglObjects/            OpenGL resource-wrapper implementations
  Shaders/                  GLSL vertex and fragment shaders
  includes/                 Third-party headers and OpenGL support code

dep/                        Models, textures, cubemaps, and other scene assets
```

## Building

The project was developed on Windows using Visual Studio and includes a Visual Studio solution.

### Requirements

- A GPU and driver supporting the requested OpenGL core-profile context.
- Visual Studio with C++ desktop-development support.
- GLFW.
- GLAD.
- GLM.

The repository contains the versions and local project configuration used during development.

### Visual Studio

1. Clone or download the repository.
2. Open `FinalProjectCW3.sln`.
3. Select an `x64` configuration.
4. Build the solution.
5. Run the executable with the repository as its working directory so that relative shader and asset paths resolve correctly.

> The project has not been actively maintained or recently tested on a clean machine. Build configuration and asset paths may require adjustment on a different Visual Studio or dependency setup.

## Project context

This project was my first substantial attempt to bring many real-time graphics concepts together in one program. It gave me practical experience with the rasterisation pipeline, GLSL, GPU resources, coordinate spaces, lighting, shadow maps, procedural geometry, and framebuffer effects.

I later moved towards physically based offline rendering in order to study light transport, sampling, numerical robustness, acceleration structures, and renderer architecture in greater depth. That work continues in [Indus](https://github.com/essentialblend/project-indus), a multithreaded CPU path tracer written in modern C++.

The two projects represent different stages of the same graphics-programming path:

- this repository records my early hands-on work with OpenGL, GLSL, and interactive rasterisation;
- Indus represents my current work in physically based rendering and modern C++ renderer design.

## Status

This repository is archived and is not under active development.

It is retained as a record of the graphics techniques I explored for the coursework and as evidence of prior practical OpenGL and GLSL experience. It should not be interpreted as a production engine or as the current standard of my C++ code.
