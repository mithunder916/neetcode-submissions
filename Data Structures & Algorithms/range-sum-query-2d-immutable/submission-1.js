class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
        this.prefixSums = [];
        for (let row of matrix) {
            let sum = 0;
            const rowSums = [];
            for (let num of row) {
                sum += num;
                rowSums.push(sum);
            }
            this.prefixSums.push(rowSums);
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    // get sum for col1 -> col2 for every row from row1 -> row2, then aggregate those
    // for O(1) time complexity we should precompute sums across arrays in a flat list, then convert coordinates to an index?
    sumRegion(row1, col1, row2, col2) {
        let sum = 0;
        console.log(this.prefixSums)
        for (let i = row1; i < row2 + 1; i++) {
            sum += this.prefixSums[i][col2] - (col1 > 0 ? this.prefixSums[i][col1 - 1] : 0)
        }
        return sum;
        // const left = (row1 * numRows) + col1;
        // const right = (row2 * numRows) + col2;
        // console.log(left, right, this.prefixSums)

        // return this.prefixSums[right] - (left > 0 ? this.prefixSums[left - 1] : 0);
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
