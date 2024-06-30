// arrays
 const arr =[0,1,23,4,5]
 console.log(arr[3]);

 const arr2 =new Array(0,1,2,3,4,5,6)
 const arr3 =new Array("a","b","v","g","h")

//  array methods

// arr2.push(6)
// arr2.push(7)
// arr2.pop() // removes the last value from  the array

 arr2.unshift(9) // add the first element in the array.
//console.log(arr2);
 arr2.shift()  // remove the firts element in the array.

 //console.log(arr2);


let arr4=arr2.concat(arr3)
//console.log(arr4);

let arr5= arr2.join()
//console.log(arr5);
//console.log(typeof(arr5)); // join convert the array type object to string.


// slice and splice

console.log("A",arr2);
let myn1 = arr2.slice(1,3)
console.log(myn1);              // slice do not include the range and also not manipulate the original array.
console.log("B",arr2);


let myn2=arr2.splice(1,3)
console.log(myn2);
console.log("C",arr2);  

// Note : splice manipulate the original array and also include the range.