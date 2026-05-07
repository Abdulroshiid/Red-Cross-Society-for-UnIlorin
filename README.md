Red Cross Society Website - University of Ilorin Branch
A professional, responsive web application built for the Red Cross Society, University of Ilorin (UnIlorin) Detachment. This project facilitates community engagement through membership registration, health awareness, and a dedicated donation system for both financial and blood contributions.

🚀 Features
Responsive Navigation: A mobile-friendly navigation bar with a smooth scroll effect and a functional hamburger menu.

Dynamic Hero Section: Impactful "Be the Help Someone Needs Today" landing page with a direct call-to-action.

Membership Registration: A functional join form that collects volunteer data such as name, department, and level using FormSubmit.

Dual-Action Donation Modal:

Financial Donation: Provides bank details with a one-click "Copy to Clipboard" feature for the account number and a receipt upload system.

Blood Donation: A specialized registration form for potential blood donors, including blood type selection and health eligibility confirmation.

Activity Showcases: Detailed sections highlighting core detachment activities like First Aid Training and Health Awareness Campaigns.

Form Validation: Robust client-side validation for all input fields and file uploads to ensure data integrity.

🛠️ Tech Stack
Frontend: HTML5 and CSS3 using a modular styling architecture.

Interactivity: Vanilla JavaScript (ES6+).

Icons: FontAwesome 6.5.1.

Typography: Poppins and Open Sans.

Form Handling: FormSubmit API for backend-less form processing.

📂 Project Structure
Plaintext
├── index.html # Main structural entry point
├── function.js # JS logic (Modal handling, Form validation, Tabs, Clipboard API)
├── style.css # Main combined stylesheet
├── base.css # CSS Resets, Typography, and Global variables
├── navigation.css # Styles for the Navbar and Hero section
├── sections.css # Styles for About Us, Activities, and Join sections
├── donation.css # Specialized styles for the Donation Modal and File Uploads
└── Images/ # Assets (Logos, Favicons, and Background images)
⚙️ Core Functionalities

1. The Donation System
   The website features a sophisticated modal triggered by the "Donate" button. It uses a tabbed interface to switch between financial support and blood donor registration.

Clipboard API: Users can quickly copy the bank account number for transfers.

File Validation: The financial donation form validates receipt uploads (Max 5MB; PDF, JPG, PNG, GIF) and provides a real-time preview.

2. Form Validation
   Both the Join Us and Blood Donation forms include client-side validation to ensure all required fields are filled and formatted correctly before submission. It provides immediate feedback to the user via status messages.

3. Responsive Design
   The UI adapts seamlessly to tablets and mobile devices using CSS Media Queries, featuring a slide-in navigation menu for smaller screens.

📝 Usage
Clone the repository:

Bash
git clone https://github.com/Abdulroshiid/red-cross-unilorin.git
Open index.html: Simply open the file in any modern web browser to view the site.

Configuration: Form submissions are currently configured to route to the developer's email via FormSubmit.

🛡️ License
© 2026 Red Cross Unilorin. All rights reserved.

Developed by Isyak Abdulrasheed.
