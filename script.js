const celebrateBtn = document.querySelector(".celebrate");
celebrateBtn.addEventListener("click", function () {
  confetti({ particleCount: 300 });
});
