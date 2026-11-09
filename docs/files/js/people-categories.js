
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("#quarto-margin-sidebar");
  if (!sidebar) return;

  function updateCategories() {
    // Count actual records in the two people listings.
    const members = document.querySelectorAll(
      "#lab-member .quarto-grid-item"
    ).length;

    const alumni = document.querySelectorAll(
      "#lab-alumni tbody tr"
    ).length;

    const total = members + alumni;

    // Update only the category navigation entries.
    sidebar.querySelectorAll(
      ".quarto-category, .category, .quarto-listing-category, a"
    ).forEach(el => {
      if (el.children.length > 0) return;

      const label = el.textContent.trim();
      const category = label.replace(/\s*\(\d+\)$/, "")
                            .trim().toLowerCase();

      if (category === "people" || category === "featured") {
        el.style.setProperty("display", "none", "important");
      }

      if (category === "all" && total > 0) {
        el.textContent = `All (${total})`;
      }
    });
  }

  updateCategories();
  window.addEventListener("load", updateCategories);
});
