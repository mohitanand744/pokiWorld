import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllPokemon } from "../../Services/PokemonAPI";

const useGetPokemons = () => {
  const [loading, setLoading] = useState(true);
  const [allPokemon, setAllPokemon] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await getAllPokemon();
        setErr(error);

        let pokemonData = data.results.map((pokemon) => axios.get(pokemon.url));

        pokemonData = await axios.all(pokemonData);

        const finalPokemonData = pokemonData.map((pokemon) => {
          const pokemonObj = pokemon.data;

          return {
            id: pokemonObj.id,
            name: pokemonObj.name,
            image: pokemonObj.sprites.other.dream_world.front_default,
            abilities: pokemonObj.abilities,
            weight: pokemonObj.weight,
            height: pokemonObj.height,
            types: pokemonObj.types,
          };
        });
        setAllPokemon(finalPokemonData);
        setLoading(false);
      } catch (error) {
        setErr(error.message);
      }
    })();
  }, []);

  return { loading, allPokemon, err };
};

export default useGetPokemons;
