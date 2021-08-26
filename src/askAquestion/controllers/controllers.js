const express = require("express");
const router = express.Router();
const Question = require("../model/model");
router.get("/ask", (request, response) => {
    response.render("questions/allQuestions");
})
router.post('', async (request,response) => {
    const question = await Question.create(request.body);
    //console.log(question);
//return response.render("questions/allQuestions", {question: question,})
    //return response.send("submitted");
   // console.log(process.cwd())
   // response.send(`<script>alert("your question is submitted");  </script>`);
    response.redirect('back');

})
router.get('', async (request, response) => {
    const questions = await Question.find().lean().exec();
    //return response.render("questions/allQuestions", {questions: questions,})
    return response.send(questions);
})
module.exports = router;