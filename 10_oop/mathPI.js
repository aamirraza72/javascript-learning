const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

// console.log(Math.PI);
// Math.PI= 5
// console.log(Math.PI);

const course = {
    name: "JS full course",
    price: 999,
    isAvalaible: true,

    buyCourse: function(){
        console.log("code fatt gya");
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(course,"name"));

course.name = "python "
// console.log(course);

Object.defineProperty(course, 'name',{
    writable: false,
    // enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(course,"name"));

course.name = "JS "
// console.log(course);


for (const [key,value] of Object.entries(course)) {
    if(typeof value != 'function'){ 
    console.log(`${key} : ${value}`);
    }
}