import React from "react";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <div className="h-[70vh] w-full md:w-[95%] mx-auto mb-8 relative">
      {/* Add a semi-transparent background to the parent div */}
      <div className="absolute inset-0 rounded-2xl flex justify-center items-end pb-10 cus-shad bg-[#0000009c]">
        <Link to="/allPokemons">
          <button className="mx-auto border-2 w-44 bg-[#00000073] border-yellow-400 btn  hover:shadow-sm hover:shadow-yellow-400">
            View All Pokemons
          </button>
        </Link>
      </div>

      {/* Image */}
      <img
        className="object-cover object-top w-full h-full rounded-2xl"
        src="/images/pokiImg1.svg"
        alt="banner"
      />
    </div>
  );
};

export default Banner2;
