// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '<', '>'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



// use prompts for user to select the password they want
  function questions() {
    var isValid = false;
    do {
      // choose lowercase, uppercase, numeric, &/or special characters  
      var length = prompt("Choose your passwords length, this needs to be between 8 and 128 characters");
      var askNumbers = confirm("Does your password include numbers?");
      var askSpecialCharacters = confirm("Does your password include special characters?");
      var askUppercase = confirm("Does your password include uppercase characters?");
      var askLowercase = confirm("Does your password include lowercase characters?");
      var response = {
        length: length,
        askNumbers: askNumbers,
        askSpecialCharacters: askSpecialCharacters,
        askUppercase: askUppercase,
        askLowercase: askLowercase
      }
      if((length < 8) || (length > 128 ))
      alert("Password needs at least 8 characters, but no more than 128!");
      else if((!askNumbers)&&(!askLowercase)&&(!askUppercase)&&(!askSpecialCharacters))
      alert("Must choose at least one!");
      else
    // validate the input
    // if the ok button is clicked, result will be true (boolean) ok (yes) cancel (no)

      isValid = true;
    }
    while(!isValid);
    return response;
  }

  // password is generated to match criteria
  function generatePassword() {
    var passwordOptions = questions();
    var possibleCombo = [];
    var finalPassword = "";

    if(passwordOptions.askNumbers) {
      for(var i of numbers)
      possibleCombo.push(i);
    }
    if(passwordOptions.askSpecialCharacters) {
      for(var i of specialCharacters)
      possibleCombo.push(i);
    }
    if(passwordOptions.askLowercase) {
      for(var i of lowercase)
      possibleCombo.push(i);
    }
    if(passwordOptions.askUppercase) {
      for(var i of uppercase)
      possibleCombo.push(i);
    }
    console.log(possibleCombo);

    for (var i = 0; i < passwordOptions.length; i++) {
      finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];

    }
      
  // display password to page or alert
    console.log(finalPassword);
    return finalPassword;
  }

// Write password to the #password textarea
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.vale = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
