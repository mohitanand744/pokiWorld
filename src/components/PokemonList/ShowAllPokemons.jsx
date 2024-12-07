import React from "react";
import AllPokemons from "./AllPokemons";
import Pagination from "../Pagination/Pagination";
import Banner from "../Banners/Banner";

const ShowAllPokemons = () => {
  return (
    <>
      <Banner />

      <AllPokemons />

      <Pagination />
    </>
  );
};

export default ShowAllPokemons;
