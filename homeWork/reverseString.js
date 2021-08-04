const prompt = require('prompt-sync')();
const userInput = prompt('pls enter a word');

let reverseWord = userInput.split('').reverse().join("")

console.log(reverseWord)

userInput === reverseWord ?console.log(`${userInput} is a palaindrome`):console.log(`${userInput} is not a palaindrome`)