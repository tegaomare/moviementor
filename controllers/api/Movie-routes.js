const router = require("express").Router();
const Movie = require("../../models/Movie");

// GET all movies
// GET /api/movies
router.get("/", async (req, res) => {
  try {
    const movieData = Movie.findAll();
    if (!movieData) {
      return res.status(404).json({ message: "No movies are available!" });
    }
    res.status(200).json(movieData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET movie by id
// GET /api/movies/:id
router.get("/:id", async (req, res) => {
  try {
    const movieData = Movie.findByPk();
    if (!movieData) {
      return res.status(404).json({ message: "No movies with this id!" });
    }
    res.status(200).json(movieData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
