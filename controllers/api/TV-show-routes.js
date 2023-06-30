const router = require("express").Router();
const TvShow = require("../../models/TvShow");

// GET all tv shows
// GET /api/tv-shows
router.get("/", async (req, res) => {
  try {
    const tvShowData = TvShow.findAll();
    if (!tvShowData) {
      return res.status(404).json({ message: "No movies are available!" });
    }
    res.status(200).json(tvShowData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET tv-shows by id
// GET /api/tv-shows/:id
router.get("/:id", async (req, res) => {
  try {
    const tvShowData = Movie.findByPk();
    if (!tvShowData) {
      return res.status(404).json({ message: "No movies with this id!" });
    }
    res.status(200).json(tvShowData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
