// Fetch and display site-wide visit count (GoatCounter via Netlify Function).
(function () {
  const target = document.getElementById('SF_TOTAL_VISITS');
  if (!target) return;

  fetch('/.netlify/functions/goatcounter-total', {
    headers: { Accept: 'application/json' }
  })
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      if (!data || typeof data.total !== 'number') return;
      target.textContent = data.total.toLocaleString();
    })
    .catch(() => {
      // Leave placeholder on failure.
    });
})();

