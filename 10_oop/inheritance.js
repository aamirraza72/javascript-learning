class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

}

 class Teacher extends User{
    constructor(username, email , password){
       super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(` A new course was added by ${this.username}`);

    }
 }                                                               

 const david = new Teacher("david", "david@oogle.com", "123")

 david.addCourse()
david.logMe()

const james = new User("james")
// james.addCourse()
james.logMe()

// Checks whether User exists in david's prototype chain
console.log(david instanceof User);
