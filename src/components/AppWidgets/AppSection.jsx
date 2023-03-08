import React from "react";

function AppSection({ title, children }) {
  return (
    <section className="flex flex-col pb-2 mt-8 md:mt-16 w-full">
      {/* Section Heading bg-white/60 backdrop-blur-md rounded-3xl */}
      <header className="mb-8">
        <h3 className="leading-tight text-3xl md:text-6xl drop-shadow-lg ">{title}</h3>
      </header>
      <div>{children}</div>
    </section>
  );
}

export default AppSection;
