function findTheMedian(arr, n) {
    arr.sort((a, b) => a - b);
    return arr[(n - 1)/2];
}

let p = findTheMedian([0,1, 2, 4, 6, 5, 3],7);

console.log(p);