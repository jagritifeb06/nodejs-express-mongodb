const express = require("express");

const TraineeController = require("../controller/trainee.controller");
const router = express.Router();

// router.get("/", TraineeController.getAllTrainee);
router.get("/addtrainee", TraineeController.showAddTrainee);
router.post("/addtrainee", TraineeController.createTrainees);
// router.get("/:id", TraineeController.getTrainee);
// router.get("/updateTrainee/:id", TraineeController.showupdateTrainee);
// router.get("/deleteTrainee/:id", TraineeController.deleteTrainees);
// router.post("/updateTrainee/", TraineeController.updateTrainees);

// router.get("/trainee", TraineeController.getTrainees);
// router.post("/create", TraineeController.createTrainees);
// router.put("/update/:id", TraineeController.updateTrainees);
// router.delete("/delete/:id", TraineeController.deleteTrainees);
module.exports = router;

