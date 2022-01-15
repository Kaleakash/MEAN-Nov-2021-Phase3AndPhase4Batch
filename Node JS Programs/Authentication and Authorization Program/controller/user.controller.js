let User = require("../model/user.model");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");


let register =async (req,res)=> {
        let salt =await bcrypt.genSalt(10);            // this method is asynchronous 
    
        let hashPassword = await bcrypt.hash(req.body.password,salt);
        console.log(hashPassword);

        let userRef = new User({
            email:req.body.email,
            password:hashPassword,
            name:req.body.name,
            user_type:req.body.user_type
        });

        // store record in database 
        User.insertMany(userRef,(err,result)=> {
            if(!err){
                  res.send("Account Created...")
            }else {
                   res.send("Account didn't create")
            }
        })

}

module.exports={register}