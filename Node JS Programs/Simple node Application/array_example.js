/*console.log("Welcome to Simple Node JS Program");
let num = [10,20,30,40,50,60];
num.push(70);		// it is use to add the element at last 
num.push(80);
console.log(num);
num.unshift(1);		// it is use to add the element at begining 
num.unshift(2);
console.log(num);
num.pop();			// remove the element from last 
num.shift();		// remove the element from begining 
console.log(num);
// 1,10,20,30,40,50,60,70
// add or remove or update any element in between 
// 1st parameter is index position, 2nd parameter is number of element to remove, 3rd to n parameter add element 
//num.splice(2,1);		// from 2nd index position remove 1 element 	
//num.splice(2,3);		// from 2nd index position it remove 3 elements. 
//num.splice(2,0,100);		// in 2nd index position don't remove any element but add 100 value
 //num.splice(2,0,100,200,300);	// from 2nd index position add 100,200,300 elements. 
num.splice(2,1,200);		// 2nd position element replace by 200 remove 20 and add 200. 
console.log(num);*/
let num1 = [10,20,30,40,50];
let num2 = num1;		// num1 assign to num2;		it is deep copy 
//let num3 = num1.slice();	// it create the clone of array or copy of array  it is shallow copy 
//let num3 = num1.slice(2);	// copy from 2nd index position 
let num3 = num1.slice(2,4);	// copy from 2nd till 3rd 	
console.log(num1);		// it display five elements. 
console.log(num2);		// it display five elements. 
console.log(num3);		// it display five elements. 
num1.push(60);		// we added the element in num1
console.log(num1);		// it display six elements. 
console.log(num2);		// it display  six elements. 
console.log(num3);		// it display elements. 


