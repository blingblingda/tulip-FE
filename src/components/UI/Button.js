import React from "react";
import "./Button.css";

export const Button = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick} className="button" type={type}>
      <span className="lable">{text}</span>
    </button>
  );
};
