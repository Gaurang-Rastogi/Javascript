// Objects
// object declare by two methods literals and contsructor.

// Singleton  if object made with constructor it always a singleton. 

// literals

const mySym =Symbol("key1")

const Jsuser={
    name:"gaurang",
    age:21,                                // it take key as a string.
    location:"Meerut",
    [mySym]: "key1"
}

// console.log(Jsuser.age);
// console.log(Jsuser["name"]);
// console.log(Jsuser[mySym]);

Jsuser.age= 24
// // console.log(Jsuser);
// Object.freeze(Jsuser)    // it used to freeze the object so the further chnages cannot be done.

Jsuser.age=27
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("hello the js user");

}

Jsuser.greetingTwo=function(){
    console.log(`hello the js user, ${this.name}`);

}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());