// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useCart } from "../../context/CartContext";
// import "./Payment.css";

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { clearCart } = useCart();
//   const { formData } = location.state || {};

//   const [paymentDone, setPaymentDone] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [transactionId] = useState(Math.floor(Math.random() * 1000000));

//   if (!formData) {
//     navigate("/checkout");
//     return null;
//   }

//   const handlePayment = () => {
//     setLoading(true);

//     // simulate payment processing
//     setTimeout(() => {
//       setLoading(false);
//       setPaymentDone(true);
//     }, 1500);
//   };

//   const handleGoHome = () => {
//     clearCart();
//     navigate("/");
//   };

//   return (
//     <div className="paymentWrapper">
//       <div className="payment-container">
//         {!paymentDone ? (
//           <>
//             <h2 className="payment-title">Payment Details</h2>

//             <div className="payment-info">
//               <p><strong>Name:</strong> {formData.name}</p>
//               <p><strong>Email:</strong> {formData.email}</p>
//               <p><strong>Address:</strong> {formData.address}</p>
//               <p><strong>Phone:</strong> {formData.phone}</p>
//             </div>

//             <button
//               className="pay-btn"
//               onClick={handlePayment}
//               disabled={loading}
//             >
//               {loading ? <span className="btn-spinner"></span> : "Pay Now"}
//             </button>
//           </>
//         ) : (
//           <div className="receipt">
//             <h2 className="receipt-title">Payment Receipt</h2>
//             <p><strong>Transaction ID:</strong> #{transactionId}</p>
//             <p><strong>Name:</strong> {formData.name}</p>
//             <p><strong>Email:</strong> {formData.email}</p>
//             <p><strong>Address:</strong> {formData.address}</p>
//             <p><strong>Phone:</strong> {formData.phone}</p>
//             <p><strong>Date:</strong> {new Date().toLocaleString()}</p>

//             <h3 className="thank-you">Thank you for your order!</h3>

//             <button className="home-btn" onClick={handleGoHome}>
//               Go to Home
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Payment;




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
  const [loading, setLoading] = useState(false);
  const [transactionId] = useState(
    Math.floor(100000 + Math.random() * 900000)
  );

  // Safety redirect
  if (!formData) {
    navigate("/checkout");
    return null;
  }

  const handlePayment = () => {
    setLoading(true);

    // simulate payment gateway
    setTimeout(() => {
      setLoading(false);
      setPaymentDone(true);
    }, 1500);
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

            <button
              className="pay-btn"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? <span className="btn-spinner"></span> : "Pay Now"}
            </button>
          </>
        ) : (
          <div className="receipt">
            <div className="receipt-header">
              <h2>BiteHouse</h2>
              <p>Fresh Meals • Quality Taste</p>
            </div>

            <div className="receipt-divider"></div>

            <div className="receipt-info">
              <p><span>Transaction:</span> #{transactionId}</p>
              <p><span>Date:</span> {new Date().toLocaleString()}</p>
            </div>

            <div className="receipt-divider dashed"></div>

            <div className="receipt-customer">
              <p><strong>Customer Details</strong></p>
              <p>{formData.name}</p>
              <p>{formData.email}</p>
              <p>{formData.phone}</p>
              <p>{formData.address}</p>
            </div>

            <div className="receipt-divider"></div>

            <div className="receipt-footer">
              <p className="paid">✔ PAYMENT SUCCESSFUL</p>
              <p className="thank-you">Thank you for your order!</p>
            </div>

            <button className="home-btn" onClick={handleGoHome}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;

