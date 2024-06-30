//  constructor method for declare.

const trinderUser = new Object()        //this is singleton

const trinderUser2 = {}                // non -singleton

trinderUser.id ="123dfr"
trinderUser.name="sam"
trinderUser.age=43 

// console.log(trinderUser);

const reguralUser ={
    email:"gaurang@mail.com",
    userfullname:{
        fullname:{
            firstname: "gaurang",
            lastname:"rastogi"
        }
    }
}

// console.log(reguralUser.userfullname.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3= Object.assign({},obj1,obj2)   // {} asume this as a target and other as a source.

const obj3 ={...obj1 , ...obj2}
// console.log(obj3);



// destructuring

const course ={
    course:"javascript",
    price:"999",
    duration: "2 months"
}
const {duration : courseDuration}=course
//console.log(duration);
console.log(courseDuration);


// Json generally like a object only

//  {"name":"gaurang",
//    "price":"free"                 }
         