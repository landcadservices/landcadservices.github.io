// THEME TOGGLE
const btn = document.getElementById("themeToggle");
if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
}
if (btn) {
  btn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.theme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
  };
}

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .card, .services-grid div")
.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
