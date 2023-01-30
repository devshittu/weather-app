import React from "react";

function Info() {
  return (
    <div className="flex content-end absolute left-0 bottom-0 m-10 ml-10 text-white z-20">
      <span class="text-8xl h-24">7:38</span>
      <span class="mb-3 ml-4 inline-flex self-end">
        <i class="fa-duotone fa-sun "></i>
        {/* weather-temperature */}
        <span class="text-2xl inline-flex items-center h-5 ">78</span>
        {/* weather-temperature-unit */}
        <span class="text-sm inline-flex  items-start h-5 ">°F</span>
      </span>
    </div>
  );
}

export default Info;
