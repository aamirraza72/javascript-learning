const online_games = ["Free Fire","PubG","BGMI"]
const offline_games = ["Ludo","Carrom","Table Tennis"]

// online_games.push(offline_games)
// console.log(online_games[3][1]);

// const games = online_games.concat(offline_games)
// console.log(games);

// spread operator 
 
// const allGames = [...offline_games,...online_games]
// console.log(allGames); 

const numArray = [1,2,3,4,[5,6],[4,5,[1,2,3],6]]
// console.log(numArray);

const newNumArray  = numArray.flat(Infinity)
// console.log(newNumArray)


// console.log(Array.isArray("raza"))
// console.log(Array.from("raza"))
// console.log(Array.from({name: "raza"})) //interesting case 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))