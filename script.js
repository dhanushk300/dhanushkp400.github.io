// Typing Effect
const typingText = ["Full Stack Developer", "AI Enthusiast", "Cybersecurity Learner"];
let i = 0, j = 0, current = "", deleting = false;
function type() {
  if (!deleting && j <= typingText[i].length) {
    current = typingText[i].slice(0, ++j);
  } else if (deleting && j >= 0) {
    current = typingText[i].slice(0, --j);
  }
  document.getElementById("typing").textContent = current;

  if (!deleting && j === typingText[i].length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  } else if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % typingText.length;
  }
  setTimeout(type, deleting ? 80 : 120);
}
type();

// Reveal on Scroll
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      r.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Animate Skills Bars
function animateBars() {
  document.querySelectorAll(".bar span").forEach(span => {
    const width = span.getAttribute("data-width");
    span.style.width = width;
  });
}
window.addEventListener("scroll", animateBars);

// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
