function beautifulTriplets(d, arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const numb1 = arr[i] - d;
        const numb2 = numb1 - d;
        if (arr.includes(numb1) && arr.includes(numb2)) {
            result += 1;
        }
    }
    return result;
}

let x = beautifulTriplets(1, [2,2,3,4,5])
console.log(x);