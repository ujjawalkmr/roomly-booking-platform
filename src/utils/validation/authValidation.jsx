import { toast } from "react-toastify";
import { verifyOtp } from "../../api/services/authService";
import { useOtpTimer } from "../../hooks/commonHooks";
import { REGEX_VALIDATIONS } from "../REGEX";

export const validateEmail = (email, setError) => {
  if (!email.trim()) {
    setError("Email is required");
    return false;
  }

  if (!REGEX_VALIDATIONS.email.regex.test(email)) {
    setError(REGEX_VALIDATIONS.email.message);
    return false;
  }

  setError("");
  return true;
};

export const handleVerifyOtp = async (
  otp,
  email,
  setError,
  setView,
  setLoadingButton,
  stopTimer,
) => {
  if (!otp?.trim()) {
    setError("OTP is required");
    return;
  }

  setLoadingButton("1");

  const response = await verifyOtp(email, otp);

  if (response) {
    setError("");
    toast.success("OTP verify");
    setView("password");
  } else {
    setError("OTP does not match");
  }
  setLoadingButton(null);
  stopTimer();
};

export const createPasswordValidation = (password, setError) => {
  if (!password.trim()) {
    setError("Password is required");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters");
    return;
  }

  if (password.length > 16) {
    setError("Password must be less than or equal to 16 characters");
    return;
  }

  if (!REGEX_VALIDATIONS.password.regex.test(password)) {
    setError(REGEX_VALIDATIONS.password.message);
    return;
  }

  setError("");
  return true;
};

export const confirmPasswordValidation = (
  password,
  confirmPassword,
  setRetypePasswordError,
) => {
  if (!password && password !== confirmPassword) {
    setRetypePasswordError("Password do not match");
    return;
  }
  setRetypePasswordError("");
  return true;
};


 export const getStepTitleValidate = (view) => {
  switch (view) {
    case "login":
      return "Please Login";

    case "otp":
      return "Step 1: Please Enter Email";
    case "verifyOtp":
      return "Step 2: Please Enter OTP";

    case "password":
      return "Step 3: Create Password";

    default:
      return "Please Login";
  }
};
