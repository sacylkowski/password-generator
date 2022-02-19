// Assignment code here
function promptMe() {
  var lengthCriteria = prompt("How many characters would you like for your password?");
  window.alert(lengthCriteria);

  if (lengthCriteria < 8 || lengthCriteria > 128) {
    window.alert("You need to provide a character amount between 8 - 128.")
    return promptMe();
  }

  if (lengthCriteria >= 8 && lengthCriteria <=128) {
    console.log("Password is " + lengthCriteria + " characters long.");
  }

  var upperCase = prompt("Would you like to include uppercase letters?")
  window.alert(upperCase);

  if (upperCase === "yes" || upperCase === "Yes" || upperCase === "YES") {
    console.log("Password will have uppercase letters.")
  }
  if (upperCase === "no" || upperCase === "No" || upperCase === "NO") {
    console.log("Password will not have uppercase letters.")
  }
    var lowerCase = prompt("Would you like to include lowercase letters?")
    window.alert(lowerCase);

    if (lowerCase === "yes" || lowerCase === "Yes" || lowerCase === "YES") {
      console.log("Password will have lowercase letters.")
    }
    if (lowerCase === "no" || lowerCase === "No" || lowerCase === "NO") {
      console.log("Password will not have lowercase letters.")
    }
      var numericValues = prompt("Would you like to include numeric values?")
      window.alert(numericValues);

      if (numericValues === "yes" || numericValues === "Yes" || numericValues === "YES") {
        console.log("Password will have numbers.")
      }
      if (numericValues === "no" || numericValues === "No" || numericValues === "NO") {
        console.log("Password will not have numbers.")
      }
        var specialCharacters = prompt("Would you like to include special characters?")
        window.alert(specialCharacters);

        if (specialCharacters === "yes" || specialCharacters === "Yes" || specialCharacters === "YES") {
          console.log("Password will have special characters.")
        }
        if (specialCharacters === "no" || specialCharacters === "No" || specialCharacters === "NO") {
          console.log("Password will not have special characters.")

        }
        }

        // Get references to the #generate element
        var generateBtn = document.querySelector("#generate");

        // Write password to the #password input
        function writePassword() {
          // var password = generatePassword();
          // var passwordText = document.querySelector("#password");

          // passwordText.value = password;
          promptMe();

        }

        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);
