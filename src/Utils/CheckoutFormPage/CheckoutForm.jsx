import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css"; // import the CSS file

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { formData } });
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
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit" className="checkout-btn">
          Proceed to Payment
        </button>
      </form>
    </div>
          </div>
  );
};

export default CheckoutForm;

