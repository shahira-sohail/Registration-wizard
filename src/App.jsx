import { useState } from "react";
import "./App.css";
import StepOne from "./components/StepOne/StepOne";
import Sidebar from "./components/Sidebar/Sidebar";
import StepTwo from "./components/StepTwo/StepTwo";
import StepThree from "./components/StepThree/StepThree";
import Success from "./components/Success/Success";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="app">
      {/* Left sidebar */}
      <Sidebar currentStep={currentStep} />

      {/* Main content */}
      <main className="main-content">
        <div className="form-card">
          <div className="progress-header">
            <span>STEP {currentStep} OF 3</span>
            <span>{Math.round((currentStep / 3) * 100)}% complete</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{width: `${(currentStep / 3) * 100}%`}}
            ></div>  
          </div> 

          <div className="form-heading">
            <p className="eyebrow">FIRST THINGS FIRST</p>

            <h2>Tell us about you.</h2>

            <p>
              This helps us personalize your experience and keep
              your account secure.
            </p>
          </div>

         {!isSubmitted ? (
          <>
            {currentStep === 1 && (
              <StepOne
              formData={formData}
              setFormData={setFormData}
              onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <StepTwo 
                formData={formData}
                setFormData={setFormData}
                onBack={() => setCurrentStep(1)}
                onNext={() => setCurrentStep(3)}
              />
            )}

            {currentStep === 3 && (
              <StepThree
                formData={formData}
                onBack={() => setCurrentStep(2)}
                onSubmit={() => {
                  console.log("Final Registration Data:", formData);
                  setIsSubmitted(true);
                }}
              />
            )}
          </>
         ) : (
          <Success />
         )}
          
        </div>

        <p className="signin">
          Already have an account? <strong>Sign in</strong>
        </p>
      </main>
    </div>
  );
}

export default App;