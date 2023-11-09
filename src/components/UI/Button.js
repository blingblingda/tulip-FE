import React, { useState } from "react";
import "./Button.css";

export const Button = ({ text, onClick, type }) => {
  const [isActive, setIsActive] = useState(false);

  const handleBtnPress = () => {
    setIsActive(true);
  };

  const handleBtnRelease = () => {
    setIsActive(false);
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${isActive ? "active" : ""}`}
      onTouchStart={handleBtnPress}
      onTouchEnd={handleBtnRelease}
    >
      <span className="lable">{text}</span>
    </button>
  );
};
