function extraLongFactorials(n) {
    let res = [];
    res[0] = 1;
    let l = 1;
    for (let i = 2; i <= n; i++) {
        l = multiply(res, i, l)
    }
    console.log(res.reverse().join(""))    
}
function multiply(res, i, l) {
    let carry = 0;
    for (let ii = 0; ii < l; ii++) {
        let next = (res[ii] * i) + carry;
        res[ii] = next % 10;
        carry = parseInt(next / 10);
    }
    while (carry) {
        res[l] = carry % 10;
        carry = parseInt(carry / 10);
        l++;
    }
    return l;
}
let x  = extraLongFactorials(25)
console.log(x);