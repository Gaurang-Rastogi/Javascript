// scope

let a =200

if(true){
    const a=10                        // this area {  is called the block scope}
    let b=20
    var c=30
    // console.log("Innner value :", a);
}

                                      // outside this area is called the global scope
//  console.log(a);
//  console.log(b);
//  console.log(c);


function one(){
    const Username ="Gaurang"

    function two(){

        const webstite ="youtube"                  // in this child can access all function of parent function
        // console.log(Username);
    }

    // console.log(webstite);
    two()
}

one()

if(true){
    const userNam ="gaurang"
    if(userNam==="gaurang"){
        const website="youtube"
        // console.log(userNam + website);
    }
    // console.log(website);

}

// console.log(userNam);




//++++++++++++++++++++++++ Intersesting ++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}


addTwo(7) 
const addTwo= function(value){
    return value + 2
}
                        /// this method also called expression and it also a another method to declare the funtion.