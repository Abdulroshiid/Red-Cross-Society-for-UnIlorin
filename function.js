// Select DOM elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle the active class on click
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
