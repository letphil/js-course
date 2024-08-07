const express = require("express");

const router = express.Router();

const createUser = require("../controllers/create-user");
const loginUser = require("../controllers/login-user");

router.get("/check-route", function (req, res) {
  res.send("check is good");
});

router.post("/signup", async function (req, res) {
  console.log("req =", req.body);
  const { email, password } = req.body;

  const user = await createUser(email, password);

  res.send({ message: "signup ok", user });
});

router.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await loginUser(email, password);

    res.send({ message: "login ok", user });
  } catch (error) {
    res.status(500).send("email or password is wrong");
  }
});

module.exports = router;
