const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation",
  );
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
  }
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    document.querySelectorAll(".program-card").forEach((card) => {
      card.hidden =
        selectedFilter !== "all" && card.dataset.category !== selectedFilter;
    });
  });
});

document.querySelector("#inquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get("name").trim();
  const message = document.querySelector("#form-message");
  message.textContent = `Thanks, ${name}. Your interest in Northfield is noted for this demo.`;
  message.classList.add("is-success");
});
