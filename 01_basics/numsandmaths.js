const score= 400
// console.log(score);

const balance= new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(3));

const otherNum= 123.897
// console.log(otherNum.toPrecision(3));

const hundreds =1000000
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(otherNum.toExponential(2));


// ++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++


//console.log(Math);
//  console.log(Math.abs(-4));  // it convert the negative value into positive not positive to negative.
//  console.log(Math.round(5.67)); 
//  console.log(Math.ceil(4.2)); // take upper value
//  console.log(Math.floor(4.9)); // take lower value


console.log(Math.random());  // math random give vlaue bteween the 0 and 1.
console.log((Math.random()*10) +1)
console.log(Math.floor((Math.random()*10) +1)) // +1 we done because it some time give value 0.1 then math.floor give value 0 . so  we add  +1 to give value 1 or above. to avoide zero  also.


const min=10
const max =20

console.log(Math.floor(Math.random()*(max-min +1) + min));