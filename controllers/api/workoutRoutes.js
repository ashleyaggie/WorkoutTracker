const Workout = require("../../models/workout.js");
const router = require('express').Router();

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
});

module.exports = router;