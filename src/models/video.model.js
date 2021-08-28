const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
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

const Video = mongoose.model("video", videoSchema);
module.exports = Video;
