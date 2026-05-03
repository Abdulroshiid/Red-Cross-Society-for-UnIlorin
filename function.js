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

// DONATION MODAL LOGIC
const donateBtn = document.querySelector("#donate-btn");
const donationModal = document.querySelector("#donation-modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeBtns = document.querySelectorAll("#close-btn, .donation-close-btn");
const copyBtn = document.querySelector(".copy-btn");

// Open modal
donateBtn.addEventListener("click", () => {
  donationModal.classList.add("show");
  document.body.style.overflow = "hidden";
});

// Close modal
const closeModal = () => {
  donationModal.classList.remove("show");
  document.body.style.overflow = "auto";
};

closeBtns.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

// Close modal when clicking on overlay
modalOverlay.addEventListener("click", closeModal);

// Copy account number to clipboard
copyBtn.addEventListener("click", () => {
  const accountNumber = copyBtn.getAttribute("data-copy");
  navigator.clipboard.writeText(accountNumber).then(() => {
    const originalText = copyBtn.innerHTML;
    copyBtn.classList.add("copied");
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyBtn.innerHTML = originalText;
    }, 2000);
  });
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// FILE UPLOAD LOGIC
const receiptInput = document.querySelector("#receipt-upload");
const fileUploadLabel = document.querySelector(".file-upload-label");
const filePreview = document.querySelector("#file-preview");
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/gif",
];
const ALLOWED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".gif"];

let uploadedFile = null;

// Handle file selection via input
receiptInput.addEventListener("change", (e) => {
  handleFileUpload(e.target.files);
});

// Handle drag and drop
fileUploadLabel.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
  fileUploadLabel.classList.add("drag-over");
});

fileUploadLabel.addEventListener("dragleave", (e) => {
  e.preventDefault();
  e.stopPropagation();
  fileUploadLabel.classList.remove("drag-over");
});

fileUploadLabel.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();
  fileUploadLabel.classList.remove("drag-over");
  handleFileUpload(e.dataTransfer.files);
});

function validateFile(file) {
  // Check file type
  if (!ALLOWED_TYPES.includes(file.type)) {
    const ext = "." + file.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return {
        valid: false,
        error: "Invalid file type. Please upload a PDF, JPG, PNG, or GIF file.",
      };
    }
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: "File size exceeds 5MB limit. Please upload a smaller file.",
    };
  }

  return { valid: true };
}

function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

function getFileIcon(fileName) {
  const ext = fileName.split(".").pop().toLowerCase();
  if (ext === "pdf") {
    return "fa-file-pdf";
  } else if (["jpg", "jpeg", "png", "gif"].includes(ext)) {
    return "fa-image";
  }
  return "fa-file";
}

function handleFileUpload(files) {
  if (files.length === 0) return;

  const file = files[0];
  const validation = validateFile(file);

  if (!validation.valid) {
    showFileError(validation.error);
    receiptInput.value = "";
    uploadedFile = null;
    return;
  }

  // Clear previous error
  clearFileError();

  uploadedFile = file;
  displayFilePreview(file);
}

function displayFilePreview(file) {
  filePreview.innerHTML = `
    <div class="preview-item">
      <div class="preview-item-info">
        <div class="preview-item-icon">
          <i class="fas ${getFileIcon(file.name)}"></i>
        </div>
        <div class="preview-item-details">
          <p class="preview-item-name">${file.name}</p>
          <p class="preview-item-size">${formatFileSize(file.size)}</p>
        </div>
      </div>
      <button class="preview-item-remove" onclick="removeFilePreview()">
        Remove
      </button>
    </div>
  `;
}

function removeFilePreview() {
  uploadedFile = null;
  receiptInput.value = "";
  filePreview.innerHTML = "";
  clearFileError();
}

function showFileError(message) {
  let errorDiv = filePreview.querySelector(".file-error");
  if (!errorDiv) {
    errorDiv = document.createElement("div");
    errorDiv.className = "file-error";
    filePreview.appendChild(errorDiv);
  }
  errorDiv.textContent = message;
  errorDiv.classList.add("show");
}

function clearFileError() {
  const errorDiv = filePreview.querySelector(".file-error");
  if (errorDiv) {
    errorDiv.classList.remove("show");
  }
}
