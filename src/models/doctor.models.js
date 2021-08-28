//--------------- doctor Schema--------------------------//
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    doctorpic: { type: String, required: true },
    name: { type: String, required: true },
    degree: { type: String, required: true },
    speciality: { type: String, required: true },
    clinicname: { type: String, required: true },
    votes: { type: String, required: true },
    redheart: { type: String, required: true },
    bag: { type: String, required: true },
    experience: { type: String, required: true },
    rupee: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Doctor = mongoose.model("doctor", doctorSchema);
module.exports = Doctor;
