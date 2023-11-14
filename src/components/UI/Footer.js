import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as FormIcon } from "../../assets/icons/form.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import Logo from "../../assets/tulip-192x192.png";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  // Basic footer content for non-authenticated users
  const basicFooterContent = (
    <footer className="p-4 bg-black sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-2 lg:px-0"> {/* Adjust padding for large screens */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={Logo}
                className="mr-3 h-8"
                alt="Tulip Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Tulip
              </span>
            </a>
          </div>
          {/* Added text on the right side */}
          <div className="hidden text-sm text-gray-500 md:block dark:text-gray-400">
            Made with Love - For love ❤️
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Tulip™
            </a>
            . All Rights Reserved.
          </span>
          {/* Responsive text on the right side for smaller screens */}
          <div className="mt-4 text-sm text-gray-500 sm:mt-0 sm:text-center md:hidden dark:text-gray-400">
            Made with Love - For love ❤️
          </div>
        </div>
      </div>
    </footer>
  );
  

  return (
    <footer className="fixed inset-x-0 bottom-0 bg-black text-white shadow-lg">
      {isAuthenticated() ? (
        <nav className="flex justify-around items-center h-16">
          <button
            onClick={() => handleNavigate("/")}
            className={`flex flex-col items-center w-full focus:outline-none ${
              location.pathname === "/" ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <HomeIcon className="h-12 w-12" />
          </button>
          <button
            onClick={() => handleNavigate("/registration")}
            className={`flex flex-col items-center w-full focus:outline-none ${
              location.pathname === "/registration"
                ? "pointer-events-none opacity-50"
                : ""
            }`}
          >
            <FormIcon className="h-12 w-12" />
          </button>
          <button
            onClick={() => handleNavigate("/match")}
            className={`flex flex-col items-center w-full focus:outline-none ${
              location.pathname === "/match"
                ? "pointer-events-none opacity-50"
                : ""
            }`}
          >
            <HeartIcon className="h-12 w-12" />
          </button>
        </nav>
      ) : (
        basicFooterContent
      )}
    </footer>
  );
};
