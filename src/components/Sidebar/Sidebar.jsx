import "./Sidebar.css";

function Sidebar({currentStep}) {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-mark">R</div>
        <span>Registration</span>
      </div>

      <div className="sidebar-content">

        <p className="sidebar-eyebrow">GET STARTED</p>

        <h1>Create your account.</h1>

        <p className="sidebar-description">
          Complete these simple steps to set up your account and get started.
        </p>

        <div className="steps">

          <div className={`step ${currentStep === 1 ? "active" : ""}`}>
            <div className="step-number">1</div>

            <div>
              <strong>Personal Info</strong>
              <span>Your basic information</span>
            </div>
          </div>

          <div className={`step ${currentStep === 2 ? "active" : ""}`}>
            <div className="step-number">2</div>

            <div>
              <strong>Account Details</strong>
              <span>Set up your account</span>
            </div>
          </div>

          <div className={`step ${currentStep === 3 ? "active" : ""}`}>
            <div className="step-number">3</div>

            <div>
              <strong>Review & Submit</strong>
              <span>Confirm your details</span>
            </div>
          </div>

        </div>

        <div className="security">
          <span>🔒</span>

          <div>
            <strong>Your data is secure</strong>
            <p>
              Your information is encrypted and protected.
            </p>
          </div>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;