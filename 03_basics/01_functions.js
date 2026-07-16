
 //***********fun declaration
function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("R");
    
}

// sayMyName()          //func calling

// function addTwoNumber(num1,num2){
//     console.log(num1 + num2);
    
// }
function addTwoNumber(num1,num2){
    
    // let result = num1 + num2
    //  return result
   return num1 + num2 
    
}

const result = addTwoNumber(3,4)

// console.log("Result:",result);

function loginUserName(username = "raza"){

    if(!username){
        console.log("Please enter username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserName("Raza"))
// console.log(loginUserName())  // Interview Qs

   // Rest operator collects remaining arguments into an array
  
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
   
// console.log(calculateCartPrice(100,200,500,50))



const user = {
    username: "Aamir",
    product: "Shirt",
    price: 199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} cart item ${anyobject.product} at ${anyobject.price} `);
    
}
// handleObject(user)
handleObject({

    username: "alex",
    product: "Shirt",
    price: 199

})

const newArray = [100,200,300,400]

function returnFirstValue(getArray){
    return getArray[0]
}
console.log(returnFirstValue(newArray))