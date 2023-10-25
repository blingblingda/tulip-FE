import React, { useState } from "react";
import Button from "../../UI/Button";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container max-w-full mx-auto md:py-24 px-6">
      <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
          <div className="w-full relative">
            <div className="md:mt-6">
              <div className="text-center font-semibold text-black">
                Lorem ipsum dolor
              </div>
              <div className="text-center font-base text-black">
                Sed ut perspiciatis unde?
              </div>
              <form
                className="mt-8"
                x-data="{password: '',password_confirm: ''}"
              >
                <div className="mx-auto max-w-lg ">
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">Email</span>
                    <input
                      id="email"
                      placeholder=""
                      type="email"
                      value={email}
                      onChange={(e) => handleRegister(e)}
                      className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">Password</span>
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => handleRegister(e)}
                      placeholder=""
                      type="password"
                      x-model="password"
                      className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">
                      Password Confirm
                    </span>
                    <input
                      placeholder=""
                      type="password"
                      x-model="password_confirm"
                      className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-start mt-3 ml-4 p-1">
                    <ul>
                      <li className="flex items-center py-1">
                        <div
                          className="{'bg-green-200 text-green-700': password == password_confirm && password.length > 0, 'bg-red-200 text-red-700':password != password_confirm || password.length == 0}"
                          className=" rounded-full p-1 fill-current "
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              x-show="password == password_confirm && password.length > 0"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                            <path
                              x-show="password != password_confirm || password.length == 0"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span
                          className="{'text-green-700': password == password_confirm && password.length > 0, 'text-red-700':password != password_confirm || password.length == 0}"
                          className="font-medium text-sm ml-3"
                          x-text="password == password_confirm && password.length > 0 ? 'Passwords match' : 'Passwords do not match' "
                        ></span>
                      </li>
                      <li className="flex items-center py-1">
                        <div
                          className="{'bg-green-200 text-green-700': password.length > 7, 'bg-red-200 text-red-700':password.length < 7 }"
                          className=" rounded-full p-1 fill-current "
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              x-show="password.length > 7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                            <path
                              x-show="password.length < 7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span
                          className="{'text-green-700': password.length > 7, 'text-red-700':password.length < 7 }"
                          className="font-medium text-sm ml-3"
                          x-text="password.length > 7 ? 'The minimum length is reached' : 'At least 8 characters required' "
                        ></span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button
                      text={"Register"}
                      onClick={() => handleSubmit()}
                      type="submit"
                    />
                  </div>
                </div>
              </form>

              <div className="text-sm font-semibold block sm:hidden py-6 flex justify-center">
                <a
                  href="#"
                  className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500"
                >
                  You're already member?
                  <span className="text-black font-semibold">Login</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
