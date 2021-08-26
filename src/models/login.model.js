const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
    mobile:{type:Number, required:true},
    password:{type:String, required:true}
},{
    versionKey:false,
})

const login = mongoose.model("login-data", loginSchema);

module.exports = login;