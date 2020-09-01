// ********************** Imports ********************/
import { Nav, Main } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebase_config";

//************************Router Fxn*******************/

const router = new Navigo(window.location.origin);
firebase.initializeApp(firebaseConfig);
router
  .on(":page", handleRoute)
  .on("/", () => render(state.Home))
  .resolve();

//*********************Render Fxn********************/

function handleRoute(params) {
  console.log(params);
  const page = params.page;
  render(state[page], state);
}

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Nav(state.Links)}
  ${Main(st, state)}
`;

  if (st.view === "Contact") {
    console.log(state.formData);
    addCountries(state.formData.countries);
  }

  if (st.view === "SignUp") {
    createContactCardListners();
  }
}

// ******************Contact Form Selection******************/
function addCountries(countries) {
  // for(let i = 0; i < country.json; i++){}
  const ele = document.getElementById("country");
  ele.innerHTML = "";
  countries.forEach(country => {
    ele.innerHTML += `<option>${country}</option>`;
  });
}
// function validForm() {
//   const fN = document.forms["myForm"]["fname"].value;
//   const lN = document.forms["myForm"]["lname"].value;
//   if (fN === "") {
//     alert("Must input First Name");
//     return false;
//     preventdefault();
//   }
//   if (lN === "") {
//     alert("Must input Last Name ");
//     return false;
//   }
// }

// ****************************Slide show Function**********/
let slideIndex = 0;
showSlides();
// ********* Carousel Slides
function showSlides() {
  let Sl;
  let slides = document.getElementsByClassName("mySlides");
  for (Sl = 0; Sl < slides.length; Sl++) {
    slides[Sl].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// ******** Contact Card Creation
const makeConCard = document.querySelector(".signupbtn");
//****** grabbing info from signup form
//createAContactCard();

function createContactCardListners() {
  document.querySelector(".signupbtn").addEventListener("click", e => {
    e.preventDefault();
    console.log("Im on tv mom!!");
    state.Contactcard.fname = document.querySelector("#fname").value;
    state.Contactcard.lname = document.querySelector("#lname").value;
    state.Contactcard.email = document.querySelector("#email").value;
    state.Contactcard
      //state.Rolodex.push(Object.assign({}, state.Contactcard));
      .createFirebaseUser(state.Contactcard.email, "passWord");
    addUserToDatabase(
      state.Contactcard.fname,
      state.Contactcard.lname,
      state.Contactcard.email
    );
    router.navigate("/Contactcard");
  });
}
//****************Create Firebase User ***************/
function createFirebaseUser(username, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(username, password)
    .then(value => {
      console.log("value");
    });
}
// *******************Add User To Database *************/
function addUserToDatabase(fname, lname, email) {
  firebase
    .firestore()
    .collection("users")
    .add({ fname: fname, lname: lname, email: email });
}
render(state.Home);

//********************Get Most recent Users******************/
const database = firebase.database();
function getMostRecentUsers(userId, fname, lname, email) {
  firebase
    .database()
    .ref("users" + userId)
    .set({ fname, lname, email });
}
