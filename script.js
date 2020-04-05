// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateIt() {
  charLength = "";
  status = "";
  userPassword = "";
  totalChar = "";
  passrequire = "";
  charArr = {
    "lower": "abcdefghijklmnopqrstuvwxyz",
    "upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "number": "0123456789",
    "special": "!#$%&()*+-/<=>?@"
  }

  // password size input

  charLength = prompt("How many characters should the password be? (Password size must be between 8 - 128 characters)");

  // while loop to get passwaord size between 8 - 128 chars
  // if user choice is wrong  2x;  Will auto set password size closest to user choice 

  while ((charLength <= 7) || (charLength > 128)) {
    charlength = prompt("Password Size must be between 8 - 128. You selected " + charLength + ". Try again");
    passrequire = true;
    break;
  }

  if (charLength < 8) {
    charLength = 8;
    passrequire = false;
    alert("Password size requirements not met. Password size was set to the minimum of 8 for you");

  }

  if (charLength >= 129) {
    charLength = 128;
    passrequire = false;
    alert("Password size requirements not met. Password size was set to the maximum of 128 for you");

  }

  // function to combine char requiremnets to one variable

  function charType() {

    if (lower === true) {
      totalChar += charArr.lower;
    }
    if (upper === true) {
      totalChar += charArr.upper;
    }

    if (special === true) {
      totalChar += charArr.special;
    }

    if (number === true) {
      totalChar += charArr.number;
    }

  }

  //while loop to ensure charType requirments are met 

  while (totalChar.length === 0) {

    alert("When asked please select at least ONE or more character types of uppercase letters, lowercase letters, nubmers, or special characters. The more types chosen the stronger the password");
    lower = confirm("Include lowercase letters in password?");
    upper = confirm("Include uppercase letters in password?");
    special = confirm("Include special characters in password?");
    number = confirm("Include numbers in password?");
    charType();
  }

  // generate the password

  function makeItNow() {
    for (let i = 0; i < charLength; i++) {
      userPassword += totalChar.charAt(
        Math.floor(Math.random() * totalChar.length)
      );
    }
  }
  makeItNow();

  //Start Debug

  console.log("Password size requirements met: " + passrequire + " -  (If false, size was set automatically to meet size requirements)");
  console.log("Password length: " + charLength);
  console.log("Include lower: " + lower);
  console.log("Include upper: " + upper);
  console.log("Include number:" + number);
  console.log("Include special: " + special);
  // console.log("Available lower: " + charArr.lower);
  // console.log("Available upper  " + charArr.upper);
  // console.log("Available numbers  " + charArr.number);
  // console.log("Available special: " + charArr.special);
  console.log("Password made from: " + totalChar);
  console.log("Password is: " + userPassword);
  console.log("-------------------------------");

  //End debug
}

// Write password to the #password input
function writePassword() {
  var password = generateIt();
  var passwordText = document.querySelector("#password");

  passwordText.value = userPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
