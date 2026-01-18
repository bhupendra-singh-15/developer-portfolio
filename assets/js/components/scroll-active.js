/* =========== SCROLL ACTIVE LINK (Scroll component) =========== */

const sections = $$("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const navLink = $(`.nav__menu a[href*="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("active-link");
    } else {
      navLink?.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
