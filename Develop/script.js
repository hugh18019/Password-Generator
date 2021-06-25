
// Array that holds all the criteria to choose from
const allCriteria = [ "lowercase", "uppercase", "numeric", "special characters"];

// The database for each character in the password to choose from
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var special_characters = ' !"#$%& ' + ' ()*+,-./:;<=>?@[\]^_`{|}~ ';

// Empty array for storing the criteria selected by the user
const selectedCriteria = [];
// Empty array for storing the randomly assigned length for each criteria
const criteriaLengths = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

function clearPassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

clearBtn.addEventListener("click", clearPassword);

// Gets the length of the password from the user
// Gets the criteria selected by the user
// Calculates the random number of characters for each selected criteria
// Creates the password that satisfies the criteria
// Randomly shuffles the created password 
// Returns the shuffled password
function generatePassword() {
// Variable that stores the length of the password
var totalLength = 0;
// Variable that stores the current total number of characters assigned 
// to the criteria
var lengthSoFar = 0;

  totalLength = getLength();
  // If totalLength is null, which is the case when the user clicks cancel
  // during the prompt, the program exits.
  if( totalLength == null ) {
    return;
  }

  // Gets criteria from user
  getCriteria();
  // Randomly assign character lengths to each criterion
  getCritLength( totalLength, lengthSoFar );
  // Creates the password per the requirement of the user
  var password = createPassword();

  //Randomly sorts the password array in two passes, so that 
  //characters of the same criterion do not always appear right
  //next to each other
  shuffle( password );
  shuffle( password );

  return password;
}

// Asks the user for the total lenght of the password
// and returns the input from the user
function getLength() {
  var length = prompt( "Enter the length between 8 and 128 for the password." );
  //During the prompt, if the user clicks cancel the generating process 
  //is terminated
  if( length == null ) {
    return null;
  }
  //During the prompt, if the user input is anything other than numbers,
  //the application keeps prompting the user to enter a number, until 
  //the user enters a number or clicks cancel
  while( isNaN( length ) ) {
    length = prompt( "Enter a number for the length of the password." );
    if( length == null ) {
      return null;
    }
  }
  //During the prompt, if the user input is not between 8 and 128, 
  //the application keeps prompting the user to enter a number 
  // inside this range, until the user does so or clicks cancel
  while( length < 8 || length > 128 ) {
    length = prompt( "Enter a length between 8 and 128." );
    if( length == null ) {
      return null;
    }
  }
  return length;
}

// Asks the user to select the desired criteria of the password
function getCriteria() {
  for( var key of allCriteria ) {
    var select = confirm( "select " + key + "?" );
    if( select == true ) {
      selectedCriteria.push( key );
    }
  }
}

// Randomly distribute the total length of the password across each of the selected criterion.
function getCritLength( totalLength, lengthSoFar ) {
  // When only one criteria is selected, every character in the password
  // should match that criteria
  if( selectedCriteria.length == 1 ) {
    criteriaLengths.push(totalLength);
  }
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
         generateLowerCase( i, password );
      }
      else if( selectedCriteria[i] == "uppercase") {
        generateUpperCase( i, password );
      }
      else if( selectedCriteria[i] == "numeric" ) {
        generateNumeric( i, password );
      }
      else if( selectedCriteria[i] == "special characters" ) {
        generateSpecialChars( i, password );
      }
  }
  return password;
}


// Randomly sorts the array passed in
// This is the Fisher-Yates Algorithm for randomizing/shuffling an array
function shuffle( arr ) {
  for(var i = arr.length - 1; i > 0; i-- ) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}


// Generates lowercase characters as a group and pushes them onto
// the password array
// The parameter curCritIdx is used to index address the corresponding 
// element of the criteriaLengths array, or the corresponding length 
// assigned to that criteria 
function generateLowerCase( curCritIdx, password ) {
  for( var j = 0; j < criteriaLengths[curCritIdx]; j++ ) {
    var max = 26;
    var charIdx = Math.floor( Math.random() * max );
    password.push( alphabet[charIdx] );   
  }  
}

// Generates uppercase characters as a group and pushes them onto
// the password array
// The parameter curCritIdx is used to index address the corresponding 
// element of the criteriaLengths array, or the corresponding length 
// assigned to that criteria 
function generateUpperCase( curCritIdx, password ) {
  console.log( selectedCriteria );
  for( var j = 0; j < criteriaLengths[curCritIdx]; j++ ) {
    var max = 26;
    var charIdx = Math.floor( Math.random() * max );  
    password.push( alphabet[charIdx].toUpperCase() );
  }
}

// Generates numeric characters as a group and pushes them onto
// the password array
// The parameter curCritIdx is used to index address the corresponding 
// element of the criteriaLengths array, or the corresponding length 
// assigned to that criteria 
function generateNumeric( curCritIdx, password ) {
  for( var j = 0; j < criteriaLengths[curCritIdx]; j++ ) {
    var max = 10;
    var charIdx = Math.floor( Math.random() * max );
    password.push( numbers[charIdx] );
  }
}

// Generates special characters as a group and pushes them onto
// the password array
// The parameter curCritIdx is used to index address the corresponding 
// element of the criteriaLengths array, or the corresponding length 
// assigned to that criteria 
function generateSpecialChars( curCritIdx, password ) {
  for( var j = 0; j < criteriaLengths[curCritIdx]; j++ ) {
    var max = special_characters.length;
    var charIdx = Math.floor( Math.random() * max );
    password.push( special_characters[charIdx] );
  }
}