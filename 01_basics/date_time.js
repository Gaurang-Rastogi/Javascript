// Dates

let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

let myCreatedDate = new Date("01-14-24")

 let myTimeStamp =Date.now() // it give date in millisecond
console.log(myTimeStamp);

console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getTime());

 console.log(Math.floor(Date.now()/1000)); // for calculating seconds

//  let newDate = new Date()

//  newDate.toLocalString('default'{
//     weekday:"long"
//  })