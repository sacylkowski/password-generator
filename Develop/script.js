// Assignment code here
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericValuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharactersArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// ADD GeneratePassword function
function generatePassword() {

  var lengthCriteria = (Number(prompt("How many characters would you like for your password?")));

  if (lengthCriteria < 8 || lengthCriteria > 128) {
    window.alert("You need to provide a character amount between 8 - 128.")
    return generatePassword();
  }

  if (lengthCriteria >= 8 && lengthCriteria <= 128) {
    window.alert("Password will be " + lengthCriteria + " characters long.");
    lengthCriteria = parseInt(lengthCriteria);
  }

  var upperCase = window.prompt("Would you like to include uppercase letters?");

  if (upperCase === "yes" || upperCase === "Yes" || upperCase === "YES") {
    window.alert("Password will have uppercase letters.");
    // var upperCaseArray = [Math.floor(Math.random() * upperCaseArray.length)];
  }
  if (upperCase === "no" || upperCase === "No" || upperCase === "NO") {
    window.alert("Password will not have uppercase letters.")
  }

  var lowerCase = window.prompt("Would you like to include lowercase letters?")

  if (lowerCase === "yes" || lowerCase === "Yes" || lowerCase === "YES") {
    console.log("Password will have lowercase letters.")
  }
  if (lowerCase === "no" || lowerCase === "No" || lowerCase === "NO") {
    console.log("Password will not have lowercase letters.")
  }

  var numericValues = window.prompt("Would you like to include numeric values?")

  if (numericValues === "yes" || numericValues === "Yes" || numericValues === "YES") {
    console.log("Password will have numbers.")
  }
  if (numericValues === "no" || numericValues === "No" || numericValues === "NO") {
    console.log("Password will not have numbers.")
  }

  var specialCharacters = window.prompt("Would you like to include special characters?")

  if (specialCharacters === "yes" || specialCharacters === "Yes" || specialCharacters === "YES") {
    window.alert("Password will have special characters.")
    // return specialCharactersArray[Math.floor(Math.random() * specialCharactersArray.length)];
  }
  if (specialCharacters === "no" || specialCharacters === "No" || specialCharacters === "NO") {
    window.alert("Password will not have special characters.")

  }

  var password 
}



// return "Password";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
