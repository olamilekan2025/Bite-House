import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔹 Check if form is valid
  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.address.trim() &&
    formData.phone.trim();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setLoading(true);

    // simulate processing (remove timeout for real API)
    setTimeout(() => {
      navigate("/payment", { state: { formData } });
    }, 1200);
  };

  return (
    <div className="checkoutformwrapper">
      <div className="checkout-form-container">
        <h2 className="checkout-title">Checkout Form</h2>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="checkout-btn"
            disabled={!isFormValid || loading}
          >
            {loading ? <span className="btn-spinner"></span> : "Proceed to Payment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
