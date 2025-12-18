---
title: "Nyx (2015-2025)"
date: 2025-03-01
subtitle: "A small shrine for a very good dog."
description: "A page I made for Nyx."
draft: false
---

<p class="lede">After some serious thought, the best thing I can say about my boy Nyx is this&mdash;he was a <i>friend</i> to <em><b>everyone</b></em>. Every person that indulged him would receive radiance, warmth, and unbridled affection. This includes jumping onto the sofa so he can snuggle with them, nearly yank at the collar just because he wanted to go befriend someone, oblivious to the fact that they were afraid of dogs. Whenever someone visits and we'd have to lock him inside (of course I'd be there, we rarely locked him alone), he'd rush to go sit and look through the door undercut just so he could get <i>something</i>. I can list many other things but this I think was his defining quality.</p>

{{< nyxslideshow >}}

The incident that best demonstrates this is as follows. One fine evening, a cousin's friend visits my home. Nyx was his usual eager self and couldn't wait to meet this new person and spend time with them. To his dismay, this person was afraid of dogs. When has a person afraid of dogs changed their mind on the spot, just because you told them that yours was friendly? Thankfully, he took a chance. I think Nyx rewarded him in spades. He played with him, sat with him, laid down near him on the bed. He was an instant convert and I couldn't be more content. That was a moment where I felt that I'd done okay with him. 

He left us in March 2025. I can't yet get myself to write down some long narration chronicling his time with us, as I'll only be reliving a lot of pain with those memories. Instead I'll list some tidbits and update this page over time.

{{< rawHtml >}}
<div class="SF_NYX_CANDLE" data-nyx-candle>
  <div class="SF_NYX_CANDLE_TOP">
    <button class="SF_NYX_CANDLE_RESET" type="button" data-nyx-candle-clear title="Reset candle" aria-label="Reset candle">&times;</button>
    <div class="SF_NYX_CANDLE_ICON" aria-hidden="true">
      <span class="SF_NYX_CANDLE_FLAME"></span>
      <span class="SF_NYX_CANDLE_WAX"></span>
    </div>
    <div class="SF_NYX_CANDLE_TEXT">
      <p class="SF_NYX_CANDLE_TITLE">For Nyx.</p>
      <p class="SF_NYX_CANDLE_SUBTITLE">If you can, please take a moment to light the candle.</p>
    </div>
  </div>
</div>

<script>
  (function () {
    var root = document.querySelector('[data-nyx-candle]');
    if (!root) return;

    var clear = root.querySelector('[data-nyx-candle-clear]');
    var storageKey = 'nyx_candle_lit';

    function setLit(isLit) {
      root.classList.toggle('is-lit', isLit);
      if (clear) clear.style.visibility = isLit ? 'visible' : 'hidden';
      try {
        if (isLit) localStorage.setItem(storageKey, 't');
        else localStorage.removeItem(storageKey);
      } catch (e) {}
    }

    var initial = false;
    try { initial = localStorage.getItem(storageKey) === 't'; } catch (e) {}
    setLit(initial);

    root.addEventListener('click', function (event) {
      if (root.classList.contains('is-lit')) return;
      if (event.target && event.target.closest('[data-nyx-candle-clear]')) return;
      setLit(true);
    });
    if (clear) clear.addEventListener('click', function () { setLit(false); });
  })();
</script>
{{< /rawHtml >}}


