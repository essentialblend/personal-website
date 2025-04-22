const fetch = require('node-fetch')
exports.handler = async () => {
  await fetch(
    'https://api.netlify.com/build_hooks/680456b9f0bd823ce88af724',
    { method: 'POST' }
  )
  return { statusCode: 200 }
}