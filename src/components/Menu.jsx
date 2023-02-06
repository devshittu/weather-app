import React from "react";
import AppButton from "./AppButton";
import AppDailyCard from "./AppDailyCard";
import AppSection from "./AppSection";
import CityItem from "./CityItem";
import TimeWeatherInfo from "./TimeWeatherInfo";

function Menu() {
  return (


    // height: 100vh;
    // overflow: hidden;
    // opacity: 0;
    // pointer-events: none;
    // position: relative;
    // transform: translateY(-10%);
    // transition: opacity 250ms, transform 250ms;
    // z-index: 2;
    // relative overflow-hidden h-screen pointer-events-none

    <div className="app-menu relative overflow-hidden h-screen pointer-events-none opacity-0 z-20">
      <div className="wrapper mt-[30vh] min-h-[80vh] md:p-20 p-3 pt-0 bg-gradient-to-t from-slate-900/70">
        <div className="container max-w-7xl mx-auto relative pointer-events-auto text-white">
          <section className="app-header flex justify-between">
            <TimeWeatherInfo />
            <div>
              <button
                type="button"
                className="inline-block px-6 py-6 backdrop-blur bg-white/10 border-4 border-white/20 text-white rounded-lg shadow-md hover:bg-white/30 hover:shadow-lg focus:bg-white/30 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white/50 active:shadow-lg transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8"
                  viewBox="0 0 512 512"
                >
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
                </svg>
              </button>
            </div>
          </section>
          <section className="nav flex gap-3 overflow-auto pb-2 w-full menu-app-section-bound">
            <h1 className="text-2xl leading-5">Categories: </h1>
            <AppButton>Save changes</AppButton>
            <AppButton>Cat two</AppButton>
          </section>

          <AppSection title={`Nearby Cities`}>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <CityItem photo="https://images.unsplash.com/photo-1614785246748-edc43ab91f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTI1MjMwNg&ixlib=rb-4.0.3&q=80&w=500" />

              <CityItem photo="https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" />
              <CityItem photo="https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" />
            </div>
          </AppSection>

          <AppSection title={`Current City's Week`}>
            <div className="flex md:flex-row md:space-x-8 flex-col md:overflow-x-auto">
              <AppDailyCard className="from-sky-700/40" />
              <AppDailyCard className="from-emerald-700/40" />
              <AppDailyCard className="from-amber-700/40" />
              <AppDailyCard className="from-violet-700/40" />
            </div>
          </AppSection>
          <AppSection title={`Cities Elements`}>
            <article className="flex flex-col md:flex-row md:max-w-xl rounded-lg backdrop-blur bg-white/40 shadow-lg ">
              <div className="h-auto w-full">
                <img
                  className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg "
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
              </div>
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </article>
          </AppSection>

          <AppSection title={`How it looks & feel out there?`}>
            <div className="flex gap-3">
              <div className="day-card backdrop-blur bg-white/10 border border-white/20 h-[8vw] w-32 shadow-lg rounded-lg relative">
                <div className="day-card-content flex flex-col h-full items-center justify-evenly p-3">
                  <div>32 deg F</div>
                  <div>Icon</div>
                  <div>Day of week</div>
                </div>
              </div>
            </div>
          </AppSection>

          <AppSection title={`Meta Data`}>
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
          </AppSection>

          <AppSection title={`World Forecast`}>
            <div className="flex gap-4">
              <div className="city-card h-[24vw] shadow-xl rounded-lg relative w-1/4 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkzNjgzNw&ixlib=rb-4.0.3&q=80&w=500')] ">
                <div className="city-card-content flex flex-col h-full items-end justify-end p-6  bg-gradient-to-t from-slate-900 rounded-lg">
                  <div>Hot</div>
                  <div>32 C</div>
                  <div>London</div>
                </div>
              </div>
            </div>
          </AppSection>
        </div>
      </div>
    </div>
  );
}

export default Menu;
