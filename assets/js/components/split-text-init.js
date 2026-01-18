/* =========== HOME SPLIT TEXT (Anime.js component) =========== */

if (window.anime) {
  try {
    const { animate, splitText, stagger } = window.anime;

    const profession1 = $(".home__profession-1");
    const profession2 = $(".home__profession-2");

    if (profession1 && profession2) {
      const { chars: chars1 } = splitText(profession1, { chars: true });
      const { chars: chars2 } = splitText(profession2, { chars: true });

      const animateSplit = (chars) =>
        animate(chars, {
          y: [
            { to: ["100%", "0%"] },
            { to: "-100%", delay: 4000, ease: "in(3)" },
          ],
          duration: 900,
          ease: "out(3)",
          delay: stagger(80),
          loop: true,
        });

      animateSplit(chars1);
      animateSplit(chars2);
    }
  } catch (e) {
    console.warn("Anime split text failed:", e);
  }
}
