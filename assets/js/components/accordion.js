document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".services__card");

  cards.forEach((card) => {
    const btn = card.querySelector(".services__button");
    const info = card.querySelector(".services__info");

    // Close all cards initially
    card.classList.remove("services-open");
    info.style.height = "0px";

    btn.addEventListener("click", () => {
      const isOpen = card.classList.contains("services-open");

      // Close all other cards
      cards.forEach((other) => {
        if (other === card) return;
        const otherInfo = other.querySelector(".services__info");
        other.classList.remove("services-open");
        otherInfo.style.height = otherInfo.scrollHeight + "px";
        requestAnimationFrame(() => {
          otherInfo.style.height = "0px";
        });
      });

      if (isOpen) {
        info.style.height = info.scrollHeight + "px";
        requestAnimationFrame(() => {
          info.style.height = "0px";
        });
        card.classList.remove("services-open");
      } else {
        info.style.height = "0px";
        card.classList.add("services-open");
        requestAnimationFrame(() => {
          info.style.height = info.scrollHeight + "px";
        });

        // After transition, set height to auto for responsiveness
        info.addEventListener("transitionend", function autoHeight() {
          if (card.classList.contains("services-open"))
            info.style.height = "auto";
          info.removeEventListener("transitionend", autoHeight);
        });
      }
    });
  });
});
