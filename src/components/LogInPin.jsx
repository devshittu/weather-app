import React from "react";

function LogInPin() {
  const handleOnChange = () => {};
  return (
    <div className="left-[50%] top-[50%] pointer-events-none z-50 absolute text-white">
      <input
        onChange={handleOnChange}
        className="bg-transparent border-none ring-0 h-0 pointer-events-none absolute w-0"
      />
      <div className="flex gap-2 pointer-events-none">
        <div class="app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute">
          <span class="app-pin-digit-value text-5xl m-0 p-0">1</span>
        </div>
        <div class="app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute">
          <span class="app-pin-digit-value text-5xl m-0 p-0">2</span>
        </div>
        <div class="app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute">
          <span class="app-pin-digit-value text-5xl m-0 p-0">3</span>
        </div>
        <div class="app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute">
          <span class="app-pin-digit-value text-5xl m-0 p-0">7</span>
        </div>
      </div>
      <h1>
        Enter the "1245" <span>Cancel</span>
      </h1>
    </div>
  );
}

export default LogInPin;
