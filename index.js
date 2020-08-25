import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  addNavEventListeners();
}

render(state.Home);

function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

// Contact Form Selection
let myjson = {
  country: [
    "United States",
    "Australia",
    "germany",
    "russia",
    "canada",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "China",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire",
    "Azerbaijan"
  ]
};
console.log(myjson);
// for(let i = 0; i < country.json; i++){}
var ele = document.getElementById("country");
ele.innerHTML = "";
myjson.country.forEach(i => {
  ele.innerHTML += `<option>${i}</option>`;
});

function validForm() {
  var i = document.forms["myForm"]["fname"].value;
  if (i === "") {
    alert("Must input First Name");
    return false;
    preventdefault();
  }
}
