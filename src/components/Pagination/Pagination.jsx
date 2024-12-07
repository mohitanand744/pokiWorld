import React, { useState } from "react";
import useContextData from "../Hooks/useContextData";

const Pagination = () => {
  const { allPokemon, url, setURLs } = useContextData();

  console.log(url?.previous);

  return (
    <div className="flex justify-between w-full p-2 mx-auto rounded-full join ">
      <button
        className={`pb-1 text-xl  join-item btn  ${
          url?.previous && "shadow-inner shadow-yellow-400"
        }`}
        disabled={url?.previous ? false : true}
        onClick={() => {
          setURLs(url?.previous);
        }}
      >
        «
      </button>
      {/*    <button className="join-item btn-active btn">1</button>
      <button className="join-item btn ">1300+</button> */}

      <button
        className={`pb-1 text-xl  join-item btn  ${
          url?.previous && "shadow-inner shadow-yellow-400"
        }`}
        disabled={url?.next ? false : true}
        onClick={() => {
          setURLs(url?.next);
        }}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
