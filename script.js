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
      // var upperAdd = passLength.concat(upperAlpha);
        var upperAdd = [...upperAlpha,...upperAlpha,...upperAlpha,...upperAlpha,...upperAlpha];     
      console.log(upperAdd);
      var lowerConfirm = confirm(lowerTrigger); 
    } else if (upperConfirm !== true) {
      var lowerConfirm = confirm(lowerTrigger);
      console.log(passLength);}
    
// Lowercase Confirm Section
    if (lowerConfirm === true && upperConfirm !== true) {
      var lowerAdd = [...alpha,...alpha,...alpha,...alpha,...alpha];
      console.log(lowerAdd);
    } else if (lowerConfirm === true && upperConfirm === true) {
      var lowerAdd = [...alpha,...upperAlpha,...alpha,...upperAlpha,...alpha];
      console.log(lowerAdd);}    
    
    var numConfirm = confirm(numTrigger);
    

    // Numbers confirm Section 
      if (numConfirm === true && lowerConfirm !== true && upperConfirm !== true) {
        var numAdd = passLength.concat(passRange);
        console.log(numAdd);
      } else if (numConfirm === true && lowerConfirm === true && upperConfirm !== true) {
        var numCombine = [...passRange,...alpha,...alpha,...alpha];
        console.log(numCombine);
      } else if (numConfirm === true && lowerConfirm !== true && upperConfirm === true) {
        var numCombine = [...passRange,...upperAlpha,...upperAlpha,...upperAlpha];
        console.log(numCombine);
      } else if (numConfirm === true && lowerConfirm === true && upperConfirm === true) {
        var numCombine = [...passRange,...alpha,...upperAlpha,...alpha,...upperAlpha];
        console.log(numCombine);} 
      
        var specConfirm = confirm(specTrigger)

