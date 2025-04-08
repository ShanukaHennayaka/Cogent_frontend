import React, { useState } from "react";
import { registerUser} from "../../services/api";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    mobile: "",
    email: "",
    website: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await registerUser(formData);
      if (response.message === "Registration successful") {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="register" id="register">
      <section className="register-section">
        {!isSubmitted ? (
          <>
            <h2 className="register-title">Register Now</h2>
            <p className="register-description">Join us for an unforgettable experience!</p>

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="url"
                name="website"
                placeholder="Company Website URL"
                value={formData.website}
                onChange={handleChange}
              />

              <label className="consent-label">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                By filling out the registration form to attend our event, you agree and consent to{""}
                <a href="https://cogentsolutions.ae/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Cogent Solutions Privacy Policy
                </a>
              </label>

              <button type="submit" className="register-button" disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Register"}
              </button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h3>Thank you for registering with us!</h3>
            <p>
              Your interest in our event is greatly appreciated. This is an <strong>INVITATION ONLY</strong> private
              conference. Our team will be in touch with you shortly to confirm your participation!
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Register;
