/* =========== DUPLICATE TESTIMONIALS FOR CONTINUOUS SCROLL (Testimonials component) =========== */

$$(".testimonials__content").forEach((track) => {
  const cards = Array.from(track.querySelectorAll(".testimonials__card"));
  const clonedCards = cards.map((card) => card.cloneNode(true));
  clonedCards.forEach((clone) => track.appendChild(clone));
});
