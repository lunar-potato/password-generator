// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
 function getPasswordOptions() {
  let passLength;

  while(true) {
    passLength = parseInt(prompt(`How long do you want your password to be? (At least 10 characters but no more than 64)`));

    if (isNaN(passLength) || passLength < 10 || length > 64) {
      alert(`Your password length does not meet required range. Enter numbers from 10-64. :D`);
    } else {
      break;
    }
  }
  
  let specialCharacters = confirm(`Do you want to include special characters?`);
  let numericCharacters = confirm(`Do you want to include numeric characters?`);
  let lowerCasedCharacters = confirm(`Do you want to include lowercased characters?`);
  let upperCasedCharacters = confirm(`Do you want to include uppercased characters?`);

  while(!lowerCasedCharacters && !upperCasedCharacters && !numericCharacters && !specialCharacters) {
    alert(`Please select at least one character type for your password.`);
    lowerCasedCharacters = confirm(`Do you want to include lowercased characters?`);
    upperCasedCharacters = confirm(`Do you want to include uppercased characters?`);
    numericCharacters = confirm(`Do you want to include numeric characters?`);
    specialCharacters = confirm(`Do you want to include special characters?`);
  }
}
  

// Function for getting a random element from an array
function getRandom(arr) {
  
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);