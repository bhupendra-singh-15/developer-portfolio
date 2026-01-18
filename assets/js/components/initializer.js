/* =========== SITE INITIALIZER (Component) =========== */

// Function to set the current year in the footer
function setFooterYear() {
  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

setFooterYear();
