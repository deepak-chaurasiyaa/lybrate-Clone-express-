const express = require("express");

const path = require("path");
const app = express();
const port = process.env.PORT || 3333
const connect = require("./src/configs/db");
app.use(express.json());
const session = require("express-session");
const flash = require("connect-flash");

// html pages link
app.set("views", path.join(__dirname, "src/views"));
// style sheets
app.use("/static", express.static(path.join(__dirname, "src/styleSheets")));

app.use(
  express.urlencoded({
    extended: true,
  })
); // to support URL-encoded bodies

// app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs");

//session
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 4000 },
    resave: false,
    saveUninitialized: false,
  })
);
// flash
app.use(flash());

// images folder
app.use(express.static("./src/public"));

// homepage (index)

const homePage = require("./src/controllers/index.controller");
app.use("", homePage);

//questions page link
const userQuestion = require("./src/controllers/askAquestion.controllers");
app.use("/askQuestion", userQuestion);

//payment page
const payment = require("./src/controllers/payment.controller");
app.use("/payment", payment);

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

// prescriptions answer page
const answerController = require("./src/controllers/answer.controller");
app.use("/answer", answerController);

// healthfeed page
const healthfeedController = require("./src/controllers/healthFeed.controller");
app.use("/feed", healthfeedController);

// consltnow
const doctorController = require("./src/controllers/doctor.controller");
app.use("/doctor", doctorController);

// for doctors page
const forDoctors = require("./src/controllers/forDoctors.controller");
app.use("/fordoctors", forDoctors);

// doctor login
const doctorLoginController = require("./src/controllers/doctorLogin.controller");
app.use("/doctorLogin", doctorLoginController);

app.listen(port, async function (req, res) {
  await connect();
  console.log(`listening at port ${port}`);
});
