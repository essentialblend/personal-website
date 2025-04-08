document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("[data-theme-toggle]"),n=["themeLight","themeDark","themeContrast"],s={themeLight:"Light",themeDark:"Dark",themeContrast:"Contrast"},o=e=>{const n=s[e]||"Light";document.documentElement.setAttribute("data-user-theme",e),t&&(t.textContent=n)};let e=localStorage.getItem("theme")||"themeLight";s[e]||(e="themeLight",localStorage.setItem("theme",e)),o(e),t&&(t.onclick=()=>{e=n[(n.indexOf(e)+1)%n.length],localStorage.setItem("theme",e),o(e)})})
;
function updateClock(){const e=document.getElementById("site-clock");if(!e)return;const t=new Date,n={weekday:void 0,month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"},s=t.toLocaleString("en-GB",{...n,timeZone:"Europe/London"}),o=t.toLocaleString("en-GB",n);e.textContent=s.replace(","," ·"),e.title=`Siddharth's local time.
Your time: ${o.replace(","," ·")}`}updateClock(),setInterval(updateClock,3e4)
;
document.addEventListener('DOMContentLoaded', () => 
{
  const filterControls = document.getElementById('filter-controls');
  const writingsList = document.getElementById('writings-list');
  const subjectFilterButtonsContainer = document.getElementById('subject-filter-buttons');
  const clearButton = document.getElementById('clear-filters');
  const showMoreButton = document.getElementById('show-more-filters'); 
  
  // Exit if critical elements aren't found
  if (!filterControls || !writingsList || !subjectFilterButtonsContainer || !clearButton) 
  {
    return; 
  }

  // Query posts and sections only if writingsList exists
  const posts = writingsList.querySelectorAll('.SF_BLOGPOST');
  const yearSections = writingsList.querySelectorAll('section[aria-labelledby^="year-"]');
  const filterButtons = subjectFilterButtonsContainer.querySelectorAll('.SF_TAXONOMYFILTER_BUTTON');
  
  let showingAll = false;
  let activeSubjects = new Set();

  function updateClearButtonState() 
  {
    clearButton.classList.toggle('enabled', activeSubjects.size > 0);
  }

  function updateShowMoreButton() 
  {
    // Handle case where showMoreButton might not exist (if few subjects)
    if (!showMoreButton) return; 
    
    const hiddenButtons = subjectFilterButtonsContainer.querySelectorAll('.SF_TAXONOMYFILTER_BUTTON--HIDDEN');
    const shouldBeHidden = hiddenButtons.length === 0;
    
    showMoreButton.classList.toggle('hidden', shouldBeHidden); 
    if (!shouldBeHidden) 
    {
      showMoreButton.textContent = showingAll ? 'Less...' : 'More...';
    }
  }

  function filterPosts() 
  {
    let postsVisibleOverall = false;
    yearSections.forEach(section => 
    {
      const innerPosts = section.querySelectorAll('.SF_BLOGPOST');
      let postsVisibleInSection = 0;
      innerPosts.forEach(post => 
      {
        const postSubjectsRaw = post.dataset.subjects;
        const postSubjects = postSubjectsRaw ? postSubjectsRaw.split(',').map(s => s.trim()).filter(s => s) : [];
        let isVisible = false;
        if (activeSubjects.size === 0) 
        {
          isVisible = true;
        }
        else 
        {
          isVisible = postSubjects.some(subject => activeSubjects.has(subject));
        }
        
        post.classList.toggle('hidden', !isVisible);
        if(isVisible) 
        
          postsVisibleInSection++;
          postsVisibleOverall = true;
        }
      });
      // Hide year section if it contains posts but none are visible after filtering
      section.classList.toggle('hidden', postsVisibleInSection === 0 && innerPosts.length > 0);
    });
    updateClearButtonState();
  }

  filterControls.addEventListener('click', (event) => 
  {
    const target = event.target;

    // Handle subject filter button clicks
    if (target.classList.contains('SF_TAXONOMYFILTER_BUTTON')) 
    {
      const subject = target.dataset.subject;
      
      if (!subject) return;
      
      target.classList.toggle('active');
      
      if (activeSubjects.has(subject)) 
      {
        activeSubjects.delete(subject);
      } 
      else 
      {
        activeSubjects.add(subject);
      }
      
      filterPosts();
    }
    else if (target.id === 'clear-filters') 
    {
      if(clearButton.classList.contains('enabled')) 
      {
         activeSubjects.clear();
         subjectFilterButtonsContainer.querySelectorAll('.SF_TAXONOMYFILTER_BUTTON.active').forEach(button => button.classList.remove('active'));
         
         filterPosts();
      }
    }
    // Handle show more/less button click
    else if (target.id === 'show-more-filters') 
    {
      // Check if the button itself exists before proceeding
      if (!showMoreButton) return; 
      showingAll = !showingAll;
      subjectFilterButtonsContainer.classList.toggle('show-all-filters', showingAll);
      
      updateShowMoreButton();
    }
  });

  // Initial setup calls to set button states correctly on page load
  updateShowMoreButton(); 
  updateClearButtonState(); 
});