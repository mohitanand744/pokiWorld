import React from "react";
import useContextData from "./../Hooks/useContextData";
import PokemonDetailsCard from "./PokemonDetailsCard";
import Skeleton from "../Loading/Skeleton";
import APIError from "../Errors/APIError";

const AllPokemons = () => {
  const { loading, allPokemon, err } = useContextData();

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : err ? (
        <APIError />
      ) : (
        <div className="grid self-center grid-cols-12 gap-5 mt-16">
          {allPokemon?.map((pokemon) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
              key={pokemon.id}
            >
              <PokemonDetailsCard
                pokemon={{
                  id: pokemon.id,
                  name: pokemon.name,
                  image: pokemon.image,
                  abilities: pokemon.abilities,
                  weight: pokemon.weight,
                  height: pokemon.height,
                  types: pokemon.types,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AllPokemons;
