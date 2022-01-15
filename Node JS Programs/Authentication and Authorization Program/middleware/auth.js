let jwt = require("jsonwebtoken");

let verifyUserToken = (req,res,next)=>{
    let token = req.headers.authorization;  // check token from header authrorization
    if(!token){
        return res.send("Access Denied / Unauthorized Request");
    }
    
    try {
        let verifyUser = jwt.verify(token,"secretKey");
        if(!verifyUser){
            return res.send("Unauthorized Request")
        }
        req.user = verifyUser;          // verifyUser hold token and payload data. 
                                        // this information we store in user req.
        next();         // move to next phase move to next middleware or controller 
    }catch(Exp){
            return res.send("InValid Token");
    }

}
let isUser = async (req,res,next)=> {
    console.log(req.user);
    if(req.user.user_type === "user" ){
        next();                     // move to controller 
    }else { 
        return res.send("UnAuthorized user");               
    }
}
let isAdmin = async(req,res,next)=> {
    console.log(req.user);
    if(req.user.user_type === "admin"){
        console.log("admin yes")
        next();
    }else {
        console.log("admin no")
        return res.send("UnAuthorized user")
    }
}
module.exports={verifyUserToken,isUser,isAdmin}