import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = async (url) => {
  try {
    const response = await axios.get(
      `${url ? url : `${BASE_URL}?offset=20&limit=20`}`
    );

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const getPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
