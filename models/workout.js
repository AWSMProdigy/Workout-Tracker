const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutScehema = new Schema({
  day: {
      type: Date,
      default: new Date()
  }, 
  exercises: {
      type: Array
  }
});

const Workout = mongoose.model("Workout", workoutScehema);

module.exports = Workout;
