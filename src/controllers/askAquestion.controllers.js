const express = require("express");
const router = express.Router();
const Question = require("../models/askAquestion.model");

router.get("", (request, response) => {
  response.render("allQuestions.view.ejs");
});
router.post("", async (request, response) => {
  const question = await Question.create(request.body);

  response.redirect("back");
});
module.exports = router;
