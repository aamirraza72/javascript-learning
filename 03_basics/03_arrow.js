const user = {
    username: "Raza",
    price: 499,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Alex"
// user.welcomeMessage()

// console.log(this);

function any(){
    let username = "Tom"
    console.log(username);
    console.log(this.username);   //undefined
    
}
// any()

// const chai = function (){
//     let username = "Alex"
//     console.log(this.username);
    
// }

const chai = () =>  {
    let username = "Alex"
    console.log(this.username);
    
}

//  chai()

//  const addTwo = (num1,num2) => {
//     return num1 + num2
//  }

//  const addTwo = (num1,num2) => num1 + num2  

//  const addTwo = (num1,num2) => (num1 + num2)  //implicit  return

 const addTwo = (num1,num2) => ({username: "Alex"})

 console.log(addTwo(2,5));
 
