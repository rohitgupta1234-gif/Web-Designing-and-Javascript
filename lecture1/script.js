// console.log("Hello World");
// // document.write("hello world");
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
 

// //boject
// const sym1=Symbol(4);
// console.log(sym1);
// const sym2=Symbol(4);
// console.log(sym2);
// if(sym1==sym2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

//filter
let numbers = [10,15,20,25];
let result = numbers.filter(num => num>15);
console.log(result);

//Reduce()
// Reduce array to single value.
//example:Sum of numbers
let numbers1 = [10,20,30];
let sum = numbers1.reduce((total, num) => total + num, 0);
console.log(sum); 


