// Suite 
describe("Operation Testing",()=> {
    // spec 
    it("Addition Testing ",()=> {
        let result = add(10,20);
        expect(30).toBe(result);
        expect(30).toEqual(result);
        expect(result==30).toBeTruthy();
    });
    it("Substration Testing ",()=> {
        let result = sub(20,10);
        expect(10).toEqual(result);
    })
    it("Multiplication Testing ",()=> {
        let result = mul(20,10);
        expect(200).toEqual(result);
    })
    it("Division Testing ",()=> {
        let result = div(20,10);
        expect(2).toEqual(result);
    })

})

