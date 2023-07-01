// const fs = require("fs");
// const movieData = require("./movieData.json");

const getAPI = async () => {
  const url = "https://moviesdatabase.p.rapidapi.com/titles";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "76bffcbbbcmsh2c0cdf6d2e5e4b9p18ee37jsn72cbd5961409",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const moviesArray = JSON.stringify(result.results);
    console.log(JSON.stringify(moviesArray));
  } catch (error) {
    console.error(error);
  }
};

getAPI();
