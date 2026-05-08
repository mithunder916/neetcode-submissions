class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // DFS from each land tile, looking for paths through other 1s
        // once you're done exploring all possibilities, increment island count
        // convert 1s to 0 after traversing to avoid retreading
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let numIslands = 0;

        function explore(row, col) {
            if (row < 0 || col < 0 || row === ROWS || col === COLS || grid[row][col] === "0") {
                return false;
            }
            // sink island
            grid[row][col] = "0";

            explore(row + 1, col);
            explore(row - 1, col);
            explore(row, col + 1);
            explore(row, col - 1);
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === "1") {
                    explore(i, j);
                    numIslands++;
                }
            }
        }

        return numIslands;
    }
}
