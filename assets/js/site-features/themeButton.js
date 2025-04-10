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
  else if (themeName === 'themeContrast') 
  {
    themeSuffix = 'contrast';
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

function initTheme() 
{
  const html = document.documentElement;
  const themeToggleButton = document.querySelector('[data-theme-toggle]');
  const themes = ['themeLight', 'themeDark', 'themeContrast'];
  let currentThemeIndex = 0;

  function applyTheme(theme) 
  {
    html.dataset.userTheme = theme;
    localStorage.setItem('user-theme', theme);
    updateSyntaxTheme(theme);

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
if (themeToggleButtonElement) 
{
  initTheme();
}