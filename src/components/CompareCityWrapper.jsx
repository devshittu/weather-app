import React from "react";

function CompareCityWrapper() {
  return (
    <>
      {/* <div className="h-screen w-screen bg-teal-400 overflow-hidden absolute flex items-center">
        <div className="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-teal-300 rounded-full"></div>
        <div className="w-64 h-64 -mx-32 bg-teal-300 opacity-50 rounded-full"></div>
        <div className="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-teal-300 rounded-full"></div>
        <div className="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-teal-300 rounded-full"></div>
      </div> */}
      <div className="container mx-auto h-screen relative text-gray-700" >
        <div className="flex w-full rounded-lg md:rounded-xl h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl backdrop-blur bg-white/80">
          <div className="lg:w-1/2  text-gray-800 flex flex-col">
            <div className="p-8 shadow-md relative ">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  className="w-10 h-10 block rounded object-cover object-top"
                />
                <div className="text-teal-600 font-medium ml-3">
                  Holden Caulfield
                </div>
                <button className="bg-teal-100 text-teal-400 ml-auto w-8 h-8 flex items-center justify-center rounded">
                  <svg
                    stroke="currentColor"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    stroke-width="2.2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"></path>
                  </svg>
                </button>
              </div>
              <h1 className="font-medium text-lg mt-6">Contact List</h1>
              <p className="text-gray-600 text-sm">
                Fingerstache godard blog, cornhole meh hoodie
              </p>
              {/* <div className="mt-6 flex">
                <button className="bg-teal-500 text-white py-2 text-sm px-3 rounded focus:outline-none">
                  New Contact
                </button>
                <button className="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">
                  New Task
                </button>
                <div className="relative ml-auto flex-1 pl-8 sm:block hidden">
                  <input
                    placeholder="Search"
                    type="text"
                    className="w-full border rounded border-gray-400 h-full focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
                  />
                  <svg
                    stroke="currentColor"
                    className="w-4 h-4 absolute right-0 top-0 mt-3 mr-2 text-gray-500"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>
              </div> */}
            </div>
            <div className="overflow-auto flex-grow">
              {/* <div className="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
                <input type="checkbox" />
                <div className="flex ml-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-10 h-10 object-cover rounded object-top"
                  />
                  <div className="flex flex-col pl-4">
                    <h2 className="font-medium text-sm">Lucinda Massey</h2>
                    <h3 className="text-gray-500 text-sm">
                      Management Consultant
                    </h3>
                  </div>
                </div>
                <button className="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
                  <svg
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                  </svg>
                  Edit
                </button>
              </div>
              <div className="bg-gray-200 px-8 py-6 flex items-center border-b border-gray-300">
                <input type="checkbox" checked="" />
                <div className="flex ml-4">
                  <img
                    src="https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg"
                    className="w-10 h-10 object-cover rounded object-top"
                  />
                  <div className="flex flex-col pl-4">
                    <h2 className="font-medium text-sm">Willie Becker</h2>
                    <h3 className="text-gray-500 text-sm">Business Manager</h3>
                  </div>
                </div>
                <button className="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
                  <svg
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                  </svg>
                  Edit
                </button>
              </div>
              <div className="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
                <input type="checkbox" />
                <div className="flex ml-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/63.jpg"
                    className="w-10 h-10 object-cover rounded object-top"
                  />
                  <div className="flex flex-col pl-4">
                    <h2 className="font-medium text-sm">Sadie McDaniel</h2>
                    <h3 className="text-gray-500 text-sm">Product Manager</h3>
                  </div>
                </div>
                <button className="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
                  <svg
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                  </svg>
                  Edit
                </button>
              </div>
              <div className="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
                <input type="checkbox" />
                <div className="flex ml-4">
                  <img
                    src="https://pbs.twimg.com/profile_images/1157046181698011136/xZ4wg2Xj.jpg"
                    className="w-10 h-10 object-cover rounded object-top"
                  />
                  <div className="flex flex-col pl-4">
                    <h2 className="font-medium text-sm">Maggie White</h2>
                    <h3 className="text-gray-500 text-sm">Financial Analyst</h3>
                  </div>
                </div>
                <button className="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
                  <svg
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                  </svg>
                  Edit
                </button>
              </div> */}
            </div>
          </div>
          <div className="lg:w-1/2 text-white flex flex-col">
            <div className="p-8 bg-teal-700x flex items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg"
                className="w-16 h-16 mr-4 object-top object-cover rounded"
              />
              <div className="mr-auto">
                <h1 className="text-xl leading-none mb-1">Willie Becker</h1>
                <h2 className="text-teal-400 text-sm">Business Manager</h2>
              </div>
              <button className="bg-teal-600 text-white py-2 text-sm px-3 rounded focus:outline-none">
                New Task
              </button>
            </div>
            <div className="p-8 flex flex-1 items-start overflow-auto">
              <div className="flex-shrink-0 text-sm sticky top-0">
              </div>
              <div className="flex-1 pl-10">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareCityWrapper;
