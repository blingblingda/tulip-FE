import React from 'react';

const ShopButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="btn relative overflow-hidden bg-yellow-400 border-2 border-white text-black font-bold text-base px-8 py-3 cursor-pointer transition-all duration-300 rounded-lg shadow-md hover:bg-blue-400 hover:text-white active:scale-90"
    >
      Log in
    </button>
  );
}

export default ShopButton;
