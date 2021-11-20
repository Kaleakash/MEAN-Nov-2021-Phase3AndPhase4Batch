// user-defined asyn funtion concept 
// function display1() {       // this is sync
//         // logic 
//         return 100;
// }

// async function display2() {     // this is async
//         // login 
//         return 200;
// }           // when user defined function is asynchrours 
//                 // return type is promise object. 
// function call() {
//     //var result = display1();
//     //console.log(result);
//     display2().then(res=>console.log(res)).catch(err=>console.log(err));
//     console.log("Code finish")
// }

// call();

function info() {
    console.log("hello");
}
function call() {
    //info();
    setTimeout(info, 5000);     // this code is aynch 
    console.log("Code finish");
}
call();




