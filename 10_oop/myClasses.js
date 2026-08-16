// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const info = new User("david", "david@oogle", "123")

// console.log(info.encryptPassword());
// console.log(info.changeUsername());


//behind the scene 
// Class methods are added to the prototype.
 function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    User.prototype.encryptPassword = function(){
          return `${this.password}abc`
    }

    User.prototype.changeUsername = function(){
           return `${this.username.toUpperCase()}`
    }

    const info2 = new User("james", "james@oogle", "123")

    console.log(info2.encryptPassword());
console.log(info2.changeUsername());
    