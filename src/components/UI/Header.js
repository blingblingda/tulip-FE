import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/tulip-192x192.png";
import { Button } from "../UI/Button";
import { Modal } from "./Modal";
import { Login } from "../pages/LoginPage/Login";

export const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-white dark:text-white">Tulip</span>
          </a>
          <div className="flex items-center lg:order-2">
            {localStorage.getItem("token") ? (
              <Button text={"Logout"} onClick={handleLogout} className="text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-3 mr-2 dark:bg-primary-800 dark:hover:bbg-primary-900 focus:outline-none dark:focus:ring-primary-800" />
            ) : (
              <button onClick={() => setLoginModalOpen(true)} className="text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-3 mr-2 dark:bg-primary-800 dark:hover:bg-primary-900 focus:outline-none dark:focus:ring-primary-800">Log In</button>
            )}
          </div>
        </div>
      </nav>

      <Modal show={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
        <Login />
      </Modal>
    </>
  );
};
