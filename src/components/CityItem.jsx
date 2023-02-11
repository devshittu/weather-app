import React from "react";

function CityItem({ photo }) {
  return (
    <>
      <div className="md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
        <div
          className={
            `bg-[url('` +
            photo +
            `')] flex justify-end items-end z-20 bg-gray-300 h-56 rounded-lg shadow-lg w-[88%] md:w-80 bg-cover bg-center`
          }
        >
          <p className="uppercase tracking-widest text-sm text-white bg-black py-1 px-2  mr-4 mb-4 rounded opacity-75 shadow-lg">
            Dallas, TX
          </p>
        </div>

        <div className="w-full bg-white/50  backdrop-blur -mt-36 pt-40 shadow-lg rounded-lg overflow-hidden p-5">
          <div className="header-content inline-flex ">
            <div className="category-badge flex-1  h-6 w-6 m rounded-full m-[6px] bg-purple-100">
              <div className="h-3 w-3 rounded-full m-[6px] bg-purple-500 "></div>
            </div>
            <h4 className="category-title flex-1 text-2xl"> Nigeria</h4>
          </div>
          <div className="title-post font-medium">Mon titre</div>

          <div className="py-4 text-gray-700 flex justify-between">
            <div>
              <div className="text-5xl text-gray-900 flex">
                <svg
                  className="inline-flex fill-none stroke-2 w-12 stroke-yellow-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  52°
                  <span className="inline-flex text-3xl text-gray-500">
                    / 39°
                  </span>
                </span>
              </div>
              <p className="text-sm w-56 leading-loose mt-2">
                Cloudy with scattered showers.
                <br />
                1-3 MPH winds.
              </p>
            </div>
            <div className="leading-loose text-sm ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-none stroke-yellow-500 stroke-2 mr-2 w-5"
                >
                  <path
                    d="M22 16.5H2M20 20H4M12 3V5M4 13H2M6.31412 7.31412L4.8999 5.8999M17.6855 7.31412L19.0998 5.8999M22 13H20M7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>
                  <span className="font-bold">6:57</span>{" "}
                  <span className="text-xs text-gray-600">AM</span>
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="fill-none stroke-purple-500 stroke-2 mr-2 w-5"
                >
                  <path
                    d="M12 3V5M5.31412 7.31412L3.8999 5.8999M18.6858 7.31412L20.1 5.8999M6 15C6 11.6863 8.68629 9 12 9C15.3137 9 18 11.6863 18 15M22 15H2M19 19H5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>
                  <span className="font-bold">5:42</span>{" "}
                  <span className="text-xs text-gray-600">PM</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-t border-gray-300 text-gray-600">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-4 fill-none stroke-2 stroke-gray-600"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.5 1.5V3.1M3.6 10H2M5.4512 4.95137L4.31982 3.82M15.5498 4.95137L16.6812 3.82M19 10H17.4M6.50007 10.0001C6.50007 7.79093 8.29093 6.00007 10.5001 6.00007C12.0061 6.00007 13.3177 6.83235 14.0001 8.06206M6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C6.46419 14 6.90991 14.0791 7.32442 14.2245C8.04061 12.3396 9.86387 11 12 11C14.1361 11 15.9594 12.3396 16.6756 14.2245C17.0901 14.0791 17.5358 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C13.3597 22 9.87921 22 6 22Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                <span className="text-gray-900 font-bold">1</span>{" "}
                <span className="text-sm">UV</span>
              </p>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 w-4 fill-none stroke-2 stroke-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 11.6863 16 2 16 2C16 2 22 11.6863 22 16Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 9C8 10.6569 6.65685 12 5 12C3.34315 12 2 10.6569 2 9C2 6.84315 5 2 5 2C5 2 8 6.84315 8 9Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                <span className="text-gray-900 font-bold">29%</span>{" "}
                <span className="text-sm">Precip</span>
              </p>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-2 w-4 fill-none stroke-2 stroke-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.5 4.5C14.5 3.11929 13.3807 2 12 2C10.6193 2 9.5 3.11929 9.5 4.5V13.7578C8.29401 14.565 7.5 15.9398 7.5 17.5C7.5 19.9853 9.51472 22 12 22C14.4853 22 16.5 19.9853 16.5 17.5C16.5 15.9398 15.706 14.565 14.5 13.7578V4.5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18.5C12.5523 18.5 13 18.0523 13 17.5C13 16.9477 12.5523 16.5 12 16.5C11.4477 16.5 11 16.9477 11 17.5C11 18.0523 11.4477 18.5 12 18.5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                <span className="text-gray-900 font-bold">46°</span>{" "}
                <span className="text-sm">Dew Point</span>
              </p>
            </div>
          </div>

          {/* <div className="summary-post text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis veritatis vel suscipit ex dolore possimus iure.
            <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm ">
              <span className="">Lire plus</span>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default CityItem;
