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

      <div className="container mx-auto relative text-slate-800  dark:text-slate-200">
        <div className="flex flex-col">
          <div className="flex w-full rounded-lg md:rounded-xl  lg:overflow-hidden overflow-auto flex-col shadow-2xl backdrop-blur-md bg-white/50 dark:bg-slate-900/50">
            <div className="header">
              <div className="grid grid-cols-1 gap-8 mt-6 mx-6 lg:grid-cols-3 xl:mt-12 xl:mx-12">
                <div className="flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700">
                  <div className="flex flex-col items-center space-y-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400 sm:h-7 sm:w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">
                      Basic
                    </h2>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">
                    Free
                  </h2>
                </div>

                <div className="flex items-center justify-between px-8 py-4 border border-blue-500 cursor-pointer rounded-xl">
                  <div className="flex flex-col items-center space-y-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-600 dark:text-blue-500 sm:h-7 sm:w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">
                      Standard
                    </h2>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full dark:text-blue-400 sm:px-4 sm:py-1 dark:bg-gray-700 ">
                      Save 30%
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-500 sm:text-3xl">
                      $99 <span className="text-base font-medium">/Yearly</span>
                    </h2>
                  </div>
                </div>

                <div className="flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700">
                  <div className="flex flex-col items-center space-y-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400 sm:h-7 sm:w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">
                      Pro
                    </h2>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full dark:text-blue-400 sm:px-4 sm:py-1 dark:bg-gray-700 ">
                      Save 20%
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">
                      $149 <span className="text-base font-medium">/Month</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="body flex lg:flex-row flex-col">
              <div className="lg:w-1/2  text-slate-800 flex flex-col">
                {/* <div className="p-8 shadow-md relative "></div> */}
                <div className="overflow-auto flex-grow">
                  <div className="p-8 mt-8 space-y-8 ">
                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="text-lg sm:text-xl">Unlimited Links</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">
                        Own analytics platfrom
                      </p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">
                        Full Support with discussion
                      </p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">Optimize hashtags</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">Mobile app</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">Unlimited users</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 text-white flex flex-col">
                <div className="overflow-auto flex-grow">
                  <div className="p-8 mt-8 space-y-8">
                    <div className="flex items-center justify-between">
                      <p className="textlg sm:text-xl">Unlimited Links</p>
                      <span className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7">
                        50%
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="textlg sm:text-xl">
                        Own analytics platfrom
                      </p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">
                        Full Support with discussion
                      </p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">Optimize hashtags</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">Mobile app</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                      <p className="textlg sm:text-xl">Unlimited users</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400 sm:h-7 sm:w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareCityWrapper;
