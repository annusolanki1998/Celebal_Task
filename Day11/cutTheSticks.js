function cutTheSticks(obj) {
    let cuts = [];
    let cu = 1;
    while (cu !== 0) {
        cu = 0
        let c = Number.MAX_VALUE;
        for (var i in obj) {
            if (obj[i] < c && obj[i] !== 0) {
                c = obj[i];
            }
        }
        console.log(obj)
        for (var i in obj) {
            if (obj[i] >= c) {
                obj[i] = obj[i] - c;
                cu = cu + 1;
            }
        }
        if (cu !== 0)
            cuts.push(cu);
    }

    return cuts ; 
}