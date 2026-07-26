// forEach() executes a callback function once for each array element

const language = ["js", "python", "java", "ruby"];

// Using a normal function as a callback
language.forEach(function (val) {
    // console.log(val);
});

// Using an arrow function as a callback
language.forEach((val) => {
    // console.log(val);
});

// Passing a named callback function
function printMe(val) {
    // console.log(val);
}

language.forEach(printMe);

// forEach provides three callback parameters:
// item  -> current element
// index -> current element index
// arr   -> original array
language.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

// Array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
];

// Access object properties while iterating
myCoding.forEach((item) => {
    console.log(item.languageName);
});