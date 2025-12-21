#!/usr/bin/env node

require('dotenv').config();

const fs = require('fs');
const path = require('path');

const key = process.env.NASA_API_KEY;

if (!key) {
  console.error("Error: NASA_API_KEY environment variable not set.");
  console.error("Ensure it's in your .env file locally or set in Netlify environment variables.");
  process.exit(1);
}

const api = `https://api.nasa.gov/planetary/apod?api_key=${key}&thumbs=true`;
const apodBase = "https://apod.nasa.gov/apod/";

const resolveApodUrl = (src) => {
  if (!src) {
    return "";
  }
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  if (src.startsWith("//")) {
    return `https:${src}`;
  }
  return `${apodBase}${src.replace(/^\//, "")}`;
};

const getApodPageUrl = (date) => {
  const match = typeof date === "string"
    ? date.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    : null;
  if (!match) {
    return `${apodBase}astropix.html`;
  }
  return `${apodBase}ap${match[1].slice(2)}${match[2]}${match[3]}.html`;
};

const extractFirstMatch = (html, pattern) => {
  const match = html.match(pattern);
  return match ? match[1] : "";
};

;(async () => {
  const fetch = globalThis.fetch;
  if (!fetch) {
    throw new Error("Global fetch is not available in this Node.js version.");
  }

  try {
    console.log(`Workspaceing APOD data from: ${api}`);
    const res = await fetch(api);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Successfully fetched APOD data:", data.title);

    if (!data || !data.title) {
      throw new Error("Received invalid data structure from NASA APOD API.");
    }

    const mediaType = String(data.media_type || "").trim().toLowerCase();
    if (mediaType === 'image') {
      data.url = data.url || data.hdurl;
      if (!data.url) {
        throw new Error("Received invalid data structure from NASA APOD API.");
      }
      data.media_type = 'image';
    } else {
      data.media_type = 'video';
      if (!data.url) {
        const apodPageUrl = getApodPageUrl(data.date);
        console.log(`APOD video missing URL; checking ${apodPageUrl}`);
        const pageRes = await fetch(apodPageUrl);
        if (pageRes.ok) {
          const html = await pageRes.text();
          const iframeSrc = extractFirstMatch(html, /<iframe[^>]+src=["']([^"']+)["']/i);
          const videoSrc = extractFirstMatch(html, /<video[^>]+src=["']([^"']+)["']/i);
          const sourceSrc = extractFirstMatch(html, /<source[^>]+src=["']([^"']+)["']/i);
          const ogImage = extractFirstMatch(html, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
          data.url = resolveApodUrl(iframeSrc || videoSrc || sourceSrc);
          if (!data.thumbnail_url && ogImage) {
            data.thumbnail_url = resolveApodUrl(ogImage);
          }
        } else {
          console.warn(`APOD page fetch failed with status ${pageRes.status}: ${pageRes.statusText}`);
        }
      }
    }

    if (!data.url) {
      console.warn("APOD payload has no usable URL; writing metadata without media URL.");
    }

    const dataDir = path.join(process.cwd(), 'data');
    fs.mkdirSync(dataDir, { recursive: true });
    const metadataPath = path.join(dataDir, 'apod.json');
    fs.writeFileSync(
      metadataPath,
      JSON.stringify(data, null, 2)
    );
    console.log(`Metadata written to ${metadataPath}`);

    if (data.media_type === 'image') {
      console.log(`Media type is image. Fetching image from: ${data.url}`);
      const imgDir = path.join(process.cwd(), 'static', 'images', 'apod');
      fs.mkdirSync(path.dirname(imgDir), { recursive: true });
      fs.rmSync(imgDir, { recursive: true, force: true });
      fs.mkdirSync(imgDir, { recursive: true });

      const imgRes = await fetch(data.url);
      if (!imgRes.ok) {
        throw new Error(`Image fetch failed with status ${imgRes.status}: ${imgRes.statusText}`);
      }

      const buf = Buffer.from(await imgRes.arrayBuffer());

      const imageUrl = new URL(data.url);
      const originalFilename = path.basename(imageUrl.pathname);

      const imgPath = path.join(imgDir, originalFilename);

      fs.writeFileSync(imgPath, buf);
      console.log(`Image successfully downloaded and saved to ${imgPath}`);
    } else {
      console.log(`Media type is '${data.media_type}', not an image. Skipping image download.`);
    }
  } catch (error) {
    console.error("An error occurred during the APOD fetch process:", error);
    process.exit(1);
  }
})();
