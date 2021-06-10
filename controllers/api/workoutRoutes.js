const Workout = require("../../models/workout.js");
const router = require('express').Router();

// Get all workouts
router.get("/", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
});

// Create Workout
router.post("/", ({ body }, res) => {
  Workout.create({ exercises: body })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch (err => {
      console.error(err);
      res.status(400).json(err);
    });
});

// Add Exercise
router.put("/:id", (req, res) => {
  Workout.findOneAndUpdate(
    {  _id: req.params.id },
    {
      $push: {
        exercises: req.body
      }
    },
    { new: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
});

// Get workouts from range
router.get("/range", (req, res) => {
  Workout.find({})
    .limit(8)
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    })
})

module.exports = router;