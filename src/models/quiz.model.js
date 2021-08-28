const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    url: { type: String, required: true },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "homedoctor",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Quiz = mongoose.model("quiz", quizSchema);
module.exports = Quiz;
