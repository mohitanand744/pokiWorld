import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useContextData from "../Hooks/useContextData";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const { removeSavedPokemon, isSaved, toggleSavedPokemon } = useContextData();

  console.log(isSaved);

  return (
    <div
      onClick={() => {
        navigate("/25");
      }}
      key={pokemon?.id}
      className="w-56 h-56 mx-5 my-3 overflow-hidden transition-all duration-150 ease-in shadow-sm hover:scale-105 md:w-72 md:h-72 shadow-yellow-400 card bg-base-100 image-full"
    >
      {/* Background Image */}
      <figure>
        <img
          src={pokemon?.image}
          alt={pokemon?.name}
          className="object-cover w-full h-full"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body">
        {/* Pokémon Image */}
        <div className="w-32 h-32 mx-auto mb-3 md:w-48 md:h-48">
          <img
            className="object-contain w-full h-full "
            src={pokemon?.image}
            alt={pokemon?.name}
          />
        </div>
        {/* Pokémon Name */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-white capitalize md:text-2xl card-title">
            {pokemon?.name}
          </h2>

          <div className="">
            {isSaved[pokemon.id] || false ? (
              <FaBookmark
                onClick={(e) => {
                  e.stopPropagation();
                  removeSavedPokemon(pokemon.id);
                }}
                className="text-lg text-yellow-400 transition-all duration-100 ease-in cursor-pointer md:text-2xl active:scale-90"
              />
            ) : (
              <FaRegBookmark
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSavedPokemon(pokemon.id, pokemon.name, pokemon.image);
                }}
                className="text-lg text-yellow-400 transition-all duration-100 ease-in cursor-pointer md:text-2xl active:scale-90"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
