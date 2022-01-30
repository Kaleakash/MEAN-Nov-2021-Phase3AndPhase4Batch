describe("Product Testing ",()=> {
    it("Get All products",()=> {
        let p = new Product();
        // To create the fake service
        // 1st parameter is object  and 2nd parameter is function 
        let fakeProduct = [
            {pid:1,pname:"TV",price:12000}
        ]
        // fake functionality for getProductDetails function 
        spyOn(p,"getProductDetails").and.returnValue(fakeProduct)

        expect(p.getProductDetails().length).toEqual(1);
    })
})