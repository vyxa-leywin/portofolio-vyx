// Navbar Scroll Effect
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Active Link Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    if (top >= offset) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.href.includes(current)) link.classList.add("active");
  });
});

// Scroll Animation
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
});
fadeEls.forEach(el => observer.observe(el));

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});

// === Glowing Cursor Follow ===
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
});
document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});

// === Parallax Hero Effect ===
const parallaxBg = document.querySelector(".parallax-bg");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrollY * 0.4}px)`;
  }
});

// === Smooth Page Transition ===
window.addEventListener("beforeunload", () => {
  document.body.classList.add("fade");
});

// === Reveal Section on Scroll ===
const revealOnScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
