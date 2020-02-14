/* eslint-disable prettier/prettier */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema(
  {
    day: {
        type: Date,
        default: Date.now,
      },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "type is required",
        },
        name: {
          type: String,
          trim: true,
          required: "name is required",
        },
        duration: {
          type: Number,
          trim: true,
          required: "duration is required",
        },
        weight: {
          type: Number,
          trim: true,
        },
        reps: {
          type: Number,
          trim: true,
        },
        sets: {
          type: Number,
          trim: true,
        },
        distance: {
            type: Number,
            trim: true
        }
        
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ExerciseSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", ExerciseSchema);

module.exports = Workout;
