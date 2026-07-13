// Singleton object can be created using Object.create()
Object.create

const mySymbol = Symbol("key1")

// object literals 
const user = {
    name: "aamir",
    "fullName": "Aamir Raza", //you can't access using dot,access with bracket notation
    age: 19,
    location: "Delhi",
    email: "aamir123@gmail.com",
    isLoggedIn: false,
    lastLogIn: ["Monday"],

    // Symbol used as a unique object key
    [mySymbol]: "mykey1"  
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["fullName"]);
//  console.log(user[mySymbol]);

user.location = "Patna"
// Object.freeze(user)    // Prevent further modifications
user.location = "Ranchi"
// console.log(user);

user.greet = function(){
    console.log("Hello User");
    
}
user.greetTwo = function(){
    // Using 'this' to access current object properties
    console.log(`Hello User,${this.name}`);
    
}
console.log(user.greet());
console.log(user.greetTwo());

