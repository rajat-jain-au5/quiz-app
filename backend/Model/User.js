const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Blogs = require("./Blog");
var userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Score:{
    type:Array
  }
});
const User = mongoose.model("user", userSchema);
module.exports = User;
