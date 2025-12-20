document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-library-filter]').forEach((container) => {
    const targetListId = container.dataset.targetList;
    const itemSelector = container.dataset.itemSelector;
    const targetListElement = targetListId ? document.getElementById(targetListId) : null;
    const clearButton = container.querySelector('.SF_TAXONOMYFILTER_CLEAR');
    const viewButtons = Array.from(container.querySelectorAll('[data-view]'));
    const groupElements = Array.from(container.querySelectorAll('[data-filter-group]'));

    if (!targetListElement || !itemSelector || !clearButton || groupElements.length === 0) {
      return;
    }

    const activeFilters = new Map();
    groupElements.forEach((group) => {
      activeFilters.set(group.dataset.filterGroup, new Set());
    });

    const updateClearState = () => {
      const hasActive = Array.from(activeFilters.values()).some((set) => set.size > 0);
      clearButton.classList.toggle('enabled', hasActive);
    };

    const filterItems = () => {
      const items = targetListElement.querySelectorAll(itemSelector);

      items.forEach((item) => {
        let isVisible = true;

        activeFilters.forEach((values, groupName) => {
          if (values.size === 0 || !isVisible) {
            return;
          }

          const rawValues = item.dataset[groupName];
          const itemValues = rawValues
            ? rawValues.split(',').map((value) => value.trim()).filter(Boolean)
            : [];

          const matches = itemValues.some((value) => values.has(value));
          if (!matches) {
            isVisible = false;
          }
        });

        item.classList.toggle('hidden', !isVisible);
      });

      updateClearState();
    };

    groupElements.forEach((group) => {
      group.addEventListener('click', (event) => {
        const button = event.target.closest('.SF_TAXONOMYFILTER_BUTTON');
        if (!button) {
          return;
        }

        const value = button.dataset.filterValue;
        const groupName = group.dataset.filterGroup;

        if (!value || !groupName) {
          return;
        }

        button.classList.toggle('active');
        const activeSet = activeFilters.get(groupName);

        if (activeSet.has(value)) {
          activeSet.delete(value);
        } else {
          activeSet.add(value);
        }

        filterItems();
      });
    });

    clearButton.addEventListener('click', () => {
      if (!clearButton.classList.contains('enabled')) {
        return;
      }

      activeFilters.forEach((values) => values.clear());
      container.querySelectorAll('.SF_TAXONOMYFILTER_BUTTON.active').forEach((button) => {
        button.classList.remove('active');
      });
      filterItems();
    });

    const setViewMode = (viewMode) => {
      targetListElement.classList.toggle('is-dense', viewMode === 'dense');
      viewButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.view === viewMode);
      });
    };

    if (viewButtons.length > 0) {
      const defaultButton = viewButtons.find((button) => button.classList.contains('active')) || viewButtons[0];
      if (defaultButton && defaultButton.dataset.view) {
        setViewMode(defaultButton.dataset.view);
      }
      viewButtons.forEach((button) => {
        button.addEventListener('click', () => {
          if (button.dataset.view) {
            setViewMode(button.dataset.view);
          }
        });
      });
    }

    updateClearState();
  });
});
