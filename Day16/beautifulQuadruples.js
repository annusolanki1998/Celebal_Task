
 
    function beautifulQuadruples(a, b, c, d) {

    
        let count = 0;
        let map = {};
    
        let arr = [a, b, c, d];
        arr = arr.sort((a, b) => a - b);
        let MAX = 1000;
        let XOR_MAX = Math.pow(2, 12);
        let A = arr[0];
        let B = arr[1];
        let C = arr[2];
        let D = arr[3];
    
        let totalB = new Array(MAX + 1).fill(0);
        let result = 0;
    
        for (let i = 1; i <= A; i++)
            for (var j = i; j <= B; j++)
                totalB[j]++;
    
        for (let i = 1; i <= MAX; i++)
            totalB[i] += totalB[i - 1];
    
        let countB = new Array(MAX + 1);
    
        for (let y = 0; y < countB.length; y++)
            countB[y] = new Array(XOR_MAX + 1).fill(0);
    
        
    
        for (let i = 1; i <= A; i++)
            for (let j = i; j <= B; j++)
                countB[j][i ^ j] += 1;
    
        for (let i = 0; i <= XOR_MAX; i++)
            for (let j = 1; j <= MAX; j++)
                countB[j][i] += countB[j - 1][i];
    
    
        for (let c = 1; c <= C; c++)
            for (let d = c; d <= D; d++)
                result += (totalB[c] - countB[c][c ^ d]);
    
        return result;
        
    }
        let p = beautifulQuadruples(1, 2, 3, 4)

        console.log(p);