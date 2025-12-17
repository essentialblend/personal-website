// js/themeButton.js

function updateSyntaxTheme(themeName) 
{
  const syntaxLink = document.getElementById('syntax-stylesheet');
  if (!syntaxLink) return;
  
  let themeSuffix = 'light';
  if (themeName === 'themeDark') 
  {
    themeSuffix = 'dark';
  } 
  else if (themeName === 'themeHigh') 
  {
    themeSuffix = 'high';
  }
  
  const metaTagName = `syntax-theme-${themeSuffix}`;
  const metaTag = document.querySelector(`meta[name="${metaTagName}"]`);
  if (metaTag && metaTag.content) 
  {
    syntaxLink.href = metaTag.content;
  } 
  else 
  {
    const lightMeta = document.querySelector('meta[name="syntax-theme-light"]');
    if (lightMeta && lightMeta.content) 
    {
      syntaxLink.href = lightMeta.content;
    }
  }
}

function updateGiscusTheme(themeName) 
{
  const commentsSection = document.querySelector('.SF_COMMENTS');
  if (!commentsSection) return;

  const themeMap = {
    themeLight: commentsSection.dataset.giscusThemeLight,
    themeDark: commentsSection.dataset.giscusThemeDark || commentsSection.dataset.giscusThemeLight,
    themeHigh: commentsSection.dataset.giscusThemeHigh || commentsSection.dataset.giscusThemeLight
  };

  const nextTheme = themeMap[themeName] || themeMap.themeLight;
  if (!nextTheme) return;

  const applyThemeToGiscus = () => {
    const giscusFrame = document.querySelector('iframe.giscus-frame');
    if (giscusFrame && giscusFrame.contentWindow) {
      giscusFrame.contentWindow.postMessage(
        { giscus: { setConfig: { theme: nextTheme } } },
        'https://giscus.app'
      );
      return true;
    }
    return false;
  };

  // Try immediately, then retry until the iframe is ready (caps at ~2s).
  if (!applyThemeToGiscus()) {
    let attempts = 0;
    const maxAttempts = 8;
    const intervalId = setInterval(() => {
      attempts += 1;
      if (applyThemeToGiscus() || attempts >= maxAttempts) {
        clearInterval(intervalId);
      }
    }, 250);

    const giscusFrame = document.querySelector('iframe.giscus-frame');
    if (giscusFrame) {
      giscusFrame.addEventListener('load', applyThemeToGiscus, { once: true });
    }
  }
}

function initTheme() 
{
  const html = document.documentElement;
  const themeToggleButton = document.querySelector('[data-theme-toggle]');
  const themes = ['themeLight', 'themeDark', 'themeHigh'];
  let currentThemeIndex = 0;

  function applyTheme(theme) 
  {
    html.dataset.userTheme = theme;
    localStorage.setItem('user-theme', theme);
    updateSyntaxTheme(theme);
    updateGiscusTheme(theme);

    let currentButtonText = theme.replace('theme', '');
    if (themeToggleButton) 
    {
      themeToggleButton.textContent = currentButtonText; 
    }
  }

  const storedTheme = localStorage.getItem('user-theme');
  if (storedTheme && themes.includes(storedTheme)) 
  {
    currentThemeIndex = themes.indexOf(storedTheme);
    applyTheme(storedTheme);
  } else 
  {
    applyTheme(themes[0]);
  }

  if (themeToggleButton) 
  {
    themeToggleButton.addEventListener('click', () => 
    {
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      const newTheme = themes[currentThemeIndex];
      applyTheme(newTheme);
    });
  }
}

const themeToggleButtonElement = document.querySelector('[data-theme-toggle]');
initTheme();
