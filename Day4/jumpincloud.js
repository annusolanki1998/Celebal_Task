let arr = [0, 0, 0, 1, 0, 0, 1, 0]
let stepsArray = [];

function jumpingOnClouds(c) {
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      if (c[i] === c[i + 1])
        stepsArray.push(c[i + 1])
    } else {
      stepsArray.push(c[i])
    }
  }

  return stepsArray.length

}
let result = jumpingOnClouds(arr);
console.log(result);