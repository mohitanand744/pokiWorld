import { createContext, useEffect, useState } from "react";

export const ContextDataProvider = createContext();
import { toast } from "react-toastify";

import React from "react";
import useGetPokemons from "../components/Hooks/useGetPokemons";
import { useLocation } from "react-router-dom";

const DataStore = ({ children }) => {
  const [isSaved, setIsSaved] = useState(() => {
    const data = JSON.parse(localStorage.getItem("isSaved")) || {};
    return data;
  });
  const [urls, setURLs] = useState(null);
  const { loading, allPokemon, err, url } = useGetPokemons(
    urls || "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  const [savedPokemons, setSavedPokemons] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem("pokemons"));
      return data ? data : [];
    } catch (error) {
      console.error(
        "Error initializing savedPokemons from localStorage:",
        error
      );
      return [];
    }
  });
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const toggleSavedPokemon = (id, name, image) => {
    setIsSaved((prev) => {
      const updatedIsSaved = {
        ...prev,
        [id]: !prev?.[id],
      };

      localStorage.setItem("isSaved", JSON.stringify(updatedIsSaved));
      return updatedIsSaved;
    });

    const newPokemon = { id, name, image };

    let data = [];

    data = JSON.parse(localStorage.getItem("pokemons")) || [];

    const updatedPokemon = [newPokemon, ...data];

    localStorage.setItem("pokemons", JSON.stringify(updatedPokemon));
    setSavedPokemons(updatedPokemon);
    toast("Successfully Saved");
  };

  const removeSavedPokemon = (id) => {
    setIsSaved((prev) => {
      const updatedIsSaved = {
        ...prev,
        [id]: !prev?.[id],
      };

      localStorage.setItem("isSaved", JSON.stringify(updatedIsSaved));

      return updatedIsSaved;
    });

    const updatedSavedPokemons = savedPokemons.filter((poki) => poki.id !== id);

    localStorage.setItem("pokemons", JSON.stringify(updatedSavedPokemons));
    setSavedPokemons(updatedSavedPokemons);
    toast("Successfully Removed");
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
        url,
        setURLs,
      }}
    >
      {children}
    </ContextDataProvider.Provider>
  );
};

export default DataStore;
