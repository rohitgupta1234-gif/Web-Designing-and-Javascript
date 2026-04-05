// array

const myArr = [0, 1, 3, 3, 4, 5]
const myHeroes =["shaktiman", "nagraaj"]

const myArr2=[1,2,3,4]
console.log(myArr[2]);

//Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) // first place pe add
myArr.shift() // first element remove

// console.log(myArr.includes(9)); // find array in boolean type
// console.log(myArr.indexOf(3));

const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//--- slice, splice
console.log("A", myArr);// 3
const myn1 = myArr.slice(1,3); //A [ 0, 1, 3, 3, 4, 5 ]

console.log(myn1); // [ 1, 3 ]
console.log("B" , myArr); // B [ 0, 1, 3, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);











