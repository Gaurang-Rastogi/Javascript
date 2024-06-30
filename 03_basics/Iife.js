// Immediate Invoked function Expression (IIFE)

// IIFE is used to prevent from the global scope pollution or variable

(function chai(){
    // named IIFe
console.log(` IIFE explaination`);
})();

((name)=>{
    console.log(`IIfe explaination Two , ${name}`);
    
})("gaurang")

// innamed IIfe