import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button";
import Logo from "../../../assets/tulip-32x32.png";
import Loader from "../LoadingScreen/Loader";
import { createUserInfo } from "../../services/AuthenticationService";

export const SignUp = () => {
  // State hooks for user input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // State hook for any error messages
  const [error, setError] = useState("");
  // State hook to control when the component is loading
  const [loading, setLoading] = useState(false);
  // Hook to navigate to different routes programmatically
  const navigate = useNavigate();

  // Handler for input changes, updating state based on the input field's id
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

  // Utility function to validate email using regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Perform input validation
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email!");
      return;
    }
    if (password.length < 8) {
      setError();
      return;
    }
    if (password !== confirmPassword) {
      setError();
      return;
    }

    setLoading(true); // Set loading to true only after validation passes

    try {
      // Call the user creation service
      const response = await createUserInfo(email, password);

      // Simulate a network request delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (!response.ok) {
        throw new Error("User already exists");
      }
      // Process response data
      const data = await response.json();
      // Store the token and user ID in local storage for authentication purposes
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      // Navigate to the registration completion page
      navigate("/registration");
    } catch (err) {
      setError(err.message);
    } finally {
      // End the loading process regardless of the outcome
      setLoading(false);
    }
  };

  // Render the Loader component when loading is true
  if (loading) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          Tulip
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleRegister}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handleRegister}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="At least 8 digits"
                  required
                />
              </div>
              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="password-confirm"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="password-confirm"
                  value={confirmPassword}
                  onChange={handleRegister}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="At least 8 digits"
                  required
                />
              </div>
              {/* Error message */}
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              {/* Already have an account */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/"
                  className="font-medium text-primary-700 hover:underline dark:text-primary-900"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
