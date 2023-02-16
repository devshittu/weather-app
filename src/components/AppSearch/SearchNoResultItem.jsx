import React from "react";

function SearchNoResultItem({keyword}) {
  return (
    <div className="w-full flex p-3 pl-4 h-24 items-center justify-center  hover:bg-slate-500/40 dark:hover:bg-white/40 cursor-pointer">
      <div>
        <div className="font-bold text-lg md:text-2xl leading-loose">
          No result found for "{keyword}"
        </div>
      </div>
    </div>
  );
}

export default SearchNoResultItem;
