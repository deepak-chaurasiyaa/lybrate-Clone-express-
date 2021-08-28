const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    city: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Doctor = mongoose.model("homedoctor", doctorSchema);
module.exports = Doctor;
