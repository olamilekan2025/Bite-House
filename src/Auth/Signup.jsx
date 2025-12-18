// src/pages/Signup.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";  // ← ADD THIS LINE
import logo from "../assets/BITE-removebg-preview.png";
import "../Auth/AuthForm.css";

const Signup = () => {
  const navigate = useNavigate();
  const { signup, user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const newUser = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    };

    setTimeout(() => {
      signup(newUser);
      setLoading(false);
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      alert("Account created successfully! Please login.");
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="auth-page-container">
      <div className="auth-text-wrapper">
        <h1 className="auth-heading">
          <span>Your Food Journey Starts Here</span>
          <p>Sign up to explore delicious meals, track orders, and enjoy exclusive deals.</p>
        </h1>
      </div>

      <form className="auth-form-box" onSubmit={handleSubmit}>
        <div className="auth-form-header">
          <h2><span>Create Account</span></h2>
          <img src={logo} alt="BiteHouse" />
        </div>

        {error && <p className="auth-error">{error}</p>}

        <input
          className="auth-input"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <input
          className="auth-input"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <div className="auth-password-field">
          <input
            className="auth-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <span className="auth-eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="auth-password-field">
          <input
            className="auth-input"
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
          <span className="auth-eye-icon" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="auth-submit-btn" type="submit" disabled={loading}>
          {loading ? <span className="auth-btn-spinner"></span> : "Create Account"}
        </button>

        <p className="auth-switch-link">
          Have an account? <Link to="/login"><span>Login</span></Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;