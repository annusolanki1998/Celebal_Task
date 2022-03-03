function pairs(k, arr) {
    const points = new Set(arr);
    let pairs = 0;
    for (let i = 0; i < arr.length; i++) {
      if (points.has(arr[i] - k)) {
        pairs++;
      }
    }
    return pairs;
  }
  
let x = pairs(2, [1, 5, 3, 4, 2])
console.log(x);