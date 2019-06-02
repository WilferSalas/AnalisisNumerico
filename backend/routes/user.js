const express = require("express");
const bodyParser = require("body-parser");
const router = express();
const userController = require("../controllers/userController");
const checkFunction = require("../middleware/functionValidation");

router.post("/register",  userController.createUser);
router.post("/login", userController.userLogin);
router.post("/addFunction",checkFunction, userController.addFunction);
router.post("/addSistema", userController.addSistem);
router.post("/getFunctions", userController.getFunctions);

module.exports = router