//cd // Assignment Code
//var generateBtn = document.querySelector("#generate");
// user input variables
var enter;
var confirmNumber;
var confirmCharacters;
var confirmLowercase;
var confirmUppercase;

// password variables
// lowercase characters
alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// numeric characters
numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// special characters
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// start generate password functionality
function generatePassword() {
  // ask user input
  enter = parseInt(prompt("How many Characters would you like your password to be?  Enter a number between 8 and 128."));
  // if statement for validation
  if (!enter) {
    alert("this needs a value");
  } else if (enter < 8 || enter > 128) {
    // validates user input
    // starts user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    // continues upon user input validation
    confirmNumber = confirm("Would you like this to contain any Numbers?");
    confirmCharacters = confirm("Would you like this to contain any special characters?");
    confirmUppercase = confirm("Would you like this to contain any Uppercase letters?");
    confirmLowercase = confirm("Would you like this to contain any Lowercase letters?");
  };

  // if for no criteria met
  if (!confirmCharacters && !confirmUppercase && !confirmLowercase && !confirmNumber) {
    choices = alert("You must choose valid criteria!");
  }
  // First if statement that uses user input prompts to determine choices
  // else if for 4 options selected
  else if (confirmCharacters && confirmUppercase && confirmLowercase && confirmNumber) {
    choices = characters.concat(numeric, alpha, alpha2);
  }
  // else if for 3 options selected
  else if (confirmCharacters && confirmNumber && confirmUppercase) {
    choices = characters.concat(numeric, alpha2);
  }
  else if (confirmCharacters && confirmNumber && confirmLowercase) {
    choices = characters.concat(numeric, alpha);
  }
  else if (confirmCharacters && confirmLowercase && confirmUppercase) {
    choices = characters.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = numeric.concat(alpha, alpha2);
  }
  // else for 2 options selected
  else if (confirmCharacters && confirmNumber) {
    choices = characters.concat(numeric);

  } else if (confirmCharacters && confirmLowercase) {
    choices = characters.concat(alpha);

  } else if (confirmCharacters && confirmUppercase) {
    choices = characters.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(numeric);

  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
    choices = numeric.concat(alpha2);
  }
  // Else if 1 option selected
  else if (confirmCharacters) {
    choices = characters;
  }
  else if (confirmNumber) {
    choices = numeric;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };

  var password = [];

  // Start random selection variables:
  // Random selection for all variables:
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // Joins password array and converts to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// Puts password value into textbox
// Changed text input use text content
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}


generateBtn.addEventListener("click", writePassword);