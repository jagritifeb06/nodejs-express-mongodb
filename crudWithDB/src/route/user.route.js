const express = require("express");

const UserController = require("../controller/user.controller");
const router = express.Router();

router.get("/user", UserController.getUser);
router.post("/create", UserController.createUser);
router.put("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);
router.get("/login/", UserController.login);

module.exports = router;

