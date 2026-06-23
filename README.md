# siddharths.space

This is the source code for my site: https://siddharths.space. I was only late by about a decade with a personal website, and tried to implement a clean layout. I'm by no means a web-developer and this is my first attempt at programming a website with a framework like Hugo.

---

## Tech stack

- Hugo — static site generator  
- Netlify — hosting and deployment  
- KaTeX — math rendering  

I use a daily Netlify Function to fetch NASA’s Astronomy Picture of the Day (APOD) and inject it into the homepage.  

See [`data/apod.json`](./data/apod.json) and [`netlify/functions/fetch-apod.js`](./netlify/functions/fetch-apod.js) for details.

---

## Structure

| Path                  | Purpose                                       |
|-----------------------|-----------------------------------------------|
| `/content/`           | All written content (posts, notes, etc.)      |
| `/layouts/`           | Hugo templates and partials                   |
| `/static/`            | Fonts, images, favicon, etc.                  |
| `/data/`              | External data (e.g. APOD JSON)                |
| `/netlify/functions/` | Serverless functions (e.g. daily APOD fetch)  |

---

## Misc

- Tasks and ideas are tracked in [`issues.md`](./issues.md).  
- Technical dependencies and design rationale are in the [colophon](https://siddharths.space/colophon/).

### Updating the CV

Run `node scripts/update-cv.js` to find the newest general CV matching
`snair_cv_YYYY-MM-DD.pdf` in the local `cv-generator/releases` directory and
copy it to `static/cv/siddharth-nair-cv.pdf`.

An alternative releases directory can be passed as the first argument.

---
