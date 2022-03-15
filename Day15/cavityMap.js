function cavityMap (map) {

    let size = map.length-1;
    let cavs = [];

    for (let i = 1; i < size; i++) {
        for (let j = 1; j < size; j++) {
            let curr = map[i][j];
            if ( curr > map[i-1][j] && curr > map[i+1][j] ){
                if (curr > map[i][j-1] && curr > map[i][j+1]) {
                    cavs.push([i,j]);
                }
            }

        };
    };

    cavs.forEach(function (cavity){
        map[cavity[0]][cavity[1]] = 'X';
    })

    return map;
}
