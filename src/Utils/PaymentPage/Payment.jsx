
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const { formData, cartItems, total = 0 } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const transactionId = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    if (!formData || !cartItems) {
      navigate("/checkout");
    }
  }, [formData, cartItems, navigate]);

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "lastOrder",
        JSON.stringify({
          customer: formData,
          items: cartItems,
          total,
          transactionId,
          date: new Date().toISOString(),
        })
      );

      clearCart();
      setLoading(false);
      setPaymentDone(true);
    }, 2000);
  };

  if (!formData || !cartItems) return null;

  return (
    <div className="payment-page">
      <div className="payment-card">
        {!paymentDone ? (
          <>
            <div className="payment-header">
              <h1>Confirm & Pay</h1>
              <p>Review your order</p>
            </div>

            <div className="section">
              <h3>Delivery Details</h3>
              <div className="detail-row">
                <span>Name</span>
                <strong>{formData.fullName}</strong>
              </div>
              <div className="detail-row">
                <span>Email</span>
                <strong>{formData.email}</strong>
              </div>
              <div className="detail-row">
                <span>Phone</span>
                <strong>{formData.phone}</strong>
              </div>
              <div className="detail-row address">
                <span>Address</span>
                <strong>{formData.address}</strong>
              </div>
            </div>

            <div className="section">
              <h3>Order Summary</h3>
              {cartItems.map((item) => (
                <div key={item.idMeal} className="order-item-row">
                  <div className="item-info">
                    <p className="item-name">{item.strMeal}</p>
                    <p className="quantity">× {item.quantity}</p>
                  </div>
                  <p className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="total-section">
              <div className="total-row">
                <span>Total</span>
                <strong className="amount">${total.toFixed(2)}</strong>
              </div>
            </div>

            <button className="pay-button" onClick={handlePayment} disabled={loading}>
              {loading ? (
                <>
                   Processing...
                </>
              ) : (
                "Pay Now"
              )}
            </button>
          </>
        ) : (
          <div className="success-screen">
            <div className="success-icon">✔</div>
            <h2>Payment Successful</h2>

            <div className="receipt-card">
              <p><strong>Transaction:</strong> #{transactionId}</p>
              <p><strong>Date:</strong> {new Date().toLocaleString()}</p>

              <div className="divider dashed"></div>

              {cartItems.map((item) => (
                <div key={item.idMeal} className="order-item-row">
                  <span>{item.strMeal} × {item.quantity}</span>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              ))}

              <div className="divider thick"></div>

              <div className="total-row">
                <span>Total Paid</span>
                <strong className="amount">${total.toFixed(2)}</strong>
              </div>
            </div>

            <button className="home-button" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
