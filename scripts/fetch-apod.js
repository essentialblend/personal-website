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
const dataDir = path.join(process.cwd(), 'data');
const metadataPath = path.join(dataDir, 'apod.json');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithTimeout = async (url, options = {}, timeoutMs = 10000) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

const fetchWithRetry = async (url, options = {}, retryOptions = {}) => {
  const {
    retries = 2,
    timeoutMs = 10000,
    retryDelayMs = 1000,
    label = 'request'
  } = retryOptions;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetchWithTimeout(url, options, timeoutMs);

      if (res.ok || res.status < 500) {
        return res;
      }

      if (attempt < retries) {
        console.warn(`${label} failed with status ${res.status}: ${res.statusText}. Retrying...`);
        await sleep(retryDelayMs * (attempt + 1));
        continue;
      }

      return res;
    } catch (error) {
      if (attempt < retries) {
        const message = error && error.name === 'AbortError' ? 'timed out' : 'failed';
        console.warn(`${label} ${message}. Retrying...`);
        await sleep(retryDelayMs * (attempt + 1));
        continue;
      }

      throw error;
    }
  }

  throw new Error(`${label} failed after retries.`);
};

const useCachedIfAvailable = (reason) => {
  if (!fs.existsSync(metadataPath)) {
    return false;
  }
  console.warn(`${reason} Using cached APOD data from ${metadataPath}.`);
  return true;
};

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

const downloadApodImage = async (imageUrl) => {
  console.log(`Media type is image. Fetching image from: ${imageUrl}`);
  const imgDir = path.join(process.cwd(), 'static', 'images', 'apod');
  const tempDir = `${imgDir}.tmp`;

  fs.mkdirSync(path.dirname(imgDir), { recursive: true });
  fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  try {
    const imgRes = await fetchWithRetry(
      imageUrl,
      {},
      {
        retries: 1,
        timeoutMs: 20000,
        retryDelayMs: 2000,
        label: 'APOD image request'
      }
    );

    if (!imgRes.ok) {
      throw new Error(`Image fetch failed with status ${imgRes.status}: ${imgRes.statusText}`);
    }

    const buf = Buffer.from(await imgRes.arrayBuffer());

    const imageUrlObj = new URL(imageUrl);
    const originalFilename = path.basename(imageUrlObj.pathname) || "apod.jpg";
    const imgPath = path.join(tempDir, originalFilename);

    fs.writeFileSync(imgPath, buf);

    fs.rmSync(imgDir, { recursive: true, force: true });
    fs.renameSync(tempDir, imgDir);
    console.log(`Image successfully downloaded and saved to ${path.join(imgDir, originalFilename)}`);
  } catch (error) {
    fs.rmSync(tempDir, { recursive: true, force: true });
    throw error;
  }
};

;(async () => {
  const fetch = globalThis.fetch;
  if (!fetch) {
    throw new Error("Global fetch is not available in this Node.js version.");
  }

  try {
    console.log(`Workspaceing APOD data from: ${api}`);
    let res;
    try {
      res = await fetchWithRetry(
        api,
        {},
        {
          retries: 2,
          timeoutMs: 12000,
          retryDelayMs: 1500,
          label: 'APOD API request'
        }
      );
    } catch (error) {
      const reason = `APOD API request failed: ${error.message || error}`;
      if (useCachedIfAvailable(reason)) {
        return;
      }
      throw error;
    }

    if (!res.ok) {
      const reason = `API request failed with status ${res.status}: ${res.statusText}`;
      if (useCachedIfAvailable(reason)) {
        return;
      }
      throw new Error(reason);
    }

    const data = await res.json();
    console.log("Successfully fetched APOD data:", data.title);

    if (!data || !data.title) {
      const reason = "Received invalid data structure from NASA APOD API.";
      if (useCachedIfAvailable(reason)) {
        return;
      }
      throw new Error(reason);
    }

    const mediaType = String(data.media_type || "").trim().toLowerCase();
    if (mediaType === 'image') {
      data.url = data.url || data.hdurl;
      if (!data.url) {
        const reason = "Received invalid data structure from NASA APOD API.";
        if (useCachedIfAvailable(reason)) {
          return;
        }
        throw new Error(reason);
      }
      data.media_type = 'image';

      try {
        await downloadApodImage(data.url);
      } catch (error) {
        const reason = error && error.message ? error.message : String(error);
        if (useCachedIfAvailable(reason)) {
          return;
        }
        throw error;
      }
    } else {
      data.media_type = 'video';
      if (!data.url) {
        const apodPageUrl = getApodPageUrl(data.date);
        console.log(`APOD video missing URL; checking ${apodPageUrl}`);
        let pageRes;
        try {
          pageRes = await fetchWithRetry(
            apodPageUrl,
            {},
            {
              retries: 1,
              timeoutMs: 10000,
              retryDelayMs: 1000,
              label: 'APOD page request'
            }
          );
        } catch (error) {
          pageRes = null;
          console.warn(`APOD page fetch failed: ${error.message || error}`);
        }

        if (pageRes && pageRes.ok) {
          const html = await pageRes.text();
          const iframeSrc = extractFirstMatch(html, /<iframe[^>]+src=["']([^"']+)["']/i);
          const videoSrc = extractFirstMatch(html, /<video[^>]+src=["']([^"']+)["']/i);
          const sourceSrc = extractFirstMatch(html, /<source[^>]+src=["']([^"']+)["']/i);
          const ogImage = extractFirstMatch(html, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
          data.url = resolveApodUrl(iframeSrc || videoSrc || sourceSrc);
          if (!data.thumbnail_url && ogImage) {
            data.thumbnail_url = resolveApodUrl(ogImage);
          }
        } else if (pageRes) {
          console.warn(`APOD page fetch failed with status ${pageRes.status}: ${pageRes.statusText}`);
        }
      }
    }

    if (!data.url) {
      console.warn("APOD payload has no usable URL; writing metadata without media URL.");
    }

    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(metadataPath, JSON.stringify(data, null, 2));
    console.log(`Metadata written to ${metadataPath}`);

    if (data.media_type !== 'image') {
      console.log(`Media type is '${data.media_type}', not an image. Skipping image download.`);
    }
  } catch (error) {
    console.error("An error occurred during the APOD fetch process:", error);
    process.exit(1);
  }
})();