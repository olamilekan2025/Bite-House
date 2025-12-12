

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import logo from "../../../assets/BITE-removebg-preview.png";
import "./MyAccount.css";

const MyAccount = () => {
  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const [activeForm, setActiveForm] = useState("login");
  const [errors, setErrors] = useState("");

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // SIGNUP
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors("");

    if (signupData.password !== signupData.confirmPassword) {
      setErrors("Passwords do not match");
      return;
    }

    try {
      await signup({
        name: signupData.name,
        email: signupData.email,
        password: signupData.password,
      });
      setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
      setActiveForm("login");
      alert("Account created successfully! Please login.");
    } catch (err) {
      setErrors(err.message || "Signup failed");
    }
  };

 
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors("");
    try {
      const ok = await login(loginData.email, loginData.password);
      if (!ok) throw new Error("Invalid email or password");
      navigate("/");
    } catch (err) {
      setErrors(err.message);
    }
  };

  return (
    <div className="account-container">
      <div className="account-text-wrapper">
        <h1 className="account-heading">
          <span>Your Food Journey Starts Here</span>
          <p> Sign up or login to explore a world of delicious meals, customize your favorite dishes, track all your orders in real time, save your preferences, and enjoy exclusive deals, promotions, and special offers crafted just for you!</p>
        </h1>
      </div>

   
      {activeForm === "login" && (
        <form className="form-box" onSubmit={handleLogin}>
          <div className="form-header">
            <h2><span>WELCOME BACK</span></h2>
            <img src={logo} alt="BiteHouse" />
          </div>

          {errors && <p className="error">{errors}</p>}

          <input
            type="email"
            placeholder="Email Address"
            value={loginData.email}
            required
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            required
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />

          <button className="submit-btn" type="submit">Login</button>

          <p className="switch-link">
            New here?{" "}
            <span onClick={() => { setActiveForm("signup"); setErrors(""); }}>Create account</span>
          </p>
        </form>
      )}

   
      {activeForm === "signup" && (
        <form className="form-box" onSubmit={handleSignup}>
          <div className="form-header">
            <h2><span>Create Account</span></h2>
            <img src={logo} alt="BiteHouse" />
          </div>

          {errors && <p className="error">{errors}</p>}

          <input
            type="text"
            placeholder="Full Name"
            value={signupData.name}
            required
            onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={signupData.email}
            required
            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={signupData.password}
            required
            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={signupData.confirmPassword}
            required
            onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
          />

          <button className="submit-btn" type="submit">Create Account</button>

          <p className="switch-link">
            Have an account?{" "}
            <span onClick={() => { setActiveForm("login"); setErrors(""); }}>Login</span>
          </p>
        </form>
      )}
    </div>
  );
};

export default MyAccount;

