import { toast } from "react-toastify";
import { verifyOtp } from "../../api/services/authService";
import { useOtpTimer } from "../../hooks/commonHooks";



 export const validateEmail = (email,setError) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return false;
    }

    setError("");
    return true;
  };

export const handleVerifyOtp = async (
  otp,
  email,
  setError,
  setView,setLoadingButton,stopTimer
) => {
    
  
    console.log("comming call");
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