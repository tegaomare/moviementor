const router = require("express").Router();
const User = require("../../models/User.js");

// GET all users
// GET /api/users

// GET one user
// GET /api/users/:id
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      return res.status(404).json({ message: "No user with this id!" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST create a new user
// POST /api/users
router.post("/", async (req, res) => {
  console.log("IS THIS RUNNING??");
  console.log(req.body);
  try {
    const userData = await User.create(req.body);
    console.log(
      "🚀 ~ file: user-routes.js:23 ~ router.post ~ userData:",
      userData
    );
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json(error);
  }
});

// POST user login route
// POST /api/users/login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

// PUT update a user
// PUT /api/users/:id
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
