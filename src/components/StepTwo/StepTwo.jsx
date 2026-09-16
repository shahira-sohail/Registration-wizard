import {useState} from "react";
import "./StepTwo.css";

function StepTwo({ formData, setFormData, onBack, onNext }) {
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isStepTwoValid =
    emailRegex.test(formData.email) &&
    formData.password.length >= 8 &&
    formData.confirmPassword === formData.password;
  return (
    <form className="account-form">
      <div className="account-form-group">
        <label htmlFor="email">Email address</label>

        <input
          id="email"
          type="email"
          placeholder="maya@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        {formData.email !== "" && !emailRegex.test(formData.email) && (
            <small className="validation-error">
                Please enter a valid email address.
            </small>
        )}
      </div>

      <div className="account-form-group">
        <label htmlFor="password">Password</label>
        <div className="password-input-wrapper">
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />
        </div>

        <small className="password-hint">Must be at least 8 characters.</small>
        {formData.password !== "" && formData.password.length < 8 && (
            <small className="validation-error">
                Password must be at least 8 characters.
            </small>
        )}
      </div>

      <div className="account-form-group">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: e.target.value,
            })
          }
        />
        {formData.confirmPassword !== "" &&
          formData.confirmPassword !== formData.password && (
            <small className="validation-error">
                Passwords do not match.
            </small>
          )}
      </div>

      <div className="account-form-actions">
        <button
          type="button"
          className="account-back-button"
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          type="button"
          className="account-continue-button"
          onClick={onNext}
          disabled={!isStepTwoValid}
        >
          Continue →
        </button>
      </div>
    </form>
  );
}

export default StepTwo;