// Primitive =>
// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId);

// const bigNumber = 234567958019423n


// non_primitive(reference) =>
// Array, Objects, Functions 
//{ inside this it a objects }
const heros =["shaktiman", "naagraj", "doga"]
let myObj = {
   name:"hitesh",
   age: 22,
}

 const myfunction= function(){
   console.log("hello world");
}
 myfunction();
 console.log(heros[0]);
 console.log(heros[1]);
 console.log(heros[2]);

 //++++++++++++++++++++++++++++++++++++++++++++++++++

 // stack =>(primitive), ->copy 
 //heap =>(non-primitive) ->reference

 let myYoutube = "Hello World";

 let anothername = myYoutube;
 anothername ="chaiaurcode"

 console.log(anothername);
  console.log(myYoutube);

  let userOne = {
   email: "user@google.com",
   upi: "user@ybl"
  }

  let userTwo = userOne 
  userTwo.email = "hitesh@google.com"

  console.log(userOne.email);
  console.log(userTwo.email);
  
 


