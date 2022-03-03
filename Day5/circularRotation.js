function rotate(array, stepsToShift) {

    for (let i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
    }

    return array;
}

let x = rotate([3,5,4,6,2],2)
console.log(x);