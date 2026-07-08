const gameScore = 100
// console.log(gameScore);

const balance  = new Number(500)
// console.log(balance);

//  console.log(balance.toString().length);
//  console.log(balance.toFixed(2)); //for precision value  

 const num1 = 10.236
//  console.log(num1.toPrecision(4)); //it will round the number to 4 significant digits
 
 const hundreds  = 100000
//  console.log(hundreds.toLocaleString('en-IN')) //balance in indian format

 // ############ Maths #########

 console.log(Math);
//   console.log(Math.abs(-7));
//  console.log(Math.round(7.6)); //8
//  console.log(Math.ceil(7.2)); //7
//  console.log(Math.floor(7.2)); //8
 
//  console.log(Math.min(2,5,7,8,6));
//   console.log(Math.max(2,5,7,8,6));

console.log(Math.random()); //value it always b/w 0 and 1
// console.log(Math.random()*10);
// console.log((Math.random()*10) + 1) // to avoid 0 num , so we add 1

 const min =1 //dice ex
 const max = 6

 console.log(Math.floor(Math.random() * (max - min + 1) + min)) // also used in otp gen
 