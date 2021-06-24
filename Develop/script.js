var lengthSoFar = 0;
var totalLength = 0;
const allCriteria = [ "lowercase", "uppercase", "numeric", "special characters"];

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var special_characters = ' !"#$%& ' + ' ()*+,-./:;<=>?@[\]^_`{|}~ ';



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


