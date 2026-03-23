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
// select the form
const form = document.querySelector(".join-form");
const messageBox = document.querySelector(".form-message");

// listen for submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // get form values
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const department = inputs[2].value.trim();
  const level = inputs[3].value.trim();
  const message = textarea.value.trim();

  // simple validation
  if (!name || !email) {
    messageBox.textContent = `Please, enter your name and email.`;
    return;
  }

  // log data (for now)
  console.log({
    name,
    email,
    department,
    level,
    message,
  });

  // feedback to user
  alert("Thank you for joining! We will contact you soon.");

  // reset form
  form.reset();
});
