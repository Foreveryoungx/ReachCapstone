import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";

const router = new Navigo(window.location.origin);
router
  .on(":page", handleRoute)
  .on("/", () => render(state.Home))
  .resolve();
function handleRoute(params) {
  const page = params.page;
  render(state[page], page);
}

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;

  if (st.view === "Contact") {
    console.log(state.formData);
    addCountries(state.formData.countries);
  }
  //addNavEventListeners();
}

// function addNavEventListeners() {
//   // add menu toggle to bars icon in nav bar
//   document
//     .querySelector(".fa-bars")
//     .addEventListener("click", () =>
//       document.querySelector("nav > ul").classList.toggle("hidden--mobile")
//     );
// }

// Contact Form Selection

function addCountries(countries) {
  // for(let i = 0; i < country.json; i++){}
  const ele = document.getElementById("country");
  ele.innerHTML = "";
  countries.forEach((country) => {
    ele.innerHTML += `<option>${country}</option>`;
  });
}

function validForm() {
  const i = document.forms["myForm"]["fname"].value;
  if (i === "") {
    alert("Must input First Name");
    return false;
    preventdefault();
  }
}
