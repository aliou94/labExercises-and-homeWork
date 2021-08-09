const prompt = require('prompt-sync')();
const userInput = prompt('pls select a mathematical operation');
let num1 = prompt('pls enter a number');
let num2 = prompt('pls enter a number');



// console.log(userInput, num1 , num2)


let clalculator = (operation)=>{

  let answer 
    switch(mathOperation=operation) {
        case "sum":
         answer = +num1 + +num2
          break;
        case "subtract":
         answer = +num1- +num2
          break;
          case "divide":
           answer = +num1 / +num2
            break;
            case "multiply":
               answer = +num1*+num2
                break;
              case "average":
              answer = ( +num1 + +num2)/2
              break;
              case "exit":
                answer = "exit"
                break;
              
      }

      console.log(answer)
}

clalculator(userInput)