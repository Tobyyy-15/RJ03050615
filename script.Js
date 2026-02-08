const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Stack pages properly
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// Flip page functions
function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
}

// Button listeners
document.getElementById("next").addEventListener("click", nextPage);
document.getElementById("prev").addEventListener("click", prevPage);
