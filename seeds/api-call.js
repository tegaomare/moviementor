const fs = require("fs");

const movieUrl =
  "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc5MTUzNDJkYWFlMjk5Mzc2YzQ1ZDQ5ZDRiOWEyZSIsInN1YiI6IjY0OWYwNTMzODU4Njc4MDE0ZTRlMmU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QlZ2f_ywck5SPhwW5tro-NbcevyPGotjZAgiN49zuE8",
  },
};

const moviesArr = [];

fetch(movieUrl, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
      const movieObject = {};
      movieObject.title = data.results[i].title;
      movieObject.release_date = data.results[i].release_date;
      movieObject.poster = data.results[i].poster_path;
      movieObject.adult_content = data.results[i].adult;
      movieObject.description = data.results[i].overview;

      moviesArr.push(movieObject);
    }
    fs.writeFile("movieData.json", JSON.stringify(moviesArr), (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("movieData.json", "utf8"));
      }
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
