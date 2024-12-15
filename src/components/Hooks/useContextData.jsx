import React, { useContext } from "react";
import { ContextDataProvider } from "../../Context/DataStore";

const useContextData = () => {
  const {
    allPokemon,
    isSaved,
    loading,
    savedPokemons,
    err,
    toggleSavedPokemon,
    setSavedPokemons,
    removeSavedPokemon,
    url,
    setURLs,
    searchInput,
    setSearchInput,
  } = useContext(ContextDataProvider);

  return {
    allPokemon,
    isSaved,
    loading,
    savedPokemons,
    err,
    toggleSavedPokemon,
    setSavedPokemons,
    removeSavedPokemon,
    url,
    setURLs,
    searchInput,
    setSearchInput,
  };
};

export default useContextData;
