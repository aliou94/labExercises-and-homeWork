const prompt = require('prompt-sync')();
const userInput = prompt('enter a number');


let array = [2, 3 , 4, 11 , 12, 5,5,5, 2, 16, 9, 1]
var position = []

for(let i=0; i<array.length; i++){
  
 if (array[i]===parseFloat(userInput)) position.push(i)
   
}
console.log(`userInput:${userInput} it occurrs ${position.length} times at index ${position}`)

for(i=0;i<position.length;i++) console.log(`the corresponding positions are ${position[i]+1}`)