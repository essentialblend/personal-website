(() => {
  const page = document.querySelector(".SF_NOW_PAGE");
  if (!page) return;

  const updates = Array.from(page.querySelectorAll(".SF_NOW_STATUS_UPDATE"));
  const olderButton = page.querySelector('[data-status-action="older"]');
  const presentButton = page.querySelector('[data-status-action="present"]');
  const newerButton = page.querySelector('[data-status-action="newer"]');
  const date = page.querySelector("[data-status-date]");
  const location = page.querySelector("[data-status-location]");
  const title = page.querySelector("[data-status-title]");

  if (!updates.length || !olderButton || !presentButton || !newerButton || !date || !location || !title) return;

  let currentIndex = 0;

  const showUpdate = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= updates.length) return;

    currentIndex = nextIndex;
    const current = updates[currentIndex];

    updates.forEach((update, index) => {
      update.hidden = index !== currentIndex;
    });

    date.textContent = current.dataset.statusDate;
    location.textContent = current.dataset.statusLocation
      ? ` in ${current.dataset.statusLocation}`
      : "";
    title.textContent = current.dataset.statusTitle;

    olderButton.disabled = currentIndex === updates.length - 1;
    presentButton.disabled = currentIndex === 0;
    newerButton.disabled = currentIndex === 0;
  };

  olderButton.addEventListener("click", () => showUpdate(currentIndex + 1));
  presentButton.addEventListener("click", () => showUpdate(0));
  newerButton.addEventListener("click", () => showUpdate(currentIndex - 1));
})();
