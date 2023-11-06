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
      <header className="flex justify-between items-center h-20 bg-black">
        <div className="flex justify-between items-center w-12 h-12 ml-7">
          <img src={Logo} alt="tulip logo" />
          <h1 className="text-4xl pl-4 text-white">tulip</h1>
        </div>
        <div className="mr-7">
          {localStorage.getItem("token") ? (
            <Button text={"Logout"} onClick={handleLogout} />
          ) : (
            <Button text={"Login"} onClick={() => setLoginModalOpen(true)} />
          )}
        </div>
      </header>

      <Modal show={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
        <Login />
      </Modal>
    </>
  );
};
