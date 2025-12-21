document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-library-filter]').forEach((container) => {
    const targetListId = container.dataset.targetList;
    const itemSelector = container.dataset.itemSelector;
    const targetListElement = targetListId ? document.getElementById(targetListId) : null;
    const clearButton = container.querySelector('.SF_TAXONOMYFILTER_CLEAR');
    const viewButtons = Array.from(container.querySelectorAll('[data-view]'));
    const sortButtons = Array.from(container.querySelectorAll('[data-sort-key]'));
    const groupElements = Array.from(container.querySelectorAll('[data-filter-group]'));
    const paginationElement = targetListElement
      ? targetListElement.querySelector('[data-library-pagination]')
      : null;
    const pageNumbersElement = paginationElement ? paginationElement.querySelector('[data-page-numbers]') : null;
    const prevButton = paginationElement ? paginationElement.querySelector('[data-page-action="prev"]') : null;
    const nextButton = paginationElement ? paginationElement.querySelector('[data-page-action="next"]') : null;
    const detailList = targetListElement
      ? targetListElement.querySelector('.SF_LIBRARY_LIST--detail')
      : null;
    const denseList = targetListElement
      ? targetListElement.querySelector('.SF_LIBRARY_LIST--dense')
      : null;

    if (!targetListElement || !itemSelector || !clearButton) {
      return;
    }

    const activeFilters = new Map();
    groupElements.forEach((group) => {
      activeFilters.set(group.dataset.filterGroup, new Set());
    });

    const viewStorageKey = targetListId ? `sf-library-view:${targetListId}` : 'sf-library-view';
    const pageSizeRaw = Number.parseInt(container.dataset.pageSizeDetail, 10);
    const itemsPerPage = Number.isFinite(pageSizeRaw) && pageSizeRaw > 0 ? pageSizeRaw : 10;
    let currentView = 'detail';
    let currentPage = 1;
    let currentSortKey = 'title';
    let currentSortDirection = 'asc';

    const readStoredView = () => {
      try {
        return window.localStorage.getItem(viewStorageKey);
      } catch (error) {
        return null;
      }
    };

    const writeStoredView = (viewMode) => {
      try {
        window.localStorage.setItem(viewStorageKey, viewMode);
      } catch (error) {
        return;
      }
    };

    const updateClearState = () => {
      const hasActive = Array.from(activeFilters.values()).some((set) => set.size > 0);
      clearButton.classList.toggle('enabled', hasActive);
    };

    const getSortValue = (item, sortKey) => {
      if (sortKey === 'writer') {
        return item.dataset.writerSort || '';
      }
      return item.dataset.title || '';
    };

    const sortListItems = (listElement) => {
      if (!listElement) {
        return;
      }
      const items = Array.from(listElement.querySelectorAll(itemSelector));
      items.sort((left, right) => {
        const leftValue = getSortValue(left, currentSortKey);
        const rightValue = getSortValue(right, currentSortKey);

        if (!leftValue && rightValue) {
          return 1;
        }
        if (!rightValue && leftValue) {
          return -1;
        }

        const comparison = leftValue.localeCompare(rightValue, undefined, { numeric: true, sensitivity: 'base' });
        return currentSortDirection === 'desc' ? comparison * -1 : comparison;
      });
      items.forEach((item) => listElement.appendChild(item));
    };

    const applySort = () => {
      sortListItems(detailList);
      sortListItems(denseList);
      updatePagination({ resetPage: true });
    };

    const scrollToFilterStart = () => {
      if (currentView !== 'detail' || typeof window === 'undefined') {
        return;
      }
      const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const target = container || detailList;
      if (!target) {
        return;
      }
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    };

    const updatePagination = ({ resetPage = false } = {}) => {
      if (!detailList) {
        return;
      }

      const items = Array.from(detailList.querySelectorAll(itemSelector));
      const visibleItems = items.filter((item) => !item.classList.contains('hidden'));

      items.forEach((item) => {
        item.classList.remove('SF_LIBRARY_ITEM--paged');
      });

      if (resetPage) {
        currentPage = 1;
      }

      if (currentView === 'dense') {
        if (paginationElement) {
          paginationElement.classList.add('hidden');
        }
        return;
      }

      if (visibleItems.length === 0) {
        if (paginationElement) {
          paginationElement.classList.add('hidden');
        }
        return;
      }

      const totalPages = Math.ceil(visibleItems.length / itemsPerPage);
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      visibleItems.forEach((item, index) => {
        const isInPage = index >= startIndex && index < endIndex;
        item.classList.toggle('SF_LIBRARY_ITEM--paged', !isInPage);
      });

      if (!paginationElement) {
        return;
      }

      paginationElement.classList.toggle('hidden', totalPages <= 1);

      if (prevButton) {
        const isDisabled = currentPage <= 1;
        prevButton.classList.toggle('SF_PAGE_LINK--disabled', isDisabled);
        prevButton.disabled = isDisabled;
        prevButton.setAttribute('aria-disabled', String(isDisabled));
      }

      if (nextButton) {
        const isDisabled = currentPage >= totalPages;
        nextButton.classList.toggle('SF_PAGE_LINK--disabled', isDisabled);
        nextButton.disabled = isDisabled;
        nextButton.setAttribute('aria-disabled', String(isDisabled));
      }

      if (pageNumbersElement) {
        pageNumbersElement.innerHTML = '';
        for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
          const pageButton = document.createElement('button');
          pageButton.type = 'button';
          pageButton.className = 'SF_PAGE_NUM';
          if (pageNumber === currentPage) {
            pageButton.classList.add('SF_PAGE_NUM--current');
            pageButton.setAttribute('aria-current', 'page');
          }
          pageButton.textContent = String(pageNumber);
          pageButton.dataset.pageNumber = String(pageNumber);
          pageNumbersElement.appendChild(pageButton);
        }
      }
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
      updatePagination({ resetPage: true });
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
      container.querySelectorAll('.SF_TAXONOMYFILTER_BUTTON[data-filter-value].active').forEach((button) => {
        button.classList.remove('active');
      });
      filterItems();
    });

    const setViewMode = (viewMode) => {
      currentView = viewMode;
      targetListElement.classList.toggle('is-dense', viewMode === 'dense');
      viewButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.view === viewMode);
      });
      writeStoredView(viewMode);
      updatePagination({ resetPage: true });
    };

    if (viewButtons.length > 0) {
      const defaultButton = viewButtons.find((button) => button.classList.contains('active')) || viewButtons[0];
      const storedView = readStoredView();
      const initialView = viewButtons.some((button) => button.dataset.view === storedView)
        ? storedView
        : defaultButton && defaultButton.dataset.view;
      if (initialView) {
        setViewMode(initialView);
      }
      viewButtons.forEach((button) => {
        button.addEventListener('click', () => {
          if (button.dataset.view) {
            setViewMode(button.dataset.view);
          }
        });
      });
    }

    if (sortButtons.length > 0) {
      const defaultSort = sortButtons.find((button) => button.classList.contains('active')) || sortButtons[0];
      if (defaultSort) {
        currentSortKey = defaultSort.dataset.sortKey || currentSortKey;
        currentSortDirection = defaultSort.dataset.sortDirection || currentSortDirection;
      }
      sortButtons.forEach((button) => {
        button.addEventListener('click', () => {
          sortButtons.forEach((otherButton) => {
            otherButton.classList.toggle('active', otherButton === button);
          });
          currentSortKey = button.dataset.sortKey || currentSortKey;
          currentSortDirection = button.dataset.sortDirection || currentSortDirection;
          applySort();
        });
      });
    }

    if (pageNumbersElement) {
      pageNumbersElement.addEventListener('click', (event) => {
        const button = event.target.closest('[data-page-number]');
        if (!button) {
          return;
        }
        const requestedPage = Number.parseInt(button.dataset.pageNumber, 10);
        if (!Number.isFinite(requestedPage)) {
          return;
        }
        currentPage = requestedPage;
        updatePagination();
        scrollToFilterStart();
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        if (currentPage <= 1) {
          return;
        }
        currentPage -= 1;
        updatePagination();
        scrollToFilterStart();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentPage += 1;
        updatePagination();
        scrollToFilterStart();
      });
    }

    updateClearState();
    applySort();
  });
});
