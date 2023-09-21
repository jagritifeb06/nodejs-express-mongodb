const express = require("express");

const TraineeController = require("../controller/trainee.controller");
const router = express.Router();

router.get("/", TraineeController.getTrainees);
module.exports = router;

// router.get("/trainee", TraineeController.getTrainee);
// router.post("/create", TraineeController.createTrainee);
// router.delete("/delete:name", TraineeController.deleteTrainee);
// router.put("/update:name", TraineeController.updateTrainee);
