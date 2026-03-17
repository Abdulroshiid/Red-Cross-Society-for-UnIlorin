// Select DOM elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");
const navbar = document.querySelector(".navbar");

// Keep a placeholder so we can restore `.nav-buttons` into the original place
const navButtonsPlaceholder = document.createComment("nav-buttons-placeholder");
if (navButtons && navbar) {
  navbar.insertBefore(navButtonsPlaceholder, navButtons);
}

const updateMenuIcon = (isOpen) => {
  const icon = menuToggle.querySelector("i");
  if (!icon) return;
  icon.classList.toggle("fa-bars", !isOpen);
  icon.classList.toggle("fa-times", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

const closeMobileMenu = () => {
  navLinks.classList.remove("active");
  updateMenuIcon(false);
  if (navButtons && navButtonsPlaceholder && navbar) {
    navbar.insertBefore(navButtons, navButtonsPlaceholder.nextSibling);
  }
};

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  updateMenuIcon(isOpen);

  if (isOpen && navButtons) {
    navLinks.appendChild(navButtons);
  } else {
    if (navButtons && navButtonsPlaceholder && navbar) {
      navbar.insertBefore(navButtons, navButtonsPlaceholder.nextSibling);
    }
  }
});

// Close mobile menu when any nav link is clicked
const navAnchors = document.querySelectorAll(".nav-links ul li a");
navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      closeMobileMenu();
    }
  });
});
