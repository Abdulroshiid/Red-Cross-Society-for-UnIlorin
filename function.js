// Select DOM elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

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

// LOGIC FOR THE FORM
const form = document.querySelector(".join-form");
const messageBox = document.querySelector(".form-message");

// listen for submit
form.addEventListener("submit", function (e) {
  e.preventDefault(e);
  const inputs = form.querySelectorAll("input");
  const textarea = form.querySelector("textarea");

  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const phone = form.querySelector('[name="phone-number"]').value.trim();
  const department = form.querySelector('[name="department"]').value.trim();
  const level = form.querySelector('[name="level"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  // simple validation
  if (!name || !email || !phone || !department || !level || !message) {
    messageBox.textContent = `Please, fill the whole field before submitting the form`;
    messageBox.className = "form-message error show";
  } else {
    messageBox.textContent = `Thank you for applying to join! We will contact you soon.`;
    messageBox.className = "form-message success show";
    setTimeout(() => {
      form.submit();
    }, 3000);
  }

  // Submit form

  // Remove message after 3.5 seconds
  setTimeout(() => {
    messageBox.classList.remove("show");
  }, 3500);
});
