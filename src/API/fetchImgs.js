import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGQyNDlmYmQ0OWNhOTZiYTc0MDA4MDBjNjQwMDgyMSIsIm5iZiI6MTY2MTM1NTE2Ni4zMzc5OTk4LCJzdWIiOiI2MzA2NDQ5ZTNkZDEyNjAwN2VkNzhjYjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LsOOvNsmdG1A0LlTSZmujyZtkdHCqqxiyszEBl0Z6m0";
// const BASE_URL =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers["Authorization"] = `Bearer ${API_KEY}`;

const fetchTrendingMovies = async (_, signal) => {
  const res = await axios.get("/trending/movie/day", { signal });
  return res.data.results;
};

const fetchMovieById = async (movieId, signal) => {
  const res = await axios.get(`/movie/${movieId}`, { signal });
  return res.data;
};

const fetchMovieCast = async (movieId, signal) => {
  const res = await axios.get(`movie/${movieId}/credits`, { signal });
  return res.data.cast;
};

const fetchMovieReviews = async (movieId, signal) => {
  const res = await axios.get(`movie/${movieId}/reviews`, { signal });
  return res.data.results;
};

const fetchMovieByQuery = async (query, signal) => {
  if (!query) return null;
  const res = await axios.get(`/search/movie?query=${query}`, { signal });
  return res.data.results;
};

export default {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieByQuery,
};
