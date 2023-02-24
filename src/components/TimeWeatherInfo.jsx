import React, { useEffect, useState } from "react";
import format from "date-fns/format";
// Moved function out just to set initial text value in state.
function getDisplayTime() {
  const theDate = new Date();
  return format(theDate, "HH:mm");
}

function TimeWeatherInfo({temperature}) {
  const [clockText, setClockText] = useState(getDisplayTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClockText(getDisplayTime());
    }, 1000 * 15);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <span className="text-6xl md:text-8xl md:h-24">{clockText}</span>
      <span className="mb-3 ml-4 inline-flex self-end">
        <i className="fa-duotone fa-sun "></i>

        {/* weather-temperature */}
        <span className="text-2xl inline-flex items-center h-5 ">{`${ temperature || 0}°`}</span>
        {/* weather-temperature-unit */}
        <span className="text-md inline-flex  items-start h-5 leading-none ">C</span>
      </span>
    </div>
  );
}

export default TimeWeatherInfo;
