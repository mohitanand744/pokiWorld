import React from "react";
import Banner from "./components/Banners/Banner";
import Banner2 from "./components/Banners/Banner2";
import PokemonList from "./components/PokemonList/PokemonList";
import { ToastContainer } from "react-toastify";
import SavedPokemons from "./components/Models/SavedPokemons";
import useContextData from "./components/Hooks/useContextData";
import AllPokemons from "./components/PokemonList/AllPokemons";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  const { savedPokemons } = useContextData();

  return (
    <div className="flex flex-col gap-10 ">
      <Banner />
      <PokemonList />
      <Banner2 />

      <AllPokemons />

      <Pagination />

      <ToastContainer />

      {/* Saved Pokemons */}

      <SavedPokemons savedPokemons={savedPokemons} />
    </div>
  );
};

export default App;
