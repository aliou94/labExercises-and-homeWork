const prompt = require('prompt-sync')();
const userInput = prompt('pls enter a character');

let string = "hello world"
 position = []

for(i=0;i<string.length;i++){

   if( string[i]===userInput )  position.push(i+1)
}
console.log(`the user input is ${userInput}, it occurs ${position.length} times at  position ${position}`)