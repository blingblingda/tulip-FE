import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button";
import Logo from "../../../assets/tulip-32x32.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
    setError("");
    const userData = {
      email: email,
      password: password,
    };

    fetch("http://localhost:3001/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        navigate("/match");
      })
      .catch((err) => {
        console.log(err.errors);
        setError(err.message);
      });
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
                Welcome Back!
              </div>
              <div className="text-center font-semibold text-black">
                Login to continue
              </div>
              <form className="mt-8">
                <div className="mx-auto max-w-lg">
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">Email</span>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleLogin}
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
                      onChange={handleLogin}
                      className="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>
                  {error && <div className="text-red-500">{error}</div>}
                  {/* Login button */}
                  <div className="flex justify-center items-center mt-6">
                    <Button text="Login" onClick={handleSubmit} type="submit" />
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
