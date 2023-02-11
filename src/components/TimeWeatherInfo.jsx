import React from "react";

function TimeWeatherInfo() {
  return (
    <div>
      <span className="text-6xl md:text-8xl md:h-24">7:38</span>
      <span className="mb-3 ml-4 inline-flex self-end">
        <i className="fa-duotone fa-sun "></i>
        {/* weather-temperature */}
        <span className="text-2xl inline-flex items-center h-5 ">78</span>
        {/* weather-temperature-unit */}
        <span className="text-sm inline-flex  items-start h-5 ">°F</span>
      </span>
    </div>
  );
}

export default TimeWeatherInfo;
