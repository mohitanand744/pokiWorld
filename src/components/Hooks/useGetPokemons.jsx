import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllPokemon } from "../../Services/PokemonAPI";

const useGetPokemons = (PaginationUrl) => {
  const [loading, setLoading] = useState(true);
  const [allPokemon, setAllPokemon] = useState([]);
  const [err, setErr] = useState(null);
  const [url, setURL] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await getAllPokemon(
          PaginationUrl && PaginationUrl
        );
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

        setURL({
          next: data.next,
          previous: data.previous,
        });
        setLoading(false);
      } catch (error) {
        setErr(error.message);
      }
    })();
  }, [PaginationUrl]);

  return { loading, allPokemon, err, url };
};

export default useGetPokemons;
