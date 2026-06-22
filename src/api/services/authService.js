import api from "../axiosInstance"

export const getOtp =async (email) => { 
    try {
        const response = await api.post("/auth/send-otp", {"email":email})
     }catch(e){ }
}