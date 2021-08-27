const express = require("express");
const router = express.Router();
const Questions = require("../models/askAquestion.model")

router.get("", async (request, response) => {
    const data = await Questions.find().lean().exec();
    // console.log(data);
    response.render("answersPage.view.ejs", { questions: data });
})

module.exports = router;