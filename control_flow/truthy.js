const userEmail ="gau123@gmail.com"

if(userEmail){
 console.log("got the user email.");
}else{
    console.log("dont have user email.");
}

// falsy values

//  false ,0 ,-0 ,bigint 0n,"",null ,undefined,Nan

// truthy values

// "0", 'false '," ",[],{},function(){}

/// for checking Array


// if (userEmail.length ===0){
//     console.log("array is empty");

// }

// / for checking the object

const myObj={
    // name:"gaurang"
}

if(Object.keys(myObj).length===0){
    console.log("object is empty")
}
// else{
//     console.log("object is not empty");
// }


// Nullish Coalesing Operator (???) depend upon null and  undefined

let val1;
//  val1 =5??10
// val1 =null ??10
// val1 =undefined ??10
 val1 =null ??10??15


 console.log(val1);

 // Note : ternary operator and nullish operator is different.

 // Ternary operator

//  condition ? true:false

const iceTeaPrice = 100

iceTeaPrice>=80 ? console.log("less then 80") : console.log("greater then 80");