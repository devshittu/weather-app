import React from "react";

function LogInButton() {
  return (
    <div className="LoginButton absolute opacity-100 pointer-events-auto bottom-0 left-[50%] pb-8 z-20 origin-[-50%_-40px] ">
      <button className="opacity-50 bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-lg leading-5 rounded-full font-semibold text-white cursor-pointer mt-4 outline-none p-4 w-full backdrop-blur-3xl ">
        Sign In
      </button>
    </div>
  );
}

export default LogInButton;
