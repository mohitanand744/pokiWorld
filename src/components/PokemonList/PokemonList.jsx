import Marquee from "react-fast-marquee";
import Skeleton from "../Loading/Skeleton";
import Banner from "../Banners/Banner";
import PokemonCard from "./PokemonCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SavedPokemons from "../Models/SavedPokemons";
import useContextData from "../Hooks/useContextData";

const PokemonList = () => {
  const {
    isSaved,
    loading,
    allPokemon,
    err,
    savedPokemons,
    toggleSavedPokemon,
  } = useContextData();

  return (
    <div className="flex flex-col gap-10 ">
      <Banner />

      {loading ? (
        <Skeleton />
      ) : err ? (
        <div className="tooltip tooltip-open tooltip-error" data-tip="error">
          <button className="btn btn-error">Please Refresh Your Page</button>
        </div>
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

      <ToastContainer className={"text-green-500"} />

      {/* Saved Pokemons */}

      <SavedPokemons savedPokemons={savedPokemons} />
    </div>
  );
};

export default PokemonList;
