// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();

  var passwordText = document.querySelector("#password");
  var count = 0;

  while (count == 0) {
    let isCaseLetter = prompt("Would you like to include and upercase letter?", "Enter Y or N");

    isCaseLetter = isCaseLetter.toUpperCase() ;
    
    if (isCaseLetter == ("Y")) {
      var addUppercase = true;
      count = 1;
    }
    else if (isCaseLetter== ("N")) {
      addUppercase = false;
      count = 1;
    }
    else {
      alert("Enter Y or N");
    }
  }
  
  while (count == 1) {
    let specialChar = prompt("Would you like to include a special character?", "Enter Y or N");
    
    specialChar = specialChar.toUpperCase() ;
    
    if (specialChar == ("Y")) {
      var addSpecialChar = true;
      count = 2;
    }
    else if (specialChar== ("N")) {
      addSpecialChar = false;
      count = 2;
    }
    else {
      alert("Enter Y or N");
    }
  }

  while (count == 2) {
    let includeNumber = prompt("Would you like to include a number?", "Enter Y or N");
    
    includeNumber = includeNumber.toUpperCase() ;
    
    if (includeNumber == ("Y")) {
      var addNumber = true;
      count = 3;
    }
    else if (includeNumber == ("N")) {
      addNumber = false;
      count = 3;
    }
    else {
      alert("Enter Y or N");
    }
  }

  while (count == 3) {
    let passwordLength = prompt("Choose password length ", "Enter a number: (At least 8 characters)");
    
    if ((passwordLength > 7) && (passwordLength < 129)) {
      addLength = passwordLength;
      count = 4;
    }
    else {
      alert("Chose a number between 8 and 128");
    }
  }

  var password = "Your Password is:" + addLength;
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
