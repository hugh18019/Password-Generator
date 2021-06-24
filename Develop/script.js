var lengthSoFar = 0;
var totalLength = 0;
const allCriteria = [ "lowercase", "uppercase", "numeric", "special characters"];


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


