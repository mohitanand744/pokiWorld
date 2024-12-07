import React from "react";
import Nav from "./components/Common/NavBars/Nav";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SavedPokemons from "./components/Models/SavedPokemons";
import useContextData from "./components/Hooks/useContextData";

const Layout = () => {
  const { savedPokemons } = useContextData();

  return (
    <>
      <Nav />
      <Outlet />

      {/* Toast */}

      <ToastContainer />

      {/* Saved Pokemons */}

      <SavedPokemons savedPokemons={savedPokemons} />
    </>
  );
};

export default Layout;
