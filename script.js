// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    navLinks.classList.remove("active");
  });
});

// Dark mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMessage");

  if (!name || !email || !message) {
    msg.textContent = "Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    msg.textContent = "Enter a valid email.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";

  this.reset();
});
