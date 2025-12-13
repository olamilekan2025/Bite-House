import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart(); 
  const { formData } = location.state || {};

  const [paymentDone, setPaymentDone] = useState(false);
  const [transactionId] = useState(Math.floor(Math.random() * 1000000));

  if (!formData) {
    navigate("/checkout"); 
    return null;
  }

  const handlePayment = () => {
    setPaymentDone(true);

  };

  const handleGoHome = () => {
    clearCart(); 
    navigate("/"); 
  };

  return (
    <div className="paymentWrapper">

    <div className="payment-container">
      {!paymentDone ? (
        <>
          <h2 className="payment-title">Payment Details</h2>
          <div className="payment-info">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
          </div>
          <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
        </>
      ) : (
          <div className="receipt">
          <h2 className="receipt-title">Payment Receipt</h2>
          <p><strong>Transaction ID:</strong> #{transactionId}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
          <h3 className="thank-you">Thank you for your order!</h3>
          <button className="home-btn" onClick={handleGoHome}>
            Go to Home
          </button>
        </div>
      )}
    </div>
        </div>
  );
};

export default Payment;

