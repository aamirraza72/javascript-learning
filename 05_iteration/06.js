// const language = ["js", "python", "java", "ruby"];

// const values = language.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);


const myNum = [1, 2, 3, 4, 5]

const newNums = myNum.filter( (num) => {
    return num > 3

} )
//console.log(newNums);


const newNum = []

myNum.forEach( (num) => {
    if(num >3 ){
        newNum.push(num)
    }
} )
//console.log(newNum);


// Array of book objects used to practice filtering with multiple conditions.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => { return bk.genre === 'History'} )

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000

} )

userBooks = books.filter( (bk) => {
    return (bk.publish >= 1995) && (bk.genre === "History")
})

console.log(userBooks);


// forEach() executes a callback for each element but does NOT return a new array.
// filter() returns a new array containing only elements that satisfy the condition.