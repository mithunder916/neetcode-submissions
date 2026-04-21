class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // run binary search on each array until you find target
        // check bounds of each array and only run search on one where the target is within bounds
        function binarySearch(row) {
            let left = 0;
            let right = row.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (target === row[mid]) return true;
                else if (target > row[mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return false;
        }

        for (const row of matrix) {
            if (target >= row[0] && target <= row[row.length - 1]) {
                // run binarySearch on row
                return binarySearch(row);
            }
        }

        return false;
    }
}
