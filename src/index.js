

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
  const dob = document.getElementById("date_of_birth");

  function fetchData(){
         var data = fetch('https://randomuser.me/api/')
           .then( res => res.json() )
           .then( data => {populatePage(data); console.log(data) })

  }

  function populatePage(data){
    personData = data.results[0];
    name.textContent = (personData.name.first.charAt(0).toUpperCase() + personData.name.first.slice(1) + " "+ personData.name.last.charAt(0).toUpperCase() + personData.name.last.slice(1));
    phonenum.textContent = personData.phone;
    cellnum.textContent = personData.cell;
    email.textContent = personData.email;
    dob.textContent = personData["dob"].date.split("T")[0];
    street.textContent = personData.location.street;
    city.textContent = personData.location.city;
    state.textContent = personData.location.state;
    postcode.textContent = personData.location.postcode;
  }

 button.addEventListener("click", ()=> {
   fetchData();
 });
 // function(ev) }
 // }
 //
 // (ev) => {
 //
 //  }

  const fullname = document.getElementById("fullname");
  console.log("CONTENT NOT YET LOADED!", fullname);

});
