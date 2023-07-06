const router = require("express").Router();
const User = require("../../models/User.js");
//const withAuth = require("../../utils/auth.js")

// GET all users
// GET /api/users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    if (!userData) {
      return res
        .status(404)
        .json({ message: "No users currently in the database!" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

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
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id; // It is nice to save user id in the session in case you need to tie that user to something they create

      res.status(200).json(userData);
    });
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
    console.log(req.session);
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;

      res.status(200).json({ message: "login!!" });
    });
  } catch (error) {
    res.status(500).json(error);
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

// POST logout
// POST /api/logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
