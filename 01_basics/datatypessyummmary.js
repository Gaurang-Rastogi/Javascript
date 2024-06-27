// primitive

// 7 types : string , number, boolean , symbol , bignit , null , undefined

let score =101
let scoreValue=111.4
let isLoggedIn =true
let onTemperature = null
let str ;
let bignit = 123455566778990986n
 let id = Symbol('123')
 let anotherId =Symbol('123')
 console.log(id==anotherId); // Symbol create the unique ness

// Reference ( non -primitive)

// Arrays , Objects , function



//+++++++++++++++++++++++++ Memory Used

// Stack (Primitive datatypes) , Heap (non-primitive)

let myName =" gaurang"
let anotherName = myName
anotherName= "yathu"
console.log(myName);
console.log(anotherName);

let user1 ={
    email: "world@.com",
    upi:"user@ybl"
}
let user2 =user1
user2.email="gau45@gmail.com"
console.log(user1.email);
console.log(user2.email);


// In stack we always got the copy.
// In heap we got the refernce . so when we change  we change in the orginal refernce value.