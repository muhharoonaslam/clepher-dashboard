import React, { useState } from "react";
import { useValidation } from "../hooks/useValidation";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { errors, validateForm, resetErrors } = useValidation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    resetErrors();

    if (validateForm(email, password)) {
      console.log("Form is valid, handle login...");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f4ff]">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-[500px] mb-2">
        <div className="flex justify-center mb-2">
          <img
            src="https://cleverstorage.b-cdn.net/assets/clepher-logo-black.png"
            alt="Clepher Logo"
            className="w-[150px]"
          />
        </div>

        <p className="text-center text-gray-500 mb-12">
          Log in to access your account
        </p>

        <form onSubmit={handleLogin} noValidate>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail Address"
              className={`w-full p-3 border ${
                errors.emailError ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.emailError ? "focus:ring-red-500" : "focus:ring-blue-500"
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
                errors.passwordError ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.passwordError
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <a
          href="#"
          className="block text-center text-blue-500 hover:underline mt-4"
        >
          Forgot password?
        </a>

        <p className="text-center text-gray-400 mt-3">Clever Messenger © 2024</p>
      </div>

      <p className="text-center text-gray-500 mt-1">
        Don&apos;t got a Clever Messenger account yet?
      </p>
    </div>
  );
};

export default Login;
