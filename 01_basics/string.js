const name ="Gauranag"
const repoCount =60

//console.log(name + repoCount + "value");

// In mordern days  we generally not used like this .


console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

//  one more method to declare a string

const name2 =new String ('yatharth')

console.log(name2[2]);
console.log(name2.__proto__);

//  string Methods

//console.log(name2.length);
//console.log(name2.toUpperCase());
//console.log(name2.charAt(2));
//console.log(name2.replace('yatharth','Vanshika'));
//console.log(name2.repeat(2));

console.log(name2.substring(1,5));
console.log(name2.slice(-8,5));     // in slice we can also can give the negative value.

const name3= 'nitin'
//console.log(name2.concat(name3));
//console.log(name3.trim());

//console.log(name3.includes('tanvi'))
//console.log(name3.blink());
//console.log(name3.bold());
console.log(name3.fontsize(5));
console.log(name3.valueOf());
console.log(name3.padStart('7'));
console.log(name3.padStart('4','.'));
