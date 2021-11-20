// function greeting(fname,callback){
//     return "Welcome "+callback(fname);
// }
// //Normal style 
// function maleInfo(fname){
//     return "Mr "+fname;
// }
// // expression style 
// let femaleInfo = function(fname){
//     return "Miss "+fname;
// }

// console.log(greeting("Raj",maleInfo));
// console.log(greeting("Seeta",femaleInfo))
// console.log(greeting("Ajay",function(fname){
//     return "Mr "+fname;
// }))
// console.log(greeting("Meeta",(fname)=>"Miss "+fname))

let num = [10,20,30,40,50,60];
console.log(num);
console.log("using loop")
for(let i=0;i<num.length;i++){
    console.log("Value of i "+i);
}
console.log("using callback with forEach")
// num.forEach(display)
// function display(n){
//     console.log("Value of n "+n);
// }
// num.forEach(function(n){
//     console.log("Value of n "+n)
// });
num.forEach(n=>console.log("Value of n "+n));
console.log("Finish")
