// // Dates => dates ek objectnh

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2023,0,23,5,3); // Month 0 means => january
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());


// let myNewCreatedDate = new Date("2023-01-14")
// // console.log(myNewCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now()

// // console.log(myTimeStamp);
// console.log(myNewCreatedDate.getTime()); // miliseconds

// console.log(Date.now()/1000); // for seconds
// console.log(Math.floor(Date.now()/1000)); // for seconds not decimal


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})






















 