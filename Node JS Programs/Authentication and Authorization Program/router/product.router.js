let prodcutController = require("../controller/product.controller");
let express = require("express");
let router = express.Router();  // get the reference of router 
let auth = require("../middleware/auth");

// router.post("/storeProduct",prodcutController.storeProduct);
// router.get("/retrieveProduct",prodcutController.retrieveProduct);
// router.put("/updateProduct",prodcutController.updateProduct);
// router.delete("/deleteProduct/:_id",prodcutController.deleteProduct)

// added middleware to verify token 
//router.get("/retrieveProduct",auth.verifyUserToken,prodcutController.retrieveProduct);

// for Admin admin can access get and post method 
router.get("/retrieveProduct",auth.verifyUserToken,auth.isAdmin,prodcutController.retrieveProduct);
router.post("/storeProduct",auth.verifyUserToken,auth.isAdmin,prodcutController.storeProduct);


// for User user can access only get method 
router.get("/retrieveProduct",auth.verifyUserToken,auth.isUser,prodcutController.retrieveProduct);


module.exports=router;