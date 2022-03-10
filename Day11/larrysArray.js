function larrysArray(A) {
    let count = 0;
    for (let i = 1; i < A.length; i++) {
        for (let k = 0; k < i; k++) {
            if (A[k] > A[i]) count++;
        }
    }
    return count % 2 === 0 ? "YES": "NO";
}