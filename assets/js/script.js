// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '<', '>'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Write password to the #password textarea

// 1. use prompts for user to select the password they want
  function questions() {
    var isValid = false;
    do {
      var length = prompt("Choose your passwords length, this needs to be between 8 and 128 characters");
      var askNumbers = confirm("Does your password include numbers?");
      var askSpecialCharacters = confirm("Does your password include special characters?");
      var askUppercase = confirm("")
    }
  }
  //    b. choose lowercase, uppercase, numeric, &/or special characters  

  // if the ok button is clicked, result will be true (boolean) ok (yes) cancel (no)

  // 2. validate the input

  // 3. password is generated to match criteria
  
  
  // 4. display password to page or alert


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
