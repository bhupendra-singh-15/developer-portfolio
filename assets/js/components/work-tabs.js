/* =========== WORK TABS (Work component) =========== */
// This logic handles switching between Experience and Education tabs

const tabs = $$("[data-target]");
const tabContents = $$("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = $(tab.dataset.target);

    // Hide all content and remove active class from all tabs
    tabContents.forEach((tc) => {
      tc.classList.remove("work-active");
      tc.setAttribute("hidden", "");
    });
    tabs.forEach((t) => {
      t.classList.remove("work-active");
      t.setAttribute("aria-selected", "false");
    });

    // Show target content and add active class to clicked tab
    target.classList.add("work-active");
    target.removeAttribute("hidden");
    tab.classList.add("work-active");
    tab.setAttribute("aria-selected", "true");
  });
});
