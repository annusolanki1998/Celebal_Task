let arr = [2, 4, 3, 4, 3, 4, 1, 2, 1, 3, 4, 2]


function Birds(arr) {
    let Largest = 1;
    let count = Largest;
    let Id = 0

    arr.sort((a, b) => { a - b })
    console.log(arr.sort((a, b) => {a-b}));

    for (let i = 0; i < arr.length; i++) {
        Largest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;

        if (Largest > count) {
            count = Largest;
            Id = arr[i]
        }
    }
    return Id;
}
console.log(Birds(arr));