let score = "33 abc"

console.log(typeof score);

//let valueInNumber = Number(score)
//console.log(valueInNumber);
//console.log(typeof valueInNumber);


// 33 => 33
// "33abc"=> Nan (not a number)
// null => 0
// undefined => Nan
// true =>  1
// false => 0

let isLoggedIn = 1

//let booleanIsLoggedIn= Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

// 1 =>true 
// 0=> false
// "" => false
// "gau"=>true



/* ************************ Operations ********************************/

let value =3
let negValue=-value
//console.log(negValue);

let str1 = "gau"
let str2 = " yau"
console.log(str1 + str2);
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 +2);
console.log(1 + 2 + "2");

// it because of to primitive  if first is string then whole conersion is in string. if first is number it work in  number till string.


//  comparision


console.log(null >0)
console.log(null == 0)
console.log(null >=0)

// we have to avoid this type of comparision 