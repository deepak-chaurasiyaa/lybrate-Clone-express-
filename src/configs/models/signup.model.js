const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Signup = require("../controllers/signup.controller");
router.post("", async (req, res) => {
  try {
    const user = await Signup.create(req.body);
    return res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.get("", async (req, res) => {
  try {
    const user = await Signup.find().lean().exec();
    return res.render("users/allUsers");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Signup.findById(req.params.id).lean().exec();
    return res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await Signup.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await Signup.findByIdAndDelete(req.params.id);
    return res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
