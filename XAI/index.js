(function () {
  let a = 0;
  document.getElementById("l").addEventListener("click", () => {
    if (a >= 2 * 3 * 7) return;
    ++a;
    if (a == 2 * 3 * 7) {
      document.querySelectorAll(".stars").forEach((b) => {
        b.classList.add("question");
      });
    }
  });
})();
