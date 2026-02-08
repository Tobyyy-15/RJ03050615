document.addEventListener("DOMContentLoaded", () => {

  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  // Stack pages
  pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;
  });

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

  document.getElementById("next").addEventListener("click", nextPage);
  document.getElementById("prev").addEventListener("click", prevPage);

});
