const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Set initial z-index so pages stack correctly
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// Next page
function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

// Previous page
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
}

// Button listeners
document.getElementById("next").addEventListener("click", nextPage);
document.getElementById("prev").addEventListener("click", prevPage);