// Special Characters confirm section
      if (specConfirm === true && numConfirm !== true && lowerConfirm !== true && upperConfirm !== true) {
        var specAdd = [...specialAlpha,...specialAlpha,...specialAlpha,...specialAlpha,...specialAlpha,...specialAlpha,...specialAlpha,...specialAlpha,...specialAlpha,...specialAlpha,...specialAlpha];
        console.log(specAdd);
        // all the two are true Scenarios
      } else if (specConfirm === true && numConfirm === true && lowerConfirm !== true && upperConfirm !== true) {
        var specAdd = passLength.concat(specialAlpha);
        var specCombine = specAdd.concat(passRange);
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm !== true && lowerConfirm === true && upperConfirm !== true) {
        var specCombine = [...specialAlpha, ...alpha,...specialAlpha,...alpha,...specialAlpha]; 
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm !== true && lowerConfirm !== true && upperConfirm === true) {
        var specCombine =[...specialAlpha, ...upperAlpha,...specialAlpha,...upperAlpha,...specialAlpha]; 
        console.log(specCombine);
        // Three are true Scenarios
      } else if (specConfirm === true && numConfirm === true && lowerConfirm === true && upperConfirm !== true) {
        var specAdd = passLength.concat(specialAlpha);
        var numCombine = specAdd.concat(passRange);
        var specCombine = numCombine.concat(alpha); 
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm === true && lowerConfirm !== true && upperConfirm === true) {
        var specCombine = [...passRange,...specialAlpha,...upperAlpha,...specialAlpha,...upperAlpha]; 
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm !== true && lowerConfirm === true && upperConfirm === true) {
        var specCombine = [...passRange,...alpha,...upperAlpha,...upperAlpha,...alpha]; 
        console.log(specCombine);
      } else if (specConfirm === true && numConfirm === true && lowerConfirm === true && upperConfirm === true) {
        var specAdd = passLength.concat(specialAlpha);
        var numCombine = specAdd.concat(passRange);
        var lowerCombine = numCombine.concat(alpha);
        var specCombine = lowerCombine.concat(upperAlpha); 
        console.log(specCombine);}
        
        confirm(finTrigger);
        if (upperConfirm === true && numConfirm !== true && lowerConfirm !== true && specConfirm !== true) {
          var randomize = upperAdd
          randomize.sort(() => Math.random() - 0.5)
          console.log(randomize) 
          password = randomize.splice(0,passLength.length);
        alert(password);     
        } else if (upperConfirm !== true && numConfirm !== true && lowerConfirm === true && specConfirm !== true) {
          var randomize = lowerAdd
          randomize.sort(() => Math.random() - 0.5)
          console.log(randomize) 
          password = randomize.splice(0,passLength.length);
        alert(password);     
        } else if (upperConfirm !== true && numConfirm === true && lowerConfirm !== true && specConfirm !== true) {
          var randomize = numAdd
          randomize.sort(() => Math.random() - 0.5)
          console.log(randomize) 
          password = randomize.splice(0,passLength.length);
        alert(password);
        } else if (upperConfirm !== true && numConfirm !== true && lowerConfirm !== true && specConfirm === true) {
    var randomize = specAdd
    randomize.sort(() => Math.random() - 0.5)
    console.log(randomize) 
    password = randomize.splice(0,passLength.length);
  alert(password);
        } else if (upperConfirm === true && numConfirm !== true && lowerConfirm === true && specConfirm !== true) {
          var randomize = lowerAdd
          randomize.sort(() => Math.random() - 0.5)
          console.log(randomize) 
          password = randomize.splice(0,passLength.length);
        alert(password);
      } else if (upperConfirm !== true && numConfirm === true && lowerConfirm === true && specConfirm !== true) {
        var randomize = numCombine
        randomize.sort(() => Math.random() - 0.5)
        console.log(randomize) 
        password = randomize.splice(0,passLength.length);
      alert(password);
      } else if (upperConfirm === true && numConfirm === true && lowerConfirm !== true && specConfirm !== true) {
        var randomize = numCombine
        randomize.sort(() => Math.random() - 0.5)
        console.log(randomize) 
        password = randomize.splice(0,passLength.length);
      alert(password);
      } else if (upperConfirm === true && numConfirm === true && lowerConfirm === true && specConfirm !== true) {
        var randomize = numCombine
        randomize.sort(() => Math.random() - 0.5)
        console.log(randomize) 
        password = randomize.splice(0,passLength.length);
      alert(password);
    } else if (upperConfirm !== true && numConfirm === true && lowerConfirm !== true && specConfirm === true) {
      var randomize = specCombine;
      randomize.sort(() => Math.random() - 0.5)
      console.log(randomize) 
      password = randomize.splice(0,passLength.length);
    alert(password);
    } else if (upperConfirm !== true && numConfirm !== true && lowerConfirm === true && specConfirm === true) {
      var randomize = specCombine;
      randomize.sort(() => Math.random() - 0.5)
      console.log(randomize) 
      password = randomize.splice(0,passLength.length);
    alert(password);
    } else if (upperConfirm === true && numConfirm !== true && lowerConfirm !== true && specConfirm === true) {
      var randomize = specCombine;
      randomize.sort(() => Math.random() - 0.5)
      console.log(randomize) 
      password = randomize.splice(0,passLength.length);
    alert(password);
    } else if (upperConfirm !== true && numConfirm === true && lowerConfirm === true && specConfirm === true) {
      var randomize = specCombine;
      randomize.sort(() => Math.random() - 0.5)
      console.log(randomize) 
      password = randomize.splice(0,passLength.length);
    alert(password);
    } else if (upperConfirm === true && numConfirm === true && lowerConfirm !== true && specConfirm === true) {
      var randomize = specCombine;
      randomize.sort(() => Math.random() - 0.5)
      console.log(randomize) 
      password = randomize.splice(0,passLength.length);
    alert(password);
    } else if (upperConfirm === true && numConfirm !== true && lowerConfirm === true && specConfirm === true) {
      var randomize = specCombine;
      randomize.sort(() => Math.random() - 0.5)
      console.log(randomize) 
      password = randomize.splice(0,passLength.length);
    alert(password);
    } else if (upperConfirm === true && numConfirm === true && lowerConfirm === true && specConfirm === true) {
      var randomize = specCombine;
      randomize.sort(() => Math.random() - 0.5)
      console.log(randomize) 
      password = randomize.splice(0,passLength.length);
    alert(password);}

}







// *****************************
// All the Code will be down here
// A lot of if-else statements
// ******************************