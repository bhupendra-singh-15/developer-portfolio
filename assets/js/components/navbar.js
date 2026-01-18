/* =========== NAV TOGGLE (Navbar component) =========== */

const navMenu = $("#nav-menu");
const navToggle = $("#nav-toggle");
const navClose = $("#nav-close");
const navLinks = $$(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu?.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () =>
    navMenu?.classList.remove("show-menu")
  );
}
// Close menu when a link is clicked
navLinks.forEach((link) =>
  link.addEventListener("click", () => navMenu?.classList.remove("show-menu"))
);
