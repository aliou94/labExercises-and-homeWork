

let wordArray = ['Mango', 'pineapple', 'orange']

let checkLength = (array)=> {

    for(i=0; i<array.length-1; i++){

        for(j=i+1; j<array.length; j++){
             if(array[i].length>array[j].length){
               temp = array[j]
               array[j]= array[i]
               array[i]= temp
               break
             }
        }
       
        }

        console.log(`the longest word is ${array[array.length-1]} it has ${array[array.length-1].length} letters`)
}

console.log(checkLength(wordArray))


