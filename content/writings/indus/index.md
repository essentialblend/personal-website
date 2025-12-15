---
title: "Developing Indus"
date: 2025-12-14
subjects: ["Mathematics", "Physics", "Computer Science"] 
categories: ["Article"]
series: []
tags: ["math", "graphics", "physics", "computer graphics", "monte carlo", "monte", "carlo", "renderer", "engine", "physically based renderer", "physically", "based", "pbr", "pbrt"]
description: "My experience culminating in the development of my first ever physically based renderer."
ai_scale: B
draft: false
---

<p class="lede">Nearly a decade ago, I stumbled upon Peter Shirley's <a href="https://raytracing.github.io/">Ray Tracing in One Weekend</a> series and it completely captivated me. The only problem was that I had no exposure to computer science, programming, or practically any related domains. At the time, I was an audio engineer and a project like this felt a distant dream. I'd revisit the book occasionally, marvel at all the cool things and that was that.</p>

In 2018, I took my first real step by enrolling in a game-development undergraduate program. It was a mixed bag by any metric. The programme was not standardized nor was it rigorous (and I'm being charitable). What it did do was introduce me to some amazing people who were a decade younger but accomplished fantastic things. It was brutally humbling and still is. I learned a lot of ad-hoc C++, some Unity, and Unreal Engine was my engine of choice and where I focused on the most. Scrambling in the trenches past the barrage of tests and other tribulations on the personal front left very little time for any real stock-taking or extracurricular learning.

However, in 2022, I got the opportunity to attend graduate school which was a real turning point. My mind was maximally stretched as I constantly wrestled subjects ranging from type theory, computer graphics, operations research, computational optimization, and more. By the time I graduated in 2024, I had a solid foundation in OpenGL but still lacked many programming and computational thinking skills. Still, I felt I could take a stab at RTOW, make it a checkpoint before fixing my abysmal C++/programming adjacent abilities.

To my pleasant surprise, Shirley and co had expanded to a three-book series covering plenty advanced topics in offline rendering. It took nearly three months of full-time work and I'd written my [first real path tracer (ShirleyTracer)](/projects/shirley-tracer) following this series. It may've been nascent and toy-like, but boy it worked. A couple of months studying a C++ textbook, I re-stumbled upon [PBRT](https://www.pbrt.org/), the exact resource I should have reached for organically. Unfortunately, PBRT's codebase is massive, it's theory pretty dense and for the most part out of my depth. There was no winging it. I spent nearly six months covering some minimal set of prerequisites. A couple of setbacks on multiple fronts meant that I had to abandon the project for a while, but I finally got back and went through my first big development stretch by Q2 2025 where I scrapped my old architecture and started afresh with a standard one. 

In the following months, I worked full time learning the theory and implemented many core features, some juicy extras, building the engine component by component. The advent of LLMs has radically accelerated guided conceptual learning which was no doubt invaluable. By November 2025, I had a working version which spiritually resembled Shirley's original tracer but was far more advanced. I implemented the core Monte-Carlo estimator of the rendering algorithm, robust rounding error management (this was as hard as it was gratifying as I lacked any numerical error analysis prereqs), new/better materials, mainly dielectrics using Fresnel's equations, a microfacet coated diffuse.

{{< figure src="1080p400spp.png" caption="A 1080p 400 spp dielectrics with Fresnel and a simpler analytic coated diffuse material in Indus" >}}

I also implemented multi-threaded tile-based progressive rendering, filtering kernels, a physically sensible camera which is one (big) step short of a realistic camera model, samplers, RNG algorithms (LCG and PCG32, my number theory studies bore real fruit), BVH algorithms, and on and on. Many critical features still remain but I'm at a solid first checkpoint where I can stop to breathe. Somewhere around this time I decided to settle on the name _Indus_ for obvious reasons. After all, this journey really began when I'd forgotten even basic arithmetic, which adds immense gratification to what little I managed to achieve. 

{{< figure src="progrender.gif" caption="Progressive rendering and various HUDs in Indus" >}}

Indus is a culmination of this decade-long dream I thought I'd never get to (or have the privilege to) live. It's my long-term endeavour to implement a PBRT-like physically based renderer, learn as much as I can, and implement new techniques from ongoing research. In the near future, I anticipate adding are better volpath integrators, spectral rendering, realistic camera models, robust scene creation and management facilities among others. [Here's a link to the source code](https://github.com/essentialblend/project-indus/tree/arch-refactor-27aug2025).

