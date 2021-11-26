const express = require("express");
const router = express.Router();

router.get("", (request, response) => {
    response.render("payment.view.ejs");
})


module.exports = router;