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
  
    console.log(passLength);

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
      var lowerConfirm = confirm(lowerTrigger); 
    } else if (upperConfirm !== true) {
      var lowerConfirm = confirm(lowerTrigger);
      console.log(passLength);}
    
// Lowercase Confirm Section
    if (lowerConfirm === true && upperConfirm !== true) {
      var lowerAdd = passLength.concat(alpha);
      console.log(lowerAdd);
    } else if (lowerConfirm === true && upperConfirm === true) {
      var lowerAdd = passLength.concat(alpha);
      console.log(lowerAdd);
      var charCombine = lowerAdd.concat(upperAlpha);
      console.log(charCombine);    
    } else if (lowerConfirm !== true && upperConfirm !== true) {}  
    
    var numConfirm = confirm(numTrigger);
    

    // Numbers confirm Section 
      if (numConfirm === true && lowerConfirm !== true && upperConfirm !== true) {
        var numAdd = passLength.concat(passRange);
        console.log(numAdd);
      } else if (numConfirm === true && lowerConfirm === true && upperConfirm !== true) {
        var numAdd = passLength.concat(passRange);
        var numCombine = numAdd.concat(alpha);
        console.log(numCombine);
      } else if (numConfirm === true && lowerConfirm !== true && upperConfirm === true) {
        var numAdd = passLength.concat(passRange);
        var numCombine = numAdd.concat(upperAlpha);
        console.log(numCombine);
      } else if (numConfirm === true && lowerConfirm === true && upperConfirm === true) {
        var numAdd = passLength.concat(passRange);
        var charAdd = numAdd.concat(upperAlpha);
        var numCombine = charAdd.concat(alpha);
        console.log(numCombine);
        var specConfirm = confirm(specTrigger);
      } else if (numConfirm !== true && lowerConfirm !== true && upperConfirm !== true) {}
      
      var specConfirm = confirm(specTrigger)

// Special Characters confirm section
      if (specConfirm === true && numConfirm !== true && lowerConfirm !== true && upperConfirm !== true) {
        var specAdd = passLength.concat(specialAlpha);
        console.log(specAdd);
        // all the two are true Scenarios
      } else if (specConfirm === true && numConfirm === true && lowerConfirm !== true && upperConfirm !== true) {
        var specAdd = passLength.concat(specialAlpha);
        var specCombine = specAdd.concat(passRange);
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm !== true && lowerConfirm === true && upperConfirm !== true) {
        var specAdd = passLength.concat(specialAlpha);
        var specCombine = specAdd.concat(alpha); 
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm !== true && lowerConfirm !== true && upperConfirm === true) {
        var specAdd = passLength.concat(specialAlpha);
        var specCombine = specAdd.concat(upperAlpha); 
        console.log(specCombine);
        // Three are true Scenarios
      } else if (specConfirm === true && numConfirm === true && lowerConfirm === true && upperConfirm !== true) {
        var specAdd = passLength.concat(specialAlpha);
        var numCombine = specAdd.concat(passRange);
        var specCombine = numCombine.concat(alpha); 
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm === true && lowerConfirm !== true && upperConfirm === true) {
        var specAdd = passLength.concat(specialAlpha);
        var numCombine = specAdd.concat(passRange);
        var specCombine = numCombine.concat(upperAlpha); 
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm !== true && lowerConfirm === true && upperConfirm === true) {
        var specAdd = passLength.concat(specialAlpha);
        var charCombine = specAdd.concat(alpha);
        var specCombine = numCombine.concat(upperAlpha); 
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm === true && lowerConfirm === true && upperConfirm === true) {
        var specAdd = passLength.concat(specialAlpha);
        var numCombine = specAdd.concat(passRange);
        var low
        var specCombine = numCombine.concat(alpha); 
        console.log(specCombine);}

    
      var finConfirm = confirm(finTrigger);

      
      
//This is where we formulate our final password 
      // if (finConfirm === true) {
      //   // Replace to display final password
      //   alert(passLength);
      // } else {
      //   alert(passLength);
      // }

}







// *****************************
// All the Code will be down here
// A lot of if-else statements
// ******************************