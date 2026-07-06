// Primitive datatypes

 // String, Number, Boolean, null , undefined , symbol, BigInt

  
const gameScore = 1000 // typeof number 
const marks = 256.3 // typeof number

const tempOutside = null // typeof object****
const bigNumber = 54654654564n // // typeof bigint

const id = Symbol('123')// symbols are unique
const anotherId = Symbol('123')

console.log(id === anotherId);
 
// Non priitive (Refrence)********

// Array , Object ,Function

const llmExample = ["chatgpt", "gemini" , "claude"] // // typeof object 
let myObj = { 
    name: "aamir",
    age: 19,
    loggedIn: true,
}

const myFunc = function(){
   console.log("hello world");
    
}
// myFunc()
console.log(typeof llmExample);
