//sorting in ascending order
var arr = [10,-1,8,-2,0]

for(i=0; i<arr.length-1; i++){

    for(j=i+1; j<arr.length;j ++){

        if(arr[i]>arr[j]){
            temp=arr[j]
            arr[j]=arr[i]
            arr[i]= temp
        }
    }
}
console.log("ascendingOrder:"+ arr)

//sorting in descending order
var arr = [10,-1,8,-2,0]

for(i=0; i<arr.length-1; i++){

    for(j=i+1; j<arr.length;j ++){

        if(arr[i]<arr[j]){
            temp=arr[j]
            arr[j]=arr[i]
            arr[i]= temp
        }
    }
}
console.log("descendingOrder"+arr)