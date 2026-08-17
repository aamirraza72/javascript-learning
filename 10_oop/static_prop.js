class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
        
    }
   static createId(){
        return `123`
    }

}

const aamir = new User("aamir")
aamir.logMe()        //  Normal method → object can access

// aamir.createId()  //  Static method cannot be accessed through object

console.log(User.createId()); // Static method → class can access

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const laptop = new Teacher("laptop", "laptop@oogle")
laptop.logMe()
//  console.log(laptop.createId());
c