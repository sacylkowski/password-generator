// Assignment code here
function promptMe() {
  var lengthCriteria = prompt("How many characters would you like for your password?");
  window.alert (lengthCriteria);

  var upperCase = prompt("Would you like to include uppercase letters?")
  window.alert (upperCase);

  var lowerCase = prompt("Would you like to include lowercase letters?")
  window.alert (lowerCase);

  var numericValues = prompt("Would you like to include numeric values?")
  window.alert (numericValues);

  var specialCharacters = prompt("Would you like to include special characters?")
  window.alert (specialCharacters);

}

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
