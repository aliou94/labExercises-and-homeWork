// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

// starter code
// function sym(args) {
//     return args;
//   }
  
//   sym([1, 2, 3], [5, 2, 1, 4]);


function sym() {

    let args  = []

    for(let i=0; i<arguments.length;i++){
        args.push(arguments[i])
    }


let symDiff = (arrayOne, arrayTwo)=>{

    let result = []
       
    arrayOne.forEach(element => {
     if(arrayTwo.indexOf(element)<0 && result.indexOf(element)<0){
         result.push(element)
     }
    });

    arrayTwo.forEach((element)=>{
        if(arrayOne.indexOf(element)<0 && arrayOne.indexOf(element)<0){
            result.push(element)
        }
    })

   return result
  
}



return args.reduce(symDiff)



  }
  
console.log( sym([1, 2, 3], [5, 2, 1, 4]))