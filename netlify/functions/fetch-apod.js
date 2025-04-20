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

    console.log('Fetched data:', data)

    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'apod.json')

    // ✅ Ensure the directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir)
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

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
