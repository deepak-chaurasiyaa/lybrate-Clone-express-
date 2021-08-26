const express = require("express");
const router = express.Router();
const signUp = require("../models/signup.model");

router.get("", (request, response) => {
    response.render("signup.view.ejs",{message:request.flash("message")});
})

router.get("/login", (request, response) => {
    response.render("login.view.ejs",{ });
})



router.post('', async (request, response) => {
    try{
    const data = await signUp.create(request.body);
    request.flash("message", "message1");
    response.redirect("/signup");
    }
    catch(err){
        response.redirect("/signup");
    }

})

module.exports = router;