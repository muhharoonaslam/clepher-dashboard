import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useValidation } from "../hooks/useValidation";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  clearErrors,
} from "../store/auth/actions";
import { RootState, AppDispatch } from "../store";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const { errors, validateForm, resetErrors } = useValidation();

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    resetErrors();

    if (validateForm(email, password)) {
      dispatch(loginRequest());

      setTimeout(() => {
        if (email === "devtest@dashboard.com" && password === "password") {
          dispatch(loginSuccess(email));
          navigate("/home");
        } else {
          dispatch(loginFailure("Invalid email or password"));
        }
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f4ff] px-4">
      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg w-full max-w-md lg:max-w-lg mb-2">
        <div className="flex justify-center mb-4">
          <img
            src="https://cleverstorage.b-cdn.net/assets/clepher-logo-black.png"
            alt="Clepher Logo"
            className="w-[120px] md:w-[150px]"
          />
        </div>

        <p className="text-center text-gray-500 mb-8 md:mb-12">
          Log in to access your account
        </p>

        <form onSubmit={handleLogin} noValidate>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail Address"
              className={`w-full p-3 border ${
                errors.emailError || error
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.emailError || error
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.emailError && (
              <p className="text-red-500 text-sm mt-1">{errors.emailError}</p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className={`w-full p-3 border ${
                errors.passwordError || error
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.passwordError || error
                  ? "focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.passwordError && (
              <p className="text-red-500 text-sm mt-1">
                {errors.passwordError}
              </p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <a
          href="#"
          className="block text-center text-blue-500 hover:underline mt-4"
        >
          Forgot password?
        </a>

        <p className="text-center text-gray-400 mt-3">
          Clever Messenger © 2024
        </p>
      </div>

      <p className="text-center text-gray-500 mt-1">
        Don't got a Clever Messenger account yet?
      </p>
    </div>
  );
};

export default Login;
