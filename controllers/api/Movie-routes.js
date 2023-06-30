const router = require("express").Router();
const Movie = require("../../models/Movie");

// GET all movies
// GET /api/movies
router.get("/", async (req, res) => {
  try {
    const movieData = Movie.findAll();
    if (!movieData) {
      res.status(404).json(error);
    }
    res.status(200).json(movieData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET movie by id
// GET /api/movies/:id

module.exports = router;
