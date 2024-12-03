import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useContextData from "../Hooks/useContextData";
import { MdElectricBolt, MdOutlineMergeType } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";

const PokemonDetailsCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const { removeSavedPokemon, isSaved, toggleSavedPokemon } = useContextData();

  const ablities = pokemon.abilities?.map(
    (ablitiesInfo) => ablitiesInfo.ability.name
  );

  const finalAbility = ablities.slice(0, 2).join(", ");
  const types = pokemon.types?.map((typess) => typess.type.name);
  const finalType = types.join(", ");
  return (
    <div
      onClick={() => {
        navigate(`/${pokemon.id}`);
      }}
      key={pokemon?.id}
      className=" mx-5 my-3 relative overflow-hidden transition-all duration-150 ease-in shadow-sm hover:scale-105w-[19.4rem] h-fit shadow-yellow-400 card bg-base-100 image-full"
    >
      {/* Background Image */}
      <figure>
        <img src={pokemon?.image} alt={pokemon?.name} />
      </figure>

      {/* Card Content */}
      <div className="card-body">
        {/* Pokémon Image */}
        <div className="mx-auto mb-3 w-44 h-44 md:w-52 md:h-52">
          <img
            className="object-contain w-full h-full "
            src={pokemon?.image}
            alt={pokemon?.name}
          />
        </div>
        {/* Pokémon Name */}
        <div className="flex items-center justify-between">
          <h2 className="mx-auto text-lg text-white capitalize md:text-2xl card-title">
            {pokemon?.name}
          </h2>

          <div className="absolute top-5 right-5">
            {isSaved?.[pokemon.id] || false ? (
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

        <div className="flex items-center justify-between gap-4">
          <span className="flex gap-2 text-sm font-semibold text-yellow-400">
            <MdElectricBolt className="text-2xl font-bold text-yellow-400 " />
            Ability
          </span>
          <span className="text-sm font-semibold text-yellow-400 capitalize">
            {finalAbility}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex gap-2 text-sm font-semibold text-yellow-400">
            <GiBodyHeight className="text-2xl font-bold text-yellow-400 " />
            Height
          </span>
          <span className="text-sm font-semibold text-yellow-400 capitalize">
            {pokemon?.height} fit
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex gap-2 text-sm font-semibold text-yellow-400">
            <GiWeightLiftingUp className="text-2xl font-bold text-yellow-400 " />
            Weight
          </span>
          <span className="text-sm font-semibold text-yellow-400 capitalize">
            {pokemon?.weight} kg
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex gap-2 text-sm font-semibold text-yellow-400">
            <MdOutlineMergeType className="text-2xl font-bold text-yellow-400 " />
            Types
          </span>
          <span className="text-sm font-semibold text-yellow-400 capitalize">
            {finalType}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
