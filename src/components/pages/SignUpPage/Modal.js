// Modal.js
import React from "react";

function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      <div className="bg-white p-8 rounded shadow-lg z-10">{children}</div>
    </div>
  );
}

export default Modal;
