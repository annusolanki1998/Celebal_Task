
function encryp(s) {
    let height = parseInt(Math.ceil(Math.sqrt(s.length)), 10);
    let width = parseInt(Math.floor(Math.sqrt(s.length)), 10);
    let result = '';
    for(let i = 0; i < height; i++) {
        let j = i;
        while(j < s.length) {
            result += s[j];
            j += height;
        }
        result += ' ';
    }
    return result
}

let a = encryp('haveaniceday')
console.log(a);
