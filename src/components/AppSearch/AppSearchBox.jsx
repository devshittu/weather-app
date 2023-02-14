import React from "react";
import SearchNoResultItem from "./SearchNoResultItem";
import SearchResultItem from "./SearchResultItem";

function AppSearchBox() {
  return (
    <div>
      <div className="md:w-4/6 z-20 relative">
        <div className="pt-2 relative   h-16 ">
          <input
            className="  placeholder:text-slate-500 w-full h-full h-10x px-5 pr-16  text-lg md:text-2xl text-slate-700
          backdrop-blur bg-white/30 border-2 md:border-4 border-white/80  rounded-xl md:rounded-lg shadow-md hover:bg-white/60 hover:shadow-lg focus:bg-white/60 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white/80 active:shadow-lg transition duration-150 ease-in-out"
            type="search"
            name="search"
            placeholder="Search a city..."
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg
              className="text-gray-600 h-8 w-8 fill-white"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      <h1>Break</h1>
      <div className="bg-white/40 backdrop-blur-md  w-full rounded-xl shadow-xl overflow-hidden  text-slate-700">
        
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
        <SearchNoResultItem />
      </div>
    </div>
  );
}

export default AppSearchBox;
