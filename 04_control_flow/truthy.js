// const userEmail = "raza123email.com"
const userEmail = []

// if(userEmail){
// console.log("User have Email");

// }
// else{
//     console.log("User don't have email");
    
// }


// Falsy Values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truthy  Values 
// "0", 'false', " " , [], {}, function(){}


// if(userEmail.length == 0){
//     console.log("Array is empty");
    
// }


const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// }

// Nullish Coalescing Operator (??)  : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 10
val1  = null ??  10 ?? 20

// console.log(val1);

// Terniary Operator

const lemonTeaPrice = 100

lemonTeaPrice >= 70 ? console.log("more than  70") : console.log("less than 70");

