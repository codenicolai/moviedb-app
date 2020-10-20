const axios = require("axios");

export const getMovies = () =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => data.data.results);

export const getMovieById = (id) =>
  axios
    .get(
      `    https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => data.data);
