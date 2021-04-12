/*
============================================
; Title:  User Model
; Author: Professor Krasso
; Date:   11 April 2021
; Modified by: Larry Ohaka
; Description: This is our user model.
;===========================================
*/
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = (module.exports = mongoose.model("User", userSchema));

// add new user to db
module.exports.add = (user, callback) => {
  user.save(callback);
};
//getById call back function
module.exports.getById = (id, callback) => {
  var query = { _id: id };
  User.findById(query, callback);
};