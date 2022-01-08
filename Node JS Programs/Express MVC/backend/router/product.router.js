let prodcutController = require("../controller/product.controller");
let express = require("express");
let router = express.Router();  // get the reference of router 


router.post("/storeProduct",prodcutController.storeProduct);
router.get("/retrieveProduct",prodcutController.retrieveProduct);
router.put("/updateProduct",prodcutController.updateProduct);
router.delete("/deleteProduct/:_id",prodcutController.deleteProduct)

module.exports=router;