// Select DOM elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle the active class on click and swap icon
menuToggle.addEventListener("click", () => {
  const icon = menuToggle.querySelector("i");
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  if (icon) {
    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-times", isOpen);
  }
});
