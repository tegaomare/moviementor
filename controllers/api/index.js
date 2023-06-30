const router = require("express").Router();

const userRoutes = require("./user-routes");
const movieRoutes = require("./Movie-routes");

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);

module.exports = router;
