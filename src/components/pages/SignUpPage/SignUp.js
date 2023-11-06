import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button";
import Logo from "../../../assets/tulip-32x32.png";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    } else if (id === "password-confirm") {
      setConfirmPassword(value);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isValidEmail(email)) {
      alert("Please enter a valid email!");
      return;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3001/api/profile/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("User already exists");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      navigate("/registration");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container max-w-full mx-auto md:py-10 px-8">
      <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
          <div className="w-full relative">
            <div className="md:mt-6">
              {/* Logo */}
              <div className="text-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="mx-auto mb-4" // You can adjust the margin-bottom as needed
                />
              </div>
              <div className="text-center font-semibold text-black">
                Sign Up
              </div>
              <div className="text-center font-semibold text-black">
                Welcome to tulip!
              </div>
              <form className="mt-8">
                <div className="mx-auto max-w-lg">
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">Email</span>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleRegister}
                      className="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">Password</span>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={handleRegister}
                      className="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">
                      Password Confirm
                    </span>
                    <input
                      id="password-confirm"
                      type="password"
                      value={confirmPassword}
                      onChange={handleRegister}
                      className="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>

                  {/* Feedback sections */}
                  {error && (
                    <div className="flex items-center py-1">
                      <div className="bg-red-200 text-red-700 rounded-full p-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M6 18L18 6M6 6l12 12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <span className="font-medium text-sm ml-3">{error}</span>
                    </div>
                  )}

                  <div className="flex items-center py-1">
                    <div
                      className={
                        password === confirmPassword && password.length > 0
                          ? "bg-green-200 text-green-700 rounded-full p-1"
                          : "bg-red-200 text-red-700 rounded-full p-1"
                      }
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {password === confirmPassword && password.length > 0 ? (
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        ) : (
                          <path
                            d="M6 18L18 6M6 6l12 12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        )}
                      </svg>
                    </div>
                    <span className="font-medium text-sm ml-3">
                      {password === confirmPassword && password.length > 0
                        ? "Passwords match"
                        : "Passwords do not match"}
                    </span>
                  </div>

                  <div className="flex items-center py-1">
                    <div
                      className={
                        password.length > 7
                          ? "bg-green-200 text-green-700 rounded-full p-1"
                          : "bg-red-200 text-red-700 rounded-full p-1"
                      }
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {password.length > 7 ? (
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        ) : (
                          <path
                            d="M6 18L18 6M6 6l12 12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        )}
                      </svg>
                    </div>
                    <span className="font-medium text-sm ml-3">
                      {password.length > 7
                        ? "The minimum length is reached"
                        : "At least 8 characters required"}
                    </span>
                  </div>

                  <div className="flex justify-center items-center mt-6">
                    <Button
                      text="Register"
                      onClick={handleSubmit}
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
