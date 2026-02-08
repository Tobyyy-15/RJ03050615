let pages;
let currentPage = 0;

function initBook() {
  pages = document.querySelectorAll(".page");

  // stack pages
  pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;
    page.classList.remove("flipped");
  });

  currentPage = 0;
}

function nextPage() {
  if (currentPage >= pages.length) return;
  pages[currentPage].classList.add("flipped");
  currentPage++;
  updateZ();
}

function prevPage() {
  if (currentPage <= 0) return;
  currentPage--;
  pages[currentPage].classList.remove("flipped");
  updateZ();
}

function updateZ() {
  pages.forEach((page, index) => {
    page.style.zIndex = (index < currentPage) ? index : pages.length - index;
  });
}

document.getElementById("next").onclick = nextPage;
document.getElementById("prev").onclick = prevPage;


