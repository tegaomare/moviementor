const router = require("express").Router();

const userRoutes = require("./user-routes");
const movieRoutes = require("./Movie-routes");
const tvShowRoutes = require("./TV-show-routes");

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);
router.use("/tv-shows", tvShowRoutes);

module.exports = router;
