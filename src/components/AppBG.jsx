import React from "react";

function AppBG() {
  return (
    <div className="appBG flex h-full w-full z-10 fixed top-0 left-0 overflow-hidden cursor-pointer ">
      <div className="flex-1 bg-hero bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
}

export default AppBG;
