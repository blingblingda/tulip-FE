import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button";
import Logo from "../../../assets/tulip-32x32.png";
import Loader from "../LoadingScreen/Loader";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Wait for 1.5 seconds to simulate the loading process
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem('justLoggedIn', 'true'); // Set a flag for just logged in
      navigate("/match"); // Navigate to the match page
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Hide the loader
    }
  };

  // Conditionally render the Loader or the login form based on the loading state
  if (loading) {
    return <Loader />;
  }
  

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
      Tulip
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-700 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  value={email}
                  onChange={handleLogin}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="••••••••"
                  value={password}
                  onChange={handleLogin}
                  required
                />
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <button
                type="submit"
                className="w-full text-white bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a href="/" className="font-medium text-primary-700 hover:underline dark:text-primary-500">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};