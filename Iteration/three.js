// for of

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting ="Hello World!!"
for (const greet of greeting) {
    // console.log(`Each char of ${greet}`);
}

// Map

const map =new Map
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('IN',"India")  // Map only give the unique value

// console.log(map);

for (const [key ,value] of map) {
    console.log(key ,':-', value);
    
}

// in object it cannot iterable there is another method for that