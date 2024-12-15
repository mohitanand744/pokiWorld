import React from "react";
import Nav from "./components/Common/NavBars/Nav";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SavedPokemons from "./components/Models/SavedPokemons";
import useContextData from "./components/Hooks/useContextData";
import Footer from "./components/Footer/Footer";
import SearchContainer from "./components/SearchContainer/SearchContainer";

const Layout = () => {
  const { savedPokemons } = useContextData();

  return (
    <div className="bg-[#000000d5]">
      <Nav />
      <SearchContainer />
      <Outlet />
      <Footer />

      {/* Toast */}

      <ToastContainer position="top-center" />

      {/* Saved Pokemons */}

      <SavedPokemons savedPokemons={savedPokemons} />
    </div>
  );
};

export default Layout;
