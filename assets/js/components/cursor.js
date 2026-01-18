/* =========== CUSTOM CURSOR (Cursor component) =========== */

const cursor = $(".cursor");

if (cursor) {
  let mouseX = 0,
    mouseY = 0;

  const cursorMove = () => {
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
    cursor.style.transform = `translate(-50%, -50%)`;
    requestAnimationFrame(cursorMove);
  };

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Hide cursor over interactive elements
  $$("a, button").forEach((el) => {
    el.addEventListener("mouseover", () => cursor.classList.add("hide-cursor"));
    el.addEventListener("mouseleave", () =>
      cursor.classList.remove("hide-cursor")
    );
  });

  cursorMove();
}
