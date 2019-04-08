const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log(fetchData())
});

function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( data => {
            // get container
            let container = document.getElementsByClassName("container")
            // console.log(container)

            // show image
            let image = document.getElementById("profile_picture")
            image.src = data.results[0].picture.large

            // get name
            let fullname = document.getElementById("fullname")
            fullname.textContent = data.results[0].name.first + " " + data.results[0].name.last

            // get email
            let email = document.getElementById("email")
            email.textContent = data.results[0].email

            // get Street
            let street = document.getElementById("street")
            // console.log(data.results[0].location)
            street.textContent = data.results[0].location.street

            // get city
            let city = document.getElementById("city")
            city.textContent = data.results[0].location.city

            // get state
            let state = document.getElementById("state")
            state.textContent = data.results[0].location.state

            // get postal code
            let pc = document.getElementById('postcode')
            pc.textContent = data.results[0].location.postcode

            // get phone number
            let phone = document.getElementById('phone')
            phone.textContent = data.results[0].phone

            // get date of birth
            let dob = document.getElementById("date_of_birth")
            dob.textContent = data.results[0].dob.date

            // get button and maybe add addEventListener
            let button = document.getElementsByClassName("btn btn-primary")
            console.log(button)

          } )
}

/*
{gender: "female", name: {…}, location: {…}, email: "renée.vidal@example.com", login: {…}, …}
cell: "(321)-371-0499"
dob: {date: "1958-06-29T12:46:19Z", age: 60}
email: "renée.vidal@example.com"
gender: "female"
id: {name: "AVS", value: "756.9871.5251.93"}
location: {street: "4692 rue barrème", city: "aarau", state: "fribourg", postcode: 9986, coordinates: {…}, …}
login: {uuid: "df5f7604-5672-4c16-a44e-824190f3c397", username: "whiteleopard263", password: "downtown", salt: "yBjWhAPs", md5: "293d1b0864c9435200c6da707e7d4ede", …}
name: {title: "mademoiselle", first: "renée", last: "vidal"}
nat: "CH"
phone: "(272)-644-0038"
picture: {large: "https://randomuser.me/api/portraits/women/59.jpg", medium: "https://randomuser.me/api/portraits/med/women/59.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
*/
