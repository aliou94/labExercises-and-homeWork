const prompt = require('prompt-sync')();
const userInput = prompt('pls enter a word');





let checkPalaindrom = (word)=>{
     let reverseWord = word.split('').reverse().join("")
     return word === reverseWord ? console.log(`${userInput} is a palaindrome`): console.log(`${userInput} is not a palaindrome`)

}


checkPalaindrom(userInput)