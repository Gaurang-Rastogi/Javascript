// reduce

// const arr1 = [1,2,3]
// const myTotal=arr1.reduce(function(acc,curr){
//     console.log(`acc value : ${acc} and curr value :${curr}`);
//     return acc +curr
// },0)
// console.log(myTotal);

const shoppingCart =[
    {
        course :"javascript",
        price:999
    },
    {
        course :"react.js",
        price:999
    },
    {
        course :"datascience",
        price:1999
    }
]
const totalPrice=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(totalPrice);