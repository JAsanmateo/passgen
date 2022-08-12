// Alphanumeric variable assignments
var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numAlpha = "0123456789".split("")
var specialAlpha = ["!", "#", "$", "%", "&", "*", "-", ";", "=", "^", "~", "$"];


console.log(alpha);
console.log(upperAlpha);
console.log(numAlpha);
console.log(specialAlpha);




// Make sure to Assign all variables
// -lowercase
// - uppercase
// {Lower and Uppercase part of the same array}
// - numeric
// - special characters
// {Numeric and Special Characters part of same array}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// *****************************
// All the Code will be down here
// A lot of if-else statements
// ******************************