let arr = [1,2,3,4,5]

function maxmin(arr){
    let minSum = 0;
    let maxSum = 0
    for(i=0;i<arr.length-1;i++){
        minSum = maxSum + arr[i]   
    }
    for(i=0;i<arr.length;i++){
        maxSum = maxSum + arr[i]    
    }
    console.log(minSum,maxSum);
}
let x = maxmin(arr)
console.log(x);