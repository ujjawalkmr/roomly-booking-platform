import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  toast } from "react-toastify";
import InputField from "../components/InputField";
import { getOtp,createPassword } from "../api/services/authService";
import {
  handleVerifyOtp,
  validateEmail,createPasswordValidation,confirmPasswordValidation
} from "../utils/validation/authValidation";
import {REGEX_VALIDATIONS} from "../utils/REGEX";
import { useOtpTimer } from "../hooks/commonHooks";
import "../styles/Login.css";

function LoginPage() {
  const [view, setView] = useState("login");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loadingButton, setLoadingButton] = useState(null);
  const [otp, setOtp] = useState("");
  const { timer, startTimer, isExpired, stopTimer } = useOtpTimer(300);
  const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [retypePasswordError, setRetypePasswordError] = useState("");
  

  const handleSubmit = async () => {
    setLoadingButton("2");
 const isPasswordValid = createPasswordValidation(password, setError);
  const isConfirmPasswordValid = confirmPasswordValidation(
    password,
    confirmPassword,
    setRetypePasswordError
  );

    if (!isPasswordValid || !isConfirmPasswordValid) {
        console.log("in if");
      setLoadingButton(null);
    return;
    }

    const response = await createPassword(email, password, confirmPassword);
    console.log("creat password :", response);
    toast.success("Password created successfully");
    setView("login");
    setEmail("");
    setOtp("");
    setLoadingButton(null);
};

  const handleGetOtp = async () => {
    const isValid = validateEmail(email, setError);

    if (!isValid) return;
    setLoadingButton("otp");

    const data = await getOtp(email);
    console.log("data comming:", data);
    if (data !== null) {
      toast.success(data);

      setView("verifyOtp");
      startTimer();
    }
    setLoadingButton(null);
  };

  const animationProps = {
    initial: { opacity: 0, x: 40, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -40, scale: 0.95 },
    transition: { duration: 0.35 },
  };

  return (
    <section className="login-section">
      <div className="login-header">
        <p className="login-subtitle">GLOBAL PARTNERSHIP NETWORK</p>

        <h2 className="login-title">LOGIN TO YOUR ACCOUNT</h2>

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
              <div className="step-header">Step 1: Your Profile</div>

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
              <div className="step-header active">Step 2: Sign Up</div>

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

                        <p className="help-link">Need Help?</p>
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
                        <InputField
                          type="email"
                          placeholder="Enter Email Address"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                          }}
                          error={error}
                        />
                        <button
                          type="button"
                          className="create-btn"
                          onClick={handleGetOtp}
                          disabled={loadingButton === "otp"}
                        >
                          {loadingButton === "otp" ? (
                            <span className="spinner"></span>
                          ) : (
                            "Get OTP"
                          )}
                        </button>

                        <button
                          type="button"
                          className="back-btn"
                          onClick={() => {
                            setView("login");
                            setError("");
                          }}
                        >
                          Back
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* OTP SCREEN */}
                  {view === "verifyOtp" && (
                    <motion.div
                      key="verifyOtp"
                      className="form-screen"
                      {...animationProps}
                    >
                      <form className="signup-form">
                        <div>
                          OTP expires in: {Math.floor(timer / 60)}:
                          {(timer % 60).toString().padStart(2, "0")}
                        </div>
                        <InputField
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => {
                            setOtp(e.target.value);
                            setError("");
                          }}
                          error={error}
                        />

                        <button
                          type="button"
                          className="create-btn"
                          disabled={loadingButton === "1"}
                          onClick={() =>
                            handleVerifyOtp(
                              otp,
                              email,
                              setError,
                              setView,
                              setLoadingButton,
                              stopTimer,
                            )
                          }
                        >
                          {loadingButton === "1" ? (
                            <span className="spinner"></span>
                          ) : (
                            " Verify OTP"
                          )}
                        </button>

                        <button
                          type="button"
                          className="back-btn"
                          onClick={() => {
                            setView("otp");
                            setError("");
                            stopTimer();
                          }}
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
                        {/* <p>Password should 1 [A-Z], 1[a-z],1 Special char</p> */}
                        <InputField
                          type="password"
                          placeholder="Create Password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            createPasswordValidation(password,setError)
                          }}
                          error={error}
                        />

                        <InputField
                          type="password"
                          placeholder="Retype Password"
                          value={confirmPassword}
                          onChange={(e) => {
                            console.log("retype is :", e.target.value);
                            setConfirmPassword(e.target.value);
                            confirmPasswordValidation(password,confirmPassword,setRetypePasswordError)

                          }}
                          error={retypePasswordError}
                        />


                        <button
                          type="button"
                          className="create-btn"
                          onClick={() => { handleSubmit() }}
                        >
                          Submit
                        </button>

                        {/* <button
                          type="button"
                          className="back-btn"
                          onClick={() => setView("verifyOtp")}
                        >
                          Back
                        </button> */}
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