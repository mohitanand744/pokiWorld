import Marquee from "react-fast-marquee";
import { useState } from "react";
import Skeleton from "../Loading/Skeleton";
import Banner from "../Banners/Banner";
import PokemonCard from "./PokemonCard";
import useGetPokemons from "../Hooks/useGetPokemons";

const PokemonList = () => {
  const [isSaved, setIsSaved] = useState({});
  const { loading, allPokemon, err } = useGetPokemons();

  const toggleSavedPokemon = (id) => {
    setIsSaved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col gap-10 ">
      <Banner />

      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Marquee gradient={false} direction="right" speed={150} pauseOnHover>
            {allPokemon?.slice(0, 10).map((pokemon) => (
              <PokemonCard
                toggleSavedPokemon={toggleSavedPokemon}
                key={pokemon.id}
                pokemon={{
                  id: pokemon.id,
                  name: pokemon.name,
                  image: pokemon.image,
                }}
                isSaved={isSaved[pokemon.id] || false}
              />
            ))}
          </Marquee>
          <Marquee gradient={false} direction="left" speed={150} pauseOnHover>
            {allPokemon?.slice(10, 20).map((pokemon) => (
              <PokemonCard
                toggleSavedPokemon={toggleSavedPokemon}
                key={pokemon.id}
                pokemon={{
                  id: pokemon.id,
                  name: pokemon.name,
                  image: pokemon.image,
                }}
              />
            ))}
          </Marquee>
        </>
      )}
    </div>
  );
};

export default PokemonList;
