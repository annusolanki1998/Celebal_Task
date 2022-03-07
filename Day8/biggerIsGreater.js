function biggerIsGreater(w) {
    w = w.split('')
    
    let i = w.length - 1;
    while (i > 0 && w[i - 1] >= w[i])
        i--;

    if (i <= 0)
        return 'no answer';
    
    
    let j = w.length - 1;
    while (w[j] <= w[i - 1])
        j--;

    
    const temp = w[i - 1];
    w[i - 1] = w[j];
    w[j] = temp;
    
    
    j = w.length - 1;
    while (i < j) {
        const temp = w[i];
        w[i] = w[j];
        w[j] = temp;
        i++;
        j--;
    }

    return w.join('');
}

let x = biggerIsGreater("dkhc")
console.log(x);