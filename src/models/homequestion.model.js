const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    img: { type: String, required: false },
    answer: { type: String, required: false },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "homedoctor",
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

const Questions = mongoose.model("homequestion", questionSchema);
module.exports = Questions;
