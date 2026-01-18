const themeButton = document.getElementById("theme-button");
const themeColors = document.getElementById("theme-colors");

const colors = [
  { name: "Blue", hue: 220 },
  { name: "Pink", hue: 300 },
  { name: "Green", hue: 110 },
  { name: "Cyan", hue: 180 },
  { name: "Orange", hue: 15 },
  { name: "Red", hue: 358 },
];

// Dynamically create color divs
colors.forEach((color) => {
  const div = document.createElement("div");
  div.classList.add("color");
  div.dataset.hue = color.hue;
  div.style.setProperty("--color", `hsl(${color.hue}, 60%, 64%)`);
  themeColors.appendChild(div);
});

/* ---------- SHOW / HIDE PANEL ---------- */
themeButton.addEventListener("click", (e) => {
  e.stopPropagation();
  themeColors.classList.toggle("show");
});

/* ---------- CLOSE ON OUTSIDE CLICK ---------- */
document.addEventListener("click", (e) => {
  if (!themeColors.contains(e.target) && e.target !== themeButton) {
    themeColors.classList.remove("show");
  }
});

/* ---------- APPLY COLOR & SAVE AND STOP AUTO MODE ---------- */
themeColors.addEventListener("click", (e) => {
  if (e.target.classList.contains("color")) {
    const hue = e.target.dataset.hue;

    // Apply selected color
    document.documentElement.style.setProperty("--hue", hue);

    // Save the selection
    localStorage.setItem("selectedHue", hue);
    localStorage.setItem("autoMode", "off");

    themeColors.classList.remove("show");

    // stop rotation (if running)
    clearInterval(autoRotateInterval);
  }
});

/* ---------- AUTO COLOR ROTATION (Only when user hasn't selected color) ---------- */
let autoRotateIndex = 0;
let autoRotateInterval;

function startAutoRotate() {
  autoRotateInterval = setInterval(() => {
    const hue = colors[autoRotateIndex].hue;

    document.documentElement.style.setProperty("--hue", hue);
    autoRotateIndex = (autoRotateIndex + 1) % colors.length;
  }, 5000); // change every 3 seconds
}

/* ---------- PAGE LOAD ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const savedHue = localStorage.getItem("selectedHue");
  const autoMode = localStorage.getItem("autoMode");

  if (savedHue && autoMode === "off") {
    // User already selected manually — load saved color
    document.documentElement.style.setProperty("--hue", savedHue);
  } else {
    // No manual selection yet — start auto rotation
    localStorage.setItem("autoMode", "on");
    startAutoRotate();
  }
});
