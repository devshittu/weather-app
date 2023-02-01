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
            <button class="bg-sky-500 hover:bg-sky-700">Save changes</button>
            <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
              Cat two
            </button>
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
              <div className="flex gap-3">
                <div className="meta-card h-[7vw] shadow-lg rounded-lg relative w-1/6 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1614785246748-edc43ab91f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTI1MjMwNg&ixlib=rb-4.0.3&q=80&w=500')] ">
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
              <div className="flex gap-3">
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
