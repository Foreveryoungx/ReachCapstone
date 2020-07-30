//function that obtains the info from the user's input in URL box
function obtainInfo(e){
  console.log(e)
  e.preventDefault()
  let x = document.getElementById("userinput").value
      console.log(x);
      document.getElementById("URL").value = x;
  }
