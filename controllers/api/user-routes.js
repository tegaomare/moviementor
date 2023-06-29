const router = require("express").Router();
const User = require("../../models/User.js");

// GET one user
// GET /api/users/:id
router.get("./:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST create a new user
// POST /api/users
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json(error);
  }
});

// POST user login route
// POST /api/users/login

// PUT update a user
// PUT /api/users/:id

module.exports = router;
