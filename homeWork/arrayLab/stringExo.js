const prompt = require('prompt-sync')();
const userInput = prompt('pls enter a character');
let string = "hello world"
 position = []

if(string.includes(userInput)){
    for(i=0;i<string.length;i++){
        if( string.charAt(i) ===userInput )  position.push(i+1)
     }
     console.log(`the user input is ${userInput}, it occurs ${position.length} times at  position ${position}`)
} else{
    console.log(`${userInput}: not found`)
}


