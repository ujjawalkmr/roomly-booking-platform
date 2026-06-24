import api from "../axiosInstance"
import {  toast } from "react-toastify";


export const getOtp = async (email) => {
  try {
    const response = await api.post("/auth/send-otp", { email: email });
    return response.data.message;
  } catch (e) {
    console.log("error :", e.response?.data?.message);
    if (e.response?.data?.message === "User already exists") {
      toast.error("User already exists");
    }
    return null;
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await api.post("/auth/verify-otp", {
      "email": email,
      "otp": otp,
    });
    console.log("comming response :", response.data);
    return response;
  } catch (e) {
    console.log("send eror :", e.response.data.message);
    const error = e.response.data.message;
    if (error === "Invalid OTP") {
      toast.error(error);
    } else { toast.error(error); }
    return null;
  }
};