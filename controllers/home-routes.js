const router = require("express").Router();
const { Movie } = require("../models");
const withAuth = require("../utils/auth.js");


router.get("/", withAuth, async (req, res) => {
  // withAuth redirects to login page if we are not logged in
  const dbMovieData = await Movie.findAll();

  const movies = dbMovieData.map((movie) => movie.get({ plain: true }));
  // const movieUrl =  "https://api.themoviedb.org/3/genre/movie/list";
  const movieUrl =
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc5MTUzNDJkYWFlMjk5Mzc2YzQ1ZDQ5ZDRiOWEyZSIsInN1YiI6IjY0OWYwNTMzODU4Njc4MDE0ZTRlMmU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QlZ2f_ywck5SPhwW5tro-NbcevyPGotjZAgiN49zuE8",
    },
  };
  // We run the fetch here because the benefit of the API is that we can call and fetch the data from the API instead of having to use our own DB

  const apiResults = await fetch(movieUrl, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  // const movieApi = apiResults.results;
  // console.log(movieApi);

  res.render("homepage", {
    movies,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/movies/:id", withAuth, async (req, res) => {
  const movieData = await Movie.findByPk(req.params.id);
  const movie = movieData.get({ plain: true });
  console.log(movie);

  res.render("movie-details", {
    movie,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
