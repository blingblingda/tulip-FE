import React, { useState } from "react";

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
      className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 ${isActive ? "ring-2 ring-primary-300 dark:ring-primary-900" : ""}`}
      onTouchStart={handleBtnPress}
      onTouchEnd={handleBtnRelease}
    >
      {text}
    </button>
  );
};

