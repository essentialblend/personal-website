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
      else return;
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
    tocLinkMap.get(firstHeading.id)?.classList.add('toc-active');
    currentActiveHeadingId = firstHeading.id;
  } 
  else 
  {
    currentSectionSpan.textContent = '';
  }
}

document.addEventListener('DOMContentLoaded', setupTableOfContentsInteraction);