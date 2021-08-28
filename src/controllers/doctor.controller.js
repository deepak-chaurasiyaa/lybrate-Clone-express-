const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor.models");

router.get("", async (req, res) => {
  try {
    const doctor = await Doctor.find().lean().exec();
    return res.render("alldoctors", {
      doctor: doctor,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/consultnow", async (req, res) => {
  try {

    return res.render("consultnow");
  } catch (err) {
    res.status(400).send(err.message);
  }
});


router.get("/signup", (req,res)=>{
  res.redirect("/signup")
})
router.get("/login", (req,res)=>{
  res.redirect("/login")
})
router.get("/healthfeed", (req,res)=>{
  res.redirect("/feed")
})

module.exports = router;
