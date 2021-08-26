const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Doctor = require("../controllers/doctor.controller");
router.post("", async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    return res.send(doctor);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.get("", async (req, res) => {
  try {
    const doctor = await Doctor.find().lean().exec();
    return res.render("users/allUsers", {
      doctor: doctor,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).lean().exec();
    return res.send(doctor);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(doctor);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    return res.send(doctor);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
