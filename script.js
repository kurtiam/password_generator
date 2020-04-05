// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateIt() {
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

  length = prompt("How many characters should the password be?");

  // while loop to get passwaord size between 8 - 128 chars
  // if user choice is wrong  2x;  Will auto set password size closest to user choice 

  while ((length <= 7) || (length > 128)) {
    length = prompt("Password Size must be between 8 - 128. You selected " + length + ". Try again");
    passrequire = true;
    break;
  }

  if (length < 8) {
    length = 8;
    passrequire = false;
    alert("Password size requirements not met. Password size was set to the minimum of 8 for you");
  }
  if (length > 128) {
    length = 128;
    passrequire = false;
    totalChar = alert("Password size requirements not met. Password size was set to the maximum of 128 for you");
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

    alert("Password requirements.  Please select at least ONE character type of uppercase, lowercase, nubmer, or special character selection. The more types chosen the stronger the password");
    lower = confirm("Include lowercase in password?");
    upper = confirm("Include uppercase in password?");
    special = confirm("Include special characters in password?");
    number = confirm("Include numbers in password?");
    charType();
  }

  // generate the password

  function makeItNow() {
    for (let i = 0; i < length; i++) {
      userPassword += totalChar.charAt(
        Math.floor(Math.random() * totalChar.length)
      );
    }
  }
  makeItNow();

  //Start Debug

  console.log("Password size requirements met: " + passrequire + " -  (If false, size was set automatically to meet size requirements)");
  console.log("Password length: " + length);
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
