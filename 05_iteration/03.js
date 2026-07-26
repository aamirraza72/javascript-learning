// for of 

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2 , 3 ,4]

for (const iterator of arr) {
    //console.log(iterator);
    
}

let myArray = ["ChatGPT", "Gemini", "Claude"]

for (const i of myArray) {
    //console.log(i);
    
}

// Maps

const map = new Map()

map.set('IN', "India");
map.set('UK', "United Kingdom");
map.set('FR',"France");

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'FF',
    'game2': 'Valorant'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
    
// }