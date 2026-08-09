const buttons = document.querySelectorAll('.color-btn')
// console.log(buttons)
const body = document.querySelector("body")
const homeLink = document.querySelector('#homeLink')

const currentColor = document.querySelector('#currentColor')
let count = 0
const countElement = document.querySelector('#count')

const resetBtn = document.querySelector('#resetbtn')

homeLink.addEventListener('click', function (event) {
  event.preventDefault()
})

resetBtn.addEventListener('click', (e) => {
    body.style.backgroundColor = 'white';
    currentColor.textContent = 'White';
});

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