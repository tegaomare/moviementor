const router = require("express").Router();
const { Movie } = require("../models");
const withAuth = require("../../utils/auth.js")

router.get("/", withAuth, async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
