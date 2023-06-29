const router = require("express").Router();
const User = require("../../models/User.js");

// GET one user
// GET /api/users/:id

// POST create a new user
// POST /api/users
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST user login route
// POST /api/users/login

// PUT update a user
// PUT /api/users/:id

module.exports = router;
