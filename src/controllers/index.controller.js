const express = require("express");
const router = express.Router();

const Doctor = require("../models/doctor.model");
const Video = require("../models/video.model");
const Quiz = require("../models/quiz.model");
const Tip = require("../models/tip.model");
const Question = require("../models/homequestion.model");

// get homepage
router.get("", async function (req, res) {
  try {
    const questions = await Question.find().populate("doctorId").lean().exec();
    const videos = await Video.find().populate("doctorId").lean().exec();
    const quizzes = await Quiz.find().populate("doctorId").lean().exec();
    const tips = await Tip.find().populate("doctorId").lean().exec();

    return res.render("index.view.ejs", {
      questions: questions,
      videos: videos,
      quizzes: quizzes,
      tips: tips,
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// Add Doctors
router.post("/adddoctors", async function (req, res) {
  const doctor = await Doctor.create(req.body);
  return res.send(doctor);
});

// Add Questions
router.post("/addquestions", async function (req, res) {
  const questions = await Question.create(req.body);
  return res.send(questions);
});

// Add Videos
router.post("/addvideos", async function (req, res) {
  const videos = await Video.create(req.body);
  return res.send(videos);
});

// Add Quizzes
router.post("/addquizzes", async function (req, res) {
  const quizzes = await Quiz.create(req.body);
  return res.send(quizzes);
});

// Add Tips
router.post("/addtips", async function (req, res) {
  const tips = await Tip.create(req.body);
  return res.send(tips);
});

module.exports = router;
