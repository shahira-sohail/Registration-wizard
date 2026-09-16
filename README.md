# Registration Wizard

A modern 3-step registration wizard built with React.js. The project demonstrates multi-step form handling, parent-level state management, real-time validation, conditional rendering, and a responsive user interface.

## Live URL

https://registration-wizard-omega-tawny.vercel.app/

> Replace the URL above with your actual Vercel deployment URL after deployment.

## GitHub Repository

https://github.com/shahira-sohail/registration-wizard

## Screnshots
![Sprint07ss]

---

## Features

- 3-step registration workflow
- Personal Information form
- Account Details form
- Review & Submit step
- Next and Back navigation
- Parent-level state management
- Form data persistence between steps
- Real-time form validation
- Email format validation
- Password minimum length validation
- Confirm password matching
- Disabled Continue button until valid data is entered
- Dynamic step indicator
- Visual progress bar
- Success state after submission
- Responsive layout
- Clean and modern UI

---

## Registration Flow

### Step 1 — Personal Information

The user provides:

- First Name
- Last Name
- Date of Birth

The Continue button remains disabled until all required fields are completed.

### Step 2 — Account Details

The user provides:

- Email Address
- Password
- Confirm Password

Validation includes:

- Valid email format
- Password must contain at least 8 characters
- Confirm password must match the password

### Step 3 — Review & Submit

The entered information is displayed for review before submission.

When the user clicks **Create Account**, the finalized registration data is logged to the browser console and a success screen is displayed.

---

## Technologies Used

- React.js
- JavaScript
- JSX
- CSS
- Vite

---

## Project Structure

```text
registration-wizard/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.css
│   │   │
│   │   ├── StepOne/
│   │   │   ├── StepOne.jsx
│   │   │   └── StepOne.css
│   │   │
│   │   ├── StepTwo/
│   │   │   ├── StepTwo.jsx
│   │   │   └── StepTwo.css
│   │   │
│   │   ├── StepThree/
│   │   │   ├── StepThree.jsx
│   │   │   └── StepThree.css
│   │   │
│   │   └── Success/
│   │       ├── Success.jsx
│   │       └── Success.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## State Management

The registration form uses React state in the parent `App` component.

A unified `formData` object stores all information collected across the three steps.

```javascript
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  email: "",
  password: "",
  confirmPassword: "",
});
```

The state is passed to individual step components through props.

This allows the entered information to remain available when the user moves between steps.

---

## Validation

The project implements client-side validation using React state and JavaScript conditions.

### Email Validation

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### Password Validation

The password must contain at least 8 characters.

### Confirm Password Validation

The confirmation password must match the original password.

The Continue button is disabled whenever the current step contains invalid or incomplete information.

---

## Conditional Rendering

The wizard does not use React Router.

Instead, the active step is controlled using a `currentStep` state:

```javascript
const [currentStep, setCurrentStep] = useState(1);
```

The appropriate component is rendered based on the current step.

```javascript
{currentStep === 1 && <StepOne />}
{currentStep === 2 && <StepTwo />}
{currentStep === 3 && <StepThree />}
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/shahira-sohail/registration-wizard.git
```

Navigate to the project:

```bash
cd registration-wizard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available on the local development URL provided by Vite.

---

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The project is deployed using Vercel.

The application is built using Vite and the production output is generated in the `dist` directory.

### Vercel Configuration

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

---

## Future Improvements

The current version focuses on the core wizard functionality and validation.

Possible future improvements include:

- React Hook Form for form management
- Zod schema-based validation
- Backend API integration
- Database storage
- User authentication
- Improved accessibility
- Server-side validation
- Form submission to a real registration API

---

## Learning Outcomes

This project demonstrates:

- React functional components
- `useState` and state management
- State lifting
- Props and component communication
- Conditional rendering
- Controlled form inputs
- Real-time validation
- JavaScript regular expressions
- Component-based CSS
- Multi-step form architecture
- Production build and deployment with Vite and Vercel

---

## Author

**Shahira Sohail**

GitHub: https://github.com/shahira-sohail
