class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // 0 1 8 11 17 22 28
    // if prefix sum one to the left equals
    // prefix sum[n - 1] - prefix sum[i]
    pivotIndex(nums) {
        let sum = 0;
        const prefixSums = [];
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            prefixSums.push(sum)
        }

        for (let j = 0; j < nums.length; j++) {
            const leftSum = j > 0 ? prefixSums[j - 1] : 0;
            const rightSum = prefixSums[nums.length - 1] - prefixSums[j];
            if (leftSum === rightSum) return j;
        }

        return -1;
    }
}
