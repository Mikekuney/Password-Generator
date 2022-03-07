// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var characters = ['!', '@', '$', '&']
var length = prompt("How many Characters would you like your password to be?  Enter a number between 8 and 128.")
var charLower = prompt("Would you like it to contain lowercase letters? Yes or No?")
var charUpper = prompt("Would you like it to contain uppercase letters? Yes or No?")
var charNumber = prompt("Would you like it to contain any numbers? Yes or No?")
var charSpecial = prompt("Would you like it to contain any special characters? yes or No?")
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
