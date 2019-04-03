const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
 console.log("CONTENT LOADED!");
 const button = document.getElementById("button");
 const name = document.getElementById("fullname");
 const phonenum = document.getElementById("phone");
 const cellnum = document.getElementById("cell");
 const postcode = document.getElementById("postcode");
 const city = document.getElementById("city");
 const state = document.getElementById("state");
 const street = document.getElementById("street");
 const email = document.getElementById("email");
 const dob = document.getElementById("date_of_birth")

  function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( data => populatePage(data) )
  }

  function populatePage(data) {
    name.innerText = data.results[0].name.first.charAt(0).toUpperCase() + data.results[0].name.first.slice(1) + " " + data.results[0].name.last.charAt(0).toUpperCase() + data.results[0].name.first.slice(1)
    phonenum.innerText = data.results[0].phone
    cellnum.innerText = data.results[0].cell
    street.innerText = data.results[0].location.street
    city.innerText = data.results[0].location.city
    state.innerText = data.results[0].location.state
    postcode.innerText = data.results[0].location.postcode
    email.innerText = data.results[0].email
    dob.innerText = data.results[0].dob.date.split("T")[0]
  }

button.addEventListener("click", () => {
fetchData()
})
});
