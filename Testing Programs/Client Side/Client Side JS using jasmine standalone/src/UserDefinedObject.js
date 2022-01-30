//ES5 style object creation 
function Employee(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;            // to declare the instance variable 

    this.getSalary = function() {
        return this.salary;
    }
    this.getName = function() {
        return this.name;
    }
    this.getId= function () {
        return this.id;
    }
    this.calSalary= function(desg){
                if(desg=="Manager"){
                    this.salary  = this.salary+5000;
                }else if(desg=="Programmer"){
                    this.salary = this.salary +3000;
                }else {
                    this.salary = this.salary+500;
                }
    }
    this.msg ="Hello";
    this.info = function() {        // this function no return 
                // coding........  .....
                //console.log("hello")
                // condition 
                this.msg = "Hi";
    }
    this.getInfo = function() {
        return this.msg;
    }
}
// Adding dynamic function 
Employee.prototype.myfun = function() {

}
// ES6 style object creation 
class Customer {
        constructor(id,name,salary){
            this.id = id;
            this.name = name;
            this.salary = salary;
        }
        getId() {
            return this.id;
        }
        getName() {
            return "Welcome customer "+this.name;
        }
        getSalary() {
            return this.salary;
        }
}