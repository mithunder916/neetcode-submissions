class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        // calculate prefix sum
        // for each index of nums, compare subarray sum from index - end with prefix sum on left
            // if equal, return that index
            // if none found, return -1
            // O(n) linear scan (2n)

        const prefixSums = [];
        let sum = 0;
        for (let num of nums) {
            sum += num;
            prefixSums.push(sum);
        }

        for (let i = 0; i < nums.length; i++) {
            let rightSum = prefixSums[nums.length - 1] - prefixSums[i]
            if (rightSum === (i > 0 ? prefixSums[i - 1] : 0)) return i;
        }

        return -1;
    }
}
