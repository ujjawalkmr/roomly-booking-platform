import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Login.css";

function LoginPage() {
  const [view, setView] = useState("login");

  const animationProps = {
    initial: { opacity: 0, x: 40, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -40, scale: 0.95 },
    transition: { duration: 0.35 },
  };

  return (
    <section  className="login-section">
      <div className="login-header">
        <p className="login-subtitle">GLOBAL PARTNERSHIP NETWORK</p>

        <h2 className="login-title">
          LOGIN TO YOUR ACCOUNT
        </h2>

        <p className="login-desc">
          Empower your vision with our global network.
        </p>
      </div>

      <div className="login-content">
        <div className="registration-card">
          <h3 className="card-heading">Registration Hub</h3>

          <div className="steps-container">
            {/* Left Info Card */}
            <div className="step-box">
              <div className="step-header">
                Step 1: Your Profile
              </div>

              <p className="step-text">
                Complete your personal details to begin.
              </p>

              <img
                src="/assets/login/login_imgs.png"
                alt="Network"
                className="network-image"
              />
            </div>

            {/* Right Form Card */}
            <div className="step-box">
              <div className="step-header active">
                Step 2: Sign Up
              </div>

              <div className="form-wrapper">
                <AnimatePresence mode="wait">

                  {/* LOGIN SCREEN */}
                  {view === "login" && (
                    <motion.div
                      key="login"
                      className="form-screen"
                      {...animationProps}
                    >
                      <form className="signup-form">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form-input"
                        />

                        <input
                          type="password"
                          placeholder="Password"
                          className="form-input"
                        />

                        <button
                          type="button"
                          className="login-btn"
                        >
                          Login
                        </button>

                        <button
                          type="button"
                          className="create-btn"
                          onClick={() => setView("otp")}
                        >
                          Create Account
                        </button>

                        <p className="help-link">
                          Need Help?
                        </p>
                      </form>
                    </motion.div>
                  )}

                  {/* EMAIL + OTP SCREEN */}
                  {view === "otp" && (
                    <motion.div
                      key="otp"
                      className="form-screen"
                      {...animationProps}
                    >
                      <form className="signup-form">
                        <input
                          type="email"
                          placeholder="Enter Email Address"
                          className="form-input"
                        />

                        <button
                          type="button"
                          className="create-btn"
                          onClick={() => setView("password")}
                        >
                          Get OTP
                        </button>

                        <button
                          type="button"
                          className="back-btn"
                          onClick={() => setView("login")}
                        >
                          Back
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* CREATE PASSWORD SCREEN */}
                  {view === "password" && (
                    <motion.div
                      key="password"
                      className="form-screen"
                      {...animationProps}
                    >
                      <form className="signup-form">
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          className="form-input"
                        />

                        <input
                          type="password"
                          placeholder="Create Password"
                          className="form-input"
                        />

                        <input
                          type="password"
                          placeholder="Retype Password"
                          className="form-input"
                        />

                        <button
                          type="button"
                          className="create-btn"
                          onClick={() => setView("login")}
                        >
                          Submit
                        </button>

                        <button
                          type="button"
                          className="back-btn"
                          onClick={() => setView("otp")}
                        >
                          Back
                        </button>
                      </form>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;