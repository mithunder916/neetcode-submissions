class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        // matrix DFS
        // search from each tile with the starting letter; recursively check all directions
        // track visited tiles to avoid repeating
            // remove these from visited when backtracking
        const ROWS = board.length;
        const COLS = board[0].length;
        const visited = new Set();

        function findPath(row, column, letterIndex) {
            if (letterIndex === word.length) return true;
            const key = `${row}-${column}`;
            if (row < 0 || column < 0 || row === ROWS || column === COLS || board[row][column] !== word[letterIndex] || visited.has(key)) {
                return false;
            }
            visited.add(key);

            // try all paths
            const result = findPath(row + 1, column, letterIndex + 1) || findPath(row - 1, column, letterIndex + 1) || findPath(row, column + 1, letterIndex + 1) || findPath(row, column - 1, letterIndex + 1);

            visited.delete(key);
            return result;
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (board[i][j] === word[0]) {
                    if (findPath(i, j, 0)) return true;
                }
            }
        }
        return false;
    }
}
