function equalizeArray(arr) {
    let arrObj = {};
    let maxCount = 0;
  for (let num of arr) {
      arrObj[num] = arrObj[num] + 1 || 1;
    }
  for (let value in arrObj) {
      if (arrObj[value] > maxCount) {
        maxCount = arrObj[value];
      }
    }
  return (arr.length - maxCount);
  }

  let x = equalizeArray([1,2,2,3])
  console.log(x);