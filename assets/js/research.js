/* Keep the diagram optional and let readers pause its motion. */
for (const figure of document.querySelectorAll(".stack-illustration")) {
  const button = figure.querySelector(".animation-toggle");
  if (!button) continue;
  button.hidden = false;
  button.addEventListener("click", () => {
    const paused = figure.classList.toggle("is-paused");
    button.setAttribute("aria-pressed", String(paused));
    button.textContent = paused ? "Resume animation" : "Pause animation";
  });
}
