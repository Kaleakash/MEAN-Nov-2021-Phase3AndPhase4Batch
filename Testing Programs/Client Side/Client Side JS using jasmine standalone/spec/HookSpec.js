describe("Hook function ",()=> {
    beforeAll(()=> {
        console.log("Before all it function this code execute");
        // object creation, 
    })
    beforeEach(()=> {
        console.log("it will call before each it function")
    })
    afterEach(()=> {
        console.log("it will call after each it function")
    })
    afterAll(()=> {
        console.log("After all it function this code execute");
        // closing the resources 
    }) 
    it("First Spec",()=> {
        console.log("first spec")
        expect(true).toBeTruthy();
    })
    it("Second Spec",()=> {
        console.log("second spec")
        expect(false).toBeFalsy();
    })

    it("Third Spec",()=> {
        console.log("Third spec")
        expect(false).toBeFalsy();
    })

})