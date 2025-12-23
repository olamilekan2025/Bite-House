import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowBanner(true);
      setTimeout(() => setAnimate(true), 100); // trigger slide-up
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setAnimate(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleDecline = () => {
    Cookies.set("cookieConsent", "declined", { expires: 365 });
    setAnimate(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        ...bannerStyle,
        transform: animate ? "translateY(0)" : "translateY(150%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <p style={textStyle}>
        🍴 We use cookies to improve your Bite House experience. Do you accept cookies?
      </p>
      <div style={buttonContainer}>
        <button style={acceptStyle} onClick={handleAccept}>
          Accept
        </button>
        <button style={declineStyle} onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
};

// Banner styles
const bannerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "#23B12C", // vibrant orange for restaurant vibe
  color: "#fff",
  padding: "20px",
  textAlign: "center",
  zIndex: 9999,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  fontFamily: "'Arial', sans-serif",

};

// Text style
const textStyle = {
  margin: 0,
  fontSize: "14px",
  fontWeight: "500",
};

// Button container
const buttonContainer = {
  display: "flex",
  gap: "10px",
};

// Accept button
const acceptStyle = {
  backgroundColor: "#101828", // green
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  padding: "8px 18px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};
acceptStyle[":hover"] = { backgroundColor: "#16a34a" };

// Decline button
const declineStyle = {
  backgroundColor: "#ef4444", // red
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  padding: "8px 18px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};
declineStyle[":hover"] = { backgroundColor: "#dc2626" };

export default CookieConsent;
