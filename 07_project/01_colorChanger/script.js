const buttons = document.querySelectorAll('.color-btn')
// console.log(buttons)
const body = document.querySelector("body")

const currentColor = document.querySelector('#currentColor')
let count = 0
const countElement = document.querySelector('#count')

buttons.forEach( function (button){
  // console.log(button)
  button.addEventListener('click',function(e){
    // console.log(e)
    // console.log(e.target)
body.style.backgroundColor = e.target.id
currentColor.textContent = e.target.id
count++
countElement.textContent = count


  })
})