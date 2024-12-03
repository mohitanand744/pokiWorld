import React from "react";

const Banner2 = () => {
  return (
    <div className="h-[70vh] md:w-[95%] mx-auto relative">
      {/* Add a semi-transparent background to the parent div */}
      <div className="absolute inset-0 rounded-2xl cus-shad bg-[#0000009c]"></div>

      {/* Image */}
      <img
        className="object-cover object-top w-full h-full rounded-2xl"
        src="/images/pokiImg1.svg"
        alt="banner"
      />

      <button className="absolute left-[45%] border-2 w-44 bg-[#00000073] border-yellow-400 btn bottom-[10%] hover:shadow-sm hover:shadow-yellow-400">
        View All Pokemons
      </button>
    </div>
  );
};

export default Banner2;
