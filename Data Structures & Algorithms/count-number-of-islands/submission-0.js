class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // matrix DFS; increment island count
        // if out of bounds or a 0 is encountered, stop traversing
        // track visited coordinates, don't traverse again
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();
        let numIslands = 0;

        function dfs(r, c) {
            const key = `${r}-${c}`;
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === "0" || visited.has(key)) {
                return;
            }

            visited.add(key);
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === "1" && !visited.has(`${i}-${j}`)) {
                    dfs(i, j)
                    numIslands++;
                }
            }
        }
        return numIslands;
    }
}
