function countPairs(n) {
    return (n * (n - 1)) / 2;
}
function sherlockAndAnagrams(s) {
    const map = new Map();
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i; j < n; ++j) {
            const sub = s.substring(i, j + 1);
            const key = sub.split('').sort().join('');
            if (map.has(key)) {
               map.set(key, map.get(key) + 1); 
            } else {
               map.set(key, 1);
            }
        }
    }  
    let result = 0;
    for (const [key, value] of map) {
        if (value > 1) {
         result += countPairs(value);    
        }
    }
    return result;
}

let x = sherlockAndAnagrams('kkkk')
console.log(x);
