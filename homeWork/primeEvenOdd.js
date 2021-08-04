for (i=1;i<=20;i++){
  for(j=i;j<=i;j++){
    if(j%2===0){
        if(j%i==0 && j%2!==0) console.log("prime:",j)
        console.log("even:",i)
    }else {
        if(j%i==0 && j%3!==0 && j!==1) {
            console.log("prime:",j)
        } else{
            console.log("odd:",i)
        } 
    }
  }
}