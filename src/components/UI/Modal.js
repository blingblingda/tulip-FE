import React from "react";

export const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      <div className="bg-gray-50 dark:bg-gray-900 pt-5 pb-5 rounded-3xl shadow-lg z-10">
        {children}
      </div>
    </div>
  );
};
