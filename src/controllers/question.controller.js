const express = require("express");
const router = express.Router();
const Questions = require("../models/askAquestion.model")

router.get("", async (request, response) => {
    const data = await Questions.find().lean().exec();
    // console.log(data);
    response.render("questionPage.view.ejs", { questions: data });
})

router.post("", async (req, res) => {
    try {
        let key = Object.keys(req.body)[0].trim()
        const data = await Questions.find().lean().exec();
        data.forEach(async (ele) => {
            if (String(ele._id) == key) {
                ele.answer = req.body[key + ' '];
                console.log("before", ele)
                try {
                    const updated = await Questions.findByIdAndUpdate(ele._id, ele, { new: true }).lean().exec();
                    console.log("updated", updated)
                }
                catch (er) {
                    console.log(er.message)
                }
            }
        })
        res.redirect("/question")
    } catch (err) {
        console.log(err.message);
        res.redirect("/question");
    }
})

module.exports = router;