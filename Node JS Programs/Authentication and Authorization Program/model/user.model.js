let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    email:String,
    password:String,
    name:String,
    user_type:String
});

let userModel = mongoose.model("User",userSchema);

module.exports=userModel;