const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        unique: false
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;