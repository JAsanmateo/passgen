// Alphanumeric variable assignments
var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numAlpha = "0123456789".split("")
var specialAlpha = ["!", "#", "$", "%", "&", "*", "-", ";", "=", "^", "~", "$"];


console.log(alpha);
console.log(upperAlpha);
console.log(numAlpha);
console.log(specialAlpha);

// Assignment Code Variable that selects button div
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// This is a function that...
// defines variable password which runs a function called generate password
// defines a variable passwordText that selects the text area
// Appends to the text area the value of whatever is written  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

  var promptStart = function showMessage () {
    alert("Please Select Password Criteria");
  }

  // Add event listener to generate button & Generate starter prompt
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", promptStart);





// *****************************
// All the Code will be down here
// A lot of if-else statements
// ******************************