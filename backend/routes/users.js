var express = require('express');
var router = express.Router();


var auth = require("../middleware/auth");

var userController = require("../controllers/userControllers");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/user", auth, userController.user);

router.post('/addscore',auth,userController.addScore)
router.get("/getscore", auth, userController.getScore);

module.exports = router;
