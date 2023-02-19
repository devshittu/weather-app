import React, { useEffect, useState } from "react";
import format from "date-fns/format";
// Moved function out just to set initial text value in state.
function getDisplayTime() {
  const theDate = new Date();
  return format(theDate, "HH:mm");
}

function TimeWeatherInfo() {
  const [clockText, setClockText] = useState(getDisplayTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClockText(getDisplayTime());
    }, 1000 * 60);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <span className="text-6xl md:text-8xl md:h-24">{clockText}</span>
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
