const express = require("express");
const app = new express();
const connect = require("./configs/db");
const signupController = require("./configs/models/signup.model");
const doctorController = require("./configs/models/doctor.model");
const path = require("path");
app.use(express.json());

console.log(__dirname);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "views")));

app.use("/user", signupController);
app.use("/doctor", doctorController);
app.listen(3333, async function (req, res) {
  await connect();
  console.log("listening");
});
