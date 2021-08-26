const express = require("express");

const path = require('path');
const app = express();
const connect = require("./src/configs/db");
app.use(express.json());

// html pages link
app.set('views', path.join(__dirname, 'src/views'))
// style sheets
app.use("/static", express.static(path.join(__dirname, "src/styleSheets")));

app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")

//questions page link
const userQuestion = require("./src/controllers/askAquestion.controllers")
app.use("/questions", userQuestion);

app.listen(3333, async function (req, res) {
  await connect();
  console.log("listening at port 3333");
});
