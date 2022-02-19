// Assignment code here
function promptMe() {
  var lengthCriteria = prompt("How many characters would you like for your password?");
  window.alert (lengthCriteria);

  if (lengthCriteria < 8 || lengthCriteria > 128) {
    window.alert("You need to provide a character amount between 8 - 128.")
    return promptMe();
  }

  var upperCase = prompt("Would you like to include uppercase letters?")
  window.alert (upperCase);

  if (upperCase === "yes" || upperCase === "Yes" || upperCase === "YES") {
   } else {

   }

  var lowerCase = prompt("Would you like to include lowercase letters?")
  window.alert (lowerCase);

  if (lowerCase === "yes" || lowerCase === "Yes" || lowerCase === "YES") {
  } else {
    
  }

  var numericValues = prompt("Would you like to include numeric values?")
  window.alert (numericValues);

  if (numericValues === "yes" || numericValues === "Yes" || numericValues === "YES") {
  } else {
    
  }

  var specialCharacters = prompt("Would you like to include special characters?")
  window.alert (specialCharacters);

  if (specialCharacters === "yes" || specialCharacters === "Yes" || specialCharacters === "YES") {
  } else {
    
  }

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
