export const REGEX_VALIDATIONS = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message:"Please enter a valid email"
  },
  password:
    {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/,
       message:"Should contains one [A-Z],[a-z],special char"
   }
};