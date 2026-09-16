import "./StepThree.css";

function StepThree({ formData, onBack, onSubmit }) {
  return (
    <div className="review-section">
      <div className="review-group">
        <h3>Personal Information</h3>

        <div className="review-item">
          <span>First name</span>
          <strong>{formData.firstName || "—"}</strong>
        </div>

        <div className="review-item">
          <span>Last name</span>
          <strong>{formData.lastName || "—"}</strong>
        </div>

        <div className="review-item">
          <span>Date of birth</span>
          <strong>{formData.dateOfBirth || "—"}</strong>
        </div>
      </div>

      <div className="review-group">
        <h3>Account Details</h3>

        <div className="review-item">
          <span>Email address</span>
          <strong>{formData.email || "—"}</strong>
        </div>

        <div className="review-item">
          <span>Password</span>
          <strong>••••••••</strong>
        </div>
      </div>

      <div className="review-actions">
        <button
          type="button"
          className="review-back-button"
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          type="button"
          className="review-submit-button"
          onClick={onSubmit}
        >
          Create account
        </button>
      </div>
    </div>
  );
}

export default StepThree;