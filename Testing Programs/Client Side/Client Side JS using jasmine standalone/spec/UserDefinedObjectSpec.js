describe("User-Defined Object ",()=> {


    it("ES5 style object ",() => {
        var emp = new Employee(100,"Ajay",12000);
        expect(emp.getId()).toEqual(100);
        expect(emp.getName()).toEqual("Ajay");
        expect(emp.getSalary()).toEqual(12000);
        emp.calSalary("Manager");
        expect(emp.getSalary()).toEqual(17000);
        emp.calSalary("Programmer");
        expect(emp.getSalary()).toEqual(20000);
        // function no return type 
        expect(emp.getInfo()).toEqual("Hello");
        emp.info();
        expect(emp.getInfo()).toEqual("Hi");
    })

    it("ES6 style object ",()=> {
        let cust = new Customer(1,"Ravi",16000);
        expect(cust.getId()).toBe(1);
        expect(cust.getName()).toContain("customer");
        expect(cust.getSalary()).toBeGreaterThan(12000);
    })

    it("ES6 style object cid ",()=> {
        let cust = new Customer(1,"Ravi",16000);
        expect(cust.getId()).toBe(1);
    })
    it("ES6 style object name ",()=> {
        let cust = new Customer(1,"Ravi",16000);
        expect(cust.getName()).toContain("customer");
    })
    it("ES6 style object salary",()=> {
        let cust = new Customer(1,"Ravi",16000);
        expect(cust.getSalary()).toBeGreaterThan(12000);
    })

})