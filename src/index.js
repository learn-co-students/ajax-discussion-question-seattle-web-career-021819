
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById('button');
  const fullname = document.getElementById('fullname');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const postcode = document.getElementById('postcode');
  const cell = document.getElementById('cell');
  const date_of_birth = document.getElementById('date_of_birth');
  const state = document.getElementById('state');

  function fetchData(){
    var data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( data => populatePage(data) )
  };

  function populatePage(data){
    data = data.results[0]
    fullname.textContent = data.name.first + " " + data.name.last
    phone.textContent = data.phone;
    email.textContent = data.email;
    street.textContent = data.location.street;
    city.textContent = data.location.city;
    postcode.textContent = data.location.postcode;
    cell.textContent = data.cell;
    date_of_birth.textContent = data['dob'].date.split('T')[0];
    state.textContent = data.location.state;
  };
  button.addEventListener("click", () => {
    fetchData();
  });

  console.log("CONTENT LOADED!");
});
