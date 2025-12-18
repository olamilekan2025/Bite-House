
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../context/AuthContext";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import logo from "../../../assets/BITE-removebg-preview.png";
// import "./MyAccount.css";

// const MyAccount = () => {
//   const navigate = useNavigate();
//   const { signup, login, user } = useAuth();

//   const [activeForm, setActiveForm] = useState("login");
//   const [errors, setErrors] = useState("");

//   const [loginLoading, setLoginLoading] = useState(false);
//   const [signupLoading, setSignupLoading] = useState(false);

//   // 🔹 Password visibility states
//   const [showLoginPassword, setShowLoginPassword] = useState(false);
//   const [showSignupPassword, setShowSignupPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     if (user) navigate("/");
//   }, [user, navigate]);

//   // ================= SIGNUP =================
//   const handleSignup = (e) => {
//     e.preventDefault();
//     setErrors("");
//     setSignupLoading(true);

//     if (signupData.password !== signupData.confirmPassword) {
//       setErrors("Passwords do not match");
//       setSignupLoading(false);
//       return;
//     }

//     const newUser = {
//       name: signupData.name.trim(),
//       email: signupData.email.trim().toLowerCase(),
//       password: signupData.password,
//     };

//     setTimeout(() => {
//       signup(newUser);
//       setSignupLoading(false);
//       setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
//       setActiveForm("login");
//       alert("Account created successfully! Please login.");
//     }, 1200);
//   };

//   // ================= LOGIN =================
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setErrors("");
//     setLoginLoading(true);

//     setTimeout(() => {
//       const ok = login(
//         loginData.email.trim().toLowerCase(),
//         loginData.password
//       );

//       if (!ok) {
//         setErrors("Invalid email or password");
//         setLoginLoading(false);
//         return;
//       }

//       setLoginLoading(false);
//       navigate("/");
//     }, 1200);
//   };

//   return (
//     <div className="account-container">
//       <div className="account-text-wrapper">
//         <h1 className="account-heading">
//           <span>Your Food Journey Starts Here</span>
//           <p>
//             Sign up or login to explore delicious meals, track orders, and enjoy
//             exclusive deals.
//           </p>
//         </h1>
//       </div>

//       {/* ================= LOGIN ================= */}
//       {activeForm === "login" && (
//         <form className="form-box" onSubmit={handleLogin}>
//           <div className="form-header">
//             <h2><span>WELCOME BACK</span></h2>
//             <img src={logo} alt="BiteHouse" />
//           </div>

//           {errors && <p className="error">{errors}</p>}

//           <input
//             type="email"
//             placeholder="Email Address"
//             value={loginData.email}
//             required
//             onChange={(e) =>
//               setLoginData({ ...loginData, email: e.target.value })
//             }
//           />

//           {/* Password with toggle */}
//           <div className="password-field">
//             <input
//               type={showLoginPassword ? "text" : "password"}
//               placeholder="Password"
//               value={loginData.password}
//               required
//               onChange={(e) =>
//                 setLoginData({ ...loginData, password: e.target.value })
//               }
//             />
//             <span
//               className="eye-icon"
//               onClick={() => setShowLoginPassword(!showLoginPassword)}
//             >
//               {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           <button className="submit-btn" type="submit" disabled={loginLoading}>
//             {loginLoading ? <span className="btn-spinner"></span> : "Login"}
//           </button>

//           <p className="switch-link">
//             New here?{" "}
//             <span onClick={() => { setActiveForm("signup"); setErrors(""); }}>
//               Create account
//             </span>
//           </p>
//         </form>
//       )}

//       {/* ================= SIGNUP ================= */}
//       {activeForm === "signup" && (
//         <form className="form-box" onSubmit={handleSignup}>
//           <div className="form-header">
//             <h2><span>Create Account</span></h2>
//             <img src={logo} alt="BiteHouse" />
//           </div>

//           {errors && <p className="error">{errors}</p>}

//           <input
//             type="text"
//             placeholder="Full Name"
//             value={signupData.name}
//             required
//             onChange={(e) =>
//               setSignupData({ ...signupData, name: e.target.value })
//             }
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             value={signupData.email}
//             required
//             onChange={(e) =>
//               setSignupData({ ...signupData, email: e.target.value })
//             }
//           />

//           {/* Password */}
//           <div className="password-field">
//             <input
//               type={showSignupPassword ? "text" : "password"}
//               placeholder="Password"
//               value={signupData.password}
//               required
//               onChange={(e) =>
//                 setSignupData({ ...signupData, password: e.target.value })
//               }
//             />
//             <span
//               className="eye-icon"
//               onClick={() => setShowSignupPassword(!showSignupPassword)}
//             >
//               {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Confirm Password */}
//           <div className="password-field">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={signupData.confirmPassword}
//               required
//               onChange={(e) =>
//                 setSignupData({
//                   ...signupData,
//                   confirmPassword: e.target.value,
//                 })
//               }
//             />
//             <span
//               className="eye-icon"
//               onClick={() =>
//                 setShowConfirmPassword(!showConfirmPassword)
//               }
//             >
//               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           <button className="submit-btn" type="submit" disabled={signupLoading}>
//             {signupLoading ? <span className="btn-spinner"></span> : "Create Account"}
//           </button>

//           <p className="switch-link">
//             Have an account?{" "}
//             <span onClick={() => { setActiveForm("login"); setErrors(""); }}>
//               Login
//             </span>
//           </p>
//         </form>
//       )}
//     </div>
//   );
// };

// export default MyAccount;
