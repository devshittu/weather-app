import React from "react";

function AppButton({ name, children, style, colorless, className, onClick }) {
  return (
    <button 
    className={`inline-block px-3 py-1 md:px-6 md:py-2 text-lg md:text-2xl backdrop-blur bg-white/10 border-2 md:border-4 border-white/20 text-white rounded-md md:rounded-lg shadow-md hover:bg-white/30 hover:shadow-lg focus:bg-white/30 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white/50 active:shadow-lg transition duration-150 ease-in-out${className ? ' ' + className : ''}`}
    onClick={onClick}
    >
      {name}
      {children}
    </button>
  );
}

export default AppButton;
