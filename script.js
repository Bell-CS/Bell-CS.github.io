
function reee() {
    var user = document.getElementById("uname").value; //Get user in put from form field
    var pass = document.getElementById("pass").value;
    
    if(user == 'Bell' && pass == 'Ibarra'){
      alert("Successful Login!")
      window.location.assign("home.html")
    }
    else{
      document.getElementById("status").innerHTML = "The password or username is incorrect"; //Display wrong message
    }
  }