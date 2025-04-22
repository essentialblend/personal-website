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

const api = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

;(async()=> {
  const fetch = (await import('node-fetch')).default;

  try {
    console.log(`Workspaceing APOD data from: ${api}`);
    const res  = await fetch(api);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Successfully fetched APOD data:", data.title);

    if (!data || !data.media_type || !data.url) {
        throw new Error("Received invalid data structure from NASA APOD API.");
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
})()