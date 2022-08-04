// switch between open and closed header
const hamburger = document.querySelector(".hamburger");
const headerBot = document.querySelector(".header-bot");

hamburger.addEventListener("click", () => {
  headerBot.classList.toggle("visible");
});
