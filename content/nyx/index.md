---
title: "Nyx"
date: 2025-03-01
subtitle: "A small shrine for a very good dog."
description: "A page I made for Nyx."
draft: false
---

<p class="lede">Nyx was the kind of presence that quietly rearranges a home: the rhythm of mornings, the shape of silence, the way you come back from a long day. He passed away in March 2025. This page is my little way of saying: you were here, you mattered, and you’re still loved.</p>

{{< rawHtml >}}
<div class="SF_NYX_CANDLE" data-nyx-candle>
  <div class="SF_NYX_CANDLE_TOP">
    <div class="SF_NYX_CANDLE_ICON" aria-hidden="true">
      <span class="SF_NYX_CANDLE_FLAME"></span>
      <span class="SF_NYX_CANDLE_WAX"></span>
    </div>
    <div class="SF_NYX_CANDLE_TEXT">
      <p class="SF_NYX_CANDLE_TITLE">For Nyx.</p>
      <p class="SF_NYX_CANDLE_SUBTITLE">If you’d like, light a candle here and take a second.</p>
    </div>
  </div>
  <div class="SF_NYX_CANDLE_ACTIONS">
    <button class="SF_NYX_CANDLE_BUTTON" type="button" data-nyx-candle-toggle>Light a candle</button>
    <button class="SF_NYX_CANDLE_BUTTON SF_NYX_CANDLE_BUTTON--SECONDARY" type="button" data-nyx-candle-clear>Clear</button>
  </div>
</div>

<script>
  (function () {
    var root = document.querySelector('[data-nyx-candle]');
    if (!root) return;

    var toggle = root.querySelector('[data-nyx-candle-toggle]');
    var clear = root.querySelector('[data-nyx-candle-clear]');
    var storageKey = 'nyx_candle_lit';

    function setLit(isLit) {
      root.classList.toggle('is-lit', isLit);
      if (toggle) toggle.textContent = isLit ? 'Candle is lit' : 'Light a candle';
      try {
        if (isLit) localStorage.setItem(storageKey, 't');
        else localStorage.removeItem(storageKey);
      } catch (e) {}
    }

    var initial = false;
    try { initial = localStorage.getItem(storageKey) === 't'; } catch (e) {}
    setLit(initial);

    if (toggle) toggle.addEventListener('click', function () { setLit(!root.classList.contains('is-lit')); });
    if (clear) clear.addEventListener('click', function () { setLit(false); });
  })();
</script>
{{< /rawHtml >}}

## Some pictures

{{< rawHtml >}}<div class="SF_NYX_GALLERY">{{< /rawHtml >}}
{{< figure src="nyx-1.jpg" alt="Nyx — photo 1" caption="Nyx, being Nyx." >}}
{{< figure src="nyx-2.jpg" alt="Nyx — photo 2" caption="A moment I didn’t know I’d want to keep forever." >}}
{{< figure src="nyx-3.jpg" alt="Nyx — photo 3" caption="The look that made everything feel okay." >}}
{{< rawHtml >}}</div>{{< /rawHtml >}}

## Little things I miss (placeholder)

- The sound of paws pacing around the house like he was “checking on things”.
- The way he could be both stubborn and gentle, often in the same minute.
- The small, ordinary routines that only feel important once they’re gone.

## A few Nyx facts (placeholder)

- **Favorite place:** somewhere near people, even if he pretended not to care.
- **Special talent:** turning a bad day into a smaller one.
- **Unreasonable opinion:** your chair was always his chair.

## Notes to self (placeholder)

This is intentionally simple. I’ll replace these words with the real stories as I find photos, remember details, and write them down properly.

