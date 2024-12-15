import React from "react";
import { FaBookmark, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useContextData from "../../Hooks/useContextData";
import useDebouncingSearch from "../../Hooks/useDebouncingSearch";

const Nav = () => {
  const { savedPokemons, searchInput, setSearchInput } = useContextData();
  const searchPoki = useDebouncingSearch((e) => {
    setSearchInput(e.target.value);
  });

  return (
    <div className="sticky top-0 z-50 w-full px-4 py-2 shadow-inner navbar bg-slate-900 shadow-yellow-400">
      <div className="justify-between w-full sm:justify-start navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-center  dropdown-content  rounded-box backdrop-blur-sm bg-black/50 z-[9999] mt-3 w-[19rem] p-2 shadow border-2 border-yellow-400"
          >
            <li
              className=""
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <a className="justify-between w-full text-center">
                View Saved Pokemon
                <FaBookmark className="text-lg text-yellow-400 transition-all duration-100 ease-in cursor-pointer md:text-2xl active:scale-90" />{" "}
              </a>
            </li>
            <li className="w-full">
              <div className="flex items-center justify-between w-full">
                <input
                  type="text"
                  placeholder="search your fav Pokemon..."
                  className="relative w-full p-3 px-4 border-2 border-yellow-600 rounded-full focus:outline-none"
                />

                <div className="absolute flex items-center justify-center border-2 border-yellow-400 rounded-full w-9 h-9 right-[7.2%]">
                  <FaSearch className="text-yellow-400 " />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="h-[6rem] relative transition-all duration-100 ease-out">
          <Link to="/">
            <img
              className="object-contain w-full h-full transition-all duration-100 ease-out hover:scale-90 active:scale-105"
              src="/images/PokemonLogo.png"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="relative mx-3 mt-3 transition-all duration-100 ease-in sm:mt-0 active:scale-90"
      >
        <FaBookmark className="text-lg text-yellow-400 transition-all duration-100 ease-in cursor-pointer md:text-2xl active:scale-90" />
        <p className="absolute flex items-center justify-center w-6 h-6 text-sm text-white bg-red-500 border rounded-full -top-3 -left-2">
          {savedPokemons?.length}
        </p>
      </div>
      <div className="hidden w-fit navbar-end sm:flex">
        <input
          type="text"
          onChange={searchPoki}
          placeholder="search your fav Pokemon..."
          className="p-3 px-4 border-2 border-yellow-600 rounded-full focus:outline-none w-80"
        />

        <FaSearch className="absolute text-yellow-400 right-8" />
      </div>
    </div>
  );
};

export default Nav;
