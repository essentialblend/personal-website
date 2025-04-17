document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".SF_SHOWCASE_SLIDES").forEach(slidesContainer => {
    const slides = Array.from(slidesContainer.children);
    if (slides.length < 2) return;

    let current = 0, timer;

    const show = idx => {
      slides[current].classList.remove("active");
      slides[idx].classList.add("active");
      current = idx;
    };

    const start = () => {
      timer = setInterval(() => {
        show((current + 1) % slides.length);
      }, 4000);
    };

    const stop = () => clearInterval(timer);

    slidesContainer.addEventListener("mouseenter", stop);
    slidesContainer.addEventListener("mouseleave", start);

    start();
  });
});