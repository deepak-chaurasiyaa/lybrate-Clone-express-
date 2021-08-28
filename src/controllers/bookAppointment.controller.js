const express = require("express");
const router = express.Router();

router.get("", (request, response) => {
    response.render("bookAppointment.view.ejs", {});
})


module.exports = router;