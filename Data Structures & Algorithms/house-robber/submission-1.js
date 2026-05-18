class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // determine max between robbing i + i + 2 vs i + 1;
        if (nums.length === 1) return nums[0];

        const dp = [nums[0]];
        dp[1] = Math.max(nums[0], nums[1])

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }

        console.log(dp)
        return dp[nums.length - 1];
    }
}
