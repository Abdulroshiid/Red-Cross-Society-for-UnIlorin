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
const submitBtn = document.querySelector(".submit-btn");
const btnText = submitBtn.querySelector(".btn-text");

// listen for submit
form.addEventListener("submit", function (e) {
  const inputs = form.querySelectorAll("input");
  const textarea = form.querySelector("textarea");

  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const phone = inputs[2].value.trim();
  const department = inputs[3].value.trim();
  const level = inputs[4].value.trim();
  const message = textarea.value.trim();

  // simple validation
  if (!name || !email) {
    messageBox.textContent = `Please, enter your name and email.`;
    messageBox.className = "form-message error show";
    return;
  }

  messageBox.textContent = `Thank you for applying to join! We will contact you soon.`;
  messageBox.className = "form-message success show";

  // Remove message after 4 seconds
  setTimeout(() => {
    messageBox.classList.remove("show");
  }, 3500);

  form.submit();
});
