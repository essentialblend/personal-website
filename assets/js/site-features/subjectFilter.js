document.addEventListener('DOMContentLoaded', () => {
  function initializeSubjectFilter(filterContainerElement) {
    const targetListId = filterContainerElement.dataset.targetList;
    const itemSelector = filterContainerElement.dataset.itemSelector;
    const targetListElement = document.getElementById(targetListId);

    const controls = filterContainerElement.querySelector('.SF_TAXONOMYFILTER_CONTROLS');
    const buttonsContainer = filterContainerElement.querySelector('.SF_TAXONOMYFILTER_BUTTONS');
    const clearButton = filterContainerElement.querySelector('.SF_TAXONOMYFILTER_CLEAR');
    const showMoreButton = filterContainerElement.querySelector('.SF_TAXONOMYFILTER_MORE');

    if (!targetListElement || !controls || !buttonsContainer || !clearButton) {
      console.warn(`Filter setup incomplete for target list: ${targetListId}. Missing required elements.`);
      return;
    }

    let activeSubjects = new Set();
    let showingAll = false;

    function updateClearButtonState() {
      clearButton.classList.toggle('enabled', activeSubjects.size > 0);
    }

    function updateShowMoreButton() {
      if (!showMoreButton) return;
      const hiddenButtons = buttonsContainer.querySelectorAll('.SF_TAXONOMYFILTER_BUTTON--HIDDEN');
      const shouldBeHidden = hiddenButtons.length === 0;

      showMoreButton.classList.toggle('hidden', shouldBeHidden);
      if (!shouldBeHidden) {
        showMoreButton.textContent = showingAll ? 'Less...' : 'More...';
      }
    }

    function filterPosts() {
      const items = targetListElement.querySelectorAll(itemSelector);
      let postsVisibleOverall = false;

      items.forEach(item => {
        const postSubjectsRaw = item.dataset.subjects;
        const postSubjects = postSubjectsRaw ? postSubjectsRaw.split(',').map(s => s.trim()).filter(s => s) : [];
        let isVisible = false;

        if (activeSubjects.size === 0) {
          isVisible = true;
        } else {
          isVisible = postSubjects.some(subject => activeSubjects.has(subject));
        }

        item.classList.toggle('hidden', !isVisible);
        if (isVisible) {
          postsVisibleOverall = true;
        }
      });

      if (targetListId === 'writings-list') {
        const yearSections = targetListElement.querySelectorAll('section[aria-labelledby^="year-"]');
        yearSections.forEach(section => {
          const allItemsInSection = section.querySelectorAll(itemSelector);
          const visibleItemsInSection = section.querySelectorAll(itemSelector + ':not(.hidden)');
          const shouldHideSection = visibleItemsInSection.length === 0 && allItemsInSection.length > 0;
          section.classList.toggle('hidden', shouldHideSection);
        });
      }

      updateClearButtonState();
    }

    controls.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('SF_TAXONOMYFILTER_BUTTON')) {
        const subject = target.dataset.subject;
        if (!subject) return;
        target.classList.toggle('active');
        if (activeSubjects.has(subject)) {
          activeSubjects.delete(subject);
        } else {
          activeSubjects.add(subject);
        }
        filterPosts();
      } else if (target === clearButton) {
         if (clearButton.classList.contains('enabled')) {
            activeSubjects.clear();
            buttonsContainer.querySelectorAll('.SF_TAXONOMYFILTER_BUTTON.active').forEach(button => button.classList.remove('active'));
            filterPosts();
         }
      } else if (target === showMoreButton) {
        if (!showMoreButton) return;
        showingAll = !showingAll;
        buttonsContainer.classList.toggle('show-all-filters', showingAll);
        updateShowMoreButton();
      }
    });

    updateShowMoreButton();
    updateClearButtonState();
  }

  document.querySelectorAll('[data-target-list]').forEach(container => {
     if (container.matches('[data-item-selector]')) {
       initializeSubjectFilter(container);
     }
  });
});