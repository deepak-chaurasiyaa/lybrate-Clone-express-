const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
    question: { type: String, require: true },
    gender: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: Number, require: true },
    answer: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
});
const Question = mongoose.model("questions", questionSchema)
module.exports = Question;