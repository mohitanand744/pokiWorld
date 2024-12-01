import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import PokemonList from "./components/PokemonList/PokemonList";
import DetailsPage from "./components/PokemonDetails/DetailsPage";
import VideoLoading from "./components/Loading/VideoLoading";

const RoutesCom = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, []);

  return (
    <Routes>
      <Route path="/" element={loading ? <VideoLoading /> : <Layout />}>
        <Route index element={<PokemonList />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesCom;
