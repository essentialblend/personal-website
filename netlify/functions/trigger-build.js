// trigger-build.js
exports.handler = async () => {
  // Use dynamic import inside the async handler
  const fetch = (await import('node-fetch')).default;

  try {
    await fetch(
      'https://api.netlify.com/build_hooks/680456b9f0bd823ce88af724',
      { method: 'POST' }
    );
    console.log("Build hook triggered successfully.");
    return { statusCode: 200 };
  } catch (error) {
    console.error("Error triggering build hook:", error);
    return { statusCode: 500, body: `Error triggering build: ${error.message}` };
  }
};