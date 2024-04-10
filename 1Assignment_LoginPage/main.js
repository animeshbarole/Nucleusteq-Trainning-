
document.getElementById("loginForm").addEventListener("submit",function(event){

      event.preventDefault();

      var username =document.getElementById("username").value;


      var password =document.getElementById("password").value;
  

      if (username.trim() === '' || username.trim().length === 0) {
          
        console.log("username is empty");
    }


      if(password.trim().length===0)
      {
        alert("Please Enter Password");
        return;
      }

        // If all checks pass, log the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);


});