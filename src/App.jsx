import React from "react";
import Banner from "./components/Banners/Banner";
import Banner2 from "./components/Banners/Banner2";
import PokemonList from "./components/PokemonList/PokemonList";

const App = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <Banner />
      <PokemonList />
      <Banner2 />
    </div>
  );
};

export default App;
