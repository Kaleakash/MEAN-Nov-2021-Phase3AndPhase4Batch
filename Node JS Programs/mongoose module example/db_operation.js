let obj = require("mongoose");
obj.pluralize(null);        // to avoid in lower case with pluar 
let url = "mongodb://localhost:27017/meanbatch1";

obj.connect(url).then(res=>console.log("connected")).catch(e=>console.log(e));
let db = obj.connection;        // it provide the db connection reference 

db.once("open",()=> {
        // Define the Schema Structure for the collection 
                    let ProductSchema = obj.Schema({
                        _id:Number,
                        pname:String,
                        price:Number
                    });

        // Define model with the help of schema 1st parameter collection name
        // 2nd parameter schema defintion 
        // with the help of model reference we can do operation on collection 
        // insert, delete, update and retrieve. 
        //let ProductModel = obj.model("Produt",ProductSchema);   // plural name consider with lower case 
        let ProductModel = obj.model("Product",ProductSchema);            
        // we do the operation 
        // insert operation 

        // let p1 = {_id:102,pname:"Mobile",price:340000}
        // ProductModel.insertMany(p1,(err,result)=> {
        //     if(!err){
        //         console.log("Record inserted successfully")
        //     }else {
        //         console.log(err)
        //     }
        //     obj.disconnect();
        // })

        // update operation 
        
        // ProductModel.updateOne({_id:101},{$set:{price:60000}},(err,result)=> {
        //     if(!err){
        //             //console.log(result);
        //             if(result.modifiedCount>0){
        //                     console.log("Record updated successfully")
        //             }else {
        //                     console.log("Record didn't update")
        //             }
        //     }else {
        //             console.log(err)
        //     }
        //     obj.disconnect();
        // })

       // Delete operation 
    //    ProductModel.deleteOne({_id:101},(err,result)=> {
    //        if(!err){
    //            if(result.deletedCount>0){
    //                 console.log("Record deleted succesfully")
    //            }else {
    //                 console.log("Record not present")
    //            }
    //        }else {
    //             console.log(err);
    //        }
    //        obj.disconnect();
    //    })

    // retreive operation 
                    
    ProductModel.find({pname:"Tv"},(err,result)=> {
        if(!err){
                result.forEach(p=> {
                    console.log("Pid is "+p._id+" PName is "+p.pname+" Price "+p.price);
                })
        }   else {
                console.log(err);          
        }   
        obj.disconnect();      
    })
})