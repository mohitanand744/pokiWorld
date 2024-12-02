import { createContext, useState } from "react";

export const ContextDataProvider = createContext();
import { toast } from "react-toastify";

import React from "react";
import useGetPokemons from "../components/Hooks/useGetPokemons";

const DataStore = ({ children }) => {
  const [isSaved, setIsSaved] = useState({});
  const { loading, allPokemon, err } = useGetPokemons();
  const [savedPokemons, setSavedPokemons] = useState([]);

  const toggleSavedPokemon = (id, name, image) => {
    setIsSaved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    toast.success("Successfully Saved");

    console.log(image);

    setSavedPokemons((prev) => [
      ...prev,
      {
        id,
        name,
        image,
      },
    ]);
  };

  const removeSavedPokemon = (id) => {
    setIsSaved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    const updatedSavedPokemons = savedPokemons.filter((poki) => poki.id !== id);

    setSavedPokemons(updatedSavedPokemons);
    toast.success("Successfully Removed");
  };

  return (
    <ContextDataProvider.Provider
      value={{
        allPokemon,
        isSaved,
        loading,
        savedPokemons,
        err,
        setSavedPokemons,
        toggleSavedPokemon,
        removeSavedPokemon,
      }}
    >
      {children}
    </ContextDataProvider.Provider>
  );
};

export default DataStore;
