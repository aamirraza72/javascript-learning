const myNums = [1, 2, 3, 4, 5]

// const newNumber = myNums.map( (num) => {return num + 10} )

const newNumber = myNums
   .map( (num) =>  num * 10)
   .map( (num) => num + 1)
   .filter( (num) => num >= 30)

console.log(newNumber);


// map() -> Transforms every element and returns a new array.
// filter() -> Returns only those elements that match the condition.
// Method chaining -> Calling multiple array methods one after another.