const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch').default

exports.handler = async () => {
  const NASA_API_KEY = process.env.NASA_API_KEY
  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

  try {
    const res = await fetch(url)
    const data = await res.json()

    if (data.error) throw new Error(data.error.message)

    // Clean Hugo processed image cache
    const outputCache = path.join(process.cwd(), 'resources', '_gen', 'images', 'remote')
    if (fs.existsSync(outputCache)) {
      fs.rmSync(outputCache, { recursive: true, force: true })
    }

    // Clean old APOD images
    const imageDir = path.join(process.cwd(), 'static', 'images', 'apod')
    if (fs.existsSync(imageDir)) {
      fs.readdirSync(imageDir).forEach(file => {
        fs.unlinkSync(path.join(imageDir, file))
      })
    } else {
      fs.mkdirSync(imageDir, { recursive: true })
    }

    // Download APOD image (we prefer 'url' for resized format)
    const imageUrl = data.url
    const imageExt = path.extname(imageUrl)
    const imageFilename = path.basename(imageUrl)
    const imagePath = path.join(imageDir, imageFilename)

    const imgRes = await fetch(imageUrl)
    if (!imgRes.ok) throw new Error(`Failed to fetch image: ${imgRes.statusText}`)

    const imgBuffer = await imgRes.buffer()
    fs.writeFileSync(imagePath, imgBuffer)

    // Save APOD metadata
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'apod.json')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir)
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

    // Trigger site rebuild
    await fetch("https://api.netlify.com/build_hooks/680456b9f0bd823ce88af724", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    })

    return {
      statusCode: 200,
      body: 'APOD fetched, image saved, and build triggered.'
    }
  } catch (err) {
    console.error('Error occurred:', err)
    return {
      statusCode: 500,
      body: `Error: ${err.message}`
    }
  }
}
