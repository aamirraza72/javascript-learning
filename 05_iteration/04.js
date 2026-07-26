// for...in loop is used to iterate over the keys of an object

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python"
};

for (const key in myObject) {
    // key = js, cpp, py
    // myObject[key] gives the corresponding value
    //console.log(`${key} shortcut is ${myObject[key]}`);
}

// for...in on arrays returns the index (0, 1, 2...)

const programming = ["cpp", "py", "js", "java"];

for (const key in programming) {
    //console.log(key);              // 0, 1, 2, 3
   // console.log(programming[key]); // cpp, py, js, java
}

// Maps are NOT iterable with for...in

const map = new Map();

map.set("IN", "India");
map.set("UK", "United Kingdom");
map.set("FR", "France");

// This won't print anything because Map doesn't work with for...in

for (const key in map) {
//    console.log(key);
}

// Correct way to iterate over a Map is using for...of

for (const [key, value] of map) {
    console.log(key, value);
}