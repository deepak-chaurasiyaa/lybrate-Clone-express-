const mongoose = require("mongoose");

const tipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: false },
    content: { type: String, required: false },
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

const Tip = mongoose.model("tip", tipSchema);
module.exports = Tip;
