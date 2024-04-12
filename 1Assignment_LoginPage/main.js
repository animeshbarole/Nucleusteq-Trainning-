document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  var alertMessages = [];

  // Password validation
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /^[A-Z]/;
  var numbers = /[0-9]/g;

  if (!password.match(lowerCaseLetters)) {
    alertMessages.push("Password should contain at least one lowercase letter");
  }

  if (!password.match(upperCaseLetters)) {
    alertMessages.push("First letter of the password should be uppercase");
  }

  if (!password.match(numbers)) {
    alertMessages.push("Password should contain at least one number");
  }

  if (password.length > 8) {
    alertMessages.push("Password length should not exceed 8 characters");
  }


  if (alertMessages.length > 0) {
    alert(alertMessages.join("\n"));
    return;
  }

  // If all checks pass, log the username and password to the console
  console.log("Username: " + username);
  console.log("Password: " + password);
});
