// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll reveal animation
const sections = document.querySelectorAll(".hidden");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Dark mode toggle
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkBtn.textContent = "☀️";
  } else {
    darkBtn.textContent = "🌙";
  }
});
