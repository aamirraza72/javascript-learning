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
// console.log(typeof llmExample);

////////////////////*********************

// Stack (Primitive)= passes only copy, Heap (Non-Primitive) = memory changes
 
let myName ="aamir raza"

let myAnotherName = myName // only value pass not refrence 
 
myAnotherName = "syed raza"

//  console.log(myName); 
//  console.log(myAnotherName);
 
 let firstUser = {
    email: "user123@gmail.com",
    loc: "delhi"
 }
 let secondUser = firstUser

 secondUser.loc =  "ranchi"
        
console.log(firstUser.loc); //ranchi
console.log(secondUser.loc); //ranchi
    
