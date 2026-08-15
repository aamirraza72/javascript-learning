function SetuserName(username){
    //complex DB calls
 this.username = username
}

 function userInfo(username, email, password){
    // call() sets SetuserName's `this` to the current userInfo object
    SetuserName.call(this,username)
    this.email = email
    this.password = password
}
const user = new userInfo("james", "james@oogle", "123")    

console.log(user);
