const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

const button = document.getElementById('button')
const phone = document.getElementById('phone')
const cell = document.getElementById('cell')
const email = document.getElementById('email')
const dateOfBirth = document.getElementById('date_of_birth')
const street = document.getElementById('street')
const city = document.getElementById('city')
const state = document.getElementById('state')
const postcode = document.getElementById('postcode')



function fetchData(){
  var data = fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => populatePage(data) )
}

function populatePage(data){
  fullname.textContent = data.results[0].name.first + ' ' + data.results[0].name.last
  phone.textContent = data.results[0].phone
  cell.textContent = data.results[0].cell
  email.textContent = data.results[0].email
  dateOfBirth.textContent = data.results[0]['dob'].date.split('T')[0]
  street.textContent = data.results[0]['location'].street
  city.textContent = data.results[0]['location'].city
  state.textContent = data.results[0]['location'].state
  postcode.textContent = data.results[0]['location'].postcode
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  button.addEventListener('click', (ev) => {
    ev.preventDefault()

    fetchData()




  })

});
