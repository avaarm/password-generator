
// Start creating the variables that will be used in the alerts/ questions
var answer;
var answerNumber;
var answerCharacter;
var answerUppercase;
var answerLowercase;


// A list of values the program has to go through in order to generate a random password 
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Upper and lower case letters
lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// a variable that will be used to add the various selections/ criteria chosen by user
var choices;

// Start function to generate password
function generatePassword() {
    // Asks for user input
    answer = parseInt(prompt("Please choose the length of your password (between 8 and 128)"));
    // If the answer is between 8 and 128, the following alert will be printed
    if (!answer) {
        alert("This needs a value");
    // If the answer is not between 8 and 128, the following alert will be printed
    } else if (answer< 8 || answer> 128) {
        answer = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // The rest of the questions will be asked 
        answerNumber = confirm("Will this contain numbers? (Press Ok for Yes or Cancel for No)");
        answerCharacter = confirm("Will this contain special characters? (Press Ok for Yes or Cancel for No)");
        answerUppercase = confirm("Will this contain Uppercase letters? (Press Ok for Yes or Cancel for No)");
        answerLowercase = confirm("Will this contain Lowercase letters? (Press Ok for Yes or Cancel for No)");
    };
    // If nothing gets answered
    if (!answerCharacter && !answerNumber && !answerUppercase && !answerLowercase){
      choices =alert("You need to answer at least one of the questions");
    }
    // First if statement that uses user input prompts to determine choices
    // Else if for all options chosen
    // Concatanation will be used to add the Numbers 
    else if (answerCharacter && answerNumber && answerUppercase && answerLowercase) {
        choices = character.concat(number, upperLetters, lowerLetters);
    }

    // Else if possible combinations of 3 answers
    else if (answerCharacter && answerNumber && answerUppercase) {
        choices = character.concat(number, upperLetters);
    }
    else if (answerCharacter && answerNumber && answerLowercase) {
        choices = character.concat(number, lowerLetters);
    }
    else if (answerCharacter && answerLowercase && answerUppercase) {
        choices = character.concat(lowerLetters, upperLetters);
    }
    else if (answerNumber && answerLowercase && answerUppercase) {
        choices = number.concat(lowerLetters, upperLetters);
    }
    // Else if possible combinations for 2 answers
    else if (answerCharacter && answerNumber) {
        choices = character.concat(number);

    } 
    else if (answerCharacter && answerLowercase) {
        choices = character.concat(lowerLetters);

    } 
    else if (answerCharacter && answerUppercase) {
        choices = character.concat(upperLetters);
    }
    else if (answerLowercase && answerNumber) {
        choices = lowerLetters.concat(number);

    } 
    else if (answerLowercase && answerUppercase) {
        choices = lowerLetters.concat(upperLetters);

    } 
    else if (answerNumber && answerUppercase) {
        choices = number.concat(upperLetters);
    }
    // Else if possible 1 answer responses
    else if (answerCharacter) {
        choices = character;
    }
    else if (answerNumber) {
        choices = number;
    }
    else if (answerLowercase) {
        choices = lowerLetters;
    }
    else if (answerUppercase) {
        choices = upperLetters;
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < answer; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // Conversion to string and connecting of the array. Found this from a W3School answer
    var newPassword = password.join("");
    UserInput(newPassword);
    return newPassword;

  }
  // This puts the password value into the textbox
  // Changed function input to use textcontent
  function UserInput(newPassword) {
      document.getElementById("password").textContent = newPassword;
  
  }
  

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  