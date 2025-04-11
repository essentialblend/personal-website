document.addEventListener("DOMContentLoaded", () => 
{
  document.querySelectorAll('.SF_POSTCONTENT pre').forEach((pre) => 
  {
    const codeElement = pre.querySelector("code");
    if (!codeElement) return;

    const language = codeElement.getAttribute('data-lang') || '';

    const header = document.createElement("div");
    header.className = "SF_CODE_HEADER";

    const langSpan = document.createElement("span");
    langSpan.className = "SF_CODE_LANG";
    // Convert common names to desired display, e.g., CPP -> C++
    let displayLanguage = language.toLowerCase();
    if (displayLanguage === 'CPP') displayLanguage = 'C++';
    langSpan.textContent = displayLanguage;


    const button = document.createElement("button");
    button.className = "SF_CODE_COPY_BUTTON";
    button.textContent = "COPY";
    button.setAttribute('aria-label', 'Copy code to clipboard');


    button.addEventListener("click", () => {
      const lines = Array.from(codeElement.querySelectorAll('.line'));
      const text = lines.map(line => {
        const lineContentSpan = line.querySelector('.cl') || line.querySelector('span:not(.ln)');
        return lineContentSpan ? lineContentSpan.textContent.trimEnd() : line.textContent.trimEnd();
      }).join('\n');


      navigator.clipboard.writeText(text).then(() => {
        button.classList.add('copied');
        button.textContent = "✔";
        button.setAttribute('aria-label', 'Copied!');

        setTimeout(() => {
          button.classList.remove('copied');
          button.textContent = "COPY";
          button.setAttribute('aria-label', 'Copy code to clipboard');

          button.blur();
        }, 1500);
      }).catch(err => {
         button.textContent = "Error";
         setTimeout(() => {
            button.textContent = "COPY";
            button.setAttribute('aria-label', 'Copy code to clipboard');
         }, 1500);
      });
    });

    header.appendChild(langSpan);
    header.appendChild(button);
    pre.insertBefore(header, codeElement);
  });
});