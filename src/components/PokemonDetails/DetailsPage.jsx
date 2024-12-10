import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPokemonDetails } from "../../Services/PokemonAPI";
import Skeleton from "../Loading/Skeleton";
import PokemonsPowersChart from "../Charts/PokemonsPowersChart";

const DetailsPage = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let idNum = Number(id);
  const [pokiId, setPokiId] = useState(idNum);
  const navigate = useNavigate();

  console.log(pokiId);

  console.log(pokemonDetails);
  const image = pokemonDetails?.sprites?.other.dream_world.front_default;

  const stats = pokemonDetails?.stats?.map((stats) => stats.base_stat);
  const abilities = pokemonDetails?.abilities?.map(
    (ability) => ability.ability.name
  );
  const types = pokemonDetails?.types?.map((type) => type.type.name);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const pokemonData = await getPokemonDetails(pokiId);

      setPokemonDetails(pokemonData.data);
      setLoading(false);
      navigate(`/${pokiId}`);
    })();
  }, [pokiId]);

  return (
    <div className="min-h-[81.5vh] w-full flex justify-center flex-col items-center">
      <div className="flex items-center justify-center w-full gap-5 mt-5 mb-4">
        <img
          onClick={() => {
            setPokiId((prev) => prev - 1);
          }}
          className="xl:absolute transition-all w-10 active:scale-90 top-[50%] left-24"
          src="https://img.icons8.com/color/48/chevron-left.png"
          alt=""
        />
        <img
          onClick={() => {
            setPokiId((prev) => prev + 1);
          }}
          className="xl:absolute transition-all rotate-180 w-10 active:scale-90 top-[50%] right-24"
          src="https://img.icons8.com/color/48/chevron-left.png"
          alt=""
        />
      </div>
      <div className="w-[95%] md:w-[80%]  relative mb-10 flex flex-wrap items-center justify-center md:justify-between gap-5 p-3 bg-[#0F172A] rounded-3xl">
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <div className="w-[30rem] mb-5 lg:w-[50%] xl:w-[60%] mx-auto">
              <center>
                <img className="w-44 md:w-60" src={image && image} alt="" />
              </center>
              <center className="px-4 py-1 mx-auto mt-8 font-bold text-white bg-orange-600 w-fit rounded-3xl">
                Type:{" "}
                <span className="font-medium">
                  {types?.slice(0, 2).join(", ")}
                </span>
              </center>
              <ul className="flex flex-wrap justify-around gap-4 mt-6 ">
                <div className="">
                  <li className="w-32 pb-1 mx-auto font-bold text-center text-white border-b border-white rounded-3xl px-7 md:px-10">
                    Height
                  </li>
                  <p className="px-4 mt-5 text-center text-yellow-400 ">
                    {pokemonDetails?.height} fit
                  </p>
                </div>
                <div className="">
                  <li className="w-32 pb-1 mx-auto font-bold text-center text-white border-b border-white rounded-3xl px-7 md:px-10">
                    Weight{" "}
                  </li>
                  <p className="px-4 mt-5 text-center text-yellow-400 ">
                    {pokemonDetails?.weight} Kg
                  </p>
                </div>
                <div className="">
                  <li className="w-32 pb-1 mx-auto font-bold text-center text-white border-b border-white rounded-3xl px-7 md:px-10">
                    Ability
                  </li>
                  <p className="px-4 mt-5 text-center text-yellow-400 ">
                    {abilities.slice(0, 2).join(", ")}
                  </p>
                </div>
                <div className="">
                  <li className="w-32 pb-1 mx-auto font-bold text-center text-white border-b border-white rounded-3xl px-7 md:px-10">
                    Power
                  </li>
                  <p className="px-4 mt-5 text-center text-yellow-400 ">
                    {pokemonDetails?.base_experience}
                  </p>
                </div>
              </ul>
            </div>
            <div className="w-full  md:w-[20rem] shadow-sm shadow-gray-400 mx-auto lg:mx-0 lg:w-[40%] xl:w-[30%] border p-3 rounded-3xl">
              <PokemonsPowersChart stats={stats} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
