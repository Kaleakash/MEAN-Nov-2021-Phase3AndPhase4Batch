// load the modules 
let express = require("express");
let fs = require("fs");
let cors = require("cors");
let port = 9090;

// create the reference of express module 
let app = express();

// add the middleware to enable json data from body part 
app.use(express.json());
app.use(cors());            // Enable cors origin features 
// get all product details 
// http://localhost:9090/getAllProductDetails
app.get("/getAllProductDetails",(req,res)=> {
    let products = fs.readFileSync("product.json");
    res.json(JSON.parse(products));
})

// search the image using pid 
// http://localhost:9090/findProductById/1
// http://localhost:9090/findProductById/3
app.get("/findProductById/:pid",(req,res)=> {
    let pid = req.params.pid;
    let products = JSON.parse(fs.readFileSync("product.json"));
    let product = products.find(p=>p.pid==pid);
    if(product==undefined){
            res.json({"msg":"Product not present with id as "+pid})
    }else {
            res.json(product);
    }
})

// add new product details. 
// http://localhost:9090/addProduct
app.post("/addProduct",(req,res)=> {
    let prod = req.body;
    let products = JSON.parse(fs.readFileSync("product.json"));
    let product = products.find(p=>p.pid==prod.pid);
    if(product==undefined){
            products.push(prod);
            fs.writeFileSync("product.json",JSON.stringify(products));
            res.json({"msg":"Product Details stored successfully"})
    }else {
            res.json({"msg":"Product details didn't store because id must be unique "+prod.pid});
    }
})

// delete the product details 
// http://localhost:9090/deleteProduct/3
// http://localhost:9090/deleteProduct/5
app.delete("/deleteProduct/:pid",(req,res)=> {
    let pid = req.params.pid;
    let products = JSON.parse(fs.readFileSync("product.json"));
    let index = products.findIndex(p=>p.pid==pid);  // if record present it return index position of 
    if(index<0){                                    // of that record else return -ve number. 
        res.json({"msg":"Product not present"})
}else {
        products.splice(index,1);
        fs.writeFileSync("product.json",JSON.stringify(products));    
        res.json({"msg":"Product details deleted successfully"});
}
})

// update the product price using pid
// http://localhost:9090/updateProductPrice 
app.put("/updateProductPrice",(req,res)=> {
    let prod = req.body;            // pid and price 
    let products = JSON.parse(fs.readFileSync("product.json"));
    let index = products.findIndex(p=>p.pid==prod.pid);  // if record present it return index position of 
        if(index<0){                                    // of that record else return -ve number. 
        res.json({"msg":"Product not present"})
        }else {
        products[index].price = prod.price;     // replace old price by new price 
        fs.writeFileSync("product.json",JSON.stringify(products));    
        res.json({"msg":"Product price updated successfully"});
    }
})

app.listen(port,()=>console.log(`Server running on port number ${port}`))
