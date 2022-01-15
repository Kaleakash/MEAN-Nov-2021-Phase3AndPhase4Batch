let mongoose = require("mongoose");
mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
});

productModel = mongoose.model("Product",productSchema);

//exports.model=productModel;
module.exports=productModel;