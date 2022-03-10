cd // Assignment Code
var generateBtn = document.querySelector("#generate");

// user input variables
var enter;
var confirmNumber;
var confirmCharacters;
var confirmLowercase;
var confirmUppercase;

// password variables
// lowercase characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// uppercase characters
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// numeric characters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// special characters
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// window prompt commands
var passLength = prompt("How many Characters would you like your password to be?  Enter a number between 8 and 128.")
var charLower = prompt("Would you like it to contain lowercase letters? Yes or No?")
var charUpper = prompt("Would you like it to contain uppercase letters? Yes or No?")
var charNumber = prompt("Would you like it to contain any numbers? Yes or No?")
var charSpecial = prompt("Would you like it to contain any special characters? yes or No?")


// start generate password functionality
//function writePassword() 
  
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // ask user input
  enter = parseInt(prompt("How many Characters would you like your password to be?  Enter a number between 8 and 128."));
  // if statement for validation
  if (!enter) {
    alert("this needs a value");
  } else if (enter < 8 || > 128) {
    // validates user input
    enter = parseInt(prompt("YOu must choose between 8 and 128"));

  } else {
    // continues upon user input validation
    confirmNumber = confirm("Would you like this to contain any Numbers?");
    confirmCharacters = confirm("Would you like this to contain any special characters?");
    confirmUppercase = confirm("Would you like this to contain any Uppercase letters?");
    confirmLowercase = confirm("Would you like this to contain any Lowercase letters?");
  }
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
