import React, { useState, useMemo, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./CheckoutForm.css";

const CheckoutForm = () => {
      useEffect(() => {
              Aos.init({
                  offset: 120,
                  duration: 700,
                  easing: 'ease-in-out',
                  delay: 100,
                  once: true,
              });
          }, []);
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /** ✅ CHECK IF FORM IS VALID */
  const isFormValid = useMemo(() => {
    return (
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.address.trim()
    );
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid || loading) return;

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      navigate("/payment", {
        state: {
          formData,
          cartItems,
          total: getTotalPrice(),
        },
      });
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <div className="empty-icon">🛒</div>
        <h2>Your Cart is Empty</h2>
        <p>Add some delicious items to proceed!</p>
        <button className="home-btn" onClick={() => navigate("/")}>
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
     <div className="checkout-header">

  <button
    className="back-home-btn"
    onClick={() => navigate("/cart")}
    >
    ← Back 
  </button>
    <h1>Checkout</h1>


</div>


      {/* CUSTOMER INFO */}
      <div className="customer-info-card" data-aos="fade-up">
        <h2>Customer Information</h2>

        <form className="checkout-form">
          <div className="form-grid">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
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
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>
        </form>
      </div>

      {/* ORDER ITEMS */}
      <div className="order-items-card" data-aos="fade-up">
        <h2>Your Order</h2>

        <div className="order-items-list">
          {cartItems.map((item) => (
            <div key={item.idMeal} className="order-item">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="item-image"
              />

              <div className="item-details">
                <h3 className="item-name">{item.strMeal}</h3>
                <p className="item-price">${item.price.toFixed(2)} each</p>

                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() =>
                      updateQuantity(item.idMeal, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>

                  <span className="quantity">{item.quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() =>
                      updateQuantity(item.idMeal, item.quantity + 1)
                    }
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="item-actions">
                <p className="subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.idMeal)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ORDER SUMMARY */}
      <div className="order-summary-card" data-aos="fade-up">
        <h2>Order Summary</h2>

        <div className="summary-details">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>$5.99</span>
          </div>

          <div className="summary-row tax">
            <span>Tax (8%)</span>
            <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <strong>
              ${(getTotalPrice() + 5.99 + getTotalPrice() * 0.08).toFixed(2)}
            </strong>
          </div>
        </div>

        {/* ✅ PROCEED BUTTON */}
        <button
          className="proceed-btn"
          onClick={handleSubmit}
          disabled={!isFormValid || loading}
        >
          {loading ? (
            <>
              {/* <span className="spinner"></span> */}
              Processing...
            </>
          ) : (
            "Proceed to Payment"
          )}
        </button>

        <button className="back-btn" onClick={() => navigate("/cart")}>
          Back to Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
