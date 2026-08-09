const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
 const height  = parseInt(document.querySelector('#height').value)
 const weight  = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#result')

const button = document.querySelector('#calculate');

const homeLink = document.querySelector('#homeLink')
homeLink.addEventListener('click', function (event) {
  event.preventDefault()
})

if(height < 0 || isNaN(height)){
    results.innerHTML = 'Please give a valid height';
}
else if( weight < 0 || isNaN(weight)){
    results.innerHTML =` Please give a valid weight ${weight}` ;
}
else{

const bmi = (weight/ ((height * height) / 10000)).toFixed(2)

if(bmi < 18.6){
results.innerHTML = `<span> BMI : ${bmi} <br> Under Weight</span>`
button.style.backgroundColor = "brown";
}
else if(bmi >= 18.6 && bmi <= 24.9 ){
results.innerHTML = `<span> BMI : ${bmi} <br> Normal Range </span>`
button.style.backgroundColor = "Green"
}
else if(bmi > 24.9 ){
results.innerHTML = `<span> BMI : ${bmi} <br> Overweight </span>`
button.style.backgroundColor = "red";
}
}

}) 

