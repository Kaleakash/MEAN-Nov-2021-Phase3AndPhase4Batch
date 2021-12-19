let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,(err,result)=> {
    if(!err){        
        let db = result.db("meanbatch1");
        // Aggregage Query  
    var cursor = db.collection("Student1").aggregate([
        {
            $lookup: {
                from:"Trainer",
                localField:"tsid",
                foreignField:"_id",
                as:"Trainers"
            }
        }
    ]);
    cursor.forEach(rec=> {
        //console.log(rec);
        //console.log("Student Name "+rec.sname+"Trainer Name "+rec.Trainers)
        //console.log(rec.Trainers[0].tname)
       // console.log(rec.Trainers.length)
        if(rec.Trainers.length>0){
             console.log("Sname "+rec.sname);
             for(let i=0;i<rec.Trainers.length;i++){
                console.log("Trainer Name "+rec.Trainers[i].tname+"Tech "+rec.Trainers[i].tech);
             }
        }
        result.close();
    })

    } 
})