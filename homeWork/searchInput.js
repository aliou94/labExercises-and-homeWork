const prompt = require('prompt-sync')();
const userInput = prompt('select a number between 1-100');


var found = false

var array = [12, 32 ,4, 9, 5, -1,100,-5]

for(i=0; i<array.length-1;i++){
    if(parseFloat(userInput)==array[i]){
        found=true;
        break;
    }
}

found ? console.log(`number found in ${i+1} position`) : console.log(`number not found`)