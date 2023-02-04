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

            <article className="md:max-w-xl w-1/3 rounded-lg backdrop-blur bg-white/50 shadow-lg bg-gradient-to-tr from-emerald-700/40 ">
              <div className="p-6 flex flex-col justify-start space-y-4">
                <div className="flex justify-between items-center">
                  <span
                    class="inline-block px-6 py-1 border-2 border-white/20 text-white-600 font-medium text-l leading-tight rounded bg-white bg-opacity-5 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Primary
                  </span>

                  <h5 className="font-medium leading-tight text-2xl">18:45</h5>
                </div>
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
