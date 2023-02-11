import React from "react";

function CityItem({ photo }) {
  return (
    <div className="md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
      <div
        className={
          `z-20 bg-gray-300 h-56 rounded-lg shadow-lg w-[88%] md:w-80 bg-cover bg-center bg-[url('` +
          photo +
          `')]`
        }
      ></div>

      <div className="w-full bg-white/30  backdrop-blur -mt-36 pt-40 shadow-lg rounded-lg overflow-hidden p-5">
        <div className="header-content inline-flex ">
          <div className="category-badge flex-1  h-6 w-6 m rounded-full m-[6px] bg-purple-100">
            <div className="h-3 w-3 rounded-full m-[6px] bg-purple-500 "></div>
          </div>
          <h4 className="category-title flex-1 text-2xl"> PHP</h4>
        </div>
        <div className="title-post font-medium">Mon titre</div>

        <div className="summary-post text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          veritatis vel suscipit ex dolore possimus iure.
          <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm ">
            <span className="">Lire plus</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CityItem;
