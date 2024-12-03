import React from "react";
import { HiOutlineBookmarkSlash } from "react-icons/hi2";
import useContextData from "../Hooks/useContextData";
import { useNavigate } from "react-router-dom";

const SavedPokemons = () => {
  const { savedPokemons, removeSavedPokemon } = useContextData();
  const navigate = useNavigate();

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box bg-[#000b] shadow-sm shadow-yellow-400 h-[60vh]">
        <h3 className="text-xl font-bold text-center text-yellow-200 md:text-2xl">
          Saved Pokemons
        </h3>
        <p className="mt-2 font-medium text-center text-yellow-400">
          {" "}
          {savedPokemons.length > 0
            ? "We Have Your Fav Pokemons 🦾😎"
            : "Sorry We Don't have any saved Pokemons"}
        </p>

        <div className="mt-6 space-y-5">
          {savedPokemons.length > 0 ? (
            savedPokemons.map((poki) => (
              <div
                key={poki.id}
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  navigate(`/${poki.id}`);
                }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 ">
                  <img
                    className="object-contain w-full h-full "
                    src={poki.image}
                    alt={poki.name}
                  />
                </div>

                <p className="text-lg w-[30%] font-semibold text-yellow-200 capitalize">
                  {" "}
                  {poki.name}{" "}
                </p>

                <HiOutlineBookmarkSlash
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSavedPokemon(poki.id);
                  }}
                  className="text-xl text-yellow-400 transition-all duration-100 ease-linear active:scale-95"
                />
              </div>
            ))
          ) : (
            <>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/data-not-found-illustration-download-in-svg-png-gif-file-formats--message-empty-communication-emptystate-no-pack-design-development-illustrations-9404367.png"
                alt=""
                className=""
              />
            </>
          )}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default SavedPokemons;
