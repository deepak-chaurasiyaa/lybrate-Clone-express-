//--------------- signup Schema--------------------------//
const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

console.log("hi");
const Signup = mongoose.model("signup", signupSchema);
module.exports = Signup;
