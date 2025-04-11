function setupScrollToTop() 
{
  const button = document.querySelector('.SF_SCROLLTOP_BTN');
  if (!button) return;

  const scrollThreshold = window.innerHeight * 0.8; 
  function throttle(func, limit) 
  {
    let lastFunc;
    let lastRan;
    return function(...args) 
    {
      const context = this;
      if (!lastRan) 
      {
        func.apply(context, args);
        lastRan = Date.now();
      } 
      else 
      {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() 
        {
          if ((Date.now() - lastRan) >= limit) 
          {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    }
  }

  const handleScroll = () => 
  {
    if (window.scrollY > scrollThreshold) 
    {
      button.classList.add('show');
    } 
    else 
    {
      button.classList.remove('show');
    }
  };

  const throttledScrollHandler = throttle(handleScroll, 200);

  window.addEventListener('scroll', throttledScrollHandler);

  button.addEventListener('click', () => 
  {
    window.scrollTo(
    { 
      top: 0, 
      behavior: 'smooth' 
    });
  });

  handleScroll();
}

document.addEventListener('DOMContentLoaded', setupScrollToTop);