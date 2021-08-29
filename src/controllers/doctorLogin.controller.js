const express = require("express");
const router = express.Router();

router.get("", (request, response) => {
    response.render("doctorLogin.view.ejs", {});
})
router.get("/doctorHalt", (request, response) => {
    response.render("doctorHaltpage.view.ejs", {});
})


module.exports = router;