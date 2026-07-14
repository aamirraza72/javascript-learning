let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); //obj

// let myNewDate = new Date(2026,6,9)
let myNewDate = new Date("01-15-2026") //mm,dd,yy
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now() // for current time in millisec.

//  console.log(myTimeStamp); 
//  console.log(myNewDate.getTime()); //specific time in millisec.
 
// console.log(Math.floor(myNewDate.now()/1000)); //time stamp in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

// `${newDate.getDay()} and the time`

console.log(newDate.toLocaleString(`default`, {
    weekday: "long",
    month: "long"
}))


