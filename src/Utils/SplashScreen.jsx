import React from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash">
      <div className="spinner"></div>

      <h1 className="logo">
        {"BITE HOUSE".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h1>

      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SplashScreen;
