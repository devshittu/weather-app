import React from "react";

function LogInButtonWrapper({ children }) {
  return (

    <div className="absolute opacity-0 pointer-events-none bottom-2 md:bottom-0 left-[75%] md:left-[50%] z-20 login-button-wrapper ">
      {children}
    </div>
  );
}

export default LogInButtonWrapper;
