var lengthSoFar = 0;
var totalLength = 0;
const allCriteria = [ "lowercase", "uppercase", "numeric", "special characters"];

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var special_characters = ' !"#$%& ' + ' ()*+,-./:;<=>?@[\]^_`{|}~ ';


const selectedCriteria = [];
const criteriaLengths = [];



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




function generatePassword() {
  getLength();
  console.log( totalLength );
  getCharTypes();
  console.log( selectedCriteria );
  getCritLength();
  console.log( criteriaLengths );
  return createPassword();
}


function getLength() {
  var length = prompt( "Enter the length between 8 and 128 for the password." );
  // while( typeof length != Number ) {
  //   length = prompt( "Enter a number for the length of the password." );
  // }
  while( length < 8 || length > 128 ) {
    length = prompt( "Enter a length between 8 and 128." );
  }
  totalLength = length;
}

function getCharTypes() {
  for( var key of allCriteria ) {
    var select = confirm( "select " + key + "?" );
    if( select ) {
      selectedCriteria.push( key );
    }
  }
}

function getCritLength() {
  for( var i = 0; i < selectedCriteria.length; i++ ) {
    if( i === 0 ) {
      var criteriaLeft = selectedCriteria.length - 1;
      var maxLength = totalLength - criteriaLeft;
      var length = Math.floor( Math.random() * maxLength + 1 );
      criteriaLengths.push( length );
      lengthSoFar = lengthSoFar + length;
    }
    else if( i === selectedCriteria.length - 1 ) {
      var length = totalLength - lengthSoFar;
      lengthSoFar = totalLength;
      criteriaLengths.push( length );
    }
    else {
      var criteriaLeft = selectedCriteria.length - 1 - i;
      var maxLength = totalLength - lengthSoFar - criteriaLeft;
      var length = Math.floor( Math.random() * maxLength + 1 );
      lengthSoFar = lengthSoFar + length;
      criteriaLengths.push( length );
    }
  }
}



function createPassword() {
  for( var i = 0; i < totalLength; i++ ) {
    var curCrit = randomCrit();
    if( curCrit == "lowercase" ) {
      generateLowerCase();
  }
}

 //Randomly generate a type of a criteria
function randomCrit() {
  var max = selectedCriteria.length;
    var critIdx = Math.floor( Math.random() * max );
    var curCrit = selectedCriteria( critIdx );
}

//Generate lowercase characters
function generateLowerCase() {
  for( var j = 0; j < criteriaLengths[i]; j++ ) {
        var max = 26;
          var charIdx = Math.floor( Math.random() * max );
          password.push( alphabet[charIdx] );   
      }
    }
}

// function generateUpperCase() {
//   for( var j = 0; j < criteriaLengths[i]; j++ ) {
//     var max = 26;
//       var charIdx = Math.floor( Math.random() * max );  
//       password.push( alphabet[charIdx].toUpperCase() );
//   }
// }

// function generateNumeric() {

// }

// function generateSpecialChars() {

// }