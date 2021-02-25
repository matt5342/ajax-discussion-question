const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

let button = document.getElementById("button")
  // var person;
// let result;
button.addEventListener('click', (e) => {
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( json => fillForm(json.results) )
  // debugger
  // console.log(person)
  // document.getElementById("fullname").innerText = `${person.results[0].name.first + person.results[0].name.last}`;
})

function fillForm(names){
  // debugger
  document.getElementById("fullname").innerText = `${names[0].name.first + names[0].name.last}`;
  document.getElementById("email").innerText = `${names[0].email}`;
  document.getElementById("street").innerText = `${names[0].location.street.name}`;
  document.getElementById("city").innerText = `${names[0].location.city}`;
  document.getElementById("state").innerText = `${names[0].location.state}`;
  document.getElementById("postcode").innerText = `${names[0].location.postcode}`;
  document.getElementById("phone").innerText = `${names[0].phone}`;
  document.getElementById("cell").innerText = `${names[0].cell}`;
  document.getElementById("date_of_birth").innerText = `${names[0].dob.date.slice(0, 10)}`;

}