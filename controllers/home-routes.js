const router = require("express").Router();
const { Movie } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  const dbMovieData = await Movie.findAll();

  const movies = dbMovieData.map((movie) => movie.get({ plain: true }));

  res.render("homepage", {
    movies,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
