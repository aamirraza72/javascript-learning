// let myName = "aamir  "
// let otherName = "glenn  "
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

// Object.prototype → all normal objects/arrays can access this
// because Array.prototype also inherits from Object.prototype

Object.prototype.aamir = function(){
    console.log(`aamir is present in all object`); 
    
}

// Array.prototype → only arrays get access to this method
Array.prototype.heyAamir = function(){ 
    console.log(`hey aamir `);
    
}

// heroPower.aamir()
// myHeros.aamir()
// myHeros.heyAamir()
// heroPower.heyAamir() // cant access

//prototyple inheritance (outdated)

const User = {
    name: "james",
    email: "james@oole.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// __proto__ → connects one object to another object's prototype
const TASuport = {
    makeAssingment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "william   "

// String.prototype → every string can access this method
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
    
}
anotherUserName.trueLength()
"aamir".trueLength()
"raza".trueLength()