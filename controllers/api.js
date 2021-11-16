const Workout = require("../models/workout");

const router = require("express").Router();

router.post("/workouts", ({ body }, res) => {
  console.log( )
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/workouts/:id', async ({ body, params }, res) => {
  Workout.findOneAndUpdate({ _id: params.id }, {$push: {exercises: body}})
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  })
})

router.get("/workouts", async (req, res) => {
    await Workout.aggregate([{
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } ,
      }
    }])
    .limit(10)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get('/workouts/range', async (req, res) => {
  await Workout.aggregate([{
    $addFields: {
      totalDuration: { $sum: "$exercises.duration" } ,
    }
  }])
  .sort({ date: -1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
})

module.exports = router;
