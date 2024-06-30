const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["batman","flash","superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);              // concat give the new array.     

//  one more method to add tow or more arrays is Spread Operator.

// sperad operator

// const all_new_heros =[...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


// flat

// const arr1 =[1,2,3,4,[5,6,7],9,0,[56,7,8,90,[,45,2,6,57]]]
// const arr2 =arr1.flat(Infinity)
// console.log(arr2);


// form

console.log(Array.isArray("Gaurang"));
console.log(Array.from("Gaurang"));

// form convert into array

// of

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));