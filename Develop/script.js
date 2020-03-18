// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
    var length = 16,
        charset = "!?~&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        randomP = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        randomP  += charset.charAt(Math.floor(Math.random() * n));
    console.log(randomP)
    }
    return randomP ;
    console.log(randomP)
    alert("I am in generate password");
  }
  
  //////////////////////////////////////////////////////////////
  // DO NOT TOUCH THE CODE BELOW
  //////////////////////////////////////////////////////////////
  // Assignment Code 
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  