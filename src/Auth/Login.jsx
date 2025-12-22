import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/BITE-removebg-preview.png";
import "../Auth/AuthForm.css";

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Redirect ONLY when user changes
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const success = login(
        formData.email.trim().toLowerCase(),
        formData.password
      );

      if (!success) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      setLoading(false);
      // ❌ No navigate here (handled by useEffect)
    }, 800);
  };

  return (
    <div className="auth-page-container">
      <div className="auth-text-wrapper">
        <h1 className="auth-heading">
          <span>Welcome Back!</span>
          <p>
            Log in to track your orders, save favorites, and enjoy exclusive
            deals.
          </p>
        </h1>
      </div>

      <form className="auth-form-box" onSubmit={handleSubmit}>
        <div className="auth-form-header">
          <h2>
            <span>WELCOME BACK</span>
          </h2>
          <img src={logo} alt="BiteHouse" />
        </div>

        {error && <p className="auth-error">{error}</p>}

        <input
          className="auth-input"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <div className="auth-password-field">
          <input
            className="auth-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span
            className="auth-eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="auth-submit-btn" type="submit" disabled={loading}>
          {loading ? <span className="auth-btn-spinner"></span> : "Login"}
        </button>

        <p className="auth-switch-link">
          New here?{" "}
          <Link to="/signup">
            <span>Create account</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
