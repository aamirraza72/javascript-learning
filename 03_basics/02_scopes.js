let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Alex"

    function two(){
        const website =  "amazon"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}
//  one()

if(true){
    const username = "Alex"
    if(username === "Alex"){
        const website = " amazon"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

//*************Interesting */
console.log(addOne(5))

function addOne(num){
    return num + 1
}
//  addOne(5)


// addTwo(7)  
// Function Expression
 const addTwo = function(num){
     return num + 2
  
 }
 
addTwo(7)