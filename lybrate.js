const express = require("express");

const path = require('path');
const app = express();
const connect = require("./src/configs/db");
app.use(express.json());
const session = require("express-session");
const flash = require("connect-flash");

// html pages link
app.set('views', path.join(__dirname, 'src/views'))
// style sheets
app.use("/static", express.static(path.join(__dirname, "src/styleSheets")));


app.use(express.urlencoded({
  extended: true
})); // to support URL-encoded bodies

// app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")

//session 
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}))
// flash
app.use(flash());

// images folder
app.use(express.static("./src/public"));

//questions page link
const userQuestion = require("./src/controllers/askAquestion.controllers")
app.use("/askQuestion", userQuestion);

// login
const loginController = require("./src/controllers/login.controller");
app.use("/login", loginController);

// signup
const signupController = require("./src/controllers/signup.controller");
app.use("/signup", signupController);

// bookApPointment 
const bookAppointment = require("./src/controllers/bookAppointment.controller");
app.use("/bookAppointment", bookAppointment);

// prescriptions question page
const questionController = require("./src/controllers/question.controller");
app.use("/question", questionController);

app.listen(3333, async function (req, res) {
  await connect();
  console.log("listening at port 3333");
});
