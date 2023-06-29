const router = require("express").Router();
const homeRoutes = require("./home-routes");
const apiroutes = require("./api");

router.use("/", homeRoutes);
router.use("/api", apiroutes);

module.exports = router;
