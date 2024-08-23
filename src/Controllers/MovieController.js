import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "9813ce01a72ca1bd2ae25f091898b1c7";

//https://api.themoviedb.org/3/movies/popular?api_key=9813ce01a72ca1bd2ae25f091898b1c7
export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log("Error fetching movies", error);
    throw error;
  }
};

export const fetchActors = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/person/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log("Error fetching Actors", error);
    throw error;
  }
};

export const fetchTVShow = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log("Error fetching TVShows", error);
    throw error;
  }
};

export const fetchSeries = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log("Error fetching Series", error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching movie details", error);
    throw error;
  }
};
export const fetchTVShowDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching TV show details", error);
    throw error;
  }
};
export const fetchActorsDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/person/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching actors details", error);
    throw error;
  }
};
export const fetchSeriesDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching Series details", error);
    throw error;
  }
};
