import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 mt-10 text-white bg-[#2b210310] shadow-sm rounded-t-3xl shadow-yellow-500">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between shadow-inner md:flex-row ">
          <div className="mb-4 text-yellow-400 md:mb-0">
            <img className="w-44" src="/images/PokemonLogo.png" alt="" />
            <p> Discover 1300+ Pokémon | Save Your Favorites</p>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <p className="text-center text-yellow-400">&copy; 2024 Piki World</p>
      </div>
    </footer>
  );
};

export default Footer;
