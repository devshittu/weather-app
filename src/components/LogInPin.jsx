import React from "react";

function LogInPin() {
  const handleOnChange = () => {};
  return (

    <div className=" absolute z-20 opacity-0 left-[50%] top-[50%] pointer-events-auto text-white app-pin-wrapper">
      <input
        onChange={handleOnChange}
        className="bg-transparent border-none ring-0 h-0 absolute w-0"
      />
      <div className="flex gap-2">
        <div className="app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute">
          <span className="app-pin-digit-value text-5xl m-0 p-0">1</span>
        </div>
        <div className="app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute">
          <span className="app-pin-digit-value text-5xl m-0 p-0">2</span>
        </div>
        <div className="app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute">
          <span className="app-pin-digit-value text-5xl m-0 p-0">3</span>
        </div>
        <div className="app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute">
          <span className="app-pin-digit-value text-5xl m-0 p-0">7</span>
        </div>
      </div>
      <h1>
        Enter the "1245" <span>Cancel</span>
      </h1>
    </div>
  );
}

export default LogInPin;
