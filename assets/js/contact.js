const emailContact = document.querySelector(".home-email");
if (emailContact) {
  const summary = emailContact.querySelector("summary");
  const address = emailContact.querySelector(".email-address");
  const copy = emailContact.querySelector(".copy-email");
  const status = emailContact.querySelector(".email-status");
  copy.hidden = false;
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(address.textContent.trim());
      status.textContent = "Email address copied.";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(address);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Address selected. You can copy it manually.";
    }
  });
  emailContact.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      emailContact.open = false;
      summary.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!emailContact.contains(event.target)) emailContact.open = false;
  });
}
