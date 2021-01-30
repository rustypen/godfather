const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: String,
  popularity: Number,
  biography: String,
  image: String,
  colleagues: [String]
});

const Employees = mongoose.model('Employees', Schema);

module.exports = Employees;