// ──────────────────────────────────────────────────────────
// search.js
// ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    // 1) Grab the <input> inside #searchBar
    const searchInput = document.querySelector("#searchBar input");
    // 2) Grab the search-button inside #searchBar
    const searchButton = document.querySelector("#searchBar .search-inside");
    // 3) Grab all direct <div> children of .articles_body (your grid items)
    const gridItems = document.querySelectorAll(".articles_body > div");
  
    // Helper: run the filter
    function filterGrid() {
      const query = searchInput.value.trim().toLowerCase();
      gridItems.forEach((item) => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    }
  
    // 4) When the button is clicked, trigger the filter
    if (searchButton) {
      searchButton.addEventListener("click", (e) => {
        e.preventDefault(); // prevent any default form/submit behavior
        filterGrid();
      });
    }
  
    // 5) Optionally, also let “Enter” in the input trigger a search
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        filterGrid();
      }
    });
  });
  