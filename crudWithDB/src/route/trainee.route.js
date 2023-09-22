const express = require("express");

const TraineeController = require("../controller/trainee.controller");
const router = express.Router();

router.get("/trainee", TraineeController.getTrainees);
router.post("/create", TraineeController.createTrainees);
router.put("/update/:id", TraineeController.updateTrainees);
router.delete("/delete/:id", TraineeController.deleteTrainees);
module.exports = router;

