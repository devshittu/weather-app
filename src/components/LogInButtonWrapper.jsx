import React from "react";

function LogInButtonWrapper({ children }) {
  return (
    // origin-[-50%_-40px]
    // 
// #app #sign-in-button-wrapper {
//     position: absolute;
//     bottom: 0px;
//     pointer-events: none;
//     left: 50%;
//     opacity: 0;
//     transform: translate(-50%, 40px);
//     transition: opacity 250ms, transform 250ms;
//     z-index: 2;

    <div className="absolute opacity-0 pointer-events-none bottom-0 left-[50%] z-20 login-button-wrapper ">
      {children}
    </div>
  );
}

export default LogInButtonWrapper;
