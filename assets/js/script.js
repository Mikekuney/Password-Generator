//cd // Assignment Code
var generateBtn = document.querySelector("#generate");



// user input variables
var enter;
var confirmNumber;
var confirmCharacters;
var confirmLowercase;
var confirmUppercase;

// password variables
// lowercase characters
lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// uppercase characters
uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// numeric characters
numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// special characters
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

var choices;
// window prompt commands
//var passLength = prompt("How many Characters would you like your password to be?  Enter a number between 8 and 128.")
//var charLower = prompt("Would you like it to contain lowercase letters? Yes or No?")
// var charUpper = prompt("Would you like it to contain uppercase letters? Yes or No?")
// var charNumber = prompt("Would you like it to contain any numbers? Yes or No?")
// var charSpecial = prompt("Would you like it to contain any special characters? yes or No?")


// start generate password functionality
function generatePassword() {
  // ask user input
  enter = parseInt(prompt("How many Characters would you like your password to be?  Enter a number between 8 and 128."));
  // if statement for validation
  if (!enter) {
    alert("this needs a value");
  } else if (enter < 8 || enter > 128) {
    // validates user input
    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    // continues upon user input validation
    confirmNumber = confirm("Would you like this to contain any Numbers?");
    confirmCharacters = confirm("Would you like this to contain any special characters?");
    confirmUppercase = confirm("Would you like this to contain any Uppercase letters?");
    confirmLowercase = confirm("Would you like this to contain any Lowercase letters?");
  }

};

// if for no criteria met
if (!confirmCharacters && !confirmUppercase && !confirmLowercase && !confirmNumber) {
  window.alert("You must choose valid criteria");
}
// else if for 4 options selected
else if (confirmCharacters && confirmUppercase && confirmLowercase && confirmNumber) {

  choices = characters.concat(numeric, lowercase, uppercase);
}
// else if for 3 options selected
else if (confirmCharacters && confirmNumber && confirmUppercase) {
  choices = characters.concat(numeric, uppercase);
}
else if (confirmCharacters && confirmNumber && confirmLowercase) {
  choices = characters.concat(numeric, lowercase);
}
else if (confirmCharacters && confirmLowercase && confirmUppercase) {
  choices = characters.concat(lowercase, uppercase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = numeric.concat(lowercase, uppercase);
}
// else for 2 options selected
else if (confirmCharacters && confirmNumber) {
  choices = characters.concat(numeric);

} else if (confirmCharacters && confirmLowercase) {
  choices = characters.concat(lowercase);

} else if (confirmCharacters && confirmUppercase) {
  choices = characters.concat(uppercase);
}
else if (confirmLowercase && confirmNumber) {
  choices = lowercase.concat(numeric);

} else if (confirmLowercase && confirmUppercase) {
  choices = lowercase.concat(uppercase);

} else if (confirmNumber && confirmUppercase) {
  choices = numeric.concat(uppercase);
}
// Else if 1 option selected
else if (confirmCharacters) {
  choices = characters;
}
else if (confirmNumber) {
  choices = numeric;
}
else if (confirmLowercase) {
  choices = lowercase;
}
else if (confirmUppercase) {
  choices = uppercase;
};


function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;

for (var i = 0; i < choices; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.value(pickChoices);
  
}


}

generateBtn.addEventListener("click", writePassword);

