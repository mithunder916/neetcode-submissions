class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        const maxSums = [nums[0]];
        maxSums[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length - 1; i++) {
            maxSums[i] = Math.max(maxSums[i - 1], nums[i] + maxSums[i - 2]);
        }

        const maxSums2 = [nums[1]];
        maxSums2[1] = Math.max(nums[1], nums[2]);

        for (let i = 2; i < nums.length - 1; i++) {
            maxSums2[i] = Math.max(maxSums2[i - 1], nums[i + 1] + maxSums2[i - 2])
        }

        return Math.max(maxSums[maxSums.length - 1], maxSums2[maxSums2.length - 1])
    }
}
