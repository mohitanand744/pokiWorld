import React from "react";
import useContextData from "./../Hooks/useContextData";
import PokemonDetailsCard from "./PokemonDetailsCard";

const AllPokemons = () => {
  const { loading, allPokemon, err } = useContextData();

  return (
    <div className="grid self-center grid-cols-12 gap-5">
      {allPokemon.map((pokemon) => (
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
  );
};

export default AllPokemons;
