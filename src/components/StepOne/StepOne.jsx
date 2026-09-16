import "./StepOne.css";

function StepOne({formData, setFormData, onNext}) {
  const isStepOneValid = 
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.dateOfBirth !== "";
  return (
    <form className="registration-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>

          <input
            id="firstName"
            type="text"
            placeholder="Maya"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last name</label>

          <input
            id="lastName"
            type="text"
            placeholder="Chen"
            value={formData.lastName}
            onChange={(e) => 
              setFormData({
                ...formData,
                lastName: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of birth</label>

        <input
          id="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({
              ...formData,
              dateOfBirth: e.target.value,
            })
          }
        />

        <small>
          You must be 18 or older to create an account.
        </small>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="back-button"
          disabled
        >
          ← Back
        </button>

        <button
          type="button"
          className="continue-button"
          onClick={onNext}
          disabled={!isStepOneValid}
        >
          Continue →
        </button>
      </div>
    </form>
  );
}

export default StepOne;