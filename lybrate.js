const express = require("express");
//const mongoose = require("mongoose");
const path = require('path');
const app = express();
const connect = require("./src/configs/db");
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: false }))
app.use("/static", express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs")

//questions page link
const userQuestion = require("./src/askAquestion/controllers/controllers")
app.use("/questions", userQuestion);

app.listen(3333, async function (req, res) {
  await connect();
  console.log("listening at port 3333");
});
