function mutliple5(num){
    return num*5
}

mutliple5.power = 2

console.log(mutliple5(5));
console.log(mutliple5.power);
console.log(mutliple5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score

}

createUser.prototype.increment = function(){
   this.score++
}
createUser.prototype.printMe  =  function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)
chai.increment()
chai.printMe()
// tea.printMe()