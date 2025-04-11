function updateSyntaxTheme(e){const t=document.getElementById("syntax-stylesheet");if(!t)return;let n="light";e==="themeDark"?n="dark":e==="themeHigh"&&(n="high");const o=`syntax-theme-${n}`,s=document.querySelector(`meta[name="${o}"]`);if(s&&s.content)t.href=s.content;else{const e=document.querySelector('meta[name="syntax-theme-light"]');e&&e.content&&(t.href=e.content)}}function initTheme(){const i=document.documentElement,t=document.querySelector("[data-theme-toggle]"),e=["themeLight","themeDark","themeHigh"];let n=0;function o(e){i.dataset.userTheme=e,localStorage.setItem("user-theme",e),updateSyntaxTheme(e);let n=e.replace("theme","");t&&(t.textContent=n)}const s=localStorage.getItem("user-theme");s&&e.includes(s)?(n=e.indexOf(s),o(s)):o(e[0]),t&&t.addEventListener("click",()=>{n=(n+1)%e.length;const t=e[n];o(t)})}const themeToggleButtonElement=document.querySelector("[data-theme-toggle]");themeToggleButtonElement&&initTheme()
;
function updateClock(){const e=document.getElementById("site-clock");if(!e)return;const t=new Date,n={weekday:void 0,month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"},s=t.toLocaleString("en-GB",{...n,timeZone:"Europe/London"}),o=t.toLocaleString("en-GB",n);e.textContent=s.replace(","," ·"),e.title=`Siddharth's local time.
Your time: ${o.replace(","," ·")}`}updateClock(),setInterval(updateClock,3e4)
;
document.addEventListener("DOMContentLoaded",()=>{function e(e){const a=e.dataset.targetList,r=e.dataset.itemSelector,c=document.getElementById(a),l=e.querySelector(".SF_TAXONOMYFILTER_CONTROLS"),s=e.querySelector(".SF_TAXONOMYFILTER_BUTTONS"),o=e.querySelector(".SF_TAXONOMYFILTER_CLEAR"),n=e.querySelector(".SF_TAXONOMYFILTER_MORE");if(!c||!l||!s||!o){console.warn(`Filter setup incomplete for target list: ${a}. Missing required elements.`);return}let t=new Set,i=!1;function d(){o.classList.toggle("enabled",t.size>0)}function u(){if(!n)return;const t=s.querySelectorAll(".SF_TAXONOMYFILTER_BUTTON--HIDDEN"),e=t.length===0;n.classList.toggle("hidden",e),e||(n.textContent=i?"Less...":"More...")}function h(){const e=c.querySelectorAll(r);let n=!1;if(e.forEach(e=>{const o=e.dataset.subjects,i=o?o.split(",").map(e=>e.trim()).filter(e=>e):[];let s=!1;t.size===0?s=!0:s=i.some(e=>t.has(e)),e.classList.toggle("hidden",!s),s&&(n=!0)}),a==="writings-list"){const e=c.querySelectorAll('section[aria-labelledby^="year-"]');e.forEach(e=>{const t=e.querySelectorAll(r),n=e.querySelectorAll(r+":not(.hidden)"),s=n.length===0&&t.length>0;e.classList.toggle("hidden",s)})}d()}l.addEventListener("click",e=>{const a=e.target;if(a.classList.contains("SF_TAXONOMYFILTER_BUTTON")){const e=a.dataset.subject;if(!e)return;a.classList.toggle("active"),t.has(e)?t.delete(e):t.add(e),h()}else if(a===o)o.classList.contains("enabled")&&(t.clear(),s.querySelectorAll(".SF_TAXONOMYFILTER_BUTTON.active").forEach(e=>e.classList.remove("active")),h());else if(a===n){if(!n)return;i=!i,s.classList.toggle("show-all-filters",i),u()}}),u(),d()}document.querySelectorAll("[data-target-list]").forEach(t=>{t.matches("[data-item-selector]")&&e(t)})})
;
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".SF_POSTCONTENT pre").forEach(e=>{const n=e.querySelector("code");if(!n)return;const a=n.getAttribute("data-lang")||"",s=document.createElement("div");s.className="SF_CODE_HEADER";const o=document.createElement("span");o.className="SF_CODE_LANG";let i=a.toLowerCase();i==="CPP"&&(i="C++"),o.textContent=i;const t=document.createElement("button");t.className="SF_CODE_COPY_BUTTON",t.textContent="COPY",t.setAttribute("aria-label","Copy code to clipboard"),t.addEventListener("click",()=>{const e=Array.from(n.querySelectorAll(".line")),s=e.map(e=>{const t=e.querySelector(".cl")||e.querySelector("span:not(.ln)");return t?t.textContent.trimEnd():e.textContent.trimEnd()}).join(`
`);navigator.clipboard.writeText(s).then(()=>{t.classList.add("copied"),t.textContent="✔",t.setAttribute("aria-label","Copied!"),setTimeout(()=>{t.classList.remove("copied"),t.textContent="COPY",t.setAttribute("aria-label","Copy code to clipboard"),t.blur()},1500)}).catch(e=>{t.textContent="Error",setTimeout(()=>{t.textContent="COPY",t.setAttribute("aria-label","Copy code to clipboard")},1500)})}),s.appendChild(o),s.appendChild(t),e.insertBefore(s,n)})})
;
function setupTableOfContentsInteraction() 
{
  const tocContainer = document.querySelector('.SF_TOC_CONTAINER');
  const contentContainer = document.querySelector('.SF_POSTCONTENT');
  
  if (!tocContainer || !contentContainer)
  {
    if(tocContainer) tocContainer.style.display = 'none';
    return; 
  }

  const tocNav = tocContainer.querySelector('.SF_TOC');
  const tocStrip = tocContainer.querySelector('.SF_TOC_STRIP');
  const currentSectionSpan = tocContainer.querySelector('.SF_TOC_CURRENT_SECTION');

  if (!tocNav || !tocStrip || !currentSectionSpan) 
  {
    tocContainer.style.display = 'none';
    return;
  }

  const headings = Array.from(contentContainer.querySelectorAll('h2, h3, h4'));
  if (headings.length === 0) 
  {
    tocContainer.style.display = 'none';
    return;
  }

  const tocLinkMap = new Map();
  tocNav.innerHTML = ''; 
  let rootList = document.createElement('ul');
  tocNav.appendChild(rootList);
  let listStack = [rootList];

  headings.forEach(heading => 
  {
    if (!heading.id) 
    {
      heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    }
    const level = parseInt(heading.tagName.substring(1), 10);
    while (level < listStack.length + 1) listStack.pop();
    while (level > listStack.length + 1) 
    {
      if (listStack[listStack.length - 1].lastElementChild) 
      {
        const newSubList = document.createElement('ul');
        listStack[listStack.length - 1].lastElementChild.appendChild(newSubList);
        listStack.push(newSubList);
      } 
      else return; }
    }
    let currentList = listStack[listStack.length - 1];
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = heading.textContent;
    link.href = `#${heading.id}`;
    listItem.appendChild(link);
    currentList.appendChild(listItem);
    tocLinkMap.set(heading.id, link);
  });

  function closeToc() 
  {
    tocContainer.classList.remove('is-expanded');
    tocContainer.classList.add('is-collapsed');
    tocStrip.setAttribute('aria-expanded', 'false');
  }

  function openToc() 
  {
    tocContainer.classList.add('is-expanded');
    tocContainer.classList.remove('is-collapsed');
    tocStrip.setAttribute('aria-expanded', 'true');
  }

  tocStrip.addEventListener('mousedown', (event) => 
  {
    openToc();
  });

  document.addEventListener('mouseup', (event) => 
  {
    if (tocContainer.classList.contains('is-expanded')) 
    {
        const isInsideTocNav = tocNav.contains(event.target);
        const linkElement = isInsideTocNav ? event.target.closest('a') : null   
        if (linkElement) 
        {
          linkElement.click(); 
          closeToc(); 
        } 
        else 
        {
          closeToc();
        }
    }
  });
  
   document.addEventListener('keydown', (event) => 
    {
        if (event.key === 'Escape' && tocContainer.classList.contains('is-expanded')) 
        {
            closeToc();
        }
    });
    
   tocStrip.setAttribute('aria-expanded', 'false');
   tocContainer.classList.add('is-collapsed'); 
   tocContainer.classList.remove('is-expanded');

   let currentActiveHeadingId = null;
   const observedHeadingsMap = new Map();

   const handleIntersect = (entries) => 
    {
       entries.forEach(entry => 
        {
           observedHeadingsMap.set(entry.target.id, entry);
        });

       let activeHeadingId = null;
       
       const visibleEntries = Array.from(observedHeadingsMap.values()).filter(entry => entry.isIntersecting).sort((a, b) => a.target.offsetTop - b.target.offsetTop);

       if (visibleEntries.length > 0) 
        {
            activeHeadingId = visibleEntries[0].target.id; 
        } 
        else 
        {
        let lastKnownHeadingId = null;
        let minNegativeTop = -Infinity;
        headings.forEach(h => 
        {
            const rect = h.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.25 && rect.top > minNegativeTop) 
            {
                minNegativeTop = rect.top;
                lastKnownHeadingId = h.id;
            }
        });
            activeHeadingId = lastKnownHeadingId || (headings.length > 0 ? headings[0].id : null);
        }

        if (activeHeadingId && activeHeadingId !== currentActiveHeadingId) 
            {
                const headingElement = document.getElementById(activeHeadingId);
                if (headingElement) 
                {
                    currentSectionSpan.innerHTML = headingElement.innerHTML;
                    if (typeof renderMathInElement === 'function') 
                    {
                        renderMathInElement(currentSectionSpan, 
                        {
                            delimiters: [
                            {left: '$$', right: '$$', display: true},
                            {left: '\\[', right: '\\]', display: true},
                            {left: '$', right: '$', display: false},
                            {left: '\\(', right: '\\)', display: false}
                       ],
                        throwOnError: false 
                        });
                    }
                }

            if (currentActiveHeadingId) 
            {
               tocLinkMap.get(currentActiveHeadingId)?.classList.remove('toc-active');
            }
            tocLinkMap.get(activeHeadingId)?.classList.add('toc-active');
            currentActiveHeadingId = activeHeadingId;
        } 
        else if (!activeHeadingId && currentActiveHeadingId) 
        {
            tocLinkMap.get(currentActiveHeadingId)?.classList.remove('toc-active');
            currentActiveHeadingId = null;
            const firstHeading = headings.length > 0 ? headings[0] : null;
            if (firstHeading) 
            {
                currentSectionSpan.innerHTML = firstHeading.innerHTML;
                if (typeof renderMathInElement === 'function') {
                    renderMathInElement(currentSectionSpan, 
                    {
                        delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '\\[', right: '\\]', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\(', right: '\\)', display: false}
                        ],
                        throwOnError: false 
                    });
                  }
            } 
            else 
            {
              currentSectionSpan.textContent = '';
            }
        }
   };

   const observer = new IntersectionObserver(handleIntersect, 
    { 
        rootMargin: '0px 0px -75% 0px', 
        threshold: 0 
    });

   headings.forEach(heading => observer.observe(heading));

    const firstHeading = headings.length > 0 ? headings[0] : null;
    if (firstHeading) 
    {
        currentSectionSpan.innerHTML = firstHeading.innerHTML;
         if (typeof renderMathInElement === 'function') {
           renderMathInElement(currentSectionSpan, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '\\[', right: '\\]', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false}
                ],
                throwOnError: false 
           });
        }
        tocLinkMap.get(firstHeading.id)?.classList.add('toc-active');
        currentActiveHeadingId = firstHeading.id;
    } 
    else 
    {
        currentSectionSpan.textContent = '';
    }
}

document.addEventListener('DOMContentLoaded', setupTableOfContentsInteraction);
;
function setupScrollToTop(){const e=document.querySelector(".SF_SCROLLTOP_BTN");if(!e)return;const n=window.innerHeight*.8;function s(e,t){let s,n;return function(...o){const i=this;n?(clearTimeout(s),s=setTimeout(function(){Date.now()-n>=t&&(e.apply(i,o),n=Date.now())},t-(Date.now()-n))):(e.apply(i,o),n=Date.now())}}const t=()=>{window.scrollY>n?e.classList.add("show"):e.classList.remove("show")},o=s(t,200);window.addEventListener("scroll",o),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),t()}document.addEventListener("DOMContentLoaded",setupScrollToTop)