// const myUser = Object.create()

const myUser = { }

myUser.id = "xyz123"
myUser.name = "Xavier"
myUser.isLoggedIn = false

// console.log(myUser);

const googleUser = {
     email: "user_xyz@gmail.com",
     location: {
        userLocation:{
            country: "India",
            state: "Bihar"

        }
     }
}

// console.log(googleUser.location.userLocation);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//Array of object
const user = 
[
    {
     id: 1,
    email: "abc@gmail.com",
},

 {
     id: 2,
    email: "abc@gmail.com",
},
 
 {
     id: 3,
    email: "abc@gmail.com",
},
]
   
//  console.log(user[1].email)
//  console.log(myUser);
//  console.log(Object.keys(myUser));
//  console.log(Object.values(myUser));
//  console.log(Object.entries(myUser));
 
// console.log(myUser.hasOwnProperty("isLoggedIn"));

 
const course = {
    courseName: "js full course",
    price: "999",
    courseInstructor: "hitesh"

}

// console.log(course.instructor);

const {courseInstructor: instructor} = course // de structure

console.log(instructor);

// {
//    "name": "hitesh",                     //json
//   "coursename": "javascript course",
//     "price": "free"
// }

[
    {},
    {},
    {}
]