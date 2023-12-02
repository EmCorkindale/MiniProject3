const express = require("express");
const router = express.Router();
const usersController = require("../Controllers/usersController");
router.get("/", usersController.getUsers);
router.post("/", usersController.addUser);
router.delete("/:userID", usersController.deleteUser);
router.put("/:userID", usersController.updateUser);
module.exports = router;
