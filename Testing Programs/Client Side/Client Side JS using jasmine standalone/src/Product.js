// ES6 style 

class Product {


    getProductDetails() {
        // this function can all other team code. 
        // it can call rest api 
        // it can call database code 
        let products=[
            {pid:1,pname:"Tv",price:1200000},
            {pid:2,pname:"Computer",price:45000}
            ]
        return products;
    }
}