const express = require("express");
const router = express.Router();
const login = require("../models/login.model");
const signUp = require("../models/signup.model");

router.get("", (request, response) => {
    response.render("login.view.ejs",{ message:request.flash("message")});
})


router.post('', async (request, response) => {
    try{
    const data = await signUp.find({mobile: request.body.mobile, password: request.body.password}).lean().exec();
    if(data.length>0){
        // request.flash("message", "logged in"); 
        response.render("allQuestions.view.ejs",{"message": "logged in"})
    }
    else{
    request.flash("message", "Incorrect Details");       
    response.redirect("/login");
    }
    }
    catch(err){
        response.redirect("/login");
    }

})

module.exports = router;