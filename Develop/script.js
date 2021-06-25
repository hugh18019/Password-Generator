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
  var password = createPassword();
  console.log( "Before shuffling, password is: " + password );
  shuffle( password );
  console.log( "After shuffling, password is: " + password );
  return password;
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
  const password = [];
  for( var i = 0; i < criteriaLengths.length; i++ ) {
      if( selectedCriteria[i] == "lowercase" ) {
        for( var j = 0; j < criteriaLengths[i]; j++ ) {
          var max = 26;
            var charIdx = Math.floor( Math.random() * max );
            password.push( alphabet[charIdx] );   
        } 
      }
      else if( selectedCriteria[i] == "uppercase") {
        for( var j = 0; j < criteriaLengths[i]; j++ ) {
          var max = 26;
            var charIdx = Math.floor( Math.random() * max );  
            password.push( alphabet[charIdx].toUpperCase() );
        }
      }
      else if( selectedCriteria[i] == "numeric" ) {
        for( var j = 0; j < criteriaLengths[i]; j++ ) {
          var max = 10;
        var charIdx = Math.floor( Math.random() * max );
        password.push( numbers[charIdx] );
        }
      }
      else if( selectedCriteria[i] == "special characters" ) {
        for( var j = 0; j < criteriaLengths[i]; j++ ) {
          var max = special_characters.length;
        var charIdx = Math.floor( Math.random() * max );
        password.push( special_characters[charIdx] );
        }
      }
  }

  return password;
}

//Create characters one by one.
//When creating each character, randomly choose its criteria
//Repeat this process until we have the required number of characters
function createPassword2() {
  var password = [];
  for( var i = 0; i < totalLength; i++ ) {
    var curCritIdx = randomCrit();
    if( selectedCriteria[curCritIdx] == "lowercase" ) {
      generateLowerCase( curCritIdx, password );
    }
    else if( selectedCriteria[curCritIdx] == "uppercase" ) {
      generateUpperCase( curCritIdx, password );
    }
    else if( selectedCriteria[curCritIdx] == "numeric" ) {
      generateNumeric( curCritIdx, password );
    }
    else {
      generateSpecialChars( curCritIdx, password );
    }
  }
  return password;
}

 //Randomly generate an index that can be used to address an element in selectedCriteria
function randomCrit() {
  var max = selectedCriteria.length;

  var shuffledCriteria = shuffle();

  var critIdx = Math.floor( Math.random() * max );
    // var curCrit = selectedCriteria[  ] critIdx );
  console.log( "The randomly selected category is: " + 
  shuffledCriteria[critIdx] );
  return critIdx;
}

function shuffle( arr ) {
  
  for(var i = arr.length - 1; i > 0; i-- ) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}


//Generate lowercase characters
function generateLowerCase( curCritIdx, password ) {
      var max = 26;
      var charIdx = Math.floor( Math.random() * max );
      password.push( alphabet[charIdx] );   
}

//Generate uppercase characters
function generateUpperCase( curCritIdx, password ) {
    var max = 26;
    var charIdx = Math.floor( Math.random() * max );  
    password.push( alphabet[charIdx].toUpperCase() );
}

//Generate numeric characters
function generateNumeric( curCritIdx, password ) {
    var max = 10;
    var charIdx = Math.floor( Math.random() * max );
    password.push( numbers[charIdx] );
}

//Generate special characters
function generateSpecialChars( curCritIdx, password ) {
    var max = special_characters.length;
    var charIdx = Math.floor( Math.random() * max );
    password.push( special_characters[charIdx] );
}