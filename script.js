// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Reveal on scroll
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let r of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = r.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      r.classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
