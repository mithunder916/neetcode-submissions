class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        // matrix DFS; look for first letter in word and if found, search
        // look for letters in order and if found, keep going
            // if a letter is already used for the word, mark it visited

        const ROWS = board.length;
        const COLS = board[0].length;
        let found = false;
        
        function findWord(r, c, letterIndex, visited) {
            const key = `${r}-${c}`;
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== word[letterIndex] || visited.has(key)) {
                // path failed
                return;
            }
            letterIndex++;
            if (letterIndex === word.length) found = true;

            visited.add(key);
            findWord(r + 1, c, letterIndex, visited);
            findWord(r - 1, c, letterIndex, visited);
            findWord(r, c + 1, letterIndex, visited);
            findWord(r, c - 1, letterIndex, visited);
            visited.delete(key)
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (board[i][j] === word[0]) {
                    findWord(i, j, 0, new Set());
                }
            }
        }

        return found;
    }
}
