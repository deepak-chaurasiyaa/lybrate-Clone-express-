const express = require("express");
const router = express.Router();

router.get("", (request, response) => {
    response.render("doctorLogin.view.ejs", {});
})


module.exports = router;