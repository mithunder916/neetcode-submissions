class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        // swap starting point color
        // check neighbors
            // if their color is same as OG start point color:
                // swap color and do the same thing recursively
            // if not, stop
        const numRows = image.length;
        const numCols = image[0].length;
        const originalColor = image[sr][sc];
        const visited = new Set();

        function swapColors(r, c) {
            // if not valid swap point, exit
            if (r < 0 || c < 0 || r >= numRows || c >= numCols || image[r][c] !== originalColor || visited.has(`${r}-${c}`)) {
                return;
            } else {
                image[r][c] = color;
            }

            visited.add(`${r}-${c}`);

            swapColors(r - 1, c);
            swapColors(r + 1, c);
            swapColors(r, c - 1);
            swapColors(r, c + 1);

        }

        swapColors(sr, sc);
        return image;
    }
}
