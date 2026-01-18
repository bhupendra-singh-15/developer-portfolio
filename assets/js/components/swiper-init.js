/* Optimized Swiper for exactly 4 slides with hover-pause */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper === "undefined") return;

  const projectSwiper = new Swiper(".projects__swiper", {
    loop: true,
    grabCursor: true,
    speed: 600,
    spaceBetween: 24,
    loopedSlides: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        freeMode: true,
      },
      540: {
        slidesPerView: 1.3,
        freeMode: true,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2.3,
      },
      1280: {
        slidesPerView: 2.5,
      },
      1536: {
        slidesPerView: 3,
      },
    },
  });

  // Pause autoplay on hover
  const swiperEl = document.querySelector(".projects__swiper");
  swiperEl.addEventListener("mouseenter", () => projectSwiper.autoplay.stop());
  swiperEl.addEventListener("mouseleave", () => projectSwiper.autoplay.start());
});
