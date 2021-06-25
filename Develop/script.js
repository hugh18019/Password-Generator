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
  if( getLength() == null ) {
    return;
  }

  console.log( "got here 2" );
  getCharTypes();

  getCritLength();

  var password = createPassword();

  //Randomly sorts the password array in two passes
  shuffle( password );
  shuffle( password );

  return password;
}

// Asks the user for the total lenght of the password
function getLength() {
  var length = prompt( "Enter the length between 8 and 128 for the password." );

  while( isNaN( length ) ) {
    length = prompt( "Enter a number for the length of the password." );
  }
  while( length < 8 || length > 128 ) {
    length = prompt( "Enter a length between 8 and 128." );
  }
  totalLength = length;
}

// Asks the user to select the desired criteria of the password
function getCharTypes() {
  for( var key of allCriteria ) {
    var select = confirm( "select " + key + "?" );
    if( select ) {
      selectedCriteria.push( key );
    }
  }
}

// Randomly distribute the total length of the password across each of the selected criterion.
function getCritLength() {
  for( var i = 0; i < selectedCriteria.length; i++ ) {
    // For the 1st criterion, the number of characters is 
    // between 1 and (the total number of characters - the number of the rest of the criteria).
    if( i === 0 ) {
      var criteriaLeft = selectedCriteria.length - 1;
      var maxLength = totalLength - criteriaLeft;
      var length = Math.floor( Math.random() * maxLength + 1 );
      criteriaLengths.push( length );
      lengthSoFar = lengthSoFar + length;
    }
    // For the last criterion, the number of characters 
    // should be ( total number of characters ) - ( number of chars so far )
    else if( i === selectedCriteria.length - 1 ) {
      var length = totalLength - lengthSoFar;
      lengthSoFar = totalLength;
      criteriaLengths.push( length );
    }
    // For all the criteria in between, the number of characters should be 
    // between 1 and 
    // ( the total number of characters - number of chars so far - number of the rest of the criteria )
    else {
      var criteriaLeft = selectedCriteria.length - 1 - i;
      var maxLength = totalLength - lengthSoFar - criteriaLeft;
      var length = Math.floor( Math.random() * maxLength + 1 );
      lengthSoFar = lengthSoFar + length;
      criteriaLengths.push( length );
    }
  }
}

// Creates the password that contains each criterion as 
// a block of characters groupped together
// and returns the password
function createPassword() {
  const password = [];
  for( var i = 0; i < selectedCriteria.length; i++ ) {
      if( selectedCriteria[i] == "lowercase" ) {
         generateLowerCase();
      }
      else if( selectedCriteria[i] == "uppercase") {
        generateUpperCase();
      }
      else if( selectedCriteria[i] == "numeric" ) {
        generateNumeric();
      }
      else if( selectedCriteria[i] == "special characters" ) {
        generateSpecialChars();
      }
  }
  return password;
}


//Randomly sorts the array passed in
function shuffle( arr ) {
  for(var i = arr.length - 1; i > 0; i-- ) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}


//Generates lowercase characters as a group and pushes them onto
// the password array
function generateLowerCase( curCritIdx, password ) {
  for( var j = 0; j < criteriaLengths[i]; j++ ) {
    var max = 26;
    var charIdx = Math.floor( Math.random() * max );
    password.push( alphabet[charIdx] );   
  }  
}

//Generates uppercase characters as a group and pushes them onto
// the password array
function generateUpperCase( curCritIdx, password ) {
  for( var j = 0; j < criteriaLengths[i]; j++ ) {
    var max = 26;
    var charIdx = Math.floor( Math.random() * max );  
    password.push( alphabet[charIdx].toUpperCase() );
  }
}

//Generates numeric characters as a group and pushes them onto
// the password array
function generateNumeric( curCritIdx, password ) {
  for( var j = 0; j < criteriaLengths[i]; j++ ) {
    var max = 10;
    var charIdx = Math.floor( Math.random() * max );
    password.push( numbers[charIdx] );
  }
}

//Generates special characters as a group and pushes them onto
// the password array
function generateSpecialChars( curCritIdx, password ) {
  for( var j = 0; j < criteriaLengths[i]; j++ ) {
    var max = special_characters.length;
    var charIdx = Math.floor( Math.random() * max );
    password.push( special_characters[charIdx] );
  }
}