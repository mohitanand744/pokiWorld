import React, { useEffect, useState } from "react";
import { searchPokemos } from "../../Services/PokemonAPI";
import useContextData from "../Hooks/useContextData";
import PokemonDetailsCard from "./../PokemonList/PokemonDetailsCard";

const SearchContainer = () => {
  const [pokiData, setPokidata] = useState({});
  const { searchInput } = useContextData();

  useEffect(() => {
    (async () => {
      const pokemonDetails = await searchPokemos(searchInput);

      setPokidata(pokemonDetails?.data);
    })();
  }, [searchInput]);

  return (
    <div
      className={`bg-[#0F172A] ${
        searchInput ? "h-[100vh] p-3 md:p-5" : "h-[0vh] p-0"
      }  overflow-hidden fixed top-28 bottom-0 w-full z-50 transition-all`}
    >
      <div className="mx-auto md:w-96">
        <PokemonDetailsCard
          pokemon={{
            id: pokiData?.id,
            name: pokiData?.name,
            image: pokiData?.sprites?.other.dream_world.front_default,
            abilities: pokiData?.abilities,
            weight: pokiData?.weight,
            height: pokiData?.height,
            types: pokiData?.types,
          }}
        />
      </div>
    </div>
  );
};

export default SearchContainer;
