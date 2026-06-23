document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".SF_SHOWCASE_SLIDES").forEach(slidesContainer => {
    const slides = Array.from(slidesContainer.children).filter(slide =>
      slide.classList.contains("SF_SHOWCASE_SLIDE")
    );
    if (slides.length < 2) return;

    const gallery = slidesContainer.closest("[data-showcase-gallery]");
    const thumbnails = gallery
      ? Array.from(gallery.querySelectorAll("[data-showcase-index]"))
      : [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let current = Math.max(0, slides.findIndex(slide => slide.classList.contains("active")));
    let timer;

    const isHoldSlide = slide => slide.hasAttribute("data-showcase-hold");

    const restartAnimatedMedia = slide => {
      const animatedImage = slide.querySelector("[data-showcase-animated]");
      if (!animatedImage) return;

      const restartedImage = animatedImage.cloneNode(true);
      animatedImage.replaceWith(restartedImage);
    };

    const stop = () => clearTimeout(timer);

    const show = idx => {
      if (idx === current) {
        if (isHoldSlide(slides[idx])) {
          stop();
          restartAnimatedMedia(slides[idx]);
        }
        return;
      }

      slides[current].classList.remove("active");
      slides[current].setAttribute("aria-hidden", "true");
      slides[idx].classList.add("active");
      slides[idx].removeAttribute("aria-hidden");

      if (thumbnails.length) {
        thumbnails[current].classList.remove("active");
        thumbnails[current].setAttribute("aria-selected", "false");
        thumbnails[current].setAttribute("tabindex", "-1");
        thumbnails[idx].classList.add("active");
        thumbnails[idx].setAttribute("aria-selected", "true");
        thumbnails[idx].setAttribute("tabindex", "0");
      }

      current = idx;

      if (isHoldSlide(slides[current])) {
        stop();
        restartAnimatedMedia(slides[current]);
      }
    };

    const start = () => {
      stop();
      if (reducedMotion.matches || isHoldSlide(slides[current])) return;

      timer = setTimeout(() => {
        show((current + 1) % slides.length);
        start();
      }, 10000);
    };

    const interactionArea = gallery || slidesContainer;

    interactionArea.addEventListener("mouseenter", stop);
    interactionArea.addEventListener("mouseleave", start);
    interactionArea.addEventListener("focusin", stop);
    interactionArea.addEventListener("focusout", event => {
      if (!interactionArea.contains(event.relatedTarget)) start();
    });

    thumbnails.forEach((thumbnail, idx) => {
      thumbnail.addEventListener("click", () => show(idx));
      thumbnail.addEventListener("keydown", event => {
        if (!(["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))) return;

        event.preventDefault();
        let next = idx;
        if (event.key === "ArrowLeft") next = (idx - 1 + thumbnails.length) % thumbnails.length;
        if (event.key === "ArrowRight") next = (idx + 1) % thumbnails.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = thumbnails.length - 1;
        show(next);
        thumbnails[next].focus();
      });
    });

    reducedMotion.addEventListener("change", start);

    start();
  });
});
