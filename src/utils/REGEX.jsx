export const REGEX_VALIDATIONS = {
  password:
    {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/,
       message:"Should contains one [A-Z],[a-z],special char"
   }
};