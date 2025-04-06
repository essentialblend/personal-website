document.addEventListener("DOMContentLoaded", () => 
{
  const btn = document.querySelector('[data-theme-toggle]');
  const themes = ["themeLight", "themeDark", "themeContrast"];
  const labels = 
  {
    themeLight: "Light",
    themeDark: "Dark",
    themeContrast: "Contrast"
  };

  const apply = theme => 
  {
    const label = labels[theme] || "Light";
    document.documentElement.setAttribute("data-user-theme", theme);
    if (btn) btn.textContent = label;
  };

  let theme = localStorage.getItem("theme") || "themeLight";
  if (!labels[theme]) 
  {
    theme = "themeLight";
    localStorage.setItem("theme", theme);
  }
  
  apply(theme);

  if (btn) 
  {
    btn.onclick = () => 
    {
      theme = themes[(themes.indexOf(theme) + 1) % themes.length];
      localStorage.setItem("theme", theme);
      apply(theme);
    };
  }
});
