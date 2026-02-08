const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Set initial z-index so pages stack nicely
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// Function to flip to next page
function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].style.transform = "rotateY(-180deg)";
    pages[currentPage].style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    currentPage++;
  }
}

// Function to flip to previous page
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].style.transform = "rotateY(0deg)";
    pages[currentPage].style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
  }
}

// Button listeners
document.getElementById("next").addEventListener("click", nextPage);
document.getElementById("prev").addEventListener("click", prevPage);
