import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = async (limit = 20, offset = 20) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?limit=${limit}&offset=${offset}`
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
