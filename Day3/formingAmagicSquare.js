
function formingAMagicSquare(a) {
    
    const possibleMatrices = [
        [[8,1,6],[3,5,7],[4,9,2]],
        [[6,1,8],[7,5,3],[2,9,4]],
        [[4,9,2],[3,5,7],[8,1,6]],
        [[2,9,4],[7,5,3],[6,1,8]],
        [[8,3,4],[1,5,9],[6,7,2]],
        [[4,3,8],[9,5,1],[2,7,6]],
        [[6,7,2],[1,5,9],[8,3,4]],
        [[2,7,6],[9,5,1],[4,3,8]],
]

let maxValue =Number.MAX_VALUE;
for(let k =0; k<8; k++){
    let min = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            min += Math.abs(a[i][j] - possibleMatrices[k][i][j] )
        }
    }
    maxValue = Math.min(maxValue , min)
}
return maxValue
}

let x = formingAMagicSquare( [[4, 8, 2],[4, 5, 7],[6, 1, 6]]);
console.log(x);
