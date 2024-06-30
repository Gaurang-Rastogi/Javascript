//  function

function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("G");
}

//  sayMyName    this is only refernece.

// sayMyName()


// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
// }

// addTwoNumber(3,4)

function addTwoNumber(number1,number2){
    
    let result =  number1 + number2
    return result
}
const result = addTwoNumber(6,4)
// console.log(result);

// addTwoNumber(3,4)

function loginUserMessage(username){
    if(username === undefined){
         console.log("Please enter your name");
        return
    }
    return `${username} Just logged in`
}
// console.log((loginUserMessage("Gaurang")));
//  console.log((loginUserMessage()));


//   rest opeerator in function

function shoppingCartPrice(val1,val2, ...num1){
    return num1
}

// console.log((shoppingCartPrice(100,200,300,4000)))

// rest opertaior is simmilar to sperad operator both denoted by ...



//  Object in function

const User ={
    name:"gaurang",
    lastname:"rastogi"
}

function myObject(anyobject){
    console.log(`username is ${anyobject.name} and lastname is ${anyobject.lastname}`);

}
myObject(User)

// array in the function

const myArray =[100,200,300,400]

function returnSecondValue(anyArray){
    return anyArray[3]

}
console.log((returnSecondValue(myArray)));