const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const connect = require("./src/configs/db");
app.use(express.json());

app.listen(3333, async function (req, res) {
  await connect();
  console.log("listening at port 3333");
});
