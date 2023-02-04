import React from "react";

function Menu() {
  return (
    <div className="app-menu relative overflow-auto h-auto pointer-events-auto z-20">
      <div className="wrapper mt-[30vh] min-h-[80vh] p-20 pt-0 bg-gradient-to-t from-slate-900/70">
        <div className="container max-w-7xl mx-auto relative pointer-events-auto text-white">
          <section className="app-header flex justify-between">
            <div>Time</div>
            Menu
            <div>button to logout</div>
          </section>
          <section className="nav flex gap-3 overflow-auto pb-2 w-full menu-app-section-bound">
            <h1 className="font-bold">Categories: </h1>
            <button className="bg-sky-500 hover:bg-sky-700">
              Save changes
            </button>
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
              Cat two
            </button>
          </section>
          <section>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                Card title
              </h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </section>

          <section className="flex flex-col pb-2 mt-16 w-full">
            {/* Section Heading bg-white/60 backdrop-blur-md rounded-3xl */}
            <header className="mb-8 p-4 pl-0 ">
              <h3 class="font-medium leading-tight text-5xl text-white-800">
                Current City's Week
              </h3>
            </header>

            <article className="md:max-w-xl w-1/3 rounded-lg backdrop-blur bg-white/50 shadow-2xl bg-gradient-to-tr from-emerald-700/40 font-medium">
              <div className="p-6 flex flex-col justify-start space-y-4">
                <div className="flex justify-between items-center">
                  <h5 className="font-medium leading-tight text-2xl">Monday</h5>
                  <span class="px-4 py-1 border-2 border-white/20 text-emerald-500 font-medium text-l leading-tight rounded bg-white bg-opacity-5 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    18:45
                  </span>
                </div>
                <div className="w-2/3 self-center ">
                  <svg
                    className="fill-white h-auto w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M122.4 1.2C127.6-.9 133.4-.2 137.9 3l70.3 50.3L278.5 3c4.5-3.2 10.3-3.9 15.4-1.8s8.8 6.7 9.7 12.2l14.1 85.3L403 112.8c5.4 .9 10.1 4.6 12.2 9.7s1.4 10.9-1.8 15.4l-38.8 54.3c-2.2-.1-4.3-.2-6.5-.2c-23.2 0-45 6.2-63.8 17c.1-12.5-2.2-25.3-7.3-37.6c-20.3-49-76.4-72.2-125.4-52s-72.2 76.4-52 125.4c18.3 44.3 66 67.5 111.1 56.6c-36.3 18.2-62.8 53.3-69.1 94.9l-23.6 16.9c-4.5 3.2-10.3 3.9-15.4 1.8s-8.8-6.7-9.7-12.2L98.7 317.7 13.4 303.6c-5.5-.9-10.1-4.6-12.2-9.7S-.2 282.9 3 278.5l50.3-70.3L3 137.9c-3.2-4.5-3.9-10.3-1.8-15.4s6.7-8.8 12.2-9.7L98.7 98.7l14.1-85.3c.9-5.5 4.6-10.1 9.7-12.2zM149 232.7c-13.5-32.7 2-70.1 34.6-83.6s70.1 2 83.6 34.6s-2 70.1-34.6 83.6s-70.1-2-83.6-34.6zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" />
                  </svg>
                  <span className="text-2xl block text-center mt-4">
                    Partly Cloudy
                  </span>
                </div>
                <div className="flex">
                  <div className="grow font-normal">
                    <ul class="">
                      <li class="px-6 py-2 pl-0 rounded-t-lg flex-inline content-baseline">
                        <svg
                          className="inline-block w-6 h-auto fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
                        </svg>
                        <span className="inline-block text-xl ml-2 leading-loose">
                          11 km/h
                        </span>
                      </li>
                      <li class="px-6 py-2 pl-0 flex-inline content-baseline">
                        <svg
                          className="inline-block w-6 h-auto fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                        </svg>
                        <span className="inline-block text-xl ml-2 leading-loose">
                          5%
                        </span>
                      </li>
                      <li class="px-6 py-2 pl-0 flex-inline content-baseline">
                        <svg
                          className="inline-block w-6 h-auto fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z" />
                        </svg>
                        <span className="inline-block text-xl ml-2 leading-loose">
                          0.5h
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="self-end shrink-0">
                    <span class="inline-flex font-black ">
                      {/* weather-temperature */}
                      <span class="text-8xl inline-flex items-center leading-3 ">
                        78
                      </span>
                      {/* weather-temperature-unit */}
                      <span class="text-2xl inline-flex  items-start h-20 ">
                        °F
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="flex flex-col pb-2 mt-16 w-full">
            {/* Section Heading bg-white/60 backdrop-blur-md rounded-3xl */}
            <header className="mb-8 p-4 pl-0 ">
              <h3 class="font-medium leading-tight text-5xl text-white-800">
                Cities Elements
              </h3>
            </header>

            <article className="flex flex-col md:flex-row md:max-w-xl rounded-lg backdrop-blur bg-white/40 shadow-lg ">
              <div className="h-auto w-full">
                <img
                  className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg "
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
              </div>
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </article>
          </section>

          <section className="nav overflow-auto pb-2 w-full menu-app-section-bound">
            <div className="scrollable-menu mt-5">
              <div>
                <h1 className="text-4xl">How it looks & feel out there?</h1>
              </div>
              <div className="flex gap-3">
                <div className="day-card backdrop-blur bg-white/10 border border-white/20 h-[8vw] w-32 shadow-lg rounded-lg relative">
                  <div className="day-card-content flex flex-col h-full items-center justify-evenly p-3">
                    <div>32 deg F</div>
                    <div>Icon</div>
                    <div>Day of week</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="nav overflow-auto pb-2 w-full menu-app-section-bound">
            <div className="scrollable-menu mt-5">
              <div>
                <h1 className="text-4xl">Meta Data:</h1>
              </div>
              <div className="flex gap-4">
                <div className="meta-card h-[7vw] shadow-lg rounded-lg relative w-1/6 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1614785246748-edc43ab91f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTI1MjMwNg&ixlib=rb-4.0.3&q=80&w=500')] ">
                  <div className="meta-card-content flex flex-col h-full items-end justify-start p-6  bg-gradient-to-b from-slate-900 rounded-lg">
                    <div>33 Metric</div>
                    <div>Icon</div>
                    <div>Humidity</div>
                  </div>
                </div>
                <div className="meta-card h-[7vw] shadow-lg rounded-lg relative w-1/6 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1559035636-405d0c36d1a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTI1MjgwOQ&ixlib=rb-4.0.3&q=80&w=500')] ">
                  <div className="meta-card-content flex flex-col h-full items-end justify-start p-6  bg-gradient-to-b from-slate-900 rounded-lg">
                    <div>33 Metric</div>
                    <div>Icon</div>
                    <div>Humidity</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="nav overflow-auto pb-2 w-full menu-app-section-bound">
            <div className="scrollable-menu mt-5">
              <div>
                <h1 className="text-4xl">Nearby cities:</h1>
              </div>
              <div className="flex gap-4">
                <div className="city-card h-[14vw] shadow-lg rounded-lg relative w-1/4 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkzNjgzNw&ixlib=rb-4.0.3&q=80&w=500')] ">
                  <div className="city-card-content flex flex-col h-full items-end justify-end p-6  bg-gradient-to-t from-slate-900 rounded-lg">
                    <div>Hot</div>
                    <div>32 C</div>
                    <div>London</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="nav overflow-auto pb-2 w-full menu-app-section-bound">
            <div className="scrollable-menu mt-5">
              <div>
                <h1 className="text-4xl">Nearby cities:</h1>
              </div>
              <div className="flex gap-4">
                <div className="city-card h-[24vw] shadow-xl rounded-lg relative w-1/4 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkzNjgzNw&ixlib=rb-4.0.3&q=80&w=500')] ">
                  <div className="city-card-content flex flex-col h-full items-end justify-end p-6  bg-gradient-to-t from-slate-900 rounded-lg">
                    <div>Hot</div>
                    <div>32 C</div>
                    <div>London</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scrollable-menu mt-5">
              <div>
                <h1 className="text-4xl">Nearby cities:</h1>
              </div>
              <div className="flex gap-4">
                <div className="city-card h-[14vw] shadow-lg rounded-lg relative w-1/4 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkzNjgzNw&ixlib=rb-4.0.3&q=80&w=500')] ">
                  <div className="city-card-content flex flex-col h-full items-end justify-end p-6  bg-gradient-to-t from-slate-900 rounded-lg">
                    <div>Hot</div>
                    <div>32 C</div>
                    <div>London</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Menu;
