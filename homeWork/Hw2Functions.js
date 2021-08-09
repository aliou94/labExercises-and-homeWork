// 1 Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
const maxOfTwoNumbers = (num1, num2) => console.log(Math.max(num1,num2))
maxOfTwoNumbers(5,18)

// 2 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = (num1,num2,num3) => console.log(Math.max(num1,num2,num3))
maxOfThree(5,18,25)

// 3 Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isCharacterAVowel = (character)=>  console.log(
    character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u' 
)

isCharacterAVowel("a")

// 4 Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// let sumArray  = [1,2,3,4]
// let multiplyArray  = [1,2,3,4]

const  sumArray = (array) => {
    let sum  =  0
    for(i=0; i<array.length; i++){
        sum+=array[i]
        
    }
    console.log(sum)
}

sumArray([1,2,3,4])

const multiplyArray = (array) => {
    let multiple  =  1
    for(i=0; i<array.length; i++){
        multiple*=array[i]
        
    }
    console.log(multiple)
}
multiplyArray([1,2,3,4])

// 5 Write a function that returns the number of arguments passed to the function when called.
const numberPassed = (a,b,c) => console.log(numberPassed.length)
numberPassed()

// 6 Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = (string) =>{
    let reverseWord = string.split('').reverse().join("")
     console.log(reverseWord)
}

reverseString("jag testar")

// 7)Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = (array) => {
    var longestWord = array[0]
     for(i=0;i<array.length;i++){
       
         if(longestWord.length < array[i].length){
             longestWord = array[i]
         }
      
     }
     console.log(longestWord)
}
findLongestWord(['Mango', 'pineapple', 'orange', "dad"])

// 8 Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

const filterLongWords= (array, num) => {
    var filterWord = array[num]
    let filteredArray = []
     for(i=0;i<array.length;i++){
       
         if(filterWord.length < array[i].length) filteredArray.push(array[i])
      
     }
     console.log(filteredArray)
}

filterLongWords(['Mango', 'pineapple', 'orange', "dad"], 3)