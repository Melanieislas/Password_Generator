// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();

  var passwordText = document.querySelector("#password");
  var count = 0;

  //while loop checking for uppercase letters in password
    while (count == 0) {
      let isUppercaseLetter = prompt("Would you like to include and uppercase letter?", "Enter Y or N");

      isUppercaseLetter = isUppercaseLetter.toUpperCase() ;
        
      if (isUppercaseLetter == ("Y")) {
        var addUppercase = true;
        count = count + 1;
      }
      else if (isUppercaseLetter== ("N")) {
        addUppercase = false;
        count = count +1;
      }
      else {
        alert("Enter Y or N");
      }
    }

    //while loop checking for lowercase letters in password
    while (count == 1) {
      let isLowercaseLetter = prompt("Would you like to include and lowercase letter?", "Enter Y or N");

      isLowercaseLetter = isLowercaseLetter.toUpperCase() ;
        
      if (isLowercaseLetter == ("Y")) {
        var addLowercase = true;
        count = count + 1;
      }
      else if (isLowercaseLetter== ("N")) {
        addLowercase = false;
        count = count + 1;
      }
      else {
        alert("Enter Y or N");
      }
    }
    
    //while loop checking for special characters in password
    while (count == 2) {
      let specialChar = prompt("Would you like to include a special character?", "Enter Y or N");
        
      specialChar = specialChar.toUpperCase() ;
        
      if (specialChar == ("Y")) {
        var addSpecialChar = true;
        count = count + 1;
      }
      else if (specialChar== ("N")) {
        addSpecialChar = false;
        count = count + 1;
      }
      else {
        alert("Enter Y or N");
      }
    }

    //while loop checking for numbers in password
    while (count == 3) {
      let includeNumber = prompt("Would you like to include a number?", "Enter Y or N");
        
      includeNumber = includeNumber.toUpperCase() ;
        
      if (includeNumber == ("Y")) {
        var addNumber = true;
        count = count + 1;
      }
      else if (includeNumber == ("N")) {
        addNumber = false;
        count = count + 1;
      }
      else {
        alert("Enter Y or N");
      }
    }


  //while loop asking user how many characters in password from 8 to 128
  while (count == 4) {
    let passwordLength = prompt("Choose password length ", "Enter a number: (At least 8 characters)");
    
    if ((passwordLength > 7) && (passwordLength < 129)) {
      addLength = passwordLength;
      count = count + 1 ;
    }
    else {
      alert("Choose a number between 8 and 128");
    }
  }

  //setting constants and possible characters
  const upperCaseletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseletter = "abcdefghijklmnopqrstuvwxyz";
  const chooseChars = "!@#$%^&*_-+=";
  const chooseNumbers = "0123456789";
  var password ="";

  //iteration looking to see if the characters will be upper, lower, special or number
  for (var i = 0; i <= addLength; i++) {
    if((addUppercase) && (addLowercase) && (addSpecialChar) && (addNumber)){
      var charascters = upperCaseletter + lowerCaseletter + chooseChars + chooseNumbers;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addUppercase) && (addLowercase) && (addSpecialChar)) {
      var characters = upperCaseletter + lowerCaseletter + chooseChars;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addUppercase) && (addLowercase) && (addNumber)) {
      var characters = upperCaseletter + lowerCaseletter + chooseNumbers;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addNumber) && (addLowercase) && (addSpecialChar)) {
      var characters = chooseNumbers + lowerCaseletter + chooseChars;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addNumber) && (addUppercase) && (addSpecialChar)) {
      var characters = chooseNumbers + upperCaseletter + chooseChars;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addUppercase) && (addLowercase)) {
      var characters = upperCaseletter + lowerCaseletter;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addLowercase) && (addSpecialChar)) {
      var characters = lowerCaseletter + chooseChars;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addLowercase) && (addNumber)) {
      var characters = lowerCaseletter + chooseNumbers;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addSpecialChar) && (addUppercase)) {
      var characters = chooseChars + upperCaseletter;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addSpecialChar) && (addNumber)) {
      var characters = chooseChars + chooseNumbers;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addUppercase) && (addNumber)) {
      var characters = upperCaseletter + chooseNumbers;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addUppercase)) {
      var characters = upperCaseletter;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addLowercase)) {
      var characters = lowerCaseletter;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addSpecialChar)) {
      var characters = chooseChars;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
    else if ((addNumber)) {
      var characters = chooseNumbers;
      var randomPassword = Math.floor(Math.random()*characters.length);
      password += characters.substring(randomPassword, randomPassword +1);
    }
  }
  randomPassword= password;

  passwordText.value =password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
