function gradingStudents(grades) {
    return grades.map((n) => {
        let diff = 5 - (n % 5);
        if(diff < 3 && n >= 38) {
            n += diff;
        }
        return n;
    })
}
let gradArr=[40,73,67,38,33]
console.log(gradingStudents(gradArr))