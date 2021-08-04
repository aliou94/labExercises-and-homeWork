const prompt = require('prompt-sync')();
const userInput = prompt('pls enter a word');

let arrayOfLetters = userInput.split('')
let arrayOfVowels = ["a", "e", "i", "o","u"]
let count = []

for(i=0;i<arrayOfLetters .length;i++)
    if(arrayOfVowels.includes(arrayOfLetters[i]))count.push(arrayOfLetters[i])
  


console.log(`the total number of vowels is ${count.length}, and the total number of constants is ${arrayOfLetters.length-count.length}`)