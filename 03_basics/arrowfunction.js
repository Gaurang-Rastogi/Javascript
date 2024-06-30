const user ={
    userNam:"gauarng",
    price: 2000,

    welcomeMessage: function(){
        console.log(`${this.userNam} , Welcome to  this Website`); 
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userNam="yathu"
// user.welcomeMessage()
// console.log( this);

// this refers to the current context.

// in browser when we run te global object is windows.


//  When we acess the  this  in function.

// function three(){
//     const username ="gaurang"
//     console.log(this.username);
// }
// three()



// const three =() =>{
//     const username ="gaurang"
//     console.log(this);
// }
// three()

// const addTwo = (num1 ,num2) =>{
//     return   num1 + num2
// }

const addTwo = (num1 ,num2 ) => num1 + num2
                                                     // this called the implicit return

console.log(addTwo(2,3))