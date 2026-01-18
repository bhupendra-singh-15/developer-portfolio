/* =========== CONTACT COPY EMAIL (Contact component) =========== */

const contactBtn = $("#contact-btn");
const contactEmail = $("#contact-email");

contactBtn?.addEventListener("click", async () => {
  if (contactEmail?.textContent) {
    try {
      await navigator.clipboard.writeText(contactEmail.textContent);
      const originalText = contactBtn.innerHTML;
      contactBtn.innerHTML = 'Copied! <i class="ri-check-line"></i>';
      setTimeout(() => {
        contactBtn.innerHTML = originalText;
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert(`Email: ${contactEmail.textContent}`);
    }
  }
});
