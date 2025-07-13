// sorter.js

document.addEventListener("DOMContentLoaded", () => {
  // ───────────────────────────────────────────────────────
  // 1) CATEGORY FILTERING: highlight <td> and show/hide posts
  // ───────────────────────────────────────────────────────
  const tableCells = document.querySelectorAll(".sorter td");

  tableCells.forEach(cell => {
    cell.addEventListener("click", () => {
      // Remove "active" from all cells, then add to this one
      tableCells.forEach(td => td.classList.remove("active"));
      cell.classList.add("active");

      const selectedCategory = cell.textContent.trim();
      filterBlogsByCategory(selectedCategory);
    });
  });

  function filterBlogsByCategory(category) {
    const allPosts = document.querySelectorAll(".articles_body > div[data-category]");

    if (category.toLowerCase() === "all") {
      allPosts.forEach(post => post.style.display = "");
      return;
    }

    allPosts.forEach(post => {
      if (post.getAttribute("data-category") === category) {
        post.style.display = "";
      } else {
        post.style.display = "none";
      }
    });
  }

  // ───────────────────────────────────────────────────────
  // 2) “SHOW MORE” TOGGLE FOR THE 3rd <tr>
  // ───────────────────────────────────────────────────────
  const button   = document.getElementById("optionsContainer");
  const table    = document.querySelector(".sorter");
  const allRows  = table.querySelectorAll("tr");
  const thirdRow = allRows[2]; // 0-based: index 2 is the 3rd <tr>

  if (thirdRow) {
    // Hide it on page load:
    thirdRow.style.display = "none";

    button.addEventListener("click", () => {
      if (thirdRow.style.display === "none") {
        thirdRow.style.display = "table-row";
        button.textContent     = "Show Less...";
      } else {
        thirdRow.style.display = "none";
        button.textContent     = "Show More...";
      }
    });
  } else {
    console.warn("No third <tr> found inside .sorter—make sure your HTML has three closed <tr> tags.");
  }
});
