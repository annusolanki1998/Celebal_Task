function palindromeIndex(s) {
    const reverse = (string) => s.split("").reverse().join("");
    var reversed = reverse(s);
    if (reversed === s) {
        return -1;
    } else {
        for (let i = 0; i < s.length; i++) {
            let myArray = s.split("");
            if ((myArray.splice(i, 1).join("")) === reverse(myArray.splice(i, 1).join(""))) {
                return i;
            } 
        } ;
    }

}

console.log(palindromeIndex("abbaab"))