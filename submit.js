function validForm() {
  var i = document.forms["myForm"]["fname"].value;
  if (i === "") {
    alert("Must input First Name");
    return false;
    preventdefault();
  }
}
