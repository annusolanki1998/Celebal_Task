function processData(input) {
    let lines = input.split('\n');
    let height = parseFloat(input[0]);
    let width = parseFloat(input[1]);
    lines.splice(0, 2);
    
    
    let matrix = lines.map(function(line) {
        return line.split(' ').map(parseFloat);
    });
    let visited = lines.map(function(line) {
        return [];
    });
    let largest = 0, largestCells, current, cells;
    let directions = [
        { x: -1, y: -1 }, // top left
        { x: 0, y: -1 }, // top 
        { x: 1, y: -1 }, // top right
        { x: 1, y: 0 }, // right
        { x: 1, y: 1 }, // bottom right
        { x: 0, y: 1 }, // bottom
        { x: -1, y: 1 }, // bottom left
        { x: -1, y: 0 }, // left
    ];
    
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= width || y >= height || visited[y][x]) return 0;
        visited[y][x] = true;
        if (!matrix[y][x]) return 0;
    
        cells.push({
            x: x, 
            y: y,
        });
        return directions.reduce(function(acc, direction) {
            return acc + dfs(x + direction.x, y + direction.y);
        }, 1);
    }

    matrix.forEach(function(row, y) {
        row.forEach(function(val, x) {
            if (visited[y][x]) return;
            current = 0;
            cells = [];
            var area = dfs(x, y);
            
            if (area > largest) {
                largest = area;
                largestCells = cells;
            }
        });
    })
    
    console.log(largest);
} 
