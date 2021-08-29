const express = require("express");
const router = express.Router();

// get for doctors page
router.get("", async function (req, res) {
  try {
    return res.render("dorDoctors.view.ejs");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
