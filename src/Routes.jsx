import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DetailsPage from "./components/PokemonDetails/DetailsPage";
import VideoLoading from "./components/Loading/VideoLoading";
import App from "./App";

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
        <Route index element={<App />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/allPokemons" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesCom;
