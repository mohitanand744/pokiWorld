import Marquee from "react-fast-marquee";
import Skeleton from "../Loading/Skeleton";
import PokemonCard from "./PokemonCard";
import "react-toastify/dist/ReactToastify.css";
import useContextData from "../Hooks/useContextData";
import APIError from "../Errors/APIError";

const PokemonList = () => {
  const { loading, allPokemon, err } = useContextData();

  return (
    <div className="">
      {loading ? (
        <Skeleton />
      ) : err ? (
        <APIError />
      ) : (
        <>
          <Marquee gradient={false} direction="right" speed={150} pauseOnHover>
            {allPokemon?.slice(0, 10).map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={{
                  id: pokemon.id,
                  name: pokemon.name,
                  image: pokemon.image,
                }}
              />
            ))}
          </Marquee>
          <Marquee gradient={false} direction="left" speed={150} pauseOnHover>
            {allPokemon?.slice(10, 20).map((pokemon) => (
              <PokemonCard
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
