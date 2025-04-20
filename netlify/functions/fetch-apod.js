const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch').default

exports.handler = async () => {
  const NASA_API_KEY = process.env.NASA_API_KEY
  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

  try 
  {
    const res = await fetch(url)
    const data = await res.json()

    if (data.error) throw new Error(data.error.message)

    const outputCache = path.join(process.cwd(), 'resources', '_gen', 'images', 'remote')
    if (fs.existsSync(outputCache))
    {
      fs.rmSync(outputCache, { recursive: true, force: true })
    }
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'apod.json')

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir)
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    
    await fetch("https://api.netlify.com/build_hooks/680456b9f0bd823ce88af724", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    })
    
    return {
      statusCode: 200,
      body: 'APOD data fetched and saved.'
    }
  } catch (err) {
    console.error('Error occurred:', err)
    return {
      statusCode: 500,
      body: `Error: ${err.message}`
    }
  }
}
