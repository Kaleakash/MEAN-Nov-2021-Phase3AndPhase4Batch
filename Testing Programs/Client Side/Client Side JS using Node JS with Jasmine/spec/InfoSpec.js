describe("Simple Function Testing ",()=> {

    it("SayHello function testing ",()=> {
        let result = sayHello();
        expect(result).toEqual("Welcome to Jasmine Testing")
    })

    it("setInterval Testing ",(done)=> {
        setInterval(()=> {
            var result = test();
            expect(result).toEqual("Welcome Again");
            done();
        },100000);
        
    })
})