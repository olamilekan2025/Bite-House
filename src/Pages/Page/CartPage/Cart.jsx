import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useAuth } from "../../../context/AuthContext";
import { FaNairaSign } from "react-icons/fa6";
import { FaTrashAlt, FaHome, FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!user) {
      setShowLoginModal(true);
    } else {
      navigate("/checkout");
    }
  };

  // ✅ QUANTITY HANDLERS WITH TOAST
  const increaseQty = (item) => {
    updateQuantity(item.idMeal, item.quantity + 1);
    toast.success(`${item.strMeal || item.name} quantity increased `);
  };

  const decreaseQty = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.idMeal, item.quantity - 1);
      toast.info(`${item.strMeal || item.name} quantity decreased `);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item.idMeal);
    toast.error(`${item.strMeal || item.name} removed from cart 🗑️`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.warn("Cart cleared ");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-icon">🛒</div>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything yet. Let's fix that!</p>
        <button className="cart-home-btn" onClick={() => navigate("/")}>
          <FaHome /> Home 
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="cart-page">
        <div className="cart-header">
          <h1>Your Shopping Cart</h1>
          <span className="item-count">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.idMeal} className="cart-item-card">
              <img
                src={item.strMealThumb || item.image}
                alt={item.strMeal || item.name}
                className="item-image"
              />

              <div className="item-info">
                <h3 className="item-name">{item.strMeal || item.name}</h3>
                <p className="item-price"><FaNairaSign />{item.price.toFixed(2)}</p>

                <div className="quantity-selector">
                  <button
                    onClick={() => decreaseQty(item)}
                    disabled={item.quantity <= 1}
                    className="qty-btn"
                  >
                    <FaMinus />
                  </button>

                  <span className="quantity">{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item)}
                    className="qty-btn"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="item-actions">
                <p className="subtotal">
                  <FaNairaSign />{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item)}
                  aria-label="Remove item"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary-card">
          <div className="summary-row">
            <span className="summary-label">Total</span>
            <span className="summary-total"><FaNairaSign />{totalPrice.toFixed(2)}</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>

          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>

      {/* LOGIN REQUIRED MODAL */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={() => setShowLoginModal(false)}
            >
              <FaTimes />
            </button>

            <div className="modal-body">
              <h2>Login Required</h2>
              <p>You need to logged in to proceed to checkout.</p>
            </div>

            <div className="modal-actions">
              <button
                className="login-btn-primary"
                onClick={() => navigate("/login")}
              >
                Login Now
              </button>
              <button
                className="login-btn-secondary"
                onClick={() => navigate("/")}
              >
                <FaHome /> Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
