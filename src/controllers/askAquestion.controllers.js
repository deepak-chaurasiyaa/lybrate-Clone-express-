const express = require("express");
const router = express.Router();
const Question = require("../models/askAquestion.model");

router.get("", (request, response) => {
  response.render("allQuestions.view.ejs",{message:request.flash("Submitted")});
});
router.post("", async (request, response) => {
  const question = await Question.create(request.body);
  response.render("allQuestions.view.ejs",{message:request.flash("Query Submitted")})
});
module.exports = router;
