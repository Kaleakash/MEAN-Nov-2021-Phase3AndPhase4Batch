function sayHello() {
    return "Welcome to Jasmine Testing";
}

let msg="Welcome";
function test() {
    setTimeout(()=> {
        msg="Welcome Again"
    },2000);
    return msg;
}