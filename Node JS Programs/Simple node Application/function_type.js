// normal function 
function display1() {
    console.log("It is normal function");
}
display1();
// Expression style function with name
let display2 = function dis() {
    console.log("Expression style function with name")
}
display2();
// we can't call function using name as dis() now 
// the function name is variable name consider. 
// Expression style function without name
let display3 = function() {
    console.log("Expression style function anonymous name")
}
display3();
// arrow like a lambda expression in Java 
let display4 = ()=>console.log("this is arrow function ");
display4();

let addNumber1 = function(a,b){
    var sum = a+b;
    return sum;
}
console.log("sum of two number in expression style is "+addNumber1(1,2));
// by default arrow return data without return keyword. 
let addNumber2 = (a,b)=>a+b;
console.log("sum of two number is "+addNumber2(2,4));
let findLargest = (a,b)=> {
    if(a>b){
        return "a largest"
    }else {
        return "b largest"
    }
}
console.log(findLargest(100,200));


