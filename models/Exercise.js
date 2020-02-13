/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  cardioName: String,
  name: String,
  weight: String,
  sets: String,
  reps: String,
  duration: String,
  resistanceDuration: String,
  distance: String,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
