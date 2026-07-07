const name = "aamir"
const totalRepo = 20
 
// console.log(name + totalRepo + " count"); // not good to concatenate

// console.log(`hey my name is ${name} and my total repo on github is ${20}`);  //modern way to write with ${var} 

const gameName = new String('aamihunter') 

// console.log(gameName[2]);
// console.log(gameName.__proto__); //string prototype

// console.log(gameName.length); 
// console.log(gameName.toUpperCase()); 

// console.log(gameName.charAt(2)); 
// console.log(gameName.indexOf('r')); 

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4) //it is diff len-8 so it (2,4)
// console.log(anotherString);

const newStringOne = "  aamir   "

// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove spaces pre and post

const url = "https://aamir.com/aamir%20raza"

// console.log(url.replace('%20' , '-'))
// console.log(url.includes('jethalal')) // used to check the url

const gameNameOne = "syed-aamir-raza"
 console.log(gameNameOne.split('-'))