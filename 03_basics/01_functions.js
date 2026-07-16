function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("R");
    
}

// sayMyName()

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

function loginUserName(username = "raj"){

    if(!username){
        console.log("Please enter username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserName("Raza"))
console.log(loginUserName())  // Interview Qs