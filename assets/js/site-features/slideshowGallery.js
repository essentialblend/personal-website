document.addEventListener('DOMContentLoaded', () => {
  const slideshowContainers = document.querySelectorAll('.SF_ARTISTGALLERY_SLIDESHOW_CONTAINER');
  const slideIntervalTime = 5000;

  console.log(`Found ${slideshowContainers.length} slideshow containers.`);

  slideshowContainers.forEach((container, containerIndex) => {
    const slides = container.querySelectorAll('.SF_ARTISTGALLERY_SLIDE');
    console.log(`Container ${containerIndex}: Found ${slides.length} slides.`);

    if (slides.length <= 1) {
      if (slides.length === 1) {
        slides[0].classList.add('active-slide');
        console.log(`Container ${containerIndex}: Only one slide, setting active.`);
      }
      return;
    }

    let currentIndex = 0;
    let intervalId = null;

    function showSlide(index) {
      console.log(`Container ${containerIndex}: showSlide called for index ${index}.`);
      const outgoingSlide = container.querySelector('.SF_ARTISTGALLERY_SLIDE.active-slide');
      const incomingSlide = slides[index];
    
      if (outgoingSlide) {
        outgoingSlide.classList.remove('active-slide');
      }
    
      if (incomingSlide) {
        incomingSlide.style.display = 'block';
        incomingSlide.offsetHeight;
        incomingSlide.classList.add('active-slide');
        console.log(`Container ${containerIndex}: Adding active-slide to index ${index}.`);
      }
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      console.log(`Container ${containerIndex}: nextSlide called. New index will be ${currentIndex}.`);
      showSlide(currentIndex);
    }

    function startSlideshow() {
      console.log(`Container ${containerIndex}: Starting slideshow interval.`);
      stopSlideshow();
      intervalId = setInterval(nextSlide, slideIntervalTime);
    }

    function stopSlideshow() {
      if (intervalId) {
        console.log(`Container ${containerIndex}: Stopping slideshow interval.`);
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    container.addEventListener('mouseenter', () => {
        console.log(`Container ${containerIndex}: Mouse enter, stopping slideshow.`);
        stopSlideshow();
    });
    container.addEventListener('mouseleave', () => {
        console.log(`Container ${containerIndex}: Mouse leave, starting slideshow.`);
        startSlideshow();
    });

    console.log(`Container ${containerIndex}: Initializing slide ${currentIndex}.`);
    showSlide(currentIndex);
    startSlideshow();
  });
});