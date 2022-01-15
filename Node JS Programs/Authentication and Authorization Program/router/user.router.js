let userController = require("../controller/user.controller");
let express = require("express");
let router = express.Router();

router.post("/register",userController.register);


module.exports=router;