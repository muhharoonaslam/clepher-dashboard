import { useState } from "react";

interface ValidationErrors {
  emailError: string;
  passwordError: string;
}

export const useValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({
    emailError: "",
    passwordError: "",
  });

  const validateForm = (email: string, password: string): boolean => {
    let isValid = true;
    let emailError = "";
    let passwordError = "";

    if (!email) {
      emailError = "A valid email address is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Invalid email format.";
      isValid = false;
    }

    if (password.length < 6) {
      passwordError = "Password must contain at least 6 characters.";
      isValid = false;
    }

    setErrors({ emailError, passwordError });

    return isValid;
  };

  const resetErrors = () => {
    setErrors({ emailError: "", passwordError: "" });
  };

  return {
    errors,
    validateForm,
    resetErrors,
  };
};
