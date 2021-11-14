const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutScehema = new Schema({
  day: {
      type: Date,
      required: "Please enter a date"
  },
  exercises: {
      type: Array,
      required: "Need excercises"
  }
});

const Workout = mongoose.model("Workout", workoutScehema);

module.exports = Workout;
