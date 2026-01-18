/* =========== SCROLL REVEAL (Scroll component) =========== */

if (window.ScrollReveal) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
  });

  sr.reveal(
    ".home__image, .projects__container, .work__container, .testimonials__container, .contact__container"
  );
  sr.reveal(".home__data", { delay: 400 });
  sr.reveal(".home__social, .home__cv", { interval: 100 });
  sr.reveal(".about__data, .about__image", { origin: "left", interval: 100 });
  sr.reveal(".services__card", { interval: 100 });
}
