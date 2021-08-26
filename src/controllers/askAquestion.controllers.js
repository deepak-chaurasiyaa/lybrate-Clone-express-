const express = require("express");
const router = express.Router();
const Question = require("../models/askAquestion.model");

router.get("/ask", (request, response) => {
    response.render("allQuestions.view.ejs");
})
router.post('', async (request, response) => {
    const question = await Question.create(request.body);

    response.redirect('back');

})
router.get('', async (request, response) => {
    const questions = await Question.find().lean().exec();
    return response.send(questions);
})
module.exports = router;