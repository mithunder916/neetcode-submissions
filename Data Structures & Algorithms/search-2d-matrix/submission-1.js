class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // treat matrix like one long sorted array
        // adjust indexes based on rows and columns
        // row = Math.floor(mid / row.length)
        // col = mid % row.length
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        let left = 0;
        let right = (numRows * numCols) - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / numCols);
            const col = mid % numCols;

            if (target === matrix[row][col]) return true;
            else if (target > matrix[row][col]) left = mid + 1;
            else right = mid -1;
        }

        return false;


        // run binary search on each array until you find target
        // check bounds of each array and only run search on one where the target is within bounds
        // function binarySearch(row) {
        //     let left = 0;
        //     let right = row.length - 1;

        //     while (left <= right) {
        //         const mid = Math.floor((left + right) / 2);
        //         if (target === row[mid]) return true;
        //         else if (target > row[mid]) {
        //             left = mid + 1;
        //         } else {
        //             right = mid - 1;
        //         }
        //     }
        //     return false;
        // }

        // for (const row of matrix) {
        //     if (target >= row[0] && target <= row[row.length - 1]) {
        //         // run binarySearch on row
        //         return binarySearch(row);
        //     }
        // }

        // return false;
    }
}
