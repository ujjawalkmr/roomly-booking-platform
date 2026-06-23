import api from "../axiosInstance"
import {  toast } from "react-toastify";


export const getOtp =async (email) => { 
    try {
      const response = await api.post("/auth/send-otp", { email: email });
      console.log("comming responese is : ", response);
      return response.data.message;
    } catch (e) {
      console.log("error rrrrr:", e);
      console.log("eeeeeeeeeee :", e.response?.data?.message);
      toast.error("User already exists");
      return null;
    }
}