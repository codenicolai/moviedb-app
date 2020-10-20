const axios = require("axios");

export const getApiToken = () =>
  axios
    .get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => data.data);
