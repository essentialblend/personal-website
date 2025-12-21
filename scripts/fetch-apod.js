#!/usr/bin/env node

require('dotenv').config();

const fs   = require('fs');
const path = require('path');

const key = process.env.NASA_API_KEY;

if (!key) {
  console.error("Error: NASA_API_KEY environment variable not set.");
  console.error("Ensure it's in your .env file locally or set in Netlify environment variables.");
  process.exit(1);
}

const api = `https://api.nasa.gov/planetary/apod?api_key=${key}&thumbs=true`;

;(async()=> {
  const fetch = (await import('node-fetch')).default;

  try {
    console.log(`Workspaceing APOD data from: ${api}`);
    const res  = await fetch(api);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
    }

    let data = await res.json();
    console.log("Successfully fetched APOD data:", data.title);

    const dataDir = path.join(process.cwd(), 'data');
    fs.mkdirSync(dataDir, { recursive: true });
    const metadataPath = path.join(dataDir, 'apod.json');
    let cachedData = null;
    if (fs.existsSync(metadataPath)) {
      try {
        cachedData = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      } catch (error) {
        console.warn("Cached APOD data could not be parsed:", error);
      }
    }

    let validationError = null;
    try {
      if (!data) {
        throw new Error("Received invalid data structure from NASA APOD API.");
      }

      const urlCandidate = String(data.url || data.hdurl || data.thumbnail_url || "");
      const looksLikeImage = /\/apod\/image\//i.test(urlCandidate)
        || /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(urlCandidate);
      const looksLikeVideo = /\.(mp4|webm)(\?|$)/i.test(urlCandidate)
        || /(youtube\.com|youtu\.be|vimeo\.com)/i.test(urlCandidate);

      const hasImageUrl = Boolean(data.url || data.hdurl);
      const hasVideoUrl = Boolean(data.url || data.thumbnail_url);

      if (!hasImageUrl && !hasVideoUrl) {
        throw new Error("Received invalid data structure from NASA APOD API.");
      }

      let mediaType = data.media_type != null ? String(data.media_type).trim().toLowerCase() : "";
      if (!mediaType) {
        if (data.thumbnail_url || looksLikeVideo) {
          mediaType = "video";
        } else if (looksLikeImage) {
          mediaType = "image";
        } else {
          mediaType = hasVideoUrl ? "video" : "image";
          console.warn(`Missing media_type, inferring '${mediaType}'.`);
        }
      }

      if (mediaType !== 'image' && mediaType !== 'video') {
        const inferred = data.thumbnail_url || looksLikeVideo ? 'video' : 'image';
        console.warn(`Unknown media_type '${data.media_type}', inferring '${inferred}'.`);
        mediaType = inferred;
      }

      if (mediaType === 'image' && !hasImageUrl && hasVideoUrl) {
        console.warn("APOD media_type is image but only video URLs exist; switching to video.");
        mediaType = 'video';
      }

      if (mediaType === 'video' && !hasVideoUrl && hasImageUrl) {
        console.warn("APOD media_type is video but only image URLs exist; switching to image.");
        mediaType = 'image';
      }

      data.media_type = mediaType;
    } catch (error) {
      validationError = error;
    }

    if (validationError) {
      console.warn("APOD data invalid:", validationError.message);
      console.warn("APOD payload:", JSON.stringify(data, null, 2));
      if (cachedData) {
        console.warn("Using cached APOD data.");
        data = cachedData;
      } else {
        console.warn("No cached APOD data available; skipping update.");
        return;
      }
    }

    const usingCached = Boolean(validationError && cachedData);
    fs.writeFileSync(
      metadataPath,
      JSON.stringify(data, null, 2)
    );
    console.log(`Metadata written to ${metadataPath}`);

    if (!usingCached && data.media_type === 'image') {
      const imageUrl = data.url || data.hdurl;
      if (!imageUrl) {
        throw new Error("APOD image is missing a usable URL.");
      }

      console.log(`Media type is image. Fetching image from: ${imageUrl}`);
      const imgDir = path.join(process.cwd(), 'static', 'images', 'apod');
      fs.mkdirSync(path.dirname(imgDir), { recursive: true });
      fs.rmSync(imgDir, { recursive: true, force: true });
      fs.mkdirSync(imgDir, { recursive: true });

      const imgRes = await fetch(imageUrl);
      if (!imgRes.ok) {
        throw new Error(`Image fetch failed with status ${imgRes.status}: ${imgRes.statusText}`);
      }

      const buf = Buffer.from(await imgRes.arrayBuffer());

      const resolvedUrl = new URL(imageUrl);
      const originalFilename = path.basename(resolvedUrl.pathname);

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
})()
