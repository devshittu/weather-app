import React from "react";

function AppButton({ name, children, style, colorless }) {
  return (
    <button className="inline-block px-6 py-2 text-2xl backdrop-blur bg-white/10 border-4 border-white/20 text-white rounded-lg shadow-md hover:bg-white/30 hover:shadow-lg focus:bg-white/30 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white/50 active:shadow-lg transition duration-150 ease-in-out">
      {name}
      {children}
    </button>
  );
}

export default AppButton;
