// Alphanumeric variable assignments
var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numAlpha = "0123456789".split("")
var specialAlpha = ["!", "#", "$", "%", "&", "*", "-", ";", "=", "^", "~", "$"];

var trigger = ("Please select the following criteria");
var lengthTrigger = ("Password length: 8-125");
var charTrigger = ("Now select additional password options")
var errorTrigger = ("Error, Please Start over");
var upperTrigger = ("Uppercase letters in your password?");
var lowerTrigger = ("Lowercase Letters in your password?");
var numTrigger = ("Numbers in your password?");
var specTrigger = ("Special characters in your password?");
var finTrigger = ("Would you like to see your final password?")

var passRange = [];
for (var i = 8; i < 126; i++) {
  passRange.push(i);
}
var passMin = passRange[0];
var passMax = passRange[117];

// // Successfully combined two arrays
// console.log(alpha);
// console.log(upperAlpha);

// var newArray = alpha.concat(upperAlpha);
// console.log(newArray);

// Working function to shuffle elements in an array. 
// function shuffle () {
//   alpha.sort(() => Math.random() - 0.5);
// }

// shuffle(alpha);

// console.log(alpha);


// Assignment Code Variable that selects button div
var generateBtn = document.querySelector("#generate");

// This function generates the password and displays it in window
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // This activates the Prompt boxes
  var start = confirm(trigger); 
  if (start === true) {
    var lengthStart = prompt(lengthTrigger);
  } else if (start !== true) { 
    var lengthStart = prompt(lengthTrigger);
  } else {
    alert(errorTrigger);
  }
  // This ends the Starting Prompt
  
  // This begins the starting point of password length
  if (lengthStart < passMin) {
    alert(errorTrigger);
  } else if (lengthStart > passMax) {
    alert(errorTrigger);
  } else {
    var passLength = [];
    for (var i = 0; i < lengthStart; i++) {
      passLength.push(i);
    }}
    // This ends the Password Length segment. Correct Array Length stored in passLength
  
// This begins the segment to choose characters
var charStart = confirm(charTrigger); 
  if (charStart === true) {
    var upperConfirm = confirm(upperTrigger);
  } else {
    alert(errorTrigger);}  
  
    // Uppercase Confirm section
    if (upperConfirm === true) {
      var upperAdd = passLength.concat(upperAlpha);
      console.log(upperAdd);
      // Replace with code that includes uppercase letters
      var lowerConfirm = confirm(lowerTrigger); 
    } else {
      var lowerConfirm = confirm(lowerTrigger);}
    
      console.log(passLength);
    if (lowerConfirm === true) {
      // Replace with code to include lowercase letters
      alert(passLength);
    } else {
      var numConfirm = confirm(numTrigger);}

//       if (numConfirm === true) {
//         // Replace with code to include numbers
//         alert(passLength);
//       } else {
//         var specConfirm = confirm(specTrigger);
//       }

//       if (specConfirm === true) {
//         // Replace with code to include special characters
//         alert(passLength);
//       } else {
//         var finConfirm = confirm(finTrigger);
//       }

//       if (finConfirm === true) {
//         // Replace to display final password
//         alert(passLength);
//       } else {
//         alert(passLength);
//       }

}







// *****************************
// All the Code will be down here
// A lot of if-else statements
// ******************************