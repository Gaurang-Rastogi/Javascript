// for loop

for (let index = 0; index < 10; index++) {
    const element = index; 
    if (element ==5) {
        // console.log("5 is the best no.");
    }
    // console.log(element);        
}
// console.log(element);

for (let index = 0; index <=10; index++) {
    // console.log(`Outer loop value ${index}`);
    for (let j= 0; j < 10; j++) {
    //   console.log(`Inner loop value ${j} and inner loop ${index}`);
        
    }
    
}

let myArray=["falsh","Ironman","spiderman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if(index==15){
        break;
    }
  console.log(` value of i is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if(index==15){
        console.log("detected 15")
        continue;
    }
  console.log(` value of i is ${index}`);
    
}