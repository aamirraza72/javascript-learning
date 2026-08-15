const user = {
    username: "david",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user detail from database");
        // console.log(`username : ${this.username}`);
        // console.log(this);   
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
        // console.log(this);


        //constructor function
        function User(username, loginCount, isLoggedIn){
            this.username = username
            this.loginCount = loginCount
            this.isLoggedIn = isLoggedIn

        this.greeting = function(){
            console.log(`Welcome ${this.username}`);
            
        }
        }
        const userOne = new User("maxim", 12, true)
        const userTwo = new User("sam", 10, false)
       console.log(userOne);
       console.log(userTwo);
       
        

