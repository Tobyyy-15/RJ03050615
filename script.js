
const correctPassword = "ralph"; // change to your password
const passwordScreen = document.getElementById("password-screen");
const unlockBtn = document.getElementById("unlock-btn");
const errorMsg = document.getElementById("error-msg");

unlockBtn.addEventListener("click", () => {
    const entered = document.getElementById("book-password").value;
    if (entered === correctPassword) {
        passwordScreen.style.display = "none"; // unlock book
    } else {
        errorMsg.style.display = "block"; // show error
    }
});

const pages = document.querySelectorAll(".book .page");
let currentPage = 0;

// Set initial z-index so pages stack nicely
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// Function to flip to next page
function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

// Function to flip to previous page
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
}

// Button listeners
document.getElementById("next").addEventListener("click", nextPage);
document.getElementById("prev").addEventListener("click", prevPage);

// ------------------------
// BACKGROUND MUSIC PLAYER
// ------------------------
const music = document.getElementById("bg-music");
const icon = document.getElementById("music-icon");

let isPlaying = false;

document.getElementById("music-player").addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    icon.style.opacity = 0.5; // dim icon when paused
    isPlaying = false;
  } else {
    music.play();
    icon.style.opacity = 1;   // full brightness when playing
    isPlaying = true;
  }
});
