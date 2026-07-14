const accountId = 155523
let accountEmail = "aamir45@gmail.com"
var accountPassword = "123456"
accountCity = "delhi"
let acccountState
 
//changing const is not allowed

accountEmail = "syed22@gmail.com"
accountPassword = "789456"
accountCity = "ranchi"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
 {
    let name = "Aamir"; /*let follow block space*/
    console.log(name);   
}

console.log(name);  // will show error because name is not declare

console.log(accountEmail)

console.table([accountId,accountEmail,accountPassword,accountCity,acccountState])