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
  //window.alert("Would you like to include a special character", "Enter Special Character");
  
  let specialChar = prompt("Would you like to include a special character?", "Enter Y or N");
  
  specialChar = specialChar.toUpperCase() ;
  
  if (specialChar == ("Y")) {
    var addSpecialChar = true;
  }
  else {
    addSpecialChar = false;
  }

  let includeNumber = prompt("Would you like to include a number?", "Enter Y or N");
  
  includeNumber = includeNumber.toUpperCase() ;
  
  if (includeNumber == ("Y")) {
    var addNumber = true;
  }
  else {
    addNumber = false;
  }

  let passwordLength = prompt("Choose password length ", "Enter a number: (At least 8 characters)");
  
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Chose a number between 8 and 128");
    var addLength = false;
  }
  else {
    addLength = addNumber;
  }


  //uppercaseLetter = upperOption[index];

  

  var password = "Your Password is:" + isCaseLetter;
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
