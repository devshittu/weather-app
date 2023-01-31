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
            <h2 className="flex gap-3 items-center">Weather today:</h2>
            <div className="scrollable-menu mt-5">
              <div>
                <h1 className="text-4xl">How it looks & feel out there?</h1>
              </div>
              <div className="day-card backdrop-blur bg-white/10 border border-white/20 h-[8vw] w-32 shadow-lg rounded-lg relative">
                <div className="day-card-content flex flex-col h-full items-center justify-evenly p-3">
                  <div>32 deg F</div>
                  <div>Icon</div>
                  <div>Day of week</div>
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
