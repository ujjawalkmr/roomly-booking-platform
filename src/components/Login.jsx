import "../styles/Login.css";

function LoginSection() {
  return (
    <section className="login-section">
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
        {/* Left Side */}
        <div className="login-left">
          <img
            src="/assets/login/person_login.png"
            alt="Businessman"
            className="businessman-image"
          />
        </div>

        {/* Right Side */}
        <div className="registration-card">
          <h3 className="card-heading">Registration Hub</h3>

          <div className="steps-container">
            <div className="step-box">
              <div className="step-header">
                Step 1: Your Profile
              </div>

              <p className="step-text">
                Complete your personal details to begin.
              </p>

              <img
                src="/assets/network.png"
                alt="Network"
                className="network-image"
              />
            </div>

            <div className="step-box">
              <div className="step-header active">
                Step 2: Sign Up
              </div>

              <form className="signup-form">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-input"
                />

                <input
                  type="password"
                  placeholder="Create Password"
                  className="form-input"
                />

                <button className="create-btn">
                  Create Account
                </button>

                <button className="google-btn">
                  Sign Up with Google
                </button>

                <p className="help-link">Need Help?</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginSection;