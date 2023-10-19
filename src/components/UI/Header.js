import React from "react";
import Logo from "../../assets/tulip-192x192.png";
import Button from "../UI/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 bg-black">
      <div className="flex justify-between items-center w-12 h-12 ml-7">
        <img src={Logo} alt="tulip logo" />
        <h1 className="text-4xl pl-4 text-white">tulip</h1>
      </div>
      <div className="mr-7">
        <Button />
      </div>
    </header>
  );
}
