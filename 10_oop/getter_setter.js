class User{
    constructor(email,password){
        this.email =email
        this.password = password
    }
    set password(value){
        this._password = value
    }
    get password(){
        return `${this._password}raza`
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
}

const aamir = new User("raza@gmail.com", "123abc")
console.log(aamir.password);
console.log(aamir.email);

